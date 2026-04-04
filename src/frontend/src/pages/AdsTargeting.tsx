import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { ArrowLeft, Target, TrendingUp, Users, Zap } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { useApp } from "../context/AppContext";

const INTERESTS = [
  "Fashion",
  "Tech",
  "Music",
  "Gaming",
  "Food",
  "Travel",
  "Sports",
  "Fitness",
  "Education",
  "Finance",
  "Entertainment",
  "Bollywood",
];

const STATES = [
  "Maharashtra",
  "Delhi",
  "UP",
  "Bihar",
  "Gujarat",
  "Rajasthan",
  "Karnataka",
  "Tamil Nadu",
  "West Bengal",
  "Punjab",
];

const PRESETS = [
  {
    id: "broad",
    label: "Broad",
    labelHindi: "व्यापक",
    desc: "Max reach",
    reach: "50M+",
    cpm: 15,
    icon: "🌐",
    color: "from-green-600 to-teal-600",
  },
  {
    id: "balanced",
    label: "Balanced",
    labelHindi: "संतुलित",
    desc: "Recommended",
    reach: "5M",
    cpm: 35,
    icon: "⚖️",
    color: "from-blue-600 to-purple-600",
    recommended: true,
  },
  {
    id: "precise",
    label: "Precise",
    labelHindi: "सटीक",
    desc: "Max ROI",
    reach: "500K",
    cpm: 85,
    icon: "🎯",
    color: "from-orange-600 to-red-600",
  },
];

export default function AdsTargeting() {
  const { navigate } = useApp();
  const [ageRange, setAgeRange] = useState([18, 45]);
  const [gender, setGender] = useState("all");
  const [selectedStates, setSelectedStates] = useState<string[]>([
    "Maharashtra",
    "Delhi",
  ]);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([
    "Tech",
    "Entertainment",
  ]);
  const [devices, setDevices] = useState({
    mobile: true,
    desktop: false,
    tablet: false,
  });
  const [preset, setPreset] = useState("balanced");

  const toggleState = (s: string) =>
    setSelectedStates((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s],
    );

  const toggleInterest = (i: string) =>
    setSelectedInterests((prev) =>
      prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i],
    );

  const selectedPreset = PRESETS.find((p) => p.id === preset);

  // Dynamic reach based on selections
  const reachPct = preset === "broad" ? 90 : preset === "balanced" ? 55 : 20;
  const estimatedReach =
    preset === "broad" ? "50M+" : preset === "balanced" ? "5M" : "500K";

  return (
    <div
      className="min-h-screen px-4 py-6 pb-20"
      style={{ background: "linear-gradient(180deg,#0B0F14 0%,#11161D 100%)" }}
    >
      <div className="flex items-center gap-3 mb-6">
        <button
          type="button"
          onClick={() => navigate("/")}
          className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center"
          data-ocid="ads_targeting.back_button"
        >
          <ArrowLeft size={18} className="text-white" />
        </button>
        <div>
          <h1 className="text-white text-xl font-bold">दर्शक टार्गेटिंग</h1>
          <p className="text-white/50 text-xs">Audience Targeting</p>
        </div>
      </div>

      {/* Presets */}
      <div className="grid grid-cols-3 gap-2 mb-6">
        {PRESETS.map((p) => (
          <button
            type="button"
            key={p.id}
            data-ocid={`ads_targeting.${p.id}.toggle`}
            onClick={() => setPreset(p.id)}
            className={`relative rounded-2xl p-3 border transition-all text-center ${
              preset === p.id
                ? "border-purple-500/50 bg-white/10"
                : "border-white/10 bg-white/5"
            }`}
          >
            {p.recommended && (
              <Badge className="absolute -top-2 left-1/2 -translate-x-1/2 bg-purple-600 text-white border-0 text-[8px] px-1.5">
                ⭐
              </Badge>
            )}
            <div className="text-xl mb-1">{p.icon}</div>
            <p
              className={`text-xs font-bold ${
                preset === p.id ? "text-white" : "text-white/60"
              }`}
            >
              {p.label}
            </p>
            <p className="text-white/40 text-[10px]">{p.desc}</p>
            <p
              className={`text-[10px] font-bold mt-1 ${
                preset === p.id ? "text-purple-400" : "text-white/30"
              }`}
            >
              ₹{p.cpm} CPM
            </p>
          </button>
        ))}
      </div>

      {/* Estimated Reach */}
      <motion.div
        className="bg-white/5 rounded-2xl p-4 border border-white/10 mb-5"
        key={preset}
        initial={{ scale: 0.97 }}
        animate={{ scale: 1 }}
      >
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Users size={14} className="text-blue-400" />
            <span className="text-white text-sm font-semibold">
              Estimated Reach
            </span>
          </div>
          <span className="text-purple-400 font-bold">{estimatedReach}</span>
        </div>
        <div className="h-3 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className={`h-full bg-gradient-to-r ${selectedPreset?.color}`}
            initial={{ width: 0 }}
            animate={{ width: `${reachPct}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <div className="flex justify-between mt-1">
          <span className="text-white/40 text-[10px]">Narrow</span>
          <span className="text-white/40 text-[10px]">Broad</span>
        </div>
      </motion.div>

      {/* Demographics */}
      <div className="bg-white/5 rounded-2xl p-4 border border-white/10 mb-4">
        <h3 className="text-white font-semibold text-sm mb-4">
          👤 Demographics
        </h3>

        {/* Age */}
        <div className="mb-4">
          <div className="flex justify-between mb-2">
            <span className="text-white/60 text-xs">Age Range</span>
            <span className="text-white text-xs font-bold">
              {ageRange[0]} – {ageRange[1]}
            </span>
          </div>
          <Slider
            data-ocid="ads_targeting.age.slider"
            value={ageRange}
            onValueChange={(v) => setAgeRange(v)}
            min={13}
            max={65}
            step={1}
            className="w-full"
          />
        </div>

        {/* Gender */}
        <div className="mb-2">
          <p className="text-white/60 text-xs mb-2">Gender</p>
          <div className="flex gap-2">
            {["all", "male", "female"].map((g) => (
              <button
                type="button"
                key={g}
                data-ocid={`ads_targeting.gender_${g}.toggle`}
                onClick={() => setGender(g)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                  gender === g
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                    : "bg-white/5 text-white/50 border border-white/10"
                }`}
              >
                {g === "all" ? "All" : g === "male" ? "Male" : "Female"}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Location */}
      <div className="bg-white/5 rounded-2xl p-4 border border-white/10 mb-4">
        <h3 className="text-white font-semibold text-sm mb-3">
          📍 Location (States)
        </h3>
        <div className="flex flex-wrap gap-2">
          {STATES.map((s) => (
            <button
              type="button"
              key={s}
              data-ocid={`ads_targeting.state_${s.toLowerCase().replace(" ", "_")}.toggle`}
              onClick={() => toggleState(s)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                selectedStates.includes(s)
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                  : "bg-white/5 text-white/50 border border-white/10"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Interests */}
      <div className="bg-white/5 rounded-2xl p-4 border border-white/10 mb-4">
        <h3 className="text-white font-semibold text-sm mb-3">
          💡 Interest Categories
        </h3>
        <div className="flex flex-wrap gap-2">
          {INTERESTS.map((interest) => (
            <button
              type="button"
              key={interest}
              data-ocid={`ads_targeting.interest_${interest.toLowerCase()}.toggle`}
              onClick={() => toggleInterest(interest)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                selectedInterests.includes(interest)
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                  : "bg-white/5 text-white/50 border border-white/10"
              }`}
            >
              {interest}
            </button>
          ))}
        </div>
      </div>

      {/* Devices */}
      <div className="bg-white/5 rounded-2xl p-4 border border-white/10 mb-6">
        <h3 className="text-white font-semibold text-sm mb-3">
          📱 Device Targeting
        </h3>
        <div className="space-y-3">
          {(["mobile", "desktop", "tablet"] as const).map((d) => (
            <div key={d} className="flex items-center justify-between">
              <span className="text-white/70 text-sm capitalize">
                {d === "mobile"
                  ? "📱 Mobile"
                  : d === "desktop"
                    ? "💻 Desktop"
                    : "📟 Tablet"}
              </span>
              <Switch
                data-ocid={`ads_targeting.device_${d}.switch`}
                checked={devices[d]}
                onCheckedChange={(v) =>
                  setDevices((prev) => ({ ...prev, [d]: v }))
                }
              />
            </div>
          ))}
        </div>
      </div>

      {/* CPM info */}
      <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 rounded-2xl p-4 border border-purple-500/20 mb-6">
        <div className="flex items-center gap-2 mb-2">
          <TrendingUp size={14} className="text-purple-400" />
          <span className="text-white text-sm font-semibold">
            Current CPM Estimate
          </span>
        </div>
        <p className="text-white/60 text-xs mb-2">Cost per 1000 impressions</p>
        <p className="text-white font-bold text-2xl">
          ₹{selectedPreset?.cpm}{" "}
          <span className="text-white/40 text-sm">CPM</span>
        </p>
      </div>

      <button
        type="button"
        data-ocid="ads_targeting.apply.primary_button"
        onClick={() =>
          toast.success(
            "Targeting applied! Campaign will use new audience settings ✅",
          )
        }
        className="w-full py-4 rounded-2xl text-white font-bold text-base bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center gap-2"
      >
        <Target size={18} /> Apply Targeting / टार्गेटिंग लागू करें
      </button>
    </div>
  );
}
