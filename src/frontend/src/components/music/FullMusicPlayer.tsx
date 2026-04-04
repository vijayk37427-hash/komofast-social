import { ScrollArea } from "@/components/ui/scroll-area";
import { Slider } from "@/components/ui/slider";
import {
  ChevronDown,
  Heart,
  ListMusic,
  Music,
  Pause,
  Play,
  Repeat,
  Repeat1,
  Share2,
  Shuffle,
  SkipBack,
  SkipForward,
  Volume2,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { toast } from "sonner";
import { useMusicPlayer } from "../../context/MusicPlayerContext";

// Mock lyrics map by song ID
const MOCK_LYRICS: Record<string, { line: string; ts: number }[]> = {
  t1: [
    {
      line: "\u0924\u0947\u0930\u0947 \u0938\u0902\u0917 \u092f\u093e\u0930\u093e, \u0938\u0941\u0939\u093e\u0928\u093e \u0938\u092b\u093c\u0930 \u0939\u094b",
      ts: 0,
    },
    {
      line: "\u0915\u0947\u0938\u0930\u093f\u092f\u093e \u0924\u0947\u0930\u093e \u0907\u0936\u094d\u0915\u093c \u0939\u0948 \u092a\u093f\u092f\u093e",
      ts: 8,
    },
    {
      line: "\u0930\u0902\u0917 \u0915\u0947\u0938\u0930\u093f\u092f\u093e, \u0930\u0902\u0917 \u0915\u0947\u0938\u0930\u093f\u092f\u093e",
      ts: 16,
    },
    {
      line: "\u0939\u094b\u0917\u093e \u0935\u094b \u0938\u092b\u0930, \u091c\u094b \u092d\u0941\u0932\u093e\u092f\u093e \u0928 \u091c\u093e\u090f",
      ts: 24,
    },
    {
      line: "\u0915\u0947\u0938\u0930\u093f\u092f\u093e \u0924\u0947\u0930\u093e \u0907\u0936\u094d\u0915\u093c \u0939\u0948 \u092a\u093f\u092f\u093e",
      ts: 32,
    },
    {
      line: "\u0924\u0947\u0930\u0940 \u092f\u093e\u0926\u094b\u0902 \u092e\u0947\u0902 \u0916\u094b\u092f\u093e \u0930\u0939\u0942\u0901\u0917\u093e \u092e\u0948\u0902",
      ts: 40,
    },
    {
      line: "\u0926\u093f\u0932 \u0915\u0940 \u0906\u0901\u0916\u094b\u0902 \u0938\u0947 \u0930\u094b\u092f\u093e \u0930\u0939\u0942\u0901\u0917\u093e \u092e\u0948\u0902",
      ts: 48,
    },
    {
      line: "\u0915\u0947\u0938\u0930\u093f\u092f\u093e \u0924\u0947\u0930\u093e \u0907\u0936\u094d\u0915\u093c \u0939\u0948 \u092a\u093f\u092f\u093e",
      ts: 56,
    },
  ],
  t5: [
    {
      line: "\u0924\u0941\u092e \u0939\u0940 \u0939\u094b, \u0905\u092c \u0924\u0941\u092e \u0939\u0940 \u0939\u094b",
      ts: 0,
    },
    {
      line: "\u091c\u093c\u093f\u0928\u094d\u0926\u0917\u0940 \u0905\u092c \u0924\u0941\u092e \u0939\u0940 \u0939\u094b",
      ts: 8,
    },
    {
      line: "\u091a\u0948\u0928 \u092d\u0940, \u092e\u0947\u0930\u093e \u0926\u0930\u094d\u0926 \u092d\u0940",
      ts: 16,
    },
    {
      line: "\u092e\u0947\u0930\u0940 \u0906\u0936\u093f\u0915\u093c\u0940 \u0905\u092c \u0924\u0941\u092e \u0939\u0940 \u0939\u094b",
      ts: 24,
    },
    {
      line: "\u0924\u0947\u0930\u0947 \u092c\u093f\u0928\u093e \u091c\u0940\u0928\u093e \u0915\u0939\u093e\u0901",
      ts: 32,
    },
    {
      line: "\u0924\u0947\u0930\u0947 \u092c\u093f\u0928\u093e \u091c\u0940\u0928\u093e \u0915\u0939\u093e\u0901 \u0939\u0948",
      ts: 40,
    },
  ],
  r2: [
    { line: "All of me loves all of you", ts: 0 },
    { line: "Love your curves and all your edges", ts: 8 },
    { line: "All your perfect imperfections", ts: 16 },
    { line: "Give your all to me, I'll give my all to you", ts: 24 },
    { line: "You're my end and my beginning", ts: 32 },
    { line: "Even when I lose I'm winning", ts: 40 },
    { line: "'Cause I give you all of me", ts: 48 },
    { line: "And you give me all of you", ts: 56 },
  ],
  b2: [
    { line: "Pasoori na maan, pasoori na maan", ts: 0 },
    { line: "Vibe karo, vibe karo", ts: 8 },
    { line: "Nai nai nai nai ruk da ae dil", ts: 16 },
    { line: "Nai nai nai nai chup da ae dil", ts: 24 },
    { line: "Pasoori na maan...", ts: 32 },
  ],
  d2: [
    {
      line: "\u0936\u094d\u0930\u0940 \u0939\u0928\u0941\u092e\u093e\u0928 \u091a\u093e\u0932\u0940\u0938\u093e",
      ts: 0,
    },
    {
      line: "\u091c\u092f \u0939\u0928\u0941\u092e\u093e\u0928 \u091c\u094d\u091e\u093e\u0928 \u0917\u0941\u0923 \u0938\u093e\u0917\u0930",
      ts: 8,
    },
    {
      line: "\u091c\u092f \u0915\u092a\u0940\u0938 \u0924\u093f\u0939\u0941\u0901 \u0932\u094b\u0915 \u0909\u091c\u093e\u0917\u0930",
      ts: 16,
    },
    {
      line: "\u0930\u093e\u092e \u0926\u0942\u0924 \u0905\u0924\u0941\u0932\u093f\u0924 \u092c\u0932 \u0927\u093e\u092e\u093e",
      ts: 24,
    },
    {
      line: "\u0905\u0902\u091c\u0928\u093f-\u092a\u0941\u0924\u094d\u0930 \u092a\u0935\u0928\u0938\u0941\u0924 \u0928\u093e\u092e\u093e",
      ts: 32,
    },
    {
      line: "\u092e\u0939\u093e\u092c\u0940\u0930 \u092c\u093f\u0915\u094d\u0930\u092e \u092c\u091c\u0930\u0902\u0917\u0940",
      ts: 40,
    },
    {
      line: "\u0915\u0941\u092e\u0924\u093f \u0928\u093f\u0935\u093e\u0930 \u0938\u0941\u092e\u0924\u093f \u0915\u0947 \u0938\u0902\u0917\u0940",
      ts: 48,
    },
  ],
  bh1: [
    {
      line: "\u0932\u0949\u0932\u0940\u092a\u0949\u092a \u0932\u093e\u0917\u0947\u0932\u0941, \u0932\u0949\u0932\u0940\u092a\u0949\u092a \u0932\u093e\u0917\u0947\u0932\u0941",
      ts: 0,
    },
    {
      line: "\u0913\u0920\u0932\u093e\u0932\u0940 \u0938\u0947 \u092e\u093f\u0932\u093e \u0926\u0947 \u0939\u0947 \u091c\u093e\u0928\u0942",
      ts: 8,
    },
    {
      line: "\u091c\u092c \u092d\u0940 \u0926\u0947\u0916\u0940\u0932\u0947 \u0924\u094b\u0939\u0915\u0947 \u092e\u0928 \u092e\u0938\u094d\u0924 \u0939\u094b \u091c\u093e\u0932\u093e",
      ts: 16,
    },
    {
      line: "\u0932\u0949\u0932\u0940\u092a\u0949\u092a \u0932\u093e\u0917\u0947\u0932\u0941 \u091c\u093e\u0928\u0942",
      ts: 24,
    },
  ],
};

function formatTime(secs: number) {
  const m = Math.floor(secs / 60);
  const s = secs % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

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

export default function FullMusicPlayer() {
  const {
    currentSong,
    isPlaying,
    progress,
    currentTime,
    volume,
    isShuffled,
    repeatMode,
    likedSongs,
    fullPlayerOpen,
    pauseToggle,
    seekTo,
    next,
    prev,
    setVolume,
    toggleShuffle,
    cycleRepeat,
    toggleLike,
    closeFullPlayer,
  } = useMusicPlayer();

  if (!currentSong) return null;

  const gradient = songGradient(currentSong.category);
  const isLiked = likedSongs.has(currentSong.id);
  const lyrics = MOCK_LYRICS[currentSong.id] ?? null;

  const activeLyricIndex = lyrics
    ? lyrics.reduce((acc, l, i) => (currentTime >= l.ts ? i : acc), -1)
    : -1;

  return (
    <AnimatePresence>
      {fullPlayerOpen && (
        <motion.div
          data-ocid="music_player.full.modal"
          className="fixed inset-0 z-[80] flex flex-col"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Background */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 50% 0%, rgba(168,85,247,0.35) 0%, rgba(10,8,20,0.98) 60%), linear-gradient(180deg, #0a0814 0%, #06040f 100%)",
            }}
          />
          {/* Glow blob */}
          <div
            className="absolute -top-20 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full opacity-30 blur-3xl pointer-events-none"
            style={{ background: gradient }}
          />

          <motion.div
            className="relative z-10 flex flex-col h-full overflow-hidden"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 36 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 pt-12 pb-4">
              <button
                type="button"
                data-ocid="music_player.full.close_button"
                onClick={closeFullPlayer}
                className="w-10 h-10 rounded-full bg-white/8 flex items-center justify-center"
              >
                <ChevronDown size={22} className="text-white" />
              </button>
              <div className="text-center">
                <p className="text-white/50 text-xs font-medium tracking-widest uppercase">
                  Now Playing
                </p>
                <p className="text-white/70 text-[11px] mt-0.5">
                  {currentSong.category}
                </p>
              </div>
              <button
                type="button"
                data-ocid="music_player.full.secondary_button"
                onClick={() => {
                  navigator.clipboard
                    ?.writeText(
                      `\uD83C\uDFB5 ${currentSong.title} - ${currentSong.artist} | KomoFast Social`,
                    )
                    .catch(() => {});
                  toast.success("Copied to clipboard!");
                }}
                className="w-10 h-10 rounded-full bg-white/8 flex items-center justify-center"
              >
                <Share2 size={17} className="text-white/70" />
              </button>
            </div>

            {/* Album Art */}
            <div className="flex justify-center mt-2 mb-6 px-5">
              <div className="relative">
                {/* Outer glow ring */}
                <div
                  className="absolute inset-0 rounded-full blur-xl opacity-50 scale-110"
                  style={{ background: gradient }}
                />
                {/* Disc */}
                <div
                  className="relative w-56 h-56 rounded-full flex items-center justify-center shadow-2xl"
                  style={{
                    background: gradient,
                    animation: isPlaying
                      ? "spin-slow 6s linear infinite"
                      : "none",
                    boxShadow:
                      "0 0 48px rgba(168,85,247,0.4), 0 8px 32px rgba(0,0,0,0.8)",
                  }}
                >
                  {/* Vinyl grooves */}
                  {[0.72, 0.55, 0.38].map((scale) => (
                    <div
                      key={scale}
                      className="absolute rounded-full border border-white/10"
                      style={{
                        width: `${scale * 100}%`,
                        height: `${scale * 100}%`,
                      }}
                    />
                  ))}
                  <Music size={40} className="text-white/70" />
                </div>
                {/* Center hole */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div
                    className="w-7 h-7 rounded-full border-2 border-white/20"
                    style={{ background: "#06040f" }}
                  />
                </div>
              </div>
            </div>

            {/* Song info + like */}
            <div className="flex items-center justify-between px-6 mb-5">
              <div className="flex-1 min-w-0">
                <h2 className="text-white text-xl font-bold truncate">
                  {currentSong.title}
                </h2>
                <p className="text-white/55 text-sm mt-0.5">
                  {currentSong.artist}
                </p>
              </div>
              <button
                type="button"
                data-ocid="music_player.full.toggle"
                onClick={() => toggleLike(currentSong.id)}
                className="w-11 h-11 flex items-center justify-center rounded-full transition-transform active:scale-90"
              >
                <Heart
                  size={22}
                  className={
                    isLiked ? "text-red-400 fill-red-400" : "text-white/40"
                  }
                />
              </button>
            </div>

            {/* Progress bar */}
            <div className="px-6 mb-2">
              <div
                role="slider"
                aria-label="Song progress"
                aria-valuenow={Math.round(progress * 100)}
                aria-valuemin={0}
                aria-valuemax={100}
                tabIndex={0}
                data-ocid="music_player.full.progress"
                className="relative h-1 rounded-full cursor-pointer"
                style={{ background: "rgba(255,255,255,0.12)" }}
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  seekTo((e.clientX - rect.left) / rect.width);
                }}
                onKeyDown={(e) => {
                  if (e.key === "ArrowRight")
                    seekTo(Math.min(1, progress + 0.02));
                  if (e.key === "ArrowLeft")
                    seekTo(Math.max(0, progress - 0.02));
                }}
              >
                <div
                  className="h-full rounded-full relative"
                  style={{
                    background: gradient,
                    width: `${progress * 100}%`,
                    transition: "width 0.3s linear",
                  }}
                >
                  {/* Thumb */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-white shadow-md" />
                </div>
              </div>
              <div className="flex justify-between mt-1.5">
                <span className="text-white/40 text-xs">
                  {formatTime(currentTime)}
                </span>
                <span className="text-white/40 text-xs">
                  {currentSong.duration}
                </span>
              </div>
            </div>

            {/* Main controls */}
            <div className="flex items-center justify-center gap-5 px-6 mb-5">
              {/* Shuffle */}
              <button
                type="button"
                data-ocid="music_player.full.toggle"
                onClick={toggleShuffle}
                className="w-10 h-10 flex items-center justify-center rounded-full transition-transform active:scale-90"
              >
                <Shuffle
                  size={20}
                  className={isShuffled ? "text-purple-400" : "text-white/40"}
                />
              </button>

              {/* Prev */}
              <button
                type="button"
                data-ocid="music_player.full.prev_button"
                onClick={prev}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white/8 text-white active:scale-90 transition-transform"
              >
                <SkipBack size={22} />
              </button>

              {/* Play/Pause */}
              <button
                type="button"
                data-ocid="music_player.full.primary_button"
                onClick={pauseToggle}
                className="w-16 h-16 rounded-full flex items-center justify-center shadow-xl transition-transform active:scale-90"
                style={{
                  background: gradient,
                  boxShadow: "0 8px 24px rgba(168,85,247,0.5)",
                }}
              >
                {isPlaying ? (
                  <Pause size={26} className="text-white" />
                ) : (
                  <Play size={26} className="text-white fill-white ml-1" />
                )}
              </button>

              {/* Next */}
              <button
                type="button"
                data-ocid="music_player.full.next_button"
                onClick={next}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white/8 text-white active:scale-90 transition-transform"
              >
                <SkipForward size={22} />
              </button>

              {/* Repeat */}
              <button
                type="button"
                data-ocid="music_player.full.toggle"
                onClick={cycleRepeat}
                className="w-10 h-10 flex items-center justify-center rounded-full transition-transform active:scale-90"
              >
                {repeatMode === "one" ? (
                  <Repeat1 size={20} className="text-purple-400" />
                ) : (
                  <Repeat
                    size={20}
                    className={
                      repeatMode === "all" ? "text-purple-400" : "text-white/40"
                    }
                  />
                )}
              </button>
            </div>

            {/* Volume */}
            <div className="flex items-center gap-3 px-6 mb-4">
              <Volume2 size={16} className="text-white/40 flex-shrink-0" />
              <div className="flex-1">
                <Slider
                  data-ocid="music_player.full.input"
                  value={[volume * 100]}
                  onValueChange={([v]) => setVolume(v / 100)}
                  min={0}
                  max={100}
                  step={1}
                  className="w-full"
                />
              </div>
              <button
                type="button"
                data-ocid="music_player.full.button"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs text-white/60 transition-all active:scale-95"
                style={{
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
                onClick={() => toast.success("Added to playlist!")}
              >
                <ListMusic size={13} />
                <span>Playlist</span>
              </button>
            </div>

            {/* Lyrics */}
            <div
              className="flex-1 min-h-0 mx-4 mb-4 rounded-2xl overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div
                className="px-4 py-2.5 flex items-center gap-2"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
              >
                <Music size={13} className="text-white/40" />
                <span className="text-white/50 text-xs font-semibold tracking-wider uppercase">
                  Lyrics
                </span>
                {!lyrics && (
                  <span className="ml-auto text-white/25 text-[11px]">
                    Coming soon
                  </span>
                )}
              </div>
              <ScrollArea className="h-full max-h-36">
                {lyrics ? (
                  <div className="px-4 py-3 space-y-2.5">
                    {lyrics.map((l, i) => (
                      <p
                        key={`${l.ts}-${i}`}
                        className="text-sm leading-relaxed transition-all duration-500"
                        style={{
                          color:
                            i === activeLyricIndex
                              ? "#ffffff"
                              : i < activeLyricIndex
                                ? "rgba(255,255,255,0.35)"
                                : "rgba(255,255,255,0.55)",
                          fontWeight: i === activeLyricIndex ? 700 : 400,
                          transform:
                            i === activeLyricIndex ? "scale(1.02)" : "scale(1)",
                          transformOrigin: "left",
                        }}
                      >
                        {l.line}
                      </p>
                    ))}
                  </div>
                ) : (
                  <div className="px-4 py-6 text-center">
                    <Music size={28} className="text-white/15 mx-auto mb-2" />
                    <p className="text-white/30 text-xs">
                      Lyrics not available for this song
                    </p>
                    <p className="text-white/20 text-[11px] mt-1">
                      Enjoying: {currentSong.title}
                    </p>
                  </div>
                )}
              </ScrollArea>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
