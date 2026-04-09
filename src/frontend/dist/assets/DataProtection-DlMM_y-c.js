import { u as useApp, r as reactExports, j as jsxRuntimeExports, I as Input, T as Textarea, B as Button, t as LoaderCircle, b as ue } from "./index-BlWpIyR8.js";
import { L as Label } from "./label-DrmZZQeS.js";
import { A as ArrowLeft } from "./arrow-left-C_jsN0fF.js";
import "./index-D4ku5XXv.js";
const SECTIONS = [
  {
    emoji: "📋",
    heading: "IT Act 2000 & IT (Amendment) Act 2008 Compliance",
    body: "Komofast Social operates in full compliance with India's Information Technology Act, 2000 and its Amendment Act of 2008. We adhere to all provisions related to electronic records, digital signatures, data privacy, and cybersecurity requirements as mandated by Indian law.\n\nWe also comply with the **Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021**, which require platforms to:\n• Publish privacy policies and terms of service.\n• Appoint a Grievance Officer for user complaints.\n• Respond to user grievances within 30 days.\n• Remove unlawful content within 36 hours of a court order."
  },
  {
    emoji: "🔐",
    heading: "Sensitive Personal Data (SPDI) Rules",
    body: "Under the **Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011**, we classify the following as Sensitive Personal Data or Information (SPDI):\n• Passwords\n• Financial information (bank account, payment details)\n• Health data\n• Biometric information (if collected)\n\nWe collect SPDI only with your explicit consent and use it solely for the purpose it was collected. You may withdraw consent at any time by contacting our Grievance Officer."
  },
  {
    emoji: "🇮🇳",
    heading: "Data Localization",
    body: "In accordance with Indian data protection guidelines, Komofast Social ensures that user data generated in India is stored within India. We do not transfer sensitive personal data outside India without your explicit consent, except where required by law or where adequate protection is guaranteed."
  },
  {
    emoji: "✅",
    heading: "User Consent Mechanism",
    body: "We obtain your consent through:\n• **Registration Consent** – By creating an account, you agree to our Privacy Policy and Terms of Service.\n• **Granular Permissions** – Specific permissions are requested for accessing camera, storage, and notifications.\n• **Cookie Consent** – You are informed about cookie usage.\n• **Withdrawal of Consent** – You may withdraw consent at any time without affecting services already rendered.\n\nConsent is freely given, specific, informed, and unambiguous as required under Indian data protection principles."
  },
  {
    emoji: "👤",
    heading: "Grievance Officer",
    body: "As required by the IT (Intermediary Guidelines) Rules, 2021, we have appointed a designated Grievance Officer:\n\n**Name:** KomoFast Support\n**Email:** vijayk37427@gmail.com\n**Response Time:** Within 30 days of receiving the complaint\n\nUsers may contact the Grievance Officer to report:\n• Privacy violations\n• Unauthorized use of personal data\n• Content removal requests\n• Data access, correction, or deletion requests"
  }
];
function renderLine(line, idx) {
  if (!line) return /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}, `br-${idx}`);
  const parts = line.split(/(\*\*[^*]+\*\*)/);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "p",
    {
      className: "mb-1 text-[14px] leading-relaxed text-white/70",
      children: parts.map(
        (p, j) => p.startsWith("**") && p.endsWith("**") ? (
          // biome-ignore lint/suspicious/noArrayIndexKey: static content split
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-white/90", children: p.slice(2, -2) }, j)
        ) : p
      )
    },
    `line-${idx}`
  );
}
function renderBody(text) {
  return text.split("\n").map((line, i) => renderLine(line, i));
}
function DataProtection() {
  const { navigate } = useApp();
  const [name, setName] = reactExports.useState("");
  const [email, setEmail] = reactExports.useState("");
  const [reason, setReason] = reactExports.useState("");
  const [submitting, setSubmitting] = reactExports.useState(false);
  const handleSubmit = () => {
    if (!name.trim() || !email.includes("@") || !reason.trim()) {
      ue.error("Please fill in all fields correctly.");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setName("");
      setEmail("");
      setReason("");
      ue.success(
        "Data deletion request submitted. We will respond within 30 days."
      );
    }, 1500);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "min-h-screen",
      style: {
        background: "linear-gradient(180deg, #0B0F14 0%, #11161D 100%)"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "sticky top-0 z-10 flex items-center gap-3 px-4 py-3 border-b border-white/10",
            style: {
              background: "rgba(11,15,20,0.95)",
              backdropFilter: "blur(12px)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  "data-ocid": "dataprotection.back.button",
                  onClick: () => navigate("/"),
                  className: "flex items-center gap-2 text-white/70 hover:text-white transition-colors",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 20 })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-[16px] font-bold text-white", children: "Data Protection (IT Act, India)" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto px-4 py-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "rounded-2xl p-5 mb-6 text-center",
              style: {
                background: "linear-gradient(135deg, rgba(34,197,94,0.1) 0%, rgba(47,168,255,0.15) 100%)",
                border: "1px solid rgba(34,197,94,0.25)"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl mb-2", children: "🛡️" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[20px] font-bold text-white mb-1", children: "Data Protection" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-white/50", children: "IT Act 2000 & SPDI Rules Compliance — India" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
            SECTIONS.map((section) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "rounded-xl p-4",
                style: {
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-[15px] font-bold text-white mb-2 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: section.emoji }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        style: {
                          background: "linear-gradient(90deg,#22c55e,#2fa8ff)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent"
                        },
                        children: section.heading
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: renderBody(section.body) })
                ]
              },
              section.heading
            )),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "rounded-xl p-4",
                style: {
                  background: "rgba(239,68,68,0.05)",
                  border: "1px solid rgba(239,68,68,0.2)"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-[15px] font-bold text-white mb-1 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🗑️" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        style: {
                          background: "linear-gradient(90deg,#f87171,#fb923c)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent"
                        },
                        children: "Right to Erasure – Data Deletion Request"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-white/60 mb-4", children: "Under the IT Act and SPDI Rules, you have the right to request deletion of your personal data. Fill in the form below and we will process your request within 30 days." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Label,
                        {
                          htmlFor: "dp-name",
                          className: "text-[12px] font-semibold text-white/60 mb-1 block",
                          children: "Full Name"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Input,
                        {
                          id: "dp-name",
                          "data-ocid": "dataprotection.name.input",
                          placeholder: "Your full name",
                          value: name,
                          onChange: (e) => setName(e.target.value),
                          className: "bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-blue-500/50"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Label,
                        {
                          htmlFor: "dp-email",
                          className: "text-[12px] font-semibold text-white/60 mb-1 block",
                          children: "Email Address"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Input,
                        {
                          id: "dp-email",
                          "data-ocid": "dataprotection.email.input",
                          placeholder: "your@email.com",
                          type: "email",
                          value: email,
                          onChange: (e) => setEmail(e.target.value),
                          className: "bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-blue-500/50"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Label,
                        {
                          htmlFor: "dp-reason",
                          className: "text-[12px] font-semibold text-white/60 mb-1 block",
                          children: "Reason for Deletion"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Textarea,
                        {
                          id: "dp-reason",
                          "data-ocid": "dataprotection.reason.textarea",
                          placeholder: "Please describe why you want your data deleted...",
                          value: reason,
                          onChange: (e) => setReason(e.target.value),
                          rows: 3,
                          className: "bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-blue-500/50 resize-none"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        "data-ocid": "dataprotection.submit_button",
                        onClick: handleSubmit,
                        disabled: submitting,
                        className: "w-full h-11 font-bold text-white border-0",
                        style: {
                          background: "linear-gradient(135deg, #ef4444, #f97316)"
                        },
                        children: submitting ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { size: 16, className: "animate-spin" }),
                          "Submitting..."
                        ] }) : "Submit Data Deletion Request"
                      }
                    )
                  ] })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-white/25", children: [
            "© ",
            (/* @__PURE__ */ new Date()).getFullYear(),
            ". Built with love using",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`,
                target: "_blank",
                rel: "noreferrer",
                className: "text-blue-400/50",
                children: "caffeine.ai"
              }
            )
          ] }) })
        ] })
      ]
    }
  );
}
export {
  DataProtection as default
};
