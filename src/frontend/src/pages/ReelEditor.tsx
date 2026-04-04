import { Slider } from "@/components/ui/slider";
import {
  ArrowLeft,
  Bold,
  Check,
  Download,
  Italic,
  LayoutGrid,
  Palette,
  Pause,
  Play,
  Redo2,
  Scissors,
  SlidersHorizontal,
  Smile,
  Sparkles,
  Type,
  Undo2,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useMemo, useState } from "react";
import { toast } from "sonner";
import { useApp } from "../context/AppContext";

// ──────────────────────────────────────────────
// Data
// ──────────────────────────────────────────────

const FILTERS = [
  { id: "original", name: "Original", css: "", color: "#1a1f26" },
  {
    id: "vivid",
    name: "Vivid",
    css: "saturate(1.8) contrast(1.1)",
    color: "#ff6b35",
  },
  {
    id: "warm",
    name: "Warm",
    css: "sepia(0.4) saturate(1.3) brightness(1.05)",
    color: "#f4a261",
  },
  {
    id: "cool",
    name: "Cool",
    css: "hue-rotate(20deg) saturate(1.2) brightness(1.02)",
    color: "#4ecdc4",
  },
  {
    id: "fade",
    name: "Fade",
    css: "contrast(0.85) brightness(1.1) saturate(0.8)",
    color: "#a8a8b3",
  },
  {
    id: "moody",
    name: "Moody",
    css: "contrast(1.3) brightness(0.85) saturate(0.9)",
    color: "#2d3748",
  },
  {
    id: "cinematic",
    name: "Cinematic",
    css: "contrast(1.2) saturate(0.8) brightness(0.9)",
    color: "#1a202c",
  },
  {
    id: "film",
    name: "Film",
    css: "sepia(0.25) contrast(1.1) brightness(0.95)",
    color: "#8b6914",
  },
  {
    id: "chrome",
    name: "Chrome",
    css: "contrast(1.4) saturate(0.9) brightness(1.1)",
    color: "#718096",
  },
  {
    id: "analog",
    name: "Analog",
    css: "sepia(0.3) hue-rotate(-10deg) saturate(1.1)",
    color: "#c05621",
  },
  {
    id: "hb1",
    name: "HB1",
    css: "brightness(1.15) contrast(0.9) saturate(1.2) hue-rotate(5deg)",
    color: "#9f7aea",
  },
  {
    id: "hb2",
    name: "HB2",
    css: "brightness(1.05) contrast(1.05) saturate(1.4) hue-rotate(-5deg)",
    color: "#6366f1",
  },
  {
    id: "a4",
    name: "A4",
    css: "contrast(1.15) saturate(1.3) brightness(0.95)",
    color: "#e53e3e",
  },
  {
    id: "c1",
    name: "C1",
    css: "brightness(1.1) contrast(0.95) saturate(1.5) sepia(0.1)",
    color: "#38a169",
  },
  {
    id: "m5",
    name: "M5",
    css: "saturate(1.6) contrast(1.2) brightness(0.9)",
    color: "#d53f8c",
  },
  {
    id: "preset",
    name: "Preset",
    css: "hue-rotate(180deg) invert(0.1)",
    color: "#805ad5",
  },
  {
    id: "neon",
    name: "Neon",
    css: "saturate(2.5) brightness(1.2) contrast(1.3)",
    color: "#00ff88",
  },
  {
    id: "golden",
    name: "Golden",
    css: "sepia(0.6) saturate(1.5) brightness(1.1)",
    color: "#d4af37",
  },
  {
    id: "drama",
    name: "Drama",
    css: "contrast(1.5) saturate(1.3) brightness(0.85)",
    color: "#2b2d42",
  },
  {
    id: "vintage",
    name: "Vintage",
    css: "sepia(0.5) contrast(1.1) brightness(0.9) saturate(0.8)",
    color: "#9c6644",
  },
];

const ADJUSTMENTS = [
  { id: "brightness", label: "Brightness", icon: "☀️", css: "brightness" },
  { id: "contrast", label: "Contrast", icon: "🌑", css: "contrast" },
  { id: "saturation", label: "Saturation", icon: "🎨", css: "saturate" },
  { id: "warmth", label: "Warmth", icon: "🌡️", css: "hue-rotate" },
  { id: "highlights", label: "Highlights", icon: "⬜", css: "brightness" },
  { id: "shadows", label: "Shadows", icon: "⬛", css: "contrast" },
  { id: "vignette", label: "Vignette", icon: "🔲", css: "brightness" },
  { id: "sharpness", label: "Sharpness", icon: "🔍", css: "contrast" },
];

const EFFECTS = [
  {
    id: "glitch",
    name: "Glitch",
    css: "hue-rotate(90deg) saturate(2)",
    grad: "linear-gradient(135deg, #f72585, #4361ee)",
  },
  {
    id: "vhs",
    name: "VHS Retro",
    css: "contrast(1.4) saturate(0.6) sepia(0.3)",
    grad: "linear-gradient(135deg, #7b2d8b, #e040fb)",
  },
  {
    id: "bokeh",
    name: "Bokeh",
    css: "blur(0.5px) brightness(1.1)",
    grad: "linear-gradient(135deg, #1a6ba0, #56ccf2)",
  },
  {
    id: "neon-glow",
    name: "Neon Glow",
    css: "saturate(3) brightness(1.3)",
    grad: "linear-gradient(135deg, #00ff88, #0066ff)",
  },
  {
    id: "blur",
    name: "Blur",
    css: "blur(2px)",
    grad: "linear-gradient(135deg, #667eea, #764ba2)",
  },
  {
    id: "cinematic2",
    name: "Cinematic",
    css: "contrast(1.3) grayscale(0.2)",
    grad: "linear-gradient(135deg, #2c3e50, #3498db)",
  },
  {
    id: "dust",
    name: "Dust & Scratches",
    css: "grayscale(0.4) contrast(1.2)",
    grad: "linear-gradient(135deg, #8b7355, #d2b48c)",
  },
  {
    id: "rain",
    name: "Rain",
    css: "brightness(0.85) contrast(1.1) saturate(0.9)",
    grad: "linear-gradient(135deg, #536976, #292e49)",
  },
  {
    id: "snow",
    name: "Snow",
    css: "brightness(1.2) contrast(0.9) saturate(0.7)",
    grad: "linear-gradient(135deg, #e0e0e0, #96c0ce)",
  },
  {
    id: "heat",
    name: "Heat Wave",
    css: "hue-rotate(-20deg) saturate(1.5) brightness(1.1)",
    grad: "linear-gradient(135deg, #ff6a00, #ee0979)",
  },
  {
    id: "lens",
    name: "Lens Flare",
    css: "brightness(1.3) contrast(0.95) saturate(1.2)",
    grad: "linear-gradient(135deg, #f7971e, #ffd200)",
  },
  {
    id: "halftone",
    name: "Halftone",
    css: "grayscale(0.5) contrast(1.4)",
    grad: "linear-gradient(135deg, #232526, #414345)",
  },
];

const STICKERS: Record<string, string[]> = {
  Trending: ["🔥", "⭐", "💫", "🎯", "🏆", "🎉", "🎊", "🌟", "💥", "🎸"],
  Emoji: ["😍", "🥰", "😂", "🤣", "😎", "🥳", "🤩", "😏", "🙈", "💃"],
  Fun: ["🦄", "🎃", "🍕", "🌈", "🦋", "🌸", "🎵", "🎶", "🎤", "🎬"],
  Love: ["❤️", "💕", "💖", "💗", "💓", "💞", "💝", "💟", "🌹", "😘"],
};

const WAVEFORM_BARS = Array.from({ length: 40 }, (_x, i) => ({
  id: `wbar-${i}`,
  pos: i,
  h: 20 + Math.sin(i * 0.7) * 12,
}));

const FONTS = ["Default", "Bold", "Serif", "Script", "Mono"];
const TEXT_COLORS = [
  "#ffffff",
  "#000000",
  "#ef4444",
  "#fbbf24",
  "#ec4899",
  "#3b82f6",
];

// ──────────────────────────────────────────────
// Main Component
// ──────────────────────────────────────────────

type Tab = "filters" | "adjust" | "effects" | "text" | "stickers" | "trim";

interface TextOverlay {
  id: number;
  text: string;
  color: string;
  bold: boolean;
  italic: boolean;
  shadow: boolean;
  bg: boolean;
  size: number;
  font: string;
}

export default function ReelEditor() {
  const { navigate } = useApp();

  // Tab
  const [activeTab, setActiveTab] = useState<Tab>("filters");

  // Filter
  const [selectedFilter, setSelectedFilter] = useState("original");
  const [filterIntensity, setFilterIntensity] = useState(100);

  // Adjust
  const [adjustments, setAdjustments] = useState<Record<string, number>>(
    Object.fromEntries(ADJUSTMENTS.map((a) => [a.id, 0])),
  );

  // Effect
  const [selectedEffect, setSelectedEffect] = useState<string | null>(null);

  // Text
  const [textOverlays, setTextOverlays] = useState<TextOverlay[]>([]);
  const [textInput, setTextInput] = useState("");
  const [textColor, setTextColor] = useState("#ffffff");
  const [textBold, setTextBold] = useState(false);
  const [textItalic, setTextItalic] = useState(false);
  const [textShadow, setTextShadow] = useState(false);
  const [textBg, setTextBg] = useState(false);
  const [textSize, setTextSize] = useState(24);
  const [textFont, setTextFont] = useState("Default");
  const [showAddText, setShowAddText] = useState(false);

  // Stickers
  const [stickerCategory, setStickerCategory] = useState("Trending");
  const [addedStickers, setAddedStickers] = useState<
    { key: string; emoji: string; top: string }[]
  >([]);

  // Trim
  const [trimStart, setTrimStart] = useState(0);
  const [trimEnd, setTrimEnd] = useState(15);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState("1x");

  // History (simplified)
  const [undoStack] = useState<number>(0);

  // Aspect Ratio / Format
  type AspectRatioKey = "9:16" | "1:1" | "4:5" | "16:9";
  const ASPECT_RATIOS_EDITOR: {
    key: AspectRatioKey;
    label: string;
    icon: string;
    resolution: string;
    badge?: string;
    duration: string;
    aspectStyle: string;
  }[] = [
    {
      key: "9:16",
      label: "Reels / Story",
      icon: "📱",
      resolution: "1080 × 1920",
      badge: "Best for Reels",
      duration: "3 – 90 sec",
      aspectStyle: "9/16",
    },
    {
      key: "1:1",
      label: "Square",
      icon: "⬜",
      resolution: "1080 × 1080",
      duration: "3 – 60 sec",
      aspectStyle: "1/1",
    },
    {
      key: "4:5",
      label: "Portrait",
      icon: "🖼️",
      resolution: "1080 × 1350",
      badge: "Best Engagement 👍",
      duration: "3 – 60 sec",
      aspectStyle: "4/5",
    },
    {
      key: "16:9",
      label: "Landscape",
      icon: "🖥️",
      resolution: "1080 × 566",
      duration: "3 – 60 sec",
      aspectStyle: "16/9",
    },
  ];
  const [selectedRatio, setSelectedRatio] = useState<AspectRatioKey>("9:16");
  const [ratioPanelOpen, setRatioPanelOpen] = useState(false);
  const currentRatioInfo = ASPECT_RATIOS_EDITOR.find(
    (r) => r.key === selectedRatio,
  )!;

  // Computed CSS filter for preview
  const previewFilter = useMemo(() => {
    const parts: string[] = [];

    // Selected filter
    const filter = FILTERS.find((f) => f.id === selectedFilter);
    if (filter?.css) {
      // Apply filter at intensity
      const intensityRatio = filterIntensity / 100;
      if (intensityRatio < 1) {
        parts.push(`opacity(${0.9 + intensityRatio * 0.1})`);
      }
      parts.push(filter.css);
    }

    // Effect
    const effect = EFFECTS.find((e) => e.id === selectedEffect);
    if (effect) parts.push(effect.css);

    // Adjustments
    const b = adjustments.brightness;
    const c = adjustments.contrast;
    const s = adjustments.saturation;
    const w = adjustments.warmth;
    if (b !== 0) parts.push(`brightness(${1 + b / 100})`);
    if (c !== 0) parts.push(`contrast(${1 + c / 100})`);
    if (s !== 0) parts.push(`saturate(${1 + s / 100})`);
    if (w !== 0) parts.push(`hue-rotate(${w * 0.5}deg)`);

    return parts.join(" ") || "none";
  }, [selectedFilter, filterIntensity, selectedEffect, adjustments]);

  const handleAddText = () => {
    if (!textInput.trim()) return;
    setTextOverlays((prev) => [
      ...prev,
      {
        id: Date.now(),
        text: textInput.trim(),
        color: textColor,
        bold: textBold,
        italic: textItalic,
        shadow: textShadow,
        bg: textBg,
        size: textSize,
        font: textFont,
      },
    ]);
    setTextInput("");
    setShowAddText(false);
  };

  const handleExport = () => {
    toast.success("Reel exported successfully! 🎬", {
      description: "Your edited reel has been saved to drafts.",
    });
  };

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col"
      style={{ background: "#0a0a0f" }}
    >
      {/* ── Top Bar ── */}
      <div
        className="flex items-center justify-between px-4 py-3 shrink-0"
        style={{
          background: "rgba(10,10,15,0.95)",
          borderBottom: "1px solid #1e1e2e",
        }}
      >
        <button
          type="button"
          data-ocid="reel_editor.back_button"
          onClick={() => navigate("/reels")}
          className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
        >
          <ArrowLeft size={20} className="text-white" />
        </button>

        <h1 className="text-white font-semibold text-[15px] tracking-wide">
          Edit Reel
        </h1>

        <div className="flex items-center gap-2">
          <button
            type="button"
            data-ocid="reel_editor.undo_button"
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
            title="Undo"
          >
            <Undo2
              size={16}
              className={undoStack > 0 ? "text-white" : "text-white/30"}
            />
          </button>
          <button
            type="button"
            data-ocid="reel_editor.redo_button"
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
            title="Redo"
          >
            <Redo2 size={16} className="text-white/30" />
          </button>
          <button
            type="button"
            data-ocid="reel_editor.export_button"
            onClick={handleExport}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-white text-sm font-semibold"
            style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)" }}
          >
            <Download size={14} />
            Export
          </button>
        </div>
      </div>

      {/* ── Format Info Bar ── */}
      <div
        className="flex items-center gap-2 px-4 py-2 shrink-0"
        style={{
          background: "rgba(10,10,15,0.9)",
          borderBottom: "1px solid #1e1e2e",
        }}
      >
        <button
          type="button"
          data-ocid="reel_editor.ratio_button"
          onClick={() => setRatioPanelOpen(true)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-white text-xs font-semibold transition-all"
          style={{
            background:
              "linear-gradient(135deg, rgba(168,85,247,0.3), rgba(236,72,153,0.2))",
            border: "1px solid rgba(168,85,247,0.4)",
          }}
        >
          <LayoutGrid size={13} />
          <span>
            {currentRatioInfo.icon} {currentRatioInfo.key}
          </span>
          <span className="text-white/50">·</span>
          <span className="text-purple-300">{currentRatioInfo.resolution}</span>
        </button>
        <div className="flex items-center gap-1.5 text-white/40 text-xs">
          <span>MP4</span>
          <span>·</span>
          <span>{currentRatioInfo.duration}</span>
        </div>
      </div>

      {/* ── Preview ── */}
      <div className="flex-1 flex items-center justify-center px-4 py-3 overflow-hidden">
        <div
          className="relative w-full max-w-[280px] rounded-2xl overflow-hidden"
          style={{
            aspectRatio: currentRatioInfo.aspectStyle,
            maxHeight: "calc(100vh - 200px)",
            boxShadow:
              "0 20px 60px rgba(99,102,241,0.2), 0 4px 20px rgba(0,0,0,0.6)",
          }}
        >
          {/* Gradient placeholder video */}
          <div
            className="w-full h-full"
            style={{
              background:
                "linear-gradient(135deg, #1a0533 0%, #0d1b4b 40%, #0a2744 70%, #0d0d1a 100%)",
              filter: previewFilter,
              transition: "filter 0.15s ease",
            }}
          >
            {/* Simulated content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center text-2xl"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  backdropFilter: "blur(8px)",
                }}
              >
                🎬
              </div>
              <span className="text-white/40 text-xs">Preview</span>
            </div>

            {/* Text overlays */}
            {textOverlays.map((t) => (
              <div
                key={t.id}
                className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-move select-none"
                style={{
                  color: t.color,
                  fontSize: `${t.size}px`,
                  fontWeight: t.bold ? "bold" : "normal",
                  fontStyle: t.italic ? "italic" : "normal",
                  textShadow: t.shadow ? "2px 2px 8px rgba(0,0,0,0.9)" : "none",
                  background: t.bg ? "rgba(0,0,0,0.5)" : "transparent",
                  padding: t.bg ? "4px 8px" : "0",
                  borderRadius: t.bg ? "6px" : "0",
                  fontFamily:
                    t.font === "Serif"
                      ? "Georgia, serif"
                      : t.font === "Mono"
                        ? "monospace"
                        : t.font === "Script"
                          ? "cursive"
                          : "inherit",
                }}
              >
                {t.text}
              </div>
            ))}

            {/* Sticker overlays */}
            {addedStickers.map((s) => (
              <div
                key={s.key}
                className="absolute text-2xl select-none"
                style={{
                  top: s.top,
                  right: "12%",
                }}
              >
                {s.emoji}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom Panel ── */}
      <div
        className="shrink-0"
        style={{ background: "#0d0d1a", borderTop: "1px solid #1e1e2e" }}
      >
        {/* Tab Content */}
        <div className="h-[200px] overflow-y-auto">
          <AnimatePresence mode="wait">
            {activeTab === "filters" && (
              <motion.div
                key="filters"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.15 }}
                className="px-4 pt-3 pb-2"
              >
                {/* Filter circles */}
                <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                  {FILTERS.map((f) => (
                    <button
                      key={f.id}
                      type="button"
                      data-ocid={`reel_editor.filter.${f.id}`}
                      onClick={() => setSelectedFilter(f.id)}
                      className="flex flex-col items-center gap-1 shrink-0"
                    >
                      <div
                        className="w-14 h-14 rounded-full transition-all"
                        style={{
                          background:
                            f.id === "original"
                              ? "linear-gradient(135deg, #1a1f26, #2d3748)"
                              : f.color,
                          border:
                            selectedFilter === f.id
                              ? "3px solid #8b5cf6"
                              : "2px solid #2a2a3e",
                          boxShadow:
                            selectedFilter === f.id
                              ? "0 0 12px rgba(139,92,246,0.5)"
                              : "none",
                          filter: f.css,
                        }}
                      />
                      <span
                        className="text-[10px] font-medium"
                        style={{
                          color:
                            selectedFilter === f.id ? "#a78bfa" : "#6b7280",
                        }}
                      >
                        {f.name}
                      </span>
                    </button>
                  ))}
                </div>
                {/* Intensity slider */}
                <div className="mt-3 flex items-center gap-3">
                  <span className="text-xs text-white/40 w-16 shrink-0">
                    Intensity
                  </span>
                  <Slider
                    data-ocid="reel_editor.filter_intensity.input"
                    value={[filterIntensity]}
                    onValueChange={([v]) => setFilterIntensity(v)}
                    min={0}
                    max={100}
                    step={1}
                    className="flex-1"
                  />
                  <span className="text-xs text-white/60 w-8 text-right">
                    {filterIntensity}%
                  </span>
                </div>
              </motion.div>
            )}

            {activeTab === "adjust" && (
              <motion.div
                key="adjust"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.15 }}
                className="px-4 pt-3 pb-2 flex flex-col gap-2"
              >
                {ADJUSTMENTS.map((adj) => (
                  <div key={adj.id} className="flex items-center gap-2">
                    <span className="text-sm w-5">{adj.icon}</span>
                    <span className="text-xs text-white/60 w-20 shrink-0">
                      {adj.label}
                    </span>
                    <Slider
                      data-ocid={`reel_editor.adjust_${adj.id}.input`}
                      value={[adjustments[adj.id]]}
                      onValueChange={([v]) =>
                        setAdjustments((prev) => ({ ...prev, [adj.id]: v }))
                      }
                      min={-100}
                      max={100}
                      step={1}
                      className="flex-1"
                    />
                    <span
                      className="text-xs w-8 text-right font-mono"
                      style={{
                        color:
                          adjustments[adj.id] !== 0 ? "#a78bfa" : "#4b5563",
                      }}
                    >
                      {adjustments[adj.id] > 0
                        ? `+${adjustments[adj.id]}`
                        : adjustments[adj.id]}
                    </span>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === "effects" && (
              <motion.div
                key="effects"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.15 }}
                className="px-4 pt-3 pb-2"
              >
                <div className="grid grid-cols-3 gap-2">
                  {EFFECTS.map((e) => (
                    <button
                      key={e.id}
                      type="button"
                      data-ocid={`reel_editor.effect_${e.id}.button`}
                      onClick={() =>
                        setSelectedEffect((prev) =>
                          prev === e.id ? null : e.id,
                        )
                      }
                      className="flex flex-col items-center gap-1 rounded-xl p-2 transition-all"
                      style={{
                        border:
                          selectedEffect === e.id
                            ? "2px solid #8b5cf6"
                            : "2px solid #1e1e2e",
                        background:
                          selectedEffect === e.id
                            ? "rgba(139,92,246,0.1)"
                            : "transparent",
                      }}
                    >
                      <div
                        className="w-12 h-10 rounded-lg"
                        style={{ background: e.grad }}
                      />
                      <span className="text-[10px] text-white/60 text-center leading-tight">
                        {e.name}
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === "text" && (
              <motion.div
                key="text"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.15 }}
                className="px-4 pt-3 pb-2"
              >
                {!showAddText ? (
                  <div className="flex flex-col gap-2">
                    <button
                      type="button"
                      data-ocid="reel_editor.add_text.button"
                      onClick={() => setShowAddText(true)}
                      className="w-full py-2 rounded-xl text-white text-sm font-semibold"
                      style={{
                        background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                      }}
                    >
                      + Add Text
                    </button>
                    {textOverlays.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-1">
                        {textOverlays.map((t) => (
                          <div
                            key={t.id}
                            className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs text-white"
                            style={{
                              background: "#1e1e2e",
                              border: "1px solid #2a2a3e",
                            }}
                          >
                            <span style={{ color: t.color }}>T</span>
                            {t.text}
                            <button
                              type="button"
                              onClick={() =>
                                setTextOverlays((prev) =>
                                  prev.filter((x) => x.id !== t.id),
                                )
                              }
                              className="text-white/40 hover:text-white/80 ml-1"
                            >
                              ×
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="flex flex-col gap-2">
                    <input
                      data-ocid="reel_editor.text.input"
                      value={textInput}
                      onChange={(e) => setTextInput(e.target.value)}
                      placeholder="Type your text..."
                      className="w-full px-3 py-2 rounded-xl text-white text-sm bg-[#1e1e2e] border border-[#2a2a3e] outline-none focus:border-purple-500"
                    />
                    {/* Fonts */}
                    <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
                      {FONTS.map((f) => (
                        <button
                          key={f}
                          type="button"
                          onClick={() => setTextFont(f)}
                          className="px-3 py-1 rounded-full text-xs shrink-0"
                          style={{
                            background: textFont === f ? "#6366f1" : "#1e1e2e",
                            color: textFont === f ? "white" : "#6b7280",
                            border: "1px solid #2a2a3e",
                          }}
                        >
                          {f}
                        </button>
                      ))}
                    </div>
                    {/* Controls row */}
                    <div className="flex items-center gap-3">
                      {/* Color swatches */}
                      <div className="flex gap-1.5">
                        {TEXT_COLORS.map((c) => (
                          <button
                            key={c}
                            type="button"
                            onClick={() => setTextColor(c)}
                            className="w-6 h-6 rounded-full transition-all"
                            style={{
                              background: c,
                              border:
                                textColor === c
                                  ? "2px solid #8b5cf6"
                                  : "2px solid transparent",
                            }}
                          />
                        ))}
                      </div>
                      {/* Style toggles */}
                      <button
                        type="button"
                        onClick={() => setTextBold((v) => !v)}
                        className="w-7 h-7 flex items-center justify-center rounded-lg"
                        style={{ background: textBold ? "#6366f1" : "#1e1e2e" }}
                      >
                        <Bold size={12} className="text-white" />
                      </button>
                      <button
                        type="button"
                        onClick={() => setTextItalic((v) => !v)}
                        className="w-7 h-7 flex items-center justify-center rounded-lg"
                        style={{
                          background: textItalic ? "#6366f1" : "#1e1e2e",
                        }}
                      >
                        <Italic size={12} className="text-white" />
                      </button>
                      <button
                        type="button"
                        onClick={() => setTextShadow((v) => !v)}
                        className="w-7 h-7 flex items-center justify-center rounded-lg text-xs font-bold text-white"
                        style={{
                          background: textShadow ? "#6366f1" : "#1e1e2e",
                        }}
                        title="Shadow"
                      >
                        S
                      </button>
                      <button
                        type="button"
                        onClick={() => setTextBg((v) => !v)}
                        className="w-7 h-7 flex items-center justify-center rounded-lg text-xs font-bold text-white"
                        style={{ background: textBg ? "#6366f1" : "#1e1e2e" }}
                        title="Background"
                      >
                        BG
                      </button>
                    </div>
                    {/* Size */}
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-white/40 shrink-0">
                        Size
                      </span>
                      <Slider
                        data-ocid="reel_editor.text_size.input"
                        value={[textSize]}
                        onValueChange={([v]) => setTextSize(v)}
                        min={12}
                        max={64}
                        step={1}
                        className="flex-1"
                      />
                      <span className="text-xs text-white/60 w-6">
                        {textSize}
                      </span>
                    </div>
                    {/* Add / Cancel */}
                    <div className="flex gap-2">
                      <button
                        type="button"
                        data-ocid="reel_editor.text_submit.button"
                        onClick={handleAddText}
                        className="flex-1 py-1.5 rounded-xl text-white text-xs font-semibold"
                        style={{
                          background:
                            "linear-gradient(135deg, #6366f1, #8b5cf6)",
                        }}
                      >
                        Add
                      </button>
                      <button
                        type="button"
                        data-ocid="reel_editor.text_cancel.button"
                        onClick={() => setShowAddText(false)}
                        className="flex-1 py-1.5 rounded-xl text-white/60 text-xs"
                        style={{ background: "#1e1e2e" }}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )}
              </motion.div>
            )}

            {activeTab === "stickers" && (
              <motion.div
                key="stickers"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.15 }}
                className="px-4 pt-3 pb-2"
              >
                {/* Category tabs */}
                <div className="flex gap-2 mb-2 overflow-x-auto scrollbar-hide">
                  {Object.keys(STICKERS).map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      data-ocid={`reel_editor.sticker_${cat.toLowerCase()}.tab`}
                      onClick={() => setStickerCategory(cat)}
                      className="px-3 py-1 rounded-full text-xs shrink-0 font-medium"
                      style={{
                        background:
                          stickerCategory === cat ? "#6366f1" : "#1e1e2e",
                        color: stickerCategory === cat ? "white" : "#6b7280",
                      }}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {(STICKERS[stickerCategory] || []).map((emoji) => (
                    <button
                      key={emoji}
                      type="button"
                      onClick={() => {
                        setAddedStickers((prev) => [
                          ...prev.slice(-4),
                          {
                            key: `s-${Date.now()}`,
                            emoji,
                            top: `${20 + prev.length * 12}%`,
                          },
                        ]);
                        toast.success(`${emoji} added!`, { duration: 1000 });
                      }}
                      className="w-full aspect-square flex items-center justify-center text-2xl rounded-xl hover:bg-white/10 transition-colors"
                      style={{ background: "#1e1e2e" }}
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === "trim" && (
              <motion.div
                key="trim"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.15 }}
                className="px-4 pt-4 pb-2 flex flex-col gap-3"
              >
                {/* Timeline */}
                <div
                  className="h-10 rounded-xl relative overflow-hidden"
                  style={{ background: "#1e1e2e", border: "1px solid #2a2a3e" }}
                >
                  {/* Selected range */}
                  <div
                    className="absolute top-0 bottom-0 rounded-xl"
                    style={{
                      left: `${(trimStart / 30) * 100}%`,
                      width: `${((trimEnd - trimStart) / 30) * 100}%`,
                      background: "rgba(99,102,241,0.3)",
                      border: "2px solid #6366f1",
                    }}
                  />
                  {/* Waveform bars */}
                  <div className="absolute inset-0 flex items-center gap-0.5 px-2">
                    {WAVEFORM_BARS.map((bar) => (
                      <div
                        key={bar.id}
                        className="flex-1 rounded-full"
                        style={{
                          height: `${bar.h}px`,
                          background:
                            bar.pos >= (trimStart / 30) * 40 &&
                            bar.pos <= (trimEnd / 30) * 40
                              ? "#6366f1"
                              : "#2a2a3e",
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Trim sliders */}
                <div className="flex items-center gap-2">
                  <span className="text-xs text-white/40 w-12 shrink-0">
                    Start
                  </span>
                  <Slider
                    data-ocid="reel_editor.trim_start.input"
                    value={[trimStart]}
                    onValueChange={([v]) =>
                      setTrimStart(Math.min(v, trimEnd - 1))
                    }
                    min={0}
                    max={29}
                    step={1}
                    className="flex-1"
                  />
                  <span className="text-xs text-white/60 font-mono w-8 text-right">
                    {`0:${String(trimStart).padStart(2, "0")}`}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-white/40 w-12 shrink-0">
                    End
                  </span>
                  <Slider
                    data-ocid="reel_editor.trim_end.input"
                    value={[trimEnd]}
                    onValueChange={([v]) =>
                      setTrimEnd(Math.max(v, trimStart + 1))
                    }
                    min={1}
                    max={30}
                    step={1}
                    className="flex-1"
                  />
                  <span className="text-xs text-white/60 font-mono w-8 text-right">
                    {`0:${String(trimEnd).padStart(2, "0")}`}
                  </span>
                </div>

                {/* Controls */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      data-ocid="reel_editor.play_pause.button"
                      onClick={() => setIsPlaying((v) => !v)}
                      className="w-9 h-9 flex items-center justify-center rounded-full"
                      style={{
                        background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                      }}
                    >
                      {isPlaying ? (
                        <Pause size={14} className="text-white" />
                      ) : (
                        <Play
                          size={14}
                          className="text-white fill-white ml-0.5"
                        />
                      )}
                    </button>
                    <span className="text-xs text-white/60 font-mono">
                      {`0:${String(trimStart).padStart(2, "0")} – 0:${String(trimEnd).padStart(2, "0")}`}
                    </span>
                  </div>
                  {/* Speed chips */}
                  <div className="flex gap-1.5">
                    {["0.5x", "1x", "1.5x", "2x"].map((s) => (
                      <button
                        key={s}
                        type="button"
                        data-ocid={`reel_editor.speed_${s}.button`}
                        onClick={() => setSpeed(s)}
                        className="px-2.5 py-1 rounded-full text-xs font-medium"
                        style={{
                          background: speed === s ? "#6366f1" : "#1e1e2e",
                          color: speed === s ? "white" : "#6b7280",
                        }}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ── Tab Bar ── */}
        <div
          className="flex items-center justify-around px-2 py-2 border-t"
          style={{ borderColor: "#1e1e2e" }}
        >
          {(
            [
              { id: "filters", label: "Filters", Icon: Palette },
              { id: "adjust", label: "Adjust", Icon: SlidersHorizontal },
              { id: "effects", label: "Effects", Icon: Sparkles },
              { id: "text", label: "Text", Icon: Type },
              { id: "stickers", label: "Stickers", Icon: Smile },
              { id: "trim", label: "Trim", Icon: Scissors },
            ] as const
          ).map(({ id, label, Icon }) => (
            <button
              key={id}
              type="button"
              data-ocid={`reel_editor.${id}.tab`}
              onClick={() => setActiveTab(id)}
              className="flex flex-col items-center gap-0.5 py-1 px-2 rounded-xl transition-all min-w-[44px]"
              style={{
                background:
                  activeTab === id ? "rgba(99,102,241,0.15)" : "transparent",
              }}
            >
              <Icon
                size={18}
                style={{ color: activeTab === id ? "#a78bfa" : "#4b5563" }}
              />
              <span
                className="text-[9px] font-medium"
                style={{ color: activeTab === id ? "#a78bfa" : "#4b5563" }}
              >
                {label}
              </span>
            </button>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {ratioPanelOpen && (
          <motion.div
            data-ocid="reel_editor.ratio_panel"
            className="fixed inset-0 z-[200] flex items-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setRatioPanelOpen(false)}
          >
            <motion.div
              className="w-full rounded-t-3xl p-6 pb-10"
              style={{
                background: "linear-gradient(180deg, #1a0a2e 0%, #0d0618 100%)",
              }}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-10 h-1 rounded-full bg-white/20 mx-auto mb-5" />
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-white font-bold text-lg">
                  Aspect Ratio / Format
                </h3>
                <button
                  type="button"
                  data-ocid="reel_editor.ratio_panel.close_button"
                  onClick={() => setRatioPanelOpen(false)}
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"
                >
                  <span className="text-white text-sm">✕</span>
                </button>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-5">
                {ASPECT_RATIOS_EDITOR.map((r) => (
                  <button
                    key={r.key}
                    type="button"
                    data-ocid="reel_editor.ratio_panel.ratio_button"
                    onClick={() => {
                      setSelectedRatio(r.key);
                      setRatioPanelOpen(false);
                    }}
                    className="relative rounded-2xl p-4 text-left transition-all duration-200 border-2"
                    style={{
                      background:
                        selectedRatio === r.key
                          ? "rgba(168,85,247,0.15)"
                          : "rgba(255,255,255,0.05)",
                      borderColor:
                        selectedRatio === r.key
                          ? "#a855f7"
                          : "rgba(255,255,255,0.1)",
                    }}
                  >
                    {selectedRatio === r.key && (
                      <div
                        className="absolute top-2 right-2 w-5 h-5 rounded-full flex items-center justify-center"
                        style={{ background: "#a855f7" }}
                      >
                        <Check size={11} className="text-white" />
                      </div>
                    )}
                    <div className="text-lg mb-1">{r.icon}</div>
                    <div className="text-white font-bold text-sm mb-0.5">
                      {r.label}
                    </div>
                    <div className="text-purple-300 font-mono text-[11px] mb-0.5">
                      {r.key}
                    </div>
                    <div className="text-white/50 text-[10px]">
                      {r.resolution}
                    </div>
                    {r.badge && (
                      <div
                        className="mt-1.5 inline-block px-2 py-0.5 rounded-full text-[9px] font-bold text-white"
                        style={{
                          background:
                            "linear-gradient(135deg, #a855f7, #ec4899)",
                        }}
                      >
                        {r.badge}
                      </div>
                    )}
                  </button>
                ))}
              </div>
              <div
                className="rounded-2xl p-4"
                style={{
                  background: "rgba(168,85,247,0.08)",
                  border: "1px solid rgba(168,85,247,0.2)",
                }}
              >
                <div className="flex justify-between text-white/60 text-sm mb-1.5">
                  <span>Format</span>
                  <span className="text-white font-semibold">MP4 (H.264)</span>
                </div>
                <div className="flex justify-between text-white/60 text-sm mb-1.5">
                  <span>Resolution</span>
                  <span className="text-white font-semibold">
                    {currentRatioInfo.resolution}
                  </span>
                </div>
                <div className="flex justify-between text-white/60 text-sm">
                  <span>Duration</span>
                  <span className="text-white font-semibold">
                    {currentRatioInfo.duration}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
