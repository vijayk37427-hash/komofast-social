import {
  ArrowLeft,
  Mic,
  MicOff,
  Phone,
  PhoneOff,
  UserPlus,
  Video,
  VideoOff,
  Volume2,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { useApp } from "../context/AppContext";

const PARTICIPANTS = [
  {
    id: "1",
    name: "Rahul Sharma",
    initials: "RS",
    gradient: "linear-gradient(135deg,#3b82f6,#8b5cf6)",
    muted: false,
    speaking: true,
  },
  {
    id: "2",
    name: "Priya Singh",
    initials: "PS",
    gradient: "linear-gradient(135deg,#ec4899,#f97316)",
    muted: true,
    speaking: false,
  },
  {
    id: "3",
    name: "Amit Kumar",
    initials: "AK",
    gradient: "linear-gradient(135deg,#10b981,#3b82f6)",
    muted: false,
    speaking: false,
  },
  {
    id: "4",
    name: "Sneha Patel",
    initials: "SP",
    gradient: "linear-gradient(135deg,#f59e0b,#ef4444)",
    muted: false,
    speaking: false,
  },
  {
    id: "5",
    name: "Raj Verma",
    initials: "RV",
    gradient: "linear-gradient(135deg,#8b5cf6,#ec4899)",
    muted: true,
    speaking: false,
  },
  {
    id: "6",
    name: "You",
    initials: "ME",
    gradient: "linear-gradient(135deg,#0ea5e9,#6366f1)",
    muted: false,
    speaking: false,
  },
];

export default function GroupVideoCall() {
  const { navigate } = useApp();
  const [muted, setMuted] = useState(false);
  const [camOn, setCamOn] = useState(true);
  const [seconds, setSeconds] = useState(0);
  const [speakingId, setSpeakingId] = useState("1");

  useEffect(() => {
    const t = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const ids = PARTICIPANTS.map((p) => p.id);
    const t = setInterval(() => {
      setSpeakingId(ids[Math.floor(Math.random() * ids.length)]);
    }, 2500);
    return () => clearInterval(t);
  }, []);

  const fmt = (s: number) =>
    `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col"
      style={{ background: "#070a10" }}
      data-ocid="group_call.page"
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 pt-10 pb-3">
        <button
          type="button"
          data-ocid="group_call.back_button"
          onClick={() => navigate("/chat")}
          className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center"
        >
          <ArrowLeft size={18} className="text-white" />
        </button>
        <div className="text-center">
          <p className="text-white font-bold text-[15px]">Group Call</p>
          <p className="text-white/50 text-[12px]">
            {PARTICIPANTS.length} participants · {fmt(seconds)}
          </p>
        </div>
        <button
          type="button"
          data-ocid="group_call.add_participant_button"
          className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center"
        >
          <UserPlus size={16} className="text-white" />
        </button>
      </div>

      {/* Grid */}
      <div className="flex-1 grid grid-cols-2 gap-2 px-3 py-2">
        {PARTICIPANTS.map((p) => (
          <motion.div
            key={p.id}
            data-ocid={`group_call.participant.${p.id}`}
            className="relative rounded-2xl overflow-hidden flex items-center justify-center"
            style={{ background: "#111820", minHeight: 120 }}
            animate={speakingId === p.id ? { scale: 1.03 } : { scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            {/* Speaking ring */}
            <AnimatePresence>
              {speakingId === p.id && (
                <motion.div
                  key="ring"
                  className="absolute inset-0 rounded-2xl"
                  style={{ border: "2px solid #3b82f6" }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  exit={{ opacity: 0 }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1 }}
                />
              )}
            </AnimatePresence>

            {/* Avatar */}
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-bold"
              style={{ background: p.gradient }}
            >
              {p.initials}
            </div>

            {/* Name + mic */}
            <div
              className="absolute bottom-0 left-0 right-0 px-2 pb-2 pt-6"
              style={{
                background: "linear-gradient(0deg,rgba(0,0,0,0.7),transparent)",
              }}
            >
              <div className="flex items-center justify-between">
                <span className="text-white text-[11px] font-semibold truncate">
                  {p.name}
                </span>
                {p.muted && <MicOff size={11} className="text-red-400" />}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Controls */}
      <div className="pb-10 px-6 pt-4">
        <div className="flex items-center justify-around">
          <button
            type="button"
            data-ocid="group_call.mute_toggle"
            onClick={() => setMuted((v) => !v)}
            className={`w-14 h-14 rounded-full flex items-center justify-center transition-colors ${
              muted ? "bg-red-500/20 border border-red-500" : "bg-white/10"
            }`}
          >
            {muted ? (
              <MicOff size={22} className="text-red-400" />
            ) : (
              <Mic size={22} className="text-white" />
            )}
          </button>

          <button
            type="button"
            data-ocid="group_call.camera_toggle"
            onClick={() => setCamOn((v) => !v)}
            className={`w-14 h-14 rounded-full flex items-center justify-center transition-colors ${
              !camOn ? "bg-red-500/20 border border-red-500" : "bg-white/10"
            }`}
          >
            {camOn ? (
              <Video size={22} className="text-white" />
            ) : (
              <VideoOff size={22} className="text-red-400" />
            )}
          </button>

          <button
            type="button"
            data-ocid="group_call.speaker_button"
            className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center"
          >
            <Volume2 size={22} className="text-white" />
          </button>

          <button
            type="button"
            data-ocid="group_call.end_call_button"
            onClick={() => navigate("/chat")}
            className="w-16 h-16 rounded-full flex items-center justify-center"
            style={{ background: "linear-gradient(135deg,#ef4444,#b91c1c)" }}
          >
            <PhoneOff size={24} className="text-white" />
          </button>
        </div>

        <button
          type="button"
          data-ocid="group_call.leave_button"
          onClick={() => navigate("/chat")}
          className="mt-4 w-full py-3 rounded-xl bg-white/5 text-white/70 text-[13px] font-medium border border-white/10"
        >
          Leave Call
        </button>
      </div>
    </div>
  );
}
