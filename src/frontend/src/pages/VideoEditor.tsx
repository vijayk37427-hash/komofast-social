import {
  Check,
  ChevronLeft,
  Crop,
  Film,
  FlipHorizontal,
  Layers,
  Maximize2,
  Move,
  Music,
  Pause,
  Play,
  Plus,
  RefreshCw,
  RotateCcw,
  Scissors,
  Share2,
  Sliders,
  Sparkles,
  Sticker,
  Target,
  Trash2,
  Type,
  Volume2,
  VolumeX,
  X,
  Zap,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useRef, useState } from "react";
import { useApp } from "../context/AppContext";

type Tool =
  | "trim"
  | "zoom"
  | "filters"
  | "adjust"
  | "effects"
  | "text"
  | "stickers"
  | "music"
  | "transitions";
type TextPosition = "top" | "center" | "bottom";

interface ZoomKeyframe {
  id: string;
  time: number; // 0-100 (percent of clip)
  scale: number; // 1.0 = 100%, 2.0 = 200%
  x: number; // 0-100 pan X center
  y: number; // 0-100 pan Y center
  easing: "linear" | "ease-in" | "ease-out" | "ease-in-out";
}

interface TextLayer {
  id: string;
  text: string;
  color: string;
  fontStyle: string;
  position: TextPosition;
  size: number;
}

interface StickerLayer {
  id: string;
  emoji: string;
  x: number;
  y: number;
}

const FILTERS = [
  {
    id: "none",
    label: "Original",
    gradient: "linear-gradient(135deg,#6366f1,#8b5cf6)",
  },
  {
    id: "cinematic",
    label: "Cinematic",
    gradient: "linear-gradient(135deg,#0f172a,#334155)",
  },
  {
    id: "warm",
    label: "Warm",
    gradient: "linear-gradient(135deg,#f97316,#fbbf24)",
  },
  {
    id: "cool",
    label: "Cool",
    gradient: "linear-gradient(135deg,#3b82f6,#67e8f9)",
  },
  {
    id: "vintage",
    label: "Vintage",
    gradient: "linear-gradient(135deg,#92400e,#d97706)",
  },
  {
    id: "neon",
    label: "Neon",
    gradient: "linear-gradient(135deg,#4a044e,#c026d3)",
  },
  {
    id: "drama",
    label: "Drama",
    gradient: "linear-gradient(135deg,#000,#374151)",
  },
  {
    id: "golden",
    label: "Golden",
    gradient: "linear-gradient(135deg,#854d0e,#fbbf24)",
  },
  {
    id: "rose",
    label: "Rose",
    gradient: "linear-gradient(135deg,#f43f5e,#fda4af)",
  },
  { id: "mono", label: "B&W", gradient: "linear-gradient(135deg,#111,#888)" },
];

const STICKERS = [
  "🔥",
  "💯",
  "✨",
  "🎉",
  "❤️",
  "😍",
  "🤩",
  "💥",
  "🌟",
  "🎵",
  "💃",
  "🕺",
  "🏆",
  "👑",
  "💎",
  "🚀",
  "🌈",
  "🎨",
  "📸",
  "🎬",
];

const EFFECTS = [
  { id: "normal", label: "Normal" },
  { id: "slowmo", label: "Slow Mo" },
  { id: "boomerang", label: "Boomerang" },
  { id: "glitch", label: "Glitch" },
  { id: "mirror", label: "Mirror" },
  { id: "shake", label: "Shake" },
  { id: "flash", label: "Flash" },
  { id: "zoombeat", label: "Zoom Beat" },
];

const TRANSITIONS = [
  { id: "none", label: "None" },
  { id: "fade", label: "Fade" },
  { id: "slide", label: "Slide" },
  { id: "zoom", label: "Zoom" },
  { id: "spin", label: "Spin" },
  { id: "blur", label: "Blur" },
  { id: "wipe", label: "Wipe" },
  { id: "flip", label: "Flip" },
  { id: "bounce", label: "Bounce" },
];

const MUSIC_TRACKS = [
  {
    id: "1",
    title: "Kesariya",
    artist: "Arijit Singh",
    duration: "4:28",
    category: "Bollywood",
  },
  {
    id: "2",
    title: "Tum Hi Ho",
    artist: "Arijit Singh",
    duration: "4:22",
    category: "Romantic",
  },
  {
    id: "3",
    title: "Pasoori",
    artist: "Ali Sethi",
    duration: "3:45",
    category: "Trending",
  },
  {
    id: "4",
    title: "Hanuman Chalisa",
    artist: "Gulshan Kumar",
    duration: "5:10",
    category: "Devotional",
  },
  {
    id: "5",
    title: "Laal Ishq",
    artist: "Arijit Singh",
    duration: "3:55",
    category: "Romantic",
  },
  {
    id: "6",
    title: "Teri Mitti",
    artist: "B Praak",
    duration: "4:20",
    category: "Bollywood",
  },
];

const FONT_STYLES = ["Bold", "Italic", "Outline", "Shadow", "Gradient", "Glow"];
const TEXT_COLORS = [
  "#ffffff",
  "#f43f5e",
  "#a855f7",
  "#3b82f6",
  "#22c55e",
  "#f97316",
  "#fbbf24",
  "#000000",
  "#ec4899",
  "#06b6d4",
];

const EASINGS: ZoomKeyframe["easing"][] = [
  "linear",
  "ease-in",
  "ease-out",
  "ease-in-out",
];

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function getZoomAtTime(
  keyframes: ZoomKeyframe[],
  t: number,
): { scale: number; x: number; y: number } {
  if (keyframes.length === 0) return { scale: 1, x: 50, y: 50 };
  const sorted = [...keyframes].sort((a, b) => a.time - b.time);
  if (t <= sorted[0].time)
    return { scale: sorted[0].scale, x: sorted[0].x, y: sorted[0].y };
  if (t >= sorted[sorted.length - 1].time) {
    const last = sorted[sorted.length - 1];
    return { scale: last.scale, x: last.x, y: last.y };
  }
  for (let i = 0; i < sorted.length - 1; i++) {
    const a = sorted[i];
    const b = sorted[i + 1];
    if (t >= a.time && t <= b.time) {
      const raw = (t - a.time) / (b.time - a.time);
      let tt = raw;
      if (b.easing === "ease-in") tt = raw * raw;
      else if (b.easing === "ease-out") tt = 1 - (1 - raw) * (1 - raw);
      else if (b.easing === "ease-in-out")
        tt = raw < 0.5 ? 2 * raw * raw : 1 - (-2 * raw + 2) ** 2 / 2;
      return {
        scale: lerp(a.scale, b.scale, tt),
        x: lerp(a.x, b.x, tt),
        y: lerp(a.y, b.y, tt),
      };
    }
  }
  return { scale: 1, x: 50, y: 50 };
}

export default function VideoEditor() {
  const { navigate } = useApp();

  const [activeTool, setActiveTool] = useState<Tool>("zoom");
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(20);
  const [selectedFilter, setSelectedFilter] = useState("none");
  const [selectedEffect, setSelectedEffect] = useState("normal");
  const [selectedTransition, setSelectedTransition] = useState("fade");
  const [selectedMusic, setSelectedMusic] = useState<string | null>(null);
  const [textLayers, setTextLayers] = useState<TextLayer[]>([]);
  const [stickerLayers, setStickerLayers] = useState<StickerLayer[]>([]);
  const [activeTextId, setActiveTextId] = useState<string | null>(null);
  const [newText, setNewText] = useState("");
  const [textColor, setTextColor] = useState("#ffffff");
  const [fontStyle, setFontStyle] = useState("Bold");
  const [textPosition, setTextPosition] = useState<TextPosition>("bottom");
  const [textSize, setTextSize] = useState(18);
  const [brightness, setBrightness] = useState(50);
  const [contrast, setContrast] = useState(50);
  const [saturation, setSaturation] = useState(50);
  const [trimStart, setTrimStart] = useState(0);
  const [trimEnd, setTrimEnd] = useState(85);
  const [exported, setExported] = useState(false);
  const [aiEnhancing, setAiEnhancing] = useState(false);
  const [aiDone, setAiDone] = useState(false);

  // Zoom keyframe state
  const [zoomKeyframes, setZoomKeyframes] = useState<ZoomKeyframe[]>([
    { id: "kf1", time: 0, scale: 1.0, x: 50, y: 50, easing: "ease-in-out" },
    { id: "kf2", time: 50, scale: 1.8, x: 50, y: 40, easing: "ease-in-out" },
    { id: "kf3", time: 100, scale: 1.0, x: 50, y: 50, easing: "ease-out" },
  ]);
  const [selectedKfId, setSelectedKfId] = useState<string | null>("kf2");
  const [previewZoom, setPreviewZoom] = useState(true);
  const timelineRef = useRef<HTMLDivElement>(null);

  const selectedKf = zoomKeyframes.find((k) => k.id === selectedKfId) ?? null;

  const currentZoom = getZoomAtTime(zoomKeyframes, progress);
  const previewScale = previewZoom ? currentZoom.scale : 1;
  const previewTranslateX = previewZoom
    ? ((currentZoom.x - 50) / 50) * -20 * (previewScale - 1)
    : 0;
  const previewTranslateY = previewZoom
    ? ((currentZoom.y - 50) / 50) * -20 * (previewScale - 1)
    : 0;

  const addKeyframe = () => {
    const id = Date.now().toString();
    const newKf: ZoomKeyframe = {
      id,
      time: progress,
      scale: selectedKf ? selectedKf.scale : 1.5,
      x: 50,
      y: 50,
      easing: "ease-in-out",
    };
    setZoomKeyframes((prev) =>
      [...prev, newKf].sort((a, b) => a.time - b.time),
    );
    setSelectedKfId(id);
  };

  const removeKeyframe = (id: string) => {
    setZoomKeyframes((prev) => prev.filter((k) => k.id !== id));
    if (selectedKfId === id) setSelectedKfId(null);
  };

  const updateKf = (id: string, patch: Partial<ZoomKeyframe>) => {
    setZoomKeyframes((prev) =>
      prev.map((k) => (k.id === id ? { ...k, ...patch } : k)),
    );
  };

  const handleTimelineClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const t = Math.round(((e.clientX - rect.left) / rect.width) * 100);
    setProgress(Math.max(0, Math.min(100, t)));
  };

  const handleAddText = () => {
    if (!newText.trim()) return;
    setTextLayers((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        text: newText,
        color: textColor,
        fontStyle,
        position: textPosition,
        size: textSize,
      },
    ]);
    setNewText("");
  };

  const handleAddSticker = (emoji: string) => {
    setStickerLayers((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        emoji,
        x: 30 + Math.random() * 40,
        y: 20 + Math.random() * 60,
      },
    ]);
  };

  const handleAiEnhance = () => {
    setAiEnhancing(true);
    setAiDone(false);
    setTimeout(() => {
      setAiEnhancing(false);
      setAiDone(true);
      setZoomKeyframes([
        { id: "ai1", time: 0, scale: 1.0, x: 50, y: 50, easing: "ease-in-out" },
        {
          id: "ai2",
          time: 25,
          scale: 2.0,
          x: 45,
          y: 35,
          easing: "ease-in-out",
        },
        { id: "ai3", time: 55, scale: 1.4, x: 55, y: 60, easing: "ease-out" },
        {
          id: "ai4",
          time: 80,
          scale: 1.8,
          x: 50,
          y: 45,
          easing: "ease-in-out",
        },
        { id: "ai5", time: 100, scale: 1.0, x: 50, y: 50, easing: "ease-out" },
      ]);
      setSelectedKfId("ai2");
      setSelectedFilter("cinematic");
      setTimeout(() => setAiDone(false), 4000);
    }, 2200);
  };

  const currentFilter = FILTERS.find((f) => f.id === selectedFilter);

  const tools: { id: Tool; label: string; icon: React.ReactNode }[] = [
    { id: "zoom", label: "Zoom", icon: <ZoomIn size={15} /> },
    { id: "trim", label: "Trim", icon: <Scissors size={15} /> },
    { id: "filters", label: "Filters", icon: <Layers size={15} /> },
    { id: "adjust", label: "Adjust", icon: <Sliders size={15} /> },
    { id: "effects", label: "Effects", icon: <Zap size={15} /> },
    { id: "transitions", label: "Transition", icon: <Film size={15} /> },
    { id: "text", label: "Text", icon: <Type size={15} /> },
    { id: "stickers", label: "Stickers", icon: <Sticker size={15} /> },
    { id: "music", label: "Music", icon: <Music size={15} /> },
  ];

  const sortedKf = [...zoomKeyframes].sort((a, b) => a.time - b.time);

  return (
    <div
      className="fixed inset-0 z-50 bg-[#07070d] text-white flex flex-col"
      style={{ fontFamily: "'Inter',sans-serif" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 pt-4 pb-3 border-b border-white/8 flex-shrink-0">
        <button
          type="button"
          onClick={() => navigate("/")}
          className="flex items-center gap-1 text-white/60 hover:text-white transition-colors"
        >
          <ChevronLeft size={20} />
          <span className="text-sm">Back</span>
        </button>
        <div className="flex items-center gap-2">
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center"
            style={{ background: "linear-gradient(135deg,#a855f7,#ec4899)" }}
          >
            <ZoomIn size={14} className="text-white" />
          </div>
          <span className="font-bold text-base">Video Editor</span>
        </div>
        <button
          type="button"
          onClick={() => {
            setExported(true);
            setTimeout(() => setExported(false), 3000);
          }}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-white text-sm font-bold"
          style={{ background: "linear-gradient(135deg,#a855f7,#ec4899)" }}
        >
          {exported ? <Check size={14} /> : <Share2 size={14} />}
          {exported ? "Saved!" : "Export"}
        </button>
      </div>

      {/* Preview */}
      <div className="flex-shrink-0 flex justify-center px-4 py-3">
        <div
          className="relative rounded-2xl overflow-hidden"
          style={{ aspectRatio: "9/16", height: "40vh" }}
        >
          <div
            className="absolute inset-0 transition-transform"
            style={{
              background: currentFilter?.gradient ?? FILTERS[0].gradient,
              transform: `scale(${previewScale}) translate(${previewTranslateX}px, ${previewTranslateY}px)`,
              transition: isPlaying
                ? "transform 0.1s linear"
                : "transform 0.3s ease-out",
            }}
          >
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(255,255,255,0.05) 2px,rgba(255,255,255,0.05) 4px)",
              }}
            />
          </div>

          {/* Stickers */}
          {stickerLayers.map((s) => (
            <div
              key={s.id}
              className="absolute text-3xl select-none"
              style={{
                left: `${s.x}%`,
                top: `${s.y}%`,
                transform: "translate(-50%,-50%)",
              }}
            >
              {s.emoji}
            </div>
          ))}
          {/* Text layers */}
          {textLayers.map((t) => (
            <button
              type="button"
              key={t.id}
              className={`absolute left-2 right-2 text-center px-2 py-1 cursor-pointer bg-transparent border-0 ${t.position === "top" ? "top-4" : t.position === "center" ? "top-1/2 -translate-y-1/2" : "bottom-10"}`}
              style={{
                color: t.color,
                fontSize: t.size,
                fontWeight: t.fontStyle === "Bold" ? 900 : 600,
                fontStyle: t.fontStyle === "Italic" ? "italic" : "normal",
              }}
              onClick={() =>
                setActiveTextId(activeTextId === t.id ? null : t.id)
              }
            >
              {t.text}
            </button>
          ))}

          {/* Zoom anchor crosshair */}
          {activeTool === "zoom" && (
            <div
              className="absolute w-6 h-6 pointer-events-none"
              style={{
                left: `${currentZoom.x}%`,
                top: `${currentZoom.y}%`,
                transform: "translate(-50%,-50%)",
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-px h-6 bg-yellow-400 opacity-80" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-px w-6 bg-yellow-400 opacity-80" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full border-2 border-yellow-400 opacity-80" />
              </div>
            </div>
          )}

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-black/60 transition-colors"
            >
              {isPlaying ? (
                <Pause size={18} className="text-white" />
              ) : (
                <Play size={16} className="text-white fill-white ml-0.5" />
              )}
            </button>
          </div>

          {/* Zoom indicator badge */}
          <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-sm text-[11px] font-mono font-bold text-yellow-300">
            {currentZoom.scale.toFixed(2)}x
          </div>

          {selectedMusic && (
            <div className="absolute bottom-2 left-0 right-0 flex justify-center">
              <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/60 text-[11px]">
                <Music size={9} />
                {MUSIC_TRACKS.find((t) => t.id === selectedMusic)?.title}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Timeline */}
      <div className="px-4 pb-2 flex-shrink-0 space-y-1.5">
        {/* Zoom curve bar */}
        <div className="relative h-6 bg-white/5 rounded-lg overflow-hidden">
          <svg
            className="absolute inset-0 w-full h-full"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="zg" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#a855f7" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#ec4899" stopOpacity="0.6" />
              </linearGradient>
            </defs>
            <polyline
              points={sortedKf
                .map((k) => `${k.time},${100 - ((k.scale - 1) / 2) * 100}`)
                .join(" ")}
              fill="none"
              stroke="url(#zg)"
              strokeWidth="2"
            />
            {sortedKf.map((k) => (
              <circle
                key={k.id}
                cx={k.time}
                cy={100 - ((k.scale - 1) / 2) * 100}
                r={k.id === selectedKfId ? 4 : 3}
                fill={k.id === selectedKfId ? "#fbbf24" : "#a855f7"}
                stroke="white"
                strokeWidth="1"
              />
            ))}
          </svg>
        </div>
        {/* Main scrubber */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsMuted(!isMuted)}
            className="text-white/50 hover:text-white"
          >
            {isMuted ? <VolumeX size={13} /> : <Volume2 size={13} />}
          </button>
          <div
            ref={timelineRef}
            className="flex-1 relative h-7 bg-white/8 rounded-lg overflow-hidden cursor-pointer"
            onClick={handleTimelineClick}
            onKeyDown={(e) =>
              e.key === "Enter" &&
              handleTimelineClick(
                e as unknown as React.MouseEvent<HTMLDivElement>,
              )
            }
            role="slider"
            aria-valuenow={progress}
            aria-valuemin={0}
            aria-valuemax={100}
            tabIndex={0}
          >
            {/* Track fill */}
            <div
              className="absolute inset-y-0 left-0 rounded-lg opacity-30"
              style={{
                width: `${progress}%`,
                background: "linear-gradient(90deg,#a855f7,#ec4899)",
              }}
            />
            {/* Trim region */}
            <div
              className="absolute top-0 bottom-0 border-t border-b border-yellow-400/40 bg-yellow-400/5"
              style={{ left: `${trimStart}%`, right: `${100 - trimEnd}%` }}
            />
            {/* Keyframe markers */}
            {sortedKf.map((k) => (
              <button
                key={k.id}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedKfId(k.id);
                  setProgress(k.time);
                }}
                className="absolute top-0 bottom-0 w-1 -ml-0.5 transition-all"
                style={{
                  left: `${k.time}%`,
                  background:
                    k.id === selectedKfId ? "#fbbf24" : "rgba(168,85,247,0.9)",
                }}
              />
            ))}
            {/* Playhead */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-white"
              style={{ left: `${progress}%`, transform: "translateX(-50%)" }}
            />
          </div>
          <span className="text-[10px] text-white/40 tabular-nums">
            0:
            {Math.round(progress * 0.15)
              .toString()
              .padStart(2, "0")}
            /0:15
          </span>
        </div>
      </div>

      {/* Tool strip */}
      <div className="flex-shrink-0 overflow-x-auto scrollbar-hide px-4 pb-2">
        <div className="flex gap-1.5 w-max">
          {tools.map((tool) => (
            <button
              key={tool.id}
              type="button"
              onClick={() => setActiveTool(tool.id)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-[12px] font-semibold whitespace-nowrap transition-all ${activeTool === tool.id ? "text-white" : "text-white/50 bg-white/6 hover:bg-white/12"}`}
              style={
                activeTool === tool.id
                  ? { background: "linear-gradient(135deg,#7c3aed,#db2777)" }
                  : {}
              }
            >
              {tool.icon}
              {tool.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tool panel */}
      <div className="flex-1 overflow-y-auto px-4 pb-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTool}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
          >
            {/* ===== ZOOM EDITOR ===== */}
            {activeTool === "zoom" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <p className="text-xs text-white/40 font-semibold uppercase tracking-wider">
                    Zoom Keyframes
                  </p>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setPreviewZoom(!previewZoom)}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all ${previewZoom ? "text-white" : "text-white/40 bg-white/6"}`}
                      style={
                        previewZoom
                          ? {
                              background:
                                "linear-gradient(135deg,#7c3aed,#db2777)",
                            }
                          : {}
                      }
                    >
                      {previewZoom ? "Preview ON" : "Preview OFF"}
                    </button>
                    <button
                      type="button"
                      onClick={addKeyframe}
                      className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-semibold text-white"
                      style={{
                        background: "linear-gradient(135deg,#a855f7,#ec4899)",
                      }}
                    >
                      <Plus size={12} /> Add
                    </button>
                  </div>
                </div>

                {/* Keyframe list */}
                <div className="space-y-1.5">
                  {sortedKf.map((kf) => (
                    <button
                      key={kf.id}
                      type="button"
                      onClick={() => {
                        setSelectedKfId(kf.id);
                        setProgress(kf.time);
                      }}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all text-left ${selectedKfId === kf.id ? "ring-1 ring-yellow-400" : "bg-white/5 hover:bg-white/10"}`}
                      style={
                        selectedKfId === kf.id
                          ? { background: "rgba(251,191,36,0.1)" }
                          : {}
                      }
                    >
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-[10px] font-black"
                        style={{
                          background:
                            selectedKfId === kf.id ? "#fbbf24" : "#a855f7",
                          color: "#000",
                        }}
                      >
                        {sortedKf.indexOf(kf) + 1}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-white">
                            {kf.scale.toFixed(1)}x zoom
                          </span>
                          <span className="text-[11px] text-white/40">
                            {kf.easing}
                          </span>
                        </div>
                        <div className="text-[11px] text-white/40">
                          at {kf.time}% · pan ({kf.x},{kf.y})
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-xs font-mono text-white/50">
                          0:
                          {Math.round(kf.time * 0.15)
                            .toString()
                            .padStart(2, "0")}
                        </span>
                        {sortedKf.length > 1 && (
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              removeKeyframe(kf.id);
                            }}
                            className="w-6 h-6 flex items-center justify-center text-white/30 hover:text-red-400 ml-1"
                          >
                            <Trash2 size={13} />
                          </button>
                        )}
                      </div>
                    </button>
                  ))}
                </div>

                {/* Selected keyframe editor */}
                {selectedKf && (
                  <div className="bg-white/5 rounded-2xl p-4 space-y-4 border border-yellow-400/20">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-5 h-5 rounded-full bg-yellow-400 flex items-center justify-center">
                        <Target size={11} className="text-black" />
                      </div>
                      <span className="text-sm font-bold text-yellow-300">
                        Keyframe {sortedKf.indexOf(selectedKf) + 1} Settings
                      </span>
                    </div>

                    {/* Time */}
                    <div>
                      <div className="flex justify-between text-xs text-white/50 mb-1.5">
                        <span className="font-semibold">Time Position</span>
                        <span className="font-mono">
                          {selectedKf.time}% · 0:
                          {Math.round(selectedKf.time * 0.15)
                            .toString()
                            .padStart(2, "0")}
                          s
                        </span>
                      </div>
                      <input
                        type="range"
                        min={0}
                        max={100}
                        value={selectedKf.time}
                        onChange={(e) =>
                          updateKf(selectedKf.id, {
                            time: Number(e.target.value),
                          })
                        }
                        className="w-full accent-yellow-400"
                      />
                    </div>

                    {/* Scale */}
                    <div>
                      <div className="flex justify-between text-xs text-white/50 mb-1.5">
                        <div className="flex items-center gap-1">
                          <ZoomIn size={12} />
                          <span className="font-semibold">Zoom Scale</span>
                        </div>
                        <span className="font-mono text-yellow-300 font-bold">
                          {selectedKf.scale.toFixed(2)}x
                        </span>
                      </div>
                      <input
                        type="range"
                        min={100}
                        max={400}
                        step={5}
                        value={Math.round(selectedKf.scale * 100)}
                        onChange={(e) =>
                          updateKf(selectedKf.id, {
                            scale: Number(e.target.value) / 100,
                          })
                        }
                        className="w-full accent-yellow-400"
                      />
                      <div className="flex justify-between text-[10px] text-white/25 mt-0.5">
                        <span>1x (no zoom)</span>
                        <span>2x</span>
                        <span>3x</span>
                        <span>4x (max)</span>
                      </div>
                    </div>

                    {/* Pan X */}
                    <div>
                      <div className="flex justify-between text-xs text-white/50 mb-1.5">
                        <div className="flex items-center gap-1">
                          <Move size={12} />
                          <span className="font-semibold">
                            Pan X (left–right)
                          </span>
                        </div>
                        <span className="font-mono">
                          {selectedKf.x > 50 ? "+" : ""}
                          {selectedKf.x - 50}
                        </span>
                      </div>
                      <input
                        type="range"
                        min={0}
                        max={100}
                        value={selectedKf.x}
                        onChange={(e) =>
                          updateKf(selectedKf.id, { x: Number(e.target.value) })
                        }
                        className="w-full accent-purple-400"
                      />
                    </div>

                    {/* Pan Y */}
                    <div>
                      <div className="flex justify-between text-xs text-white/50 mb-1.5">
                        <div className="flex items-center gap-1">
                          <Move size={12} />
                          <span className="font-semibold">Pan Y (up–down)</span>
                        </div>
                        <span className="font-mono">
                          {selectedKf.y > 50 ? "+" : ""}
                          {selectedKf.y - 50}
                        </span>
                      </div>
                      <input
                        type="range"
                        min={0}
                        max={100}
                        value={selectedKf.y}
                        onChange={(e) =>
                          updateKf(selectedKf.id, { y: Number(e.target.value) })
                        }
                        className="w-full accent-pink-400"
                      />
                    </div>

                    {/* Easing */}
                    <div>
                      <p className="text-xs text-white/50 font-semibold mb-2">
                        Easing Curve
                      </p>
                      <div className="grid grid-cols-2 gap-1.5">
                        {EASINGS.map((e) => (
                          <button
                            key={e}
                            type="button"
                            onClick={() =>
                              updateKf(selectedKf.id, { easing: e })
                            }
                            className={`py-2 rounded-xl text-[12px] font-semibold transition-all ${selectedKf.easing === e ? "text-white" : "text-white/50 bg-white/6"}`}
                            style={
                              selectedKf.easing === e
                                ? {
                                    background:
                                      "linear-gradient(135deg,#7c3aed,#db2777)",
                                  }
                                : {}
                            }
                          >
                            {e}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Center shortcut */}
                    <button
                      type="button"
                      onClick={() => updateKf(selectedKf.id, { x: 50, y: 50 })}
                      className="w-full flex items-center justify-center gap-2 py-2 rounded-xl bg-white/6 text-sm text-white/60 hover:bg-white/12 transition-all"
                    >
                      <Maximize2 size={13} /> Reset Pan to Center
                    </button>
                  </div>
                )}

                {/* Quick presets */}
                <div>
                  <p className="text-xs text-white/40 font-semibold uppercase tracking-wider mb-2">
                    Quick Zoom Presets
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      {
                        label: "Slow Push In",
                        kfs: [
                          {
                            id: "p1",
                            time: 0,
                            scale: 1.0,
                            x: 50,
                            y: 50,
                            easing: "ease-in-out",
                          },
                          {
                            id: "p2",
                            time: 100,
                            scale: 1.6,
                            x: 50,
                            y: 50,
                            easing: "ease-in-out",
                          },
                        ] as ZoomKeyframe[],
                      },
                      {
                        label: "Punch Zoom",
                        kfs: [
                          {
                            id: "p1",
                            time: 0,
                            scale: 1.0,
                            x: 50,
                            y: 50,
                            easing: "ease-in-out",
                          },
                          {
                            id: "p2",
                            time: 15,
                            scale: 2.0,
                            x: 50,
                            y: 50,
                            easing: "ease-in",
                          },
                          {
                            id: "p3",
                            time: 30,
                            scale: 1.0,
                            x: 50,
                            y: 50,
                            easing: "ease-out",
                          },
                        ] as ZoomKeyframe[],
                      },
                      {
                        label: "Ken Burns",
                        kfs: [
                          {
                            id: "p1",
                            time: 0,
                            scale: 1.0,
                            x: 30,
                            y: 30,
                            easing: "linear",
                          },
                          {
                            id: "p2",
                            time: 100,
                            scale: 1.8,
                            x: 70,
                            y: 70,
                            easing: "linear",
                          },
                        ] as ZoomKeyframe[],
                      },
                      {
                        label: "Zoom + Pull",
                        kfs: [
                          {
                            id: "p1",
                            time: 0,
                            scale: 1.6,
                            x: 50,
                            y: 50,
                            easing: "ease-out",
                          },
                          {
                            id: "p2",
                            time: 100,
                            scale: 1.0,
                            x: 50,
                            y: 50,
                            easing: "ease-in",
                          },
                        ] as ZoomKeyframe[],
                      },
                      {
                        label: "Beat Drop",
                        kfs: [
                          {
                            id: "p1",
                            time: 0,
                            scale: 1.0,
                            x: 50,
                            y: 50,
                            easing: "ease-in-out",
                          },
                          {
                            id: "p2",
                            time: 48,
                            scale: 1.0,
                            x: 50,
                            y: 50,
                            easing: "ease-in",
                          },
                          {
                            id: "p3",
                            time: 50,
                            scale: 2.2,
                            x: 50,
                            y: 50,
                            easing: "ease-out",
                          },
                          {
                            id: "p4",
                            time: 100,
                            scale: 1.0,
                            x: 50,
                            y: 50,
                            easing: "ease-in-out",
                          },
                        ] as ZoomKeyframe[],
                      },
                      {
                        label: "No Zoom",
                        kfs: [
                          {
                            id: "p1",
                            time: 0,
                            scale: 1.0,
                            x: 50,
                            y: 50,
                            easing: "linear",
                          },
                          {
                            id: "p2",
                            time: 100,
                            scale: 1.0,
                            x: 50,
                            y: 50,
                            easing: "linear",
                          },
                        ] as ZoomKeyframe[],
                      },
                    ].map((preset) => (
                      <button
                        key={preset.label}
                        type="button"
                        onClick={() => {
                          setZoomKeyframes(preset.kfs);
                          setSelectedKfId(preset.kfs[0].id);
                        }}
                        className="py-2.5 px-3 rounded-xl bg-white/6 hover:bg-white/12 text-sm text-white/70 hover:text-white transition-all text-left font-medium"
                      >
                        {preset.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TRIM */}
            {activeTool === "trim" && (
              <div className="space-y-4">
                <p className="text-xs text-white/40 font-semibold uppercase tracking-wider">
                  Clip Range
                </p>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-xs text-white/50 mb-1">
                      <span>
                        Start: 0:
                        {Math.round(trimStart * 0.15)
                          .toString()
                          .padStart(2, "0")}
                      </span>
                      <span>Drag handles</span>
                    </div>
                    <input
                      type="range"
                      min={0}
                      max={trimEnd - 5}
                      value={trimStart}
                      onChange={(e) => setTrimStart(Number(e.target.value))}
                      className="w-full accent-purple-500"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between text-xs text-white/50 mb-1">
                      <span>
                        End: 0:
                        {Math.round(trimEnd * 0.15)
                          .toString()
                          .padStart(2, "0")}
                      </span>
                      <span>
                        Duration: 0:
                        {Math.round((trimEnd - trimStart) * 0.15)
                          .toString()
                          .padStart(2, "0")}
                      </span>
                    </div>
                    <input
                      type="range"
                      min={trimStart + 5}
                      max={100}
                      value={trimEnd}
                      onChange={(e) => setTrimEnd(Number(e.target.value))}
                      className="w-full accent-purple-500"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {["0.5x", "1x", "1.5x", "2x"].map((s) => (
                    <button
                      key={s}
                      type="button"
                      className="py-2 rounded-xl text-sm font-bold bg-white/8 hover:bg-white/15 text-white/70 hover:text-white transition-all"
                    >
                      {s}
                    </button>
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-white/8 text-sm font-semibold text-white/70 hover:bg-white/15 transition-all"
                  >
                    <RotateCcw size={13} />
                    Reverse
                  </button>
                  <button
                    type="button"
                    className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-white/8 text-sm font-semibold text-white/70 hover:bg-white/15 transition-all"
                  >
                    <FlipHorizontal size={13} />
                    Flip
                  </button>
                  <button
                    type="button"
                    className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-white/8 text-sm font-semibold text-white/70 hover:bg-white/15 transition-all"
                  >
                    <Crop size={13} />
                    Crop
                  </button>
                </div>
              </div>
            )}

            {/* FILTERS */}
            {activeTool === "filters" && (
              <div className="grid grid-cols-4 gap-2">
                {FILTERS.map((f) => (
                  <button
                    key={f.id}
                    type="button"
                    onClick={() => setSelectedFilter(f.id)}
                    className={`flex flex-col items-center gap-1.5 p-2 rounded-xl transition-all ${selectedFilter === f.id ? "ring-2 ring-purple-400" : "bg-white/5 hover:bg-white/10"}`}
                  >
                    <div
                      className="w-full h-10 rounded-lg"
                      style={{
                        background: f.gradient,
                        border:
                          selectedFilter === f.id
                            ? "2px solid #a855f7"
                            : "2px solid transparent",
                      }}
                    />
                    <span className="text-[10px] text-white/70">{f.label}</span>
                  </button>
                ))}
              </div>
            )}

            {/* ADJUST */}
            {activeTool === "adjust" && (
              <div className="space-y-4">
                {[
                  {
                    label: "Brightness",
                    value: brightness,
                    set: setBrightness,
                  },
                  { label: "Contrast", value: contrast, set: setContrast },
                  {
                    label: "Saturation",
                    value: saturation,
                    set: setSaturation,
                  },
                ].map(({ label, value, set }) => (
                  <div key={label}>
                    <div className="flex justify-between text-xs text-white/60 mb-1.5">
                      <span className="font-semibold">{label}</span>
                      <span>
                        {value - 50 > 0 ? "+" : ""}
                        {value - 50}
                      </span>
                    </div>
                    <input
                      type="range"
                      min={0}
                      max={100}
                      value={value}
                      onChange={(e) => set(Number(e.target.value))}
                      className="w-full accent-purple-500"
                    />
                  </div>
                ))}
                <button
                  type="button"
                  className="w-full py-2.5 rounded-xl bg-white/8 text-sm text-white/60 hover:bg-white/15"
                  onClick={() => {
                    setBrightness(50);
                    setContrast(50);
                    setSaturation(50);
                  }}
                >
                  Reset All
                </button>
              </div>
            )}

            {/* EFFECTS */}
            {activeTool === "effects" && (
              <div className="grid grid-cols-4 gap-2">
                {EFFECTS.map((eff) => (
                  <button
                    key={eff.id}
                    type="button"
                    onClick={() => setSelectedEffect(eff.id)}
                    className={`py-3 px-2 rounded-xl text-[12px] font-semibold text-center transition-all ${selectedEffect === eff.id ? "text-white" : "text-white/50 bg-white/6 hover:bg-white/12"}`}
                    style={
                      selectedEffect === eff.id
                        ? {
                            background:
                              "linear-gradient(135deg,#7c3aed,#db2777)",
                          }
                        : {}
                    }
                  >
                    {eff.label}
                  </button>
                ))}
              </div>
            )}

            {/* TRANSITIONS */}
            {activeTool === "transitions" && (
              <div className="grid grid-cols-3 gap-2">
                {TRANSITIONS.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setSelectedTransition(t.id)}
                    className={`py-3 rounded-xl text-sm font-semibold transition-all ${selectedTransition === t.id ? "text-white" : "text-white/50 bg-white/6 hover:bg-white/12"}`}
                    style={
                      selectedTransition === t.id
                        ? {
                            background:
                              "linear-gradient(135deg,#7c3aed,#db2777)",
                          }
                        : {}
                    }
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            )}

            {/* TEXT */}
            {activeTool === "text" && (
              <div className="space-y-3">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Type your text..."
                    value={newText}
                    onChange={(e) => setNewText(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleAddText()}
                    className="flex-1 bg-white/10 border border-white/15 rounded-xl px-3 py-2.5 text-sm text-white placeholder:text-white/30 outline-none focus:border-purple-500"
                  />
                  <button
                    type="button"
                    onClick={handleAddText}
                    className="px-3 rounded-xl text-white font-bold"
                    style={{
                      background: "linear-gradient(135deg,#a855f7,#ec4899)",
                    }}
                  >
                    <Plus size={18} />
                  </button>
                </div>
                <div>
                  <p className="text-[11px] text-white/40 mb-1.5 uppercase tracking-wider font-semibold">
                    Style
                  </p>
                  <div className="flex gap-1.5 flex-wrap">
                    {FONT_STYLES.map((fs) => (
                      <button
                        key={fs}
                        type="button"
                        onClick={() => setFontStyle(fs)}
                        className={`px-3 py-1.5 rounded-full text-[12px] font-medium transition-all ${fontStyle === fs ? "text-white" : "text-white/50 bg-white/6"}`}
                        style={
                          fontStyle === fs
                            ? {
                                background:
                                  "linear-gradient(135deg,#a855f7,#ec4899)",
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
                  <p className="text-[11px] text-white/40 mb-1.5 uppercase tracking-wider font-semibold">
                    Color
                  </p>
                  <div className="flex gap-2">
                    {TEXT_COLORS.map((c) => (
                      <button
                        key={c}
                        type="button"
                        onClick={() => setTextColor(c)}
                        className="w-7 h-7 rounded-full flex-shrink-0 transition-transform hover:scale-110"
                        style={{
                          background: c,
                          border:
                            textColor === c
                              ? "3px solid #a855f7"
                              : "2px solid rgba(255,255,255,0.15)",
                        }}
                      />
                    ))}
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[11px] text-white/40 mb-1.5 uppercase tracking-wider font-semibold">
                    <span>Size</span>
                    <span className="font-mono normal-case">{textSize}px</span>
                  </div>
                  <input
                    type="range"
                    min={12}
                    max={36}
                    value={textSize}
                    onChange={(e) => setTextSize(Number(e.target.value))}
                    className="w-full accent-purple-500"
                  />
                </div>
                <div>
                  <p className="text-[11px] text-white/40 mb-1.5 uppercase tracking-wider font-semibold">
                    Position
                  </p>
                  <div className="flex gap-2">
                    {(["top", "center", "bottom"] as TextPosition[]).map(
                      (pos) => (
                        <button
                          key={pos}
                          type="button"
                          onClick={() => setTextPosition(pos)}
                          className={`flex-1 py-2 rounded-xl text-[12px] font-semibold capitalize transition-all ${textPosition === pos ? "text-white" : "text-white/50 bg-white/6"}`}
                          style={
                            textPosition === pos
                              ? {
                                  background:
                                    "linear-gradient(135deg,#a855f7,#ec4899)",
                                }
                              : {}
                          }
                        >
                          {pos}
                        </button>
                      ),
                    )}
                  </div>
                </div>
                {textLayers.length > 0 && (
                  <div className="space-y-1.5">
                    <p className="text-[11px] text-white/40 uppercase tracking-wider font-semibold">
                      Layers
                    </p>
                    {textLayers.map((t) => (
                      <div
                        key={t.id}
                        className="flex items-center gap-2 px-3 py-2 bg-white/6 rounded-xl"
                      >
                        <span
                          className="flex-1 text-sm truncate"
                          style={{ color: t.color }}
                        >
                          {t.text}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            setTextLayers((prev) =>
                              prev.filter((l) => l.id !== t.id),
                            )
                          }
                          className="text-white/30 hover:text-red-400"
                        >
                          <Trash2 size={13} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* STICKERS */}
            {activeTool === "stickers" && (
              <div className="grid grid-cols-5 gap-2">
                {STICKERS.map((emoji) => (
                  <button
                    key={emoji}
                    type="button"
                    onClick={() => handleAddSticker(emoji)}
                    className="text-2xl py-3 rounded-xl bg-white/6 hover:bg-white/15 transition-all hover:scale-110"
                  >
                    {emoji}
                  </button>
                ))}
              </div>
            )}

            {/* MUSIC */}
            {activeTool === "music" && (
              <div className="space-y-2">
                {MUSIC_TRACKS.map((track) => (
                  <button
                    key={track.id}
                    type="button"
                    onClick={() =>
                      setSelectedMusic(
                        selectedMusic === track.id ? null : track.id,
                      )
                    }
                    className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-all ${selectedMusic === track.id ? "ring-1 ring-purple-500 bg-purple-900/40" : "bg-white/5 hover:bg-white/10"}`}
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{
                        background: "linear-gradient(135deg,#a855f7,#ec4899)",
                      }}
                    >
                      {selectedMusic === track.id ? (
                        <Music size={15} />
                      ) : (
                        <Play size={13} className="fill-white ml-0.5" />
                      )}
                    </div>
                    <div className="flex-1 text-left">
                      <div className="text-sm font-semibold">{track.title}</div>
                      <div className="text-[11px] text-white/40">
                        {track.artist} · {track.category}
                      </div>
                    </div>
                    <span className="text-[11px] text-white/30">
                      {track.duration}
                    </span>
                    {selectedMusic === track.id && (
                      <Check size={14} className="text-purple-400" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom bar */}
      <div className="flex-shrink-0 px-4 pb-6 pt-3 border-t border-white/8 flex gap-3">
        <button
          type="button"
          onClick={handleAiEnhance}
          disabled={aiEnhancing}
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl text-white font-bold text-sm"
          style={{
            background: aiDone
              ? "linear-gradient(135deg,#16a34a,#15803d)"
              : "linear-gradient(135deg,#7c3aed,#a855f7,#ec4899)",
          }}
        >
          {aiEnhancing ? (
            <>
              <Sparkles size={15} className="animate-spin" /> AI Enhancing...
            </>
          ) : aiDone ? (
            <>
              <Check size={15} /> AI Enhanced!
            </>
          ) : (
            <>
              <Sparkles size={15} /> ✨ AI Auto Zoom
            </>
          )}
        </button>
        <button
          type="button"
          onClick={() => navigate("/")}
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl text-white font-bold text-sm"
          style={{ background: "linear-gradient(135deg,#a855f7,#ec4899)" }}
        >
          <Share2 size={15} /> Post Reel
        </button>
      </div>
    </div>
  );
}
