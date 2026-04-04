import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import {
  ArrowLeft,
  Eye,
  EyeOff,
  Globe,
  Lock,
  Shield,
  Sparkles,
  Users,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { useApp } from "../context/AppContext";

function SectionHeader({
  icon,
  title,
  subtitle,
}: { icon: React.ReactNode; title: string; subtitle?: string }) {
  return (
    <div className="flex items-center gap-3 px-4 pt-6 pb-2">
      <div
        className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(47,168,255,0.22), rgba(168,85,247,0.28))",
        }}
      >
        {icon}
      </div>
      <div>
        <p className="text-[13px] font-semibold text-white/90">{title}</p>
        {subtitle && (
          <p className="text-[11px] text-white/40 mt-0.5">{subtitle}</p>
        )}
      </div>
    </div>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="mx-4 rounded-2xl overflow-hidden"
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      {children}
    </div>
  );
}

function ToggleRow({
  ocid,
  icon,
  label,
  sublabel,
  checked,
  onChange,
}: {
  ocid: string;
  icon?: React.ReactNode;
  label: string;
  sublabel?: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <div className="flex items-center gap-3 px-4 py-3.5">
      {icon && (
        <div
          className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(47,168,255,0.15), rgba(168,85,247,0.2))",
          }}
        >
          {icon}
        </div>
      )}
      <div className="flex-1 min-w-0">
        <p className="text-[13px] font-medium text-white/85">{label}</p>
        {sublabel && (
          <p className="text-[11px] text-white/40 mt-0.5">{sublabel}</p>
        )}
      </div>
      <Switch data-ocid={ocid} checked={checked} onCheckedChange={onChange} />
    </div>
  );
}

function SelectRow({
  ocid,
  icon,
  label,
  value,
  options,
  onChange,
}: {
  ocid: string;
  icon?: React.ReactNode;
  label: string;
  value: string;
  options: { value: string; label: string }[];
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex items-center gap-3 px-4 py-3.5">
      {icon && (
        <div
          className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(47,168,255,0.15), rgba(168,85,247,0.2))",
          }}
        >
          {icon}
        </div>
      )}
      <div className="flex-1 min-w-0">
        <p className="text-[13px] font-medium text-white/85">{label}</p>
      </div>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger
          data-ocid={ocid}
          className="w-36 h-8 bg-white/5 border-white/10 text-white text-[12px] rounded-xl"
        >
          <SelectValue />
        </SelectTrigger>
        <SelectContent className="bg-[#1A1F26] border-white/10">
          {options.map((o) => (
            <SelectItem
              key={o.value}
              value={o.value}
              className="text-white/80 text-[12px]"
            >
              {o.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

const AUDIENCE_OPTIONS = [
  { value: "everyone", label: "Everyone" },
  { value: "followers", label: "Followers only" },
  { value: "only_me", label: "Only Me" },
];

const STORIES_OPTIONS = [
  { value: "everyone", label: "Everyone" },
  { value: "close_friends", label: "Close Friends" },
  { value: "only_me", label: "Only Me" },
];

const INTERACTION_OPTIONS = [
  { value: "everyone", label: "Everyone" },
  { value: "followers", label: "Followers" },
  { value: "nobody", label: "No one" },
];

export default function CreatorPrivacy() {
  const { navigate } = useApp();

  // Profile Visibility
  const [publicProfile, setPublicProfile] = useState(true);
  const [showFollowers, setShowFollowers] = useState(true);
  const [showFollowing, setShowFollowing] = useState(true);

  // Content Privacy
  const [whoSeesPosts, setWhoSeesPosts] = useState("everyone");
  const [whoSeesReels, setWhoSeesReels] = useState("everyone");
  const [whoSeesStories, setWhoSeesStories] = useState("everyone");

  // Creator Stats Privacy
  const [showEarning, setShowEarning] = useState(false);
  const [showHonor, setShowHonor] = useState(true);
  const [showViews, setShowViews] = useState(true);

  // Interaction Controls
  const [whoComments, setWhoComments] = useState("everyone");
  const [whoMessages, setWhoMessages] = useState("followers");
  const [whoTags, setWhoTags] = useState("followers");

  // Discovery
  const [showInSearch, setShowInSearch] = useState(true);
  const [allowRecommend, setAllowRecommend] = useState(true);
  const [showSuggested, setShowSuggested] = useState(true);

  const [saving, setSaving] = useState(false);

  const handleSave = async () => {
    setSaving(true);
    await new Promise((r) => setTimeout(r, 900));
    setSaving(false);
    toast.success("Creator privacy settings saved!");
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
        className="sticky top-0 z-20 flex items-center gap-3 px-4 py-4"
        style={{
          background: "rgba(11,15,20,0.92)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <button
          type="button"
          data-ocid="creator_privacy.back.button"
          onClick={() => navigate("/settings")}
          className="w-9 h-9 rounded-xl flex items-center justify-center hover:bg-white/8 transition-colors"
          style={{ background: "rgba(255,255,255,0.05)" }}
        >
          <ArrowLeft size={18} className="text-white/80" />
        </button>
        <div className="flex-1">
          <h1 className="text-[16px] font-bold text-white">Creator Privacy</h1>
          <p className="text-[11px] text-white/40">
            Control your public visibility
          </p>
        </div>
        <div
          className="px-3 py-1.5 rounded-full text-[11px] font-semibold"
          style={{
            background: "linear-gradient(90deg, #2FA8FF 0%, #A855F7 100%)",
            color: "#fff",
          }}
        >
          Creator
        </div>
      </div>

      <div className="pb-32">
        {/* 1. Profile Visibility */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.05 }}
        >
          <SectionHeader
            icon={<Globe size={15} className="text-blue-400" />}
            title="Profile Visibility"
            subtitle="Who can discover and view your profile"
          />
          <Card>
            <ToggleRow
              ocid="creator_privacy.public_profile.switch"
              icon={<Eye size={14} className="text-blue-400" />}
              label="Public Profile"
              sublabel="Anyone can view your profile and content"
              checked={publicProfile}
              onChange={(v) => {
                setPublicProfile(v);
                toast.success(
                  v ? "Profile set to public" : "Profile set to private",
                );
              }}
            />
            <Separator className="bg-white/5 mx-4" />
            <ToggleRow
              ocid="creator_privacy.show_followers.switch"
              icon={<Users size={14} className="text-purple-400" />}
              label="Show Follower Count"
              sublabel="Display follower number on your profile"
              checked={showFollowers}
              onChange={setShowFollowers}
            />
            <Separator className="bg-white/5 mx-4" />
            <ToggleRow
              ocid="creator_privacy.show_following.switch"
              icon={<Users size={14} className="text-purple-400" />}
              label="Show Following Count"
              sublabel="Display following number on your profile"
              checked={showFollowing}
              onChange={setShowFollowing}
            />
          </Card>
        </motion.div>

        {/* 2. Content Privacy */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <SectionHeader
            icon={<Lock size={15} className="text-purple-400" />}
            title="Content Privacy"
            subtitle="Control who can see your posts, Reels and Stories"
          />
          <Card>
            <SelectRow
              ocid="creator_privacy.who_sees_posts.select"
              icon={<Eye size={14} className="text-blue-400" />}
              label="Who can see my Posts"
              value={whoSeesPosts}
              options={AUDIENCE_OPTIONS}
              onChange={(v) => {
                setWhoSeesPosts(v);
                toast.success("Posts visibility updated");
              }}
            />
            <Separator className="bg-white/5 mx-4" />
            <SelectRow
              ocid="creator_privacy.who_sees_reels.select"
              icon={<Eye size={14} className="text-purple-400" />}
              label="Who can see my Reels"
              value={whoSeesReels}
              options={AUDIENCE_OPTIONS}
              onChange={(v) => {
                setWhoSeesReels(v);
                toast.success("Reels visibility updated");
              }}
            />
            <Separator className="bg-white/5 mx-4" />
            <SelectRow
              ocid="creator_privacy.who_sees_stories.select"
              icon={<EyeOff size={14} className="text-pink-400" />}
              label="Who can see my Stories"
              value={whoSeesStories}
              options={STORIES_OPTIONS}
              onChange={(v) => {
                setWhoSeesStories(v);
                toast.success("Stories visibility updated");
              }}
            />
          </Card>
        </motion.div>

        {/* 3. Creator Stats */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.15 }}
        >
          <SectionHeader
            icon={<Sparkles size={15} className="text-yellow-400" />}
            title="Creator Stats Privacy"
            subtitle="Choose what stats are visible to your audience"
          />
          <Card>
            <ToggleRow
              ocid="creator_privacy.show_earning.switch"
              icon={<span className="text-[14px]">₹</span>}
              label="Show Earning Stats Publicly"
              sublabel="Display your earnings on your public profile"
              checked={showEarning}
              onChange={setShowEarning}
            />
            <Separator className="bg-white/5 mx-4" />
            <ToggleRow
              ocid="creator_privacy.show_honor.switch"
              icon={<span className="text-[14px]">🏅</span>}
              label="Show Honor Points & Tier"
              sublabel="Display your creator tier badge publicly"
              checked={showHonor}
              onChange={setShowHonor}
            />
            <Separator className="bg-white/5 mx-4" />
            <ToggleRow
              ocid="creator_privacy.show_views.switch"
              icon={<Eye size={14} className="text-blue-400" />}
              label="Show Total Views Publicly"
              sublabel="Show your total view count on your profile"
              checked={showViews}
              onChange={setShowViews}
            />
          </Card>
        </motion.div>

        {/* 4. Interaction Controls */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <SectionHeader
            icon={<Users size={15} className="text-blue-400" />}
            title="Interaction Controls"
            subtitle="Manage how your audience interacts with you"
          />
          <Card>
            <SelectRow
              ocid="creator_privacy.who_comments.select"
              icon={<span className="text-[14px]">💬</span>}
              label="Who can comment"
              value={whoComments}
              options={INTERACTION_OPTIONS}
              onChange={(v) => {
                setWhoComments(v);
                toast.success("Comment setting updated");
              }}
            />
            <Separator className="bg-white/5 mx-4" />
            <SelectRow
              ocid="creator_privacy.who_messages.select"
              icon={<span className="text-[14px]">📩</span>}
              label="Who can send messages"
              value={whoMessages}
              options={INTERACTION_OPTIONS}
              onChange={(v) => {
                setWhoMessages(v);
                toast.success("Message setting updated");
              }}
            />
            <Separator className="bg-white/5 mx-4" />
            <SelectRow
              ocid="creator_privacy.who_tags.select"
              icon={<span className="text-[14px]">🏷️</span>}
              label="Who can tag me"
              value={whoTags}
              options={INTERACTION_OPTIONS}
              onChange={(v) => {
                setWhoTags(v);
                toast.success("Tag setting updated");
              }}
            />
          </Card>
        </motion.div>

        {/* 5. Discovery Settings */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.25 }}
        >
          <SectionHeader
            icon={<Shield size={15} className="text-green-400" />}
            title="Discovery Settings"
            subtitle="Control how people find your profile"
          />
          <Card>
            <ToggleRow
              ocid="creator_privacy.show_in_search.switch"
              icon={<span className="text-[14px]">🔍</span>}
              label="Show in Search Results"
              sublabel="Allow others to find you by searching your name"
              checked={showInSearch}
              onChange={setShowInSearch}
            />
            <Separator className="bg-white/5 mx-4" />
            <ToggleRow
              ocid="creator_privacy.allow_recommend.switch"
              icon={<span className="text-[14px]">📢</span>}
              label="Allow Recommendations to Others"
              sublabel="Let KomoFast recommend your profile to new users"
              checked={allowRecommend}
              onChange={setAllowRecommend}
            />
            <Separator className="bg-white/5 mx-4" />
            <ToggleRow
              ocid="creator_privacy.show_suggested.switch"
              icon={<Sparkles size={14} className="text-yellow-400" />}
              label='Show in "Suggested Creators"'
              sublabel="Appear in the suggested creators section"
              checked={showSuggested}
              onChange={setShowSuggested}
            />
          </Card>
        </motion.div>

        {/* Save button */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="px-4 pt-8"
        >
          <Button
            data-ocid="creator_privacy.save.button"
            onClick={handleSave}
            disabled={saving}
            className="w-full h-12 text-[14px] font-bold rounded-2xl text-white border-0"
            style={{
              background: saving
                ? "rgba(255,255,255,0.08)"
                : "linear-gradient(90deg, #2FA8FF 0%, #A855F7 100%)",
            }}
          >
            {saving ? "Saving..." : "Save Settings"}
          </Button>
          <p className="text-center text-[11px] text-white/30 mt-3">
            Changes apply to your public creator profile immediately after
            saving.
          </p>
        </motion.div>

        {/* Footer */}
        <p className="text-center text-[11px] text-white/20 mt-8 px-4">
          © {new Date().getFullYear()}. Built with love using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white/40 transition-colors"
          >
            caffeine.ai
          </a>
        </p>
      </div>
    </div>
  );
}
