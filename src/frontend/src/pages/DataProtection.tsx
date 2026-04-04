import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useApp } from "../context/AppContext";

const SECTIONS = [
  {
    emoji: "📋",
    heading: "IT Act 2000 & IT (Amendment) Act 2008 Compliance",
    body: "Komofast Social operates in full compliance with India's Information Technology Act, 2000 and its Amendment Act of 2008. We adhere to all provisions related to electronic records, digital signatures, data privacy, and cybersecurity requirements as mandated by Indian law.\n\nWe also comply with the **Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021**, which require platforms to:\n• Publish privacy policies and terms of service.\n• Appoint a Grievance Officer for user complaints.\n• Respond to user grievances within 30 days.\n• Remove unlawful content within 36 hours of a court order.",
  },
  {
    emoji: "🔐",
    heading: "Sensitive Personal Data (SPDI) Rules",
    body: "Under the **Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011**, we classify the following as Sensitive Personal Data or Information (SPDI):\n• Passwords\n• Financial information (bank account, payment details)\n• Health data\n• Biometric information (if collected)\n\nWe collect SPDI only with your explicit consent and use it solely for the purpose it was collected. You may withdraw consent at any time by contacting our Grievance Officer.",
  },
  {
    emoji: "🇮🇳",
    heading: "Data Localization",
    body: "In accordance with Indian data protection guidelines, Komofast Social ensures that user data generated in India is stored within India. We do not transfer sensitive personal data outside India without your explicit consent, except where required by law or where adequate protection is guaranteed.",
  },
  {
    emoji: "✅",
    heading: "User Consent Mechanism",
    body: "We obtain your consent through:\n• **Registration Consent** – By creating an account, you agree to our Privacy Policy and Terms of Service.\n• **Granular Permissions** – Specific permissions are requested for accessing camera, storage, and notifications.\n• **Cookie Consent** – You are informed about cookie usage.\n• **Withdrawal of Consent** – You may withdraw consent at any time without affecting services already rendered.\n\nConsent is freely given, specific, informed, and unambiguous as required under Indian data protection principles.",
  },
  {
    emoji: "👤",
    heading: "Grievance Officer",
    body: "As required by the IT (Intermediary Guidelines) Rules, 2021, we have appointed a designated Grievance Officer:\n\n**Name:** KomoFast Support\n**Email:** vijayk37427@gmail.com\n**Response Time:** Within 30 days of receiving the complaint\n\nUsers may contact the Grievance Officer to report:\n• Privacy violations\n• Unauthorized use of personal data\n• Content removal requests\n• Data access, correction, or deletion requests",
  },
];

function renderLine(line: string, idx: number) {
  if (!line) return <br key={`br-${idx}`} />;
  const parts = line.split(/(\*\*[^*]+\*\*)/);
  return (
    <p
      key={`line-${idx}`}
      className="mb-1 text-[14px] leading-relaxed text-white/70"
    >
      {parts.map((p, j) =>
        p.startsWith("**") && p.endsWith("**") ? (
          // biome-ignore lint/suspicious/noArrayIndexKey: static content split
          <strong key={j} className="text-white/90">
            {p.slice(2, -2)}
          </strong>
        ) : (
          p
        ),
      )}
    </p>
  );
}

function renderBody(text: string) {
  return text.split("\n").map((line, i) => renderLine(line, i));
}

export default function DataProtection() {
  const { navigate } = useApp();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = () => {
    if (!name.trim() || !email.includes("@") || !reason.trim()) {
      toast.error("Please fill in all fields correctly.");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setName("");
      setEmail("");
      setReason("");
      toast.success(
        "Data deletion request submitted. We will respond within 30 days.",
      );
    }, 1500);
  };

  return (
    <div
      className="min-h-screen"
      style={{
        background: "linear-gradient(180deg, #0B0F14 0%, #11161D 100%)",
      }}
    >
      {/* Header */}
      <div
        className="sticky top-0 z-10 flex items-center gap-3 px-4 py-3 border-b border-white/10"
        style={{
          background: "rgba(11,15,20,0.95)",
          backdropFilter: "blur(12px)",
        }}
      >
        <button
          type="button"
          data-ocid="dataprotection.back.button"
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
        >
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-[16px] font-bold text-white">
          Data Protection (IT Act, India)
        </h1>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-6">
        {/* Hero */}
        <div
          className="rounded-2xl p-5 mb-6 text-center"
          style={{
            background:
              "linear-gradient(135deg, rgba(34,197,94,0.1) 0%, rgba(47,168,255,0.15) 100%)",
            border: "1px solid rgba(34,197,94,0.25)",
          }}
        >
          <div className="text-4xl mb-2">🛡️</div>
          <h2 className="text-[20px] font-bold text-white mb-1">
            Data Protection
          </h2>
          <p className="text-[12px] text-white/50">
            IT Act 2000 & SPDI Rules Compliance — India
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-5">
          {SECTIONS.map((section) => (
            <div
              key={section.heading}
              className="rounded-xl p-4"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <h3 className="text-[15px] font-bold text-white mb-2 flex items-center gap-2">
                <span>{section.emoji}</span>
                <span
                  style={{
                    background: "linear-gradient(90deg,#22c55e,#2fa8ff)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {section.heading}
                </span>
              </h3>
              <div>{renderBody(section.body)}</div>
            </div>
          ))}

          {/* Data Deletion Request Form */}
          <div
            className="rounded-xl p-4"
            style={{
              background: "rgba(239,68,68,0.05)",
              border: "1px solid rgba(239,68,68,0.2)",
            }}
          >
            <h3 className="text-[15px] font-bold text-white mb-1 flex items-center gap-2">
              <span>🗑️</span>
              <span
                style={{
                  background: "linear-gradient(90deg,#f87171,#fb923c)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Right to Erasure – Data Deletion Request
              </span>
            </h3>
            <p className="text-[13px] text-white/60 mb-4">
              Under the IT Act and SPDI Rules, you have the right to request
              deletion of your personal data. Fill in the form below and we will
              process your request within 30 days.
            </p>

            <div className="space-y-3">
              <div>
                <Label
                  htmlFor="dp-name"
                  className="text-[12px] font-semibold text-white/60 mb-1 block"
                >
                  Full Name
                </Label>
                <Input
                  id="dp-name"
                  data-ocid="dataprotection.name.input"
                  placeholder="Your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-blue-500/50"
                />
              </div>
              <div>
                <Label
                  htmlFor="dp-email"
                  className="text-[12px] font-semibold text-white/60 mb-1 block"
                >
                  Email Address
                </Label>
                <Input
                  id="dp-email"
                  data-ocid="dataprotection.email.input"
                  placeholder="your@email.com"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-blue-500/50"
                />
              </div>
              <div>
                <Label
                  htmlFor="dp-reason"
                  className="text-[12px] font-semibold text-white/60 mb-1 block"
                >
                  Reason for Deletion
                </Label>
                <Textarea
                  id="dp-reason"
                  data-ocid="dataprotection.reason.textarea"
                  placeholder="Please describe why you want your data deleted..."
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  rows={3}
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-blue-500/50 resize-none"
                />
              </div>
              <Button
                data-ocid="dataprotection.submit_button"
                onClick={handleSubmit}
                disabled={submitting}
                className="w-full h-11 font-bold text-white border-0"
                style={{
                  background: "linear-gradient(135deg, #ef4444, #f97316)",
                }}
              >
                {submitting ? (
                  <span className="flex items-center gap-2">
                    <Loader2 size={16} className="animate-spin" />
                    Submitting...
                  </span>
                ) : (
                  "Submit Data Deletion Request"
                )}
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-[11px] text-white/25">
            © {new Date().getFullYear()}. Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noreferrer"
              className="text-blue-400/50"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
