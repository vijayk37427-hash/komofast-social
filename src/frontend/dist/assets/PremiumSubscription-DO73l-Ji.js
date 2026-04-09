import { u as useApp, r as reactExports, j as jsxRuntimeExports, m as motion, C as Check, D as Dialog, k as DialogContent, q as DialogHeader, s as DialogTitle, I as Input, Z as Zap, b as ue } from "./index-BlWpIyR8.js";
import { B as Badge } from "./badge-BChbocV7.js";
import { A as ArrowLeft } from "./arrow-left-C_jsN0fF.js";
import { S as Star } from "./star-0Ucxj6tT.js";
import { C as Crown } from "./crown-DZ_5N3m1.js";
const PLANS = [
  {
    id: "free",
    name: "Basic Free",
    nameHindi: "मुफ़्त",
    price: 0,
    priceLabel: "मुफ़्त",
    period: "",
    icon: "👤",
    color: "from-gray-600 to-gray-700",
    border: "border-white/10",
    features: [
      { label: "Basic Feed", included: true },
      { label: "5 Reels/day", included: true },
      { label: "Standard filters", included: true },
      { label: "Ads shown", included: false },
      { label: "Creator Badge", included: false },
      { label: "Higher Payout %", included: false },
      { label: "Priority Support", included: false },
      { label: "Exclusive Filters", included: false },
      { label: "Analytics Pro", included: false }
    ]
  },
  {
    id: "premium",
    name: "KomoPremium",
    nameHindi: "प्रीमियम",
    price: 99,
    priceLabel: "₹99",
    period: "/माह",
    icon: "⭐",
    color: "from-blue-600 to-purple-600",
    border: "border-purple-500/50",
    recommended: true,
    features: [
      { label: "Unlimited Reels", included: true },
      { label: "Ads-free experience", included: true },
      { label: "Creator Badge ⭐", included: true },
      { label: "Higher Payout %", included: true },
      { label: "Priority Support", included: true },
      { label: "Exclusive Filters", included: true },
      { label: "Analytics Pro", included: true },
      { label: "Membership perks", included: false },
      { label: "Early access", included: false }
    ]
  },
  {
    id: "pro",
    name: "KomoPro",
    nameHindi: "प्रो",
    price: 999,
    priceLabel: "₹999",
    period: "/वर्ष",
    altPrice: "₹499",
    altPeriod: "/6 माह",
    icon: "👑",
    color: "from-yellow-500 to-orange-500",
    border: "border-yellow-500/50",
    features: [
      { label: "All Premium features", included: true },
      { label: "Ads-free experience", included: true },
      { label: "PRO Crown Badge 👑", included: true },
      { label: "Max Payout %", included: true },
      { label: "24/7 Priority Support", included: true },
      { label: "All Exclusive Filters", included: true },
      { label: "Analytics Pro + AI", included: true },
      { label: "Membership discounts", included: true },
      { label: "Early access features", included: true }
    ]
  }
];
function PremiumSubscription() {
  const { navigate } = useApp();
  const [currentPlan] = reactExports.useState("free");
  const [payModal, setPayModal] = reactExports.useState(false);
  const [selectedPlan, setSelectedPlan] = reactExports.useState(
    null
  );
  const [upiId, setUpiId] = reactExports.useState("");
  const [paying, setPaying] = reactExports.useState(false);
  const handleSubscribe = (plan) => {
    if (plan.id === "free") return;
    setSelectedPlan(plan);
    setPayModal(true);
  };
  const handlePay = () => {
    if (!upiId.trim()) {
      ue.error("UPI ID डालें");
      return;
    }
    setPaying(true);
    setTimeout(() => {
      setPaying(false);
      setPayModal(false);
      ue.success(`${selectedPlan == null ? void 0 : selectedPlan.name} सब्सक्रिप्शन सक्रिय! 🎉`);
    }, 1800);
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
              "data-ocid": "premium.back_button",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 18, className: "text-white" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-white text-xl font-bold", children: "प्रीमियम सदस्यता" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/50 text-xs", children: "Premium Subscription" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 16 },
            animate: { opacity: 1, y: 0 },
            className: "rounded-3xl p-6 mb-8 text-center relative overflow-hidden",
            style: {
              background: "linear-gradient(135deg,#1e1b4b,#312e81,#4c1d95)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl mb-3", children: "👑" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-white text-2xl font-bold mb-2", children: "KomoFast Premium" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/70 text-sm", children: "Ad-free experience, exclusive badges & higher earnings" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 right-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30 text-[10px]", children: "MOST POPULAR" }) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4 mb-8", children: PLANS.map((plan, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: i * 0.1 },
            className: `rounded-2xl border p-5 relative ${plan.border} bg-white/5`,
            "data-ocid": `premium.${plan.id}.card`,
            children: [
              plan.recommended && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-3 left-1/2 -translate-x-1/2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 text-[10px] px-3", children: "⭐ RECOMMENDED" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: `w-12 h-12 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center text-xl`,
                      children: plan.icon
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-white font-bold text-base", children: plan.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/50 text-xs", children: plan.nameHindi })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-bold text-xl", children: plan.priceLabel }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/50 text-xs", children: plan.period }),
                  plan.altPrice && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-white/40 text-[10px] mt-0.5", children: [
                    plan.altPrice,
                    plan.altPeriod
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-1.5 mb-4", children: plan.features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: `w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${f.included ? "bg-green-500/20" : "bg-white/5"}`,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Check,
                      {
                        size: 9,
                        className: f.included ? "text-green-400" : "text-white/20"
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: `text-xs ${f.included ? "text-white/80" : "text-white/30 line-through"}`,
                    children: f.label
                  }
                )
              ] }, f.label)) }),
              currentPlan === plan.id ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-full py-3 rounded-xl text-center bg-white/10 text-white/60 text-sm font-semibold",
                  "data-ocid": `premium.${plan.id}.current_button`,
                  children: "✓ Current Plan"
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  "data-ocid": `premium.${plan.id}.primary_button`,
                  onClick: () => handleSubscribe(plan),
                  disabled: plan.id === "free",
                  className: `w-full py-3 rounded-xl text-white font-bold text-sm transition-opacity ${plan.id === "free" ? "bg-white/5 text-white/30 cursor-not-allowed" : `bg-gradient-to-r ${plan.color}`}`,
                  children: plan.id === "free" ? "Current Plan" : "Subscribe Now / सब्सक्राइब करें"
                }
              )
            ]
          },
          plan.id
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/5 rounded-2xl p-4 border border-white/10 mb-20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 14, className: "text-yellow-400" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-semibold text-sm", children: "Premium के फायदे" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1 text-white/60 text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• No ads — clean, distraction-free feed" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Earn 20% more on every content sale" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Blue-purple creator badge on profile" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Priority customer support response" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Access exclusive filter packs every month" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: payModal, onOpenChange: setPayModal, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          DialogContent,
          {
            className: "bg-[#12161e] border-white/10 text-white max-w-sm",
            "data-ocid": "premium.payment.dialog",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "text-white flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Crown, { size: 18, className: "text-yellow-400" }),
                selectedPlan == null ? void 0 : selectedPlan.name,
                " - ",
                selectedPlan == null ? void 0 : selectedPlan.priceLabel,
                selectedPlan == null ? void 0 : selectedPlan.period
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl p-4 border border-purple-500/20", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/70 text-xs mb-1", children: "Total Amount" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white text-2xl font-bold", children: selectedPlan == null ? void 0 : selectedPlan.priceLabel })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "label",
                    {
                      htmlFor: "premium-upi",
                      className: "text-white/60 text-xs mb-1.5 block",
                      children: "UPI ID डालें"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "premium-upi",
                      "data-ocid": "premium.upi.input",
                      placeholder: "name@upi या number@paytm",
                      value: upiId,
                      onChange: (e) => setUpiId(e.target.value),
                      className: "bg-white/5 border-white/10 text-white placeholder:text-white/30"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2", children: ["PhonePe", "GPay", "Paytm"].map((app) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    className: "py-2 bg-white/5 rounded-lg text-white/70 text-xs border border-white/10 hover:bg-white/10 transition-colors",
                    children: app
                  },
                  app
                )) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    "data-ocid": "premium.pay.primary_button",
                    onClick: handlePay,
                    disabled: paying,
                    className: "w-full py-3 rounded-xl text-white font-bold text-sm bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center gap-2",
                    children: [
                      paying ? /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { size: 16, className: "animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Crown, { size: 16 }),
                      paying ? "Processing..." : "Pay & Subscribe"
                    ]
                  }
                )
              ] })
            ]
          }
        ) })
      ]
    }
  );
}
export {
  PremiumSubscription as default
};
