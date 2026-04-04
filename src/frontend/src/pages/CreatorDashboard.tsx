import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowLeft,
  Award,
  BarChart2,
  CheckCircle2,
  Clapperboard,
  Globe,
  Handshake,
  IndianRupee,
  MousePointer2,
  Rocket,
  ShieldCheck,
  Star,
  Clapperboard as StudioIcon,
  TrendingUp,
  Trophy,
  Users,
  Video,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { toast } from "sonner";
import { useApp } from "../context/AppContext";

const ELIGIBILITY = [
  {
    label: "5,000+ Followers",
    detail: "14.8K followers",
    met: true,
    icon: Users,
    color: "#2fa8ff",
  },
  {
    label: "Watch Time 10K+ mins (60 days)",
    detail: "24,500 mins",
    met: true,
    icon: Video,
    color: "#a855f7",
  },
  {
    label: "Original Videos",
    detail: "12 original videos",
    met: true,
    icon: Clapperboard,
    color: "#f59e0b",
  },
  {
    label: "Age 18+ & India Eligible",
    detail: "Verified ✓",
    met: true,
    icon: Globe,
    color: "#22c55e",
  },
  {
    label: "Follow Platform Policies",
    detail: "No violations",
    met: true,
    icon: ShieldCheck,
    color: "#10b981",
  },
];

const EARNING_SOURCES = [
  {
    emoji: "🎬",
    title: "Ads on Videos / Reels",
    desc: "Earn from ads shown on your content as viewers watch",
    amount: "₹2,400/month",
    label: "Estimated",
    color: "rgba(47,168,255,0.12)",
    border: "rgba(47,168,255,0.3)",
  },
  {
    emoji: "⭐",
    title: "Stars & Gifts",
    desc: "Fans send virtual stars during live sessions and reels",
    amount: "₹847 earned",
    label: "This month",
    color: "rgba(245,158,11,0.1)",
    border: "rgba(245,158,11,0.3)",
  },
  {
    emoji: "🏆",
    title: "Performance Bonus",
    desc: "Monthly bonus based on views, followers & engagement",
    amount: "Up to ₹5,000",
    label: "Monthly cap",
    color: "rgba(168,85,247,0.12)",
    border: "rgba(168,85,247,0.3)",
  },
  {
    emoji: "🤝",
    title: "Brand Collaborations",
    desc: "Brand deals matched to your niche & audience size",
    amount: "₹8K–₹25K/deal",
    label: "Per deal",
    color: "rgba(16,185,129,0.1)",
    border: "rgba(16,185,129,0.3)",
  },
];

const MONTHLY_BREAKDOWN = [
  { label: "Ads Revenue", amount: 2400, color: "#2fa8ff" },
  { label: "Stars & Gifts", amount: 847, color: "#f59e0b" },
  { label: "Performance Bonus", amount: 1200, color: "#a855f7" },
  { label: "Brand Deals", amount: 443, color: "#10b981" },
];

const MONTHLY_TOTAL = MONTHLY_BREAKDOWN.reduce((s, i) => s + i.amount, 0);
const MONTHLY_GOAL = 10000;

const BUSINESS_INSIGHTS = [
  {
    label: "Reach",
    value: "284K",
    change: "+18.4%",
    color: "#2fa8ff",
    icon: Globe,
  },
  {
    label: "Impressions",
    value: "1.2M",
    change: "+22.1%",
    color: "#a855f7",
    icon: BarChart2,
  },
  {
    label: "Profile Visits",
    value: "47.3K",
    change: "+9.7%",
    color: "#10b981",
    icon: Users,
  },
  {
    label: "Link Clicks",
    value: "8,940",
    change: "+31.2%",
    color: "#f59e0b",
    icon: MousePointer2,
  },
];

const TOP_LOCATIONS = [
  { name: "India", pct: 78, flag: "🇮🇳" },
  { name: "UAE", pct: 11, flag: "🇦🇪" },
  { name: "UK", pct: 6, flag: "🇬🇧" },
  { name: "Others", pct: 5, flag: "🌍" },
];

const AGE_GROUPS = [
  { range: "18–24", pct: 35, color: "#2fa8ff" },
  { range: "25–34", pct: 40, color: "#a855f7" },
  { range: "35–44", pct: 15, color: "#10b981" },
  { range: "45+", pct: 10, color: "#f59e0b" },
];

export default function CreatorDashboard() {
  const { navigate } = useApp();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.07 } },
  };
  const item = {
    hidden: { opacity: 0, y: 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, ease: "easeOut" as const },
    },
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-4 pb-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex items-center gap-3 mb-5"
      >
        <button
          type="button"
          data-ocid="creator.back.button"
          className="w-9 h-9 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 transition-colors text-komo-text-secondary"
          onClick={() => navigate("/profile")}
        >
          <ArrowLeft size={18} />
        </button>
        <div>
          <h1 className="text-[20px] font-bold komo-gradient-text leading-tight">
            Creator Studio
          </h1>
          <p className="text-[12px] text-komo-text-muted">
            Track earnings & monetization eligibility
          </p>
        </div>
        <div className="ml-auto">
          <Badge
            className="text-[11px] px-3 py-1 font-semibold border-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(34,197,94,0.25), rgba(16,185,129,0.2))",
              color: "#4ade80",
              border: "1px solid rgba(34,197,94,0.35)",
              boxShadow: "0 0 10px rgba(34,197,94,0.2)",
            }}
          >
            <CheckCircle2 size={11} className="mr-1" /> Eligible
          </Badge>
        </div>
      </motion.div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList
          className="w-full mb-5 rounded-xl h-10"
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <TabsTrigger
            data-ocid="creator.overview.tab"
            value="overview"
            className="flex-1 rounded-lg text-[12px] font-medium"
          >
            📊 Overview
          </TabsTrigger>
          <TabsTrigger
            data-ocid="creator.earnings.tab"
            value="earnings"
            className="flex-1 rounded-lg text-[12px] font-medium"
          >
            💰 Earnings
          </TabsTrigger>
          <TabsTrigger
            data-ocid="creator.insights.tab"
            value="insights"
            className="flex-1 rounded-lg text-[12px] font-medium"
          >
            🎯 Insights
          </TabsTrigger>
        </TabsList>

        {/* OVERVIEW TAB */}
        <TabsContent value="overview">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-4"
          >
            {/* Stats Row */}
            <motion.div variants={item} className="grid grid-cols-3 gap-3">
              {[
                {
                  icon: Users,
                  label: "Followers",
                  value: "14.8K",
                  sub: "+320 this week",
                  color: "#2fa8ff",
                },
                {
                  icon: Video,
                  label: "Watch Time",
                  value: "24.5K",
                  sub: "mins / 60 days",
                  color: "#a855f7",
                },
                {
                  icon: BarChart2,
                  label: "Engagement",
                  value: "8.4%",
                  sub: "Real: 94%",
                  color: "#10b981",
                },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl p-3 flex flex-col gap-1"
                  style={{
                    background: `linear-gradient(135deg, ${stat.color}12, ${stat.color}08)`,
                    border: `1px solid ${stat.color}30`,
                  }}
                >
                  <stat.icon size={16} style={{ color: stat.color }} />
                  <p className="text-[18px] font-bold text-foreground leading-tight">
                    {stat.value}
                  </p>
                  <p className="text-[11px] text-komo-text-muted">
                    {stat.label}
                  </p>
                  <p
                    className="text-[10px] font-medium"
                    style={{ color: stat.color }}
                  >
                    {stat.sub}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Eligibility */}
            <motion.div
              variants={item}
              className="rounded-2xl p-5"
              style={{
                background:
                  "linear-gradient(135deg, rgba(34,197,94,0.08), rgba(16,185,129,0.05))",
                border: "1px solid rgba(34,197,94,0.2)",
              }}
            >
              <div className="flex items-center gap-2 mb-4">
                <ShieldCheck size={18} className="text-green-400" />
                <h2 className="text-[15px] font-bold text-foreground">
                  Monetization Eligibility
                </h2>
                <Badge
                  className="ml-auto text-[10px] px-2.5 py-0.5 border-0"
                  style={{
                    background: "rgba(34,197,94,0.2)",
                    color: "#4ade80",
                    border: "1px solid rgba(34,197,94,0.35)",
                  }}
                >
                  ✅ Eligible
                </Badge>
              </div>
              <div className="space-y-2.5">
                {ELIGIBILITY.map((crit) => (
                  <div
                    key={crit.label}
                    className="flex items-center gap-3 py-2 px-3 rounded-xl"
                    style={{ background: "rgba(255,255,255,0.04)" }}
                  >
                    <crit.icon size={16} style={{ color: crit.color }} />
                    <div className="flex-1 min-w-0">
                      <p className="text-[13px] font-medium text-foreground">
                        {crit.label}
                      </p>
                      <p className="text-[11px] text-komo-text-muted">
                        {crit.detail}
                      </p>
                    </div>
                    <CheckCircle2
                      size={18}
                      className="text-green-400 flex-shrink-0"
                      style={{
                        filter: "drop-shadow(0 0 4px rgba(34,197,94,0.5))",
                      }}
                    />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Content Quality */}
            <motion.div
              variants={item}
              className="rounded-2xl p-5 komo-surface komo-card-shadow"
            >
              <div className="flex items-center gap-2 mb-4">
                <Award size={17} className="text-komo-blue" />
                <h2 className="text-[15px] font-bold text-foreground">
                  Content Quality Score
                </h2>
              </div>
              <div className="space-y-4">
                {[
                  {
                    label: "Real Followers",
                    value: 94,
                    badge: "94% Authentic",
                    sub: "",
                    icon: Users,
                    color: "#2fa8ff",
                  },
                  {
                    label: "Engagement Rate",
                    value: 84,
                    badge: "Excellent",
                    sub: "Above 3% threshold",
                    icon: BarChart2,
                    color: "#a855f7",
                  },
                  {
                    label: "Content Originality",
                    value: 100,
                    badge: "",
                    sub: "All content verified as original",
                    icon: Zap,
                    color: "#f59e0b",
                  },
                ].map((q) => (
                  <div key={q.label}>
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <q.icon size={14} style={{ color: q.color }} />
                        <span className="text-[13px] font-medium text-foreground">
                          {q.label}
                        </span>
                      </div>
                      {q.badge && (
                        <Badge
                          className="text-[11px] px-2 border-0"
                          style={{
                            background: "rgba(34,197,94,0.15)",
                            color: "#4ade80",
                            border: "1px solid rgba(34,197,94,0.3)",
                          }}
                        >
                          {q.badge}
                        </Badge>
                      )}
                    </div>
                    <Progress value={q.value} className="h-2 bg-white/8" />
                    {q.sub && (
                      <p className="text-[11px] text-komo-text-muted mt-1">
                        {q.sub}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Apply CTA */}
            <motion.div variants={item} className="pt-2 space-y-3">
              <Button
                data-ocid="creator.apply.primary_button"
                className="w-full komo-gradient border-0 text-white font-bold text-[15px] rounded-2xl"
                style={{
                  height: "52px",
                  boxShadow: "0 4px 20px rgba(168,85,247,0.35)",
                }}
                onClick={() =>
                  toast.success(
                    "Application submitted! Review takes 3-5 business days.",
                    {
                      description:
                        "We'll notify you once your monetization is approved.",
                      duration: 5000,
                    },
                  )
                }
              >
                <Rocket size={18} className="mr-2" /> Apply for Monetization
              </Button>

              {/* Open Creator Studio */}
              <Button
                data-ocid="creator.open_studio.secondary_button"
                variant="outline"
                className="w-full rounded-2xl font-semibold text-[14px] border-komo-border text-foreground hover:bg-white/5"
                style={{ height: "48px" }}
                onClick={() => navigate("/creator-studio")}
              >
                <StudioIcon size={16} className="mr-2 text-komo-blue" />
                Open Creator Studio →
              </Button>

              <p className="text-center text-[11px] text-komo-text-muted">
                Review takes 3–5 business days · India eligible ✓
              </p>
            </motion.div>
          </motion.div>
        </TabsContent>

        {/* EARNINGS TAB */}
        <TabsContent value="earnings">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-4"
          >
            <motion.div variants={item}>
              <p className="text-[14px] font-bold text-foreground mb-3 flex items-center gap-2">
                <IndianRupee size={15} className="text-komo-blue" /> Earning
                Sources
              </p>
              <div className="grid grid-cols-1 gap-3">
                {EARNING_SOURCES.map((src, i) => (
                  <motion.div
                    key={src.title}
                    data-ocid={`creator.earning.item.${i + 1}`}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.07 }}
                    className="rounded-xl p-4 flex items-start gap-4"
                    style={{
                      background: src.color,
                      border: `1px solid ${src.border}`,
                    }}
                  >
                    <span className="text-2xl flex-shrink-0 mt-0.5">
                      {src.emoji}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-[14px] font-bold text-foreground">
                        {src.title}
                      </p>
                      <p className="text-[12px] text-komo-text-secondary mt-0.5 leading-relaxed">
                        {src.desc}
                      </p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="text-[14px] font-bold komo-gradient-text">
                        {src.amount}
                      </p>
                      <p className="text-[10px] text-komo-text-muted mt-0.5">
                        {src.label}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Monthly Summary */}
            <motion.div
              variants={item}
              className="rounded-2xl p-5"
              style={{
                background:
                  "linear-gradient(135deg, rgba(47,168,255,0.1), rgba(168,85,247,0.14))",
                border: "1px solid rgba(168,85,247,0.25)",
              }}
            >
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp size={17} className="text-komo-purple" />
                <h2 className="text-[15px] font-bold text-foreground">
                  Monthly Earnings Summary
                </h2>
              </div>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-[32px] font-bold komo-gradient-text leading-none">
                  ₹{MONTHLY_TOTAL.toLocaleString()}
                </span>
                <span className="text-[13px] text-komo-text-muted">
                  this month
                </span>
              </div>
              <div className="flex flex-wrap gap-2 my-3">
                {MONTHLY_BREAKDOWN.map((b) => (
                  <span
                    key={b.label}
                    className="text-[11px] font-medium px-2.5 py-1 rounded-full"
                    style={{
                      background: `${b.color}18`,
                      color: b.color,
                      border: `1px solid ${b.color}30`,
                    }}
                  >
                    {b.label}{" "}
                    <span className="font-bold">
                      ₹{b.amount.toLocaleString()}
                    </span>
                  </span>
                ))}
              </div>
              <div className="mt-3">
                <div className="flex justify-between text-[12px] mb-1.5">
                  <span className="text-komo-text-secondary">Monthly Goal</span>
                  <span className="font-semibold text-foreground">
                    ₹{MONTHLY_TOTAL.toLocaleString()} / ₹
                    {MONTHLY_GOAL.toLocaleString()}
                  </span>
                </div>
                <div
                  className="h-2.5 rounded-full overflow-hidden"
                  style={{ background: "rgba(255,255,255,0.08)" }}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{
                      width: `${Math.round((MONTHLY_TOTAL / MONTHLY_GOAL) * 100)}%`,
                    }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                    className="h-full rounded-full komo-gradient"
                  />
                </div>
                <p className="text-[11px] text-komo-text-muted mt-1.5">
                  {Math.round((MONTHLY_TOTAL / MONTHLY_GOAL) * 100)}% of monthly
                  goal reached
                </p>
              </div>
            </motion.div>
          </motion.div>
        </TabsContent>

        {/* META BUSINESS INSIGHTS TAB */}
        <TabsContent value="insights">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-4"
          >
            {/* Header badge */}
            <motion.div
              variants={item}
              className="flex items-center gap-2 mb-1"
            >
              <div
                className="px-3 py-1.5 rounded-xl text-[12px] font-bold flex items-center gap-1.5"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(47,168,255,0.15), rgba(168,85,247,0.15))",
                  border: "1px solid rgba(168,85,247,0.3)",
                  color: "#a855f7",
                }}
              >
                <Star size={12} /> Business Suite Insights
              </div>
              <span className="text-[11px] text-komo-text-muted">
                Last 30 days
              </span>
            </motion.div>

            {/* Reach & Impressions grid */}
            <motion.div variants={item} className="grid grid-cols-2 gap-3">
              {BUSINESS_INSIGHTS.map((ins) => (
                <div
                  key={ins.label}
                  className="rounded-xl p-4"
                  style={{
                    background: `linear-gradient(135deg, ${ins.color}12, ${ins.color}06)`,
                    border: `1px solid ${ins.color}25`,
                  }}
                >
                  <ins.icon
                    size={16}
                    style={{ color: ins.color }}
                    className="mb-2"
                  />
                  <p className="text-[22px] font-bold text-foreground leading-tight">
                    {ins.value}
                  </p>
                  <p className="text-[12px] text-komo-text-muted">
                    {ins.label}
                  </p>
                  <p
                    className="text-[11px] font-semibold mt-1"
                    style={{ color: "#4ade80" }}
                  >
                    {ins.change} vs last month
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Ad Performance */}
            <motion.div
              variants={item}
              className="rounded-2xl p-5"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Zap size={16} className="text-yellow-400" />
                <h3 className="text-[14px] font-bold text-foreground">
                  Ad Performance
                </h3>
                <Badge
                  className="ml-auto text-[10px] border-0"
                  style={{
                    background: "rgba(34,197,94,0.15)",
                    color: "#4ade80",
                  }}
                >
                  3 Active
                </Badge>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: "Total Spend", value: "₹4,200", icon: "💸" },
                  { label: "Total Clicks", value: "12,840", icon: "👆" },
                  { label: "Avg. CTR", value: "3.8%", icon: "📊" },
                ].map((ad) => (
                  <div
                    key={ad.label}
                    className="text-center py-3 px-2 rounded-xl"
                    style={{ background: "rgba(255,255,255,0.04)" }}
                  >
                    <p className="text-[20px] mb-1">{ad.icon}</p>
                    <p className="text-[15px] font-bold text-foreground">
                      {ad.value}
                    </p>
                    <p className="text-[10px] text-komo-text-muted mt-0.5">
                      {ad.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Audience Insights */}
            <motion.div
              variants={item}
              className="rounded-2xl p-5"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Users size={16} className="text-komo-blue" />
                <h3 className="text-[14px] font-bold text-foreground">
                  Audience Insights
                </h3>
              </div>

              {/* Top Locations */}
              <p className="text-[12px] font-semibold text-komo-text-secondary mb-2">
                📍 Top Locations
              </p>
              <div className="space-y-2 mb-4">
                {TOP_LOCATIONS.map((loc) => (
                  <div key={loc.name} className="flex items-center gap-2">
                    <span className="text-[14px]">{loc.flag}</span>
                    <span className="text-[12px] text-foreground w-12">
                      {loc.name}
                    </span>
                    <div
                      className="flex-1 h-2 rounded-full overflow-hidden"
                      style={{ background: "rgba(255,255,255,0.08)" }}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${loc.pct}%` }}
                        transition={{
                          duration: 0.8,
                          ease: "easeOut",
                          delay: 0.2,
                        }}
                        className="h-full rounded-full"
                        style={{
                          background:
                            "linear-gradient(90deg, #2fa8ff, #a855f7)",
                        }}
                      />
                    </div>
                    <span className="text-[11px] text-komo-text-muted w-8 text-right">
                      {loc.pct}%
                    </span>
                  </div>
                ))}
              </div>

              {/* Age Groups */}
              <p className="text-[12px] font-semibold text-komo-text-secondary mb-2">
                👥 Age Groups
              </p>
              <div className="flex gap-2 flex-wrap mb-4">
                {AGE_GROUPS.map((age) => (
                  <div
                    key={age.range}
                    className="flex-1 min-w-[64px] text-center py-2.5 px-2 rounded-xl"
                    style={{
                      background: `${age.color}12`,
                      border: `1px solid ${age.color}25`,
                    }}
                  >
                    <p className="text-[16px] font-bold text-foreground">
                      {age.pct}%
                    </p>
                    <p
                      className="text-[10px] mt-0.5"
                      style={{ color: age.color }}
                    >
                      {age.range}
                    </p>
                  </div>
                ))}
              </div>

              {/* Gender split */}
              <p className="text-[12px] font-semibold text-komo-text-secondary mb-2">
                ⚤ Gender Split
              </p>
              <div className="flex rounded-full overflow-hidden h-5">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "62%" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="h-full flex items-center justify-center text-[10px] font-bold text-white"
                  style={{
                    background: "linear-gradient(90deg, #2fa8ff, #6366f1)",
                  }}
                >
                  62% M
                </motion.div>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "38%" }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                  className="h-full flex items-center justify-center text-[10px] font-bold text-white"
                  style={{
                    background: "linear-gradient(90deg, #ec4899, #a855f7)",
                  }}
                >
                  38% F
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
