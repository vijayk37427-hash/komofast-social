import { c as createLucideIcon, u as useApp, r as reactExports, j as jsxRuntimeExports, m as motion, a6 as MicOff, a7 as Mic, a8 as Volume2, b as ue } from "./index-BlWpIyR8.js";
import { C as ChevronLeft } from "./chevron-left-C5lkywMo.js";
import { P as PhoneOff } from "./phone-off-CGvPwnUs.js";
import { V as VolumeX } from "./volume-x-DFdpFw0q.js";
import { P as Phone } from "./phone-Boo-rxzQ.js";
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
      d: "m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",
      key: "ul74o6"
    }
  ],
  ["path", { d: "m14 7 3 3", key: "1r5n42" }],
  ["path", { d: "M5 6v4", key: "ilb8ba" }],
  ["path", { d: "M19 14v4", key: "blhpug" }],
  ["path", { d: "M10 2v2", key: "7u0qdc" }],
  ["path", { d: "M7 8H3", key: "zfb6yr" }],
  ["path", { d: "M21 16h-4", key: "1cnmox" }],
  ["path", { d: "M11 3H9", key: "1obp7u" }]
];
const WandSparkles = createLucideIcon("wand-sparkles", __iconNode);
const VOICE_BOT_PROMPTS = [
  {
    id: "customer",
    label: "Customer Support",
    emoji: "🎧",
    desc: "Support agent for Komofast users"
  },
  {
    id: "sales",
    label: "Sales Assistant",
    emoji: "💼",
    desc: "Product promotion & lead capture"
  },
  {
    id: "general",
    label: "General AI",
    emoji: "🤖",
    desc: "General purpose voice assistant"
  },
  {
    id: "hindi",
    label: "Hindi Bot",
    emoji: "🇮🇳",
    desc: "Hindi mein baat karein"
  }
];
const SAMPLE_TRANSCRIPTS = [
  {
    role: "bot",
    text: "Namaste! Main Komofast AI Voice Assistant hoon. Aap kaise help kar sakta hoon?"
  },
  { role: "user", text: "Mujhe wallet se paise withdraw karne hain." },
  {
    role: "bot",
    text: "Zaroor! Wallet page par jaaiye, Withdraw button dabaaiye, UPI ID ya Bank Account add karein aur amount enter karein. Kya koi aur help chahiye?"
  },
  { role: "user", text: "KomoCoin kya hota hai?" },
  {
    role: "bot",
    text: "KomoCoin Komofast ka digital reward token hai. Posts like karne, Reels dekhne, aur referrals se earn hota hai. Wallet mein redeem kar sakte hain."
  }
];
function AIVoiceBot() {
  const { navigate } = useApp();
  const [callState, setCallState] = reactExports.useState("idle");
  const [muted, setMuted] = reactExports.useState(false);
  const [speakerOff, setSpeakerOff] = reactExports.useState(false);
  const [selectedPrompt, setSelectedPrompt] = reactExports.useState("customer");
  const [transcript, setTranscript] = reactExports.useState([]);
  const [callDuration, setCallDuration] = reactExports.useState(0);
  const [waveActive, setWaveActive] = reactExports.useState(false);
  const transcriptRef = reactExports.useRef(null);
  const timerRef = reactExports.useRef(null);
  const transcriptIndexRef = reactExports.useRef(0);
  reactExports.useEffect(() => {
    if (callState === "connected") {
      timerRef.current = setInterval(() => setCallDuration((d) => d + 1), 1e3);
      const addMessage = () => {
        if (transcriptIndexRef.current < SAMPLE_TRANSCRIPTS.length) {
          setTranscript((prev) => [
            ...prev,
            SAMPLE_TRANSCRIPTS[transcriptIndexRef.current]
          ]);
          transcriptIndexRef.current++;
          setWaveActive(true);
          setTimeout(() => setWaveActive(false), 1500);
          if (transcriptIndexRef.current < SAMPLE_TRANSCRIPTS.length) {
            setTimeout(addMessage, 3e3);
          }
        }
      };
      setTimeout(addMessage, 1e3);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [callState]);
  reactExports.useEffect(() => {
    var _a;
    (_a = transcriptRef.current) == null ? void 0 : _a.scrollTo({
      top: transcriptRef.current.scrollHeight,
      behavior: "smooth"
    });
  }, [transcript]);
  const formatTime = (s) => `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
  const startCall = () => {
    setCallState("ringing");
    setTranscript([]);
    transcriptIndexRef.current = 0;
    setTimeout(() => setCallState("connected"), 2e3);
  };
  const endCall = () => {
    setCallState("ended");
    if (timerRef.current) clearInterval(timerRef.current);
    ue.success(`Call ended — ${formatTime(callDuration)}`);
    setTimeout(() => {
      setCallState("idle");
      setCallDuration(0);
    }, 2e3);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-lg mx-auto px-4 py-4 min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => navigate("/"),
          className: "w-9 h-9 rounded-full bg-white/10 flex items-center justify-center",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { size: 18, className: "text-white" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-[18px] font-bold text-white", children: "AI Voice Bot" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-white/50", children: "AI Call Assistant" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          className: "px-3 py-1 rounded-full text-[11px] font-bold",
          style: {
            background: "rgba(47,168,255,0.2)",
            color: "#2fa8ff",
            border: "1px solid rgba(47,168,255,0.4)"
          },
          children: "🤖 AI Powered"
        }
      ) })
    ] }),
    callState === "idle" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-semibold text-white/60 mb-3", children: "Bot Type चुनें" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3", children: VOICE_BOT_PROMPTS.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: () => setSelectedPrompt(p.id),
          className: "rounded-xl p-3 text-left transition-all",
          style: {
            background: selectedPrompt === p.id ? "linear-gradient(135deg, rgba(47,168,255,0.2), rgba(168,85,247,0.2))" : "rgba(255,255,255,0.05)",
            border: selectedPrompt === p.id ? "1px solid rgba(168,85,247,0.5)" : "1px solid rgba(255,255,255,0.1)"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[22px] mb-1", children: p.emoji }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-semibold text-white", children: p.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-white/50 mt-0.5", children: p.desc })
          ]
        },
        p.id
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "rounded-2xl overflow-hidden",
        style: {
          background: "linear-gradient(180deg, rgba(47,168,255,0.1) 0%, rgba(168,85,247,0.15) 100%)",
          border: "1px solid rgba(168,85,247,0.3)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 flex flex-col items-center gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  animate: waveActive || callState === "connected" ? { scale: [1, 1.12, 1] } : {},
                  transition: { repeat: Number.POSITIVE_INFINITY, duration: 1.5 },
                  className: "w-24 h-24 rounded-full flex items-center justify-center text-[40px]",
                  style: {
                    background: "linear-gradient(135deg, #2fa8ff, #a855f7)"
                  },
                  children: "🤖"
                }
              ),
              callState === "connected" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-green-500 border-2 border-[#0B0F14]" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[18px] font-bold text-white", children: "Komofast Voice AI" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[13px] text-white/50 mt-1", children: [
                callState === "idle" && "Call शुरू करने के लिए नीचे button दबाएं",
                callState === "ringing" && "🔔 Connecting...",
                callState === "connected" && `🟢 Connected • ${formatTime(callDuration)}`,
                callState === "ended" && "Call ended"
              ] })
            ] }),
            callState === "connected" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1 h-10", children: Array.from({ length: 20 }, (_, waveIdx) => waveIdx).map(
              (waveIdx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  className: "w-1 rounded-full",
                  style: {
                    background: "linear-gradient(180deg, #2fa8ff, #a855f7)"
                  },
                  animate: waveActive && !muted ? { height: [4, Math.random() * 30 + 8, 4] } : { height: 4 },
                  transition: {
                    duration: 0.4,
                    delay: waveIdx * 0.04,
                    repeat: waveActive ? Number.POSITIVE_INFINITY : 0
                  }
                },
                `wave-${waveIdx}`
              )
            ) })
          ] }),
          transcript.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              ref: transcriptRef,
              className: "mx-4 mb-4 rounded-xl p-3 max-h-48 overflow-y-auto space-y-2",
              style: { background: "rgba(0,0,0,0.3)" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-semibold text-white/40 mb-2", children: "Conversation Transcript" }),
                transcript.map((msg, tIdx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 8 },
                    animate: { opacity: 1, y: 0 },
                    className: `flex gap-2 ${msg.role === "user" ? "flex-row-reverse" : ""}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[16px] flex-shrink-0", children: msg.role === "bot" ? "🤖" : "👤" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "rounded-xl px-3 py-2 max-w-[80%]",
                          style: {
                            background: msg.role === "bot" ? "rgba(47,168,255,0.15)" : "rgba(168,85,247,0.15)",
                            border: msg.role === "bot" ? "1px solid rgba(47,168,255,0.25)" : "1px solid rgba(168,85,247,0.25)"
                          },
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-white/80", children: msg.text })
                        }
                      )
                    ]
                  },
                  `transcript-${tIdx}-${msg.role}`
                ))
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 flex items-center justify-center gap-4", children: [
            callState === "connected" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setMuted((m) => !m),
                  className: "w-12 h-12 rounded-full flex items-center justify-center transition-all",
                  style: {
                    background: muted ? "rgba(239,68,68,0.2)" : "rgba(255,255,255,0.1)",
                    border: "1px solid rgba(255,255,255,0.15)"
                  },
                  children: muted ? /* @__PURE__ */ jsxRuntimeExports.jsx(MicOff, { size: 20, className: "text-red-400" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Mic, { size: 20, className: "text-white" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: endCall,
                  className: "w-16 h-16 rounded-full flex items-center justify-center",
                  style: {
                    background: "linear-gradient(135deg, #ef4444, #dc2626)"
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(PhoneOff, { size: 26, className: "text-white" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setSpeakerOff((s) => !s),
                  className: "w-12 h-12 rounded-full flex items-center justify-center transition-all",
                  style: {
                    background: speakerOff ? "rgba(239,68,68,0.2)" : "rgba(255,255,255,0.1)",
                    border: "1px solid rgba(255,255,255,0.15)"
                  },
                  children: speakerOff ? /* @__PURE__ */ jsxRuntimeExports.jsx(VolumeX, { size: 20, className: "text-red-400" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Volume2, { size: 20, className: "text-white" })
                }
              )
            ] }),
            callState === "idle" && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: startCall,
                className: "w-20 h-20 rounded-full flex items-center justify-center shadow-lg",
                style: {
                  background: "linear-gradient(135deg, #22c55e, #16a34a)",
                  boxShadow: "0 0 30px rgba(34,197,94,0.4)"
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 32, className: "text-white" })
              }
            ),
            callState === "ringing" && /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                animate: { scale: [1, 1.1, 1] },
                transition: { repeat: Number.POSITIVE_INFINITY, duration: 0.8 },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: endCall,
                    className: "w-20 h-20 rounded-full flex items-center justify-center",
                    style: {
                      background: "linear-gradient(135deg, #ef4444, #dc2626)"
                    },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(PhoneOff, { size: 32, className: "text-white" })
                  }
                )
              }
            )
          ] })
        ]
      }
    ),
    callState === "idle" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "mt-4 rounded-2xl p-4",
        style: {
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(WandSparkles, { size: 15, className: "text-komo-purple" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-semibold text-white/70", children: "Bot Prompt Preview" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[12px] text-white/50 leading-relaxed", children: [
            selectedPrompt === "customer" && "You are a helpful Komofast customer support agent. Answer questions about the app, wallet, reels, academy, and technical issues in Hindi and English.",
            selectedPrompt === "sales" && "You are a persuasive Komofast sales assistant. Promote premium features, memberships, and academy courses. Capture leads and upsell effectively.",
            selectedPrompt === "general" && "You are a general-purpose AI voice assistant. Answer any question clearly and concisely in a friendly tone.",
            selectedPrompt === "hindi" && "Aap ek AI voice assistant hain jo sirf Hindi mein baat karta hai. Sab sawalon ke jawab Hindi mein dein."
          ] })
        ]
      }
    )
  ] });
}
export {
  AIVoiceBot as default
};
