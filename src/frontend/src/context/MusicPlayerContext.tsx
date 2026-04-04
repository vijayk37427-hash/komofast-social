import {
  type ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import type { Song } from "../components/modals/MusicPickerPanel";
import { ALL_SONGS } from "../components/modals/MusicPickerPanel";

type RepeatMode = "none" | "one" | "all";

interface MusicPlayerContextValue {
  currentSong: Song | null;
  playlist: Song[];
  isPlaying: boolean;
  progress: number;
  currentTime: number;
  volume: number;
  isShuffled: boolean;
  repeatMode: RepeatMode;
  likedSongs: Set<string>;
  fullPlayerOpen: boolean;
  playSong: (song: Song, playlist?: Song[]) => void;
  pauseToggle: () => void;
  seekTo: (progress: number) => void;
  next: () => void;
  prev: () => void;
  setVolume: (v: number) => void;
  toggleShuffle: () => void;
  cycleRepeat: () => void;
  toggleLike: (id: string) => void;
  openFullPlayer: () => void;
  closeFullPlayer: () => void;
  close: () => void;
}

const MusicPlayerContext = createContext<MusicPlayerContextValue | null>(null);

// Parse duration string e.g. "3:45" -> seconds
function parseDuration(dur: string) {
  const [m, s] = dur.split(":").map(Number);
  return (m || 0) * 60 + (s || 0);
}

export function MusicPlayerProvider({ children }: { children: ReactNode }) {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [playlist, setPlaylist] = useState<Song[]>(ALL_SONGS);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolumeState] = useState(0.8);
  const [isShuffled, setIsShuffled] = useState(false);
  const [repeatMode, setRepeatMode] = useState<RepeatMode>("none");
  const [likedSongs, setLikedSongs] = useState<Set<string>>(new Set());
  const [fullPlayerOpen, setFullPlayerOpen] = useState(false);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const totalDurationRef = useRef(240);
  // Store mutable refs to avoid stale closures in timer callbacks
  const isPlayingRef = useRef(isPlaying);
  const currentTimeRef = useRef(currentTime);

  useEffect(() => {
    isPlayingRef.current = isPlaying;
  }, [isPlaying]);

  useEffect(() => {
    currentTimeRef.current = currentTime;
  }, [currentTime]);

  const stopTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const startTimer = useCallback(() => {
    stopTimer();
    timerRef.current = setInterval(() => {
      setCurrentTime((prev) => {
        const total = totalDurationRef.current;
        const next = prev + 1;
        if (next >= total) {
          return total;
        }
        setProgress(next / total);
        return next;
      });
    }, 1000);
  }, [stopTimer]);

  const getNextSongFromPlaylist = useCallback(
    (song: Song, pl: Song[], shuffled: boolean, direction: 1 | -1) => {
      const pool = shuffled ? [...pl].sort(() => Math.random() - 0.5) : pl;
      const idx = pool.findIndex((s) => s.id === song.id);
      const nextIdx = (idx + direction + pool.length) % pool.length;
      return pool[nextIdx] ?? null;
    },
    [],
  );

  // Handle song end
  // biome-ignore lint/correctness/useExhaustiveDependencies: startTimer is stable; getNextSongFromPlaylist is stable
  useEffect(() => {
    if (currentTime >= totalDurationRef.current && isPlaying) {
      stopTimer();
      if (repeatMode === "one") {
        setCurrentTime(0);
        setProgress(0);
        startTimer();
      } else {
        setIsPlaying(false);
        if (repeatMode === "all" || playlist.length > 1) {
          setCurrentSong((song) => {
            if (!song) return song;
            const nextSong = getNextSongFromPlaylist(
              song,
              playlist,
              isShuffled,
              1,
            );
            if (!nextSong) return song;
            totalDurationRef.current = parseDuration(nextSong.duration);
            setTimeout(() => {
              setCurrentTime(0);
              setProgress(0);
              setIsPlaying(true);
              startTimer();
            }, 300);
            return nextSong;
          });
        }
      }
    }
  }, [currentTime, isPlaying, repeatMode, playlist, isShuffled, stopTimer]);

  const playSong = useCallback(
    (song: Song, newPlaylist?: Song[]) => {
      stopTimer();
      setCurrentSong(song);
      if (newPlaylist) setPlaylist(newPlaylist);
      totalDurationRef.current = parseDuration(song.duration);
      setCurrentTime(0);
      setProgress(0);
      setIsPlaying(true);
      startTimer();
    },
    [startTimer, stopTimer],
  );

  const pauseToggle = useCallback(() => {
    setIsPlaying((prev) => {
      if (prev) {
        stopTimer();
      } else {
        startTimer();
      }
      return !prev;
    });
  }, [startTimer, stopTimer]);

  const seekTo = useCallback(
    (p: number) => {
      const clamped = Math.max(0, Math.min(1, p));
      const total = totalDurationRef.current;
      setProgress(clamped);
      setCurrentTime(Math.floor(clamped * total));
      if (isPlayingRef.current) {
        stopTimer();
        startTimer();
      }
    },
    [startTimer, stopTimer],
  );

  const next = useCallback(() => {
    setCurrentSong((song) => {
      if (!song) return song;
      const nextSong = getNextSongFromPlaylist(song, playlist, isShuffled, 1);
      if (!nextSong) return song;
      stopTimer();
      totalDurationRef.current = parseDuration(nextSong.duration);
      setTimeout(() => {
        setCurrentTime(0);
        setProgress(0);
        setIsPlaying(true);
        startTimer();
      }, 0);
      return nextSong;
    });
  }, [getNextSongFromPlaylist, playlist, isShuffled, startTimer, stopTimer]);

  const prev = useCallback(() => {
    if (currentTimeRef.current > 3) {
      stopTimer();
      setCurrentTime(0);
      setProgress(0);
      if (isPlayingRef.current) startTimer();
    } else {
      setCurrentSong((song) => {
        if (!song) return song;
        const prevSong = getNextSongFromPlaylist(
          song,
          playlist,
          isShuffled,
          -1,
        );
        if (!prevSong) return song;
        stopTimer();
        totalDurationRef.current = parseDuration(prevSong.duration);
        setTimeout(() => {
          setCurrentTime(0);
          setProgress(0);
          setIsPlaying(true);
          startTimer();
        }, 0);
        return prevSong;
      });
    }
  }, [getNextSongFromPlaylist, playlist, isShuffled, startTimer, stopTimer]);

  const setVolume = useCallback((v: number) => {
    setVolumeState(Math.max(0, Math.min(1, v)));
  }, []);

  const toggleShuffle = useCallback(() => setIsShuffled((p) => !p), []);

  const cycleRepeat = useCallback(() => {
    setRepeatMode((p) => (p === "none" ? "all" : p === "all" ? "one" : "none"));
  }, []);

  const toggleLike = useCallback((id: string) => {
    setLikedSongs((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const openFullPlayer = useCallback(() => setFullPlayerOpen(true), []);
  const closeFullPlayer = useCallback(() => setFullPlayerOpen(false), []);

  const close = useCallback(() => {
    stopTimer();
    setCurrentSong(null);
    setIsPlaying(false);
    setProgress(0);
    setCurrentTime(0);
    setFullPlayerOpen(false);
  }, [stopTimer]);

  useEffect(() => () => stopTimer(), [stopTimer]);

  return (
    <MusicPlayerContext.Provider
      value={{
        currentSong,
        playlist,
        isPlaying,
        progress,
        currentTime,
        volume,
        isShuffled,
        repeatMode,
        likedSongs,
        fullPlayerOpen,
        playSong,
        pauseToggle,
        seekTo,
        next,
        prev,
        setVolume,
        toggleShuffle,
        cycleRepeat,
        toggleLike,
        openFullPlayer,
        closeFullPlayer,
        close,
      }}
    >
      {children}
    </MusicPlayerContext.Provider>
  );
}

export function useMusicPlayer() {
  const ctx = useContext(MusicPlayerContext);
  if (!ctx)
    throw new Error("useMusicPlayer must be used within MusicPlayerProvider");
  return ctx;
}
