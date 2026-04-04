import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  ArrowLeft,
  MessageCircle,
  Mic,
  MicOff,
  Phone,
  PhoneOff,
  Search,
  Send,
  Video,
  VideoOff,
  Volume2,
  VolumeX,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const ONLINE_FRIENDS = [
  {
    id: "f1",
    name: "Neha Singh",
    initials: "NS",
    online: true,
    color: "from-blue-500 to-purple-600",
  },
  {
    id: "f3",
    name: "Sunita Devi",
    initials: "SD",
    online: true,
    color: "from-emerald-500 to-teal-600",
  },
  {
    id: "f5",
    name: "Meena Gupta",
    initials: "MG",
    online: true,
    color: "from-violet-500 to-purple-600",
  },
  {
    id: "f2",
    name: "Ravi Verma",
    initials: "RV",
    online: false,
    color: "from-pink-500 to-rose-600",
  },
  {
    id: "f4",
    name: "Arun Yadav",
    initials: "AY",
    online: false,
    color: "from-amber-500 to-orange-600",
  },
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
    online: true,
  },
  {
    id: "c2",
    name: "Ravi Verma",
    initials: "RV",
    color: "from-pink-500 to-rose-600",
    lastMsg: "Reel dekhi kya tune?",
    time: "15m ago",
    unread: 0,
    online: false,
  },
  {
    id: "c3",
    name: "Sunita Devi",
    initials: "SD",
    color: "from-emerald-500 to-teal-600",
    lastMsg: "Thanks bhai! 🙏",
    time: "1h ago",
    unread: 1,
    online: true,
  },
  {
    id: "c4",
    name: "Arun Yadav",
    initials: "AY",
    color: "from-amber-500 to-orange-600",
    lastMsg: "Kya haal hai?",
    time: "3h ago",
    unread: 0,
    online: false,
  },
  {
    id: "c5",
    name: "Meena Gupta",
    initials: "MG",
    color: "from-violet-500 to-purple-600",
    lastMsg: "Academy course kaisi rahi?",
    time: "Yesterday",
    unread: 0,
    online: true,
  },
];

const DUMMY_MESSAGES = [
  { id: 1, from: "them", text: "Hey! Kaisa hai tu? 😊" },
  { id: 2, from: "me", text: "Bilkul sahi! Teri kya baat hai?" },
  { id: 3, from: "them", text: "Mast hoon. Komofast pe naya reel dala kya?" },
  { id: 4, from: "me", text: "Haan, abhi upload kiya! Check kar 👆" },
  { id: 5, from: "them", text: "Waah! Bahut accha tha 🔥" },
];

type Contact = (typeof MOCK_CONVERSATIONS)[number];

function formatDuration(seconds: number) {
  const m = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0");
  const s = (seconds % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

// ─── Video Call Screen ───────────────────────────────────────────────────────
function VideoCallScreen({
  contact,
  duration,
  isMuted,
  isCameraOff,
  isSpeaker,
  onMuteToggle,
  onCameraToggle,
  onSpeakerToggle,
  onEndCall,
}: {
  contact: Contact;
  duration: number;
  isMuted: boolean;
  isCameraOff: boolean;
  isSpeaker: boolean;
  onMuteToggle: () => void;
  onCameraToggle: () => void;
  onSpeakerToggle: () => void;
  onEndCall: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-50 flex flex-col bg-gradient-to-b from-slate-900 via-blue-950 to-purple-950 overflow-hidden"
    >
      {/* Top bar */}
      <div className="flex items-center gap-3 px-4 pt-12 pb-4">
        <button
          type="button"
          onClick={onEndCall}
          className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        >
          <ArrowLeft size={18} />
        </button>
        <div className="flex-1">
          <p className="font-bold text-white text-base leading-tight">
            {contact.name}
          </p>
          <p className="text-xs text-green-400 font-medium">
            ● Connected · {formatDuration(duration)}
          </p>
        </div>
        <span className="text-xs text-white/60 font-medium">Video Call</span>
      </div>

      {/* Remote video (70%) */}
      <div className="relative flex-1 mx-3 rounded-2xl overflow-hidden">
        {isCameraOff ? (
          <div className="w-full h-full bg-slate-800 flex flex-col items-center justify-center gap-3">
            <VideoOff size={40} className="text-slate-500" />
            <p className="text-slate-400 text-sm">Camera Off</p>
          </div>
        ) : (
          <div
            className={`w-full h-full bg-gradient-to-br ${contact.color} flex items-center justify-center`}
          >
            <span className="text-white font-black text-6xl opacity-30">
              {contact.initials}
            </span>
          </div>
        )}
        {/* HD badge */}
        <span className="absolute top-3 right-3 bg-black/40 text-white text-[10px] font-bold px-2 py-0.5 rounded-full backdrop-blur-sm">
          HD
        </span>
        {/* Contact name overlay */}
        <div className="absolute bottom-3 left-3">
          <p className="text-white font-semibold text-sm drop-shadow">
            {contact.name}
          </p>
        </div>

        {/* Your camera preview (bottom-right) */}
        <div className="absolute bottom-3 right-3 w-[25%] aspect-[9/16] rounded-xl overflow-hidden border-2 border-white/30 shadow-lg">
          <div className="w-full h-full bg-gradient-to-br from-indigo-600 to-blue-800 flex flex-col items-center justify-center gap-1">
            <span className="text-white font-bold text-xs">You</span>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-5 py-8">
        <button
          type="button"
          data-ocid="call.mute.button"
          onClick={onMuteToggle}
          className={`w-14 h-14 rounded-full flex items-center justify-center transition-colors ${
            isMuted
              ? "bg-red-500 text-white"
              : "bg-white/15 text-white hover:bg-white/25"
          }`}
        >
          {isMuted ? <MicOff size={22} /> : <Mic size={22} />}
        </button>

        <button
          type="button"
          data-ocid="call.camera.button"
          onClick={onCameraToggle}
          className={`w-14 h-14 rounded-full flex items-center justify-center transition-colors ${
            isCameraOff
              ? "bg-red-500 text-white"
              : "bg-white/15 text-white hover:bg-white/25"
          }`}
        >
          {isCameraOff ? <VideoOff size={22} /> : <Video size={22} />}
        </button>

        <button
          type="button"
          data-ocid="call.end.button"
          onClick={onEndCall}
          className="w-16 h-16 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center text-white transition-colors shadow-lg shadow-red-900/40"
        >
          <PhoneOff size={26} />
        </button>

        <button
          type="button"
          onClick={onSpeakerToggle}
          className={`w-14 h-14 rounded-full flex items-center justify-center transition-colors ${
            !isSpeaker
              ? "bg-red-500 text-white"
              : "bg-white/15 text-white hover:bg-white/25"
          }`}
        >
          {isSpeaker ? <Volume2 size={22} /> : <VolumeX size={22} />}
        </button>
      </div>
    </motion.div>
  );
}

// ─── Audio Call Screen ───────────────────────────────────────────────────────
function AudioCallScreen({
  contact,
  duration,
  connected,
  isMuted,
  isSpeaker,
  onMuteToggle,
  onSpeakerToggle,
  onEndCall,
}: {
  contact: Contact;
  duration: number;
  connected: boolean;
  isMuted: boolean;
  isSpeaker: boolean;
  onMuteToggle: () => void;
  onSpeakerToggle: () => void;
  onEndCall: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-between bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] rounded-full bg-white/5" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-900/30" />
      </div>

      {/* Top */}
      <div className="w-full flex items-center px-4 pt-12">
        <button
          type="button"
          onClick={onEndCall}
          className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20"
        >
          <ArrowLeft size={18} />
        </button>
        <p className="flex-1 text-center text-white/70 text-sm font-medium">
          Audio Call
        </p>
        <div className="w-9" />
      </div>

      {/* Avatar + Pulse rings */}
      <div className="flex flex-col items-center gap-5 relative">
        {/* Pulsing rings */}
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-white/20"
            style={{
              width: 120 + i * 50,
              height: 120 + i * 50,
              marginTop: -(i * 25),
              marginLeft: -(i * 25),
            }}
            animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.1, 0.4] }}
            transition={{
              duration: 2,
              delay: i * 0.5,
              repeat: Number.POSITIVE_INFINITY,
            }}
          />
        ))}

        {/* Avatar */}
        <div
          className={`w-28 h-28 rounded-full bg-gradient-to-br ${contact.color} flex items-center justify-center shadow-2xl border-4 border-white/20 z-10`}
        >
          <span className="text-white font-black text-3xl">
            {contact.initials}
          </span>
        </div>

        <div className="text-center z-10">
          <p className="text-white font-bold text-2xl">{contact.name}</p>
          <p className="text-white/70 text-sm mt-1">
            {connected
              ? `Connected · ${formatDuration(duration)}`
              : "Connecting..."}
          </p>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-6 pb-16">
        <button
          type="button"
          data-ocid="call.mute.button"
          onClick={onMuteToggle}
          className={`w-14 h-14 rounded-full flex items-center justify-center transition-colors ${
            isMuted
              ? "bg-white/30 text-white"
              : "bg-white/15 text-white hover:bg-white/25"
          }`}
        >
          {isMuted ? <MicOff size={22} /> : <Mic size={22} />}
        </button>

        <button
          type="button"
          data-ocid="call.end.button"
          onClick={onEndCall}
          className="w-16 h-16 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center text-white transition-colors shadow-lg"
        >
          <PhoneOff size={26} />
        </button>

        <button
          type="button"
          onClick={onSpeakerToggle}
          className={`w-14 h-14 rounded-full flex items-center justify-center transition-colors ${
            !isSpeaker
              ? "bg-white/30 text-white"
              : "bg-white/15 text-white hover:bg-white/25"
          }`}
        >
          {isSpeaker ? <Volume2 size={22} /> : <VolumeX size={22} />}
        </button>
      </div>
    </motion.div>
  );
}

// ─── Incoming Call Modal ─────────────────────────────────────────────────────
function IncomingCallModal({
  call,
  onAccept,
  onDecline,
}: {
  call: { type: "video" | "audio"; contact: Contact };
  onAccept: () => void;
  onDecline: () => void;
}) {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center p-6"
      style={{ backdropFilter: "blur(8px)", background: "rgba(0,0,0,0.6)" }}
    >
      <motion.div
        initial={{ scale: 0.85, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.85, y: 20 }}
        className="w-full max-w-sm bg-card rounded-3xl overflow-hidden shadow-2xl border border-border"
      >
        {/* Auto-dismiss progress bar */}
        <div className="h-1 bg-border">
          <div
            className="h-1 bg-gradient-to-r from-komo-blue to-komo-purple transition-all duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="p-6 flex flex-col items-center gap-5">
          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide text-center">
              Incoming {call.type === "video" ? "Video" : "Audio"} Call
            </p>
          </div>

          {/* Pulsing avatar */}
          <div className="relative flex items-center justify-center">
            <motion.div
              className={`absolute w-24 h-24 rounded-full bg-gradient-to-br ${call.contact.color} opacity-20`}
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            />
            <div
              className={`w-20 h-20 rounded-full bg-gradient-to-br ${call.contact.color} flex items-center justify-center shadow-lg z-10`}
            >
              <span className="text-white font-black text-xl">
                {call.contact.initials}
              </span>
            </div>
          </div>

          <div className="text-center">
            <p className="font-bold text-foreground text-lg">
              {call.contact.name}
            </p>
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-1 mt-0.5">
              {call.type === "video" ? (
                <Video size={13} />
              ) : (
                <Phone size={13} />
              )}
              {call.type === "video" ? "Video Call" : "Audio Call"}
            </p>
          </div>

          <div className="flex gap-4 w-full">
            <button
              type="button"
              data-ocid="call.incoming.decline"
              onClick={onDecline}
              className="flex-1 py-3 rounded-2xl bg-red-500 hover:bg-red-600 text-white font-semibold text-sm transition-colors flex items-center justify-center gap-2"
            >
              <PhoneOff size={16} />
              Decline
            </button>
            <button
              type="button"
              data-ocid="call.incoming.accept"
              onClick={onAccept}
              className="flex-1 py-3 rounded-2xl bg-green-500 hover:bg-green-600 text-white font-semibold text-sm transition-colors flex items-center justify-center gap-2"
            >
              {call.type === "video" ? (
                <Video size={16} />
              ) : (
                <Phone size={16} />
              )}
              Accept
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Main ChatPage ────────────────────────────────────────────────────────────
export default function ChatPage() {
  const [search, setSearch] = useState("");
  const [activeChat, setActiveChat] = useState<string | null>(null);
  const [messages, setMessages] = useState(DUMMY_MESSAGES);
  const [msgInput, setMsgInput] = useState("");

  // Call state
  const [activeCall, setActiveCall] = useState<{
    type: "video" | "audio";
    contact: Contact;
  } | null>(null);
  const [incomingCall, setIncomingCall] = useState<{
    type: "video" | "audio";
    contact: Contact;
  } | null>(null);
  const [callDuration, setCallDuration] = useState(0);
  const [callConnected, setCallConnected] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isCameraOff, setIsCameraOff] = useState(false);
  const [isSpeaker, setIsSpeaker] = useState(true);

  const incomingSimulated = useRef(false);
  const durationInterval = useRef<ReturnType<typeof setInterval> | null>(null);

  const activeChatData = MOCK_CONVERSATIONS.find((c) => c.id === activeChat);

  // Simulate incoming call after 5s when entering a chat
  useEffect(() => {
    if (!activeChat || incomingSimulated.current) return;
    const timeout = setTimeout(() => {
      if (incomingSimulated.current) return;
      incomingSimulated.current = true;
      // Pick a different contact
      const other = MOCK_CONVERSATIONS.find((c) => c.id !== activeChat);
      if (other) setIncomingCall({ type: "video", contact: other });
    }, 5000);
    return () => clearTimeout(timeout);
  }, [activeChat]);

  // Call duration counter
  useEffect(() => {
    if (activeCall && callConnected) {
      durationInterval.current = setInterval(() => {
        setCallDuration((d) => d + 1);
      }, 1000);
    }
    return () => {
      if (durationInterval.current) clearInterval(durationInterval.current);
    };
  }, [activeCall, callConnected]);

  const startCall = (type: "video" | "audio", contact: Contact) => {
    setActiveCall({ type, contact });
    setCallDuration(0);
    setIsMuted(false);
    setIsCameraOff(false);
    setIsSpeaker(true);
    // Connect after 2 seconds
    setTimeout(() => setCallConnected(true), 2000);
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
      { id: Date.now(), from: "me", text: msgInput.trim() },
    ]);
    setMsgInput("");
  };

  const filtered = MOCK_CONVERSATIONS.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      {/* ── Incoming Call Modal ── */}
      <AnimatePresence>
        {incomingCall && (
          <IncomingCallModal
            call={incomingCall}
            onAccept={acceptIncomingCall}
            onDecline={declineIncomingCall}
          />
        )}
      </AnimatePresence>

      {/* ── Active Call Screens ── */}
      <AnimatePresence>
        {activeCall && activeCall.type === "video" && (
          <VideoCallScreen
            key="video-call"
            contact={activeCall.contact}
            duration={callDuration}
            isMuted={isMuted}
            isCameraOff={isCameraOff}
            isSpeaker={isSpeaker}
            onMuteToggle={() => setIsMuted((v) => !v)}
            onCameraToggle={() => setIsCameraOff((v) => !v)}
            onSpeakerToggle={() => setIsSpeaker((v) => !v)}
            onEndCall={endCall}
          />
        )}
        {activeCall && activeCall.type === "audio" && (
          <AudioCallScreen
            key="audio-call"
            contact={activeCall.contact}
            duration={callDuration}
            connected={callConnected}
            isMuted={isMuted}
            isSpeaker={isSpeaker}
            onMuteToggle={() => setIsMuted((v) => !v)}
            onSpeakerToggle={() => setIsSpeaker((v) => !v)}
            onEndCall={endCall}
          />
        )}
      </AnimatePresence>

      {/* ── Chat View ── */}
      {activeChat && activeChatData ? (
        <div className="flex flex-col h-[calc(100vh-4rem)] max-w-lg mx-auto">
          {/* Chat header */}
          <div className="flex items-center gap-3 px-4 py-3 bg-card/80 backdrop-blur-sm border-b border-border">
            <Button
              variant="ghost"
              size="icon"
              className="w-8 h-8 rounded-full"
              onClick={() => setActiveChat(null)}
              data-ocid="chat.back.button"
            >
              <ArrowLeft size={18} />
            </Button>
            <div
              className={`w-9 h-9 rounded-full bg-gradient-to-br ${activeChatData.color} flex items-center justify-center text-white font-bold text-xs`}
            >
              {activeChatData.initials}
            </div>
            <div className="flex-1">
              <p className="font-semibold text-sm text-foreground">
                {activeChatData.name}
              </p>
              <p className="text-xs text-muted-foreground">
                {activeChatData.online ? "🟢 Online" : "⚫ Offline"}
              </p>
            </div>

            {/* Call buttons */}
            <button
              type="button"
              data-ocid="chat.audio_call.button"
              onClick={() => startCall("audio", activeChatData)}
              className="w-9 h-9 rounded-full bg-gradient-to-br from-komo-blue to-komo-purple flex items-center justify-center text-white hover:opacity-90 transition-opacity shadow-md"
            >
              <Phone size={16} />
            </button>
            <button
              type="button"
              data-ocid="chat.video_call.button"
              onClick={() => startCall("video", activeChatData)}
              className="w-9 h-9 rounded-full bg-gradient-to-br from-komo-blue to-komo-purple flex items-center justify-center text-white hover:opacity-90 transition-opacity shadow-md"
            >
              <Video size={16} />
            </button>
          </div>

          {/* Messages */}
          <ScrollArea className="flex-1 px-4 py-3">
            <div className="space-y-3">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.from === "me" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[72%] px-3 py-2 rounded-2xl text-sm ${
                      msg.from === "me"
                        ? "bg-gradient-to-r from-komo-blue to-komo-purple text-white rounded-br-sm"
                        : "bg-card border border-border text-foreground rounded-bl-sm"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          {/* Input */}
          <div className="flex items-center gap-2 px-4 py-3 bg-card/80 backdrop-blur-sm border-t border-border">
            <Input
              value={msgInput}
              onChange={(e) => setMsgInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Message likhein..."
              data-ocid="chat.message.input"
              className="flex-1 rounded-full bg-background border-border text-sm"
            />
            <Button
              size="icon"
              onClick={sendMessage}
              data-ocid="chat.send.button"
              className="w-9 h-9 rounded-full bg-gradient-to-r from-komo-blue to-komo-purple text-white border-0"
            >
              <Send size={16} />
            </Button>
          </div>
        </div>
      ) : (
        <div className="min-h-screen pb-24 pt-4">
          <div className="max-w-lg mx-auto">
            {/* Header */}
            <div className="px-4 mb-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-komo-blue to-komo-purple flex items-center justify-center shadow-lg">
                  <MessageCircle size={20} className="text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-foreground">
                    Messages
                  </h1>
                  <p className="text-xs text-muted-foreground">
                    Friends · Chats
                  </p>
                </div>
              </div>

              {/* Online friends strip */}
              <div className="mb-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                  Online Friends
                </p>
                <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                  {ONLINE_FRIENDS.map((friend) => (
                    <button
                      key={friend.id}
                      type="button"
                      data-ocid="chat.online_friend.button"
                      onClick={() => {
                        const conv = MOCK_CONVERSATIONS.find(
                          (c) => c.id === friend.id.replace("f", "c"),
                        );
                        if (conv) setActiveChat(conv.id);
                      }}
                      className="flex flex-col items-center gap-1.5 flex-shrink-0"
                    >
                      <div className="relative">
                        <div
                          className={`w-14 h-14 rounded-full bg-gradient-to-br ${friend.color} flex items-center justify-center text-white font-bold text-sm`}
                        >
                          {friend.initials}
                        </div>
                        {friend.online && (
                          <span className="absolute bottom-0.5 right-0.5 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-background" />
                        )}
                      </div>
                      <span className="text-[11px] text-muted-foreground w-14 text-center truncate">
                        {friend.name.split(" ")[0]}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Search */}
              <div className="relative">
                <Search
                  size={15}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                />
                <Input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search messages..."
                  data-ocid="chat.search.input"
                  className="pl-9 rounded-full bg-card border-border text-sm"
                />
              </div>
            </div>

            {/* Conversations list */}
            <div className="space-y-1 px-4" data-ocid="chat.conversations.list">
              {filtered.map((conv, idx) => (
                <motion.button
                  key={conv.id}
                  type="button"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  data-ocid={`chat.conversations.item.${idx + 1}`}
                  onClick={() => setActiveChat(conv.id)}
                  className="w-full flex items-center gap-3 p-3 rounded-2xl hover:bg-accent/50 transition-colors text-left"
                >
                  <div className="relative flex-shrink-0">
                    <div
                      className={`w-12 h-12 rounded-full bg-gradient-to-br ${conv.color} flex items-center justify-center text-white font-bold text-sm`}
                    >
                      {conv.initials}
                    </div>
                    {conv.online && (
                      <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-background" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-0.5">
                      <p
                        className={`font-semibold text-sm ${
                          conv.unread > 0
                            ? "text-foreground"
                            : "text-foreground/80"
                        }`}
                      >
                        {conv.name}
                      </p>
                      <span className="text-[11px] text-muted-foreground">
                        {conv.time}
                      </span>
                    </div>
                    <p
                      className={`text-xs truncate ${
                        conv.unread > 0
                          ? "text-foreground font-medium"
                          : "text-muted-foreground"
                      }`}
                    >
                      {conv.lastMsg}
                    </p>
                  </div>
                  {conv.unread > 0 && (
                    <span className="w-5 h-5 bg-gradient-to-br from-komo-blue to-komo-purple rounded-full text-[10px] text-white flex items-center justify-center font-bold flex-shrink-0">
                      {conv.unread}
                    </span>
                  )}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
