import { c as createLucideIcon, u as useApp, j as jsxRuntimeExports, m as motion, V as Video, N as Clapperboard, G as Globe, Z as Zap, B as Button, b as ue } from "./index-m-9XzHBK.js";
import { B as Badge } from "./badge-cznt1m0U.js";
import { P as Progress } from "./progress-CIm5nFTf.js";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-DaPSxr7p.js";
import { A as ArrowLeft } from "./arrow-left-MlK4V-5g.js";
import { C as CircleCheck } from "./circle-check-BF5LqVCY.js";
import { U as Users } from "./users-D7GbLS6T.js";
import { C as ChartNoAxesColumn } from "./chart-no-axes-column-53n4iwYO.js";
import { S as ShieldCheck } from "./shield-check-fiUrS1Cs.js";
import { I as IndianRupee } from "./indian-rupee-DNxjxjo7.js";
import { T as TrendingUp } from "./trending-up-DdiiMpOP.js";
import { S as Star } from "./star-BCPUGzI5.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  [
    "path",
    {
      d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
      key: "1yiouv"
    }
  ],
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }]
];
const Award = createLucideIcon("award", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z",
      key: "edeuup"
    }
  ]
];
const MousePointer2 = createLucideIcon("mouse-pointer-2", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",
      key: "m3kijz"
    }
  ],
  [
    "path",
    {
      d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",
      key: "1fmvmk"
    }
  ],
  ["path", { d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0", key: "1f8sc4" }],
  ["path", { d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5", key: "qeys4" }]
];
const Rocket = createLucideIcon("rocket", __iconNode);
const ELIGIBILITY = [
  {
    label: "5,000+ Followers",
    detail: "14.8K followers",
    met: true,
    icon: Users,
    color: "#2fa8ff"
  },
  {
    label: "Watch Time 10K+ mins (60 days)",
    detail: "24,500 mins",
    met: true,
    icon: Video,
    color: "#a855f7"
  },
  {
    label: "Original Videos",
    detail: "12 original videos",
    met: true,
    icon: Clapperboard,
    color: "#f59e0b"
  },
  {
    label: "Age 18+ & India Eligible",
    detail: "Verified ✓",
    met: true,
    icon: Globe,
    color: "#22c55e"
  },
  {
    label: "Follow Platform Policies",
    detail: "No violations",
    met: true,
    icon: ShieldCheck,
    color: "#10b981"
  }
];
const EARNING_SOURCES = [
  {
    emoji: "🎬",
    title: "Ads on Videos / Reels",
    desc: "Earn from ads shown on your content as viewers watch",
    amount: "₹2,400/month",
    label: "Estimated",
    color: "rgba(47,168,255,0.12)",
    border: "rgba(47,168,255,0.3)"
  },
  {
    emoji: "⭐",
    title: "Stars & Gifts",
    desc: "Fans send virtual stars during live sessions and reels",
    amount: "₹847 earned",
    label: "This month",
    color: "rgba(245,158,11,0.1)",
    border: "rgba(245,158,11,0.3)"
  },
  {
    emoji: "🏆",
    title: "Performance Bonus",
    desc: "Monthly bonus based on views, followers & engagement",
    amount: "Up to ₹5,000",
    label: "Monthly cap",
    color: "rgba(168,85,247,0.12)",
    border: "rgba(168,85,247,0.3)"
  },
  {
    emoji: "🤝",
    title: "Brand Collaborations",
    desc: "Brand deals matched to your niche & audience size",
    amount: "₹8K–₹25K/deal",
    label: "Per deal",
    color: "rgba(16,185,129,0.1)",
    border: "rgba(16,185,129,0.3)"
  }
];
const MONTHLY_BREAKDOWN = [
  { label: "Ads Revenue", amount: 2400, color: "#2fa8ff" },
  { label: "Stars & Gifts", amount: 847, color: "#f59e0b" },
  { label: "Performance Bonus", amount: 1200, color: "#a855f7" },
  { label: "Brand Deals", amount: 443, color: "#10b981" }
];
const MONTHLY_TOTAL = MONTHLY_BREAKDOWN.reduce((s, i) => s + i.amount, 0);
const MONTHLY_GOAL = 1e4;
const BUSINESS_INSIGHTS = [
  {
    label: "Reach",
    value: "284K",
    change: "+18.4%",
    color: "#2fa8ff",
    icon: Globe
  },
  {
    label: "Impressions",
    value: "1.2M",
    change: "+22.1%",
    color: "#a855f7",
    icon: ChartNoAxesColumn
  },
  {
    label: "Profile Visits",
    value: "47.3K",
    change: "+9.7%",
    color: "#10b981",
    icon: Users
  },
  {
    label: "Link Clicks",
    value: "8,940",
    change: "+31.2%",
    color: "#f59e0b",
    icon: MousePointer2
  }
];
const TOP_LOCATIONS = [
  { name: "India", pct: 78, flag: "🇮🇳" },
  { name: "UAE", pct: 11, flag: "🇦🇪" },
  { name: "UK", pct: 6, flag: "🇬🇧" },
  { name: "Others", pct: 5, flag: "🌍" }
];
const AGE_GROUPS = [
  { range: "18–24", pct: 35, color: "#2fa8ff" },
  { range: "25–34", pct: 40, color: "#a855f7" },
  { range: "35–44", pct: 15, color: "#10b981" },
  { range: "45+", pct: 10, color: "#f59e0b" }
];
function CreatorDashboard() {
  const { navigate } = useApp();
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.07 } }
  };
  const item = {
    hidden: { opacity: 0, y: 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, ease: "easeOut" }
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto px-4 py-4 pb-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: -12 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.3 },
        className: "flex items-center gap-3 mb-5",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              "data-ocid": "creator.back.button",
              className: "w-9 h-9 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 transition-colors text-komo-text-secondary",
              onClick: () => navigate("/profile"),
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 18 })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-[20px] font-bold komo-gradient-text leading-tight", children: "Creator Studio" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-komo-text-muted", children: "Track earnings & monetization eligibility" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Badge,
            {
              className: "text-[11px] px-3 py-1 font-semibold border-0",
              style: {
                background: "linear-gradient(135deg, rgba(34,197,94,0.25), rgba(16,185,129,0.2))",
                color: "#4ade80",
                border: "1px solid rgba(34,197,94,0.35)",
                boxShadow: "0 0 10px rgba(34,197,94,0.2)"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 11, className: "mr-1" }),
                " Eligible"
              ]
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "overview", className: "w-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        TabsList,
        {
          className: "w-full mb-5 rounded-xl h-10",
          style: {
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.08)"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              TabsTrigger,
              {
                "data-ocid": "creator.overview.tab",
                value: "overview",
                className: "flex-1 rounded-lg text-[12px] font-medium",
                children: "📊 Overview"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              TabsTrigger,
              {
                "data-ocid": "creator.earnings.tab",
                value: "earnings",
                className: "flex-1 rounded-lg text-[12px] font-medium",
                children: "💰 Earnings"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              TabsTrigger,
              {
                "data-ocid": "creator.insights.tab",
                value: "insights",
                className: "flex-1 rounded-lg text-[12px] font-medium",
                children: "🎯 Insights"
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "overview", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          variants: container,
          initial: "hidden",
          animate: "show",
          className: "space-y-4",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: item, className: "grid grid-cols-3 gap-3", children: [
              {
                icon: Users,
                label: "Followers",
                value: "14.8K",
                sub: "+320 this week",
                color: "#2fa8ff"
              },
              {
                icon: Video,
                label: "Watch Time",
                value: "24.5K",
                sub: "mins / 60 days",
                color: "#a855f7"
              },
              {
                icon: ChartNoAxesColumn,
                label: "Engagement",
                value: "8.4%",
                sub: "Real: 94%",
                color: "#10b981"
              }
            ].map((stat) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "rounded-xl p-3 flex flex-col gap-1",
                style: {
                  background: `linear-gradient(135deg, ${stat.color}12, ${stat.color}08)`,
                  border: `1px solid ${stat.color}30`
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(stat.icon, { size: 16, style: { color: stat.color } }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[18px] font-bold text-foreground leading-tight", children: stat.value }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-komo-text-muted", children: stat.label }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "text-[10px] font-medium",
                      style: { color: stat.color },
                      children: stat.sub
                    }
                  )
                ]
              },
              stat.label
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                variants: item,
                className: "rounded-2xl p-5",
                style: {
                  background: "linear-gradient(135deg, rgba(34,197,94,0.08), rgba(16,185,129,0.05))",
                  border: "1px solid rgba(34,197,94,0.2)"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { size: 18, className: "text-green-400" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[15px] font-bold text-foreground", children: "Monetization Eligibility" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Badge,
                      {
                        className: "ml-auto text-[10px] px-2.5 py-0.5 border-0",
                        style: {
                          background: "rgba(34,197,94,0.2)",
                          color: "#4ade80",
                          border: "1px solid rgba(34,197,94,0.35)"
                        },
                        children: "✅ Eligible"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2.5", children: ELIGIBILITY.map((crit) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "flex items-center gap-3 py-2 px-3 rounded-xl",
                      style: { background: "rgba(255,255,255,0.04)" },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(crit.icon, { size: 16, style: { color: crit.color } }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-medium text-foreground", children: crit.label }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-komo-text-muted", children: crit.detail })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          CircleCheck,
                          {
                            size: 18,
                            className: "text-green-400 flex-shrink-0",
                            style: {
                              filter: "drop-shadow(0 0 4px rgba(34,197,94,0.5))"
                            }
                          }
                        )
                      ]
                    },
                    crit.label
                  )) })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                variants: item,
                className: "rounded-2xl p-5 komo-surface komo-card-shadow",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { size: 17, className: "text-komo-blue" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[15px] font-bold text-foreground", children: "Content Quality Score" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: [
                    {
                      label: "Real Followers",
                      value: 94,
                      badge: "94% Authentic",
                      sub: "",
                      icon: Users,
                      color: "#2fa8ff"
                    },
                    {
                      label: "Engagement Rate",
                      value: 84,
                      badge: "Excellent",
                      sub: "Above 3% threshold",
                      icon: ChartNoAxesColumn,
                      color: "#a855f7"
                    },
                    {
                      label: "Content Originality",
                      value: 100,
                      badge: "",
                      sub: "All content verified as original",
                      icon: Zap,
                      color: "#f59e0b"
                    }
                  ].map((q) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(q.icon, { size: 14, style: { color: q.color } }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[13px] font-medium text-foreground", children: q.label })
                      ] }),
                      q.badge && /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Badge,
                        {
                          className: "text-[11px] px-2 border-0",
                          style: {
                            background: "rgba(34,197,94,0.15)",
                            color: "#4ade80",
                            border: "1px solid rgba(34,197,94,0.3)"
                          },
                          children: q.badge
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Progress, { value: q.value, className: "h-2 bg-white/8" }),
                    q.sub && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-komo-text-muted mt-1", children: q.sub })
                  ] }, q.label)) })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: item, className: "pt-2 space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  "data-ocid": "creator.apply.primary_button",
                  className: "w-full komo-gradient border-0 text-white font-bold text-[15px] rounded-2xl",
                  style: {
                    height: "52px",
                    boxShadow: "0 4px 20px rgba(168,85,247,0.35)"
                  },
                  onClick: () => ue.success(
                    "Application submitted! Review takes 3-5 business days.",
                    {
                      description: "We'll notify you once your monetization is approved.",
                      duration: 5e3
                    }
                  ),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Rocket, { size: 18, className: "mr-2" }),
                    " Apply for Monetization"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  "data-ocid": "creator.open_studio.secondary_button",
                  variant: "outline",
                  className: "w-full rounded-2xl font-semibold text-[14px] border-komo-border text-foreground hover:bg-white/5",
                  style: { height: "48px" },
                  onClick: () => navigate("/creator-studio"),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Clapperboard, { size: 16, className: "mr-2 text-komo-blue" }),
                    "Open Creator Studio →"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-[11px] text-komo-text-muted", children: "Review takes 3–5 business days · India eligible ✓" })
            ] })
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "earnings", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          variants: container,
          initial: "hidden",
          animate: "show",
          className: "space-y-4",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: item, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[14px] font-bold text-foreground mb-3 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(IndianRupee, { size: 15, className: "text-komo-blue" }),
                " Earning Sources"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-3", children: EARNING_SOURCES.map((src, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  "data-ocid": `creator.earning.item.${i + 1}`,
                  initial: { opacity: 0, x: -12 },
                  animate: { opacity: 1, x: 0 },
                  transition: { delay: 0.1 + i * 0.07 },
                  className: "rounded-xl p-4 flex items-start gap-4",
                  style: {
                    background: src.color,
                    border: `1px solid ${src.border}`
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl flex-shrink-0 mt-0.5", children: src.emoji }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[14px] font-bold text-foreground", children: src.title }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-komo-text-secondary mt-0.5 leading-relaxed", children: src.desc })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right flex-shrink-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[14px] font-bold komo-gradient-text", children: src.amount }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-komo-text-muted mt-0.5", children: src.label })
                    ] })
                  ]
                },
                src.title
              )) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                variants: item,
                className: "rounded-2xl p-5",
                style: {
                  background: "linear-gradient(135deg, rgba(47,168,255,0.1), rgba(168,85,247,0.14))",
                  border: "1px solid rgba(168,85,247,0.25)"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { size: 17, className: "text-komo-purple" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[15px] font-bold text-foreground", children: "Monthly Earnings Summary" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-2 mb-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[32px] font-bold komo-gradient-text leading-none", children: [
                      "₹",
                      MONTHLY_TOTAL.toLocaleString()
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[13px] text-komo-text-muted", children: "this month" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 my-3", children: MONTHLY_BREAKDOWN.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "span",
                    {
                      className: "text-[11px] font-medium px-2.5 py-1 rounded-full",
                      style: {
                        background: `${b.color}18`,
                        color: b.color,
                        border: `1px solid ${b.color}30`
                      },
                      children: [
                        b.label,
                        " ",
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold", children: [
                          "₹",
                          b.amount.toLocaleString()
                        ] })
                      ]
                    },
                    b.label
                  )) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-[12px] mb-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-komo-text-secondary", children: "Monthly Goal" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-foreground", children: [
                        "₹",
                        MONTHLY_TOTAL.toLocaleString(),
                        " / ₹",
                        MONTHLY_GOAL.toLocaleString()
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "h-2.5 rounded-full overflow-hidden",
                        style: { background: "rgba(255,255,255,0.08)" },
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          motion.div,
                          {
                            initial: { width: 0 },
                            animate: {
                              width: `${Math.round(MONTHLY_TOTAL / MONTHLY_GOAL * 100)}%`
                            },
                            transition: { duration: 1, ease: "easeOut", delay: 0.3 },
                            className: "h-full rounded-full komo-gradient"
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-komo-text-muted mt-1.5", children: [
                      Math.round(MONTHLY_TOTAL / MONTHLY_GOAL * 100),
                      "% of monthly goal reached"
                    ] })
                  ] })
                ]
              }
            )
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "insights", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          variants: container,
          initial: "hidden",
          animate: "show",
          className: "space-y-4",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                variants: item,
                className: "flex items-center gap-2 mb-1",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "px-3 py-1.5 rounded-xl text-[12px] font-bold flex items-center gap-1.5",
                      style: {
                        background: "linear-gradient(135deg, rgba(47,168,255,0.15), rgba(168,85,247,0.15))",
                        border: "1px solid rgba(168,85,247,0.3)",
                        color: "#a855f7"
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 12 }),
                        " Business Suite Insights"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-komo-text-muted", children: "Last 30 days" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: item, className: "grid grid-cols-2 gap-3", children: BUSINESS_INSIGHTS.map((ins) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "rounded-xl p-4",
                style: {
                  background: `linear-gradient(135deg, ${ins.color}12, ${ins.color}06)`,
                  border: `1px solid ${ins.color}25`
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    ins.icon,
                    {
                      size: 16,
                      style: { color: ins.color },
                      className: "mb-2"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[22px] font-bold text-foreground leading-tight", children: ins.value }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-komo-text-muted", children: ins.label }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "p",
                    {
                      className: "text-[11px] font-semibold mt-1",
                      style: { color: "#4ade80" },
                      children: [
                        ins.change,
                        " vs last month"
                      ]
                    }
                  )
                ]
              },
              ins.label
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                variants: item,
                className: "rounded-2xl p-5",
                style: {
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { size: 16, className: "text-yellow-400" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[14px] font-bold text-foreground", children: "Ad Performance" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Badge,
                      {
                        className: "ml-auto text-[10px] border-0",
                        style: {
                          background: "rgba(34,197,94,0.15)",
                          color: "#4ade80"
                        },
                        children: "3 Active"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-3", children: [
                    { label: "Total Spend", value: "₹4,200", icon: "💸" },
                    { label: "Total Clicks", value: "12,840", icon: "👆" },
                    { label: "Avg. CTR", value: "3.8%", icon: "📊" }
                  ].map((ad) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "text-center py-3 px-2 rounded-xl",
                      style: { background: "rgba(255,255,255,0.04)" },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[20px] mb-1", children: ad.icon }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[15px] font-bold text-foreground", children: ad.value }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-komo-text-muted mt-0.5", children: ad.label })
                      ]
                    },
                    ad.label
                  )) })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                variants: item,
                className: "rounded-2xl p-5",
                style: {
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { size: 16, className: "text-komo-blue" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[14px] font-bold text-foreground", children: "Audience Insights" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] font-semibold text-komo-text-secondary mb-2", children: "📍 Top Locations" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2 mb-4", children: TOP_LOCATIONS.map((loc) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[14px]", children: loc.flag }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12px] text-foreground w-12", children: loc.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "flex-1 h-2 rounded-full overflow-hidden",
                        style: { background: "rgba(255,255,255,0.08)" },
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          motion.div,
                          {
                            initial: { width: 0 },
                            animate: { width: `${loc.pct}%` },
                            transition: {
                              duration: 0.8,
                              ease: "easeOut",
                              delay: 0.2
                            },
                            className: "h-full rounded-full",
                            style: {
                              background: "linear-gradient(90deg, #2fa8ff, #a855f7)"
                            }
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] text-komo-text-muted w-8 text-right", children: [
                      loc.pct,
                      "%"
                    ] })
                  ] }, loc.name)) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] font-semibold text-komo-text-secondary mb-2", children: "👥 Age Groups" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 flex-wrap mb-4", children: AGE_GROUPS.map((age) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "flex-1 min-w-[64px] text-center py-2.5 px-2 rounded-xl",
                      style: {
                        background: `${age.color}12`,
                        border: `1px solid ${age.color}25`
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[16px] font-bold text-foreground", children: [
                          age.pct,
                          "%"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "p",
                          {
                            className: "text-[10px] mt-0.5",
                            style: { color: age.color },
                            children: age.range
                          }
                        )
                      ]
                    },
                    age.range
                  )) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] font-semibold text-komo-text-secondary mb-2", children: "⚤ Gender Split" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex rounded-full overflow-hidden h-5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.div,
                      {
                        initial: { width: 0 },
                        animate: { width: "62%" },
                        transition: { duration: 0.8, ease: "easeOut" },
                        className: "h-full flex items-center justify-center text-[10px] font-bold text-white",
                        style: {
                          background: "linear-gradient(90deg, #2fa8ff, #6366f1)"
                        },
                        children: "62% M"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.div,
                      {
                        initial: { width: 0 },
                        animate: { width: "38%" },
                        transition: { duration: 0.8, ease: "easeOut", delay: 0.1 },
                        className: "h-full flex items-center justify-center text-[10px] font-bold text-white",
                        style: {
                          background: "linear-gradient(90deg, #ec4899, #a855f7)"
                        },
                        children: "38% F"
                      }
                    )
                  ] })
                ]
              }
            )
          ]
        }
      ) })
    ] })
  ] });
}
export {
  CreatorDashboard as default
};
