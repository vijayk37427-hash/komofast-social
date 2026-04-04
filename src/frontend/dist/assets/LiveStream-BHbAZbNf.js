import { c as createLucideIcon, u as useApp, r as reactExports, j as jsxRuntimeExports, m as motion, I as Input, V as Video, A as AnimatePresence, X, a6 as MicOff, a7 as Mic, S as Share2, b as ue } from "./index-m-9XzHBK.js";
import { A as ArrowLeft } from "./arrow-left-MlK4V-5g.js";
import { U as Users } from "./users-D7GbLS6T.js";
import { S as Send } from "./send-Dd_jYPEU.js";
import { V as VideoOff } from "./video-off-D-z1La2s.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M4.9 19.1C1 15.2 1 8.8 4.9 4.9", key: "1vaf9d" }],
  ["path", { d: "M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5", key: "u1ii0m" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ["path", { d: "M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5", key: "1j5fej" }],
  ["path", { d: "M19.1 4.9C23 8.8 23 15.1 19.1 19", key: "10b0cb" }]
];
const Radio = createLucideIcon("radio", __iconNode);
const CATEGORIES = ["Entertainment", "Gaming", "Music", "Talk", "Cooking"];
const MOCK_COMMENTS = [
  {
    id: "1",
    user: "Ravi Kumar",
    msg: "🔥 Amazing stream!",
    time: 1,
    type: "chat"
  },
  { id: "2", user: "Anjali M", msg: "Super bhai!", time: 2, type: "chat" },
  { id: "3", user: "Deepak S", msg: "Love this! ❤️", time: 3, type: "chat" },
  {
    id: "4",
    user: "Pooja V",
    msg: "Watching from Mumbai!",
    time: 4,
    type: "chat"
  },
  { id: "5", user: "Suresh P", msg: "👏👏👏", time: 5, type: "chat" },
  {
    id: "6",
    user: "Meera R",
    msg: "Best creator on KomoFast!",
    time: 6,
    type: "chat"
  },
  {
    id: "7",
    user: "Kiran T",
    msg: "First time watching 🙌",
    time: 7,
    type: "chat"
  },
  { id: "8", user: "Vikram N", msg: "Pls do a Q&A!", time: 8, type: "chat" }
];
const SUPER_CHAT_TIERS = [
  {
    amount: 10,
    color: "#3b82f6",
    bg: "rgba(59,130,246,0.25)",
    label: "💙 Blue"
  },
  {
    amount: 50,
    color: "#22c55e",
    bg: "rgba(34,197,94,0.25)",
    label: "💚 Green"
  },
  {
    amount: 100,
    color: "#eab308",
    bg: "rgba(234,179,8,0.25)",
    label: "🖤 Yellow"
  },
  {
    amount: 500,
    color: "#f97316",
    bg: "rgba(249,115,22,0.25)",
    label: "🧡 Orange"
  },
  {
    amount: 1e3,
    color: "#ef4444",
    bg: "linear-gradient(135deg,rgba(239,68,68,0.35),rgba(234,179,8,0.35))",
    label: "❤️‍🔥 Red"
  }
];
const REACTIONS = ["❤️", "🔥", "👏", "😍", "🎉"];
function LiveStream() {
  var _a, _b, _c, _d;
  const { navigate } = useApp();
  const [isLive, setIsLive] = reactExports.useState(false);
  const [title, setTitle] = reactExports.useState("");
  const [category, setCategory] = reactExports.useState("Entertainment");
  const [muted, setMuted] = reactExports.useState(false);
  const [camOn, setCamOn] = reactExports.useState(true);
  const [seconds, setSeconds] = reactExports.useState(0);
  const [viewers, setViewers] = reactExports.useState(1200);
  const [comments, setComments] = reactExports.useState(
    MOCK_COMMENTS.slice(0, 3)
  );
  const [floatingReactions, setFloatingReactions] = reactExports.useState([]);
  const [chatInput, setChatInput] = reactExports.useState("");
  const [superChatOpen, setSuperChatOpen] = reactExports.useState(false);
  const [superChatAmount, setSuperChatAmount] = reactExports.useState(50);
  const [superChatMsg, setSuperChatMsg] = reactExports.useState("");
  const [pinnedSuperChat, setPinnedSuperChat] = reactExports.useState(null);
  const [todayEarnings, setTodayEarnings] = reactExports.useState(2450);
  const commentsRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (!isLive) return;
    const t = setInterval(() => setSeconds((s) => s + 1), 1e3);
    return () => clearInterval(t);
  }, [isLive]);
  reactExports.useEffect(() => {
    if (!isLive) return;
    const t = setInterval(() => {
      setViewers((v) => v + Math.floor(Math.random() * 20) - 5);
      const c = MOCK_COMMENTS[Math.floor(Math.random() * MOCK_COMMENTS.length)];
      setComments((prev) => [
        ...prev.slice(-9),
        { ...c, id: Date.now().toString() }
      ]);
    }, 2500);
    return () => clearInterval(t);
  }, [isLive]);
  reactExports.useEffect(() => {
    if (!isLive) return;
    const t = setInterval(() => {
      const emoji = REACTIONS[Math.floor(Math.random() * REACTIONS.length)];
      const id = Date.now().toString();
      const x = 20 + Math.random() * 60;
      setFloatingReactions((prev) => [...prev, { id, emoji, x }]);
      setTimeout(
        () => setFloatingReactions((prev) => prev.filter((r) => r.id !== id)),
        2500
      );
    }, 1500);
    return () => clearInterval(t);
  }, [isLive]);
  reactExports.useEffect(() => {
    if (commentsRef.current)
      commentsRef.current.scrollTop = commentsRef.current.scrollHeight;
  });
  const fmt = (s) => `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
  const sendChat = () => {
    if (!chatInput.trim()) return;
    setComments((prev) => [
      ...prev.slice(-9),
      {
        id: Date.now().toString(),
        user: "You",
        msg: chatInput,
        time: 0,
        type: "chat"
      }
    ]);
    setChatInput("");
  };
  const sendSuperChat = () => {
    if (!superChatMsg.trim()) {
      ue.error("Message डालें");
      return;
    }
    const tier = SUPER_CHAT_TIERS.find((t) => t.amount === superChatAmount) || SUPER_CHAT_TIERS[1];
    const newMsg = {
      id: Date.now().toString(),
      user: "You",
      msg: superChatMsg,
      time: 0,
      type: "superchat",
      amount: superChatAmount,
      color: tier.color,
      bg: tier.bg
    };
    setComments((prev) => [...prev.slice(-9), newMsg]);
    setPinnedSuperChat(newMsg);
    setTodayEarnings((e) => e + superChatAmount);
    setSuperChatOpen(false);
    setSuperChatMsg("");
    ue.success(`Super Chat ₹${superChatAmount} sent! 🎉`);
  };
  if (!isLive) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "min-h-screen flex flex-col px-5 py-6",
        style: { background: "#0B0F14" },
        "data-ocid": "live.page",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              "data-ocid": "live.back_button",
              onClick: () => navigate("/"),
              className: "mb-6 w-9 h-9 rounded-full bg-white/10 flex items-center justify-center self-start",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 18, className: "text-white" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col items-center justify-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { scale: 0.8, opacity: 0 },
                animate: { scale: 1, opacity: 1 },
                className: "w-24 h-24 rounded-full flex items-center justify-center mb-8",
                style: { background: "linear-gradient(135deg,#ef4444,#b91c1c)" },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Radio, { size: 40, className: "text-white" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-white text-2xl font-bold mb-2", children: "Go Live" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/50 text-sm mb-8 text-center", children: "Broadcast live to your followers" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-sm space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  "data-ocid": "live.title_input",
                  placeholder: "Stream title...",
                  value: title,
                  onChange: (e) => setTitle(e.target.value),
                  className: "bg-white/5 border-white/10 text-white placeholder:text-white/30"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/50 text-xs mb-2", children: "Category" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: CATEGORIES.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    "data-ocid": `live.category_${cat.toLowerCase()}.toggle`,
                    onClick: () => setCategory(cat),
                    className: `px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${category === cat ? "text-white border-0" : "bg-white/5 text-white/60 border border-white/10"}`,
                    style: category === cat ? {
                      background: "linear-gradient(135deg,#a855f7,#ec4899)"
                    } : {},
                    children: cat
                  },
                  cat
                )) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/5 rounded-xl p-3 border border-white/10", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/40 text-[10px] mb-1", children: "💡 Super Chat enabled — earn from fans live" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/60 text-xs", children: "₹10 • ₹50 • ₹100 • ₹500 • ₹1000 tiers available" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  "data-ocid": "live.go_live_button",
                  onClick: () => setIsLive(true),
                  className: "w-full py-4 rounded-2xl text-white font-bold text-lg",
                  style: { background: "linear-gradient(135deg,#ef4444,#a855f7)" },
                  children: "🔴 Start Live"
                }
              )
            ] })
          ] })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "fixed inset-0 z-50 flex flex-col",
      style: { background: "#050709" },
      "data-ocid": "live.broadcast.page",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-10 left-0 right-0 px-4 flex items-center justify-between z-20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 rounded-md bg-red-600 text-white text-xs font-bold animate-pulse", children: "● LIVE" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/80 text-xs", children: fmt(seconds) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "flex items-center gap-1 bg-green-600/30 border border-green-500/30 px-3 py-1.5 rounded-full",
                "data-ocid": "live.earnings_ticker",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-green-400 text-xs font-bold", children: [
                  "💰 ₹",
                  todayEarnings.toLocaleString(),
                  " earned"
                ] })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 bg-black/40 px-3 py-1.5 rounded-full", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { size: 13, className: "text-white" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white text-xs font-semibold", children: viewers.toLocaleString() })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0",
            style: {
              background: "linear-gradient(160deg,#1a0533 0%,#070a10 60%,#1a0533 100%)"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Video, { size: 80, className: "text-white/5" }) })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 pointer-events-none z-10 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: floatingReactions.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            className: "absolute bottom-40 text-2xl",
            style: { left: `${r.x}%` },
            initial: { y: 0, opacity: 1, scale: 0.5 },
            animate: { y: -200, opacity: 0, scale: 1.2 },
            exit: { opacity: 0 },
            transition: { duration: 2.5 },
            children: r.emoji
          },
          r.id
        )) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: pinnedSuperChat && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: -20 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -20 },
            className: "absolute top-20 left-4 right-4 z-20 rounded-xl p-3 border flex items-center gap-2",
            style: {
              background: pinnedSuperChat.bg,
              borderColor: `${pinnedSuperChat.color}60`
            },
            "data-ocid": "live.pinned_superchat",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white text-sm", children: "📌" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "span",
                  {
                    className: "text-xs font-bold",
                    style: { color: pinnedSuperChat.color },
                    children: [
                      pinnedSuperChat.user,
                      " • ₹",
                      pinnedSuperChat.amount
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/90 text-xs", children: pinnedSuperChat.msg })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setPinnedSuperChat(null),
                  className: "text-white/40",
                  "data-ocid": "live.pinned_superchat.close_button",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 14 })
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            ref: commentsRef,
            className: "absolute bottom-28 left-3 right-16 max-h-48 overflow-y-auto z-20 space-y-1 pointer-events-none",
            style: { maskImage: "linear-gradient(0deg,white 60%,transparent)" },
            children: comments.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 10 },
                animate: { opacity: 1, y: 0 },
                className: `inline-flex items-center gap-1.5 rounded-full px-3 py-1 backdrop-blur-sm ${c.type === "superchat" ? "border" : ""}`,
                style: {
                  background: c.type === "superchat" ? c.bg : "rgba(0,0,0,0.5)",
                  borderColor: c.type === "superchat" ? `${c.color}60` : void 0
                },
                children: [
                  c.type === "superchat" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "span",
                    {
                      className: "text-[10px] font-bold",
                      style: { color: c.color },
                      children: [
                        "₹",
                        c.amount
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "text-xs font-bold",
                      style: { color: c.type === "superchat" ? c.color : "#a78bfa" },
                      children: c.user
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white text-xs", children: c.msg })
                ]
              },
              c.id
            ))
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-16 left-3 right-3 z-20 flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              "data-ocid": "live.chat_input",
              value: chatInput,
              onChange: (e) => setChatInput(e.target.value),
              onKeyDown: (e) => e.key === "Enter" && sendChat(),
              placeholder: "Say something...",
              className: "flex-1 bg-black/40 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 text-white text-xs placeholder:text-white/30 outline-none"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              "data-ocid": "live.superchat.open_modal_button",
              onClick: () => setSuperChatOpen(true),
              className: "w-9 h-9 rounded-full flex items-center justify-center text-sm",
              style: { background: "linear-gradient(135deg,#eab308,#ef4444)" },
              children: "💰"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              "data-ocid": "live.chat_send_button",
              onClick: sendChat,
              className: "w-9 h-9 rounded-full flex items-center justify-center",
              style: { background: "linear-gradient(135deg,#a855f7,#ec4899)" },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { size: 14, className: "text-white" })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-4 left-0 right-0 flex items-center justify-around px-8 z-20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              "data-ocid": "live.mute_toggle",
              onClick: () => setMuted((v) => !v),
              className: `w-12 h-12 rounded-full flex items-center justify-center ${muted ? "bg-red-600" : "bg-white/15"}`,
              children: muted ? /* @__PURE__ */ jsxRuntimeExports.jsx(MicOff, { size: 20, className: "text-white" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Mic, { size: 20, className: "text-white" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              "data-ocid": "live.camera_toggle",
              onClick: () => setCamOn((v) => !v),
              className: `w-12 h-12 rounded-full flex items-center justify-center ${!camOn ? "bg-red-600" : "bg-white/15"}`,
              children: camOn ? /* @__PURE__ */ jsxRuntimeExports.jsx(Video, { size: 20, className: "text-white" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(VideoOff, { size: 20, className: "text-white" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              "data-ocid": "live.share_button",
              className: "w-12 h-12 rounded-full bg-white/15 flex items-center justify-center",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { size: 20, className: "text-white" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              "data-ocid": "live.end_live_button",
              onClick: () => setIsLive(false),
              className: "px-5 h-12 rounded-full flex items-center gap-2 font-bold text-white text-sm",
              style: { background: "linear-gradient(135deg,#ef4444,#b91c1c)" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Radio, { size: 16 }),
                " End Live"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: superChatOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              className: "fixed inset-0 bg-black/60 z-40",
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              onClick: () => setSuperChatOpen(false)
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              className: "fixed bottom-0 left-0 right-0 z-50 bg-[#12161e] rounded-t-3xl border-t border-white/10 p-5 pb-8",
              initial: { y: "100%" },
              animate: { y: 0 },
              exit: { y: "100%" },
              "data-ocid": "live.superchat.sheet",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-white font-bold", children: "💰 Super Chat अतर स्वामी" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => setSuperChatOpen(false),
                      className: "text-white/40",
                      "data-ocid": "live.superchat.close_button",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 18 })
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 mb-4 flex-wrap", children: SUPER_CHAT_TIERS.map((tier) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    "data-ocid": `live.superchat_tier_${tier.amount}.button`,
                    onClick: () => setSuperChatAmount(tier.amount),
                    className: "px-4 py-2 rounded-xl text-xs font-bold transition-all border",
                    style: {
                      borderColor: superChatAmount === tier.amount ? tier.color : "rgba(255,255,255,0.1)",
                      background: superChatAmount === tier.amount ? tier.bg : "rgba(255,255,255,0.05)",
                      color: superChatAmount === tier.amount ? tier.color : "rgba(255,255,255,0.5)"
                    },
                    children: [
                      tier.label,
                      " ₹",
                      tier.amount
                    ]
                  },
                  tier.amount
                )) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "rounded-xl p-3 border mb-4",
                    style: {
                      background: (_a = SUPER_CHAT_TIERS.find(
                        (t) => t.amount === superChatAmount
                      )) == null ? void 0 : _a.bg,
                      borderColor: `${((_b = SUPER_CHAT_TIERS.find((t) => t.amount === superChatAmount)) == null ? void 0 : _b.color) ?? ""}60`
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "p",
                        {
                          className: "text-xs font-bold mb-0.5",
                          style: {
                            color: (_c = SUPER_CHAT_TIERS.find(
                              (t) => t.amount === superChatAmount
                            )) == null ? void 0 : _c.color
                          },
                          children: [
                            "₹",
                            superChatAmount,
                            " Super Chat"
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/50 text-[10px]", children: "Your message will be pinned at the top" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    "data-ocid": "live.superchat.input",
                    placeholder: "Message डालें...",
                    value: superChatMsg,
                    onChange: (e) => setSuperChatMsg(e.target.value),
                    className: "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/30 outline-none mb-4"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    "data-ocid": "live.superchat.submit_button",
                    onClick: sendSuperChat,
                    className: "w-full py-3 rounded-xl text-white font-bold text-sm flex items-center justify-center gap-2",
                    style: {
                      background: `linear-gradient(135deg,${((_d = SUPER_CHAT_TIERS.find((t) => t.amount === superChatAmount)) == null ? void 0 : _d.color) || "#eab308"},#a855f7)`
                    },
                    children: [
                      "Send Super Chat ₹",
                      superChatAmount
                    ]
                  }
                )
              ]
            }
          )
        ] }) })
      ]
    }
  );
}
export {
  LiveStream as default
};
