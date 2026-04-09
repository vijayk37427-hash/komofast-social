import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
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
  ChevronRight,
  Download,
  FileText,
  Globe,
  HelpCircle,
  KeyRound,
  Laptop,
  Lock,
  LogOut,
  MessageCircle,
  Monitor,
  Phone,
  Shield,
  ShieldCheck,
  Smartphone,
  Trash2,
  Undo2,
  User,
  UserMinus,
  UserX,
  Volume2,
  X,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
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

function SettingRow({
  icon,
  label,
  sublabel,
  right,
  onClick,
  ocid,
}: {
  icon: React.ReactNode;
  label: string;
  sublabel?: string;
  right?: React.ReactNode;
  onClick?: () => void;
  ocid?: string;
}) {
  const inner = (
    <>
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
        {sublabel && (
          <p className="text-[11px] text-komo-text-muted mt-0.5">{sublabel}</p>
        )}
      </div>
      {right && <div className="flex-shrink-0">{right}</div>}
      {onClick && !right && (
        <ChevronRight size={15} className="text-white/25 flex-shrink-0" />
      )}
    </>
  );
  if (onClick) {
    return (
      <button
        type="button"
        data-ocid={ocid}
        className="w-full flex items-center gap-3 px-4 py-3.5 hover:bg-white/5 transition-colors text-left"
        onClick={onClick}
      >
        {inner}
      </button>
    );
  }
  return (
    <div data-ocid={ocid} className="flex items-center gap-3 px-4 py-3.5">
      {inner}
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

// ── Deactivate Dialog ──────────────────────────────────────────────────
function DeactivateDialog({ lang }: { lang: "en" | "hi" }) {
  const [open, setOpen] = useState(false);
  const [confirmText, setConfirmText] = useState("");
  const isHi = lang === "hi";

  const handleDeactivate = () => {
    if (confirmText !== "DEACTIVATE") {
      toast.error(
        isHi ? "कृपया DEACTIVATE टाइप करें" : "Please type DEACTIVATE to confirm",
      );
      return;
    }
    setOpen(false);
    setConfirmText("");
    toast.warning(
      isHi
        ? "अकाउंट 30 दिनों के लिए निष्क्रिय कर दिया गया"
        : "Account deactivated for 30 days",
    );
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button
          data-ocid="settings.deactivate.button"
          size="sm"
          variant="outline"
          className="border-orange-700/50 text-orange-400 hover:bg-orange-900/20 h-8 text-[12px] px-4"
        >
          {isHi ? "निष्क्रिय करें" : "Deactivate"}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-[#1A1F26] border-orange-900/40 max-w-sm mx-4">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-white text-[16px]">
            {isHi ? "अकाउंट निष्क्रिय करें?" : "Deactivate Account?"}
          </AlertDialogTitle>
        </AlertDialogHeader>
        <div className="space-y-4 py-2">
          <div
            className="p-3 rounded-xl"
            style={{
              background: "rgba(251,146,60,0.08)",
              border: "1px solid rgba(251,146,60,0.2)",
            }}
          >
            <p className="text-[12px] text-orange-300/90 leading-relaxed">
              {isHi
                ? "आपका अकाउंट 30 दिनों के लिए छिपा दिया जाएगा। लॉग इन करके इसे पुनः सक्रिय कर सकते हैं।"
                : "Your account will be hidden for 30 days. You can reactivate it by logging back in at any time."}
            </p>
          </div>
          <div className="space-y-1.5">
            <Label className="text-[12px] text-white/60">
              {isHi
                ? "कन्फर्म करने के लिए DEACTIVATE टाइप करें"
                : "Type DEACTIVATE to confirm"}
            </Label>
            <Input
              data-ocid="settings.deactivate.confirm_input"
              value={confirmText}
              onChange={(e) => setConfirmText(e.target.value)}
              placeholder="DEACTIVATE"
              className="bg-white/5 border-white/10 text-white placeholder:text-white/25 h-9 text-[13px] font-mono"
            />
          </div>
        </div>
        <AlertDialogFooter className="flex gap-2">
          <AlertDialogCancel
            className="flex-1 bg-white/5 border-white/10 text-white hover:bg-white/10 h-9 text-[13px]"
            onClick={() => setConfirmText("")}
          >
            {isHi ? "रद्द करें" : "Cancel"}
          </AlertDialogCancel>
          <Button
            data-ocid="settings.deactivate.confirm_button"
            size="sm"
            disabled={confirmText !== "DEACTIVATE"}
            onClick={handleDeactivate}
            className="flex-1 h-9 text-[13px] text-white border-0"
            style={{
              background:
                confirmText === "DEACTIVATE"
                  ? "#f97316"
                  : "rgba(249,115,22,0.3)",
            }}
          >
            {isHi ? "निष्क्रिय करें" : "Deactivate"}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

// ── Delete Account multi-step ──────────────────────────────────────────
function DeleteAccountFlow({
  lang,
  navigate,
}: { lang: "en" | "hi"; navigate: (p: string) => void }) {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [surveyReason, setSurveyReason] = useState("");
  const [surveyFeedback, setSurveyFeedback] = useState("");
  const [deleteText, setDeleteText] = useState("");
  const [understood, setUnderstood] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const [countdown] = useState(30);
  const isHi = lang === "hi";

  const REASONS = [
    { en: "Too many notifications", hi: "बहुत अधिक सूचनाएं" },
    { en: "Privacy concerns", hi: "गोपनीयता संबंधी चिंताएं" },
    { en: "Found a better app", hi: "बेहतर ऐप मिली" },
    { en: "Not useful anymore", hi: "अब उपयोगी नहीं" },
    { en: "Other", hi: "अन्य" },
  ];

  const resetAll = () => {
    setStep(1);
    setSurveyReason("");
    setSurveyFeedback("");
    setDeleteText("");
    setUnderstood(false);
    setDeleting(false);
    setDeleted(false);
  };

  const handleOpen = (v: boolean) => {
    if (!v) resetAll();
    setOpen(v);
  };

  const handleFinalDelete = () => {
    if (deleteText !== "DELETE" || !understood) return;
    setDeleting(true);
    setTimeout(() => {
      setDeleting(false);
      setDeleted(true);
    }, 1200);
  };

  const canConfirm = deleteText === "DELETE" && understood;

  return (
    <AlertDialog open={open} onOpenChange={handleOpen}>
      <AlertDialogTrigger asChild>
        <Button
          data-ocid="settings.delete_account.open_modal_button"
          size="sm"
          className="bg-red-600 hover:bg-red-700 text-white h-8 text-[12px] px-4 border-0"
        >
          <Trash2 size={13} className="mr-1" /> {isHi ? "डिलीट" : "Delete"}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent
        data-ocid="settings.delete_account.dialog"
        className="bg-[#1A1F26] border-red-900/40 max-w-sm mx-4"
      >
        {/* Step indicators */}
        {!deleted && (
          <div className="flex items-center gap-1.5 mb-1">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className="h-1 flex-1 rounded-full transition-all"
                style={{
                  background:
                    s <= step
                      ? "linear-gradient(90deg, #ef4444, #dc2626)"
                      : "rgba(255,255,255,0.1)",
                }}
              />
            ))}
          </div>
        )}

        {/* ─ Step 1: Warning ─ */}
        {step === 1 && !deleted && (
          <>
            <AlertDialogHeader>
              <AlertDialogTitle className="text-red-400 text-[16px]">
                ⚠️ {isHi ? "अकाउंट डिलीट करें?" : "Delete Account?"}
              </AlertDialogTitle>
            </AlertDialogHeader>
            <div className="space-y-3 py-1">
              <div
                className="p-3 rounded-xl"
                style={{
                  background: "rgba(239,68,68,0.08)",
                  border: "1px solid rgba(239,68,68,0.25)",
                }}
              >
                <p className="text-[12px] text-red-300 font-semibold mb-2">
                  {isHi
                    ? "इन्हें हमेशा के लिए मिटा दिया जाएगा:"
                    : "The following will be permanently deleted:"}
                </p>
                {[
                  isHi
                    ? "सभी पोस्ट, रील्स और स्टोरीज़"
                    : "All posts, reels, and stories",
                  isHi ? "आपके सभी संदेश और चैट" : "All messages and chat history",
                  isHi
                    ? "आपके फॉलोअर्स और फॉलोइंग"
                    : "Your followers & following list",
                  isHi ? "वॉलेट बैलेंस और KomoCoin" : "Wallet balance & KomoCoins",
                  isHi
                    ? "सभी डेटा और खाता इतिहास"
                    : "All data and account history",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 mb-1">
                    <span className="text-red-400 text-[12px] mt-0.5">•</span>
                    <p className="text-[12px] text-red-300/80">{item}</p>
                  </div>
                ))}
              </div>
              <p className="text-[11px] text-white/40 flex items-center gap-1.5">
                <Shield size={11} />
                {isHi
                  ? "IT अधिनियम 2000 के अनुसार डेटा डिलीट होगा"
                  : "Data deletion in accordance with IT Act 2000"}
              </p>
            </div>
            <AlertDialogFooter className="flex gap-2">
              <AlertDialogCancel
                className="flex-1 bg-white/5 border-white/10 text-white hover:bg-white/10 h-9 text-[13px]"
                onClick={resetAll}
              >
                {isHi ? "रद्द करें" : "Cancel"}
              </AlertDialogCancel>
              <Button
                data-ocid="settings.delete_account.step1_continue"
                size="sm"
                onClick={() => setStep(2)}
                className="flex-1 h-9 text-[13px] text-white border-0 bg-red-600 hover:bg-red-700"
              >
                {isHi ? "आगे बढ़ें" : "Continue"}
              </Button>
            </AlertDialogFooter>
          </>
        )}

        {/* ─ Step 2: Survey ─ */}
        {step === 2 && !deleted && (
          <>
            <AlertDialogHeader>
              <AlertDialogTitle className="text-white text-[15px]">
                {isHi ? "आप क्यों जा रहे हैं?" : "Why are you leaving?"}
              </AlertDialogTitle>
            </AlertDialogHeader>
            <div className="space-y-4 py-1">
              <Select value={surveyReason} onValueChange={setSurveyReason}>
                <SelectTrigger
                  data-ocid="settings.delete_survey.reason_select"
                  className="bg-white/5 border-white/10 text-white h-10 text-[13px]"
                >
                  <SelectValue
                    placeholder={
                      isHi ? "कारण चुनें (वैकल्पिक)" : "Select a reason (optional)"
                    }
                  />
                </SelectTrigger>
                <SelectContent className="bg-[#1A1F26] border-white/10">
                  {REASONS.map((r) => (
                    <SelectItem
                      key={r.en}
                      value={r.en}
                      className="text-white/80 text-[13px]"
                    >
                      {isHi ? r.hi : r.en}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Textarea
                data-ocid="settings.delete_survey.feedback_input"
                placeholder={
                  isHi
                    ? "अतिरिक्त प्रतिक्रिया (वैकल्पिक)…"
                    : "Additional feedback (optional)…"
                }
                value={surveyFeedback}
                onChange={(e) => setSurveyFeedback(e.target.value)}
                rows={3}
                className="bg-white/5 border-white/10 text-white placeholder:text-white/25 text-[13px] resize-none"
              />
            </div>
            <AlertDialogFooter className="flex gap-2">
              <Button
                size="sm"
                variant="outline"
                onClick={() => setStep(1)}
                className="flex-1 h-9 text-[13px] border-white/15 text-white/60 hover:bg-white/5"
              >
                {isHi ? "वापस" : "Back"}
              </Button>
              <Button
                data-ocid="settings.delete_account.step2_next"
                size="sm"
                onClick={() => setStep(3)}
                className="flex-1 h-9 text-[13px] text-white border-0 bg-red-600 hover:bg-red-700"
              >
                {isHi ? "अगला" : "Next"}
              </Button>
            </AlertDialogFooter>
          </>
        )}

        {/* ─ Step 3: Final confirmation ─ */}
        {step === 3 && !deleted && (
          <>
            <AlertDialogHeader>
              <AlertDialogTitle className="text-red-400 text-[15px]">
                {isHi ? "अंतिम पुष्टि करें" : "Final Confirmation"}
              </AlertDialogTitle>
            </AlertDialogHeader>
            <div className="space-y-4 py-1">
              <div className="space-y-1.5">
                <Label className="text-[12px] text-white/60">
                  {isHi
                    ? 'कन्फर्म करने के लिए "DELETE" टाइप करें'
                    : 'Type "DELETE" to confirm'}
                </Label>
                <Input
                  data-ocid="settings.delete_account.final_confirm_input"
                  value={deleteText}
                  onChange={(e) => setDeleteText(e.target.value.toUpperCase())}
                  placeholder="DELETE"
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/25 h-9 text-[13px] font-mono"
                />
              </div>
              <div className="flex items-start gap-3">
                <Checkbox
                  data-ocid="settings.delete_account.understood_checkbox"
                  id="understood"
                  checked={understood}
                  onCheckedChange={(v) => setUnderstood(!!v)}
                  className="mt-0.5 border-white/30"
                />
                <label
                  htmlFor="understood"
                  className="text-[12px] text-white/60 leading-relaxed cursor-pointer"
                >
                  {isHi
                    ? "मैं समझता/समझती हूं कि 30 दिनों के बाद मेरा सारा डेटा स्थायी रूप से मिटा दिया जाएगा"
                    : "I understand all my data will be permanently deleted after 30 days"}
                </label>
              </div>
            </div>
            <AlertDialogFooter className="flex gap-2">
              <Button
                size="sm"
                variant="outline"
                onClick={() => setStep(2)}
                className="flex-1 h-9 text-[13px] border-white/15 text-white/60 hover:bg-white/5"
              >
                {isHi ? "वापस" : "Back"}
              </Button>
              <Button
                data-ocid="settings.delete_account.final_delete_button"
                size="sm"
                disabled={!canConfirm || deleting}
                onClick={handleFinalDelete}
                className="flex-1 h-9 text-[13px] text-white border-0"
                style={{
                  background:
                    canConfirm && !deleting ? "#dc2626" : "rgba(220,38,38,0.3)",
                }}
              >
                {deleting
                  ? isHi
                    ? "हो रहा है…"
                    : "Deleting…"
                  : isHi
                    ? "हमेशा के लिए डिलीट करें"
                    : "Delete Forever"}
              </Button>
            </AlertDialogFooter>
          </>
        )}

        {/* ─ Step 4: Success / Undo ─ */}
        {deleted && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-4 py-2"
          >
            <div className="text-center space-y-2">
              <div className="text-4xl">⏳</div>
              <h3 className="text-[16px] font-bold text-white">
                {isHi
                  ? "अकाउंट डिलीशन शेड्यूल हो गया"
                  : "Account Scheduled for Deletion"}
              </h3>
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full"
                style={{
                  background: "rgba(239,68,68,0.15)",
                  border: "1px solid rgba(239,68,68,0.3)",
                }}
              >
                <span className="text-[13px] font-bold text-red-400">
                  {countdown} days remaining
                </span>
              </div>
            </div>
            <p className="text-[12px] text-white/55 text-center leading-relaxed">
              {isHi
                ? "30 दिनों के भीतर वापस लॉग इन करके डिलीशन रद्द कर सकते हैं।"
                : "You can log back in within 30 days to cancel deletion."}
            </p>
            <div className="space-y-2">
              <Button
                data-ocid="settings.delete_account.undo_button"
                onClick={() => {
                  handleOpen(false);
                  toast.success(
                    isHi
                      ? "अकाउंट डिलीशन रद्द कर दिया गया ✅"
                      : "Account deletion cancelled ✅",
                  );
                }}
                className="w-full h-10 text-[13px] font-bold text-white border-0"
                style={{
                  background: "linear-gradient(135deg, #16a34a, #15803d)",
                }}
              >
                <Undo2 size={15} className="mr-2" />
                {isHi ? "डिलीशन रद्द करें (Undo)" : "Undo Deletion"}
              </Button>
              <Button
                data-ocid="settings.delete_account.download_data_button"
                variant="outline"
                size="sm"
                onClick={() => {
                  handleOpen(false);
                  navigate("/privacy-center");
                }}
                className="w-full h-9 text-[12px] border-white/15 text-white/60 hover:bg-white/5 flex items-center gap-2"
              >
                <Download size={13} />
                {isHi ? "मेरा डेटा डाउनलोड करें" : "Download My Data"}
              </Button>
            </div>
          </motion.div>
        )}
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default function Settings() {
  const { navigate, logout } = useApp();
  const [lang, setLang] = useState<"en" | "hi">("en");

  // Account
  const [editingProfile, setEditingProfile] = useState(false);
  const [displayName, setDisplayName] = useState("Komofast User");
  const [username, setUsername] = useState("komofast_user");
  const [bio, setBio] = useState("Content creator & digital explorer ✨");
  const [changingPassword, setChangingPassword] = useState(false);
  const [currentPwd, setCurrentPwd] = useState("");
  const [newPwd, setNewPwd] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");

  // Privacy
  const [privateAccount, setPrivateAccount] = useState(false);
  const [whoMessage, setWhoMessage] = useState("friends");
  const [whoSeePosts, setWhoSeePosts] = useState("everyone");
  const [twoFA, setTwoFA] = useState(false);

  // Notifications
  const [pushNotif, setPushNotif] = useState(true);
  const [emailNotif, setEmailNotif] = useState(false);
  const [likeNotif, setLikeNotif] = useState(true);
  const [followerNotif, setFollowerNotif] = useState(true);
  const [dmNotif, setDmNotif] = useState(true);

  // Preferences
  const [dataSaver, setDataSaver] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);

  // Content
  const [sensitiveContent, setSensitiveContent] = useState(false);
  const [mutedWord, setMutedWord] = useState("");
  const [mutedWords, setMutedWords] = useState<string[]>(["spam", "scam"]);

  const MOCK_SESSIONS = [
    {
      id: 1,
      device: "Android • Chrome",
      location: "Mumbai, India",
      icon: Smartphone,
      current: true,
    },
    {
      id: 2,
      device: "Windows • Chrome",
      location: "Delhi, India",
      icon: Monitor,
      current: false,
    },
  ];

  const MOCK_RESTRICTED = [
    { username: "spammer_99", reason: "Spam" },
    { username: "troll_user", reason: "Harassment" },
  ];

  const [restrictedAccounts, setRestrictedAccounts] = useState(MOCK_RESTRICTED);
  const [sessions, setSessions] = useState(MOCK_SESSIONS);

  const handleSaveProfile = () => {
    setEditingProfile(false);
    toast.success("Profile updated! ✅");
  };

  const handleSavePassword = () => {
    if (!currentPwd || !newPwd || !confirmPwd) {
      toast.error("Please fill all password fields");
      return;
    }
    if (newPwd !== confirmPwd) {
      toast.error("Passwords don't match");
      return;
    }
    setChangingPassword(false);
    setCurrentPwd("");
    setNewPwd("");
    setConfirmPwd("");
    toast.success("Password changed successfully! 🔒");
  };

  const addMutedWord = () => {
    const word = mutedWord.trim().toLowerCase();
    if (!word || mutedWords.includes(word)) return;
    setMutedWords((prev) => [...prev, word]);
    setMutedWord("");
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.25 }}
      className="max-w-2xl mx-auto px-4 py-4 pb-12"
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <button
          type="button"
          data-ocid="settings.back.button"
          className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
          onClick={() => navigate("/profile")}
        >
          <ArrowLeft size={18} className="text-white" />
        </button>
        <div className="flex-1">
          <h1 className="text-[20px] font-bold text-white leading-tight">
            Settings
          </h1>
          <p className="text-[12px] text-komo-text-muted">सेटिंग्स</p>
        </div>
        <button
          type="button"
          data-ocid="settings.lang.toggle"
          onClick={() => setLang((l) => (l === "en" ? "hi" : "en"))}
          className="px-3 py-1.5 rounded-full text-[12px] font-semibold border border-white/20 bg-white/5 hover:bg-white/10 text-white transition-colors"
        >
          {lang === "en" ? "हिंदी" : "English"}
        </button>
      </div>

      {/* ── ACCOUNT SETTINGS ── */}
      <SectionHeader title="Account Settings" />
      <SectionCard>
        {/* Edit Profile */}
        <div>
          <SettingRow
            ocid="settings.edit_profile.button"
            icon={<User size={15} className="text-komo-blue" />}
            label="Edit Profile"
            sublabel="Name, bio, username"
            onClick={() => setEditingProfile((v) => !v)}
            right={
              <span className="text-[11px] text-komo-blue">
                {editingProfile ? "Cancel" : "Edit"}
              </span>
            }
          />
          {editingProfile && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="px-4 pb-4 space-y-3"
            >
              <div className="space-y-1">
                <Label className="text-[11px] text-komo-text-muted">
                  Display Name
                </Label>
                <Input
                  data-ocid="settings.name.input"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/30 h-9 text-[13px]"
                />
              </div>
              <div className="space-y-1">
                <Label className="text-[11px] text-komo-text-muted">
                  Username
                </Label>
                <Input
                  data-ocid="settings.username.input"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/30 h-9 text-[13px]"
                />
              </div>
              <div className="space-y-1">
                <Label className="text-[11px] text-komo-text-muted">Bio</Label>
                <Input
                  data-ocid="settings.bio.input"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/30 h-9 text-[13px]"
                />
              </div>
              <Button
                data-ocid="settings.save_profile.submit_button"
                size="sm"
                className="komo-gradient border-0 text-white w-full h-9 text-[13px]"
                onClick={handleSaveProfile}
              >
                Save Changes
              </Button>
            </motion.div>
          )}
        </div>
        <Divider />
        {/* Change Password */}
        <div>
          <SettingRow
            ocid="settings.change_password.button"
            icon={<KeyRound size={15} className="text-komo-purple" />}
            label="Change Password"
            sublabel="Update your login password"
            onClick={() => setChangingPassword((v) => !v)}
            right={
              <span className="text-[11px] text-komo-blue">
                {changingPassword ? "Cancel" : "Change"}
              </span>
            }
          />
          {changingPassword && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="px-4 pb-4 space-y-3"
            >
              {[
                {
                  label: "Current Password",
                  ocid: "settings.current_password.input",
                  val: currentPwd,
                  set: setCurrentPwd,
                },
                {
                  label: "New Password",
                  ocid: "settings.new_password.input",
                  val: newPwd,
                  set: setNewPwd,
                },
                {
                  label: "Confirm New Password",
                  ocid: "settings.confirm_password.input",
                  val: confirmPwd,
                  set: setConfirmPwd,
                },
              ].map((f) => (
                <div key={f.label} className="space-y-1">
                  <Label className="text-[11px] text-komo-text-muted">
                    {f.label}
                  </Label>
                  <Input
                    data-ocid={f.ocid}
                    type="password"
                    value={f.val}
                    onChange={(e) =>
                      (f.set as (v: string) => void)(e.target.value)
                    }
                    className="bg-white/5 border-white/10 text-white h-9 text-[13px]"
                  />
                </div>
              ))}
              <Button
                data-ocid="settings.save_password.submit_button"
                size="sm"
                className="komo-gradient border-0 text-white w-full h-9 text-[13px]"
                onClick={handleSavePassword}
              >
                Update Password
              </Button>
            </motion.div>
          )}
        </div>
        <Divider />
        <SettingRow
          ocid="settings.mobile.button"
          icon={<Phone size={15} className="text-green-400" />}
          label="Mobile / Email"
          sublabel="+91 ••••••7890 · user@komo.app"
          right={
            <Button
              size="sm"
              variant="outline"
              className="border-white/15 text-white/60 h-7 text-[11px] px-3"
              onClick={() => toast.info("Mobile/Email update coming soon!")}
            >
              Update
            </Button>
          }
        />
        <Divider />
        <SettingRow
          icon={<ShieldCheck size={15} className="text-komo-blue" />}
          label="Verified Account"
          sublabel="Your account is verified"
          right={
            <Badge
              className="text-[10px] font-bold"
              style={{
                background: "rgba(47,168,255,0.15)",
                color: "#2fa8ff",
                border: "1px solid rgba(47,168,255,0.3)",
              }}
            >
              ✓ Verified
            </Badge>
          }
        />
      </SectionCard>

      {/* ── PRIVACY & SECURITY ── */}
      <SectionHeader title="Privacy & Security" />
      <SectionCard>
        <SettingRow
          ocid="settings.private_account.switch"
          icon={<Lock size={15} className="text-komo-purple" />}
          label="Private Account"
          sublabel="Only approved followers can see your posts"
          right={
            <Switch
              checked={privateAccount}
              onCheckedChange={(v) => {
                setPrivateAccount(v);
                toast.success(
                  v ? "Account set to private" : "Account set to public",
                );
              }}
            />
          }
        />
        <Divider />
        {/* Who can message */}
        <div className="flex items-center gap-3 px-4 py-3.5">
          <div
            className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(47,168,255,0.18), rgba(168,85,247,0.22))",
            }}
          >
            <MessageCircle size={15} className="text-komo-blue" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[13px] font-medium text-white/80">
              Who can message me
            </p>
          </div>
          <Select
            value={whoMessage}
            onValueChange={(v) => {
              setWhoMessage(v);
              toast.success("Preference saved");
            }}
          >
            <SelectTrigger
              data-ocid="settings.who_message.select"
              className="w-32 h-8 bg-white/5 border-white/10 text-white text-[12px]"
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-[#1A1F26] border-white/10">
              <SelectItem
                value="everyone"
                className="text-white/80 text-[12px]"
              >
                Everyone
              </SelectItem>
              <SelectItem value="friends" className="text-white/80 text-[12px]">
                Friends only
              </SelectItem>
              <SelectItem value="nobody" className="text-white/80 text-[12px]">
                Nobody
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Divider />
        {/* Who can see posts */}
        <div className="flex items-center gap-3 px-4 py-3.5">
          <div
            className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(47,168,255,0.18), rgba(168,85,247,0.22))",
            }}
          >
            <Globe size={15} className="text-green-400" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[13px] font-medium text-white/80">
              Who can see my posts
            </p>
          </div>
          <Select
            value={whoSeePosts}
            onValueChange={(v) => {
              setWhoSeePosts(v);
              toast.success("Preference saved");
            }}
          >
            <SelectTrigger
              data-ocid="settings.who_see_posts.select"
              className="w-32 h-8 bg-white/5 border-white/10 text-white text-[12px]"
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-[#1A1F26] border-white/10">
              <SelectItem
                value="everyone"
                className="text-white/80 text-[12px]"
              >
                Everyone
              </SelectItem>
              <SelectItem
                value="followers"
                className="text-white/80 text-[12px]"
              >
                Followers
              </SelectItem>
              <SelectItem value="onlyme" className="text-white/80 text-[12px]">
                Only me
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Divider />
        <SettingRow
          ocid="settings.two_fa.switch"
          icon={<Shield size={15} className="text-yellow-400" />}
          label="Two-Factor Authentication"
          sublabel="Extra security for your account"
          right={
            <Switch
              checked={twoFA}
              onCheckedChange={(v) => {
                setTwoFA(v);
                toast.success(v ? "2FA enabled" : "2FA disabled");
              }}
            />
          }
        />
        <Divider />
        {/* Active Sessions */}
        <div className="px-4 py-3.5">
          <div className="flex items-center gap-3 mb-3">
            <div
              className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(47,168,255,0.18), rgba(168,85,247,0.22))",
              }}
            >
              <Laptop size={15} className="text-komo-purple" />
            </div>
            <p className="text-[13px] font-medium text-white/80">
              Active Sessions
            </p>
          </div>
          <div className="space-y-2">
            {sessions.map((s) => (
              <div
                key={s.id}
                data-ocid={`settings.session.item.${s.id}`}
                className="flex items-center gap-3 p-3 rounded-xl"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <s.icon size={16} className="text-komo-text-muted" />
                <div className="flex-1 min-w-0">
                  <p className="text-[12px] font-medium text-white/75">
                    {s.device}
                    {s.current && (
                      <span className="ml-2 text-[10px] text-green-400 font-semibold">
                        ● Current
                      </span>
                    )}
                  </p>
                  <p className="text-[11px] text-komo-text-muted">
                    {s.location}
                  </p>
                </div>
                {!s.current && (
                  <Button
                    data-ocid={`settings.revoke.button.${s.id}`}
                    size="sm"
                    variant="outline"
                    className="border-red-800/50 text-red-400 hover:bg-red-900/20 h-7 text-[11px] px-3"
                    onClick={() => {
                      setSessions((prev) => prev.filter((x) => x.id !== s.id));
                      toast.success("Session revoked");
                    }}
                  >
                    Revoke
                  </Button>
                )}
              </div>
            ))}
          </div>
        </div>
        <Divider />
        <button
          type="button"
          data-ocid="settings.creator_privacy.link"
          onClick={() => navigate("/creator-privacy")}
          className="w-full flex items-center gap-3 px-4 py-3.5 text-left hover:bg-white/5 transition-colors"
        >
          <div
            className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(47,168,255,0.18), rgba(168,85,247,0.22))",
            }}
          >
            <span className="text-[14px]">✨</span>
          </div>
          <div className="flex-1">
            <span className="text-[13px] font-medium text-white/80">
              Creator Privacy
            </span>
            <p className="text-[11px] text-white/40 mt-0.5">
              Public visibility for your creator profile
            </p>
          </div>
          <ChevronRight size={15} className="text-white/25" />
        </button>
      </SectionCard>

      {/* ── NOTIFICATIONS ── */}
      <SectionHeader title="Notifications" />
      <SectionCard>
        {(
          [
            {
              id: "push",
              icon: <Bell size={15} className="text-komo-blue" />,
              label: "Push Notifications",
              sublabel: "App alerts on your device",
              value: pushNotif,
              set: setPushNotif,
              ocid: "settings.push_notif.switch",
            },
            {
              id: "email",
              icon: <Zap size={15} className="text-yellow-400" />,
              label: "Email Notifications",
              sublabel: "Summaries to your inbox",
              value: emailNotif,
              set: setEmailNotif,
              ocid: "settings.email_notif.switch",
            },
            {
              id: "like",
              icon: <span className="text-[14px]">❤️</span>,
              label: "Likes & Comments",
              sublabel: "When someone reacts to your posts",
              value: likeNotif,
              set: setLikeNotif,
              ocid: "settings.like_notif.switch",
            },
            {
              id: "follower",
              icon: <span className="text-[14px]">👤</span>,
              label: "New Followers",
              sublabel: "When someone follows you",
              value: followerNotif,
              set: setFollowerNotif,
              ocid: "settings.follower_notif.switch",
            },
            {
              id: "dm",
              icon: <MessageCircle size={15} className="text-komo-purple" />,
              label: "Direct Messages",
              sublabel: "When you receive a new message",
              value: dmNotif,
              set: setDmNotif,
              ocid: "settings.dm_notif.switch",
            },
          ] as const
        ).map((item, i, arr) => (
          <div key={item.id}>
            <SettingRow
              ocid={item.ocid}
              icon={item.icon}
              label={item.label}
              sublabel={item.sublabel}
              right={
                <Switch
                  checked={item.value}
                  onCheckedChange={(v) => {
                    (item.set as (v: boolean) => void)(v);
                    toast.success(
                      v ? `${item.label} enabled` : `${item.label} disabled`,
                    );
                  }}
                />
              }
            />
            {i < arr.length - 1 && <Divider />}
          </div>
        ))}
      </SectionCard>

      {/* ── APP PREFERENCES ── */}
      <SectionHeader title="App Preferences" />
      <SectionCard>
        <SettingRow
          icon={<Monitor size={15} className="text-komo-blue" />}
          label="Dark Mode"
          sublabel="Always enabled for best experience"
          right={
            <Switch
              checked={true}
              disabled
              className="opacity-60"
              onCheckedChange={() => toast.info("Dark mode is always on! 🌙")}
            />
          }
        />
        <Divider />
        <SettingRow
          ocid="settings.language.link"
          icon={<Globe size={15} className="text-green-400" />}
          label="Language / भाषा"
          sublabel="Change app language"
          onClick={() => navigate("/language")}
        />
        <Divider />
        <SettingRow
          ocid="settings.country.link"
          icon={<span className="text-[14px]">📍</span>}
          label="Country / देश"
          sublabel="Detect your country automatically"
          onClick={() => navigate("/country-detect")}
        />
        <Divider />
        <SettingRow
          ocid="settings.data_saver.switch"
          icon={<Volume2 size={15} className="text-komo-purple" />}
          label="Data Saver"
          sublabel="Reduce video quality to save data"
          right={
            <Switch
              checked={dataSaver}
              onCheckedChange={(v) => {
                setDataSaver(v);
                toast.success(v ? "Data Saver on" : "Data Saver off");
              }}
            />
          }
        />
        <Divider />
        <SettingRow
          ocid="settings.autoplay.switch"
          icon={<span className="text-[14px]">▶️</span>}
          label="Auto-play Reels"
          sublabel="Reels play automatically while scrolling"
          right={
            <Switch
              checked={autoPlay}
              onCheckedChange={(v) => {
                setAutoPlay(v);
                toast.success(v ? "Auto-play enabled" : "Auto-play disabled");
              }}
            />
          }
        />
      </SectionCard>

      {/* ── CONTENT & FEEDS ── */}
      <SectionHeader title="Content & Feeds" />
      <SectionCard>
        <SettingRow
          ocid="settings.sensitive_content.switch"
          icon={<Shield size={15} className="text-orange-400" />}
          label="Show Sensitive Content"
          sublabel="Content that may not be suitable for all audiences"
          right={
            <Switch
              checked={sensitiveContent}
              onCheckedChange={(v) => {
                setSensitiveContent(v);
                toast.success(
                  v ? "Sensitive content shown" : "Sensitive content hidden",
                );
              }}
            />
          }
        />
        <Divider />
        {/* Muted Words */}
        <div className="px-4 py-3.5">
          <div className="flex items-center gap-3 mb-3">
            <div
              className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(47,168,255,0.18), rgba(168,85,247,0.22))",
              }}
            >
              <span className="text-[14px]">🔇</span>
            </div>
            <p className="text-[13px] font-medium text-white/80">Muted Words</p>
          </div>
          {mutedWords.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {mutedWords.map((w) => (
                <span
                  key={w}
                  data-ocid="settings.muted_words.panel"
                  className="flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-medium text-white/70"
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  {w}
                  <button
                    type="button"
                    onClick={() =>
                      setMutedWords((prev) => prev.filter((x) => x !== w))
                    }
                    className="ml-0.5 text-white/40 hover:text-red-400 transition-colors"
                  >
                    <X size={10} />
                  </button>
                </span>
              ))}
            </div>
          )}
          <div className="flex gap-2">
            <Input
              data-ocid="settings.muted_word.input"
              placeholder="Add a word to mute…"
              value={mutedWord}
              onChange={(e) => setMutedWord(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && addMutedWord()}
              className="flex-1 bg-white/5 border-white/10 text-white placeholder:text-white/30 h-9 text-[13px]"
            />
            <Button
              data-ocid="settings.add_muted_word.button"
              size="sm"
              className="komo-gradient border-0 text-white h-9 px-4 text-[12px]"
              onClick={addMutedWord}
            >
              Add
            </Button>
          </div>
        </div>
        <Divider />
        {/* Restricted Accounts */}
        <div className="px-4 py-3.5">
          <div className="flex items-center gap-3 mb-3">
            <div
              className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(47,168,255,0.18), rgba(168,85,247,0.22))",
              }}
            >
              <UserMinus size={15} className="text-orange-400" />
            </div>
            <p className="text-[13px] font-medium text-white/80">
              Restricted Accounts
            </p>
          </div>
          {restrictedAccounts.length === 0 ? (
            <p
              data-ocid="settings.restricted.empty_state"
              className="text-[12px] text-komo-text-muted py-1"
            >
              No restricted accounts
            </p>
          ) : (
            <div className="space-y-2">
              {restrictedAccounts.map((acc, i) => (
                <div
                  key={acc.username}
                  data-ocid={`settings.restricted.item.${i + 1}`}
                  className="flex items-center gap-3 p-3 rounded-xl"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold text-white"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(168,85,247,0.4), rgba(47,168,255,0.4))",
                    }}
                  >
                    {acc.username[0].toUpperCase()}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[12px] font-medium text-white/75">
                      @{acc.username}
                    </p>
                    <p className="text-[11px] text-komo-text-muted">
                      {acc.reason}
                    </p>
                  </div>
                  <Button
                    data-ocid={`settings.unrestrict.button.${i + 1}`}
                    size="sm"
                    variant="outline"
                    className="border-green-800/50 text-green-400 hover:bg-green-900/20 h-7 text-[11px] px-3"
                    onClick={() => {
                      setRestrictedAccounts((prev) =>
                        prev.filter((x) => x.username !== acc.username),
                      );
                      toast.success(`@${acc.username} unrestricted`);
                    }}
                  >
                    Unrestrict
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>
      </SectionCard>

      {/* ── SUPPORT & LEGAL ── */}
      <SectionHeader title="Support & Legal" />
      <SectionCard>
        {[
          {
            label: "Privacy Center / गोपनीयता केंद्र",
            path: "/privacy-center",
            icon: <ShieldCheck size={15} className="text-komo-blue" />,
            ocid: "settings.privacy_center.link",
          },
          {
            label: "Help Center / सहायता केंद्र",
            path: "/help",
            icon: <HelpCircle size={15} className="text-komo-blue" />,
            ocid: "settings.help.link",
          },
          {
            label: "Privacy Policy",
            path: "/privacy-policy",
            icon: <span className="text-[14px]">🔒</span>,
            ocid: "settings.privacy.link",
          },
          {
            label: "Terms & Conditions",
            path: "/terms",
            icon: <FileText size={15} className="text-komo-purple" />,
            ocid: "settings.terms.link",
          },
          {
            label: "Data Protection (IT Act)",
            path: "/data-protection",
            icon: <Shield size={15} className="text-green-400" />,
            ocid: "settings.dataprotection.link",
          },
          {
            label: "Community Guidelines",
            path: "/community-guidelines",
            icon: <span className="text-[14px]">📋</span>,
            ocid: "settings.community.link",
          },
          {
            label: "Content Rules",
            path: "/content-rules",
            icon: <span className="text-[14px]">📖</span>,
            ocid: "settings.content_rules.link",
          },
          {
            label: "File a Complaint",
            path: "/complaints",
            icon: <span className="text-[14px]">📝</span>,
            ocid: "settings.complaints.link",
          },
        ].map((item, i, arr) => (
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
                {item.icon}
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

      {/* ── DANGER ZONE ── */}
      <SectionHeader title="Danger Zone" />
      <SectionCard>
        {/* Deactivate */}
        <div className="px-4 py-4 flex items-center gap-3">
          <div
            className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: "rgba(251,146,60,0.12)" }}
          >
            <UserMinus size={15} className="text-orange-400" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[13px] font-medium text-white/80">
              Deactivate Account
            </p>
            <p className="text-[11px] text-komo-text-muted">
              Temporarily hide your account for 30 days / अकाउंट 30 दिन के लिए
              छिपाएं
            </p>
          </div>
          <DeactivateDialog lang={lang} />
        </div>

        <Divider />

        {/* Delete Account */}
        <div className="px-4 py-4 flex items-center gap-3">
          <div
            className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: "rgba(239,68,68,0.12)" }}
          >
            <UserX size={15} className="text-red-400" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[13px] font-medium text-red-400">
              Delete Account
            </p>
            <p className="text-[11px] text-komo-text-muted">
              30-day grace period — data erased after / 30 दिन बाद डेटा मिटेगा
            </p>
          </div>
          <DeleteAccountFlow lang={lang} navigate={navigate} />
        </div>

        <Divider />

        {/* Log Out */}
        <div className="px-4 py-4 flex items-center gap-3">
          <div
            className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: "rgba(168,85,247,0.12)" }}
          >
            <LogOut size={15} className="text-komo-purple" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[13px] font-medium text-white/80">Log Out</p>
            <p className="text-[11px] text-komo-text-muted">
              Sign out of your account
            </p>
          </div>
          <Button
            data-ocid="settings.logout.button"
            size="sm"
            variant="outline"
            className="border-komo-purple/50 text-komo-purple hover:bg-komo-purple/10 h-8 text-[12px] px-4"
            onClick={() => {
              logout();
              toast.success("Logged out successfully");
            }}
          >
            Log Out
          </Button>
        </div>
      </SectionCard>

      {/* Footer */}
      <p className="text-center text-[11px] text-white/20 mt-8">
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
