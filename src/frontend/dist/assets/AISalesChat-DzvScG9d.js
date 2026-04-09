import { u as useApp, r as reactExports, j as jsxRuntimeExports, m as motion, ab as User, B as Button, Z as Zap, b as ue, A as AnimatePresence } from "./index-BlWpIyR8.js";
import { C as ChevronLeft } from "./chevron-left-C5lkywMo.js";
import { T as TrendingUp } from "./trending-up-DGT7M1As.js";
import { B as Bot } from "./bot-BaU0Thmu.js";
import { S as Send } from "./send-DcEmvjNY.js";
const PRODUCTS = [
  {
    name: "Komofast Premium",
    price: "₹99/mo",
    emoji: "⭐",
    badge: "Most Popular",
    cta: "Upgrade Now"
  },
  {
    name: "Creator Pro Plan",
    price: "₹299/mo",
    emoji: "🚀",
    badge: "Best Value",
    cta: "Start Creating"
  },
  {
    name: "Academy Course Bundle",
    price: "₹1,499",
    emoji: "🎓",
    badge: "Limited Offer",
    cta: "Enroll Now"
  },
  {
    name: "Marketplace Boost",
    price: "₹499/mo",
    emoji: "🛒",
    badge: "New",
    cta: "Boost Listings"
  }
];
const QUICK_PROMPTS = [
  "Best plan konsa hai?",
  "Creator ke liye kya milega?",
  "Academy courses dikhao",
  "Free trial hai kya?",
  "Discount kaise milega?"
];
const now = () => (/* @__PURE__ */ new Date()).toLocaleTimeString("en-IN", {
  hour: "2-digit",
  minute: "2-digit"
});
function getResponse(text) {
  const t = text.toLowerCase();
  if (t.includes("plan") || t.includes("best") || t.includes("konsa"))
    return {
      text: "Aapke liye Komofast Premium best rahega! Ads-free experience, exclusive creator tools, aur priority support milega sirf ₹99/month mein. 🎯 Aaj hi upgrade karein!",
      card: PRODUCTS[0]
    };
  if (t.includes("creator") || t.includes("content"))
    return {
      text: "Creator Pro Plan sirf aapke liye bana hai! Advanced analytics, monetization tools, brand collaboration access, aur unlimited uploads. Hamare 50,000+ active creators ki team join karein! 🚀",
      card: PRODUCTS[1]
    };
  if (t.includes("academy") || t.includes("course") || t.includes("learn"))
    return {
      text: "Komofast Academy mein 200+ courses hain — Digital Marketing, Video Editing, Social Media Growth, aur bahut kuch! Bundle lene par 60% discount milta hai. 🎓",
      card: PRODUCTS[2]
    };
  if (t.includes("free") || t.includes("trial"))
    return {
      text: "Haan! Komofast Premium ka 7-day free trial available hai. Koi credit card nahi chahiye. Abhi start karein aur khud decide karein! 😊 Trial ke baad ₹99/month lagega."
    };
  if (t.includes("discount") || t.includes("offer") || t.includes("coupon"))
    return {
      text: "Special offer! Promo code use karein: 🎁 KOMO10 → 10% off | WELCOME50 → First month ₹50 mein | ACADEMY → Academy courses par 20% off. Wallet ya checkout mein apply karein!"
    };
  if (t.includes("marketplace") || t.includes("sell") || t.includes("product"))
    return {
      text: "Marketplace Boost lene par aapke products top mein dikhenge, zyada views milenge, aur sales 3x tak badhti hai! Digital Market + Physical Marketplace dono mein kaam karta hai. 🛒",
      card: PRODUCTS[3]
    };
  return {
    text: "Main aapki help ke liye ready hoon! Komofast ke plans, courses, ya marketplace ke baare mein koi bhi sawaal poochein. Hum aapke liye best deal dhundh kar denge! 💪 Neeche quick options bhi dekh sakte hain."
  };
}
function AISalesChat() {
  const { navigate } = useApp();
  const [messages, setMessages] = reactExports.useState([
    {
      id: 0,
      role: "bot",
      text: "Namaste! 🎯 Main Komofast Sales Assistant hoon. Aapki growth ke liye best products recommend karunga. Bataaiye, aap creator hain ya business owner?",
      time: now()
    }
  ]);
  const [input, setInput] = reactExports.useState("");
  const [isTyping, setIsTyping] = reactExports.useState(false);
  const [leadCaptured, setLeadCaptured] = reactExports.useState(false);
  const [leadName, setLeadName] = reactExports.useState("");
  const [leadPhone, setLeadPhone] = reactExports.useState("");
  const [showLeadForm, setShowLeadForm] = reactExports.useState(false);
  const chatRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    var _a, _b;
    (_b = chatRef.current) == null ? void 0 : _b.scrollTo({
      top: ((_a = chatRef.current) == null ? void 0 : _a.scrollHeight) ?? 0,
      behavior: "smooth"
    });
  }, [messages, isTyping]);
  reactExports.useEffect(() => {
    if (messages.filter((m) => m.role === "user").length === 2 && !leadCaptured) {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now() + 2,
            role: "bot",
            text: "Bahut accha! Main aapke liye ek personalized offer bana raha hoon. Kya aap apna naam aur phone number share karenge? Hum exclusive discount WhatsApp par bhejenge! 🎁",
            time: now()
          }
        ]);
        setShowLeadForm(true);
      }, 1500);
    }
  }, [messages, leadCaptured]);
  const sendMessage = (text) => {
    if (!text.trim()) return;
    setMessages((prev) => [
      ...prev,
      { id: Date.now(), role: "user", text: text.trim(), time: now() }
    ]);
    setInput("");
    setIsTyping(true);
    setTimeout(() => {
      const { text: reply, card } = getResponse(text);
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, role: "bot", text: reply, time: now(), card }
      ]);
      setIsTyping(false);
    }, 1e3);
  };
  const submitLead = () => {
    if (!leadName.trim() || !leadPhone.trim()) return;
    setLeadCaptured(true);
    setShowLeadForm(false);
    ue.success("Lead captured! Exclusive offer bheja jayega.");
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now() + 3,
        role: "bot",
        text: `Shukriya ${leadName}! 🎉 Aapke liye special 20% discount WhatsApp par ${leadPhone} par bheja gaya hai. Promo code: KOMO20SPECIAL. Abhi redeem karein!`,
        time: now()
      }
    ]);
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
              style: { background: "linear-gradient(135deg, #f59e0b, #ef4444)" },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { size: 20, className: "text-white" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[15px] font-bold text-white", children: "AI Sales Chat" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-green-500" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-green-400", children: "Sales Assistant Online" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "px-2 py-1 rounded-full text-[10px] font-bold",
              style: {
                background: "rgba(245,158,11,0.2)",
                color: "#f59e0b",
                border: "1px solid rgba(245,158,11,0.4)"
              },
              children: "🔥 HOT OFFERS"
            }
          )
        ] }),
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
                    className: "w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center",
                    style: {
                      background: msg.role === "bot" ? "linear-gradient(135deg, #f59e0b, #ef4444)" : "rgba(255,255,255,0.1)"
                    },
                    children: msg.role === "bot" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { size: 16, className: "text-white" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(User, { size: 16, className: "text-white" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: `max-w-[78%] flex flex-col gap-1 ${msg.role === "user" ? "items-end" : "items-start"}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "rounded-2xl px-4 py-2.5",
                          style: {
                            background: msg.role === "bot" ? "rgba(245,158,11,0.1)" : "rgba(168,85,247,0.18)",
                            border: msg.role === "bot" ? "1px solid rgba(245,158,11,0.2)" : "1px solid rgba(168,85,247,0.3)"
                          },
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-white/85 leading-relaxed", children: msg.text })
                        }
                      ),
                      msg.card && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        motion.div,
                        {
                          initial: { scale: 0.95, opacity: 0 },
                          animate: { scale: 1, opacity: 1 },
                          className: "rounded-2xl p-4 w-full",
                          style: {
                            background: "linear-gradient(135deg, rgba(245,158,11,0.1), rgba(239,68,68,0.1))",
                            border: "1px solid rgba(245,158,11,0.3)"
                          },
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[24px]", children: msg.card.emoji }),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[14px] font-bold text-white", children: msg.card.name }),
                                msg.card.badge && /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "span",
                                  {
                                    className: "text-[10px] font-bold px-2 py-0.5 rounded-full",
                                    style: {
                                      background: "rgba(245,158,11,0.3)",
                                      color: "#f59e0b"
                                    },
                                    children: msg.card.badge
                                  }
                                )
                              ] }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "ml-auto text-[16px] font-bold text-yellow-400", children: msg.card.price })
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs(
                              Button,
                              {
                                size: "sm",
                                className: "w-full text-[12px] border-0 text-white",
                                style: {
                                  background: "linear-gradient(135deg, #f59e0b, #ef4444)"
                                },
                                onClick: () => ue.success(`${msg.card.name} — processing...`),
                                children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { size: 12, className: "mr-1" }),
                                  " ",
                                  msg.card.cta
                                ]
                              }
                            )
                          ]
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
                  background: "linear-gradient(135deg, #f59e0b, #ef4444)"
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { size: 16, className: "text-white" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "rounded-2xl px-4 py-3",
                style: {
                  background: "rgba(245,158,11,0.1)",
                  border: "1px solid rgba(245,158,11,0.2)"
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1", children: [0, 1, 2].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    className: "w-2 h-2 rounded-full bg-yellow-400",
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
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: showLeadForm && !leadCaptured && /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: 20 },
            className: "px-4 py-2",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "rounded-xl p-4",
                style: {
                  background: "rgba(245,158,11,0.1)",
                  border: "1px solid rgba(245,158,11,0.3)"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] font-semibold text-yellow-400 mb-3", children: "🎁 Exclusive Offer Paayen" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mb-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        type: "text",
                        placeholder: "Aapka naam",
                        value: leadName,
                        onChange: (e) => setLeadName(e.target.value),
                        className: "flex-1 bg-black/30 border border-white/10 rounded-lg px-3 py-2 text-[12px] text-white placeholder-white/30 outline-none"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        type: "tel",
                        placeholder: "Phone number",
                        value: leadPhone,
                        onChange: (e) => setLeadPhone(e.target.value),
                        className: "flex-1 bg-black/30 border border-white/10 rounded-lg px-3 py-2 text-[12px] text-white placeholder-white/30 outline-none"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      size: "sm",
                      onClick: submitLead,
                      className: "w-full text-[12px] border-0 text-white",
                      style: {
                        background: "linear-gradient(135deg, #f59e0b, #ef4444)"
                      },
                      children: "🎁 20% Discount Paayein"
                    }
                  )
                ]
              }
            )
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 overflow-x-auto pb-1", children: QUICK_PROMPTS.map((q) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => sendMessage(q),
            className: "flex-shrink-0 px-3 py-1.5 rounded-full text-[11px] font-medium",
            style: {
              background: "rgba(245,158,11,0.12)",
              border: "1px solid rgba(245,158,11,0.3)",
              color: "#f59e0b",
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
                  placeholder: "Apna sawaal ya interest bataaiye...",
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
                    background: input.trim() ? "linear-gradient(135deg, #f59e0b, #ef4444)" : "rgba(255,255,255,0.05)"
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
  AISalesChat as default
};
