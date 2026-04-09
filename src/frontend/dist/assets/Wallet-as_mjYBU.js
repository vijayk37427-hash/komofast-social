import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, C as Check, X } from "./index-BlWpIyR8.js";
import { W as Wallet, C as CreditCard } from "./wallet-BdlaG0ju.js";
import { S as Smartphone } from "./smartphone-DJwZVx5d.js";
import { Q as QrCode } from "./qr-code-Cq38KS2O.js";
import { T as TrendingUp } from "./trending-up-DGT7M1As.js";
import { T as Tag } from "./tag-Ram4IMdw.js";
import { B as Building2 } from "./building-2-xPM6GFYz.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["path", { d: "M17 7 7 17", key: "15tmo1" }],
  ["path", { d: "M17 17H7V7", key: "1org7z" }]
];
const ArrowDownLeft = createLucideIcon("arrow-down-left", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M7 7h10v10", key: "1tivn9" }],
  ["path", { d: "M7 17 17 7", key: "1vkiza" }]
];
const ArrowUpRight = createLucideIcon("arrow-up-right", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["circle", { cx: "8", cy: "8", r: "6", key: "3yglwk" }],
  ["path", { d: "M18.09 10.37A6 6 0 1 1 10.34 18", key: "t5s6rm" }],
  ["path", { d: "M7 6h1v4", key: "1obek4" }],
  ["path", { d: "m16.71 13.88.7.71-2.82 2.82", key: "1rbuyh" }]
];
const Coins = createLucideIcon("coins", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["rect", { x: "3", y: "8", width: "18", height: "4", rx: "1", key: "bkv52" }],
  ["path", { d: "M12 8v13", key: "1c76mn" }],
  ["path", { d: "M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7", key: "6wjy6b" }],
  [
    "path",
    {
      d: "M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",
      key: "1ihvrl"
    }
  ]
];
const Gift = createLucideIcon("gift", __iconNode);
const TRANSACTIONS = [
  {
    id: 1,
    type: "credit",
    title: "UPI Added",
    desc: "via PhonePe",
    amount: 1e3,
    coins: 0,
    date: "Today, 3:10 PM"
  },
  {
    id: 2,
    type: "credit",
    title: "Course Sale",
    desc: "Python Programming",
    amount: 699,
    coins: 70,
    date: "Today, 2:30 PM"
  },
  {
    id: 3,
    type: "credit",
    title: "Honor Reward",
    desc: "Silver tier bonus",
    amount: 50,
    coins: 500,
    date: "Today, 9:00 AM"
  },
  {
    id: 4,
    type: "debit",
    title: "Withdrawal",
    desc: "UPI transfer",
    amount: -2e3,
    coins: 0,
    date: "Yesterday"
  },
  {
    id: 5,
    type: "credit",
    title: "Ad Revenue",
    desc: "Content monetization",
    amount: 340,
    coins: 34,
    date: "Mar 19"
  },
  {
    id: 6,
    type: "credit",
    title: "Referral Bonus",
    desc: "Invited 3 friends",
    amount: 150,
    coins: 150,
    date: "Mar 18"
  },
  {
    id: 7,
    type: "credit",
    title: "Subscription Share",
    desc: "Academy Pro royalty",
    amount: 450,
    coins: 45,
    date: "Mar 17"
  },
  {
    id: 8,
    type: "debit",
    title: "Withdrawal",
    desc: "Bank transfer",
    amount: -5e3,
    coins: 0,
    date: "Mar 15"
  }
];
const UPI_APPS = [
  { name: "PhonePe", color: "#5F259F", icon: "📱" },
  { name: "Google Pay", color: "#1A73E8", icon: "🔵" },
  { name: "Paytm", color: "#00B9F1", icon: "💙" },
  { name: "BHIM", color: "#FF6B00", icon: "🟠" },
  { name: "Amazon Pay", color: "#FF9900", icon: "🟡" },
  { name: "Other UPI", color: "#6B7280", icon: "💳" }
];
const PRESET_AMOUNTS = [100, 250, 500, 1e3, 2e3, 5e3];
function applyPromoCode(code) {
  switch (code.trim().toUpperCase()) {
    case "KOMO10":
      return {
        status: "success",
        message: "₹100 cashback added to your balance!",
        type: "balance",
        value: 100
      };
    case "WELCOME50":
      return {
        status: "success",
        message: "₹500 cashback added to your balance!",
        type: "balance",
        value: 500
      };
    case "COINS100":
      return {
        status: "success",
        message: "100 KomoCoins added to your wallet!",
        type: "coins",
        value: 100
      };
    case "ACADEMY":
      return {
        status: "success",
        message: "20% off on Academy subscription! Use at checkout.",
        type: "info"
      };
    default:
      return {
        status: "error",
        message: "Invalid promo code. Please check and try again."
      };
  }
}
function WalletPage() {
  const [showWithdrawModal, setShowWithdrawModal] = reactExports.useState(false);
  const [showPromoModal, setShowPromoModal] = reactExports.useState(false);
  const [showAddMoneyModal, setShowAddMoneyModal] = reactExports.useState(false);
  const [addMoneyStep, setAddMoneyStep] = reactExports.useState("amount");
  const [addMoneyAmount, setAddMoneyAmount] = reactExports.useState("");
  const [selectedUpiApp, setSelectedUpiApp] = reactExports.useState("");
  const [upiIdInput, setUpiIdInput] = reactExports.useState("");
  const [showQr, setShowQr] = reactExports.useState(false);
  const [withdrawMethod, setWithdrawMethod] = reactExports.useState("upi");
  const [withdrawAmount, setWithdrawAmount] = reactExports.useState("");
  const [upiId, setUpiId] = reactExports.useState("");
  const [withdrawSuccess, setWithdrawSuccess] = reactExports.useState(false);
  const [activeTab, setActiveTab] = reactExports.useState("all");
  const [balance, setBalance] = reactExports.useState(4890);
  const [coins, setCoins] = reactExports.useState(2450);
  const [promoCode, setPromoCode] = reactExports.useState("");
  const [promoResult, setPromoResult] = reactExports.useState(null);
  const [promoApplied, setPromoApplied] = reactExports.useState(false);
  const filteredTxns = TRANSACTIONS.filter(
    (t) => activeTab === "all" || t.type === activeTab
  );
  const handleWithdraw = () => {
    setWithdrawSuccess(true);
    setTimeout(() => {
      setWithdrawSuccess(false);
      setShowWithdrawModal(false);
      setWithdrawAmount("");
      setUpiId("");
    }, 2e3);
  };
  const handleApplyPromo = () => {
    if (!promoCode.trim()) return;
    const result = applyPromoCode(promoCode);
    setPromoResult(result);
    if (result.status === "success") {
      setPromoApplied(true);
      if (result.type === "balance" && result.value) {
        setBalance((prev) => prev + result.value);
      } else if (result.type === "coins" && result.value) {
        setCoins((prev) => prev + result.value);
      }
    }
  };
  const handleClosePromo = () => {
    setShowPromoModal(false);
    setPromoCode("");
    setPromoResult(null);
    setPromoApplied(false);
  };
  const handleAddMoneyProceed = () => {
    if (!addMoneyAmount || Number(addMoneyAmount) < 10) return;
    setAddMoneyStep("upi");
  };
  const handleUpiPay = () => {
    setAddMoneyStep("success");
    setTimeout(() => {
      setBalance((prev) => prev + Number(addMoneyAmount));
      setShowAddMoneyModal(false);
      setAddMoneyStep("amount");
      setAddMoneyAmount("");
      setSelectedUpiApp("");
      setUpiIdInput("");
      setShowQr(false);
    }, 2200);
  };
  const closeAddMoney = () => {
    setShowAddMoneyModal(false);
    setAddMoneyStep("amount");
    setAddMoneyAmount("");
    setSelectedUpiApp("");
    setUpiIdInput("");
    setShowQr(false);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto px-4 py-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3 mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "rounded-2xl p-4 relative overflow-hidden",
          style: { background: "linear-gradient(135deg, #7C3AED, #2563EB)" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/70 text-xs mb-1", children: "INR Balance" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-white font-bold text-2xl", children: [
              "₹",
              balance.toLocaleString()
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/60 text-xs mt-1", children: "Available" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-3 top-3 opacity-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Wallet, { size: 40 }) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "rounded-2xl p-4 relative overflow-hidden",
          style: { background: "linear-gradient(135deg, #F59E0B, #EF4444)" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/70 text-xs mb-1", children: "KomoCoins" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white font-bold text-2xl", children: coins.toLocaleString() }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-white/60 text-xs mt-1", children: [
              "≈ ₹",
              (coins * 0.1).toFixed(0)
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-3 top-3 opacity-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Coins, { size: 40 }) })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-3 mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: () => setShowWithdrawModal(true),
          className: "bg-white/5 rounded-2xl p-3 flex flex-col items-center gap-1 border border-white/10 hover:bg-white/10 transition-all",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDownLeft, { size: 18, className: "text-green-400" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-300 text-xs font-medium", children: "Withdraw" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: () => setShowAddMoneyModal(true),
          className: "bg-white/5 rounded-2xl p-3 flex flex-col items-center gap-1 border border-white/10 hover:bg-white/10 transition-all",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Smartphone, { size: 18, className: "text-blue-400" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-300 text-xs font-medium", children: "Add via UPI" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: () => setShowPromoModal(true),
          className: "bg-white/5 rounded-2xl p-3 flex flex-col items-center gap-1 border border-white/10 hover:bg-white/10 transition-all",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Gift, { size: 18, className: "text-yellow-400" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-300 text-xs font-medium", children: "Redeem" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: () => setShowAddMoneyModal(true),
        className: "w-full mb-5 rounded-2xl p-4 flex items-center gap-4 border border-blue-500/30 hover:border-blue-400/50 transition-all",
        style: { background: "linear-gradient(135deg, #1E3A8A22, #7C3AED22)" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(QrCode, { size: 24, className: "text-blue-400" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white font-bold text-sm", children: "Add Money via UPI" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-gray-400 text-xs", children: "PhonePe · Google Pay · Paytm · BHIM · Amazon Pay" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-blue-400 text-xs font-semibold", children: "ADD →" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/5 rounded-2xl p-4 mb-5 border border-white/10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { size: 16, className: "text-green-400" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-semibold text-sm", children: "This Month's Earnings" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        [
          { label: "Course Sales", amount: 2100, color: "text-purple-400" },
          { label: "Ad Revenue", amount: 680, color: "text-blue-400" },
          { label: "Honor Rewards", amount: 250, color: "text-yellow-400" },
          { label: "Referral Bonus", amount: 150, color: "text-green-400" },
          {
            label: "Subscription Share",
            amount: 450,
            color: "text-pink-400"
          },
          {
            label: "Premium Subscription",
            amount: 990,
            color: "text-yellow-400"
          },
          {
            label: "Membership Earnings",
            amount: 645,
            color: "text-orange-400"
          },
          { label: "Super Chat Earned", amount: 420, color: "text-red-400" },
          { label: "Merch Commission", amount: 390, color: "text-cyan-400" }
        ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-400 text-sm", children: item.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `font-semibold text-sm ${item.color}`, children: [
            "+₹",
            item.amount
          ] })
        ] }, item.label)),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px bg-white/10 my-1" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-bold text-sm", children: "Total" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-400 font-bold", children: "+₹3,630" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-semibold", children: "Transactions" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1", children: ["all", "credit", "debit"].map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setActiveTab(tab),
            className: `px-3 py-1 rounded-full text-xs font-medium transition-all ${activeTab === tab ? "bg-purple-600 text-white" : "bg-white/10 text-gray-400"}`,
            children: tab === "all" ? "All" : tab === "credit" ? "Income" : "Outgo"
          },
          tab
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: filteredTxns.map((txn) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "bg-white/5 rounded-xl p-3 border border-white/10 flex items-center gap-3",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: `w-10 h-10 rounded-full flex items-center justify-center ${txn.type === "credit" ? "bg-green-500/20" : "bg-red-500/20"}`,
                children: txn.type === "credit" ? /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDownLeft, { size: 16, className: "text-green-400" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { size: 16, className: "text-red-400" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white text-sm font-medium", children: txn.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-gray-500 text-xs", children: [
                txn.desc,
                " · ",
                txn.date
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: `font-bold text-sm ${txn.type === "credit" ? "text-green-400" : "text-red-400"}`,
                  children: [
                    txn.type === "credit" ? "+" : "-",
                    "₹",
                    Math.abs(txn.amount)
                  ]
                }
              ),
              txn.coins > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-yellow-400 text-[10px]", children: [
                "+",
                txn.coins,
                " coins"
              ] })
            ] })
          ]
        },
        txn.id
      )) })
    ] }),
    showAddMoneyModal && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 bg-black/80 z-50 flex items-end justify-center p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-[#1A1F2B] rounded-3xl w-full max-w-md p-6", children: addMoneyStep === "success" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 40, className: "text-green-400" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-green-400 font-bold text-xl mb-1", children: "Payment Successful!" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-white font-bold text-2xl mb-1", children: [
        "₹",
        Number(addMoneyAmount).toLocaleString()
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-gray-400 text-sm", children: "Added to your KomoFast wallet" })
    ] }) : addMoneyStep === "upi" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setAddMoneyStep("amount"),
            className: "text-gray-400 text-sm",
            children: "← Back"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-white font-bold", children: [
          "Pay ₹",
          Number(addMoneyAmount).toLocaleString()
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: closeAddMoney,
            className: "text-gray-400",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 20 })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-gray-400 text-xs mb-3 font-semibold uppercase tracking-wider", children: "Choose UPI App" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2", children: UPI_APPS.map((app) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => setSelectedUpiApp(app.name),
            className: `rounded-xl p-3 flex flex-col items-center gap-1 border transition-all ${selectedUpiApp === app.name ? "border-purple-500 bg-purple-500/20" : "border-white/10 bg-white/5"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: app.icon }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-300 text-[10px] font-medium text-center", children: app.name })
            ]
          },
          app.name
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-gray-400 text-xs mb-2 font-semibold uppercase tracking-wider", children: "Or Enter UPI ID" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            value: upiIdInput,
            onChange: (e) => setUpiIdInput(e.target.value),
            placeholder: "yourname@upi",
            className: "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: () => setShowQr(!showQr),
          className: "w-full mb-4 py-2 rounded-xl border border-white/10 bg-white/5 text-gray-300 text-sm flex items-center justify-center gap-2 hover:bg-white/10 transition-all",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(QrCode, { size: 16 }),
            showQr ? "Hide QR Code" : "Show QR Code"
          ]
        }
      ),
      showQr && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex flex-col items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-36 h-36 bg-white rounded-2xl flex items-center justify-center mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-7 gap-0.5 p-2", children: Array.from({ length: 49 }, (_, i) => i).map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `w-3.5 h-3.5 rounded-sm ${[
              0,
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              13,
              14,
              20,
              21,
              27,
              28,
              34,
              35,
              41,
              42,
              43,
              44,
              45,
              46,
              48,
              10,
              23,
              36,
              15,
              8,
              29
            ].includes(i) ? "bg-gray-900" : "bg-white"}`
          },
          i
        )) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-gray-400 text-xs", children: "Scan with any UPI app" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-gray-500 text-[10px] mt-1", children: "komofast@upi" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: handleUpiPay,
          disabled: !selectedUpiApp && !upiIdInput.trim(),
          className: "w-full py-3 rounded-2xl font-bold text-white disabled:opacity-40 transition-all",
          style: {
            background: "linear-gradient(135deg, #7C3AED, #2563EB)"
          },
          children: [
            "Pay ₹",
            Number(addMoneyAmount).toLocaleString(),
            " via UPI"
          ]
        }
      )
    ] }) : (
      /* STEP 1: Amount */
      /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Smartphone, { size: 16, className: "text-blue-400" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-bold text-lg", children: "Add Money via UPI" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: closeAddMoney,
              className: "text-gray-400",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 20 })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-gray-400 text-xs mb-3 font-semibold uppercase tracking-wider", children: "Quick Add" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2", children: PRESET_AMOUNTS.map((amt) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => setAddMoneyAmount(String(amt)),
              className: `py-2.5 rounded-xl text-sm font-semibold border transition-all ${addMoneyAmount === String(amt) ? "border-purple-500 bg-purple-500/20 text-white" : "border-white/10 bg-white/5 text-gray-300 hover:bg-white/10"}`,
              children: [
                "₹",
                amt.toLocaleString()
              ]
            },
            amt
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "label",
            {
              htmlFor: "add-amount",
              className: "text-gray-400 text-xs mb-2 block font-semibold uppercase tracking-wider",
              children: "Custom Amount"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold", children: "₹" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                id: "add-amount",
                type: "number",
                value: addMoneyAmount,
                onChange: (e) => setAddMoneyAmount(e.target.value),
                placeholder: "Enter amount",
                className: "w-full bg-white/5 border border-white/10 rounded-xl pl-8 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-gray-600 text-xs mt-1", children: "Minimum ₹10" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5 flex items-center gap-3 bg-white/5 rounded-xl p-3 border border-white/10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-gray-500 text-xs", children: "Supported:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: ["📱", "🔵", "💙", "🟠", "🟡"].map((icon) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg", children: icon }, icon)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-gray-500 text-xs ml-auto", children: "All UPI" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: handleAddMoneyProceed,
            disabled: !addMoneyAmount || Number(addMoneyAmount) < 10,
            className: "w-full py-3 rounded-2xl font-bold text-white disabled:opacity-40 transition-all",
            style: {
              background: "linear-gradient(135deg, #7C3AED, #2563EB)"
            },
            children: "Proceed to Pay"
          }
        )
      ] })
    ) }) }),
    showPromoModal && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 bg-black/80 z-50 flex items-end justify-center p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-[#1A1F2B] rounded-3xl w-full max-w-md p-6", children: promoApplied && (promoResult == null ? void 0 : promoResult.status) === "success" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: `w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${promoResult.type === "info" ? "bg-blue-500/20" : "bg-green-500/20"}`,
          children: promoResult.type === "info" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { size: 32, className: "text-blue-400" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 32, className: "text-green-400" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: `font-bold text-lg mb-2 ${promoResult.type === "info" ? "text-blue-400" : "text-green-400"}`,
          children: promoResult.type === "info" ? "Promo Saved!" : "Cashback Added!"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-gray-300 text-sm mb-6", children: promoResult.message }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: handleClosePromo,
          className: "w-full py-3 rounded-2xl font-bold text-white",
          style: {
            background: "linear-gradient(135deg, #7C3AED, #2563EB)"
          },
          children: "Done"
        }
      )
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { size: 16, className: "text-yellow-400" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-bold text-lg", children: "Promo Code" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: handleClosePromo,
            className: "text-gray-400 hover:text-white transition-colors",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 20 })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-sm mb-5", children: "Enter a promo code to get cashback, coins, or discounts." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "label",
          {
            htmlFor: "promo-input",
            className: "text-gray-400 text-xs mb-2 block",
            children: "Promo Code"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            id: "promo-input",
            type: "text",
            value: promoCode,
            onChange: (e) => {
              setPromoCode(e.target.value.toUpperCase());
              setPromoResult(null);
            },
            onKeyDown: (e) => e.key === "Enter" && handleApplyPromo(),
            placeholder: "e.g. KOMO10",
            className: "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 uppercase tracking-widest font-mono"
          }
        )
      ] }),
      (promoResult == null ? void 0 : promoResult.status) === "error" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-xl px-3 py-2 mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 14 }),
        promoResult.message
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: handleApplyPromo,
          disabled: !promoCode.trim(),
          className: "w-full py-3 rounded-2xl font-bold text-white disabled:opacity-40 transition-all",
          style: {
            background: "linear-gradient(135deg, #7C3AED, #2563EB)"
          },
          children: "Apply Code"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 p-3 bg-white/5 rounded-xl border border-white/10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-gray-500 text-xs font-semibold mb-2 uppercase tracking-wider", children: "Try these codes" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: ["KOMO10", "WELCOME50", "COINS100", "ACADEMY"].map(
          (code) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => {
                setPromoCode(code);
                setPromoResult(null);
              },
              className: "px-3 py-1 rounded-lg bg-purple-600/20 border border-purple-600/30 text-purple-300 text-xs font-mono font-semibold hover:bg-purple-600/30 transition-all",
              children: code
            },
            code
          )
        ) })
      ] })
    ] }) }) }),
    showWithdrawModal && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 bg-black/80 z-50 flex items-end justify-center p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-[#1A1F2B] rounded-3xl w-full max-w-md p-6", children: withdrawSuccess ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 32, className: "text-green-400" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white font-bold text-lg mb-1", children: "Withdrawal Requested!" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-gray-400 text-sm", children: [
        "₹",
        withdrawAmount,
        " will be transferred in 1-3 business days"
      ] })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-bold text-lg", children: "Withdraw Money" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setShowWithdrawModal(false),
            className: "text-gray-400",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 20 })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => setWithdrawMethod("upi"),
            className: `flex-1 py-2 rounded-xl flex items-center justify-center gap-2 text-sm font-semibold transition-all ${withdrawMethod === "upi" ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white" : "bg-white/5 text-gray-400"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { size: 16 }),
              " UPI"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => setWithdrawMethod("bank"),
            className: `flex-1 py-2 rounded-xl flex items-center justify-center gap-2 text-sm font-semibold transition-all ${withdrawMethod === "bank" ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white" : "bg-white/5 text-gray-400"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { size: 16 }),
              " Bank"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "label",
            {
              htmlFor: "withdraw-amount",
              className: "text-gray-400 text-xs mb-1 block",
              children: "Amount (Min ₹500)"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              id: "withdraw-amount",
              type: "number",
              value: withdrawAmount,
              onChange: (e) => setWithdrawAmount(e.target.value),
              placeholder: "Enter amount",
              className: "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
            }
          )
        ] }),
        withdrawMethod === "upi" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "label",
            {
              htmlFor: "upi-id",
              className: "text-gray-400 text-xs mb-1 block",
              children: "UPI ID"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              id: "upi-id",
              type: "text",
              value: upiId,
              onChange: (e) => setUpiId(e.target.value),
              placeholder: "yourname@upi",
              className: "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
            }
          )
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              placeholder: "Account Number",
              className: "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              placeholder: "IFSC Code",
              className: "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-gray-500 text-xs mb-4", children: [
        "Available: ₹",
        balance.toLocaleString(),
        " · Processing: 1-3 business days"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: handleWithdraw,
          disabled: !withdrawAmount || Number(withdrawAmount) < 500,
          className: "w-full py-3 rounded-2xl font-bold text-white disabled:opacity-40 transition-all",
          style: {
            background: "linear-gradient(135deg, #7C3AED, #2563EB)"
          },
          children: [
            "Withdraw ₹",
            withdrawAmount || 0
          ]
        }
      )
    ] }) }) })
  ] });
}
export {
  WalletPage as default
};
