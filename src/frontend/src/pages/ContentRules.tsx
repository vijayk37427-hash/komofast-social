import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen, ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { useApp } from "../context/AppContext";

type Lang = "en" | "hi";

const RULES = [
  {
    icon: "🚫",
    en: {
      title: "No Hate Speech",
      dont: "Using slurs, targeting religion, caste, gender, or ethnicity",
      do: "Engaging in respectful political debate and cultural discussion",
    },
    hi: {
      title: "नफरत भरे भाषण पर प्रतिबंध",
      dont: "जाति, धर्म, लिंग या नस्ल को लक्षित करने वाली भाषा का उपयोग करना",
      do: "सम्मानजनक राजनीतिक बहस और सांस्कृतिक चर्चा में भाग लेना",
    },
    level: "High",
  },
  {
    icon: "📢",
    en: {
      title: "No Spam",
      dont: "Mass self-promotion, buying fake likes, or repeated unsolicited posts",
      do: "Occasionally sharing your own content with followers who opted in",
    },
    hi: {
      title: "स्पैम की अनुमति नहीं",
      dont: "बड़े पैमाने पर आत्म-प्रचार, नकली लाइक खरीदना या बार-बार अनचाही पोस्ट",
      do: "अपनी सामग्री को केवल अनुसरणकर्ताओं के साथ कभी-कभी साझा करना",
    },
    level: "Low",
  },
  {
    icon: "©",
    en: {
      title: "No Copyright Infringement",
      dont: "Posting copyrighted music, videos, or images without permission",
      do: "Creating original content or using properly licensed material",
    },
    hi: {
      title: "कॉपीराइट उल्लंघन नहीं",
      dont: "बिना अनुमति के कॉपीराइट संगीत, वीडियो या छवियां पोस्ट करना",
      do: "मूल सामग्री बनाना या उचित लाइसेंस प्राप्त सामग्री का उपयोग करना",
    },
    level: "Medium",
  },
  {
    icon: "🔞",
    en: {
      title: "No Adult / Sexual Content",
      dont: "Nudity, sexually explicit content, or exploitative material",
      do: "Educational health content, anatomy in scientific context",
    },
    hi: {
      title: "अश्लील/यौन सामग्री की अनुमति नहीं",
      dont: "नग्नता, यौन रूप से स्पष्ट सामग्री या शोषणकारी सामग्री",
      do: "शैक्षणिक स्वास्थ्य सामग्री, वैज्ञानिक संदर्भ में शरीर रचना",
    },
    level: "High",
  },
  {
    icon: "❌",
    en: {
      title: "No Misinformation",
      dont: "Spreading fake news, AI-generated deepfakes, or manipulated media",
      do: "Citing credible, verified sources when sharing news or facts",
    },
    hi: {
      title: "गलत सूचना नहीं",
      dont: "फर्जी खबरें, AI-निर्मित डीपफेक, या भ्रामक मीडिया फैलाना",
      do: "समाचार या तथ्य साझा करते समय विश्वसनीय, सत्यापित स्रोतों का हवाला देना",
    },
    level: "High",
  },
  {
    icon: "⚠️",
    en: {
      title: "No Self-Harm Promotion",
      dont: "Glorifying violence, self-harm, suicide, or dangerous challenges",
      do: "Sharing mental health awareness content and support resources",
    },
    hi: {
      title: "आत्म-नुकसान का प्रचार नहीं",
      dont: "हिंसा, आत्म-नुकसान, आत्महत्या, या खतरनाक चुनौतियों का महिमामंडन",
      do: "मानसिक स्वास्थ्य जागरूकता और सहायता संसाधन साझा करना",
    },
    level: "High",
  },
  {
    icon: "🔓",
    en: {
      title: "No Doxxing",
      dont: "Posting someone's private address, phone, or personal information",
      do: "Sharing only publicly available info about public figures in news context",
    },
    hi: {
      title: "डॉक्सिंग नहीं",
      dont: "किसी का निजी पता, फोन नंबर, या व्यक्तिगत जानकारी पोस्ट करना",
      do: "सार्वजनिक हस्तियों के बारे में केवल सार्वजनिक रूप से उपलब्ध जानकारी साझा करना",
    },
    level: "High",
  },
  {
    icon: "👤",
    en: {
      title: "No Impersonation",
      dont: "Creating fake celebrity, brand, or government accounts to deceive",
      do: "Fan accounts clearly labeled as 'fan page' or 'parody'",
    },
    hi: {
      title: "प्रतिरूपण की अनुमति नहीं",
      dont: "धोखा देने के लिए नकली सेलेब्रिटी, ब्रांड, या सरकारी खाते बनाना",
      do: "'फैन पेज' या 'पैरोडी' के रूप में स्पष्ट रूप से लेबल किए गए फैन अकाउंट",
    },
    level: "Medium",
  },
];

const LEVEL_STYLE: Record<
  string,
  { label: string; labelHi: string; badge: string; dot: string }
> = {
  Low: {
    label: "Low — Warning",
    labelHi: "कम — चेतावनी",
    badge: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
    dot: "#fbbf24",
  },
  Medium: {
    label: "Medium — Suspension",
    labelHi: "मध्यम — निलंबन",
    badge: "bg-orange-500/20 text-orange-300 border-orange-500/30",
    dot: "#f97316",
  },
  High: {
    label: "High — Permanent Ban",
    labelHi: "उच्च — स्थायी प्रतिबंध",
    badge: "bg-red-500/20 text-red-300 border-red-500/30",
    dot: "#f87171",
  },
};

export default function ContentRules() {
  const { navigate } = useApp();
  const [lang, setLang] = useState<Lang>("en");
  const isHi = lang === "hi";

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
            data-ocid="content_rules.back.button"
            onClick={() => navigate("/profile")}
            className="w-9 h-9 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all flex-shrink-0"
          >
            <ArrowLeft size={20} />
          </button>
          <div className="flex items-center gap-2 flex-1">
            <BookOpen size={20} className="text-komo-blue flex-shrink-0" />
            <div>
              <h1 className="text-[16px] font-bold text-white leading-tight">
                {isHi ? "सामग्री नियम" : "Content Rules"}
              </h1>
              <p className="text-[11px] text-white/50">
                {isHi
                  ? "8 नियम — क्या करें और क्या नहीं"
                  : "8 Rules — Do's & Don'ts"}
              </p>
            </div>
          </div>
          <button
            type="button"
            data-ocid="content_rules.lang.toggle"
            className="flex items-center gap-1 px-3 py-1.5 rounded-full text-[11px] font-semibold transition-all"
            style={{
              background:
                "linear-gradient(135deg, rgba(47,168,255,0.2), rgba(168,85,247,0.25))",
              border: "1px solid rgba(168,85,247,0.35)",
              color: "#d0baff",
            }}
            onClick={() => setLang(lang === "en" ? "hi" : "en")}
          >
            🌐 {isHi ? "English" : "हिंदी"}
          </button>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-5 space-y-4">
        {/* Intro */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-[12px] text-white/50 leading-relaxed px-1"
        >
          {isHi
            ? "KomoFast एक सुरक्षित समुदाय बनाए रखने के लिए प्रतिबद्ध है। नीचे दिए गए नियमों का उल्लंघन करने पर आपके खाते पर कार्रवाई की जा सकती है।"
            : "KomoFast is committed to maintaining a safe community. Violating the rules below may result in action on your account."}
        </motion.p>

        {/* Rules list */}
        {RULES.map((rule, idx) => {
          const ruleText = isHi ? rule.hi : rule.en;
          const levelInfo = LEVEL_STYLE[rule.level];
          return (
            <motion.div
              key={rule.en.title}
              data-ocid={`content_rules.rule.item.${idx + 1}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: idx * 0.04 }}
              className="rounded-2xl overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {/* Rule header */}
              <div
                className="px-4 py-3.5 flex items-center justify-between gap-3"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(47,168,255,0.06), rgba(168,85,247,0.08))",
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <div className="flex items-center gap-3">
                  <span className="text-[24px] leading-none flex-shrink-0">
                    {rule.icon}
                  </span>
                  <div>
                    <p className="text-[14px] font-bold text-white leading-snug">
                      {ruleText.title}
                    </p>
                    <p className="text-[10px] text-white/35 mt-0.5">
                      Rule {idx + 1} of {RULES.length}
                    </p>
                  </div>
                </div>
                <Badge
                  className={`text-[10px] flex-shrink-0 ${levelInfo.badge}`}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full mr-1 inline-block"
                    style={{ background: levelInfo.dot }}
                  />
                  {isHi ? levelInfo.labelHi : levelInfo.label}
                </Badge>
              </div>

              {/* Do / Don't */}
              <div className="px-4 py-4 space-y-3">
                <div className="flex items-start gap-3">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-[12px] font-bold"
                    style={{
                      background: "rgba(239,68,68,0.15)",
                      border: "1px solid rgba(239,68,68,0.3)",
                      color: "#f87171",
                    }}
                  >
                    ✗
                  </div>
                  <p className="text-[13px] text-white/70 leading-snug">
                    {ruleText.dont}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-[12px] font-bold"
                    style={{
                      background: "rgba(34,197,94,0.15)",
                      border: "1px solid rgba(34,197,94,0.3)",
                      color: "#4ade80",
                    }}
                  >
                    ✓
                  </div>
                  <p className="text-[13px] text-white/70 leading-snug">
                    {ruleText.do}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}

        {/* Appeal info */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="rounded-2xl p-5 space-y-3"
          style={{
            background:
              "linear-gradient(135deg, rgba(47,168,255,0.1), rgba(168,85,247,0.14))",
            border: "1px solid rgba(168,85,247,0.3)",
          }}
        >
          <div className="flex items-start gap-3">
            <span className="text-2xl">⚖️</span>
            <div>
              <h3 className="text-[14px] font-bold text-white mb-1">
                {isHi
                  ? "सामग्री हटाई गई? अपील करें"
                  : "Content Removed? You Can Appeal"}
              </h3>
              <p className="text-[12px] text-white/60 leading-relaxed">
                {isHi
                  ? "यदि आपकी सामग्री गलती से हटाई गई है, तो आप 30 दिनों के भीतर Help Center के माध्यम से अपील कर सकते हैं।"
                  : "If your content was removed in error, you can appeal within 30 days via the Help Center."}
              </p>
            </div>
          </div>
          <div className="flex gap-2 flex-wrap">
            <Button
              data-ocid="content_rules.help_center.link_button"
              size="sm"
              onClick={() => navigate("/help")}
              className="h-8 text-[12px] font-semibold text-white border-0 flex items-center gap-1.5"
              style={{
                background:
                  "linear-gradient(135deg, rgba(47,168,255,0.35), rgba(168,85,247,0.4))",
              }}
            >
              <ExternalLink size={12} />
              {isHi ? "Help Center" : "Help Center"}
            </Button>
            <Button
              data-ocid="content_rules.file_complaint.link_button"
              size="sm"
              variant="outline"
              onClick={() => navigate("/complaints")}
              className="h-8 text-[12px] font-semibold border-white/20 text-white/70 hover:bg-white/5 flex items-center gap-1.5"
            >
              📋 {isHi ? "शिकायत दर्ज करें" : "File a Complaint"}
            </Button>
          </div>
        </motion.div>

        {/* Consequences legend */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="rounded-2xl p-4 space-y-2.5"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          <p className="text-[11px] text-white/40 uppercase tracking-wider">
            {isHi ? "परिणाम स्तर" : "Consequence Levels"}
          </p>
          {Object.entries(LEVEL_STYLE).map(([level, info]) => (
            <div key={level} className="flex items-center gap-3">
              <div
                className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                style={{ background: info.dot }}
              />
              <Badge className={`text-[10px] ${info.badge}`}>{level}</Badge>
              <span className="text-[12px] text-white/50">
                {isHi ? info.labelHi : info.label}
              </span>
            </div>
          ))}
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
