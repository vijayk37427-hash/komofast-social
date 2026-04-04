import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowLeft,
  Bell,
  Camera,
  ChevronRight,
  Download,
  FileText,
  MapPin,
  Mic,
  Shield,
  ShieldCheck,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useMemo, useState } from "react";
import { toast } from "sonner";
import { useApp } from "../context/AppContext";

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="px-1 mb-2 mt-6">
      <p className="text-[11px] font-bold text-white/40 uppercase tracking-widest">
        {title}
      </p>
    </div>
  );
}

function SectionCard({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      {children}
    </div>
  );
}

function Divider() {
  return <div className="mx-4 h-px bg-white/5" />;
}

function PermissionRow({
  icon,
  label,
  sublabel,
  enabled,
  onChange,
  ocid,
}: {
  icon: React.ReactNode;
  label: string;
  sublabel: string;
  enabled: boolean;
  onChange: (v: boolean) => void;
  ocid: string;
}) {
  return (
    <div className="flex items-center gap-3 px-4 py-3.5">
      <div
        className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(47,168,255,0.18), rgba(168,85,247,0.22))",
        }}
      >
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[13px] font-medium text-white/80">{label}</p>
        <p className="text-[11px] text-komo-text-muted mt-0.5">{sublabel}</p>
      </div>
      <div className="flex items-center gap-2 flex-shrink-0">
        <Badge
          className="text-[10px] font-semibold px-2 py-0.5"
          style={{
            background: enabled
              ? "rgba(34,197,94,0.15)"
              : "rgba(239,68,68,0.15)",
            color: enabled ? "#22c55e" : "#ef4444",
            border: `1px solid ${enabled ? "rgba(34,197,94,0.3)" : "rgba(239,68,68,0.3)"}`,
          }}
        >
          {enabled ? "Allowed" : "Blocked"}
        </Badge>
        <Switch data-ocid={ocid} checked={enabled} onCheckedChange={onChange} />
      </div>
    </div>
  );
}

const DATA_REPORT = [
  { label: "Posts", value: "45", icon: "📝" },
  { label: "Reels", value: "12", icon: "🎬" },
  { label: "Messages", value: "230", icon: "💬" },
  { label: "Searches", value: "89", icon: "🔍" },
  { label: "Profile Views", value: "1.2K", icon: "👁️" },
];

const LEGAL_LINKS = [
  {
    label: "Privacy Policy",
    path: "/privacy-policy",
    icon: "🔒",
    ocid: "privacy_center.privacy_policy.link",
  },
  {
    label: "Terms & Conditions",
    path: "/terms",
    icon: <FileText size={15} className="text-komo-purple" />,
    ocid: "privacy_center.terms.link",
  },
  {
    label: "Data Protection (IT Act)",
    path: "/data-protection",
    icon: <Shield size={15} className="text-green-400" />,
    ocid: "privacy_center.data_protection.link",
  },
  {
    label: "Community Guidelines",
    path: "/community-guidelines",
    icon: "📋",
    ocid: "privacy_center.community_guidelines.link",
  },
];

export default function PrivacyCenter() {
  const { navigate } = useApp();

  // Permissions
  const [camera, setCamera] = useState(true);
  const [microphone, setMicrophone] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const [location, setLocation] = useState(false);

  // Data & Personalization
  const [personalizedAds, setPersonalizedAds] = useState(true);
  const [usageAnalytics, setUsageAnalytics] = useState(true);
  const [crashReports, setCrashReports] = useState(true);
  const [activityStatus, setActivityStatus] = useState(true);

  // Deletion form
  const [deletionOpen, setDeletionOpen] = useState(false);
  const [delName, setDelName] = useState("");
  const [delEmail, setDelEmail] = useState("");
  const [delReason, setDelReason] = useState("");
  const [delMessage, setDelMessage] = useState("");

  // Privacy Score: count enabled protections (more OFF = more private for ads/location)
  const score = useMemo(() => {
    let s = 50;
    if (!location) s += 15;
    if (!personalizedAds) s += 10;
    if (!usageAnalytics) s += 8;
    if (crashReports) s += 7;
    if (!activityStatus) s += 10;
    return Math.min(100, s);
  }, [location, personalizedAds, usageAnalytics, crashReports, activityStatus]);

  const scoreColor =
    score >= 70 ? "#22c55e" : score >= 40 ? "#eab308" : "#ef4444";
  const scoreLabel = score >= 70 ? "Strong" : score >= 40 ? "Moderate" : "Weak";

  const handleDownloadData = () => {
    toast.success(
      "Data export request submitted! You'll receive an email within 48 hours.",
    );
  };

  const handleDeletionSubmit = () => {
    if (!delName || !delEmail || !delReason) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setDeletionOpen(false);
    setDelName("");
    setDelEmail("");
    setDelReason("");
    setDelMessage("");
    toast.success(
      "Data deletion request submitted. We'll process it within 30 days.",
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="max-w-2xl mx-auto px-4 py-4 pb-16"
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <button
          type="button"
          data-ocid="privacy_center.back.button"
          className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
          onClick={() => navigate("/settings")}
        >
          <ArrowLeft size={18} className="text-white" />
        </button>
        <div>
          <h1 className="text-[20px] font-bold text-white leading-tight flex items-center gap-2">
            <ShieldCheck size={20} className="text-komo-blue" />
            Privacy Center
          </h1>
          <p className="text-[12px] text-komo-text-muted">
            गोपनीयता केंद्र · App &amp; Technology Privacy
          </p>
        </div>
      </div>

      {/* ── PRIVACY SCORE ── */}
      <SectionHeader title="Privacy Score" />
      <SectionCard>
        <div className="px-4 py-5">
          <div className="flex items-center gap-5">
            {/* Circular score */}
            <div
              className="relative flex-shrink-0"
              style={{ width: 88, height: 88 }}
            >
              <svg
                width="88"
                height="88"
                viewBox="0 0 88 88"
                aria-hidden="true"
              >
                <circle
                  cx="44"
                  cy="44"
                  r="36"
                  fill="none"
                  stroke="rgba(255,255,255,0.07)"
                  strokeWidth="8"
                />
                <circle
                  cx="44"
                  cy="44"
                  r="36"
                  fill="none"
                  stroke={scoreColor}
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 36}`}
                  strokeDashoffset={`${2 * Math.PI * 36 * (1 - score / 100)}`}
                  transform="rotate(-90 44 44)"
                  style={{ transition: "stroke-dashoffset 0.6s ease" }}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span
                  className="text-[22px] font-bold leading-none"
                  style={{ color: scoreColor }}
                >
                  {score}
                </span>
                <span className="text-[9px] text-white/40 font-medium mt-0.5">
                  / 100
                </span>
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span
                  className="text-[14px] font-bold"
                  style={{ color: scoreColor }}
                >
                  {scoreLabel} Protection
                </span>
              </div>
              <p className="text-[12px] text-white/50 mb-3">
                Your Privacy Protection Level
              </p>
              {/* Score bar */}
              <div
                className="h-2 rounded-full w-full overflow-hidden"
                style={{ background: "rgba(255,255,255,0.07)" }}
              >
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: scoreColor }}
                  initial={{ width: 0 }}
                  animate={{ width: `${score}%` }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
              </div>
              <p className="text-[11px] text-white/30 mt-2">
                Adjust the settings below to improve your score
              </p>
            </div>
          </div>
        </div>
      </SectionCard>

      {/* ── APP PERMISSIONS ── */}
      <SectionHeader title="App Permissions" />
      <SectionCard>
        <PermissionRow
          icon={<Camera size={15} className="text-komo-blue" />}
          label="Camera"
          sublabel="Used for Reels, photos, and video calls"
          enabled={camera}
          onChange={(v) => {
            setCamera(v);
            toast.success(
              v ? "Camera access allowed" : "Camera access blocked",
            );
          }}
          ocid="privacy_center.camera.switch"
        />
        <Divider />
        <PermissionRow
          icon={<Mic size={15} className="text-komo-purple" />}
          label="Microphone"
          sublabel="Used for voice messages and calls"
          enabled={microphone}
          onChange={(v) => {
            setMicrophone(v);
            toast.success(
              v ? "Microphone access allowed" : "Microphone access blocked",
            );
          }}
          ocid="privacy_center.microphone.switch"
        />
        <Divider />
        <PermissionRow
          icon={<Bell size={15} className="text-yellow-400" />}
          label="Notifications"
          sublabel="Push alerts for activity and messages"
          enabled={notifications}
          onChange={(v) => {
            setNotifications(v);
            toast.success(
              v ? "Notifications enabled" : "Notifications disabled",
            );
          }}
          ocid="privacy_center.notifications.switch"
        />
        <Divider />
        <PermissionRow
          icon={<MapPin size={15} className="text-red-400" />}
          label="Location"
          sublabel="Used for local content and check-ins"
          enabled={location}
          onChange={(v) => {
            setLocation(v);
            toast.success(
              v ? "Location access allowed" : "Location access blocked",
            );
          }}
          ocid="privacy_center.location.switch"
        />
      </SectionCard>

      {/* ── DATA & PERSONALIZATION ── */}
      <SectionHeader title="Data & Personalization" />
      <SectionCard>
        {(
          [
            {
              id: "ads",
              label: "Personalized Ads",
              sublabel: "Allow Komofast to show ads based on your activity",
              value: personalizedAds,
              set: setPersonalizedAds,
              ocid: "privacy_center.personalized_ads.switch",
            },
            {
              id: "analytics",
              label: "Usage Analytics",
              sublabel: "Share anonymous usage data to improve the app",
              value: usageAnalytics,
              set: setUsageAnalytics,
              ocid: "privacy_center.usage_analytics.switch",
            },
            {
              id: "crash",
              label: "Crash Reports",
              sublabel: "Automatically send crash reports to our team",
              value: crashReports,
              set: setCrashReports,
              ocid: "privacy_center.crash_reports.switch",
            },
            {
              id: "activity",
              label: "Activity Status",
              sublabel: "Show when you're online to friends",
              value: activityStatus,
              set: setActivityStatus,
              ocid: "privacy_center.activity_status.switch",
            },
          ] as const
        ).map((item, i, arr) => (
          <div key={item.id}>
            <div className="flex items-center gap-3 px-4 py-3.5">
              <div className="flex-1 min-w-0">
                <p className="text-[13px] font-medium text-white/80">
                  {item.label}
                </p>
                <p className="text-[11px] text-komo-text-muted mt-0.5">
                  {item.sublabel}
                </p>
              </div>
              <Switch
                data-ocid={item.ocid}
                checked={item.value}
                onCheckedChange={(v) => {
                  (item.set as (v: boolean) => void)(v);
                  toast.success(
                    v ? `${item.label} enabled` : `${item.label} disabled`,
                  );
                }}
              />
            </div>
            {i < arr.length - 1 && <Divider />}
          </div>
        ))}
      </SectionCard>

      {/* ── YOUR DATA ── */}
      <SectionHeader title="Your Data" />
      <SectionCard>
        {/* Download data */}
        <div className="flex items-center gap-3 px-4 py-3.5">
          <div
            className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(47,168,255,0.18), rgba(168,85,247,0.22))",
            }}
          >
            <Download size={15} className="text-komo-blue" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[13px] font-medium text-white/80">
              Download My Data
            </p>
            <p className="text-[11px] text-komo-text-muted mt-0.5">
              Export a copy of all your Komofast data
            </p>
          </div>
          <Button
            data-ocid="privacy_center.download_data.button"
            size="sm"
            className="komo-gradient border-0 text-white h-8 text-[12px] px-3"
            onClick={handleDownloadData}
          >
            Export
          </Button>
        </div>

        <Divider />

        {/* View Data Usage Report */}
        <Dialog>
          <DialogTrigger asChild>
            <button
              type="button"
              data-ocid="privacy_center.data_report.open_modal_button"
              className="w-full flex items-center gap-3 px-4 py-3.5 hover:bg-white/5 transition-colors text-left"
            >
              <div
                className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(47,168,255,0.18), rgba(168,85,247,0.22))",
                }}
              >
                <FileText size={15} className="text-komo-purple" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[13px] font-medium text-white/80">
                  View Data Usage Report
                </p>
                <p className="text-[11px] text-komo-text-muted mt-0.5">
                  See a breakdown of data Komofast has stored
                </p>
              </div>
              <ChevronRight size={15} className="text-white/25 flex-shrink-0" />
            </button>
          </DialogTrigger>
          <DialogContent
            data-ocid="privacy_center.data_report.dialog"
            className="bg-[#1A1F26] border-white/10 max-w-sm"
          >
            <DialogHeader>
              <DialogTitle className="text-white flex items-center gap-2">
                <FileText size={16} className="text-komo-purple" />
                Data Usage Report
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-3 pt-2">
              <p className="text-[12px] text-komo-text-muted">
                Summary of data associated with your account:
              </p>
              {DATA_REPORT.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between p-3 rounded-xl"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-[16px]">{item.icon}</span>
                    <span className="text-[13px] text-white/70">
                      {item.label}
                    </span>
                  </div>
                  <span className="text-[14px] font-bold text-komo-blue">
                    {item.value}
                  </span>
                </div>
              ))}
              <p className="text-[11px] text-white/30 text-center pt-1">
                Data as of March 2026
              </p>
            </div>
          </DialogContent>
        </Dialog>
      </SectionCard>

      {/* ── DATA DELETION REQUEST ── */}
      <SectionHeader title="Data Deletion Request" />
      <SectionCard>
        <div className="px-4 py-3.5">
          <button
            type="button"
            data-ocid="privacy_center.deletion_form.toggle"
            className="w-full flex items-center justify-between"
            onClick={() => setDeletionOpen((v) => !v)}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(239,68,68,0.12)" }}
              >
                <Shield size={15} className="text-red-400" />
              </div>
              <div className="text-left">
                <p className="text-[13px] font-medium text-white/80">
                  Request Data Deletion
                </p>
                <p className="text-[11px] text-komo-text-muted mt-0.5">
                  Submit a formal request under IT Act 2000
                </p>
              </div>
            </div>
            <ChevronRight
              size={15}
              className="text-white/25 transition-transform"
              style={{
                transform: deletionOpen ? "rotate(90deg)" : "rotate(0deg)",
              }}
            />
          </button>

          <AnimatePresence>
            {deletionOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden"
              >
                <div className="pt-4 space-y-3">
                  <div className="space-y-1">
                    <Label className="text-[11px] text-komo-text-muted">
                      Full Name *
                    </Label>
                    <Input
                      data-ocid="privacy_center.deletion_name.input"
                      placeholder="Your full name"
                      value={delName}
                      onChange={(e) => setDelName(e.target.value)}
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/30 h-9 text-[13px]"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label className="text-[11px] text-komo-text-muted">
                      Email Address *
                    </Label>
                    <Input
                      data-ocid="privacy_center.deletion_email.input"
                      type="email"
                      placeholder="your@email.com"
                      value={delEmail}
                      onChange={(e) => setDelEmail(e.target.value)}
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/30 h-9 text-[13px]"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label className="text-[11px] text-komo-text-muted">
                      Reason *
                    </Label>
                    <Select value={delReason} onValueChange={setDelReason}>
                      <SelectTrigger
                        data-ocid="privacy_center.deletion_reason.select"
                        className="bg-white/5 border-white/10 text-white h-9 text-[13px]"
                      >
                        <SelectValue placeholder="Select a reason" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#1A1F26] border-white/10">
                        <SelectItem
                          value="account_closure"
                          className="text-white/80 text-[12px]"
                        >
                          Account Closure
                        </SelectItem>
                        <SelectItem
                          value="data_breach"
                          className="text-white/80 text-[12px]"
                        >
                          Data Breach Concern
                        </SelectItem>
                        <SelectItem
                          value="personal_choice"
                          className="text-white/80 text-[12px]"
                        >
                          Personal Choice
                        </SelectItem>
                        <SelectItem
                          value="other"
                          className="text-white/80 text-[12px]"
                        >
                          Other
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1">
                    <Label className="text-[11px] text-komo-text-muted">
                      Additional Message
                    </Label>
                    <Textarea
                      data-ocid="privacy_center.deletion_message.textarea"
                      placeholder="Any additional details…"
                      value={delMessage}
                      onChange={(e) => setDelMessage(e.target.value)}
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/30 text-[13px] resize-none"
                      rows={3}
                    />
                  </div>
                  <Button
                    data-ocid="privacy_center.deletion.submit_button"
                    className="w-full h-9 text-[13px] border-0"
                    style={{
                      background: "linear-gradient(135deg, #ef4444, #b91c1c)",
                    }}
                    onClick={handleDeletionSubmit}
                  >
                    Submit Deletion Request
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </SectionCard>

      {/* ── QUICK LEGAL LINKS ── */}
      <SectionHeader title="Legal & Policies" />
      <SectionCard>
        {LEGAL_LINKS.map((item, i, arr) => (
          <div key={item.path}>
            <button
              type="button"
              data-ocid={item.ocid}
              onClick={() => navigate(item.path)}
              className="w-full flex items-center gap-3 px-4 py-3.5 text-left hover:bg-white/5 transition-colors"
            >
              <div
                className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(47,168,255,0.18), rgba(168,85,247,0.22))",
                }}
              >
                {typeof item.icon === "string" ? (
                  <span className="text-[14px]">{item.icon}</span>
                ) : (
                  item.icon
                )}
              </div>
              <span className="flex-1 text-[13px] font-medium text-white/80">
                {item.label}
              </span>
              <ChevronRight size={15} className="text-white/25" />
            </button>
            {i < arr.length - 1 && <Divider />}
          </div>
        ))}
      </SectionCard>

      {/* Bottom note */}
      <div
        className="mt-6 rounded-2xl px-4 py-4 text-center"
        style={{
          background: "rgba(47,168,255,0.06)",
          border: "1px solid rgba(47,168,255,0.15)",
        }}
      >
        <ShieldCheck size={18} className="text-komo-blue mx-auto mb-2" />
        <p className="text-[12px] text-white/60 leading-relaxed">
          Your data is protected under{" "}
          <span className="text-komo-blue font-semibold">
            IT Act 2000, India
          </span>
          .
          <br />
          Last reviewed: <span className="text-white/50">March 2026</span>
        </p>
      </div>

      {/* Footer */}
      <p className="text-center text-[11px] text-white/20 mt-6">
        © {new Date().getFullYear()}. Built with love using{" "}
        <a
          href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-white/40"
        >
          caffeine.ai
        </a>
      </p>
    </motion.div>
  );
}
