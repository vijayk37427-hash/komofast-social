import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, CheckCircle2, HelpCircle, Search } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { useApp } from "../context/AppContext";

const ISSUES = [
  {
    id: "upload",
    icon: "📤",
    titleHindi: "Reel अपलोड नहीं हो रही",
    titleEnglish: "Reel Not Uploading",
    category: "Upload",
    steps: [
      "Internet connection check करें (WiFi या 4G)",
      "Video size 500MB से कम रखें",
      "App बंद करके दोबारा खोलें",
      "Browser cache clear करें",
      "दूसरे browser (Chrome) में try करें",
    ],
  },
  {
    id: "audio",
    icon: "🔇",
    titleHindi: "आवाज नहीं आ रही",
    titleEnglish: "Audio Not Working",
    category: "Audio",
    steps: [
      "Phone की volume check करें",
      "Silent/mute mode off करें",
      "Headphone निकालकर देखें",
      "Browser को microphone permission दें",
      "Page reload करें",
    ],
  },
  {
    id: "views",
    icon: "📉",
    titleHindi: "Views कम आ रहे",
    titleEnglish: "Low Views / Reach Drop",
    category: "Reach",
    steps: [
      "Original content बनाएं (copy नहीं)",
      "Trending audio/music use करें",
      "सही hashtags लगाएं",
      "Peak time (7pm-10pm) पर post करें",
      "Regular posting maintain करें",
    ],
  },
  {
    id: "quality",
    icon: "🌫️",
    titleHindi: "वीडियो धुंधली हो रही",
    titleEnglish: "Video Quality Blur",
    category: "Quality",
    steps: [
      "High quality video record करें (1080p)",
      "Upload के time WiFi use करें",
      "Reel settings में 1080p चुनें",
      "Video compress न करें",
      "Good lighting में record करें",
    ],
  },
  {
    id: "crash",
    icon: "💥",
    titleHindi: "ऐप बंद या Hang हो रहा",
    titleEnglish: "App Crash / Freeze",
    category: "Performance",
    steps: [
      "Browser tab बंद करके दोबारा खोलें",
      "Phone restart करें",
      "Browser update करें",
      "Other tabs बंद करें (RAM free करें)",
      "Chrome browser use करें (recommended)",
    ],
  },
  {
    id: "processing",
    icon: "⚙️",
    titleHindi: "Processing में Error",
    titleEnglish: "Reel Processing Failed",
    category: "Upload",
    steps: [
      "Video format MP4 (H.264) use करें",
      "File size check करें (max 500MB)",
      "Stable internet connection रखें",
      "दोबारा upload try करें",
      "Video length 60 seconds से कम रखें",
    ],
  },
  {
    id: "music",
    icon: "🎵",
    titleHindi: "गाना नहीं मिल रहा",
    titleEnglish: "Music Not Available",
    category: "Music",
    steps: [
      "Search में सही spelling type करें",
      "App refresh करें",
      "Music library update होने का wait करें",
      "Different keyword से search करें",
      "खुद का audio upload करें",
    ],
  },
  {
    id: "shadowban",
    icon: "👻",
    titleHindi: "Reel Reach कम हो जाती है",
    titleEnglish: "Shadow Ban Issue",
    category: "Reach",
    steps: [
      "Community guidelines follow करें",
      "Spam behavior बंद करें (बहुत fast liking/commenting)",
      "Banned words use न करें",
      "Copyright music avoid करें",
      "2-3 दिन break लेकर posting resume करें",
    ],
  },
  {
    id: "login",
    icon: "🔐",
    titleHindi: "अकाउंट में Problem",
    titleEnglish: "Login / Account Glitch",
    category: "Account",
    steps: [
      "Correct mobile number enter करें",
      "OTP code: 123456 use करें (demo)",
      "Browser cookies clear करें",
      "Incognito mode में try करें",
      "Support ticket submit करें",
    ],
  },
];

const CATEGORY_COLORS: Record<string, string> = {
  Upload: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  Audio: "bg-orange-500/20 text-orange-300 border-orange-500/30",
  Reach: "bg-purple-500/20 text-purple-300 border-purple-500/30",
  Quality: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
  Performance: "bg-red-500/20 text-red-300 border-red-500/30",
  Music: "bg-green-500/20 text-green-300 border-green-500/30",
  Account: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
};

export default function HelpCenter() {
  const { navigate } = useApp();
  const [search, setSearch] = useState("");

  const filtered = ISSUES.filter((issue) => {
    const q = search.toLowerCase();
    return (
      q === "" ||
      issue.titleHindi.toLowerCase().includes(q) ||
      issue.titleEnglish.toLowerCase().includes(q) ||
      issue.category.toLowerCase().includes(q) ||
      issue.steps.some((s) => s.toLowerCase().includes(q))
    );
  });

  return (
    <div
      className="min-h-screen"
      style={{
        background: "linear-gradient(180deg, #0B0F14 0%, #11161D 100%)",
      }}
    >
      {/* Header */}
      <div
        className="sticky top-0 z-40"
        style={{
          background:
            "linear-gradient(135deg, #1a2744 0%, #1e1040 50%, #1a1f26 100%)",
          borderBottom: "1px solid rgba(168,85,247,0.2)",
          boxShadow: "0 4px 20px rgba(47,168,255,0.15)",
        }}
      >
        <div className="max-w-2xl mx-auto px-4 py-4 flex items-center gap-3">
          <button
            type="button"
            data-ocid="help.back.button"
            onClick={() => navigate("/profile")}
            className="w-9 h-9 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all flex-shrink-0"
          >
            <ArrowLeft size={20} />
          </button>
          <div className="flex items-center gap-2 flex-1">
            <HelpCircle size={22} className="text-komo-blue flex-shrink-0" />
            <div>
              <h1 className="text-[16px] font-bold text-white leading-tight">
                Help Center
              </h1>
              <p className="text-[11px] text-white/50">सहायता केंद्र</p>
            </div>
          </div>
          <Badge className="text-[10px] bg-komo-blue/20 text-komo-blue border-komo-blue/30">
            {ISSUES.length} Issues
          </Badge>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-5 space-y-5">
        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="relative"
        >
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30"
          />
          <Input
            data-ocid="help.search_input"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search problems... / समस्या खोजें..."
            className="pl-9 bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-komo-blue/50 focus:ring-komo-blue/20 rounded-xl h-11"
          />
        </motion.div>

        {/* Results count */}
        {search && (
          <p className="text-[12px] text-white/40">
            {filtered.length} result{filtered.length !== 1 ? "s" : ""} found
          </p>
        )}

        {/* Accordion Issues */}
        {filtered.length > 0 ? (
          <Accordion type="single" collapsible className="space-y-3">
            {filtered.map((issue, idx) => (
              <motion.div
                key={issue.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: idx * 0.05 }}
              >
                <AccordionItem
                  data-ocid={`help.issue.item.${idx + 1}`}
                  value={issue.id}
                  className="rounded-2xl overflow-hidden border-0"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <AccordionTrigger className="px-4 py-4 hover:no-underline hover:bg-white/5 transition-colors [&>svg]:text-white/40">
                    <div className="flex items-center gap-3 text-left flex-1 mr-3">
                      <span className="text-[26px] flex-shrink-0 leading-none">
                        {issue.icon}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="text-[14px] font-semibold text-white leading-snug">
                          {issue.titleHindi}
                        </p>
                        <p className="text-[11px] text-white/40 mt-0.5">
                          {issue.titleEnglish}
                        </p>
                      </div>
                      <Badge
                        className={`text-[10px] flex-shrink-0 ${CATEGORY_COLORS[issue.category] ?? "bg-white/10 text-white/50"}`}
                      >
                        {issue.category}
                      </Badge>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div
                      className="px-4 pb-4 pt-1"
                      style={{
                        borderTop: "1px solid rgba(255,255,255,0.06)",
                      }}
                    >
                      <p className="text-[11px] text-white/40 uppercase tracking-wider mb-3 mt-2">
                        Step-by-step Solution
                      </p>
                      <div className="space-y-2">
                        {issue.steps.map((step, sIdx) => (
                          <motion.div
                            key={step}
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2, delay: sIdx * 0.06 }}
                            className="flex items-start gap-3"
                          >
                            <div
                              className="w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold flex-shrink-0 mt-0.5"
                              style={{
                                background:
                                  "linear-gradient(135deg, rgba(47,168,255,0.3), rgba(168,85,247,0.3))",
                                border: "1px solid rgba(168,85,247,0.4)",
                                color: "#a5c8ff",
                              }}
                            >
                              {sIdx + 1}
                            </div>
                            <p className="text-[13px] text-white/75 leading-snug flex-1">
                              {step}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                      <div
                        className="mt-4 p-3 rounded-xl flex items-center gap-2"
                        style={{
                          background: "rgba(34,197,94,0.08)",
                          border: "1px solid rgba(34,197,94,0.2)",
                        }}
                      >
                        <CheckCircle2
                          size={14}
                          className="text-green-400 flex-shrink-0"
                        />
                        <p className="text-[11px] text-green-300/80">
                          अगर problem solve नहीं हुई तो नीचे Support Ticket भेजें
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        ) : (
          <motion.div
            data-ocid="help.empty_state"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-5xl mb-4">🔍</div>
            <p className="text-white/50 text-[14px]">कोई result नहीं मिला</p>
            <p className="text-white/30 text-[12px] mt-1">
              Try different keywords
            </p>
          </motion.div>
        )}

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="rounded-2xl p-5 text-center"
          style={{
            background:
              "linear-gradient(135deg, rgba(47,168,255,0.12), rgba(168,85,247,0.18))",
            border: "1px solid rgba(168,85,247,0.3)",
          }}
        >
          <div className="text-3xl mb-3">🎧</div>
          <h3 className="text-[15px] font-bold text-white mb-1">
            और मदद चाहिए?
          </h3>
          <p className="text-[12px] text-white/50 mb-4">
            अगर ऊपर की solutions से problem solve नहीं हुई तो Support Team से
            contact करें
          </p>
          <Button
            data-ocid="help.support.primary_button"
            className="komo-gradient border-0 text-white font-semibold px-6 h-10"
            onClick={() => {
              navigate("/admin");
              toast.success("Support section खुल रहा है...");
            }}
          >
            Support Ticket भेजें
          </Button>
        </motion.div>

        {/* Footer */}
        <p className="text-center text-[11px] text-white/20 pb-4">
          © {new Date().getFullYear()}. Built with love using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 hover:text-white/60 transition-colors"
          >
            caffeine.ai
          </a>
        </p>
      </div>
    </div>
  );
}
