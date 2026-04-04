import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
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
import { Switch } from "@/components/ui/switch";
import {
  ArrowLeft,
  Bell,
  ChevronRight,
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

export default function Settings() {
  const { navigate, logout } = useApp();

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
        <div>
          <h1 className="text-[20px] font-bold text-white leading-tight">
            Settings
          </h1>
          <p className="text-[12px] text-komo-text-muted">सेटिंग्स</p>
        </div>
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
              <div className="space-y-1">
                <Label className="text-[11px] text-komo-text-muted">
                  Current Password
                </Label>
                <Input
                  data-ocid="settings.current_password.input"
                  type="password"
                  value={currentPwd}
                  onChange={(e) => setCurrentPwd(e.target.value)}
                  className="bg-white/5 border-white/10 text-white h-9 text-[13px]"
                />
              </div>
              <div className="space-y-1">
                <Label className="text-[11px] text-komo-text-muted">
                  New Password
                </Label>
                <Input
                  data-ocid="settings.new_password.input"
                  type="password"
                  value={newPwd}
                  onChange={(e) => setNewPwd(e.target.value)}
                  className="bg-white/5 border-white/10 text-white h-9 text-[13px]"
                />
              </div>
              <div className="space-y-1">
                <Label className="text-[11px] text-komo-text-muted">
                  Confirm New Password
                </Label>
                <Input
                  data-ocid="settings.confirm_password.input"
                  type="password"
                  value={confirmPwd}
                  onChange={(e) => setConfirmPwd(e.target.value)}
                  className="bg-white/5 border-white/10 text-white h-9 text-[13px]"
                />
              </div>
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

        {/* Mobile/Email */}
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

        {/* Verified Account */}
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
            <span className="text-[14px]">2728</span>
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
        {/* Dark Mode — always on */}
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

        {/* Language */}
        <SettingRow
          ocid="settings.language.link"
          icon={<Globe size={15} className="text-green-400" />}
          label="Language / भाषा"
          sublabel="Change app language"
          onClick={() => navigate("/language")}
        />
        <Divider />

        {/* Country Detection */}
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

          {/* Word chips */}
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
              Temporarily disable your account
            </p>
          </div>
          <Button
            data-ocid="settings.deactivate.button"
            size="sm"
            variant="outline"
            className="border-orange-700/50 text-orange-400 hover:bg-orange-900/20 h-8 text-[12px] px-4"
            onClick={() =>
              toast.warning(
                "Account deactivation coming soon. Contact support for help.",
              )
            }
          >
            Deactivate
          </Button>
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
              Permanently delete all data
            </p>
          </div>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                data-ocid="settings.delete_account.open_modal_button"
                size="sm"
                className="bg-red-600 hover:bg-red-700 text-white h-8 text-[12px] px-4 border-0"
              >
                <Trash2 size={13} className="mr-1" /> Delete
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent
              data-ocid="settings.delete_account.dialog"
              className="bg-[#1A1F26] border-red-900/40"
            >
              <AlertDialogHeader>
                <AlertDialogTitle className="text-white">
                  Delete Account?
                </AlertDialogTitle>
                <AlertDialogDescription className="text-komo-text-muted">
                  This will permanently delete your Komofast account, all posts,
                  reels, earnings, and data. This action{" "}
                  <span className="text-red-400 font-semibold">cannot</span> be
                  undone.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel
                  data-ocid="settings.delete_account.cancel_button"
                  className="bg-white/5 border-white/10 text-white hover:bg-white/10"
                >
                  Cancel
                </AlertDialogCancel>
                <AlertDialogAction
                  data-ocid="settings.delete_account.confirm_button"
                  className="bg-red-600 hover:bg-red-700 text-white"
                  onClick={() => {
                    toast.error(
                      "Account deletion request submitted. You will receive an email.",
                    );
                  }}
                >
                  Yes, Delete Everything
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
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
