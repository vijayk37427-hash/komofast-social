import { r as reactExports, j as jsxRuntimeExports, A as AnimatePresence, B as Button, V as Video, i as ScrollArea, I as Input, a as MessageCircle, o as Search, m as motion, a6 as MicOff, a7 as Mic, a8 as Volume2 } from "./index-m-9XzHBK.js";
import { A as ArrowLeft } from "./arrow-left-MlK4V-5g.js";
import { P as Phone } from "./phone-Bat2xGsG.js";
import { S as Send } from "./send-Dd_jYPEU.js";
import { P as PhoneOff } from "./phone-off-BUhhgcDm.js";
import { V as VideoOff } from "./video-off-D-z1La2s.js";
import { V as VolumeX } from "./volume-x-_UlhMHkg.js";
const ONLINE_FRIENDS = [
  {
    id: "f1",
    name: "Neha Singh",
    initials: "NS",
    online: true,
    color: "from-blue-500 to-purple-600"
  },
  {
    id: "f3",
    name: "Sunita Devi",
    initials: "SD",
    online: true,
    color: "from-emerald-500 to-teal-600"
  },
  {
    id: "f5",
    name: "Meena Gupta",
    initials: "MG",
    online: true,
    color: "from-violet-500 to-purple-600"
  },
  {
    id: "f2",
    name: "Ravi Verma",
    initials: "RV",
    online: false,
    color: "from-pink-500 to-rose-600"
  },
  {
    id: "f4",
    name: "Arun Yadav",
    initials: "AY",
    online: false,
    color: "from-amber-500 to-orange-600"
  }
];
const MOCK_CONVERSATIONS = [
  {
    id: "c1",
    name: "Neha Singh",
    initials: "NS",
    color: "from-blue-500 to-purple-600",
    lastMsg: "Kal milte hain! 😊",
    time: "2m ago",
    unread: 2,
    online: true
  },
  {
    id: "c2",
    name: "Ravi Verma",
    initials: "RV",
    color: "from-pink-500 to-rose-600",
    lastMsg: "Reel dekhi kya tune?",
    time: "15m ago",
    unread: 0,
    online: false
  },
  {
    id: "c3",
    name: "Sunita Devi",
    initials: "SD",
    color: "from-emerald-500 to-teal-600",
    lastMsg: "Thanks bhai! 🙏",
    time: "1h ago",
    unread: 1,
    online: true
  },
  {
    id: "c4",
    name: "Arun Yadav",
    initials: "AY",
    color: "from-amber-500 to-orange-600",
    lastMsg: "Kya haal hai?",
    time: "3h ago",
    unread: 0,
    online: false
  },
  {
    id: "c5",
    name: "Meena Gupta",
    initials: "MG",
    color: "from-violet-500 to-purple-600",
    lastMsg: "Academy course kaisi rahi?",
    time: "Yesterday",
    unread: 0,
    online: true
  }
];
const DUMMY_MESSAGES = [
  { id: 1, from: "them", text: "Hey! Kaisa hai tu? 😊" },
  { id: 2, from: "me", text: "Bilkul sahi! Teri kya baat hai?" },
  { id: 3, from: "them", text: "Mast hoon. Komofast pe naya reel dala kya?" },
  { id: 4, from: "me", text: "Haan, abhi upload kiya! Check kar 👆" },
  { id: 5, from: "them", text: "Waah! Bahut accha tha 🔥" }
];
function formatDuration(seconds) {
  const m = Math.floor(seconds / 60).toString().padStart(2, "0");
  const s = (seconds % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}
function VideoCallScreen({
  contact,
  duration,
  isMuted,
  isCameraOff,
  isSpeaker,
  onMuteToggle,
  onCameraToggle,
  onSpeakerToggle,
  onEndCall
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, scale: 0.97 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.97 },
      transition: { duration: 0.25 },
      className: "fixed inset-0 z-50 flex flex-col bg-gradient-to-b from-slate-900 via-blue-950 to-purple-950 overflow-hidden",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 px-4 pt-12 pb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: onEndCall,
              className: "w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 18 })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-white text-base leading-tight", children: contact.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-green-400 font-medium", children: [
              "● Connected · ",
              formatDuration(duration)
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-white/60 font-medium", children: "Video Call" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 mx-3 rounded-2xl overflow-hidden", children: [
          isCameraOff ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full h-full bg-slate-800 flex flex-col items-center justify-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(VideoOff, { size: 40, className: "text-slate-500" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-400 text-sm", children: "Camera Off" })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: `w-full h-full bg-gradient-to-br ${contact.color} flex items-center justify-center`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-black text-6xl opacity-30", children: contact.initials })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-3 right-3 bg-black/40 text-white text-[10px] font-bold px-2 py-0.5 rounded-full backdrop-blur-sm", children: "HD" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-3 left-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white font-semibold text-sm drop-shadow", children: contact.name }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-3 right-3 w-[25%] aspect-[9/16] rounded-xl overflow-hidden border-2 border-white/30 shadow-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full bg-gradient-to-br from-indigo-600 to-blue-800 flex flex-col items-center justify-center gap-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-bold text-xs", children: "You" }) }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-5 py-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              "data-ocid": "call.mute.button",
              onClick: onMuteToggle,
              className: `w-14 h-14 rounded-full flex items-center justify-center transition-colors ${isMuted ? "bg-red-500 text-white" : "bg-white/15 text-white hover:bg-white/25"}`,
              children: isMuted ? /* @__PURE__ */ jsxRuntimeExports.jsx(MicOff, { size: 22 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Mic, { size: 22 })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              "data-ocid": "call.camera.button",
              onClick: onCameraToggle,
              className: `w-14 h-14 rounded-full flex items-center justify-center transition-colors ${isCameraOff ? "bg-red-500 text-white" : "bg-white/15 text-white hover:bg-white/25"}`,
              children: isCameraOff ? /* @__PURE__ */ jsxRuntimeExports.jsx(VideoOff, { size: 22 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Video, { size: 22 })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              "data-ocid": "call.end.button",
              onClick: onEndCall,
              className: "w-16 h-16 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center text-white transition-colors shadow-lg shadow-red-900/40",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(PhoneOff, { size: 26 })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: onSpeakerToggle,
              className: `w-14 h-14 rounded-full flex items-center justify-center transition-colors ${!isSpeaker ? "bg-red-500 text-white" : "bg-white/15 text-white hover:bg-white/25"}`,
              children: isSpeaker ? /* @__PURE__ */ jsxRuntimeExports.jsx(Volume2, { size: 22 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(VolumeX, { size: 22 })
            }
          )
        ] })
      ]
    }
  );
}
function AudioCallScreen({
  contact,
  duration,
  connected,
  isMuted,
  isSpeaker,
  onMuteToggle,
  onSpeakerToggle,
  onEndCall
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 30 },
      transition: { duration: 0.3 },
      className: "fixed inset-0 z-50 flex flex-col items-center justify-between bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 overflow-hidden",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 overflow-hidden pointer-events-none", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-[-20%] left-[-20%] w-[60%] h-[60%] rounded-full bg-white/5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-900/30" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full flex items-center px-4 pt-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: onEndCall,
              className: "w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 18 })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "flex-1 text-center text-white/70 text-sm font-medium", children: "Audio Call" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-5 relative", children: [
          [1, 2, 3].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              className: "absolute rounded-full border border-white/20",
              style: {
                width: 120 + i * 50,
                height: 120 + i * 50,
                marginTop: -(i * 25),
                marginLeft: -(i * 25)
              },
              animate: { scale: [1, 1.08, 1], opacity: [0.4, 0.1, 0.4] },
              transition: {
                duration: 2,
                delay: i * 0.5,
                repeat: Number.POSITIVE_INFINITY
              }
            },
            i
          )),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: `w-28 h-28 rounded-full bg-gradient-to-br ${contact.color} flex items-center justify-center shadow-2xl border-4 border-white/20 z-10`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-black text-3xl", children: contact.initials })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center z-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white font-bold text-2xl", children: contact.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/70 text-sm mt-1", children: connected ? `Connected · ${formatDuration(duration)}` : "Connecting..." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-6 pb-16", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              "data-ocid": "call.mute.button",
              onClick: onMuteToggle,
              className: `w-14 h-14 rounded-full flex items-center justify-center transition-colors ${isMuted ? "bg-white/30 text-white" : "bg-white/15 text-white hover:bg-white/25"}`,
              children: isMuted ? /* @__PURE__ */ jsxRuntimeExports.jsx(MicOff, { size: 22 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Mic, { size: 22 })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              "data-ocid": "call.end.button",
              onClick: onEndCall,
              className: "w-16 h-16 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center text-white transition-colors shadow-lg",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(PhoneOff, { size: 26 })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: onSpeakerToggle,
              className: `w-14 h-14 rounded-full flex items-center justify-center transition-colors ${!isSpeaker ? "bg-white/30 text-white" : "bg-white/15 text-white hover:bg-white/25"}`,
              children: isSpeaker ? /* @__PURE__ */ jsxRuntimeExports.jsx(Volume2, { size: 22 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(VolumeX, { size: 22 })
            }
          )
        ] })
      ]
    }
  );
}
function IncomingCallModal({
  call,
  onAccept,
  onDecline
}) {
  const [progress, setProgress] = reactExports.useState(100);
  reactExports.useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p <= 0) {
          onDecline();
          return 0;
        }
        return p - 100 / (15 * 10);
      });
    }, 100);
    return () => clearInterval(interval);
  }, [onDecline]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      className: "fixed inset-0 z-[60] flex items-center justify-center p-6",
      style: { backdropFilter: "blur(8px)", background: "rgba(0,0,0,0.6)" },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { scale: 0.85, y: 20 },
          animate: { scale: 1, y: 0 },
          exit: { scale: 0.85, y: 20 },
          className: "w-full max-w-sm bg-card rounded-3xl overflow-hidden shadow-2xl border border-border",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1 bg-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "h-1 bg-gradient-to-r from-komo-blue to-komo-purple transition-all duration-100",
                style: { width: `${progress}%` }
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 flex flex-col items-center gap-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wide text-center", children: [
                "Incoming ",
                call.type === "video" ? "Video" : "Audio",
                " Call"
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-center justify-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    className: `absolute w-24 h-24 rounded-full bg-gradient-to-br ${call.contact.color} opacity-20`,
                    animate: { scale: [1, 1.3, 1] },
                    transition: { duration: 1.5, repeat: Number.POSITIVE_INFINITY }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: `w-20 h-20 rounded-full bg-gradient-to-br ${call.contact.color} flex items-center justify-center shadow-lg z-10`,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-black text-xl", children: call.contact.initials })
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-foreground text-lg", children: call.contact.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground flex items-center justify-center gap-1 mt-0.5", children: [
                  call.type === "video" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Video, { size: 13 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 13 }),
                  call.type === "video" ? "Video Call" : "Audio Call"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 w-full", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    "data-ocid": "call.incoming.decline",
                    onClick: onDecline,
                    className: "flex-1 py-3 rounded-2xl bg-red-500 hover:bg-red-600 text-white font-semibold text-sm transition-colors flex items-center justify-center gap-2",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(PhoneOff, { size: 16 }),
                      "Decline"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    "data-ocid": "call.incoming.accept",
                    onClick: onAccept,
                    className: "flex-1 py-3 rounded-2xl bg-green-500 hover:bg-green-600 text-white font-semibold text-sm transition-colors flex items-center justify-center gap-2",
                    children: [
                      call.type === "video" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Video, { size: 16 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 16 }),
                      "Accept"
                    ]
                  }
                )
              ] })
            ] })
          ]
        }
      )
    }
  );
}
function ChatPage() {
  const [search, setSearch] = reactExports.useState("");
  const [activeChat, setActiveChat] = reactExports.useState(null);
  const [messages, setMessages] = reactExports.useState(DUMMY_MESSAGES);
  const [msgInput, setMsgInput] = reactExports.useState("");
  const [activeCall, setActiveCall] = reactExports.useState(null);
  const [incomingCall, setIncomingCall] = reactExports.useState(null);
  const [callDuration, setCallDuration] = reactExports.useState(0);
  const [callConnected, setCallConnected] = reactExports.useState(false);
  const [isMuted, setIsMuted] = reactExports.useState(false);
  const [isCameraOff, setIsCameraOff] = reactExports.useState(false);
  const [isSpeaker, setIsSpeaker] = reactExports.useState(true);
  const incomingSimulated = reactExports.useRef(false);
  const durationInterval = reactExports.useRef(null);
  const activeChatData = MOCK_CONVERSATIONS.find((c) => c.id === activeChat);
  reactExports.useEffect(() => {
    if (!activeChat || incomingSimulated.current) return;
    const timeout = setTimeout(() => {
      if (incomingSimulated.current) return;
      incomingSimulated.current = true;
      const other = MOCK_CONVERSATIONS.find((c) => c.id !== activeChat);
      if (other) setIncomingCall({ type: "video", contact: other });
    }, 5e3);
    return () => clearTimeout(timeout);
  }, [activeChat]);
  reactExports.useEffect(() => {
    if (activeCall && callConnected) {
      durationInterval.current = setInterval(() => {
        setCallDuration((d) => d + 1);
      }, 1e3);
    }
    return () => {
      if (durationInterval.current) clearInterval(durationInterval.current);
    };
  }, [activeCall, callConnected]);
  const startCall = (type, contact) => {
    setActiveCall({ type, contact });
    setCallDuration(0);
    setIsMuted(false);
    setIsCameraOff(false);
    setIsSpeaker(true);
    setTimeout(() => setCallConnected(true), 2e3);
  };
  const endCall = () => {
    setActiveCall(null);
    setCallConnected(false);
    setCallDuration(0);
    if (durationInterval.current) clearInterval(durationInterval.current);
  };
  const acceptIncomingCall = () => {
    if (!incomingCall) return;
    const call = incomingCall;
    setIncomingCall(null);
    startCall(call.type, call.contact);
  };
  const declineIncomingCall = () => setIncomingCall(null);
  const sendMessage = () => {
    if (!msgInput.trim()) return;
    setMessages((prev) => [
      ...prev,
      { id: Date.now(), from: "me", text: msgInput.trim() }
    ]);
    setMsgInput("");
  };
  const filtered = MOCK_CONVERSATIONS.filter(
    (c) => c.name.toLowerCase().includes(search.toLowerCase())
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: incomingCall && /* @__PURE__ */ jsxRuntimeExports.jsx(
      IncomingCallModal,
      {
        call: incomingCall,
        onAccept: acceptIncomingCall,
        onDecline: declineIncomingCall
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatePresence, { children: [
      activeCall && activeCall.type === "video" && /* @__PURE__ */ jsxRuntimeExports.jsx(
        VideoCallScreen,
        {
          contact: activeCall.contact,
          duration: callDuration,
          isMuted,
          isCameraOff,
          isSpeaker,
          onMuteToggle: () => setIsMuted((v) => !v),
          onCameraToggle: () => setIsCameraOff((v) => !v),
          onSpeakerToggle: () => setIsSpeaker((v) => !v),
          onEndCall: endCall
        },
        "video-call"
      ),
      activeCall && activeCall.type === "audio" && /* @__PURE__ */ jsxRuntimeExports.jsx(
        AudioCallScreen,
        {
          contact: activeCall.contact,
          duration: callDuration,
          connected: callConnected,
          isMuted,
          isSpeaker,
          onMuteToggle: () => setIsMuted((v) => !v),
          onSpeakerToggle: () => setIsSpeaker((v) => !v),
          onEndCall: endCall
        },
        "audio-call"
      )
    ] }),
    activeChat && activeChatData ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col h-[calc(100vh-4rem)] max-w-lg mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 px-4 py-3 bg-card/80 backdrop-blur-sm border-b border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "ghost",
            size: "icon",
            className: "w-8 h-8 rounded-full",
            onClick: () => setActiveChat(null),
            "data-ocid": "chat.back.button",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 18 })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `w-9 h-9 rounded-full bg-gradient-to-br ${activeChatData.color} flex items-center justify-center text-white font-bold text-xs`,
            children: activeChatData.initials
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm text-foreground", children: activeChatData.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: activeChatData.online ? "🟢 Online" : "⚫ Offline" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            "data-ocid": "chat.audio_call.button",
            onClick: () => startCall("audio", activeChatData),
            className: "w-9 h-9 rounded-full bg-gradient-to-br from-komo-blue to-komo-purple flex items-center justify-center text-white hover:opacity-90 transition-opacity shadow-md",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 16 })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            "data-ocid": "chat.video_call.button",
            onClick: () => startCall("video", activeChatData),
            className: "w-9 h-9 rounded-full bg-gradient-to-br from-komo-blue to-komo-purple flex items-center justify-center text-white hover:opacity-90 transition-opacity shadow-md",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Video, { size: 16 })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollArea, { className: "flex-1 px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: messages.map((msg) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: `flex ${msg.from === "me" ? "justify-end" : "justify-start"}`,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: `max-w-[72%] px-3 py-2 rounded-2xl text-sm ${msg.from === "me" ? "bg-gradient-to-r from-komo-blue to-komo-purple text-white rounded-br-sm" : "bg-card border border-border text-foreground rounded-bl-sm"}`,
              children: msg.text
            }
          )
        },
        msg.id
      )) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 px-4 py-3 bg-card/80 backdrop-blur-sm border-t border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            value: msgInput,
            onChange: (e) => setMsgInput(e.target.value),
            onKeyDown: (e) => e.key === "Enter" && sendMessage(),
            placeholder: "Message likhein...",
            "data-ocid": "chat.message.input",
            className: "flex-1 rounded-full bg-background border-border text-sm"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            size: "icon",
            onClick: sendMessage,
            "data-ocid": "chat.send.button",
            className: "w-9 h-9 rounded-full bg-gradient-to-r from-komo-blue to-komo-purple text-white border-0",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { size: 16 })
          }
        )
      ] })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen pb-24 pt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-lg mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-2xl bg-gradient-to-br from-komo-blue to-komo-purple flex items-center justify-center shadow-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { size: 20, className: "text-white" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-bold text-foreground", children: "Messages" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Friends · Chats" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3", children: "Online Friends" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-4 overflow-x-auto pb-2 scrollbar-hide", children: ONLINE_FRIENDS.map((friend) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              "data-ocid": "chat.online_friend.button",
              onClick: () => {
                const conv = MOCK_CONVERSATIONS.find(
                  (c) => c.id === friend.id.replace("f", "c")
                );
                if (conv) setActiveChat(conv.id);
              },
              className: "flex flex-col items-center gap-1.5 flex-shrink-0",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: `w-14 h-14 rounded-full bg-gradient-to-br ${friend.color} flex items-center justify-center text-white font-bold text-sm`,
                      children: friend.initials
                    }
                  ),
                  friend.online && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute bottom-0.5 right-0.5 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-background" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-muted-foreground w-14 text-center truncate", children: friend.name.split(" ")[0] })
              ]
            },
            friend.id
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Search,
            {
              size: 15,
              className: "absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              value: search,
              onChange: (e) => setSearch(e.target.value),
              placeholder: "Search messages...",
              "data-ocid": "chat.search.input",
              className: "pl-9 rounded-full bg-card border-border text-sm"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1 px-4", "data-ocid": "chat.conversations.list", children: filtered.map((conv, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.button,
        {
          type: "button",
          initial: { opacity: 0, y: 8 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: idx * 0.05 },
          "data-ocid": `chat.conversations.item.${idx + 1}`,
          onClick: () => setActiveChat(conv.id),
          className: "w-full flex items-center gap-3 p-3 rounded-2xl hover:bg-accent/50 transition-colors text-left",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-shrink-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: `w-12 h-12 rounded-full bg-gradient-to-br ${conv.color} flex items-center justify-center text-white font-bold text-sm`,
                  children: conv.initials
                }
              ),
              conv.online && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-background" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-0.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: `font-semibold text-sm ${conv.unread > 0 ? "text-foreground" : "text-foreground/80"}`,
                    children: conv.name
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-muted-foreground", children: conv.time })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: `text-xs truncate ${conv.unread > 0 ? "text-foreground font-medium" : "text-muted-foreground"}`,
                  children: conv.lastMsg
                }
              )
            ] }),
            conv.unread > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-5 h-5 bg-gradient-to-br from-komo-blue to-komo-purple rounded-full text-[10px] text-white flex items-center justify-center font-bold flex-shrink-0", children: conv.unread })
          ]
        },
        conv.id
      )) })
    ] }) })
  ] });
}
export {
  ChatPage as default
};
