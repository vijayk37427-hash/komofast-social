import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowLeft,
  CheckCircle2,
  ClipboardList,
  Clock,
  FileText,
  Search,
  Shield,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { useApp } from "../context/AppContext";

type Lang = "en" | "hi";

const T = {
  en: {
    title: "Complaint System",
    subtitle: "File a Formal Complaint",
    itAct:
      "Complaints processed under IT Act 2000, Section 79 — Intermediary Guidelines",
    toggleHindi: "हिंदी",
    toggleEnglish: "English",
    tabFile: "File Complaint",
    tabTrack: "Track Status",
    complaintType: "Complaint Type",
    selectType: "Select complaint type",
    target: "Target User / Post ID",
    targetPlaceholder: "e.g. @username or Post #12345",
    description: "Description",
    descPlaceholder: "Describe the issue in detail (minimum 20 characters)…",
    email: "Contact Email (Optional)",
    emailPlaceholder: "your@email.com",
    submit: "Submit Complaint",
    submitting: "Submitting…",
    successTitle: "Complaint Submitted!",
    successSub: "Your complaint has been received.",
    ticketId: "Ticket ID",
    status: "Status",
    resolution: "Estimated Resolution",
    resolutionVal: "10 business days",
    trackBtn: "Track My Complaint",
    trackTitle: "Track Complaint Status",
    trackPlaceholder: "Enter Ticket ID (e.g. KMF-20240407-1234)",
    trackSearch: "Search",
    sampleTickets: "Demo Tickets",
    errType: "Please select a complaint type",
    errTarget: "Please enter the target user or post ID",
    errDesc: "Description must be at least 20 characters",
    timeline: "Status Timeline",
    fieldRequired: "Required",
  },
  hi: {
    title: "शिकायत प्रणाली",
    subtitle: "औपचारिक शिकायत दर्ज करें",
    itAct:
      "IT अधिनियम 2000, धारा 79 — मध्यस्थ दिशानिर्देशों के तहत शिकायतें संसाधित की जाती हैं",
    toggleHindi: "हिंदी",
    toggleEnglish: "English",
    tabFile: "शिकायत दर्ज करें",
    tabTrack: "स्थिति ट्रैक करें",
    complaintType: "शिकायत का प्रकार",
    selectType: "शिकायत का प्रकार चुनें",
    target: "लक्षित उपयोगकर्ता / पोस्ट ID",
    targetPlaceholder: "जैसे @username या Post #12345",
    description: "विवरण",
    descPlaceholder: "समस्या का विस्तार से वर्णन करें (न्यूनतम 20 वर्ण)…",
    email: "संपर्क ईमेल (वैकल्पिक)",
    emailPlaceholder: "आपका@email.com",
    submit: "शिकायत सबमिट करें",
    submitting: "सबमिट हो रहा है…",
    successTitle: "शिकायत सबमिट हो गई!",
    successSub: "आपकी शिकायत प्राप्त हो गई है।",
    ticketId: "टिकट ID",
    status: "स्थिति",
    resolution: "अनुमानित समाधान",
    resolutionVal: "10 कार्य दिवस",
    trackBtn: "शिकायत ट्रैक करें",
    trackTitle: "शिकायत की स्थिति ट्रैक करें",
    trackPlaceholder: "टिकट ID दर्ज करें (जैसे KMF-20240407-1234)",
    trackSearch: "खोजें",
    sampleTickets: "डेमो टिकट",
    errType: "कृपया शिकायत का प्रकार चुनें",
    errTarget: "कृपया लक्षित उपयोगकर्ता या पोस्ट ID दर्ज करें",
    errDesc: "विवरण कम से कम 20 वर्ण होना चाहिए",
    timeline: "स्थिति समयरेखा",
    fieldRequired: "आवश्यक",
  },
};

const COMPLAINT_TYPES = [
  { en: "Content Violation", hi: "सामग्री उल्लंघन" },
  { en: "Harassment", hi: "उत्पीड़न" },
  { en: "Scam / Fraud", hi: "धोखाधड़ी / घोटाला" },
  { en: "Copyright Infringement", hi: "कॉपीराइट उल्लंघन" },
  { en: "Impersonation", hi: "प्रतिरूपण" },
  { en: "Other", hi: "अन्य" },
];

const DEMO_TICKETS = [
  {
    id: "KMF-20260401-2847",
    type: "Harassment",
    status: "Under Review",
    submitted: "Apr 1, 2026",
    timeline: [
      { step: "Submitted", date: "Apr 1, 2026", done: true },
      { step: "Under Review", date: "Apr 3, 2026", done: true },
      { step: "Resolved / Dismissed", date: "Pending", done: false },
    ],
  },
  {
    id: "KMF-20260325-1193",
    type: "Copyright Infringement",
    status: "Resolved",
    submitted: "Mar 25, 2026",
    timeline: [
      { step: "Submitted", date: "Mar 25, 2026", done: true },
      { step: "Under Review", date: "Mar 27, 2026", done: true },
      { step: "Resolved", date: "Apr 2, 2026", done: true },
    ],
  },
];

const STATUS_COLORS: Record<string, string> = {
  Submitted: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  "Under Review": "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
  Resolved: "bg-green-500/20 text-green-300 border-green-500/30",
  Dismissed: "bg-red-500/20 text-red-300 border-red-500/30",
};

function generateTicketId() {
  const now = new Date();
  const date = now.toISOString().slice(0, 10).replace(/-/g, "");
  const rand = Math.floor(1000 + Math.random() * 9000);
  return `KMF-${date}-${rand}`;
}

export default function ComplaintSystem() {
  const { navigate } = useApp();
  const [lang, setLang] = useState<Lang>("en");
  const t = T[lang];

  const [activeTab, setActiveTab] = useState<"file" | "track">("file");

  // Form state
  const [complaintType, setComplaintType] = useState("");
  const [target, setTarget] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState("");

  // Tracking state
  const [trackInput, setTrackInput] = useState("");
  const [trackedTicket, setTrackedTicket] = useState<
    (typeof DEMO_TICKETS)[0] | null
  >(null);
  const [trackError, setTrackError] = useState("");

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!complaintType) errs.type = t.errType;
    if (!target.trim()) errs.target = t.errTarget;
    if (description.trim().length < 20) errs.desc = t.errDesc;
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    setSubmitting(true);
    setTimeout(() => {
      const id = generateTicketId();
      setTicketId(id);
      setSubmitting(false);
      setSubmitted(true);
      toast.success("Complaint submitted! / शिकायत सबमिट हो गई!");
    }, 1200);
  };

  const handleTrack = () => {
    const input = trackInput.trim().toUpperCase();
    setTrackError("");
    setTrackedTicket(null);
    if (!input) {
      setTrackError("Please enter a ticket ID / टिकट ID दर्ज करें");
      return;
    }
    const found = DEMO_TICKETS.find((t) => t.id === input);
    if (found) {
      setTrackedTicket(found);
    } else {
      setTrackError(
        "Ticket not found. Try demo tickets below. / टिकट नहीं मिला।",
      );
    }
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
            data-ocid="complaint.back.button"
            onClick={() => navigate("/help")}
            className="w-9 h-9 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all flex-shrink-0"
          >
            <ArrowLeft size={20} />
          </button>
          <div className="flex items-center gap-2 flex-1">
            <ClipboardList
              size={20}
              className="text-komo-purple flex-shrink-0"
            />
            <div>
              <h1 className="text-[16px] font-bold text-white leading-tight">
                {t.title}
              </h1>
              <p className="text-[11px] text-white/50">{t.subtitle}</p>
            </div>
          </div>
          {/* Lang toggle */}
          <button
            type="button"
            data-ocid="complaint.lang.toggle"
            className="flex items-center gap-1 px-3 py-1.5 rounded-full text-[11px] font-semibold transition-all"
            style={{
              background:
                "linear-gradient(135deg, rgba(47,168,255,0.2), rgba(168,85,247,0.25))",
              border: "1px solid rgba(168,85,247,0.35)",
              color: "#d0baff",
            }}
            onClick={() => setLang(lang === "en" ? "hi" : "en")}
          >
            🌐 {lang === "en" ? t.toggleHindi : t.toggleEnglish}
          </button>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-5 space-y-5">
        {/* IT Act notice */}
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-start gap-3 p-3 rounded-xl"
          style={{
            background: "rgba(47,168,255,0.08)",
            border: "1px solid rgba(47,168,255,0.2)",
          }}
        >
          <Shield size={14} className="text-komo-blue flex-shrink-0 mt-0.5" />
          <p className="text-[11px] text-white/60 leading-relaxed">{t.itAct}</p>
        </motion.div>

        {/* Tabs */}
        <div
          className="flex rounded-xl overflow-hidden"
          style={{ border: "1px solid rgba(255,255,255,0.08)" }}
        >
          {(["file", "track"] as const).map((tab) => (
            <button
              key={tab}
              type="button"
              data-ocid={`complaint.tab.${tab}`}
              onClick={() => setActiveTab(tab)}
              className="flex-1 py-2.5 text-[13px] font-semibold transition-all"
              style={{
                background:
                  activeTab === tab
                    ? "linear-gradient(135deg, rgba(47,168,255,0.2), rgba(168,85,247,0.25))"
                    : "rgba(255,255,255,0.03)",
                color: activeTab === tab ? "#d0baff" : "rgba(255,255,255,0.4)",
              }}
            >
              {tab === "file" ? t.tabFile : t.tabTrack}
            </button>
          ))}
        </div>

        {/* ── FILE COMPLAINT TAB ── */}
        {activeTab === "file" && (
          <motion.div
            key="file"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
          >
            {!submitted ? (
              <div
                className="rounded-2xl p-5 space-y-5"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {/* Type */}
                <div className="space-y-1.5">
                  <Label className="text-[12px] text-white/60">
                    {t.complaintType} <span className="text-red-400">*</span>
                  </Label>
                  <Select
                    value={complaintType}
                    onValueChange={(v) => {
                      setComplaintType(v);
                      setErrors((e) => ({ ...e, type: "" }));
                    }}
                  >
                    <SelectTrigger
                      data-ocid="complaint.type.select"
                      className="bg-white/5 border-white/10 text-white h-10 text-[13px]"
                    >
                      <SelectValue placeholder={t.selectType} />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1A1F26] border-white/10">
                      {COMPLAINT_TYPES.map((ct) => (
                        <SelectItem
                          key={ct.en}
                          value={ct.en}
                          className="text-white/80 text-[13px]"
                        >
                          {lang === "hi" ? ct.hi : ct.en}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.type && (
                    <p className="text-[11px] text-red-400">{errors.type}</p>
                  )}
                </div>

                {/* Target */}
                <div className="space-y-1.5">
                  <Label className="text-[12px] text-white/60">
                    {t.target} <span className="text-red-400">*</span>
                  </Label>
                  <Input
                    data-ocid="complaint.target.input"
                    placeholder={t.targetPlaceholder}
                    value={target}
                    onChange={(e) => {
                      setTarget(e.target.value);
                      setErrors((err) => ({ ...err, target: "" }));
                    }}
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/25 h-10 text-[13px]"
                  />
                  {errors.target && (
                    <p className="text-[11px] text-red-400">{errors.target}</p>
                  )}
                </div>

                {/* Description */}
                <div className="space-y-1.5">
                  <Label className="text-[12px] text-white/60">
                    {t.description} <span className="text-red-400">*</span>
                  </Label>
                  <Textarea
                    data-ocid="complaint.description.input"
                    placeholder={t.descPlaceholder}
                    value={description}
                    onChange={(e) => {
                      setDescription(e.target.value);
                      setErrors((err) => ({ ...err, desc: "" }));
                    }}
                    rows={4}
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/25 text-[13px] resize-none"
                  />
                  <div className="flex justify-between items-center">
                    {errors.desc ? (
                      <p className="text-[11px] text-red-400">{errors.desc}</p>
                    ) : (
                      <span />
                    )}
                    <span
                      className={`text-[11px] ${description.length < 20 ? "text-white/30" : "text-green-400"}`}
                    >
                      {description.length}/20 min
                    </span>
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <Label className="text-[12px] text-white/60">{t.email}</Label>
                  <Input
                    data-ocid="complaint.email.input"
                    type="email"
                    placeholder={t.emailPlaceholder}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/25 h-10 text-[13px]"
                  />
                </div>

                <Button
                  data-ocid="complaint.submit.button"
                  disabled={submitting}
                  onClick={handleSubmit}
                  className="w-full h-11 text-[14px] font-bold text-white border-0"
                  style={{
                    background: submitting
                      ? "rgba(168,85,247,0.3)"
                      : "linear-gradient(135deg, #2fa8ff, #a855f7)",
                  }}
                >
                  {submitting ? t.submitting : t.submit}
                </Button>
              </div>
            ) : (
              /* Success screen */
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35 }}
                className="rounded-2xl p-6 text-center space-y-4"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(34,197,94,0.08), rgba(47,168,255,0.12))",
                  border: "1px solid rgba(34,197,94,0.25)",
                }}
              >
                <div className="flex justify-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(34,197,94,0.15)" }}
                  >
                    <CheckCircle2 size={36} className="text-green-400" />
                  </div>
                </div>
                <div>
                  <h2 className="text-[18px] font-bold text-white">
                    {t.successTitle}
                  </h2>
                  <p className="text-[13px] text-white/50 mt-1">
                    {t.successSub}
                  </p>
                </div>

                <div
                  className="rounded-xl p-4 space-y-3 text-left"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[12px] text-white/50">
                      {t.ticketId}
                    </span>
                    <span className="text-[13px] font-bold text-komo-blue font-mono">
                      {ticketId}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[12px] text-white/50">
                      {t.status}
                    </span>
                    <Badge className={STATUS_COLORS.Submitted}>Submitted</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[12px] text-white/50">
                      {t.resolution}
                    </span>
                    <span className="text-[12px] text-white/80 flex items-center gap-1">
                      <Clock size={11} /> {t.resolutionVal}
                    </span>
                  </div>
                </div>

                <Button
                  data-ocid="complaint.track_after_submit.button"
                  onClick={() => {
                    setActiveTab("track");
                    setTrackInput(ticketId);
                  }}
                  className="w-full h-10 text-[13px] font-semibold text-white border-0"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(47,168,255,0.3), rgba(168,85,247,0.35))",
                  }}
                >
                  {t.trackBtn}
                </Button>
              </motion.div>
            )}
          </motion.div>
        )}

        {/* ── TRACK STATUS TAB ── */}
        {activeTab === "track" && (
          <motion.div
            key="track"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="space-y-4"
          >
            <div
              className="rounded-2xl p-5 space-y-4"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <h3 className="text-[14px] font-semibold text-white flex items-center gap-2">
                <Search size={15} className="text-komo-blue" />
                {t.trackTitle}
              </h3>
              <div className="flex gap-2">
                <Input
                  data-ocid="complaint.track.input"
                  placeholder={t.trackPlaceholder}
                  value={trackInput}
                  onChange={(e) => setTrackInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleTrack()}
                  className="flex-1 bg-white/5 border-white/10 text-white placeholder:text-white/25 h-10 text-[12px] font-mono"
                />
                <Button
                  data-ocid="complaint.track.search_button"
                  onClick={handleTrack}
                  className="h-10 px-4 text-[13px] font-semibold text-white border-0"
                  style={{
                    background: "linear-gradient(135deg, #2fa8ff, #a855f7)",
                  }}
                >
                  {t.trackSearch}
                </Button>
              </div>
              {trackError && (
                <p className="text-[12px] text-red-400">{trackError}</p>
              )}
            </div>

            {/* Tracked result */}
            {trackedTicket && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-2xl p-5 space-y-4"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(47,168,255,0.07), rgba(168,85,247,0.1))",
                  border: "1px solid rgba(168,85,247,0.25)",
                }}
              >
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div>
                    <p className="text-[11px] text-white/40 uppercase tracking-wider">
                      Ticket ID
                    </p>
                    <p className="text-[14px] font-bold text-komo-blue font-mono">
                      {trackedTicket.id}
                    </p>
                  </div>
                  <Badge className={STATUS_COLORS[trackedTicket.status] ?? ""}>
                    {trackedTicket.status}
                  </Badge>
                </div>
                <div>
                  <p className="text-[11px] text-white/40 mb-0.5">Type</p>
                  <p className="text-[13px] text-white/80">
                    {trackedTicket.type}
                  </p>
                </div>

                {/* Timeline */}
                <div>
                  <p className="text-[11px] text-white/40 uppercase tracking-wider mb-3">
                    {t.timeline}
                  </p>
                  <div className="space-y-0">
                    {trackedTicket.timeline.map((step, idx) => (
                      <div key={step.step} className="flex items-start gap-3">
                        <div className="flex flex-col items-center">
                          <div
                            className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                            style={{
                              background: step.done
                                ? "linear-gradient(135deg, #2fa8ff, #a855f7)"
                                : "rgba(255,255,255,0.06)",
                              border: step.done
                                ? "none"
                                : "1px solid rgba(255,255,255,0.12)",
                            }}
                          >
                            {step.done ? (
                              <CheckCircle2 size={14} className="text-white" />
                            ) : (
                              <Clock size={13} className="text-white/30" />
                            )}
                          </div>
                          {idx < trackedTicket.timeline.length - 1 && (
                            <div
                              className="w-px flex-1 my-1"
                              style={{
                                background: step.done
                                  ? "rgba(168,85,247,0.4)"
                                  : "rgba(255,255,255,0.08)",
                                minHeight: "20px",
                              }}
                            />
                          )}
                        </div>
                        <div className="pb-4">
                          <p
                            className={`text-[13px] font-medium ${step.done ? "text-white/90" : "text-white/35"}`}
                          >
                            {step.step}
                          </p>
                          <p className="text-[11px] text-white/40">
                            {step.date}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Demo tickets */}
            <div
              className="rounded-2xl p-4 space-y-3"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <p className="text-[11px] text-white/40 uppercase tracking-wider flex items-center gap-1.5">
                <FileText size={12} /> {t.sampleTickets}
              </p>
              {DEMO_TICKETS.map((ticket) => (
                <button
                  key={ticket.id}
                  type="button"
                  data-ocid={`complaint.demo_ticket.${ticket.id}`}
                  className="w-full flex items-center justify-between p-3 rounded-xl text-left transition-all hover:bg-white/5"
                  style={{ border: "1px solid rgba(255,255,255,0.07)" }}
                  onClick={() => {
                    setTrackInput(ticket.id);
                    setTrackedTicket(ticket);
                    setTrackError("");
                  }}
                >
                  <div>
                    <p className="text-[12px] font-mono text-komo-blue">
                      {ticket.id}
                    </p>
                    <p className="text-[11px] text-white/40">{ticket.type}</p>
                  </div>
                  <Badge className={STATUS_COLORS[ticket.status] ?? ""}>
                    {ticket.status}
                  </Badge>
                </button>
              ))}
            </div>
          </motion.div>
        )}

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
