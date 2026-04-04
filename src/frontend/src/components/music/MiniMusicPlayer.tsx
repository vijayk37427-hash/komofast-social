import {
  ChevronUp,
  Heart,
  Music,
  Pause,
  Play,
  SkipBack,
  SkipForward,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useMusicPlayer } from "../../context/MusicPlayerContext";

// Deterministic category gradient
function songGradient(category: string) {
  switch (category) {
    case "Bollywood":
      return "linear-gradient(135deg, #a855f7, #ec4899)";
    case "Trending":
      return "linear-gradient(135deg, #3b82f6, #a855f7)";
    case "Romantic":
      return "linear-gradient(135deg, #ec4899, #f43f5e)";
    case "Devotional":
      return "linear-gradient(135deg, #f97316, #eab308)";
    case "Bhojpuri":
      return "linear-gradient(135deg, #f97316, #ef4444)";
    case "Pop":
      return "linear-gradient(135deg, #06b6d4, #3b82f6)";
    case "Hip-Hop":
      return "linear-gradient(135deg, #84cc16, #eab308)";
    default:
      return "linear-gradient(135deg, #a855f7, #3b82f6)";
  }
}

export default function MiniMusicPlayer() {
  const {
    currentSong,
    isPlaying,
    progress,
    likedSongs,
    pauseToggle,
    next,
    prev,
    toggleLike,
    openFullPlayer,
    close,
    seekTo,
  } = useMusicPlayer();

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const p = (e.clientX - rect.left) / rect.width;
    seekTo(p);
  };

  const isLiked = currentSong ? likedSongs.has(currentSong.id) : false;
  const gradient = currentSong
    ? songGradient(currentSong.category)
    : "linear-gradient(135deg, #a855f7, #3b82f6)";

  return (
    <AnimatePresence>
      {currentSong && (
        <motion.div
          data-ocid="music_player.mini.panel"
          className="fixed left-0 right-0 z-50"
          style={{ bottom: "64px" }}
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 38 }}
        >
          {/* Thin progress bar at very top */}
          <div
            role="slider"
            aria-label="Song progress"
            aria-valuenow={Math.round(progress * 100)}
            aria-valuemin={0}
            aria-valuemax={100}
            tabIndex={0}
            data-ocid="music_player.mini.progress"
            className="h-0.5 cursor-pointer"
            style={{ background: "rgba(255,255,255,0.12)" }}
            onClick={handleProgressClick}
            onKeyDown={(e) => {
              if (e.key === "ArrowRight") seekTo(Math.min(1, progress + 0.05));
              if (e.key === "ArrowLeft") seekTo(Math.max(0, progress - 0.05));
            }}
          >
            <motion.div
              className="h-full"
              style={{ background: gradient, width: `${progress * 100}%` }}
              animate={{ width: `${progress * 100}%` }}
              transition={{ duration: 0.3, ease: "linear" }}
            />
          </div>

          {/* Main bar */}
          <div
            className="flex items-center gap-3 px-3 py-2"
            style={{
              background: "rgba(12,10,22,0.94)",
              backdropFilter: "blur(24px)",
              borderTop: "1px solid rgba(168,85,247,0.2)",
              boxShadow: "0 -4px 32px rgba(168,85,247,0.18)",
            }}
          >
            {/* Rotating album art disc */}
            <button
              type="button"
              data-ocid="music_player.mini.open_modal_button"
              onClick={openFullPlayer}
              className="flex-shrink-0 relative"
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center shadow-lg"
                style={{
                  background: gradient,
                  animation: isPlaying
                    ? "spin-slow 4s linear infinite"
                    : "none",
                  boxShadow: isPlaying
                    ? "0 0 16px rgba(168,85,247,0.5)"
                    : undefined,
                }}
              >
                <Music size={16} className="text-white" />
              </div>
              {/* Center dot */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-2.5 h-2.5 rounded-full bg-[#0c0a16] border border-white/20" />
              </div>
            </button>

            {/* Song info (marquee if long) */}
            <button
              type="button"
              data-ocid="music_player.mini.song_info"
              className="flex-1 min-w-0 text-left"
              onClick={openFullPlayer}
            >
              <div className="overflow-hidden">
                <p
                  className="text-white text-[13px] font-semibold whitespace-nowrap"
                  style={{
                    animation:
                      currentSong.title.length > 18
                        ? "marquee 8s linear infinite"
                        : "none",
                    display: "inline-block",
                  }}
                >
                  {currentSong.title}
                </p>
              </div>
              <p className="text-white/50 text-[11px] truncate leading-tight">
                {currentSong.artist}
              </p>
            </button>

            {/* Controls */}
            <div className="flex items-center gap-1 flex-shrink-0">
              {/* Like */}
              <button
                type="button"
                data-ocid="music_player.mini.toggle"
                onClick={() => toggleLike(currentSong.id)}
                className="w-8 h-8 flex items-center justify-center rounded-full transition-transform active:scale-90"
              >
                <Heart
                  size={16}
                  className={
                    isLiked ? "text-red-400 fill-red-400" : "text-white/50"
                  }
                />
              </button>

              {/* Prev */}
              <button
                type="button"
                data-ocid="music_player.mini.prev_button"
                onClick={prev}
                className="w-8 h-8 flex items-center justify-center rounded-full text-white/70 active:scale-90 transition-transform"
              >
                <SkipBack size={16} />
              </button>

              {/* Play/Pause */}
              <button
                type="button"
                data-ocid="music_player.mini.primary_button"
                onClick={pauseToggle}
                className="w-9 h-9 rounded-full flex items-center justify-center shadow-md transition-transform active:scale-90"
                style={{ background: gradient }}
              >
                {isPlaying ? (
                  <Pause size={16} className="text-white" />
                ) : (
                  <Play size={16} className="text-white fill-white ml-0.5" />
                )}
              </button>

              {/* Next */}
              <button
                type="button"
                data-ocid="music_player.mini.next_button"
                onClick={next}
                className="w-8 h-8 flex items-center justify-center rounded-full text-white/70 active:scale-90 transition-transform"
              >
                <SkipForward size={16} />
              </button>

              {/* Expand */}
              <button
                type="button"
                data-ocid="music_player.mini.open_modal_button"
                onClick={openFullPlayer}
                className="w-8 h-8 flex items-center justify-center rounded-full text-white/50 active:scale-90 transition-transform"
              >
                <ChevronUp size={18} />
              </button>

              {/* Close */}
              <button
                type="button"
                data-ocid="music_player.mini.close_button"
                onClick={close}
                className="w-8 h-8 flex items-center justify-center rounded-full text-white/30 active:scale-90 transition-transform"
              >
                <X size={15} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
