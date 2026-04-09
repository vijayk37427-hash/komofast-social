import { u as useApp, j as jsxRuntimeExports, m as motion, b as ue } from "./index-BlWpIyR8.js";
import { A as ArrowLeft } from "./arrow-left-C_jsN0fF.js";
import { T as TrendingUp } from "./trending-up-DGT7M1As.js";
import { E as ExternalLink } from "./external-link-DFH2B-hl.js";
import { D as Download } from "./download-bwGeHIgr.js";
const STREAMS = [
  {
    icon: "📺",
    name: "Ads Revenue",
    nameHindi: "विज्ञापन",
    amount: 18200,
    trend: 23,
    route: "/ads-targeting"
  },
  {
    icon: "⭐",
    name: "Premium Subscriptions",
    nameHindi: "प्रीमियम",
    amount: 9800,
    trend: 15,
    route: "/premium"
  },
  {
    icon: "👥",
    name: "Memberships",
    nameHindi: "मेंबरशिप",
    amount: 6450,
    trend: 31,
    route: "/memberships"
  },
  {
    icon: "💬",
    name: "Super Chats",
    nameHindi: "सुपर चैट",
    amount: 4200,
    trend: 45,
    route: "/live"
  },
  {
    icon: "🛍️",
    name: "Merch Sales",
    nameHindi: "मर्च",
    amount: 3900,
    trend: 12,
    route: "/merch"
  },
  {
    icon: "📚",
    name: "Digital Market",
    nameHindi: "डिजिटल मार्केट",
    amount: 2800,
    trend: 8,
    route: "/digital-market"
  },
  {
    icon: "🎓",
    name: "Academy",
    nameHindi: "अकादमी",
    amount: 2500,
    trend: 5,
    route: "/academy"
  }
];
const MONTHLY = [
  { month: "Oct", val: 28e3 },
  { month: "Nov", val: 32e3 },
  { month: "Dec", val: 38e3 },
  { month: "Jan", val: 41e3 },
  { month: "Feb", val: 44e3 },
  { month: "Mar", val: 47850 }
];
const maxVal = Math.max(...MONTHLY.map((m) => m.val));
function MonetizationHub() {
  const { navigate } = useApp();
  const total = STREAMS.reduce((a, s) => a + s.amount, 0);
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
              "data-ocid": "monetization.back_button",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 18, className: "text-white" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-white text-xl font-bold", children: "कमाई केंद्र" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/50 text-xs", children: "Monetization Hub" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 16 },
            animate: { opacity: 1, y: 0 },
            className: "rounded-3xl p-6 mb-6 relative overflow-hidden",
            style: {
              background: "linear-gradient(135deg,#1e1b4b,#312e81,#4c1d95)"
            },
            "data-ocid": "monetization.summary.card",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute top-0 right-0 w-32 h-32 rounded-full",
                  style: {
                    background: "radial-gradient(circle,rgba(168,85,247,0.3),transparent)"
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/60 text-xs mb-1", children: "This Month's Total Earnings" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-white text-4xl font-bold mb-1", children: [
                "₹",
                total.toLocaleString()
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { size: 12, className: "text-green-400" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-400 text-xs", children: "+22% vs last month" })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-white font-semibold text-sm mb-3", children: "💰 Income Streams" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2 mb-6", children: STREAMS.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.button,
          {
            type: "button",
            initial: { opacity: 0, x: -16 },
            animate: { opacity: 1, x: 0 },
            transition: { delay: i * 0.06 },
            onClick: () => navigate(s.route),
            className: "w-full flex items-center gap-4 bg-white/5 rounded-2xl p-4 border border-white/10 hover:bg-white/10 transition-colors",
            "data-ocid": `monetization.stream.item.${i + 1}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl w-8 text-center", children: s.icon }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 text-left", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white text-sm font-semibold", children: s.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/40 text-[10px]", children: s.nameHindi })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-white font-bold text-sm", children: [
                  "₹",
                  s.amount.toLocaleString()
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-green-400 text-[10px]", children: [
                  "+",
                  s.trend,
                  "% ↑"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { size: 14, className: "text-white/30" })
            ]
          },
          s.name
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/5 rounded-2xl p-4 border border-white/10 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-white font-semibold text-sm mb-4", children: "📊 Monthly Trend (6 months)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-end gap-2 h-28", children: MONTHLY.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex-1 flex flex-col items-center gap-1",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-white/40 text-[9px]", children: [
                  "₹",
                  (m.val / 1e3).toFixed(0),
                  "k"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    className: "w-full rounded-t-lg",
                    style: {
                      background: i === MONTHLY.length - 1 ? "linear-gradient(180deg,#a855f7,#3b82f6)" : "rgba(168,85,247,0.3)"
                    },
                    initial: { height: 0 },
                    animate: { height: `${m.val / maxVal * 80}px` },
                    transition: { delay: i * 0.1, duration: 0.5 }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/50 text-[9px]", children: m.month })
              ]
            },
            m.month
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            "data-ocid": "monetization.withdraw.primary_button",
            onClick: () => ue.success(
              "Withdrawal initiated! 2-3 business days में UPI पर आएगा 💰"
            ),
            className: "w-full py-4 rounded-2xl text-white font-bold text-base mb-4 flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-teal-600",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { size: 18 }),
              " Withdraw to UPI / निकालें"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-white font-semibold text-sm mb-3", children: "🚀 Quick Access" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-2", children: [
          { label: "Premium", icon: "⭐", route: "/premium" },
          { label: "Memberships", icon: "👥", route: "/memberships" },
          { label: "Merch Store", icon: "🛍️", route: "/merch" },
          { label: "Ads Targeting", icon: "🎯", route: "/ads-targeting" },
          { label: "Business Acct", icon: "💼", route: "/business-account" },
          { label: "Donations", icon: "💝", route: "/donate" }
        ].map((link) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            "data-ocid": "monetization.quicklink.button",
            onClick: () => navigate(link.route),
            className: "flex items-center gap-3 bg-white/5 rounded-xl p-3 border border-white/10 hover:bg-white/10 transition-colors",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl", children: link.icon }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/70 text-xs font-medium", children: link.label })
            ]
          },
          link.route
        )) })
      ]
    }
  );
}
export {
  MonetizationHub as default
};
