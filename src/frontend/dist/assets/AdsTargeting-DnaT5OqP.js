import { u as useApp, r as reactExports, j as jsxRuntimeExports, m as motion, E as Slider, b as ue } from "./index-BlWpIyR8.js";
import { B as Badge } from "./badge-BChbocV7.js";
import { S as Switch } from "./switch-Cx12Axum.js";
import { A as ArrowLeft } from "./arrow-left-C_jsN0fF.js";
import { U as Users } from "./users-Xo-nsB-b.js";
import { T as TrendingUp } from "./trending-up-DGT7M1As.js";
import { T as Target } from "./target-CWymm-ZX.js";
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
  "Bollywood"
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
  "Punjab"
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
    color: "from-green-600 to-teal-600"
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
    recommended: true
  },
  {
    id: "precise",
    label: "Precise",
    labelHindi: "सटीक",
    desc: "Max ROI",
    reach: "500K",
    cpm: 85,
    icon: "🎯",
    color: "from-orange-600 to-red-600"
  }
];
function AdsTargeting() {
  const { navigate } = useApp();
  const [ageRange, setAgeRange] = reactExports.useState([18, 45]);
  const [gender, setGender] = reactExports.useState("all");
  const [selectedStates, setSelectedStates] = reactExports.useState([
    "Maharashtra",
    "Delhi"
  ]);
  const [selectedInterests, setSelectedInterests] = reactExports.useState([
    "Tech",
    "Entertainment"
  ]);
  const [devices, setDevices] = reactExports.useState({
    mobile: true,
    desktop: false,
    tablet: false
  });
  const [preset, setPreset] = reactExports.useState("balanced");
  const toggleState = (s) => setSelectedStates(
    (prev) => prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
  );
  const toggleInterest = (i) => setSelectedInterests(
    (prev) => prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
  );
  const selectedPreset = PRESETS.find((p) => p.id === preset);
  const reachPct = preset === "broad" ? 90 : preset === "balanced" ? 55 : 20;
  const estimatedReach = preset === "broad" ? "50M+" : preset === "balanced" ? "5M" : "500K";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "min-h-screen px-4 py-6 pb-20",
      style: { background: "linear-gradient(180deg,#0B0F14 0%,#11161D 100%)" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => navigate("/"),
              className: "w-9 h-9 rounded-full bg-white/10 flex items-center justify-center",
              "data-ocid": "ads_targeting.back_button",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 18, className: "text-white" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-white text-xl font-bold", children: "दर्शक टार्गेटिंग" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/50 text-xs", children: "Audience Targeting" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2 mb-6", children: PRESETS.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            "data-ocid": `ads_targeting.${p.id}.toggle`,
            onClick: () => setPreset(p.id),
            className: `relative rounded-2xl p-3 border transition-all text-center ${preset === p.id ? "border-purple-500/50 bg-white/10" : "border-white/10 bg-white/5"}`,
            children: [
              p.recommended && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "absolute -top-2 left-1/2 -translate-x-1/2 bg-purple-600 text-white border-0 text-[8px] px-1.5", children: "⭐" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl mb-1", children: p.icon }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: `text-xs font-bold ${preset === p.id ? "text-white" : "text-white/60"}`,
                  children: p.label
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/40 text-[10px]", children: p.desc }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "p",
                {
                  className: `text-[10px] font-bold mt-1 ${preset === p.id ? "text-purple-400" : "text-white/30"}`,
                  children: [
                    "₹",
                    p.cpm,
                    " CPM"
                  ]
                }
              )
            ]
          },
          p.id
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            className: "bg-white/5 rounded-2xl p-4 border border-white/10 mb-5",
            initial: { scale: 0.97 },
            animate: { scale: 1 },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { size: 14, className: "text-blue-400" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white text-sm font-semibold", children: "Estimated Reach" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-purple-400 font-bold", children: estimatedReach })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 bg-white/10 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  className: `h-full bg-gradient-to-r ${selectedPreset == null ? void 0 : selectedPreset.color}`,
                  initial: { width: 0 },
                  animate: { width: `${reachPct}%` },
                  transition: { duration: 0.5 }
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between mt-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/40 text-[10px]", children: "Narrow" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/40 text-[10px]", children: "Broad" })
              ] })
            ]
          },
          preset
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/5 rounded-2xl p-4 border border-white/10 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-white font-semibold text-sm mb-4", children: "👤 Demographics" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60 text-xs", children: "Age Range" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-white text-xs font-bold", children: [
                ageRange[0],
                " – ",
                ageRange[1]
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Slider,
              {
                "data-ocid": "ads_targeting.age.slider",
                value: ageRange,
                onValueChange: (v) => setAgeRange(v),
                min: 13,
                max: 65,
                step: 1,
                className: "w-full"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/60 text-xs mb-2", children: "Gender" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: ["all", "male", "female"].map((g) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                "data-ocid": `ads_targeting.gender_${g}.toggle`,
                onClick: () => setGender(g),
                className: `px-4 py-1.5 rounded-full text-xs font-medium transition-all ${gender === g ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white" : "bg-white/5 text-white/50 border border-white/10"}`,
                children: g === "all" ? "All" : g === "male" ? "Male" : "Female"
              },
              g
            )) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/5 rounded-2xl p-4 border border-white/10 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-white font-semibold text-sm mb-3", children: "📍 Location (States)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: STATES.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              "data-ocid": `ads_targeting.state_${s.toLowerCase().replace(" ", "_")}.toggle`,
              onClick: () => toggleState(s),
              className: `px-3 py-1.5 rounded-full text-xs font-medium transition-all ${selectedStates.includes(s) ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white" : "bg-white/5 text-white/50 border border-white/10"}`,
              children: s
            },
            s
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/5 rounded-2xl p-4 border border-white/10 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-white font-semibold text-sm mb-3", children: "💡 Interest Categories" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: INTERESTS.map((interest) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              "data-ocid": `ads_targeting.interest_${interest.toLowerCase()}.toggle`,
              onClick: () => toggleInterest(interest),
              className: `px-3 py-1.5 rounded-full text-xs font-medium transition-all ${selectedInterests.includes(interest) ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white" : "bg-white/5 text-white/50 border border-white/10"}`,
              children: interest
            },
            interest
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/5 rounded-2xl p-4 border border-white/10 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-white font-semibold text-sm mb-3", children: "📱 Device Targeting" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: ["mobile", "desktop", "tablet"].map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/70 text-sm capitalize", children: d === "mobile" ? "📱 Mobile" : d === "desktop" ? "💻 Desktop" : "📟 Tablet" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Switch,
              {
                "data-ocid": `ads_targeting.device_${d}.switch`,
                checked: devices[d],
                onCheckedChange: (v) => setDevices((prev) => ({ ...prev, [d]: v }))
              }
            )
          ] }, d)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-blue-900/40 to-purple-900/40 rounded-2xl p-4 border border-purple-500/20 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { size: 14, className: "text-purple-400" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white text-sm font-semibold", children: "Current CPM Estimate" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/60 text-xs mb-2", children: "Cost per 1000 impressions" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-white font-bold text-2xl", children: [
            "₹",
            selectedPreset == null ? void 0 : selectedPreset.cpm,
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/40 text-sm", children: "CPM" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            "data-ocid": "ads_targeting.apply.primary_button",
            onClick: () => ue.success(
              "Targeting applied! Campaign will use new audience settings ✅"
            ),
            className: "w-full py-4 rounded-2xl text-white font-bold text-base bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center gap-2",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { size: 18 }),
              " Apply Targeting / टार्गेटिंग लागू करें"
            ]
          }
        )
      ]
    }
  );
}
export {
  AdsTargeting as default
};
