import { Slider } from "@/components/ui/slider";
import {
  Camera,
  Check,
  Droplets,
  Eye,
  FlipHorizontal,
  Heart,
  Layers,
  LayoutGrid,
  MapPin,
  Mic,
  MicOff,
  Music,
  RefreshCw,
  Settings2,
  SmilePlus,
  Sparkles,
  Sun,
  UserCheck,
  Video,
  X,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import MusicPickerPanel, { type Song } from "./MusicPickerPanel";
import ReelAIEditorModal from "./ReelAIEditorModal";

interface Props {
  open: boolean;
  onClose: () => void;
}

type Mode = "camera" | "preview";

const FILTERS: { name: string; css: string }[] = [
  { name: "None", css: "none" },
  { name: "Vivid", css: "saturate(2) contrast(1.1)" },
  { name: "Warm", css: "sepia(0.4) saturate(1.4) brightness(1.05)" },
  { name: "Cool", css: "hue-rotate(200deg) saturate(1.2)" },
  { name: "B&W", css: "grayscale(1)" },
  { name: "Fade", css: "opacity(0.85) brightness(1.1) saturate(0.7)" },
  { name: "Vintage", css: "sepia(0.7) contrast(0.9) brightness(0.95)" },
  { name: "Neon", css: "hue-rotate(280deg) saturate(3) brightness(1.1)" },
  { name: "Golden", css: "sepia(0.5) saturate(1.8) brightness(1.1)" },
  { name: "Arctic", css: "hue-rotate(180deg) saturate(1.5) brightness(1.1)" },
  { name: "Drama", css: "contrast(1.5) saturate(1.3)" },
  { name: "Glow", css: "brightness(1.3) saturate(1.2) contrast(0.9)" },
  { name: "Matte", css: "contrast(0.85) saturate(0.8) brightness(1.05)" },
  { name: "Retro", css: "sepia(0.3) hue-rotate(340deg) saturate(1.5)" },
  { name: "Lomo", css: "contrast(1.4) saturate(1.6) brightness(0.9)" },
  { name: "Soft", css: "brightness(1.15) blur(0.3px) saturate(0.9)" },
  { name: "Sharp", css: "contrast(1.3) saturate(1.1)" },
  { name: "Blush", css: "hue-rotate(340deg) saturate(1.8) brightness(1.05)" },
  { name: "Mint", css: "hue-rotate(120deg) saturate(1.3) brightness(1.1)" },
  { name: "Lilac", css: "hue-rotate(260deg) saturate(1.4) brightness(1.05)" },
  { name: "Sunset", css: "hue-rotate(15deg) saturate(2) brightness(1.05)" },
  { name: "Dusk", css: "hue-rotate(30deg) saturate(1.6) brightness(0.9)" },
  { name: "Ocean", css: "hue-rotate(190deg) saturate(1.8) brightness(1.0)" },
  { name: "Forest", css: "hue-rotate(100deg) saturate(1.5) brightness(0.95)" },
  { name: "Sahara", css: "sepia(0.6) saturate(1.7) brightness(1.1)" },
  { name: "Pink", css: "hue-rotate(320deg) saturate(2) brightness(1.05)" },
  { name: "Ice", css: "hue-rotate(200deg) saturate(0.8) brightness(1.2)" },
  { name: "Cherry", css: "hue-rotate(330deg) saturate(2.2) contrast(1.1)" },
  { name: "Olive", css: "hue-rotate(80deg) saturate(1.2) brightness(0.9)" },
  { name: "Coral", css: "hue-rotate(10deg) saturate(2.1) brightness(1.05)" },
  { name: "Teal", css: "hue-rotate(160deg) saturate(1.7) brightness(1.0)" },
  { name: "Ink", css: "grayscale(0.5) contrast(1.5) brightness(0.85)" },
  { name: "Haze", css: "brightness(1.1) saturate(0.5) contrast(0.85)" },
  { name: "Deep", css: "brightness(0.8) contrast(1.3) saturate(1.4)" },
  { name: "Amber", css: "sepia(0.4) hue-rotate(10deg) saturate(1.8)" },
  { name: "Cyan", css: "hue-rotate(170deg) saturate(2) brightness(1.05)" },
  { name: "Magenta", css: "hue-rotate(300deg) saturate(2.2) brightness(1.05)" },
  { name: "Honey", css: "sepia(0.3) saturate(1.9) brightness(1.1)" },
  { name: "Smoke", css: "grayscale(0.7) brightness(1.1) contrast(0.9)" },
  { name: "Holo", css: "hue-rotate(45deg) saturate(2.5) brightness(1.1)" },
  { name: "X-Pro", css: "contrast(1.4) sepia(0.3) saturate(1.5)" },
  { name: "Rise", css: "brightness(1.2) sepia(0.2) saturate(1.1)" },
  { name: "Hudson", css: "brightness(1.1) contrast(0.8) saturate(1.2)" },
  {
    name: "Valencia",
    css: "sepia(0.2) saturate(1.5) contrast(1.1) brightness(1.05)",
  },
  {
    name: "Amaro",
    css: "hue-rotate(20deg) saturate(1.5) brightness(1.1) contrast(0.9)",
  },
  { name: "Earlybird", css: "sepia(0.5) brightness(0.95) contrast(1.1)" },
  { name: "Inkwell", css: "grayscale(1) contrast(1.1) brightness(1.05)" },
  { name: "Toaster", css: "sepia(0.4) contrast(1.3) saturate(1.3)" },
  { name: "Walden", css: "hue-rotate(350deg) saturate(1.6) brightness(1.1)" },
  {
    name: "Kelvin",
    css: "sepia(0.3) hue-rotate(350deg) saturate(2) brightness(1.05)",
  },
  { name: "Lo-Fi", css: "saturate(1.8) contrast(1.3)" },
  {
    name: "Nashville",
    css: "sepia(0.2) hue-rotate(340deg) saturate(1.4) brightness(1.05)",
  },
  { name: "Clarendon", css: "contrast(1.2) saturate(1.35)" },
  { name: "Gingham", css: "brightness(1.05) hue-rotate(350deg) saturate(0.9)" },
  { name: "Moon", css: "grayscale(1) contrast(1.1) brightness(1.1)" },
  { name: "Lark", css: "brightness(1.1) contrast(0.9) saturate(1.3)" },
  {
    name: "Reyes",
    css: "sepia(0.3) brightness(1.1) contrast(0.85) saturate(0.9)",
  },
  { name: "Juno", css: "hue-rotate(10deg) saturate(1.4) contrast(1.1)" },
  { name: "Slumber", css: "saturate(0.7) brightness(1.05) contrast(0.9)" },
  {
    name: "Crema",
    css: "sepia(0.2) saturate(1.1) brightness(1.1) contrast(0.95)",
  },
  {
    name: "Ludwig",
    css: "sepia(0.1) saturate(1.1) brightness(1.05) contrast(0.95)",
  },
  {
    name: "Aden",
    css: "hue-rotate(20deg) saturate(0.85) brightness(1.15) contrast(0.9)",
  },
  {
    name: "Perpetua",
    css: "hue-rotate(180deg) saturate(1.05) brightness(1.1) contrast(1.0)",
  },
  { name: "Mayfair", css: "contrast(1.1) saturate(1.1)" },
  { name: "Willow", css: "grayscale(0.3) contrast(0.95) brightness(1.05)" },
  { name: "Sierra", css: "contrast(1.2) sepia(0.2) brightness(0.95)" },
  { name: "Skyline", css: "hue-rotate(210deg) saturate(1.4) brightness(1.1)" },
  { name: "Prism", css: "hue-rotate(90deg) saturate(1.8) brightness(1.05)" },
  { name: "Ruby", css: "hue-rotate(345deg) saturate(2.5) brightness(0.95)" },
  { name: "Sapphire", css: "hue-rotate(225deg) saturate(2) brightness(1.0)" },
  { name: "Emerald", css: "hue-rotate(130deg) saturate(2) brightness(1.0)" },
  { name: "Topaz", css: "hue-rotate(50deg) saturate(1.8) brightness(1.05)" },
  { name: "Opal", css: "hue-rotate(270deg) saturate(1.5) brightness(1.15)" },
  { name: "Garnet", css: "hue-rotate(355deg) saturate(2.3) brightness(0.9)" },
  { name: "Bronze", css: "sepia(0.6) hue-rotate(5deg) saturate(1.6)" },
  { name: "Silver", css: "grayscale(0.4) brightness(1.15) contrast(0.95)" },
  { name: "Platinum", css: "grayscale(0.6) brightness(1.25) contrast(0.9)" },
  { name: "Aurora", css: "hue-rotate(150deg) saturate(2.2) brightness(1.05)" },
  { name: "Nebula", css: "hue-rotate(290deg) saturate(2.5) brightness(0.9)" },
  {
    name: "Cosmic",
    css: "invert(0.05) hue-rotate(200deg) saturate(2) brightness(0.95)",
  },
  { name: "Eclipse", css: "brightness(0.7) contrast(1.5) saturate(1.3)" },
  { name: "Solar", css: "brightness(1.3) saturate(1.8) contrast(1.1)" },
  { name: "Lunar", css: "brightness(0.9) grayscale(0.5) contrast(1.1)" },
  { name: "Vibe", css: "hue-rotate(60deg) saturate(2) brightness(1.05)" },
  { name: "Pop", css: "saturate(2.5) contrast(1.2) brightness(1.05)" },
  { name: "Grunge", css: "contrast(1.5) saturate(0.6) brightness(0.85)" },
  {
    name: "Film",
    css: "sepia(0.15) contrast(1.05) brightness(0.98) saturate(1.1)",
  },
  { name: "Night", css: "brightness(0.6) contrast(1.3) saturate(1.5)" },
  { name: "Nite", css: "hue-rotate(240deg) brightness(0.7) saturate(1.8)" },
  { name: "Dreamy", css: "brightness(1.15) blur(0.5px) saturate(1.3)" },
  { name: "Glam", css: "brightness(1.2) saturate(1.6) contrast(1.05)" },
  { name: "Pulse", css: "hue-rotate(330deg) saturate(1.9) contrast(1.15)" },
  { name: "Storm", css: "grayscale(0.3) contrast(1.4) brightness(0.85)" },
  {
    name: "Blaze",
    css: "hue-rotate(20deg) saturate(2.8) brightness(1.1) contrast(1.1)",
  },
  { name: "Frost", css: "hue-rotate(200deg) brightness(1.2) saturate(0.8)" },
  { name: "Breeze", css: "hue-rotate(170deg) saturate(1.2) brightness(1.15)" },
  {
    name: "Rustic",
    css: "sepia(0.5) contrast(1.2) brightness(0.95) hue-rotate(5deg)",
  },
  { name: "Metro", css: "contrast(1.3) saturate(0.85) brightness(1.05)" },
];

// Beauty effect definitions
interface BeautyEffect {
  id: string;
  name: string;
  nameHi: string;
  icon: React.ReactNode;
  baseCss: string;
  baseTransform?: string;
}

const BEAUTY_EFFECTS: BeautyEffect[] = [
  {
    id: "smooth",
    name: "Smooth",
    nameHi: "स्मूथ",
    icon: <Droplets size={18} />,
    baseCss: "blur(0.3px) brightness(1.05) contrast(0.95)",
  },
  {
    id: "brighten",
    name: "Brighten",
    nameHi: "ब्राइट",
    icon: <Sun size={18} />,
    baseCss: "brightness(1.2) contrast(0.9)",
  },
  {
    id: "slim",
    name: "Slim",
    nameHi: "स्लिम",
    icon: <UserCheck size={18} />,
    baseCss: "",
    baseTransform: "scaleX(0.95)",
  },
  {
    id: "bigenyes",
    name: "Big Eyes",
    nameHi: "बड़ी आँखें",
    icon: <Eye size={18} />,
    baseCss: "",
    baseTransform: "scale(1.02)",
  },
  {
    id: "lipstick",
    name: "Lipstick",
    nameHi: "लिपस्टिक",
    icon: <SmilePlus size={18} />,
    baseCss: "saturate(1.3) hue-rotate(5deg)",
  },
  {
    id: "blush",
    name: "Blush",
    nameHi: "ब्लश",
    icon: <Heart size={18} />,
    baseCss: "sepia(0.1) saturate(1.2)",
  },
  {
    id: "contour",
    name: "Contour",
    nameHi: "कंटूर",
    icon: <Layers size={18} />,
    baseCss: "contrast(1.1) brightness(0.95)",
  },
];

function interpolateBeautyCss(effect: BeautyEffect, intensity: number): string {
  if (intensity === 0 || !effect.baseCss) return "";
  const t = intensity / 100;
  const raw = effect.baseCss;
  const blurMatch = raw.match(/blur\(([\d.]+)px\)/);
  const brightnessMatch = raw.match(/brightness\(([\d.]+)\)/);
  const contrastMatch = raw.match(/contrast\(([\d.]+)\)/);
  const saturateMatch = raw.match(/saturate\(([\d.]+)\)/);
  const hueMatch = raw.match(/hue-rotate\(([\d.]+)deg\)/);
  const sepiaMatch = raw.match(/sepia\(([\d.]+)\)/);
  const parts: string[] = [];
  if (blurMatch)
    parts.push(`blur(${(Number.parseFloat(blurMatch[1]) * t).toFixed(2)}px)`);
  if (brightnessMatch) {
    const base = Number.parseFloat(brightnessMatch[1]);
    parts.push(`brightness(${(1 + (base - 1) * t).toFixed(3)})`);
  }
  if (contrastMatch) {
    const base = Number.parseFloat(contrastMatch[1]);
    parts.push(`contrast(${(1 + (base - 1) * t).toFixed(3)})`);
  }
  if (saturateMatch) {
    const base = Number.parseFloat(saturateMatch[1]);
    parts.push(`saturate(${(1 + (base - 1) * t).toFixed(3)})`);
  }
  if (hueMatch)
    parts.push(
      `hue-rotate(${(Number.parseFloat(hueMatch[1]) * t).toFixed(1)}deg)`,
    );
  if (sepiaMatch)
    parts.push(`sepia(${(Number.parseFloat(sepiaMatch[1]) * t).toFixed(3)})`);
  return parts.join(" ");
}

function interpolateBeautyTransform(
  effect: BeautyEffect,
  intensity: number,
): string {
  if (intensity === 0 || !effect.baseTransform) return "";
  const t = intensity / 100;
  const raw = effect.baseTransform;
  const scaleXMatch = raw.match(/scaleX\(([\d.]+)\)/);
  const scaleMatch = !scaleXMatch && raw.match(/scale\(([\d.]+)\)/);
  if (scaleXMatch) {
    const base = Number.parseFloat(scaleXMatch[1]);
    return `scaleX(${(1 + (base - 1) * t).toFixed(4)})`;
  }
  if (scaleMatch) {
    const base = Number.parseFloat(scaleMatch[1]);
    return `scale(${(1 + (base - 1) * t).toFixed(4)})`;
  }
  return "";
}

export default function CameraReelModal({ open, onClose }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const previewRef = useRef<HTMLVideoElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const [mode, setMode] = useState<Mode>("camera");
  const [isRecording, setIsRecording] = useState(false);
  const [recordedUrl, setRecordedUrl] = useState<string | null>(null);
  const [elapsed, setElapsed] = useState(0);
  const [facingMode, setFacingMode] = useState<"user" | "environment">("user");
  const [micEnabled, setMicEnabled] = useState(true);
  const [cameraError, setCameraError] = useState<string | null>(null);
  const [aiEditorOpen, setAiEditorOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState(0);

  // Beauty state
  const [beautyMode, setBeautyMode] = useState(false);
  const [beautyPanelOpen, setBeautyPanelOpen] = useState(false);
  const [selectedBeautyEffect, setSelectedBeautyEffect] = useState<
    string | null
  >(null);
  const [beautyIntensity, setBeautyIntensity] = useState(70);

  // Music state
  const [selectedMusic, setSelectedMusic] = useState<Song | null>(null);
  const [isMusicPickerOpen, setIsMusicPickerOpen] = useState(false);

  // Location state
  const [locationTag, setLocationTag] = useState<string | null>(null);
  const [locationPermModal, setLocationPermModal] = useState(false);
  const [locationLoading, setLocationLoading] = useState(false);
  const [locationError, setLocationError] = useState<string | null>(null);

  // Video Quality / Resolution state
  const [qualityPanelOpen, setQualityPanelOpen] = useState(false);
  const [selectedResolution, setSelectedResolution] = useState<"1080p" | "4K">(
    "1080p",
  );
  const [selectedFps, setSelectedFps] = useState<30 | 60>(30);

  // Aspect Ratio state
  type AspectRatioKey = "9:16" | "1:1" | "4:5" | "16:9";
  const ASPECT_RATIOS: {
    key: AspectRatioKey;
    label: string;
    icon: string;
    resolution: string;
    badge?: string;
    duration: string;
    storyInfo?: string;
  }[] = [
    {
      key: "9:16",
      label: "Reels / Story",
      icon: "📱",
      resolution: "1080 × 1920",
      badge: "Best for Reels",
      duration: "3 – 90 sec",
      storyInfo: "Stories: 15 sec/slide",
    },
    {
      key: "1:1",
      label: "Square",
      icon: "⬜",
      resolution: "1080 × 1080",
      duration: "3 – 60 sec",
    },
    {
      key: "4:5",
      label: "Portrait",
      icon: "🖼️",
      resolution: "1080 × 1350",
      badge: "Best Engagement 👍",
      duration: "3 – 60 sec",
    },
    {
      key: "16:9",
      label: "Landscape",
      icon: "🖥️",
      resolution: "1080 × 566",
      duration: "3 – 60 sec",
    },
  ];
  const [selectedRatio, setSelectedRatio] = useState<AspectRatioKey>("9:16");
  const [ratioPanelOpen, setRatioPanelOpen] = useState(false);
  const currentRatioInfo = ASPECT_RATIOS.find((r) => r.key === selectedRatio)!;

  const MAX_SECONDS = 60;

  const stopStream = useCallback(() => {
    if (streamRef.current) {
      for (const t of streamRef.current.getTracks()) t.stop();
      streamRef.current = null;
    }
  }, []);

  const startCamera = useCallback(
    async (facing: "user" | "environment", mic: boolean) => {
      setIsLoading(true);
      setCameraError(null);
      stopStream();
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: facing,
            width: { ideal: 720 },
            height: { ideal: 1280 },
          },
          audio: mic,
        });
        streamRef.current = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
        }
      } catch {
        setCameraError(
          "Camera access denied. Please allow camera permission and try again.",
        );
      } finally {
        setIsLoading(false);
      }
    },
    [stopStream],
  );

  // biome-ignore lint/correctness/useExhaustiveDependencies: intentionally only runs on open change
  useEffect(() => {
    if (open && mode === "camera") {
      startCamera(facingMode, micEnabled);
    }
    if (!open) {
      stopStream();
      setMode("camera");
      setIsRecording(false);
      if (recordedUrl) URL.revokeObjectURL(recordedUrl);
      setRecordedUrl(null);
      setElapsed(0);
      setSelectedFilter(0);
      setBeautyMode(false);
      setBeautyPanelOpen(false);
      setSelectedBeautyEffect(null);
      setBeautyIntensity(70);
      setSelectedMusic(null);
      setIsMusicPickerOpen(false);
    }
  }, [open]);

  const requestLocation = async () => {
    setLocationLoading(true);
    setLocationError(null);
    setLocationPermModal(false);
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        try {
          const { latitude, longitude } = pos.coords;
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`,
          );
          const data = await res.json();
          const city =
            data.address?.city ||
            data.address?.town ||
            data.address?.village ||
            data.address?.county ||
            "";
          const country = data.address?.country || "";
          setLocationTag(city ? `${city}, ${country}` : country || "Unknown");
        } catch {
          setLocationTag("Location tagged");
        }
        setLocationLoading(false);
      },
      (err) => {
        setLocationLoading(false);
        if (err.code === err.PERMISSION_DENIED) {
          setLocationError(
            "Location access denied. You can enable it in browser settings.",
          );
        } else {
          setLocationError("Unable to get location. Please try again.");
        }
      },
      { timeout: 10000, maximumAge: 60000 },
    );
  };

  const flipCamera = () => {
    const next = facingMode === "user" ? "environment" : "user";
    setFacingMode(next);
    if (next === "user") {
      setBeautyMode(true);
      setBeautyPanelOpen(true);
    }
    startCamera(next, micEnabled);
  };

  const toggleMic = () => {
    const next = !micEnabled;
    setMicEnabled(next);
    startCamera(facingMode, next);
  };

  const stopRecording = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (
      mediaRecorderRef.current &&
      mediaRecorderRef.current.state !== "inactive"
    ) {
      mediaRecorderRef.current.stop();
    }
    setIsRecording(false);
  }, []);

  const startRecording = () => {
    if (!streamRef.current || isRecording) return;
    chunksRef.current = [];
    const mimeType = MediaRecorder.isTypeSupported("video/webm;codecs=vp9")
      ? "video/webm;codecs=vp9"
      : "video/webm";
    const mr = new MediaRecorder(streamRef.current, { mimeType });
    mr.ondataavailable = (e) => {
      if (e.data.size > 0) chunksRef.current.push(e.data);
    };
    mr.onstop = () => {
      const blob = new Blob(chunksRef.current, { type: "video/webm" });
      const url = URL.createObjectURL(blob);
      setRecordedUrl(url);
      setMode("preview");
      stopStream();
    };
    mr.start(100);
    mediaRecorderRef.current = mr;
    setIsRecording(true);
    setElapsed(0);
    timerRef.current = setInterval(() => {
      setElapsed((prev) => {
        if (prev + 1 >= MAX_SECONDS) {
          stopRecording();
          return MAX_SECONDS;
        }
        return prev + 1;
      });
    }, 1000);
  };

  const handleRetake = () => {
    if (recordedUrl) URL.revokeObjectURL(recordedUrl);
    setRecordedUrl(null);
    setMode("camera");
    setElapsed(0);
    startCamera(facingMode, micEnabled);
  };

  const handleUseVideo = () => {
    onClose();
    setTimeout(() => setAiEditorOpen(true), 300);
  };

  const toggleBeautyMode = () => {
    const next = !beautyMode;
    setBeautyMode(next);
    setBeautyPanelOpen(next);
    if (!next) setSelectedBeautyEffect(null);
  };

  const handleBeautyEffectSelect = (id: string) => {
    setSelectedBeautyEffect((prev) => (prev === id ? null : id));
  };

  // Build combined CSS filter: color filter + beauty effects
  const activeColorFilter = FILTERS[selectedFilter].css;
  const activeBeautyEffect =
    beautyMode && selectedBeautyEffect
      ? BEAUTY_EFFECTS.find((e) => e.id === selectedBeautyEffect)
      : null;
  const beautyCss = activeBeautyEffect
    ? interpolateBeautyCss(activeBeautyEffect, beautyIntensity)
    : "";
  const beautyTransform = activeBeautyEffect
    ? interpolateBeautyTransform(activeBeautyEffect, beautyIntensity)
    : "";
  const combinedFilter =
    [activeColorFilter !== "none" ? activeColorFilter : "", beautyCss]
      .filter(Boolean)
      .join(" ") || "none";
  const mirrorTransform = facingMode === "user" ? "scaleX(-1)" : "";
  const combinedTransform =
    [mirrorTransform, beautyTransform].filter(Boolean).join(" ") || "none";

  const formatTime = (s: number) =>
    `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, "0")}`;
  const progress = (elapsed / MAX_SECONDS) * 100;

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            data-ocid="camera_reel.modal"
            className="fixed inset-0 z-[70] bg-black flex flex-col"
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Recording progress bar */}
            {isRecording && (
              <div className="absolute top-0 left-0 right-0 z-20 h-1">
                <div
                  className="h-full transition-all duration-1000"
                  style={{
                    background: "linear-gradient(90deg, #a855f7, #ec4899)",
                    width: `${progress}%`,
                  }}
                />
              </div>
            )}

            {/* Top bar */}
            <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-4 pt-10 pb-3">
              <button
                type="button"
                data-ocid="camera_reel.close_button"
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center"
              >
                <X size={20} className="text-white" />
              </button>

              <div className="flex flex-col items-center gap-1">
                <div
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-white text-[12px] font-semibold"
                  style={{
                    background: "linear-gradient(135deg, #a855f7, #ec4899)",
                  }}
                >
                  <Sparkles size={12} />
                  AI Reel
                </div>
                {selectedFilter !== 0 && (
                  <div className="px-2 py-0.5 rounded-full bg-black/60 text-[10px] text-purple-300 font-semibold">
                    {FILTERS[selectedFilter].name}
                  </div>
                )}
                {facingMode === "user" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-500/80 text-white backdrop-blur-sm"
                  >
                    SELFIE
                  </motion.div>
                )}
                {beautyMode && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(236,72,153,0.8), rgba(168,85,247,0.8))",
                      color: "#fff",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    ✨ Beauty: ON
                    {selectedBeautyEffect && (
                      <span className="opacity-80">· {beautyIntensity}%</span>
                    )}
                  </motion.div>
                )}
              </div>

              <div className="flex flex-col gap-2">
                {mode === "camera" && (
                  <>
                    {/* Music button */}
                    <button
                      type="button"
                      data-ocid="camera_reel.music_button"
                      onClick={() => setIsMusicPickerOpen(true)}
                      disabled={isRecording}
                      className="w-10 h-10 rounded-full backdrop-blur-sm flex items-center justify-center disabled:opacity-40 transition-all duration-200"
                      style={{
                        background: selectedMusic
                          ? "linear-gradient(135deg, #a855f7, #ec4899)"
                          : "rgba(0,0,0,0.5)",
                        boxShadow: selectedMusic
                          ? "0 0 12px rgba(168,85,247,0.7)"
                          : "none",
                      }}
                    >
                      <Music size={18} className="text-white" />
                    </button>
                    {/* Beauty toggle button */}
                    <button
                      type="button"
                      data-ocid="camera_reel.beauty_toggle"
                      onClick={toggleBeautyMode}
                      disabled={isRecording}
                      className="w-10 h-10 rounded-full backdrop-blur-sm flex items-center justify-center disabled:opacity-40 transition-all duration-200"
                      style={{
                        background: beautyMode
                          ? "linear-gradient(135deg, #ec4899, #a855f7)"
                          : "rgba(0,0,0,0.5)",
                        boxShadow: beautyMode
                          ? "0 0 12px rgba(236,72,153,0.7)"
                          : "none",
                      }}
                    >
                      <Sparkles size={18} className="text-white" />
                    </button>
                    <button
                      type="button"
                      data-ocid="camera_reel.flip_button"
                      onClick={flipCamera}
                      disabled={isRecording}
                      className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center disabled:opacity-40"
                    >
                      <FlipHorizontal size={18} className="text-white" />
                    </button>
                    <button
                      type="button"
                      data-ocid="camera_reel.mic_button"
                      onClick={toggleMic}
                      disabled={isRecording}
                      className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center disabled:opacity-40"
                    >
                      {micEnabled ? (
                        <Mic size={18} className="text-white" />
                      ) : (
                        <MicOff size={18} className="text-red-400" />
                      )}
                    </button>
                    {/* Quality settings button */}
                    <button
                      type="button"
                      data-ocid="camera_reel.quality_button"
                      onClick={() => setQualityPanelOpen(true)}
                      disabled={isRecording}
                      className="w-10 h-10 rounded-full backdrop-blur-sm flex items-center justify-center disabled:opacity-40 transition-all duration-200 relative"
                      style={{ background: "rgba(0,0,0,0.5)" }}
                    >
                      <Settings2 size={18} className="text-white" />
                      <span className="absolute -bottom-0.5 -right-0.5 text-[8px] font-bold text-purple-300 leading-none">
                        {selectedResolution}
                      </span>
                    </button>
                    {/* Aspect Ratio button */}
                    <button
                      type="button"
                      data-ocid="camera_reel.ratio_button"
                      onClick={() => setRatioPanelOpen(true)}
                      disabled={isRecording}
                      className="w-10 h-10 rounded-full backdrop-blur-sm flex items-center justify-center disabled:opacity-40 transition-all duration-200 relative"
                      style={{ background: "rgba(0,0,0,0.5)" }}
                    >
                      <LayoutGrid size={16} className="text-white" />
                      <span className="absolute -bottom-0.5 -right-0.5 text-[8px] font-bold text-pink-300 leading-none">
                        {selectedRatio}
                      </span>
                    </button>
                    {/* Location button */}
                    <button
                      type="button"
                      data-ocid="camera_reel.location_button"
                      onClick={() => {
                        if (locationTag) {
                          setLocationTag(null);
                        } else {
                          setLocationPermModal(true);
                        }
                      }}
                      disabled={isRecording || locationLoading}
                      className="w-10 h-10 rounded-full backdrop-blur-sm flex items-center justify-center disabled:opacity-40 transition-all duration-200"
                      style={{
                        background: locationTag
                          ? "linear-gradient(135deg, #22c55e, #16a34a)"
                          : "rgba(0,0,0,0.5)",
                        boxShadow: locationTag
                          ? "0 0 12px rgba(34,197,94,0.7)"
                          : "none",
                      }}
                    >
                      {locationLoading ? (
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <MapPin size={18} className="text-white" />
                      )}
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Camera view */}
            {mode === "camera" && (
              <div className="flex-1 relative overflow-hidden">
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black z-10">
                    <div className="w-10 h-10 border-2 border-white/20 border-t-purple-500 rounded-full animate-spin" />
                  </div>
                )}
                {cameraError && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black z-10 px-8 text-center gap-4">
                    <Camera size={48} className="text-white/30" />
                    <p className="text-white/70 text-sm">{cameraError}</p>
                    <button
                      type="button"
                      onClick={() => startCamera(facingMode, micEnabled)}
                      className="px-4 py-2 rounded-xl text-white text-sm font-medium"
                      style={{
                        background: "linear-gradient(135deg, #a855f7, #ec4899)",
                      }}
                    >
                      Try Again
                    </button>
                  </div>
                )}
                <video
                  ref={videoRef}
                  autoPlay
                  playsInline
                  muted
                  className="w-full h-full object-cover transition-all duration-300"
                  style={{
                    transform: combinedTransform,
                    filter: combinedFilter,
                  }}
                />
                {isRecording && (
                  <div className="absolute top-16 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/90 backdrop-blur-sm">
                    <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    <span className="text-white text-sm font-bold">
                      {formatTime(elapsed)}
                    </span>
                    <span className="text-white/60 text-xs">
                      / {formatTime(MAX_SECONDS)}
                    </span>
                  </div>
                )}
                {/* Location badge */}
                {locationTag && (
                  <div
                    data-ocid="camera_reel.location_badge"
                    className="absolute bottom-4 left-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full"
                    style={{
                      background: "rgba(0,0,0,0.65)",
                      backdropFilter: "blur(8px)",
                      border: "1px solid rgba(34,197,94,0.4)",
                    }}
                  >
                    <MapPin
                      size={11}
                      className="text-green-400 flex-shrink-0"
                    />
                    <span className="text-white text-[11px] font-medium">
                      {locationTag}
                    </span>
                  </div>
                )}
                {/* Ratio badge on preview */}
                <div
                  data-ocid="camera_reel.ratio_badge"
                  className="absolute top-4 left-4 flex items-center gap-1 px-2 py-0.5 rounded-full"
                  style={{
                    background: "rgba(0,0,0,0.6)",
                    backdropFilter: "blur(6px)",
                    border: "1px solid rgba(168,85,247,0.35)",
                  }}
                >
                  <span className="text-[10px]">{currentRatioInfo.icon}</span>
                  <span className="text-white text-[10px] font-bold">
                    {selectedRatio}
                  </span>
                </div>
                {locationError && (
                  <div
                    data-ocid="camera_reel.location_error"
                    className="absolute bottom-4 left-4 right-4 flex items-center gap-2 px-3 py-2 rounded-xl"
                    style={{
                      background: "rgba(239,68,68,0.85)",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    <MapPin size={12} className="text-white flex-shrink-0" />
                    <span className="text-white text-xs">{locationError}</span>
                    <button
                      type="button"
                      onClick={() => setLocationError(null)}
                      className="ml-auto"
                    >
                      <X size={12} className="text-white/70" />
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Preview view */}
            {mode === "preview" && recordedUrl && (
              <div className="flex-1 relative overflow-hidden">
                <video
                  ref={previewRef}
                  src={recordedUrl}
                  autoPlay
                  loop
                  playsInline
                  className="w-full h-full object-cover transition-all duration-300"
                  style={{ filter: combinedFilter }}
                >
                  <track kind="captions" />
                </video>
                <div className="absolute top-16 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm">
                    <Check size={12} className="text-green-400" />
                    <span className="text-white text-xs font-medium">
                      {formatTime(elapsed)} recorded
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Beauty Effects Panel */}
            <AnimatePresence>
              {beautyMode && beautyPanelOpen && mode === "camera" && (
                <motion.div
                  data-ocid="camera_reel.beauty.panel"
                  className="absolute z-20"
                  style={{
                    bottom: selectedBeautyEffect ? 220 : 176,
                    left: 12,
                    right: 12,
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                >
                  <div
                    className="rounded-2xl p-3"
                    style={{
                      background: "rgba(0,0,0,0.55)",
                      backdropFilter: "blur(16px)",
                      border: "1px solid rgba(168,85,247,0.35)",
                      boxShadow: "0 4px 24px rgba(168,85,247,0.15)",
                    }}
                  >
                    <div className="flex items-center justify-between mb-2.5">
                      <div className="flex items-center gap-1.5">
                        <Sparkles size={13} className="text-pink-400" />
                        <span className="text-[11px] font-bold text-white/90">
                          Beauty Effects
                        </span>
                        <span className="text-[10px] text-purple-300 font-medium">
                          BeautyPlus
                        </span>
                      </div>
                      <button
                        type="button"
                        data-ocid="camera_reel.beauty.close_button"
                        onClick={() => setBeautyPanelOpen(false)}
                        className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center"
                      >
                        <X size={10} className="text-white/70" />
                      </button>
                    </div>
                    <div
                      className="flex items-center gap-2 overflow-x-auto pb-1"
                      style={{ scrollbarWidth: "none" }}
                    >
                      {BEAUTY_EFFECTS.map((effect) => {
                        const isActive = selectedBeautyEffect === effect.id;
                        return (
                          <button
                            key={effect.id}
                            type="button"
                            data-ocid={`camera_reel.beauty.${effect.id}.button`}
                            onClick={() => handleBeautyEffectSelect(effect.id)}
                            className="flex-shrink-0 flex flex-col items-center gap-1.5 transition-all duration-200"
                          >
                            <div
                              className="w-11 h-11 rounded-2xl flex items-center justify-center transition-all duration-200"
                              style={{
                                background: isActive
                                  ? "linear-gradient(135deg, #ec4899, #a855f7)"
                                  : "rgba(255,255,255,0.12)",
                                border: isActive
                                  ? "2px solid rgba(236,72,153,0.8)"
                                  : "2px solid rgba(255,255,255,0.1)",
                                boxShadow: isActive
                                  ? "0 0 10px rgba(236,72,153,0.5)"
                                  : "none",
                                color: isActive
                                  ? "#fff"
                                  : "rgba(255,255,255,0.75)",
                              }}
                            >
                              {effect.icon}
                            </div>
                            <span
                              className="text-[9px] font-semibold leading-tight text-center"
                              style={{
                                color: isActive
                                  ? "#f9a8d4"
                                  : "rgba(255,255,255,0.6)",
                              }}
                            >
                              {effect.name}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                    <AnimatePresence>
                      {selectedBeautyEffect && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="mt-3 pt-2.5 border-t border-white/10">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-[10px] text-white/60 font-medium">
                                Intensity
                              </span>
                              <span
                                className="text-[11px] font-bold"
                                style={{
                                  background:
                                    "linear-gradient(135deg, #ec4899, #a855f7)",
                                  WebkitBackgroundClip: "text",
                                  WebkitTextFillColor: "transparent",
                                }}
                              >
                                {beautyIntensity}%
                              </span>
                            </div>
                            <Slider
                              data-ocid="camera_reel.beauty.intensity_slider"
                              min={0}
                              max={100}
                              step={1}
                              value={[beautyIntensity]}
                              onValueChange={([v]) => setBeautyIntensity(v)}
                              className="w-full"
                            />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Filter Strip */}
            <div
              className="absolute left-0 right-0 z-10"
              style={{ bottom: beautyMode && beautyPanelOpen ? 0 : 128 }}
            >
              <div
                className="flex gap-2 px-3 py-2 overflow-x-auto"
                style={{ scrollbarWidth: "none" }}
              >
                {FILTERS.map((filter, idx) => (
                  <button
                    key={filter.name}
                    type="button"
                    onClick={() => setSelectedFilter(idx)}
                    className="flex-shrink-0 flex flex-col items-center gap-1"
                  >
                    <div
                      className="w-12 h-12 rounded-xl overflow-hidden border-2 transition-all duration-200"
                      style={{
                        borderColor:
                          selectedFilter === idx
                            ? "#a855f7"
                            : "rgba(255,255,255,0.2)",
                        boxShadow:
                          selectedFilter === idx
                            ? "0 0 8px rgba(168,85,247,0.8)"
                            : "none",
                      }}
                    >
                      <div
                        className="w-full h-full"
                        style={{
                          background:
                            "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f64f59 100%)",
                          filter: filter.css,
                        }}
                      />
                    </div>
                    <span
                      className="text-[9px] font-semibold"
                      style={{
                        color:
                          selectedFilter === idx
                            ? "#c084fc"
                            : "rgba(255,255,255,0.6)",
                      }}
                    >
                      {filter.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Bottom controls */}
            <div className="absolute bottom-0 left-0 right-0 pb-8 px-8 flex flex-col items-center gap-3">
              {mode === "camera" ? (
                <>
                  {/* Music info bar */}
                  <AnimatePresence>
                    {selectedMusic && (
                      <motion.div
                        data-ocid="camera_reel.music_bar"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        className="w-full flex items-center gap-2.5 px-3.5 py-2 rounded-2xl"
                        style={{
                          background: "rgba(0,0,0,0.7)",
                          backdropFilter: "blur(12px)",
                          border: "1px solid rgba(168,85,247,0.35)",
                        }}
                      >
                        <div
                          className="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center"
                          style={{
                            background:
                              "linear-gradient(135deg, #a855f7, #ec4899)",
                            animation: "spin 3s linear infinite",
                          }}
                        >
                          <Music size={12} className="text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-white text-xs font-semibold truncate">
                            {selectedMusic.title}
                          </p>
                          <p className="text-white/50 text-[10px] truncate">
                            {selectedMusic.artist}
                          </p>
                        </div>
                        <button
                          type="button"
                          data-ocid="camera_reel.music_remove.button"
                          onClick={() => setSelectedMusic(null)}
                          className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center"
                        >
                          <X size={11} className="text-white/70" />
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="flex items-center justify-center gap-12 w-full">
                    <div className="w-12" />
                    {/* Record button */}
                    <button
                      type="button"
                      data-ocid="camera_reel.record_button"
                      onClick={() => {
                        if (isRecording) stopRecording();
                        else startRecording();
                      }}
                      className="relative w-20 h-20 rounded-full flex items-center justify-center"
                      style={{
                        boxShadow: isRecording
                          ? "0 0 0 4px #ef4444, 0 0 20px rgba(239,68,68,0.5)"
                          : "0 0 0 4px rgba(255,255,255,0.8)",
                      }}
                    >
                      <motion.div
                        className="rounded-full"
                        animate={{
                          width: isRecording ? 32 : 56,
                          height: isRecording ? 32 : 56,
                          borderRadius: isRecording ? 8 : 28,
                        }}
                        style={{
                          background: isRecording
                            ? "#ef4444"
                            : "linear-gradient(135deg, #a855f7, #ec4899)",
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 25,
                        }}
                      />
                    </button>
                    <button
                      type="button"
                      onClick={flipCamera}
                      disabled={isRecording}
                      className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center disabled:opacity-30"
                    >
                      <RefreshCw size={20} className="text-white" />
                    </button>
                  </div>
                  <p className="text-white/40 text-xs">
                    {isRecording
                      ? "Tap to stop"
                      : `Tap to record — max ${MAX_SECONDS}s`}
                  </p>
                </>
              ) : (
                <div className="flex items-center gap-4 w-full">
                  <button
                    type="button"
                    data-ocid="camera_reel.retake_button"
                    onClick={handleRetake}
                    className="flex-1 py-3.5 rounded-2xl border border-white/30 text-white font-bold text-[15px] flex items-center justify-center gap-2 bg-black/40 backdrop-blur-sm"
                  >
                    <Video size={16} />
                    Retake
                  </button>
                  <button
                    type="button"
                    data-ocid="camera_reel.use_video_button"
                    onClick={handleUseVideo}
                    className="flex-1 py-3.5 rounded-2xl text-white font-bold text-[15px] flex items-center justify-center gap-2"
                    style={{
                      background: "linear-gradient(135deg, #a855f7, #ec4899)",
                    }}
                  >
                    <Sparkles size={16} />
                    Edit with AI
                  </button>
                </div>
              )}
            </div>

            {/* Flash on record start */}
            <AnimatePresence>
              {isRecording && (
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  initial={{ opacity: 0.4 }}
                  animate={{ opacity: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(168,85,247,0.3), rgba(236,72,153,0.3))",
                  }}
                />
              )}
            </AnimatePresence>

            {/* Pulse hint */}
            {!isRecording &&
              mode === "camera" &&
              !cameraError &&
              !isLoading && (
                <motion.div
                  className="absolute bottom-48 left-1/2 -translate-x-1/2 pointer-events-none"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: [0, 0.7, 0], scale: [0.8, 1, 0.8] }}
                  transition={{
                    duration: 2,
                    repeat: 3,
                    ease: "easeInOut",
                    delay: 1.5,
                  }}
                >
                  <Zap
                    size={28}
                    className="text-purple-400"
                    fill="rgba(168,85,247,0.3)"
                  />
                </motion.div>
              )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Quality Panel */}
      <AnimatePresence>
        {qualityPanelOpen && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setQualityPanelOpen(false)}
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
              {/* Handle */}
              <div className="w-10 h-1 rounded-full bg-white/20 mx-auto mb-5" />
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-white font-bold text-lg">Video Quality</h3>
                <button
                  type="button"
                  onClick={() => setQualityPanelOpen(false)}
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"
                >
                  <X size={16} className="text-white" />
                </button>
              </div>

              {/* Resolution */}
              <p className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-3">
                Resolution
              </p>
              <div className="grid grid-cols-2 gap-3 mb-5">
                {[
                  {
                    key: "1080p" as const,
                    label: "1080p Full HD",
                    sub: "1920 × 1080 / 1080 × 1920",
                    badge: "✅ Best",
                    color: "#a855f7",
                  },
                  {
                    key: "4K" as const,
                    label: "4K Ultra HD",
                    sub: "3840 × 2160",
                    badge: "⚡ High Storage",
                    color: "#ec4899",
                  },
                ].map((r) => (
                  <button
                    key={r.key}
                    type="button"
                    onClick={() => setSelectedResolution(r.key)}
                    className="relative rounded-2xl p-4 text-left transition-all duration-200 border-2"
                    style={{
                      background:
                        selectedResolution === r.key
                          ? `${r.color}20`
                          : "rgba(255,255,255,0.05)",
                      borderColor:
                        selectedResolution === r.key
                          ? r.color
                          : "rgba(255,255,255,0.1)",
                    }}
                  >
                    {selectedResolution === r.key && (
                      <div
                        className="absolute top-2 right-2 w-5 h-5 rounded-full flex items-center justify-center"
                        style={{ background: r.color }}
                      >
                        <Check size={11} className="text-white" />
                      </div>
                    )}
                    <div className="text-white font-bold text-sm mb-0.5">
                      {r.label}
                    </div>
                    <div className="text-white/50 text-[10px] mb-1.5">
                      {r.sub}
                    </div>
                    <div
                      className="text-[10px] font-semibold"
                      style={{ color: r.color }}
                    >
                      {r.badge}
                    </div>
                  </button>
                ))}
              </div>

              {/* 1080p info box */}
              {selectedResolution === "1080p" && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-xl p-3 mb-5 text-xs text-purple-200"
                  style={{
                    background: "rgba(168,85,247,0.15)",
                    border: "1px solid rgba(168,85,247,0.3)",
                  }}
                >
                  <span className="font-bold text-purple-300">Reels Mode:</span>{" "}
                  1080 × 1920 (9:16 portrait) &nbsp;|&nbsp;{" "}
                  <span className="font-bold text-purple-300">Landscape:</span>{" "}
                  1920 × 1080 (16:9)
                </motion.div>
              )}

              {/* FPS */}
              <p className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-3">
                Frame Rate (FPS)
              </p>
              <div className="grid grid-cols-2 gap-3 mb-5">
                {[
                  {
                    key: 30 as const,
                    label: "30 FPS",
                    sub: "Standard · Lower battery",
                    badge: "🔋 Recommended",
                  },
                  {
                    key: 60 as const,
                    label: "60 FPS",
                    sub: "Smooth · Higher battery",
                    badge: "🎬 Cinematic",
                  },
                ].map((f) => (
                  <button
                    key={f.key}
                    type="button"
                    onClick={() => setSelectedFps(f.key)}
                    className="relative rounded-2xl p-4 text-left transition-all duration-200 border-2"
                    style={{
                      background:
                        selectedFps === f.key
                          ? "rgba(168,85,247,0.2)"
                          : "rgba(255,255,255,0.05)",
                      borderColor:
                        selectedFps === f.key
                          ? "#a855f7"
                          : "rgba(255,255,255,0.1)",
                    }}
                  >
                    {selectedFps === f.key && (
                      <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-purple-500 flex items-center justify-center">
                        <Check size={11} className="text-white" />
                      </div>
                    )}
                    <div className="text-white font-bold text-sm mb-0.5">
                      {f.label}
                    </div>
                    <div className="text-white/50 text-[10px] mb-1.5">
                      {f.sub}
                    </div>
                    <div className="text-[10px] font-semibold text-purple-300">
                      {f.badge}
                    </div>
                  </button>
                ))}
              </div>

              {/* Format info */}
              <div
                className="rounded-xl p-3 text-xs"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <div className="flex justify-between text-white/60 mb-1">
                  <span>Format</span>
                  <span className="text-white font-semibold">MP4 (H.264)</span>
                </div>
                <div className="flex justify-between text-white/60">
                  <span>Bitrate</span>
                  <span className="text-white font-semibold">
                    10 – 20 Mbps (High)
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Aspect Ratio Panel */}
      <AnimatePresence>
        {ratioPanelOpen && (
          <motion.div
            data-ocid="camera_reel.ratio_panel"
            className="fixed inset-0 z-[80] flex items-end"
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
                  data-ocid="camera_reel.ratio_panel.close_button"
                  onClick={() => setRatioPanelOpen(false)}
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"
                >
                  <X size={16} className="text-white" />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-5">
                {ASPECT_RATIOS.map((r) => (
                  <button
                    key={r.key}
                    type="button"
                    data-ocid="camera_reel.ratio_panel.ratio_button"
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

              {/* Format info */}
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
                <div className="flex justify-between text-white/60 text-sm mb-1.5">
                  <span>Duration</span>
                  <span className="text-white font-semibold">
                    {currentRatioInfo.duration}
                  </span>
                </div>
                {currentRatioInfo.storyInfo && (
                  <div className="flex justify-between text-white/60 text-sm">
                    <span>Stories</span>
                    <span className="text-pink-300 font-semibold">
                      {currentRatioInfo.storyInfo}
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Music Picker Panel */}
      {/* Location Permission Modal */}
      <AnimatePresence>
        {locationPermModal && (
          <motion.div
            data-ocid="camera_reel.location_modal"
            className="fixed inset-0 z-[200] flex items-center justify-center px-6"
            style={{
              background: "rgba(0,0,0,0.75)",
              backdropFilter: "blur(8px)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="w-full max-w-xs rounded-3xl p-6 flex flex-col gap-4"
              style={{
                background: "linear-gradient(135deg, #1e1b4b 0%, #2d1b69 100%)",
                border: "1px solid rgba(168,85,247,0.35)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
              }}
              initial={{ scale: 0.85, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.85, y: 30 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            >
              <div className="flex flex-col items-center gap-3 text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, #22c55e, #16a34a)",
                  }}
                >
                  <MapPin size={28} className="text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">
                    📍 Location Permission
                  </h3>
                  <p className="text-white/60 text-sm mt-1 leading-relaxed">
                    Reels पर location tag लगाने के लिए GPS access चाहिए।
                    <br />
                    <span className="text-white/40 text-xs">
                      We need GPS to tag your Reel with your location.
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex gap-3 mt-1">
                <button
                  type="button"
                  data-ocid="camera_reel.location_modal.skip_button"
                  onClick={() => setLocationPermModal(false)}
                  className="flex-1 py-2.5 rounded-2xl text-white/70 text-sm font-medium transition-all"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  Skip
                </button>
                <button
                  type="button"
                  data-ocid="camera_reel.location_modal.allow_button"
                  onClick={requestLocation}
                  className="flex-1 py-2.5 rounded-2xl text-white text-sm font-bold transition-all"
                  style={{
                    background: "linear-gradient(135deg, #22c55e, #16a34a)",
                    boxShadow: "0 4px 16px rgba(34,197,94,0.4)",
                  }}
                >
                  Allow Location
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <MusicPickerPanel
        open={isMusicPickerOpen}
        onClose={() => setIsMusicPickerOpen(false)}
        selectedSong={selectedMusic}
        onSelect={(song) => setSelectedMusic(song)}
      />

      <ReelAIEditorModal
        open={aiEditorOpen}
        onClose={() => setAiEditorOpen(false)}
      />
    </>
  );
}
