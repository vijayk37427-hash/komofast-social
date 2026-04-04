import { Textarea } from "@/components/ui/textarea";
import {
  AlignCenter,
  AlignVerticalJustifyEnd,
  AlignVerticalJustifyStart,
  Bold,
  ChevronDown,
  ChevronUp,
  Clapperboard,
  Italic,
  Loader2,
  Music,
  Play,
  RefreshCcw,
  RefreshCw,
  Scissors,
  Sparkles,
  Type,
  X,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

type Tab = "filters" | "effects" | "music" | "text" | "trim";

const FILTERS = [
  { id: "original", label: "Original", color: "#888", cssFilter: "none" },
  {
    id: "beauty",
    label: "Beauty",
    color: "#f9a8d4",
    cssFilter: "saturate(1.5) brightness(1.1)",
  },
  {
    id: "vintage",
    label: "Vintage",
    color: "#d97706",
    cssFilter: "sepia(0.6)",
  },
  {
    id: "cinematic",
    label: "Cinematic",
    color: "#1e3a8a",
    cssFilter: "contrast(1.3) saturate(0.8)",
  },
  {
    id: "neon",
    label: "Neon Glow",
    color: "#a21caf",
    cssFilter: "saturate(2) hue-rotate(270deg)",
  },
  {
    id: "warm",
    label: "Warm",
    color: "#f97316",
    cssFilter: "sepia(0.3) saturate(1.4)",
  },
  {
    id: "cool",
    label: "Cool",
    color: "#3b82f6",
    cssFilter: "hue-rotate(200deg) saturate(1.2)",
  },
  {
    id: "drama",
    label: "Drama",
    color: "#1c1c1c",
    cssFilter: "contrast(1.5) brightness(0.9)",
  },
];

const EFFECTS = [
  { id: "normal", label: "Normal", icon: Play },
  { id: "slowmo", label: "Slow Mo", icon: ChevronDown },
  { id: "boomerang", label: "Boomerang", icon: RefreshCw },
  { id: "glitch", label: "Glitch", icon: Zap },
  { id: "flash", label: "Flash", icon: Zap },
  { id: "mirror", label: "Mirror", icon: RefreshCcw },
  { id: "zoombeat", label: "Zoom Beat", icon: ChevronUp },
  { id: "shake", label: "Shake", icon: Clapperboard },
];

const MOCK_SONGS = [
  {
    id: "1",
    title: "Midnight Vibes",
    artist: "Luna Ray",
    duration: "3:22",
    ai: true,
  },
  {
    id: "2",
    title: "Golden Hour",
    artist: "Sol & Co.",
    duration: "2:58",
    ai: true,
  },
  {
    id: "3",
    title: "Electric Dreams",
    artist: "Neon Pulse",
    duration: "3:45",
    ai: false,
  },
  {
    id: "4",
    title: "Summer Fade",
    artist: "The Waves",
    duration: "2:30",
    ai: false,
  },
  {
    id: "5",
    title: "City Lights",
    artist: "Urban Echo",
    duration: "4:01",
    ai: false,
  },
];

const FONT_STYLES = ["Bold", "Italic", "Outline", "Shadow", "Gradient"];
const TEXT_COLORS = [
  "#ffffff",
  "#f43f5e",
  "#a855f7",
  "#3b82f6",
  "#22c55e",
  "#f97316",
  "#fbbf24",
  "#000000",
];
const SPEED_OPTIONS = ["0.5x", "1x", "1.5x", "2x"];

const PREVIEW_GRADIENTS: Record<string, string> = {
  original: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)",
  beauty: "linear-gradient(135deg, #f9a8d4 0%, #f472b6 50%, #e879f9 100%)",
  vintage: "linear-gradient(135deg, #92400e 0%, #d97706 50%, #fbbf24 100%)",
  cinematic: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #334155 100%)",
  neon: "linear-gradient(135deg, #4a044e 0%, #a21caf 50%, #c026d3 100%)",
  warm: "linear-gradient(135deg, #7c2d12 0%, #f97316 50%, #fbbf24 100%)",
  cool: "linear-gradient(135deg, #0c4a6e 0%, #3b82f6 50%, #67e8f9 100%)",
  drama: "linear-gradient(135deg, #000000 0%, #1c1c1c 50%, #374151 100%)",
};

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function ReelAIEditorModal({ open, onClose }: Props) {
  const [activeTab, setActiveTab] = useState<Tab>("filters");
  const [selectedFilter, setSelectedFilter] = useState("original");
  const [selectedEffect, setSelectedEffect] = useState("normal");
  const [selectedSong, setSelectedSong] = useState<string | null>(null);
  const [overlayText, setOverlayText] = useState("");
  const [fontStyle, setFontStyle] = useState("Bold");
  const [textColor, setTextColor] = useState("#ffffff");
  const [textPosition, setTextPosition] = useState<"top" | "center" | "bottom">(
    "bottom",
  );
  const [speed, setSpeed] = useState("1x");
  const [aiLoading, setAiLoading] = useState(false);
  const [aiSuccess, setAiSuccess] = useState(false);

  const handleAiEnhance = () => {
    setAiLoading(true);
    setAiSuccess(false);
    setTimeout(() => {
      setAiLoading(false);
      setAiSuccess(true);
      setTimeout(() => setAiSuccess(false), 4000);
    }, 2000);
  };

  const currentFilter = FILTERS.find((f) => f.id === selectedFilter);
  const previewGradient =
    PREVIEW_GRADIENTS[selectedFilter] ?? PREVIEW_GRADIENTS.original;

  const tabs: { id: Tab; label: string; icon: React.ReactNode }[] = [
    { id: "filters", label: "Filters", icon: <Sparkles size={14} /> },
    { id: "effects", label: "Effects", icon: <Zap size={14} /> },
    { id: "music", label: "Music", icon: <Music size={14} /> },
    { id: "text", label: "Text", icon: <Type size={14} /> },
    { id: "trim", label: "Trim", icon: <Scissors size={14} /> },
  ];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          data-ocid="reel_ai_editor.modal"
          className="fixed inset-0 z-[60] flex flex-col bg-[#0a0a0f] text-white"
          initial={{ opacity: 0, y: "100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {/* Top bar */}
          <div className="flex items-center justify-between px-4 pt-safe-top pt-4 pb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div
                className="w-8 h-8 rounded-xl flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, #a855f7, #ec4899)",
                }}
              >
                <Sparkles size={16} className="text-white" />
              </div>
              <span className="text-lg font-bold tracking-tight">
                AI Reel Editor
              </span>
            </div>
            <button
              type="button"
              data-ocid="reel_ai_editor.close_button"
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          {/* Scrollable content */}
          <div className="flex-1 overflow-y-auto">
            {/* Preview */}
            <div className="flex justify-center px-4 pt-4 pb-3">
              <div
                className="relative rounded-2xl overflow-hidden flex items-end justify-center"
                style={{
                  aspectRatio: "9/16",
                  maxHeight: "50vh",
                  width: "auto",
                  background: previewGradient,
                  filter:
                    currentFilter?.cssFilter !== "none"
                      ? currentFilter?.cssFilter
                      : undefined,
                }}
              >
                {/* Mock video noise */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)",
                  }}
                />
                {/* Play icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                    <Play size={24} className="text-white fill-white ml-1" />
                  </div>
                </div>
                {/* Text overlay */}
                {overlayText && (
                  <div
                    className={`absolute left-0 right-0 px-3 py-2 text-center text-base font-semibold ${
                      textPosition === "top"
                        ? "top-4"
                        : textPosition === "center"
                          ? "top-1/2 -translate-y-1/2"
                          : "bottom-10"
                    } ${
                      fontStyle === "Italic"
                        ? "italic"
                        : fontStyle === "Bold"
                          ? "font-black"
                          : ""
                    }`}
                    style={{
                      color: textColor,
                      textShadow:
                        fontStyle === "Shadow"
                          ? "2px 2px 6px rgba(0,0,0,0.8)"
                          : fontStyle === "Outline"
                            ? "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000"
                            : "none",
                      background:
                        fontStyle === "Gradient"
                          ? "linear-gradient(90deg, #a855f7, #ec4899)"
                          : "transparent",
                      WebkitBackgroundClip:
                        fontStyle === "Gradient" ? "text" : undefined,
                      WebkitTextFillColor:
                        fontStyle === "Gradient" ? "transparent" : undefined,
                    }}
                  >
                    {overlayText}
                  </div>
                )}
                {/* Effect badge */}
                {selectedEffect !== "normal" && (
                  <div className="absolute top-3 left-3 px-2 py-0.5 rounded-full bg-purple-600/80 backdrop-blur-sm text-[11px] font-bold uppercase tracking-wide">
                    {EFFECTS.find((e) => e.id === selectedEffect)?.label}
                  </div>
                )}
                {/* Music badge */}
                {selectedSong && (
                  <div className="absolute bottom-3 left-0 right-0 flex justify-center">
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm text-[11px]">
                      <Music size={10} />
                      {MOCK_SONGS.find((s) => s.id === selectedSong)?.title}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Tab selector */}
            <div className="overflow-x-auto scrollbar-hide px-4 pb-2">
              <div className="flex gap-2 w-max">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    data-ocid={`reel_ai_editor.${tab.id}.tab`}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-[13px] font-semibold transition-all ${
                      activeTab === tab.id
                        ? "text-white"
                        : "text-white/50 bg-white/5 hover:bg-white/10"
                    }`}
                    style={
                      activeTab === tab.id
                        ? {
                            background:
                              "linear-gradient(135deg, #a855f7, #ec4899)",
                          }
                        : {}
                    }
                  >
                    {tab.icon}
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Tool panel */}
            <div className="px-4 pb-4 min-h-[140px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.18 }}
                >
                  {/* FILTERS */}
                  {activeTab === "filters" && (
                    <div className="overflow-x-auto scrollbar-hide">
                      <div className="flex gap-3 w-max pb-1">
                        {FILTERS.map((f) => (
                          <button
                            key={f.id}
                            type="button"
                            data-ocid="reel_ai_editor.filter.button"
                            onClick={() => setSelectedFilter(f.id)}
                            className={`flex flex-col items-center gap-1.5 p-2 rounded-xl transition-all ${
                              selectedFilter === f.id
                                ? "ring-2 ring-purple-400 bg-white/10"
                                : "bg-white/5 hover:bg-white/10"
                            }`}
                          >
                            <div
                              className="w-12 h-12 rounded-xl"
                              style={{
                                background: f.color,
                                border:
                                  selectedFilter === f.id
                                    ? "2px solid #a855f7"
                                    : "2px solid transparent",
                              }}
                            />
                            <span className="text-[11px] font-medium text-white/80 whitespace-nowrap">
                              {f.label}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* EFFECTS */}
                  {activeTab === "effects" && (
                    <div className="grid grid-cols-4 gap-2">
                      {EFFECTS.map((eff) => {
                        const Icon = eff.icon;
                        return (
                          <button
                            key={eff.id}
                            type="button"
                            data-ocid="reel_ai_editor.effect.button"
                            onClick={() => setSelectedEffect(eff.id)}
                            className={`flex flex-col items-center gap-1.5 py-3 px-2 rounded-xl text-[12px] font-medium transition-all ${
                              selectedEffect === eff.id
                                ? "text-white"
                                : "text-white/60 bg-white/5 hover:bg-white/10"
                            }`}
                            style={
                              selectedEffect === eff.id
                                ? {
                                    background:
                                      "linear-gradient(135deg, #7c3aed, #db2777)",
                                  }
                                : {}
                            }
                          >
                            <Icon size={18} />
                            <span>{eff.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {/* MUSIC */}
                  {activeTab === "music" && (
                    <div className="flex flex-col gap-2">
                      {MOCK_SONGS.map((song) => (
                        <button
                          key={song.id}
                          type="button"
                          data-ocid="reel_ai_editor.music.button"
                          onClick={() =>
                            setSelectedSong(
                              selectedSong === song.id ? null : song.id,
                            )
                          }
                          className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all ${
                            selectedSong === song.id
                              ? "bg-purple-900/60 ring-1 ring-purple-500"
                              : "bg-white/5 hover:bg-white/8"
                          }`}
                        >
                          <div
                            className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                            style={{
                              background:
                                "linear-gradient(135deg, #a855f7, #ec4899)",
                            }}
                          >
                            {selectedSong === song.id ? (
                              <Music size={16} className="text-white" />
                            ) : (
                              <Play
                                size={16}
                                className="text-white fill-white"
                              />
                            )}
                          </div>
                          <div className="flex-1 text-left">
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-semibold text-white">
                                {song.title}
                              </span>
                              {song.ai && (
                                <span
                                  className="text-[10px] px-1.5 py-0.5 rounded-full font-bold text-white"
                                  style={{
                                    background:
                                      "linear-gradient(90deg, #a855f7, #ec4899)",
                                  }}
                                >
                                  AI
                                </span>
                              )}
                            </div>
                            <span className="text-[12px] text-white/50">
                              {song.artist}
                            </span>
                          </div>
                          <span className="text-[12px] text-white/40">
                            {song.duration}
                          </span>
                          {selectedSong === song.id && (
                            <div className="w-5 h-5 rounded-full bg-purple-500 flex items-center justify-center flex-shrink-0">
                              <span className="text-[10px] text-white">✓</span>
                            </div>
                          )}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* TEXT */}
                  {activeTab === "text" && (
                    <div className="flex flex-col gap-3">
                      <Textarea
                        data-ocid="reel_ai_editor.text.textarea"
                        placeholder="Type overlay text..."
                        value={overlayText}
                        onChange={(e) => setOverlayText(e.target.value)}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/40 resize-none h-20 rounded-xl"
                      />
                      <div>
                        <p className="text-[11px] text-white/50 mb-2 font-medium uppercase tracking-wide">
                          Font Style
                        </p>
                        <div className="flex gap-2 flex-wrap">
                          {FONT_STYLES.map((fs) => (
                            <button
                              key={fs}
                              type="button"
                              data-ocid="reel_ai_editor.font_style.button"
                              onClick={() => setFontStyle(fs)}
                              className={`px-3 py-1.5 rounded-full text-[13px] font-medium transition-all ${
                                fontStyle === fs
                                  ? "text-white"
                                  : "text-white/60 bg-white/5 hover:bg-white/10"
                              }`}
                              style={
                                fontStyle === fs
                                  ? {
                                      background:
                                        "linear-gradient(135deg, #a855f7, #ec4899)",
                                    }
                                  : {}
                              }
                            >
                              {fs}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-[11px] text-white/50 mb-2 font-medium uppercase tracking-wide">
                          Color
                        </p>
                        <div className="flex gap-2">
                          {TEXT_COLORS.map((c) => (
                            <button
                              key={c}
                              type="button"
                              data-ocid="reel_ai_editor.text_color.button"
                              onClick={() => setTextColor(c)}
                              className="w-8 h-8 rounded-full flex-shrink-0 transition-transform hover:scale-110"
                              style={{
                                background: c,
                                border:
                                  textColor === c
                                    ? "3px solid #a855f7"
                                    : "2px solid rgba(255,255,255,0.2)",
                                boxShadow:
                                  textColor === c
                                    ? "0 0 10px rgba(168,85,247,0.6)"
                                    : "none",
                              }}
                            />
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-[11px] text-white/50 mb-2 font-medium uppercase tracking-wide">
                          Position
                        </p>
                        <div className="flex gap-2">
                          {(["top", "center", "bottom"] as const).map((pos) => {
                            const Icon =
                              pos === "top"
                                ? AlignVerticalJustifyStart
                                : pos === "center"
                                  ? AlignCenter
                                  : AlignVerticalJustifyEnd;
                            return (
                              <button
                                key={pos}
                                type="button"
                                data-ocid="reel_ai_editor.text_position.button"
                                onClick={() => setTextPosition(pos)}
                                className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-[13px] font-medium capitalize transition-all ${
                                  textPosition === pos
                                    ? "text-white"
                                    : "text-white/60 bg-white/5 hover:bg-white/10"
                                }`}
                                style={
                                  textPosition === pos
                                    ? {
                                        background:
                                          "linear-gradient(135deg, #a855f7, #ec4899)",
                                      }
                                    : {}
                                }
                              >
                                <Icon size={14} />
                                {pos}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* TRIM */}
                  {activeTab === "trim" && (
                    <div className="flex flex-col gap-4">
                      <div>
                        <div className="flex justify-between text-[12px] text-white/50 mb-1.5">
                          <span>00:00</span>
                          <span>00:15</span>
                        </div>
                        <div className="relative h-10 bg-white/10 rounded-xl overflow-hidden">
                          <div
                            className="absolute inset-y-0 left-0 right-10 rounded-xl opacity-60"
                            style={{
                              background:
                                "linear-gradient(90deg, #a855f7, #ec4899)",
                            }}
                          />
                          {/* Start thumb */}
                          <div className="absolute left-0 top-0 bottom-0 w-4 bg-white rounded-l-xl cursor-ew-resize flex items-center justify-center">
                            <div className="w-0.5 h-5 bg-gray-400 rounded" />
                          </div>
                          {/* End thumb */}
                          <div className="absolute right-0 top-0 bottom-0 w-4 bg-white rounded-r-xl cursor-ew-resize flex items-center justify-center">
                            <div className="w-0.5 h-5 bg-gray-400 rounded" />
                          </div>
                        </div>
                      </div>
                      <div>
                        <p className="text-[11px] text-white/50 mb-2 font-medium uppercase tracking-wide">
                          Speed
                        </p>
                        <div className="flex gap-2">
                          {SPEED_OPTIONS.map((s) => (
                            <button
                              key={s}
                              type="button"
                              data-ocid="reel_ai_editor.speed.button"
                              onClick={() => setSpeed(s)}
                              className={`flex-1 py-2 rounded-xl text-[13px] font-bold transition-all ${
                                speed === s
                                  ? "text-white"
                                  : "text-white/60 bg-white/5 hover:bg-white/10"
                              }`}
                              style={
                                speed === s
                                  ? {
                                      background:
                                        "linear-gradient(135deg, #a855f7, #ec4899)",
                                    }
                                  : {}
                              }
                            >
                              {s}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* AI Enhance */}
            <div className="px-4 pb-3">
              <AnimatePresence>
                {aiSuccess && (
                  <motion.div
                    data-ocid="reel_ai_editor.success_state"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-3 px-4 py-3 rounded-xl text-sm font-semibold text-white text-center"
                    style={{
                      background: "linear-gradient(135deg, #16a34a, #15803d)",
                    }}
                  >
                    🎉 AI Enhancement applied! +60% engagement predicted
                  </motion.div>
                )}
              </AnimatePresence>
              <button
                type="button"
                data-ocid="reel_ai_editor.ai_enhance.button"
                onClick={handleAiEnhance}
                disabled={aiLoading}
                className="w-full py-3.5 rounded-2xl text-white font-bold text-base flex items-center justify-center gap-2 transition-opacity disabled:opacity-80"
                style={{
                  background:
                    "linear-gradient(135deg, #7c3aed, #a855f7, #ec4899)",
                }}
              >
                {aiLoading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    <span data-ocid="reel_ai_editor.loading_state">
                      AI is analyzing your reel...
                    </span>
                  </>
                ) : (
                  <>
                    <Sparkles size={18} />
                    <span>✨ AI Enhance</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Bottom action bar */}
          <div className="px-4 pb-safe-bottom pb-6 pt-3 border-t border-white/10 flex gap-3">
            <button
              type="button"
              data-ocid="reel_ai_editor.save_draft.button"
              onClick={onClose}
              className="flex-1 py-3.5 rounded-2xl text-white/80 font-bold text-[15px] border border-white/20 hover:bg-white/10 transition-colors"
            >
              Save Draft
            </button>
            <button
              type="button"
              data-ocid="reel_ai_editor.post_reel.button"
              onClick={onClose}
              className="flex-1 py-3.5 rounded-2xl text-white font-bold text-[15px]"
              style={{
                background: "linear-gradient(135deg, #a855f7, #ec4899)",
              }}
            >
              Post Reel
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
