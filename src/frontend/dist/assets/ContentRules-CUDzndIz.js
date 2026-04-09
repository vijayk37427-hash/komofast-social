import { u as useApp, r as reactExports, j as jsxRuntimeExports, m as motion, B as Button } from "./index-BlWpIyR8.js";
import { B as Badge } from "./badge-BChbocV7.js";
import { A as ArrowLeft } from "./arrow-left-C_jsN0fF.js";
import { B as BookOpen } from "./book-open-C7QjeuMA.js";
import { E as ExternalLink } from "./external-link-DFH2B-hl.js";
const RULES = [
  {
    icon: "🚫",
    en: {
      title: "No Hate Speech",
      dont: "Using slurs, targeting religion, caste, gender, or ethnicity",
      do: "Engaging in respectful political debate and cultural discussion"
    },
    hi: {
      title: "नफरत भरे भाषण पर प्रतिबंध",
      dont: "जाति, धर्म, लिंग या नस्ल को लक्षित करने वाली भाषा का उपयोग करना",
      do: "सम्मानजनक राजनीतिक बहस और सांस्कृतिक चर्चा में भाग लेना"
    },
    level: "High"
  },
  {
    icon: "📢",
    en: {
      title: "No Spam",
      dont: "Mass self-promotion, buying fake likes, or repeated unsolicited posts",
      do: "Occasionally sharing your own content with followers who opted in"
    },
    hi: {
      title: "स्पैम की अनुमति नहीं",
      dont: "बड़े पैमाने पर आत्म-प्रचार, नकली लाइक खरीदना या बार-बार अनचाही पोस्ट",
      do: "अपनी सामग्री को केवल अनुसरणकर्ताओं के साथ कभी-कभी साझा करना"
    },
    level: "Low"
  },
  {
    icon: "©",
    en: {
      title: "No Copyright Infringement",
      dont: "Posting copyrighted music, videos, or images without permission",
      do: "Creating original content or using properly licensed material"
    },
    hi: {
      title: "कॉपीराइट उल्लंघन नहीं",
      dont: "बिना अनुमति के कॉपीराइट संगीत, वीडियो या छवियां पोस्ट करना",
      do: "मूल सामग्री बनाना या उचित लाइसेंस प्राप्त सामग्री का उपयोग करना"
    },
    level: "Medium"
  },
  {
    icon: "🔞",
    en: {
      title: "No Adult / Sexual Content",
      dont: "Nudity, sexually explicit content, or exploitative material",
      do: "Educational health content, anatomy in scientific context"
    },
    hi: {
      title: "अश्लील/यौन सामग्री की अनुमति नहीं",
      dont: "नग्नता, यौन रूप से स्पष्ट सामग्री या शोषणकारी सामग्री",
      do: "शैक्षणिक स्वास्थ्य सामग्री, वैज्ञानिक संदर्भ में शरीर रचना"
    },
    level: "High"
  },
  {
    icon: "❌",
    en: {
      title: "No Misinformation",
      dont: "Spreading fake news, AI-generated deepfakes, or manipulated media",
      do: "Citing credible, verified sources when sharing news or facts"
    },
    hi: {
      title: "गलत सूचना नहीं",
      dont: "फर्जी खबरें, AI-निर्मित डीपफेक, या भ्रामक मीडिया फैलाना",
      do: "समाचार या तथ्य साझा करते समय विश्वसनीय, सत्यापित स्रोतों का हवाला देना"
    },
    level: "High"
  },
  {
    icon: "⚠️",
    en: {
      title: "No Self-Harm Promotion",
      dont: "Glorifying violence, self-harm, suicide, or dangerous challenges",
      do: "Sharing mental health awareness content and support resources"
    },
    hi: {
      title: "आत्म-नुकसान का प्रचार नहीं",
      dont: "हिंसा, आत्म-नुकसान, आत्महत्या, या खतरनाक चुनौतियों का महिमामंडन",
      do: "मानसिक स्वास्थ्य जागरूकता और सहायता संसाधन साझा करना"
    },
    level: "High"
  },
  {
    icon: "🔓",
    en: {
      title: "No Doxxing",
      dont: "Posting someone's private address, phone, or personal information",
      do: "Sharing only publicly available info about public figures in news context"
    },
    hi: {
      title: "डॉक्सिंग नहीं",
      dont: "किसी का निजी पता, फोन नंबर, या व्यक्तिगत जानकारी पोस्ट करना",
      do: "सार्वजनिक हस्तियों के बारे में केवल सार्वजनिक रूप से उपलब्ध जानकारी साझा करना"
    },
    level: "High"
  },
  {
    icon: "👤",
    en: {
      title: "No Impersonation",
      dont: "Creating fake celebrity, brand, or government accounts to deceive",
      do: "Fan accounts clearly labeled as 'fan page' or 'parody'"
    },
    hi: {
      title: "प्रतिरूपण की अनुमति नहीं",
      dont: "धोखा देने के लिए नकली सेलेब्रिटी, ब्रांड, या सरकारी खाते बनाना",
      do: "'फैन पेज' या 'पैरोडी' के रूप में स्पष्ट रूप से लेबल किए गए फैन अकाउंट"
    },
    level: "Medium"
  }
];
const LEVEL_STYLE = {
  Low: {
    label: "Low — Warning",
    labelHi: "कम — चेतावनी",
    badge: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
    dot: "#fbbf24"
  },
  Medium: {
    label: "Medium — Suspension",
    labelHi: "मध्यम — निलंबन",
    badge: "bg-orange-500/20 text-orange-300 border-orange-500/30",
    dot: "#f97316"
  },
  High: {
    label: "High — Permanent Ban",
    labelHi: "उच्च — स्थायी प्रतिबंध",
    badge: "bg-red-500/20 text-red-300 border-red-500/30",
    dot: "#f87171"
  }
};
function ContentRules() {
  const { navigate } = useApp();
  const [lang, setLang] = reactExports.useState("en");
  const isHi = lang === "hi";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "min-h-screen",
      style: {
        background: "linear-gradient(180deg, #0B0F14 0%, #11161D 100%)"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "sticky top-0 z-40",
            style: {
              background: "linear-gradient(135deg, #1a2744 0%, #1e1040 50%, #1a1f26 100%)",
              borderBottom: "1px solid rgba(168,85,247,0.2)",
              boxShadow: "0 4px 20px rgba(47,168,255,0.15)"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto px-4 py-4 flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  "data-ocid": "content_rules.back.button",
                  onClick: () => navigate("/profile"),
                  className: "w-9 h-9 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all flex-shrink-0",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 20 })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { size: 20, className: "text-komo-blue flex-shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-[16px] font-bold text-white leading-tight", children: isHi ? "सामग्री नियम" : "Content Rules" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-white/50", children: isHi ? "8 नियम — क्या करें और क्या नहीं" : "8 Rules — Do's & Don'ts" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  "data-ocid": "content_rules.lang.toggle",
                  className: "flex items-center gap-1 px-3 py-1.5 rounded-full text-[11px] font-semibold transition-all",
                  style: {
                    background: "linear-gradient(135deg, rgba(47,168,255,0.2), rgba(168,85,247,0.25))",
                    border: "1px solid rgba(168,85,247,0.35)",
                    color: "#d0baff"
                  },
                  onClick: () => setLang(lang === "en" ? "hi" : "en"),
                  children: [
                    "🌐 ",
                    isHi ? "English" : "हिंदी"
                  ]
                }
              )
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto px-4 py-5 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.p,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              className: "text-[12px] text-white/50 leading-relaxed px-1",
              children: isHi ? "KomoFast एक सुरक्षित समुदाय बनाए रखने के लिए प्रतिबद्ध है। नीचे दिए गए नियमों का उल्लंघन करने पर आपके खाते पर कार्रवाई की जा सकती है।" : "KomoFast is committed to maintaining a safe community. Violating the rules below may result in action on your account."
            }
          ),
          RULES.map((rule, idx) => {
            const ruleText = isHi ? rule.hi : rule.en;
            const levelInfo = LEVEL_STYLE[rule.level];
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                "data-ocid": `content_rules.rule.item.${idx + 1}`,
                initial: { opacity: 0, y: 16 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.25, delay: idx * 0.04 },
                className: "rounded-2xl overflow-hidden",
                style: {
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "px-4 py-3.5 flex items-center justify-between gap-3",
                      style: {
                        background: "linear-gradient(135deg, rgba(47,168,255,0.06), rgba(168,85,247,0.08))",
                        borderBottom: "1px solid rgba(255,255,255,0.05)"
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[24px] leading-none flex-shrink-0", children: rule.icon }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[14px] font-bold text-white leading-snug", children: ruleText.title }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-white/35 mt-0.5", children: [
                              "Rule ",
                              idx + 1,
                              " of ",
                              RULES.length
                            ] })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          Badge,
                          {
                            className: `text-[10px] flex-shrink-0 ${levelInfo.badge}`,
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "span",
                                {
                                  className: "w-1.5 h-1.5 rounded-full mr-1 inline-block",
                                  style: { background: levelInfo.dot }
                                }
                              ),
                              isHi ? levelInfo.labelHi : levelInfo.label
                            ]
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-4 space-y-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-[12px] font-bold",
                          style: {
                            background: "rgba(239,68,68,0.15)",
                            border: "1px solid rgba(239,68,68,0.3)",
                            color: "#f87171"
                          },
                          children: "✗"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-white/70 leading-snug", children: ruleText.dont })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-[12px] font-bold",
                          style: {
                            background: "rgba(34,197,94,0.15)",
                            border: "1px solid rgba(34,197,94,0.3)",
                            color: "#4ade80"
                          },
                          children: "✓"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-white/70 leading-snug", children: ruleText.do })
                    ] })
                  ] })
                ]
              },
              rule.en.title
            );
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 12 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.3, delay: 0.4 },
              className: "rounded-2xl p-5 space-y-3",
              style: {
                background: "linear-gradient(135deg, rgba(47,168,255,0.1), rgba(168,85,247,0.14))",
                border: "1px solid rgba(168,85,247,0.3)"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "⚖️" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[14px] font-bold text-white mb-1", children: isHi ? "सामग्री हटाई गई? अपील करें" : "Content Removed? You Can Appeal" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-white/60 leading-relaxed", children: isHi ? "यदि आपकी सामग्री गलती से हटाई गई है, तो आप 30 दिनों के भीतर Help Center के माध्यम से अपील कर सकते हैं।" : "If your content was removed in error, you can appeal within 30 days via the Help Center." })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 flex-wrap", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      "data-ocid": "content_rules.help_center.link_button",
                      size: "sm",
                      onClick: () => navigate("/help"),
                      className: "h-8 text-[12px] font-semibold text-white border-0 flex items-center gap-1.5",
                      style: {
                        background: "linear-gradient(135deg, rgba(47,168,255,0.35), rgba(168,85,247,0.4))"
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { size: 12 }),
                        isHi ? "Help Center" : "Help Center"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      "data-ocid": "content_rules.file_complaint.link_button",
                      size: "sm",
                      variant: "outline",
                      onClick: () => navigate("/complaints"),
                      className: "h-8 text-[12px] font-semibold border-white/20 text-white/70 hover:bg-white/5 flex items-center gap-1.5",
                      children: [
                        "📋 ",
                        isHi ? "शिकायत दर्ज करें" : "File a Complaint"
                      ]
                    }
                  )
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { delay: 0.5 },
              className: "rounded-2xl p-4 space-y-2.5",
              style: {
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-white/40 uppercase tracking-wider", children: isHi ? "परिणाम स्तर" : "Consequence Levels" }),
                Object.entries(LEVEL_STYLE).map(([level, info]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "w-2.5 h-2.5 rounded-full flex-shrink-0",
                      style: { background: info.dot }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: `text-[10px] ${info.badge}`, children: level }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12px] text-white/50", children: isHi ? info.labelHi : info.label })
                ] }, level))
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-center text-[11px] text-white/20 pb-4", children: [
            "© ",
            (/* @__PURE__ */ new Date()).getFullYear(),
            ". Built with love using",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "text-white/40 hover:text-white/60 transition-colors",
                children: "caffeine.ai"
              }
            )
          ] })
        ] })
      ]
    }
  );
}
export {
  ContentRules as default
};
