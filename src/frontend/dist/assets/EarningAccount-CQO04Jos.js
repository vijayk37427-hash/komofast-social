import { u as useApp, j as jsxRuntimeExports, m as motion, B as Button, b as ue, P as Plus } from "./index-BlWpIyR8.js";
import { B as Badge } from "./badge-BChbocV7.js";
import { A as ArrowLeft } from "./arrow-left-C_jsN0fF.js";
import { W as Wallet, C as CreditCard } from "./wallet-BdlaG0ju.js";
import { T as TrendingUp } from "./trending-up-DGT7M1As.js";
import { B as BadgeCheck, D as DollarSign } from "./dollar-sign-BVwY6w5g.js";
import { B as Building2 } from "./building-2-xPM6GFYz.js";
import { T as Trophy } from "./trophy-CUcLP930.js";
import { F as FileText } from "./file-text--vkZEpl3.js";
import { U as Users } from "./users-Xo-nsB-b.js";
const INCOME_SOURCES = [
  {
    icon: "📹",
    label: "Ad Revenue",
    amount: 3240,
    change: "+12%",
    positive: true
  },
  {
    icon: "🎓",
    label: "Course Sales",
    amount: 5600,
    change: "+8%",
    positive: true
  },
  {
    icon: "👥",
    label: "Referrals",
    amount: 1800,
    change: "+25%",
    positive: true
  },
  {
    icon: "⭐",
    label: "Subscriptions",
    amount: 1450,
    change: "+5%",
    positive: true
  },
  {
    icon: "🏆",
    label: "Honor Rewards",
    amount: 450,
    change: "redeemed",
    positive: false
  },
  {
    icon: "🛒",
    label: "Marketplace",
    amount: 307.5,
    change: "+3%",
    positive: true
  }
];
const MONTHLY_DATA = [
  { month: "Oct", amount: 8200, label: "₹8.2K" },
  { month: "Nov", amount: 9100, label: "₹9.1K" },
  { month: "Dec", amount: 11400, label: "₹11.4K" },
  { month: "Jan", amount: 10800, label: "₹10.8K" },
  { month: "Feb", amount: 13200, label: "₹13.2K" },
  { month: "Mar", amount: 12800, label: "₹12.8K" }
];
const PENDING_PAYOUTS = [
  {
    id: 1,
    amount: 3240,
    date: "Mar 20, 2026",
    method: "UPI – komofast@upi",
    status: "Processing"
  },
  {
    id: 2,
    amount: 1800,
    date: "Mar 15, 2026",
    method: "SBI ****4521",
    status: "Pending"
  },
  {
    id: 3,
    amount: 850,
    date: "Mar 10, 2026",
    method: "UPI – komofast@upi",
    status: "Pending"
  }
];
const maxMonthly = Math.max(...MONTHLY_DATA.map((d) => d.amount));
function EarningAccount() {
  const { navigate } = useApp();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto px-4 py-4 pb-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: -16 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.35 },
        className: "flex items-center gap-3 mb-6",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              "data-ocid": "earning_account.back.button",
              onClick: () => navigate("/profile"),
              className: "w-9 h-9 rounded-full flex items-center justify-center text-komo-text-secondary hover:text-foreground transition-colors",
              style: { background: "rgba(255,255,255,0.06)" },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 18 })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-[20px] font-bold text-foreground", children: "Earning Account" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-komo-text-muted", children: "Your complete income overview" })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.97 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.4, delay: 0.05 },
        className: "rounded-2xl p-5 mb-5 relative overflow-hidden",
        style: {
          background: "linear-gradient(135deg, rgba(47,168,255,0.22) 0%, rgba(168,85,247,0.28) 100%)",
          border: "1px solid rgba(168,85,247,0.35)",
          boxShadow: "0 8px 32px rgba(168,85,247,0.2), 0 2px 8px rgba(47,168,255,0.15)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-20",
              style: {
                background: "radial-gradient(circle, #a855f7, transparent)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute -bottom-6 -left-6 w-24 h-24 rounded-full opacity-15",
              style: {
                background: "radial-gradient(circle, #2fa8ff, transparent)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 mb-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-10 h-10 rounded-full flex items-center justify-center",
                style: { background: "linear-gradient(135deg, #2fa8ff, #a855f7)" },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Wallet, { size: 18, className: "text-white" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-white/60 uppercase tracking-widest", children: "Total Balance" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[32px] font-bold text-white leading-tight", children: [
                "₹12,847",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[20px]", children: ".50" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 mb-4 ml-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[15px] text-yellow-300 font-semibold", children: "🪙 6,230 KomoCoin" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                "data-ocid": "earning_account.withdraw.primary_button",
                className: "komo-gradient border-0 text-white flex-1 h-9 text-[13px] font-semibold",
                onClick: () => ue.success("Withdrawal request submitted!"),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { size: 14, className: "mr-1.5" }),
                  "Withdraw"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                "data-ocid": "earning_account.add_bank.secondary_button",
                variant: "outline",
                className: "flex-1 h-9 text-[13px] font-semibold border-white/30 text-white hover:bg-white/10",
                onClick: () => ue.info("Bank account feature coming soon!"),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 14, className: "mr-1.5" }),
                  "Add Bank Account"
                ]
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.35, delay: 0.1 },
        className: "komo-surface rounded-2xl p-4 mb-5",
        style: { border: "1px solid rgba(255,255,255,0.08)" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[13px] font-semibold text-foreground flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { size: 14, className: "text-komo-blue" }),
              "Linked Accounts"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                "data-ocid": "earning_account.add_account.button",
                className: "flex items-center gap-1 text-[11px] text-komo-blue hover:text-komo-purple transition-colors",
                onClick: () => ue.info("Add account coming soon!"),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 12 }),
                  " Add New Account"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex items-center gap-3 p-3 rounded-xl",
                style: { background: "rgba(255,255,255,0.04)" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "w-9 h-9 rounded-full flex items-center justify-center text-[16px] flex-shrink-0",
                      style: { background: "rgba(47,168,255,0.15)" },
                      children: "📱"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-semibold text-foreground", children: "komofast@upi" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-komo-text-muted", children: "UPI ID" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Badge,
                    {
                      className: "text-[10px] font-bold",
                      style: {
                        background: "rgba(34,197,94,0.15)",
                        color: "#4ade80",
                        border: "1px solid rgba(34,197,94,0.3)"
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(BadgeCheck, { size: 10, className: "mr-1" }),
                        " Verified"
                      ]
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex items-center gap-3 p-3 rounded-xl",
                style: { background: "rgba(255,255,255,0.04)" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0",
                      style: { background: "rgba(168,85,247,0.15)" },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { size: 16, className: "text-komo-purple" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-semibold text-foreground", children: "SBI ****4521" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-komo-text-muted", children: "Bank Account" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Badge,
                    {
                      className: "text-[10px] font-bold",
                      style: {
                        background: "rgba(34,197,94,0.15)",
                        color: "#4ade80",
                        border: "1px solid rgba(34,197,94,0.3)"
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(BadgeCheck, { size: 10, className: "mr-1" }),
                        " Verified"
                      ]
                    }
                  )
                ]
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.35, delay: 0.15 },
        className: "mb-5",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[13px] font-semibold text-komo-text-secondary mb-3 flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { size: 14, className: "text-komo-blue" }),
            " Income Sources"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3", children: INCOME_SOURCES.map((src, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 12 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.3, delay: 0.18 + i * 0.05 },
              "data-ocid": `earning_account.income.item.${i + 1}`,
              className: "rounded-2xl p-4",
              style: {
                background: "linear-gradient(135deg, rgba(47,168,255,0.07), rgba(168,85,247,0.1))",
                border: "1px solid rgba(255,255,255,0.08)"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[22px]", children: src.icon }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: `text-[10px] font-bold px-2 py-0.5 rounded-full ${src.positive ? "bg-green-500/15 text-green-400 border border-green-500/25" : "bg-blue-500/15 text-blue-300 border border-blue-500/25"}`,
                      children: src.change
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[18px] font-bold komo-gradient-text leading-tight", children: [
                  "₹",
                  src.amount.toLocaleString()
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-komo-text-muted mt-0.5", children: src.label })
              ]
            },
            src.label
          )) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.35, delay: 0.3 },
        className: "komo-surface rounded-2xl p-4 mb-5",
        style: { border: "1px solid rgba(255,255,255,0.08)" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[13px] font-semibold text-foreground mb-4 flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { size: 14, className: "text-komo-purple" }),
            " Monthly Earnings"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: MONTHLY_DATA.map((d, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-komo-text-muted w-7 flex-shrink-0", children: d.month }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-6 rounded-full overflow-hidden bg-white/5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { width: 0 },
                animate: { width: `${d.amount / maxMonthly * 100}%` },
                transition: {
                  duration: 0.7,
                  delay: 0.35 + i * 0.07,
                  ease: "easeOut"
                },
                className: "h-full rounded-full",
                style: {
                  background: "linear-gradient(90deg, #2fa8ff, #a855f7)"
                }
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-semibold komo-gradient-text w-12 text-right flex-shrink-0", children: d.label })
          ] }, d.month)) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.35, delay: 0.35 },
        className: "komo-surface rounded-2xl p-4 mb-5",
        style: { border: "1px solid rgba(255,255,255,0.08)" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[13px] font-semibold text-foreground mb-3 flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { size: 14, className: "text-yellow-400" }),
            " Pending Payouts"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: PENDING_PAYOUTS.map((payout, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              "data-ocid": `earning_account.payout.item.${i + 1}`,
              className: "flex items-center gap-3 p-3 rounded-xl",
              style: { background: "rgba(255,255,255,0.04)" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0",
                    style: {
                      background: payout.status === "Processing" ? "rgba(47,168,255,0.15)" : "rgba(168,85,247,0.15)"
                    },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      DollarSign,
                      {
                        size: 15,
                        className: payout.status === "Processing" ? "text-komo-blue" : "text-komo-purple"
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[13px] font-semibold text-foreground", children: [
                    "₹",
                    payout.amount.toLocaleString()
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-komo-text-muted truncate", children: [
                    payout.method,
                    " · ",
                    payout.date
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Badge,
                  {
                    className: "text-[10px] font-bold flex-shrink-0",
                    style: {
                      background: payout.status === "Processing" ? "rgba(47,168,255,0.15)" : "rgba(168,85,247,0.15)",
                      color: payout.status === "Processing" ? "#2fa8ff" : "#c084fc",
                      border: payout.status === "Processing" ? "1px solid rgba(47,168,255,0.3)" : "1px solid rgba(168,85,247,0.3)"
                    },
                    children: payout.status
                  }
                )
              ]
            },
            payout.id
          )) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.35, delay: 0.4 },
        className: "rounded-2xl p-4",
        style: {
          background: "linear-gradient(135deg, rgba(47,168,255,0.08), rgba(168,85,247,0.12))",
          border: "1px solid rgba(168,85,247,0.25)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[13px] font-semibold text-foreground mb-3 flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { size: 14, className: "text-komo-blue" }),
            " Tax & Summary"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-komo-text-muted", children: "Gross Earnings" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-semibold text-foreground", children: "₹12,847.50" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-komo-text-muted", children: "TDS Deducted (10%)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-semibold text-red-400", children: "−₹1,284" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "h-px w-full my-1",
                style: { background: "rgba(255,255,255,0.08)" }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-bold text-foreground", children: "Net Payable" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[16px] font-bold komo-gradient-text", children: "₹11,563" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center pt-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-komo-text-muted flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { size: 11 }),
                " PAN Card"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-green-400 font-semibold flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(BadgeCheck, { size: 11 }),
                " ABCDE1234F – Linked"
              ] })
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-komo-text-muted", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      ". Built with ❤️ using",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`,
          target: "_blank",
          rel: "noreferrer",
          className: "text-komo-blue hover:underline",
          children: "caffeine.ai"
        }
      )
    ] }) })
  ] });
}
export {
  EarningAccount as default
};
