import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  Mic,
  MicOff,
  Phone,
  PhoneOff,
  Volume2,
  VolumeX,
  Wand2,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { useApp } from "../context/AppContext";

const VOICE_BOT_PROMPTS = [
  {
    id: "customer",
    label: "Customer Support",
    emoji: "🎧",
    desc: "Support agent for Komofast users",
  },
  {
    id: "sales",
    label: "Sales Assistant",
    emoji: "💼",
    desc: "Product promotion & lead capture",
  },
  {
    id: "general",
    label: "General AI",
    emoji: "🤖",
    desc: "General purpose voice assistant",
  },
  {
    id: "hindi",
    label: "Hindi Bot",
    emoji: "🇮🇳",
    desc: "Hindi mein baat karein",
  },
];

const SAMPLE_TRANSCRIPTS = [
  {
    role: "bot",
    text: "Namaste! Main Komofast AI Voice Assistant hoon. Aap kaise help kar sakta hoon?",
  },
  { role: "user", text: "Mujhe wallet se paise withdraw karne hain." },
  {
    role: "bot",
    text: "Zaroor! Wallet page par jaaiye, Withdraw button dabaaiye, UPI ID ya Bank Account add karein aur amount enter karein. Kya koi aur help chahiye?",
  },
  { role: "user", text: "KomoCoin kya hota hai?" },
  {
    role: "bot",
    text: "KomoCoin Komofast ka digital reward token hai. Posts like karne, Reels dekhne, aur referrals se earn hota hai. Wallet mein redeem kar sakte hain.",
  },
];

export default function AIVoiceBot() {
  const { navigate } = useApp();
  const [callState, setCallState] = useState<
    "idle" | "ringing" | "connected" | "ended"
  >("idle");
  const [muted, setMuted] = useState(false);
  const [speakerOff, setSpeakerOff] = useState(false);
  const [selectedPrompt, setSelectedPrompt] = useState("customer");
  const [transcript, setTranscript] = useState<
    { role: string; text: string }[]
  >([]);
  const [callDuration, setCallDuration] = useState(0);
  const [waveActive, setWaveActive] = useState(false);
  const transcriptRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const transcriptIndexRef = useRef(0);

  useEffect(() => {
    if (callState === "connected") {
      timerRef.current = setInterval(() => setCallDuration((d) => d + 1), 1000);
      // Simulate transcript messages
      const addMessage = () => {
        if (transcriptIndexRef.current < SAMPLE_TRANSCRIPTS.length) {
          setTranscript((prev) => [
            ...prev,
            SAMPLE_TRANSCRIPTS[transcriptIndexRef.current],
          ]);
          transcriptIndexRef.current++;
          setWaveActive(true);
          setTimeout(() => setWaveActive(false), 1500);
          if (transcriptIndexRef.current < SAMPLE_TRANSCRIPTS.length) {
            setTimeout(addMessage, 3000);
          }
        }
      };
      setTimeout(addMessage, 1000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [callState]);

  // biome-ignore lint/correctness/useExhaustiveDependencies: chatRef is stable
  useEffect(() => {
    transcriptRef.current?.scrollTo({
      top: transcriptRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [transcript]);

  const formatTime = (s: number) =>
    `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

  const startCall = () => {
    setCallState("ringing");
    setTranscript([]);
    transcriptIndexRef.current = 0;
    setTimeout(() => setCallState("connected"), 2000);
  };

  const endCall = () => {
    setCallState("ended");
    if (timerRef.current) clearInterval(timerRef.current);
    toast.success(`Call ended — ${formatTime(callDuration)}`);
    setTimeout(() => {
      setCallState("idle");
      setCallDuration(0);
    }, 2000);
  };

  return (
    <div className="max-w-lg mx-auto px-4 py-4 min-h-screen">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <button
          type="button"
          onClick={() => navigate("/")}
          className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center"
        >
          <ChevronLeft size={18} className="text-white" />
        </button>
        <div>
          <h1 className="text-[18px] font-bold text-white">AI Voice Bot</h1>
          <p className="text-[12px] text-white/50">AI Call Assistant</p>
        </div>
        <div className="ml-auto">
          <span
            className="px-3 py-1 rounded-full text-[11px] font-bold"
            style={{
              background: "rgba(47,168,255,0.2)",
              color: "#2fa8ff",
              border: "1px solid rgba(47,168,255,0.4)",
            }}
          >
            🤖 AI Powered
          </span>
        </div>
      </div>

      {/* Prompt Selector */}
      {callState === "idle" && (
        <div className="mb-6">
          <p className="text-[13px] font-semibold text-white/60 mb-3">
            Bot Type चुनें
          </p>
          <div className="grid grid-cols-2 gap-3">
            {VOICE_BOT_PROMPTS.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setSelectedPrompt(p.id)}
                className="rounded-xl p-3 text-left transition-all"
                style={{
                  background:
                    selectedPrompt === p.id
                      ? "linear-gradient(135deg, rgba(47,168,255,0.2), rgba(168,85,247,0.2))"
                      : "rgba(255,255,255,0.05)",
                  border:
                    selectedPrompt === p.id
                      ? "1px solid rgba(168,85,247,0.5)"
                      : "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <div className="text-[22px] mb-1">{p.emoji}</div>
                <p className="text-[13px] font-semibold text-white">
                  {p.label}
                </p>
                <p className="text-[11px] text-white/50 mt-0.5">{p.desc}</p>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Call Screen */}
      <div
        className="rounded-2xl overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, rgba(47,168,255,0.1) 0%, rgba(168,85,247,0.15) 100%)",
          border: "1px solid rgba(168,85,247,0.3)",
        }}
      >
        {/* Avatar & Status */}
        <div className="p-8 flex flex-col items-center gap-4">
          <div className="relative">
            <motion.div
              animate={
                waveActive || callState === "connected"
                  ? { scale: [1, 1.12, 1] }
                  : {}
              }
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
              className="w-24 h-24 rounded-full flex items-center justify-center text-[40px]"
              style={{
                background: "linear-gradient(135deg, #2fa8ff, #a855f7)",
              }}
            >
              🤖
            </motion.div>
            {callState === "connected" && (
              <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-green-500 border-2 border-[#0B0F14]" />
            )}
          </div>
          <div className="text-center">
            <p className="text-[18px] font-bold text-white">
              Komofast Voice AI
            </p>
            <p className="text-[13px] text-white/50 mt-1">
              {callState === "idle" && "Call शुरू करने के लिए नीचे button दबाएं"}
              {callState === "ringing" && "🔔 Connecting..."}
              {callState === "connected" &&
                `🟢 Connected • ${formatTime(callDuration)}`}
              {callState === "ended" && "Call ended"}
            </p>
          </div>

          {/* Waveform */}
          {callState === "connected" && (
            <div className="flex items-center gap-1 h-10">
              {Array.from({ length: 20 }, (_, waveIdx) => waveIdx).map(
                (waveIdx) => (
                  <motion.div
                    key={`wave-${waveIdx}`}
                    className="w-1 rounded-full"
                    style={{
                      background: "linear-gradient(180deg, #2fa8ff, #a855f7)",
                    }}
                    animate={
                      waveActive && !muted
                        ? { height: [4, Math.random() * 30 + 8, 4] }
                        : { height: 4 }
                    }
                    transition={{
                      duration: 0.4,
                      delay: waveIdx * 0.04,
                      repeat: waveActive ? Number.POSITIVE_INFINITY : 0,
                    }}
                  />
                ),
              )}
            </div>
          )}
        </div>

        {/* Transcript */}
        {transcript.length > 0 && (
          <div
            ref={transcriptRef}
            className="mx-4 mb-4 rounded-xl p-3 max-h-48 overflow-y-auto space-y-2"
            style={{ background: "rgba(0,0,0,0.3)" }}
          >
            <p className="text-[11px] font-semibold text-white/40 mb-2">
              Conversation Transcript
            </p>
            {transcript.map((msg, tIdx) => (
              <motion.div
                key={`transcript-${tIdx}-${msg.role}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex gap-2 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
              >
                <span className="text-[16px] flex-shrink-0">
                  {msg.role === "bot" ? "🤖" : "👤"}
                </span>
                <div
                  className="rounded-xl px-3 py-2 max-w-[80%]"
                  style={{
                    background:
                      msg.role === "bot"
                        ? "rgba(47,168,255,0.15)"
                        : "rgba(168,85,247,0.15)",
                    border:
                      msg.role === "bot"
                        ? "1px solid rgba(47,168,255,0.25)"
                        : "1px solid rgba(168,85,247,0.25)",
                  }}
                >
                  <p className="text-[12px] text-white/80">{msg.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Controls */}
        <div className="p-5 flex items-center justify-center gap-4">
          {callState === "connected" && (
            <>
              <button
                type="button"
                onClick={() => setMuted((m) => !m)}
                className="w-12 h-12 rounded-full flex items-center justify-center transition-all"
                style={{
                  background: muted
                    ? "rgba(239,68,68,0.2)"
                    : "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.15)",
                }}
              >
                {muted ? (
                  <MicOff size={20} className="text-red-400" />
                ) : (
                  <Mic size={20} className="text-white" />
                )}
              </button>
              <button
                type="button"
                onClick={endCall}
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, #ef4444, #dc2626)",
                }}
              >
                <PhoneOff size={26} className="text-white" />
              </button>
              <button
                type="button"
                onClick={() => setSpeakerOff((s) => !s)}
                className="w-12 h-12 rounded-full flex items-center justify-center transition-all"
                style={{
                  background: speakerOff
                    ? "rgba(239,68,68,0.2)"
                    : "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.15)",
                }}
              >
                {speakerOff ? (
                  <VolumeX size={20} className="text-red-400" />
                ) : (
                  <Volume2 size={20} className="text-white" />
                )}
              </button>
            </>
          )}
          {callState === "idle" && (
            <button
              type="button"
              onClick={startCall}
              className="w-20 h-20 rounded-full flex items-center justify-center shadow-lg"
              style={{
                background: "linear-gradient(135deg, #22c55e, #16a34a)",
                boxShadow: "0 0 30px rgba(34,197,94,0.4)",
              }}
            >
              <Phone size={32} className="text-white" />
            </button>
          )}
          {callState === "ringing" && (
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 0.8 }}
            >
              <button
                type="button"
                onClick={endCall}
                className="w-20 h-20 rounded-full flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, #ef4444, #dc2626)",
                }}
              >
                <PhoneOff size={32} className="text-white" />
              </button>
            </motion.div>
          )}
        </div>
      </div>

      {/* Prompt Config */}
      {callState === "idle" && (
        <div
          className="mt-4 rounded-2xl p-4"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div className="flex items-center gap-2 mb-3">
            <Wand2 size={15} className="text-komo-purple" />
            <p className="text-[13px] font-semibold text-white/70">
              Bot Prompt Preview
            </p>
          </div>
          <p className="text-[12px] text-white/50 leading-relaxed">
            {selectedPrompt === "customer" &&
              "You are a helpful Komofast customer support agent. Answer questions about the app, wallet, reels, academy, and technical issues in Hindi and English."}
            {selectedPrompt === "sales" &&
              "You are a persuasive Komofast sales assistant. Promote premium features, memberships, and academy courses. Capture leads and upsell effectively."}
            {selectedPrompt === "general" &&
              "You are a general-purpose AI voice assistant. Answer any question clearly and concisely in a friendly tone."}
            {selectedPrompt === "hindi" &&
              "Aap ek AI voice assistant hain jo sirf Hindi mein baat karta hai. Sab sawalon ke jawab Hindi mein dein."}
          </p>
        </div>
      )}
    </div>
  );
}
