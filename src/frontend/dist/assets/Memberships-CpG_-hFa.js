import { u as useApp, r as reactExports, j as jsxRuntimeExports, H as Heart, m as motion, Z as Zap, b as ue } from "./index-BlWpIyR8.js";
import { B as Badge } from "./badge-BChbocV7.js";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-DNx5Z_5k.js";
import { A as ArrowLeft } from "./arrow-left-C_jsN0fF.js";
import { U as Users } from "./users-Xo-nsB-b.js";
const TIERS = [
  {
    id: "fan",
    name: "Fan",
    nameHindi: "प्रशंसक",
    price: 49,
    icon: "❤️",
    color: "from-pink-600 to-rose-600",
    border: "border-pink-500/30",
    members: 1240,
    benefits: [
      "Exclusive Fan posts",
      "Fan badge on profile",
      "Monthly newsletter",
      "Early video access"
    ]
  },
  {
    id: "supporter",
    name: "Supporter",
    nameHindi: "समर्थक",
    price: 99,
    icon: "⭐",
    color: "from-blue-600 to-purple-600",
    border: "border-purple-500/30",
    members: 580,
    recommended: true,
    benefits: [
      "All Fan benefits",
      "Supporter badge ⭐",
      "Direct DM access",
      "Exclusive Reels",
      "Monthly live Q&A"
    ]
  },
  {
    id: "superfan",
    name: "Super Fan",
    nameHindi: "सुपर फैन",
    price: 199,
    icon: "👑",
    color: "from-yellow-500 to-orange-500",
    border: "border-yellow-500/30",
    members: 142,
    benefits: [
      "All Supporter benefits",
      "Super Fan crown 👑",
      "Private group chat",
      "BTS content access",
      "Creator shoutout",
      "Free merch discount"
    ]
  }
];
const MY_MEMBERS = [
  {
    name: "Priya Sharma",
    tier: "superfan",
    avatar: "PS",
    joinedDays: 32,
    emoji: "👑"
  },
  {
    name: "Rahul Verma",
    tier: "supporter",
    avatar: "RV",
    joinedDays: 45,
    emoji: "⭐"
  },
  {
    name: "Anjali Mishra",
    tier: "fan",
    avatar: "AM",
    joinedDays: 60,
    emoji: "❤️"
  },
  {
    name: "Deepak Singh",
    tier: "supporter",
    avatar: "DS",
    joinedDays: 12,
    emoji: "⭐"
  },
  {
    name: "Meera Patel",
    tier: "superfan",
    avatar: "MP",
    joinedDays: 5,
    emoji: "👑"
  },
  { name: "Ravi Kumar", tier: "fan", avatar: "RK", joinedDays: 90, emoji: "❤️" }
];
function Memberships() {
  const { navigate } = useApp();
  const [joinedTiers, setJoinedTiers] = reactExports.useState([]);
  const handleJoin = (tierId, price) => {
    if (joinedTiers.includes(tierId)) return;
    setJoinedTiers((prev) => [...prev, tierId]);
    ue.success(`Membership joined! ₹${price}/माह charge होगा 🎉`);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "min-h-screen px-4 py-6",
      style: { background: "linear-gradient(180deg,#0B0F14 0%,#11161D 100%)" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => navigate("/"),
              className: "w-9 h-9 rounded-full bg-white/10 flex items-center justify-center",
              "data-ocid": "memberships.back_button",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 18, className: "text-white" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-white text-xl font-bold", children: "क्रिएटर मेंबरशिप" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/50 text-xs", children: "Creator Memberships" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "join", className: "w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            TabsList,
            {
              className: "w-full bg-white/5 border border-white/10 rounded-xl mb-6 p-1",
              "data-ocid": "memberships.tab",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  TabsTrigger,
                  {
                    value: "join",
                    className: "flex-1 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white rounded-lg text-white/60 text-sm",
                    "data-ocid": "memberships.join.tab",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { size: 14, className: "mr-1.5" }),
                      " Join"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  TabsTrigger,
                  {
                    value: "members",
                    className: "flex-1 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white rounded-lg text-white/60 text-sm",
                    "data-ocid": "memberships.members.tab",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { size: 14, className: "mr-1.5" }),
                      " My Members"
                    ]
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "join", className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-3 mb-6", children: [
              { label: "Total Members", value: "1,962", icon: "👥" },
              { label: "Monthly Earning", value: "₹6,450", icon: "💰" },
              { label: "Active Tiers", value: "3", icon: "⭐" }
            ].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "bg-white/5 rounded-2xl p-3 border border-white/10 text-center",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl mb-1", children: s.icon }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white font-bold text-sm", children: s.value }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/40 text-[10px]", children: s.label })
                ]
              },
              s.label
            )) }),
            TIERS.map((tier, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: i * 0.1 },
                className: `rounded-2xl border p-5 bg-white/5 ${tier.border} relative`,
                "data-ocid": `memberships.${tier.id}.card`,
                children: [
                  tier.recommended && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 text-[10px]", children: "✨ POPULAR" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: `w-12 h-12 rounded-2xl bg-gradient-to-br ${tier.color} flex items-center justify-center text-xl`,
                          children: tier.icon
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-white font-bold", children: tier.name }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/50 text-xs", children: tier.nameHindi })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-white font-bold text-lg", children: [
                        "₹",
                        tier.price
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/50 text-xs", children: "/माह" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 mt-0.5 justify-end", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { size: 10, className: "text-white/40" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-white/40 text-[10px]", children: [
                          tier.members.toLocaleString(),
                          " members"
                        ] })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1.5 mb-4", children: tier.benefits.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "li",
                    {
                      className: "flex items-center gap-2 text-xs text-white/70",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { size: 10, className: "text-purple-400 flex-shrink-0" }),
                        b
                      ]
                    },
                    b
                  )) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      "data-ocid": `memberships.${tier.id}.primary_button`,
                      onClick: () => handleJoin(tier.id, tier.price),
                      className: `w-full py-3 rounded-xl text-white font-bold text-sm transition-all ${joinedTiers.includes(tier.id) ? "bg-green-600/30 text-green-400 border border-green-500/30" : `bg-gradient-to-r ${tier.color}`}`,
                      children: joinedTiers.includes(tier.id) ? `✓ Joined — ₹${tier.price}/माह` : `Join ₹${tier.price}/माह`
                    }
                  )
                ]
              },
              tier.id
            ))
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "members", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-white/50 text-xs mb-4", children: [
              MY_MEMBERS.length,
              " active members this month"
            ] }),
            MY_MEMBERS.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, x: -10 },
                animate: { opacity: 1, x: 0 },
                transition: { delay: i * 0.05 },
                className: "flex items-center gap-3 bg-white/5 rounded-xl p-3 border border-white/10",
                "data-ocid": `memberships.member.item.${i + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0", children: m.avatar }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white text-sm font-semibold", children: m.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-white/40 text-[10px]", children: [
                      m.joinedDays,
                      " days ago"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Badge,
                    {
                      className: `text-[10px] border-0 ${m.tier === "superfan" ? "bg-yellow-500/20 text-yellow-400" : m.tier === "supporter" ? "bg-purple-500/20 text-purple-400" : "bg-pink-500/20 text-pink-400"}`,
                      children: [
                        m.emoji,
                        " ",
                        m.tier
                      ]
                    }
                  )
                ]
              },
              `${m.name}-${i}`
            ))
          ] }) })
        ] })
      ]
    }
  );
}
export {
  Memberships as default
};
