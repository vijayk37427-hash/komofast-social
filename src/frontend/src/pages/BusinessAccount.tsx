import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  BadgeCheck,
  BarChart2,
  Briefcase,
  Building2,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  ChevronUp,
  DollarSign,
  Eye,
  FlaskConical,
  IndianRupee,
  MousePointerClick,
  Pause,
  Play,
  Plus,
  Settings,
  Smartphone,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Video,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { useApp } from "../context/AppContext";

const TABS = ["Earning", "Ads Manager", "Insights"] as const;
type Tab = (typeof TABS)[number];

const CAMPAIGNS = [
  {
    id: 1,
    name: "Reel Boost – Dance Tutorial",
    status: "active",
    budget: 500,
    spent: 312,
    impressions: 48200,
    clicks: 1840,
    ctr: 3.8,
    reach: 31000,
    objective: "Video Views",
    adType: "video",
    commissionEarned: 2400,
  },
  {
    id: 2,
    name: "Academy Course Promo",
    status: "active",
    budget: 1000,
    spent: 687,
    impressions: 92400,
    clicks: 3120,
    ctr: 3.4,
    reach: 67000,
    objective: "Sales",
    adType: "image",
    commissionEarned: 8600,
  },
  {
    id: 3,
    name: "Digital Market eBook",
    status: "paused",
    budget: 300,
    spent: 201,
    impressions: 22000,
    clicks: 660,
    ctr: 3.0,
    reach: 15200,
    objective: "App Install",
    adType: "app",
    commissionEarned: 1200,
  },
];

const CLIENT_CAMPAIGNS = [
  {
    id: 1,
    client: "Raj Clothing Store",
    budget: 15000,
    status: "active",
    charge: 8000,
    revenue: 42000,
  },
  {
    id: 2,
    client: "Priya Beauty Salon",
    budget: 8000,
    status: "active",
    charge: 5000,
    revenue: 18500,
  },
  {
    id: 3,
    client: "TechGadgets Shop",
    budget: 25000,
    status: "paused",
    charge: 12000,
    revenue: 0,
  },
];

const EARNING_BREAKDOWN = [
  {
    icon: "📹",
    label: "Reel Ad Revenue",
    amount: 3240,
    change: "+12%",
    positive: true,
  },
  {
    icon: "📣",
    label: "Sponsored Posts",
    amount: 4800,
    change: "+22%",
    positive: true,
  },
  {
    icon: "🎓",
    label: "Academy Sales",
    amount: 5600,
    change: "+8%",
    positive: true,
  },
  {
    icon: "💎",
    label: "Digital Market",
    amount: 1900,
    change: "+15%",
    positive: true,
  },
  {
    icon: "💝",
    label: "Donations",
    amount: 710,
    change: "+5%",
    positive: true,
  },
  {
    icon: "👥",
    label: "Referrals",
    amount: 1800,
    change: "+25%",
    positive: true,
  },
];

const MONTHLY = [
  { month: "Oct", earn: 8200, adSpend: 1200 },
  { month: "Nov", earn: 9100, adSpend: 1500 },
  { month: "Dec", earn: 11400, adSpend: 1800 },
  { month: "Jan", earn: 10800, adSpend: 1300 },
  { month: "Feb", earn: 13200, adSpend: 2100 },
  { month: "Mar", earn: 14050, adSpend: 1700 },
];

const maxEarn = Math.max(...MONTHLY.map((d) => d.earn));

const INTERESTS = [
  "Fashion",
  "Beauty",
  "Food",
  "Travel",
  "Tech",
  "Sports",
  "Music",
  "Fitness",
  "Gaming",
  "Education",
  "Business",
  "Movies",
];

function EarningTab() {
  return (
    <div className="space-y-5">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="rounded-2xl p-5 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, rgba(47,168,255,0.22) 0%, rgba(168,85,247,0.28) 100%)",
          border: "1px solid rgba(168,85,247,0.35)",
          boxShadow:
            "0 8px 32px rgba(168,85,247,0.2), 0 2px 8px rgba(47,168,255,0.15)",
        }}
      >
        <div
          className="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, #a855f7, transparent)",
          }}
        />
        <div
          className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, #2fa8ff, transparent)",
          }}
        />
        <div className="flex items-center gap-2 mb-1">
          <Badge
            className="text-[10px] font-bold px-2 py-0.5"
            style={{
              background: "rgba(47,168,255,0.25)",
              color: "#93c5fd",
              border: "1px solid rgba(47,168,255,0.4)",
            }}
          >
            <Briefcase size={9} className="mr-1" /> BUSINESS ACCOUNT
          </Badge>
          <Badge
            className="text-[10px] font-bold px-2 py-0.5"
            style={{
              background: "rgba(34,197,94,0.2)",
              color: "#4ade80",
              border: "1px solid rgba(34,197,94,0.35)",
            }}
          >
            <BadgeCheck size={9} className="mr-1" /> Verified
          </Badge>
        </div>
        <p className="text-[11px] text-white/50 uppercase tracking-widest mt-3">
          Total Earned
        </p>
        <p className="text-[34px] font-bold text-white leading-tight">
          ₹18,050<span className="text-[20px]">.00</span>
        </p>
        <div className="flex items-center gap-2 mt-1 mb-4">
          <span className="text-[12px] text-green-400 font-semibold flex items-center gap-1">
            <TrendingUp size={12} /> +18% this month
          </span>
          <span className="text-white/30">·</span>
          <span className="text-[12px] text-yellow-300">🪙 8,400 KomoCoin</span>
        </div>
        <div className="flex gap-3">
          <Button
            className="komo-gradient border-0 text-white flex-1 h-9 text-[13px] font-semibold"
            onClick={() => toast.success("Withdrawal request submitted!")}
          >
            <DollarSign size={14} className="mr-1.5" /> Withdraw
          </Button>
          <Button
            variant="outline"
            className="flex-1 h-9 text-[13px] font-semibold border-white/30 text-white hover:bg-white/10"
            onClick={() => toast.info("Payout history आ रहा है!")}
          >
            <BarChart2 size={14} className="mr-1.5" /> History
          </Button>
        </div>
      </motion.div>

      <div>
        <p className="text-[13px] font-semibold text-komo-text-secondary mb-3 flex items-center gap-1.5">
          <DollarSign size={14} className="text-komo-blue" /> Earning Breakdown
        </p>
        <div className="grid grid-cols-2 gap-3">
          {EARNING_BREAKDOWN.map((src, i) => (
            <motion.div
              key={src.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
              className="rounded-2xl p-4"
              style={{
                background:
                  "linear-gradient(135deg, rgba(47,168,255,0.07), rgba(168,85,247,0.1))",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div className="flex items-start justify-between mb-2">
                <span className="text-[22px]">{src.icon}</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-green-500/15 text-green-400 border border-green-500/25">
                  {src.change}
                </span>
              </div>
              <p className="text-[18px] font-bold komo-gradient-text leading-tight">
                ₹{src.amount.toLocaleString()}
              </p>
              <p className="text-[11px] text-komo-text-muted mt-0.5">
                {src.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.3 }}
        className="komo-surface rounded-2xl p-4"
        style={{ border: "1px solid rgba(255,255,255,0.08)" }}
      >
        <p className="text-[13px] font-semibold text-foreground mb-4 flex items-center gap-1.5">
          <TrendingUp size={14} className="text-komo-purple" /> Monthly Earnings
          vs Ad Spend
        </p>
        <div className="space-y-3">
          {MONTHLY.map((d, i) => (
            <div key={d.month} className="flex items-center gap-3">
              <span className="text-[11px] text-komo-text-muted w-7 flex-shrink-0">
                {d.month}
              </span>
              <div className="flex-1 space-y-1">
                <div className="h-3 rounded-full overflow-hidden bg-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(d.earn / maxEarn) * 100}%` }}
                    transition={{
                      duration: 0.7,
                      delay: 0.3 + i * 0.07,
                      ease: "easeOut",
                    }}
                    className="h-full rounded-full"
                    style={{
                      background: "linear-gradient(90deg, #2fa8ff, #a855f7)",
                    }}
                  />
                </div>
                <div className="h-2 rounded-full overflow-hidden bg-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(d.adSpend / maxEarn) * 100}%` }}
                    transition={{
                      duration: 0.7,
                      delay: 0.35 + i * 0.07,
                      ease: "easeOut",
                    }}
                    className="h-full rounded-full"
                    style={{
                      background: "linear-gradient(90deg, #f97316, #ef4444)",
                    }}
                  />
                </div>
              </div>
              <span className="text-[11px] font-semibold komo-gradient-text w-12 text-right flex-shrink-0">
                ₹{(d.earn / 1000).toFixed(1)}K
              </span>
            </div>
          ))}
        </div>
        <div className="flex gap-4 mt-3">
          <div className="flex items-center gap-1.5">
            <div
              className="w-3 h-3 rounded-full"
              style={{ background: "linear-gradient(90deg, #2fa8ff, #a855f7)" }}
            />
            <span className="text-[11px] text-komo-text-muted">Earning</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div
              className="w-3 h-3 rounded-full"
              style={{ background: "linear-gradient(90deg, #f97316, #ef4444)" }}
            />
            <span className="text-[11px] text-komo-text-muted">Ad Spend</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function AdsManagerTab() {
  const [campaigns, setCampaigns] = useState(CAMPAIGNS);
  const [clientCampaigns, setClientCampaigns] = useState(CLIENT_CAMPAIGNS);
  const [showCreate, setShowCreate] = useState(false);
  const [createStep, setCreateStep] = useState(1);
  const [activeSection, setActiveSection] = useState<"own" | "client">("own");
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [abTesting, setAbTesting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    objective: "Video Views",
    adType: "video",
    budget: "",
    duration: "7",
    ageMin: "18",
    ageMax: "35",
    location: "India",
    productFocus: "",
    commissionRate: "10",
    variantA: "",
    variantB: "",
  });

  const toggleInterest = (interest: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((i) => i !== interest)
        : [...prev, interest],
    );
  };

  const toggleStatus = (id: number) => {
    setCampaigns((prev) =>
      prev.map((c) =>
        c.id === id
          ? { ...c, status: c.status === "active" ? "paused" : "active" }
          : c,
      ),
    );
    toast.success("Campaign status updated!");
  };

  const createCampaign = () => {
    if (!form.name || !form.budget) {
      toast.error("Campaign name और budget डालें");
      return;
    }
    setCampaigns((prev) => [
      {
        id: prev.length + 1,
        name: form.name,
        status: "active",
        budget: Number(form.budget),
        spent: 0,
        impressions: 0,
        clicks: 0,
        ctr: 0,
        reach: 0,
        objective: form.objective,
        adType: form.adType,
        commissionEarned: 0,
      },
      ...prev,
    ]);
    setShowCreate(false);
    setCreateStep(1);
    setSelectedInterests([]);
    setAbTesting(false);
    setForm({
      name: "",
      objective: "Video Views",
      adType: "video",
      budget: "",
      duration: "7",
      ageMin: "18",
      ageMax: "35",
      location: "India",
      productFocus: "",
      commissionRate: "10",
      variantA: "",
      variantB: "",
    });
    toast.success("Campaign launch हो गया! 🚀");
  };

  const adTypeIcon = (type: string) => {
    if (type === "video") return <Video size={11} className="text-blue-400" />;
    if (type === "app")
      return <Smartphone size={11} className="text-green-400" />;
    return <Eye size={11} className="text-purple-400" />;
  };

  const STEP_LABELS = ["Ad Type", "Audience", "Product", "Budget"];

  return (
    <div className="space-y-5">
      {/* Stats Row */}
      <div className="grid grid-cols-3 gap-3">
        {[
          {
            label: "Total Spend",
            value: "₹1,200",
            icon: <DollarSign size={14} className="text-red-400" />,
            color: "rgba(239,68,68,0.15)",
          },
          {
            label: "Total Reach",
            value: "1.13L",
            icon: <Eye size={14} className="text-blue-400" />,
            color: "rgba(59,130,246,0.15)",
          },
          {
            label: "Commission",
            value: "₹12.2K",
            icon: <IndianRupee size={14} className="text-green-400" />,
            color: "rgba(34,197,94,0.15)",
          },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl p-3 text-center"
            style={{
              background: stat.color,
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div className="flex justify-center mb-1">{stat.icon}</div>
            <p className="text-[15px] font-bold text-foreground">
              {stat.value}
            </p>
            <p className="text-[10px] text-komo-text-muted">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Section Tabs: Own / Client */}
      <div className="flex gap-2">
        {(["own", "client"] as const).map((sec) => (
          <button
            key={sec}
            type="button"
            onClick={() => setActiveSection(sec)}
            className="flex-1 h-9 rounded-full text-[12px] font-semibold transition-all"
            style={{
              background:
                activeSection === sec
                  ? "linear-gradient(135deg, #2fa8ff, #a855f7)"
                  : "rgba(255,255,255,0.06)",
              color: activeSection === sec ? "#fff" : "rgba(255,255,255,0.5)",
              border:
                activeSection === sec
                  ? "none"
                  : "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {sec === "own" ? "🎯 Apne Ads" : "🏢 Client Ads"}
          </button>
        ))}
      </div>

      {activeSection === "own" && (
        <div className="space-y-4">
          {/* Create Button */}
          <Button
            className="w-full komo-gradient border-0 text-white h-10 text-[13px] font-semibold"
            onClick={() => {
              setShowCreate(!showCreate);
              setCreateStep(1);
            }}
          >
            <Plus size={15} className="mr-2" /> New Campaign बनाएं
          </Button>

          {/* Step-by-step Campaign Creator */}
          <AnimatePresence>
            {showCreate && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="rounded-2xl p-4 space-y-4"
                style={{
                  background: "rgba(47,168,255,0.07)",
                  border: "1px solid rgba(47,168,255,0.2)",
                }}
              >
                {/* Step Indicator */}
                <div className="flex items-center gap-1 mb-2">
                  {STEP_LABELS.map((label, i) => (
                    <div
                      key={label}
                      className="flex-1 flex flex-col items-center gap-1"
                    >
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold transition-all ${createStep > i + 1 ? "bg-green-500 text-white" : createStep === i + 1 ? "bg-komo-blue text-white" : "bg-white/10 text-white/30"}`}
                      >
                        {createStep > i + 1 ? (
                          <CheckCircle2 size={12} />
                        ) : (
                          i + 1
                        )}
                      </div>
                      <span
                        className={`text-[9px] text-center leading-tight ${createStep === i + 1 ? "text-komo-blue font-semibold" : "text-white/30"}`}
                      >
                        {label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Step 1: Ad Type + Objective */}
                {createStep === 1 && (
                  <div className="space-y-3">
                    <p className="text-[13px] font-semibold text-foreground flex items-center gap-1.5">
                      <Video size={13} className="text-komo-blue" /> Ad Type चुनें
                    </p>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        {
                          type: "video",
                          label: "🎥 Video",
                          desc: "Zyada reach",
                        },
                        {
                          type: "image",
                          label: "🖼️ Image",
                          desc: "Single product",
                        },
                        {
                          type: "app",
                          label: "📱 App Install",
                          desc: "Users badhao",
                        },
                      ].map((opt) => (
                        <button
                          key={opt.type}
                          type="button"
                          onClick={() => setForm({ ...form, adType: opt.type })}
                          className="p-3 rounded-xl text-center transition-all"
                          style={{
                            background:
                              form.adType === opt.type
                                ? "rgba(47,168,255,0.2)"
                                : "rgba(255,255,255,0.04)",
                            border: `1px solid ${form.adType === opt.type ? "rgba(47,168,255,0.5)" : "rgba(255,255,255,0.08)"}`,
                          }}
                        >
                          <p className="text-[14px]">
                            {opt.label.split(" ")[0]}
                          </p>
                          <p className="text-[11px] font-semibold text-foreground">
                            {opt.label.split(" ").slice(1).join(" ")}
                          </p>
                          <p className="text-[10px] text-komo-text-muted">
                            {opt.desc}
                          </p>
                        </button>
                      ))}
                    </div>
                    <input
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-[13px] text-foreground placeholder-komo-text-muted focus:outline-none focus:border-komo-blue"
                      placeholder="Campaign का नाम"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                    />
                    <select
                      className="w-full bg-[#11161D] border border-white/10 rounded-xl px-3 py-2 text-[13px] text-foreground focus:outline-none focus:border-komo-blue"
                      value={form.objective}
                      onChange={(e) =>
                        setForm({ ...form, objective: e.target.value })
                      }
                    >
                      <option value="Video Views">🎥 Video Views</option>
                      <option value="Traffic">🌐 Traffic</option>
                      <option value="Sales">💰 Sales (Commission)</option>
                      <option value="App Install">📱 App Install</option>
                      <option value="Brand Awareness">
                        📣 Brand Awareness
                      </option>
                      <option value="Engagement">❤️ Engagement</option>
                    </select>
                    <Button
                      className="w-full komo-gradient border-0 text-white h-9 text-[13px]"
                      onClick={() => setCreateStep(2)}
                    >
                      अगला →
                    </Button>
                  </div>
                )}

                {/* Step 2: Audience Targeting */}
                {createStep === 2 && (
                  <div className="space-y-3">
                    <p className="text-[13px] font-semibold text-foreground flex items-center gap-1.5">
                      <Users size={13} className="text-komo-purple" /> Audience
                      Target करें
                    </p>
                    <div>
                      <p className="text-[11px] text-komo-text-muted mb-2">
                        Age Range
                      </p>
                      <div className="flex gap-2 items-center">
                        <select
                          className="flex-1 bg-[#11161D] border border-white/10 rounded-xl px-3 py-2 text-[13px] text-foreground focus:outline-none focus:border-komo-blue"
                          value={form.ageMin}
                          onChange={(e) =>
                            setForm({ ...form, ageMin: e.target.value })
                          }
                        >
                          {["13", "18", "21", "25", "30", "35", "40", "45"].map(
                            (a) => (
                              <option key={a} value={a}>
                                {a}
                              </option>
                            ),
                          )}
                        </select>
                        <span className="text-komo-text-muted text-[13px]">
                          –
                        </span>
                        <select
                          className="flex-1 bg-[#11161D] border border-white/10 rounded-xl px-3 py-2 text-[13px] text-foreground focus:outline-none focus:border-komo-blue"
                          value={form.ageMax}
                          onChange={(e) =>
                            setForm({ ...form, ageMax: e.target.value })
                          }
                        >
                          {[
                            "25",
                            "30",
                            "35",
                            "40",
                            "45",
                            "50",
                            "55",
                            "65+",
                          ].map((a) => (
                            <option key={a} value={a}>
                              {a}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div>
                      <p className="text-[11px] text-komo-text-muted mb-2">
                        Location
                      </p>
                      <select
                        className="w-full bg-[#11161D] border border-white/10 rounded-xl px-3 py-2 text-[13px] text-foreground focus:outline-none focus:border-komo-blue"
                        value={form.location}
                        onChange={(e) =>
                          setForm({ ...form, location: e.target.value })
                        }
                      >
                        <option value="India">🇮🇳 India (All)</option>
                        <option value="Delhi">Delhi NCR</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Bangalore">Bangalore</option>
                        <option value="UP-Bihar">UP / Bihar</option>
                        <option value="South">South India</option>
                      </select>
                    </div>
                    <div>
                      <p className="text-[11px] text-komo-text-muted mb-2">
                        Interests चुनें ({selectedInterests.length} selected)
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {INTERESTS.map((interest) => (
                          <button
                            key={interest}
                            type="button"
                            onClick={() => toggleInterest(interest)}
                            className="px-3 py-1 rounded-full text-[11px] font-medium transition-all"
                            style={{
                              background: selectedInterests.includes(interest)
                                ? "rgba(47,168,255,0.25)"
                                : "rgba(255,255,255,0.06)",
                              border: `1px solid ${selectedInterests.includes(interest) ? "rgba(47,168,255,0.5)" : "rgba(255,255,255,0.1)"}`,
                              color: selectedInterests.includes(interest)
                                ? "#93c5fd"
                                : "rgba(255,255,255,0.5)",
                            }}
                          >
                            {interest}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        className="flex-1 h-9 text-[12px] border-white/20 text-white hover:bg-white/10"
                        onClick={() => setCreateStep(1)}
                      >
                        ← पीछे
                      </Button>
                      <Button
                        className="flex-1 komo-gradient border-0 text-white h-9 text-[13px]"
                        onClick={() => setCreateStep(3)}
                      >
                        अगला →
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 3: Product Focus */}
                {createStep === 3 && (
                  <div className="space-y-3">
                    <p className="text-[13px] font-semibold text-foreground flex items-center gap-1.5">
                      <Target size={13} className="text-yellow-400" /> Product
                      Focus
                    </p>
                    <div
                      className="rounded-xl p-3"
                      style={{
                        background: "rgba(255,200,50,0.08)",
                        border: "1px solid rgba(255,200,50,0.2)",
                      }}
                    >
                      <p className="text-[11px] text-yellow-300 font-semibold mb-1">
                        💡 Pro Tip
                      </p>
                      <p className="text-[11px] text-komo-text-muted">
                        Ek campaign mein sirf ek product focus karo — zyada
                        conversion aata hai!
                      </p>
                    </div>
                    <input
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-[13px] text-foreground placeholder-komo-text-muted focus:outline-none focus:border-komo-blue"
                      placeholder="Product/Service ka naam (e.g. Dance Course ₹999)"
                      value={form.productFocus}
                      onChange={(e) =>
                        setForm({ ...form, productFocus: e.target.value })
                      }
                    />
                    {form.objective === "Sales (Commission)" ||
                    form.objective === "Sales" ? (
                      <div>
                        <p className="text-[11px] text-komo-text-muted mb-1">
                          Commission % (har sale pe)
                        </p>
                        <div className="flex items-center gap-2">
                          <input
                            type="number"
                            className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-[13px] text-foreground placeholder-komo-text-muted focus:outline-none focus:border-komo-blue"
                            placeholder="e.g. 10"
                            value={form.commissionRate}
                            onChange={(e) =>
                              setForm({
                                ...form,
                                commissionRate: e.target.value,
                              })
                            }
                          />
                          <span className="text-[14px] font-bold text-green-400">
                            %
                          </span>
                        </div>
                        <p className="text-[10px] text-green-400 mt-1">
                          ₹1000 sale pe = ₹
                          {(
                            (1000 * Number(form.commissionRate || 0)) /
                            100
                          ).toFixed(0)}{" "}
                          commission
                        </p>
                      </div>
                    ) : null}
                    {/* A/B Testing Toggle */}
                    <div
                      className="flex items-center justify-between p-3 rounded-xl"
                      style={{
                        background: "rgba(168,85,247,0.08)",
                        border: "1px solid rgba(168,85,247,0.2)",
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <FlaskConical size={14} className="text-purple-400" />
                        <div>
                          <p className="text-[12px] font-semibold text-foreground">
                            A/B Test (Trial & Error)
                          </p>
                          <p className="text-[10px] text-komo-text-muted">
                            2 versions test karo, best perform wala chuno
                          </p>
                        </div>
                      </div>
                      <div
                        className="w-10 h-5 rounded-full cursor-pointer transition-colors"
                        style={{
                          background: abTesting
                            ? "linear-gradient(90deg, #2fa8ff, #a855f7)"
                            : "rgba(255,255,255,0.15)",
                        }}
                        onClick={() => setAbTesting(!abTesting)}
                        onKeyDown={(e) =>
                          e.key === "Enter" && setAbTesting(!abTesting)
                        }
                      >
                        <div
                          className={`w-4 h-4 rounded-full bg-white shadow-sm mt-0.5 transition-transform ${abTesting ? "translate-x-5" : "translate-x-0.5"}`}
                        />
                      </div>
                    </div>
                    {abTesting && (
                      <div className="space-y-2">
                        <input
                          className="w-full bg-white/5 border border-purple-500/30 rounded-xl px-3 py-2 text-[13px] text-foreground placeholder-komo-text-muted focus:outline-none"
                          placeholder="Version A – Headline (e.g. 'Sirf ₹499 mein seekho!')"
                          value={form.variantA}
                          onChange={(e) =>
                            setForm({ ...form, variantA: e.target.value })
                          }
                        />
                        <input
                          className="w-full bg-white/5 border border-blue-500/30 rounded-xl px-3 py-2 text-[13px] text-foreground placeholder-komo-text-muted focus:outline-none"
                          placeholder="Version B – Headline (e.g. 'Free Trial Available!')"
                          value={form.variantB}
                          onChange={(e) =>
                            setForm({ ...form, variantB: e.target.value })
                          }
                        />
                      </div>
                    )}
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        className="flex-1 h-9 text-[12px] border-white/20 text-white hover:bg-white/10"
                        onClick={() => setCreateStep(2)}
                      >
                        ← पीछे
                      </Button>
                      <Button
                        className="flex-1 komo-gradient border-0 text-white h-9 text-[13px]"
                        onClick={() => setCreateStep(4)}
                      >
                        अगला →
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 4: Budget */}
                {createStep === 4 && (
                  <div className="space-y-3">
                    <p className="text-[13px] font-semibold text-foreground flex items-center gap-1.5">
                      <IndianRupee size={13} className="text-green-400" />{" "}
                      Budget Set करें
                    </p>
                    <div className="grid grid-cols-3 gap-2">
                      {["100", "250", "500", "1000", "2000", "5000"].map(
                        (b) => (
                          <button
                            key={b}
                            type="button"
                            onClick={() => setForm({ ...form, budget: b })}
                            className="h-9 rounded-xl text-[12px] font-semibold transition-all"
                            style={{
                              background:
                                form.budget === b
                                  ? "rgba(47,168,255,0.25)"
                                  : "rgba(255,255,255,0.06)",
                              border: `1px solid ${form.budget === b ? "rgba(47,168,255,0.5)" : "rgba(255,255,255,0.08)"}`,
                              color:
                                form.budget === b
                                  ? "#93c5fd"
                                  : "rgba(255,255,255,0.6)",
                            }}
                          >
                            ₹{b}
                          </button>
                        ),
                      )}
                    </div>
                    <input
                      type="number"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-[13px] text-foreground placeholder-komo-text-muted focus:outline-none focus:border-komo-blue"
                      placeholder="Custom Budget (₹)"
                      value={form.budget}
                      onChange={(e) =>
                        setForm({ ...form, budget: e.target.value })
                      }
                    />
                    <select
                      className="w-full bg-[#11161D] border border-white/10 rounded-xl px-3 py-2 text-[13px] text-foreground focus:outline-none focus:border-komo-blue"
                      value={form.duration}
                      onChange={(e) =>
                        setForm({ ...form, duration: e.target.value })
                      }
                    >
                      <option value="7">7 Days</option>
                      <option value="14">14 Days</option>
                      <option value="30">30 Days</option>
                    </select>
                    {form.budget && (
                      <div
                        className="rounded-xl p-3"
                        style={{
                          background: "rgba(34,197,94,0.08)",
                          border: "1px solid rgba(34,197,94,0.2)",
                        }}
                      >
                        <p className="text-[11px] text-green-300 font-semibold">
                          📊 Estimated Results
                        </p>
                        <p className="text-[11px] text-komo-text-muted mt-1">
                          Daily spend: ₹
                          {Math.round(
                            Number(form.budget) / Number(form.duration),
                          )}
                        </p>
                        <p className="text-[11px] text-komo-text-muted">
                          Est. Reach:{" "}
                          {(Number(form.budget) * 80).toLocaleString()}–
                          {(Number(form.budget) * 150).toLocaleString()} people
                        </p>
                      </div>
                    )}
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        className="flex-1 h-9 text-[12px] border-white/20 text-white hover:bg-white/10"
                        onClick={() => setCreateStep(3)}
                      >
                        ← पीछे
                      </Button>
                      <Button
                        className="flex-1 komo-gradient border-0 text-white h-9 text-[13px] font-semibold"
                        onClick={createCampaign}
                      >
                        <Zap size={13} className="mr-1.5" /> Launch 🚀
                      </Button>
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Campaigns List */}
          <div className="space-y-3">
            <p className="text-[13px] font-semibold text-komo-text-secondary flex items-center gap-1.5">
              <Target size={14} className="text-komo-purple" /> My Campaigns
            </p>
            {campaigns.map((c, i) => (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                className="rounded-2xl p-4"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1 min-w-0 pr-2">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      {adTypeIcon(c.adType)}
                      <p className="text-[13px] font-semibold text-foreground truncate">
                        {c.name}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-komo-text-muted">
                        {c.objective}
                      </span>
                      <span
                        className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${c.status === "active" ? "bg-green-500/15 text-green-400 border border-green-500/25" : "bg-yellow-500/15 text-yellow-400 border border-yellow-500/25"}`}
                      >
                        {c.status === "active" ? "🟢 Active" : "⏸ Paused"}
                      </span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => toggleStatus(c.id)}
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors"
                    style={{
                      background:
                        c.status === "active"
                          ? "rgba(239,68,68,0.15)"
                          : "rgba(34,197,94,0.15)",
                    }}
                  >
                    {c.status === "active" ? (
                      <Pause size={13} className="text-red-400" />
                    ) : (
                      <Play size={13} className="text-green-400" />
                    )}
                  </button>
                </div>
                <div className="mb-3">
                  <div className="flex justify-between mb-1">
                    <span className="text-[11px] text-komo-text-muted">
                      Spend
                    </span>
                    <span className="text-[11px] text-komo-text-muted">
                      ₹{c.spent} / ₹{c.budget}
                    </span>
                  </div>
                  <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${c.budget > 0 ? (c.spent / c.budget) * 100 : 0}%`,
                        background: "linear-gradient(90deg, #2fa8ff, #a855f7)",
                      }}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {[
                    {
                      label: "Reach",
                      value:
                        c.reach >= 1000
                          ? `${(c.reach / 1000).toFixed(0)}K`
                          : c.reach,
                      icon: <Eye size={11} />,
                    },
                    {
                      label: "Clicks",
                      value:
                        c.clicks >= 1000
                          ? `${(c.clicks / 1000).toFixed(1)}K`
                          : c.clicks,
                      icon: <MousePointerClick size={11} />,
                    },
                    {
                      label: "CTR",
                      value: `${c.ctr}%`,
                      icon: <TrendingUp size={11} />,
                    },
                    {
                      label: "Commission",
                      value: `₹${(c.commissionEarned / 1000).toFixed(1)}K`,
                      icon: <IndianRupee size={11} />,
                    },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="text-center p-2 rounded-xl"
                      style={{ background: "rgba(255,255,255,0.04)" }}
                    >
                      <div className="flex justify-center text-komo-text-muted mb-1">
                        {stat.icon}
                      </div>
                      <p className="text-[12px] font-bold komo-gradient-text">
                        {stat.value}
                      </p>
                      <p className="text-[9px] text-komo-text-muted">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Client Ads Section */}
      {activeSection === "client" && (
        <div className="space-y-4">
          <div
            className="rounded-2xl p-4"
            style={{
              background:
                "linear-gradient(135deg, rgba(34,197,94,0.08), rgba(47,168,255,0.08))",
              border: "1px solid rgba(34,197,94,0.25)",
            }}
          >
            <p className="text-[13px] font-semibold text-green-300 flex items-center gap-1.5 mb-1">
              <Building2 size={13} /> Client ke Ads chalakar Kamao
            </p>
            <p className="text-[11px] text-komo-text-muted">
              Dusre businesses ke liye ads run karo aur monthly ₹5,000–₹50,000
              charge karo
            </p>
          </div>

          <Button
            className="w-full komo-gradient border-0 text-white h-10 text-[13px] font-semibold"
            onClick={() =>
              toast.success("New client campaign form coming soon!")
            }
          >
            <Plus size={15} className="mr-2" /> New Client Campaign
          </Button>

          <div className="space-y-3">
            <p className="text-[13px] font-semibold text-komo-text-secondary flex items-center gap-1.5">
              <Building2 size={14} className="text-komo-blue" /> Active Client
              Campaigns
            </p>
            {clientCampaigns.map((c, i) => (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                className="rounded-2xl p-4"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="text-[13px] font-semibold text-foreground">
                      {c.client}
                    </p>
                    <span
                      className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${c.status === "active" ? "bg-green-500/15 text-green-400 border border-green-500/25" : "bg-yellow-500/15 text-yellow-400 border border-yellow-500/25"}`}
                    >
                      {c.status === "active" ? "🟢 Active" : "⏸ Paused"}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      setClientCampaigns((prev) =>
                        prev.map((x) =>
                          x.id === c.id
                            ? {
                                ...x,
                                status:
                                  x.status === "active" ? "paused" : "active",
                              }
                            : x,
                        ),
                      )
                    }
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{
                      background:
                        c.status === "active"
                          ? "rgba(239,68,68,0.15)"
                          : "rgba(34,197,94,0.15)",
                    }}
                  >
                    {c.status === "active" ? (
                      <Pause size={13} className="text-red-400" />
                    ) : (
                      <Play size={13} className="text-green-400" />
                    )}
                  </button>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    {
                      label: "Ad Budget",
                      value: `₹${(c.budget / 1000).toFixed(0)}K`,
                      color: "text-blue-400",
                    },
                    {
                      label: "Monthly Charge",
                      value: `₹${(c.charge / 1000).toFixed(0)}K`,
                      color: "text-green-400",
                    },
                    {
                      label: "Client Revenue",
                      value:
                        c.revenue > 0
                          ? `₹${(c.revenue / 1000).toFixed(0)}K`
                          : "–",
                      color: "text-yellow-400",
                    },
                  ].map((s) => (
                    <div
                      key={s.label}
                      className="text-center p-2 rounded-xl"
                      style={{ background: "rgba(255,255,255,0.04)" }}
                    >
                      <p className={`text-[14px] font-bold ${s.color}`}>
                        {s.value}
                      </p>
                      <p className="text-[9px] text-komo-text-muted">
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pricing Guide */}
          <div
            className="rounded-2xl p-4"
            style={{
              background: "rgba(168,85,247,0.08)",
              border: "1px solid rgba(168,85,247,0.2)",
            }}
          >
            <p className="text-[12px] font-semibold text-purple-300 mb-3 flex items-center gap-1.5">
              <Sparkles size={12} /> Client Pricing Guide
            </p>
            {[
              {
                tier: "Starter",
                price: "₹5,000/mo",
                budget: "₹2,000–₹5,000 ad spend",
              },
              {
                tier: "Standard",
                price: "₹15,000/mo",
                budget: "₹10,000–₹20,000 ad spend",
              },
              {
                tier: "Premium",
                price: "₹50,000/mo",
                budget: "₹30,000+ ad spend",
              },
            ].map((tier) => (
              <div
                key={tier.tier}
                className="flex items-center justify-between py-2 border-b border-white/5 last:border-0"
              >
                <div>
                  <p className="text-[12px] font-semibold text-foreground">
                    {tier.tier}
                  </p>
                  <p className="text-[10px] text-komo-text-muted">
                    {tier.budget}
                  </p>
                </div>
                <span className="text-[12px] font-bold text-green-400">
                  {tier.price}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function InsightsTab() {
  const metrics = [
    { label: "Profile Visits", value: "24.8K", change: "+18%", icon: "👁️" },
    { label: "Post Reach", value: "1.2L", change: "+31%", icon: "📢" },
    { label: "Reel Views", value: "4.5L", change: "+42%", icon: "🎬" },
    { label: "Followers", value: "18.4K", change: "+8%", icon: "👥" },
    { label: "Engagement Rate", value: "6.2%", change: "+2.1%", icon: "❤️" },
    { label: "Link Clicks", value: "3,210", change: "+11%", icon: "🔗" },
  ];
  const topContent = [
    {
      title: "Dance Tutorial Reel",
      views: "2.1L",
      likes: "8.4K",
      type: "Reel",
    },
    {
      title: "Morning Routine Post",
      views: "42K",
      likes: "1.9K",
      type: "Post",
    },
    {
      title: "Academy Course Launch",
      views: "18K",
      likes: "892",
      type: "Story",
    },
  ];
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-2 gap-3">
        {metrics.map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            className="rounded-2xl p-4"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div className="flex items-start justify-between mb-2">
              <span className="text-[20px]">{m.icon}</span>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-green-500/15 text-green-400 border border-green-500/25">
                {m.change}
              </span>
            </div>
            <p className="text-[18px] font-bold komo-gradient-text">
              {m.value}
            </p>
            <p className="text-[11px] text-komo-text-muted mt-0.5">{m.label}</p>
          </motion.div>
        ))}
      </div>
      <div
        className="komo-surface rounded-2xl p-4"
        style={{ border: "1px solid rgba(255,255,255,0.08)" }}
      >
        <p className="text-[13px] font-semibold text-foreground mb-3 flex items-center gap-1.5">
          <Sparkles size={13} className="text-yellow-400" /> Top Performing
          Content
        </p>
        <div className="space-y-3">
          {topContent.map((item, i) => (
            <div
              key={item.title}
              className="flex items-center gap-3 p-3 rounded-xl"
              style={{ background: "rgba(255,255,255,0.04)" }}
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-[14px] flex-shrink-0"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(47,168,255,0.2), rgba(168,85,247,0.2))",
                }}
              >
                {i + 1}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[12px] font-semibold text-foreground truncate">
                  {item.title}
                </p>
                <p className="text-[10px] text-komo-text-muted">
                  {item.views} views · {item.likes} likes
                </p>
              </div>
              <Badge
                className="text-[10px]"
                style={{
                  background: "rgba(168,85,247,0.15)",
                  color: "#c084fc",
                  border: "1px solid rgba(168,85,247,0.3)",
                }}
              >
                {item.type}
              </Badge>
            </div>
          ))}
        </div>
      </div>
      <div
        className="rounded-2xl p-4"
        style={{
          background:
            "linear-gradient(135deg, rgba(47,168,255,0.08), rgba(168,85,247,0.12))",
          border: "1px solid rgba(168,85,247,0.25)",
        }}
      >
        <p className="text-[13px] font-semibold text-foreground mb-3 flex items-center gap-1.5">
          <Settings size={13} className="text-komo-blue" /> Business Settings
        </p>
        {[
          { label: "Auto Ad Optimization", checked: true },
          { label: "Monetize Reels", checked: true },
          { label: "Brand Collaboration Requests", checked: false },
          { label: "Sponsored Content Labels", checked: true },
        ].map((setting) => (
          <div
            key={setting.label}
            className="flex items-center justify-between py-2"
          >
            <span className="text-[12px] text-komo-text-secondary">
              {setting.label}
            </span>
            <div
              className="w-10 h-5 rounded-full cursor-pointer transition-colors"
              style={{
                background: setting.checked
                  ? "linear-gradient(90deg, #2fa8ff, #a855f7)"
                  : "rgba(255,255,255,0.15)",
              }}
              onClick={() => toast.info("Setting updated!")}
              onKeyDown={(e) =>
                e.key === "Enter" && toast.info("Setting updated!")
              }
            >
              <div
                className={`w-4 h-4 rounded-full bg-white shadow-sm mt-0.5 transition-transform ${setting.checked ? "translate-x-5" : "translate-x-0.5"}`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function BusinessAccount() {
  const { navigate } = useApp();
  const [activeTab, setActiveTab] = useState<Tab>("Earning");
  return (
    <div className="max-w-2xl mx-auto px-4 py-4 pb-12">
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="flex items-center gap-3 mb-6"
      >
        <button
          type="button"
          onClick={() => navigate("/profile")}
          className="w-9 h-9 rounded-full flex items-center justify-center text-komo-text-secondary hover:text-foreground transition-colors"
          style={{ background: "rgba(255,255,255,0.06)" }}
        >
          <ArrowLeft size={18} />
        </button>
        <div>
          <h1 className="text-[20px] font-bold text-foreground flex items-center gap-2">
            <Briefcase size={18} className="text-komo-blue" /> Business Account
          </h1>
          <p className="text-[12px] text-komo-text-muted">
            Earning · Ads Manager · Insights
          </p>
        </div>
      </motion.div>
      <div className="flex gap-2 mb-5 overflow-x-auto pb-1">
        {TABS.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className="flex-shrink-0 px-4 h-9 rounded-full text-[13px] font-semibold transition-all"
            style={{
              background:
                activeTab === tab
                  ? "linear-gradient(135deg, #2fa8ff, #a855f7)"
                  : "rgba(255,255,255,0.06)",
              color: activeTab === tab ? "#fff" : "rgba(255,255,255,0.5)",
              border:
                activeTab === tab ? "none" : "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {tab}
          </button>
        ))}
      </div>
      {activeTab === "Earning" && <EarningTab />}
      {activeTab === "Ads Manager" && <AdsManagerTab />}
      {activeTab === "Insights" && <InsightsTab />}
    </div>
  );
}
