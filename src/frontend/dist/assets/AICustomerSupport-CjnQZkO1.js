import { c as createLucideIcon, u as useApp, r as reactExports, j as jsxRuntimeExports, A as AnimatePresence, m as motion, B as Button, ab as User, b as ue } from "./index-BlWpIyR8.js";
import { C as ChevronLeft } from "./chevron-left-C5lkywMo.js";
import { H as Headphones } from "./headphones-CfR380hk.js";
import { B as Bot } from "./bot-BaU0Thmu.js";
import { S as Send } from "./send-DcEmvjNY.js";
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
      d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",
      key: "qn84l0"
    }
  ],
  ["path", { d: "M13 5v2", key: "dyzc3o" }],
  ["path", { d: "M13 17v2", key: "1ont0d" }],
  ["path", { d: "M13 11v2", key: "1wjjxi" }]
];
const Ticket = createLucideIcon("ticket", __iconNode);
const FAQ_QUICK_REPLIES = [
  "Wallet se paise kaise nikaalein?",
  "Password reset karna hai",
  "Reels upload nahi ho raha",
  "KomoCoin kaise kamayen?",
  "Premium plan kya hai?",
  "Account delete karna hai"
];
const AI_RESPONSES = {
  wallet: "Wallet page par jaayein → Withdraw button dabaayen → UPI ID ya Bank Account add karein → Amount enter karein → Submit. 24-48 ghante mein transfer ho jaayega! 💰",
  password: "Settings → Account → Change Password par jaayein. Purana password daalo, naya password set karo. Agar bhool gaye hain toh Login page par 'Forgot Password' use karein.",
  reels: "Reels upload problem ke liye: 1) Internet connection check karein 2) Video size 100MB se kam rakhein 3) Format MP4 hona chahiye 4) App restart karein. Phir bhi problem ho toh Help Center mein ticket submit karein.",
  komocoin: "KomoCoin earn karne ke tarike: ✅ Daily login (+10) ✅ 5 Reels dekhna (+25) ✅ Posts like karna (+1 each) ✅ Friend refer karna (+200) ✅ Purchase karna (+150). Wallet mein jaake redeem karein!",
  premium: "Komofast Premium mein milega: ✨ Ad-free experience ✨ Exclusive Creator tools ✨ Priority support ✨ Special badge. Plans: ₹99/month ya ₹999/year. /premium par jaayein!",
  delete: "Account delete karne ke liye: Settings → Danger Zone → Delete Account par jaayein. Dhyan rakhein — yeh action irreversible hai aur saara data remove ho jaayega. Pehle Data Export zaroor karein!",
  default: "Samajh gaya! Main aapki help karne ki koshish karta hoon. Kya aap thoda aur detail de sakte hain? Ya neeche diye FAQ se apna sawaal dhundh sakte hain. 😊"
};
function getAIResponse(text) {
  const t = text.toLowerCase();
  if (t.includes("wallet") || t.includes("withdraw") || t.includes("paise"))
    return AI_RESPONSES.wallet;
  if (t.includes("password") || t.includes("reset"))
    return AI_RESPONSES.password;
  if (t.includes("reel") || t.includes("upload") || t.includes("video"))
    return AI_RESPONSES.reels;
  if (t.includes("komocoin") || t.includes("coin") || t.includes("earn"))
    return AI_RESPONSES.komocoin;
  if (t.includes("premium") || t.includes("plan") || t.includes("subscription"))
    return AI_RESPONSES.premium;
  if (t.includes("delete") || t.includes("account")) return AI_RESPONSES.delete;
  return AI_RESPONSES.default;
}
const now = () => (/* @__PURE__ */ new Date()).toLocaleTimeString("en-IN", {
  hour: "2-digit",
  minute: "2-digit"
});
function AICustomerSupport() {
  const { navigate } = useApp();
  const [messages, setMessages] = reactExports.useState([
    {
      id: 0,
      role: "bot",
      text: "Namaste! 🙏 Main Komofast AI Support Agent hoon. Aaj main aapki kaise help kar sakta hoon? Neeche FAQ se apna sawaal choose karein ya khud type karein.",
      time: now()
    }
  ]);
  const [input, setInput] = reactExports.useState("");
  const [isTyping, setIsTyping] = reactExports.useState(false);
  const [showTicket, setShowTicket] = reactExports.useState(false);
  const [ticketSubmitted, setTicketSubmitted] = reactExports.useState(false);
  const [ticketText, setTicketText] = reactExports.useState("");
  const chatRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    var _a, _b;
    (_b = chatRef.current) == null ? void 0 : _b.scrollTo({
      top: ((_a = chatRef.current) == null ? void 0 : _a.scrollHeight) ?? 0,
      behavior: "smooth"
    });
  }, [messages, isTyping]);
  const sendMessage = (text) => {
    if (!text.trim()) return;
    const userMsg = {
      id: Date.now(),
      role: "user",
      text: text.trim(),
      time: now()
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);
    setTimeout(() => {
      const reply = getAIResponse(text);
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, role: "bot", text: reply, time: now() }
      ]);
      setIsTyping(false);
    }, 1200);
  };
  const submitTicket = () => {
    if (!ticketText.trim()) return;
    setTicketSubmitted(true);
    ue.success(
      "Support ticket submit ho gaya! 24 ghante mein reply milega."
    );
    setTimeout(() => {
      setShowTicket(false);
      setTicketSubmitted(false);
      setTicketText("");
    }, 2e3);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "max-w-lg mx-auto flex flex-col",
      style: { height: "calc(100vh - 120px)" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 pt-4 pb-3 flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => navigate("/"),
              className: "w-9 h-9 rounded-full bg-white/10 flex items-center justify-center",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { size: 18, className: "text-white" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "w-10 h-10 rounded-full flex items-center justify-center",
              style: { background: "linear-gradient(135deg, #2fa8ff, #a855f7)" },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Headphones, { size: 20, className: "text-white" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[15px] font-bold text-white", children: "AI Support Chat" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-green-500" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-green-400", children: "Online • AI Powered" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => setShowTicket((s) => !s),
              className: "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold",
              style: {
                background: "rgba(168,85,247,0.2)",
                border: "1px solid rgba(168,85,247,0.4)",
                color: "#a855f7"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Ticket, { size: 12 }),
                " Ticket"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: showTicket && /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { height: 0, opacity: 0 },
            animate: { height: "auto", opacity: 1 },
            exit: { height: 0, opacity: 0 },
            className: "px-4 overflow-hidden",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "rounded-xl p-4 mb-3",
                style: {
                  background: "rgba(168,85,247,0.1)",
                  border: "1px solid rgba(168,85,247,0.3)"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-semibold text-white/80 mb-2", children: "Human Support Ticket" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "textarea",
                    {
                      className: "w-full bg-black/30 border border-white/10 rounded-lg p-3 text-[13px] text-white placeholder-white/30 resize-none outline-none focus:border-purple-500/50",
                      rows: 3,
                      placeholder: "Apni problem detail mein likhein...",
                      value: ticketText,
                      onChange: (e) => setTicketText(e.target.value)
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      size: "sm",
                      disabled: ticketSubmitted,
                      onClick: submitTicket,
                      className: "mt-2 w-full komo-gradient border-0 text-white text-[12px]",
                      children: ticketSubmitted ? "✅ Submitted!" : "Submit Ticket"
                    }
                  )
                ]
              }
            )
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: chatRef, className: "flex-1 overflow-y-auto px-4 py-2 space-y-3", children: [
          messages.map((msg) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 10 },
              animate: { opacity: 1, y: 0 },
              className: `flex gap-2 ${msg.role === "user" ? "flex-row-reverse" : ""}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-[16px]",
                    style: {
                      background: msg.role === "bot" ? "linear-gradient(135deg, #2fa8ff, #a855f7)" : "rgba(255,255,255,0.1)"
                    },
                    children: msg.role === "bot" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { size: 16, className: "text-white" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(User, { size: 16, className: "text-white" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: `max-w-[78%] ${msg.role === "user" ? "items-end" : "items-start"} flex flex-col gap-1`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "rounded-2xl px-4 py-2.5",
                          style: {
                            background: msg.role === "bot" ? "rgba(47,168,255,0.12)" : "rgba(168,85,247,0.18)",
                            border: msg.role === "bot" ? "1px solid rgba(47,168,255,0.2)" : "1px solid rgba(168,85,247,0.3)"
                          },
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-white/85 leading-relaxed", children: msg.text })
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-white/30 px-1", children: msg.time })
                    ]
                  }
                )
              ]
            },
            msg.id
          )),
          isTyping && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-8 h-8 rounded-full flex items-center justify-center",
                style: {
                  background: "linear-gradient(135deg, #2fa8ff, #a855f7)"
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { size: 16, className: "text-white" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "rounded-2xl px-4 py-3",
                style: {
                  background: "rgba(47,168,255,0.1)",
                  border: "1px solid rgba(47,168,255,0.2)"
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1", children: [0, 1, 2].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    className: "w-2 h-2 rounded-full bg-blue-400",
                    animate: { y: [0, -5, 0] },
                    transition: {
                      duration: 0.6,
                      delay: i * 0.15,
                      repeat: Number.POSITIVE_INFINITY
                    }
                  },
                  i
                )) })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 overflow-x-auto pb-1 scrollbar-hide", children: FAQ_QUICK_REPLIES.map((q) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => sendMessage(q),
            className: "flex-shrink-0 px-3 py-1.5 rounded-full text-[11px] font-medium transition-colors",
            style: {
              background: "rgba(47,168,255,0.12)",
              border: "1px solid rgba(47,168,255,0.25)",
              color: "#2fa8ff",
              whiteSpace: "nowrap"
            },
            children: q
          },
          q
        )) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 pb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex gap-2 items-center rounded-2xl px-3 py-2",
            style: {
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  value: input,
                  onChange: (e) => setInput(e.target.value),
                  onKeyDown: (e) => e.key === "Enter" && sendMessage(input),
                  placeholder: "Apna sawaal type karein...",
                  className: "flex-1 bg-transparent text-[13px] text-white placeholder-white/30 outline-none"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => sendMessage(input),
                  disabled: !input.trim(),
                  className: "w-9 h-9 rounded-full flex items-center justify-center transition-all",
                  style: {
                    background: input.trim() ? "linear-gradient(135deg, #2fa8ff, #a855f7)" : "rgba(255,255,255,0.05)"
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Send,
                    {
                      size: 16,
                      className: input.trim() ? "text-white" : "text-white/30"
                    }
                  )
                }
              )
            ]
          }
        ) })
      ]
    }
  );
}
export {
  AICustomerSupport as default
};
