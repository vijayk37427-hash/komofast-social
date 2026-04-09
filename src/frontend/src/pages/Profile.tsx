import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Ban,
  Bookmark,
  ChevronRight,
  FileText,
  Flag,
  Flame,
  Globe,
  Grid,
  Heart,
  HelpCircle,
  Lock,
  LogOut,
  Play,
  Settings,
  Share2,
  ShoppingBag,
  Star,
  TrendingUp,
  Trophy,
  UserCheck,
  UserMinus,
  UserPlus,
  Users,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import PostDetailModal from "../components/modals/PostDetailModal";
import ReportModal from "../components/modals/ReportModal";
import { useApp } from "../context/AppContext";
import { useLanguage } from "../context/LanguageContext";
import { AVATAR_GRADIENTS, MOCK_POSTS } from "../data/mockData";
import { LANGUAGES } from "../i18n/translations";

const PROFILE_MOCK = {
  id: "me",
  username: "komofast_user",
  displayName: "Komofast User",
  bio: "Content creator & digital explorer ✨ Building the future one post at a time. Subscribe for exclusive creator content!",
  isCreator: true,
  followers: 14800,
  following: 892,
  posts: MOCK_POSTS.length,
  earnings: 2847.5,
  subscribers: 312,
  gradient: AVATAR_GRADIENTS[0],
  initials: "KU",
};

const HONOR_POINTS = 4250;

const TIERS = [
  { name: "Bronze", min: 0, max: 999, color: "#CD7F32", emoji: "🥉" },
  { name: "Silver", min: 1000, max: 4999, color: "#C0C0C0", emoji: "🥈" },
  { name: "Gold", min: 5000, max: 14999, color: "#FFD700", emoji: "🥇" },
  {
    name: "Platinum",
    min: 15000,
    max: Number.POSITIVE_INFINITY,
    color: "#E5E4E2",
    emoji: "💎",
  },
];

const ACTIVITY_STATS = [
  { label: "Login Streak", value: "7 days", icon: Flame, color: "#FF6B35" },
  { label: "Reels Watched", value: "142", icon: Play, color: "#2FA8FF" },
  { label: "Likes Given", value: "89", icon: Heart, color: "#FF4B8B" },
  { label: "Posts Shared", value: "23", icon: Share2, color: "#A855F7" },
  { label: "Referrals", value: "3", icon: Users, color: "#22C55E" },
  { label: "Purchases", value: "2", icon: ShoppingBag, color: "#F59E0B" },
];

const EARNING_HISTORY = [
  { activity: "Daily Login", points: 10, time: "Today", icon: Flame },
  { activity: "Watched 5 Reels", points: 25, time: "Today", icon: Play },
  { activity: "Liked 10 Posts", points: 10, time: "Yesterday", icon: Heart },
  {
    activity: "Referred a Friend",
    points: 200,
    time: "3 days ago",
    icon: Users,
  },
  {
    activity: "Made a Purchase",
    points: 150,
    time: "1 week ago",
    icon: ShoppingBag,
  },
];

const REWARDS = [
  { name: "10% Marketplace Discount", cost: 500, emoji: "🛒" },
  { name: "Exclusive Gold Badge", cost: 1000, emoji: "🏅" },
  { name: "Creator Boost", cost: 2000, emoji: "🚀" },
  { name: "Free Subscription", cost: 3000, emoji: "⭐" },
];

function formatNum(n: number): string {
  if (n >= 1000000) return `${(n / 1000000).toFixed(1)}M`;
  if (n >= 1000) return `${(n / 1000).toFixed(1)}K`;
  return String(n);
}

function getTierInfo(pts: number) {
  const current = TIERS.findLast((t) => pts >= t.min) ?? TIERS[0];
  const nextIndex = TIERS.indexOf(current) + 1;
  const next = TIERS[nextIndex] ?? null;
  const progress = next
    ? Math.round(((pts - current.min) / (next.min - current.min)) * 100)
    : 100;
  return { current, next, progress };
}

export default function Profile() {
  const {
    currentPath,
    currentUser,
    logout,
    navigate,
    blockedUsers,
    blockUser,
    unblockUser,
    bannedUsers,
  } = useApp();
  const { lang } = useLanguage();
  const isOwnProfile = !currentPath.includes("userId");
  const profileUsername = currentPath.includes("userId")
    ? "other_user"
    : currentUser?.username || "komofast_user";
  const [following, setFollowing] = useState(false);
  const [friendStatus, setFriendStatus] = useState<
    "none" | "pending" | "friends"
  >("none");
  const [reportUserOpen, setReportUserOpen] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [activeTab, setActiveTab] = useState<"posts" | "saved" | "earning">(
    "posts",
  );
  const [selectedPost, setSelectedPost] = useState<
    (typeof MOCK_POSTS)[0] | null
  >(null);

  const profile = currentUser
    ? {
        ...PROFILE_MOCK,
        displayName: currentUser.displayName || PROFILE_MOCK.displayName,
        username: currentUser.username || PROFILE_MOCK.username,
        bio: currentUser.bio || PROFILE_MOCK.bio,
        isCreator: currentUser.isCreator,
      }
    : PROFILE_MOCK;

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully");
  };

  const {
    current: tier,
    next: nextTier,
    progress: tierProgress,
  } = getTierInfo(HONOR_POINTS);

  const currentLang = LANGUAGES.find((l) => l.code === lang);

  return (
    <div className="max-w-2xl mx-auto px-4 py-4">
      {/* Cover */}
      <div
        className="h-32 rounded-2xl mb-0 -mb-8 relative flex items-center justify-center"
        style={{
          background:
            "linear-gradient(135deg, rgba(47,168,255,0.3) 0%, rgba(168,85,247,0.3) 100%)",
        }}
      >
        {/* KomoFast logo centered in cover */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col items-center gap-1"
        >
          <img
            src="/assets/generated/komofast-logo-transparent.dim_200x200.png"
            alt="KomoFast"
            className="w-14 h-14 object-contain"
            style={{
              filter:
                "drop-shadow(0 0 12px rgba(168,85,247,0.7)) drop-shadow(0 0 24px rgba(47,168,255,0.5))",
            }}
          />
          <span
            className="text-[10px] font-bold tracking-widest uppercase text-white/70"
            style={{ textShadow: "0 0 10px rgba(168,85,247,0.8)" }}
          >
            KomoFast
          </span>
        </motion.div>

        {isOwnProfile && (
          <div className="absolute top-3 right-3 flex gap-2">
            <button
              type="button"
              data-ocid="profile.settings.button"
              className="w-8 h-8 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/50 transition-colors"
              onClick={() => navigate("/settings")}
            >
              <Settings size={16} />
            </button>
            <button
              type="button"
              data-ocid="profile.delete_button"
              className="w-8 h-8 rounded-full bg-red-900/40 backdrop-blur-sm flex items-center justify-center text-red-400 hover:bg-red-900/60 transition-colors"
              title="Logout"
              onClick={handleLogout}
            >
              <LogOut size={15} />
            </button>
          </div>
        )}
      </div>

      {/* Avatar + info */}
      <div className="komo-surface rounded-2xl komo-card-shadow p-4 pt-12 relative">
        <div
          className="absolute -top-10 left-4 w-20 h-20 rounded-full flex items-center justify-center text-[24px] font-bold text-white border-4 border-[#1A1F26]"
          style={{ background: profile.gradient }}
        >
          {profile.initials}
        </div>

        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-[18px] font-bold text-foreground flex items-center gap-2">
                {profile.displayName}
                {bannedUsers.includes(profileUsername) && (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-500/20 text-red-400 border border-red-500/30">
                    BANNED
                  </span>
                )}
              </h1>
              {profile.isCreator && (
                <Badge className="bg-komo-badge/20 text-komo-blue border-komo-blue/30 text-[10px]">
                  <Zap size={10} className="mr-0.5" /> CREATOR
                </Badge>
              )}
              <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30 text-[10px]">
                ⭐ Premium
              </Badge>
              <Badge className="bg-purple-500/20 text-purple-400 border-purple-500\/30 text-[10px]">
                👥 Super Fan
              </Badge>
            </div>
            <p className="text-[13px] text-komo-text-muted">
              @{profile.username}
            </p>
            {/* KomoFast inline brand badge */}
            <div className="flex items-center gap-1 mt-1">
              <img
                src="/assets/generated/komofast-logo-transparent.dim_200x200.png"
                alt="KomoFast"
                className="w-4 h-4 object-contain opacity-80"
                style={{
                  filter: "drop-shadow(0 0 4px rgba(168,85,247,0.6))",
                }}
              />
              <span className="text-[10px] text-komo-text-muted font-medium tracking-wide">
                KomoFast Member
              </span>
            </div>
          </div>

          {!isOwnProfile ? (
            <div className="flex flex-col gap-2 items-end">
              <div className="flex gap-2">
                <Button
                  data-ocid="profile.follow.button"
                  size="sm"
                  className={
                    following
                      ? "bg-accent text-komo-text-secondary"
                      : "komo-gradient border-0 text-white"
                  }
                  onClick={() => {
                    setFollowing((f) => !f);
                    toast.success(following ? "Unfollowed" : "Following!");
                  }}
                >
                  {following ? (
                    <UserMinus size={14} className="mr-1" />
                  ) : (
                    <UserPlus size={14} className="mr-1" />
                  )}
                  {following ? "Unfollow" : "Follow"}
                </Button>
                <Button
                  data-ocid="profile.add_friend.button"
                  size="sm"
                  onClick={() => {
                    if (friendStatus === "none") {
                      setFriendStatus("pending");
                      toast.success("Friend request bheji gayi! 🤝");
                    }
                  }}
                  className={
                    friendStatus === "friends"
                      ? "bg-green-600/20 text-green-400 border border-green-600/40"
                      : friendStatus === "pending"
                        ? "bg-muted text-muted-foreground"
                        : "bg-gradient-to-r from-blue-500 to-purple-600 border-0 text-white"
                  }
                >
                  {friendStatus === "friends" ? (
                    <>
                      <UserCheck size={14} className="mr-1" />
                      Friends
                    </>
                  ) : friendStatus === "pending" ? (
                    <>
                      <UserPlus size={14} className="mr-1" />
                      Pending...
                    </>
                  ) : (
                    <>
                      <UserPlus size={14} className="mr-1" />
                      Add Friend
                    </>
                  )}
                </Button>
                {profile.isCreator && (
                  <Button
                    data-ocid="profile.subscribe.button"
                    size="sm"
                    variant={subscribed ? "secondary" : "outline"}
                    className={
                      subscribed
                        ? ""
                        : "border-komo-purple text-komo-purple hover:bg-komo-purple/10"
                    }
                    onClick={() => {
                      setSubscribed((s) => !s);
                      toast.success(
                        subscribed ? "Unsubscribed" : "Subscribed to creator!",
                      );
                    }}
                  >
                    <Star size={13} className="mr-1" />
                    {subscribed ? "Subscribed" : "Subscribe"}
                  </Button>
                )}
              </div>
              {/* Block & Report row */}
              <div className="flex gap-2">
                {blockedUsers.includes(profileUsername) ? (
                  <Button
                    data-ocid="profile.unblock.button"
                    size="sm"
                    variant="outline"
                    className="border-green-700/50 text-green-400 hover:bg-green-900/20 text-[11px] h-7"
                    onClick={() => {
                      unblockUser(profileUsername);
                      toast.success("User unblocked");
                    }}
                  >
                    <Ban size={11} className="mr-1" /> Unblock
                  </Button>
                ) : (
                  <Button
                    data-ocid="profile.block.button"
                    size="sm"
                    variant="outline"
                    className="border-red-800/50 text-red-400 hover:bg-red-900/20 text-[11px] h-7"
                    onClick={() => {
                      blockUser(profileUsername);
                      toast.success(`@${profileUsername} blocked`);
                    }}
                  >
                    <Ban size={11} className="mr-1" /> Block
                  </Button>
                )}
                <Button
                  data-ocid="profile.report.button"
                  size="sm"
                  variant="outline"
                  className="border-orange-800/50 text-orange-400 hover:bg-orange-900/20 text-[11px] h-7"
                  onClick={() => setReportUserOpen(true)}
                >
                  <Flag size={11} className="mr-1" /> Report
                </Button>
              </div>
            </div>
          ) : (
            <div className="flex gap-2">
              <Button
                data-ocid="profile.edit.button"
                size="sm"
                variant="outline"
                className="border-komo-border text-komo-text-secondary hover:text-foreground"
                onClick={() => toast.info("Edit profile coming soon!")}
              >
                Edit Profile
              </Button>
              <Button
                data-ocid="profile.delete_button"
                size="sm"
                variant="outline"
                className="border-red-800/50 text-red-400 hover:bg-red-900/20 hover:text-red-300"
                onClick={handleLogout}
              >
                <LogOut size={13} className="mr-1" /> Logout
              </Button>
            </div>
          )}
        </div>

        <p className="text-[13px] text-komo-text-secondary mt-3 leading-relaxed">
          {profile.bio}
        </p>

        {/* Stats row */}
        <div className="flex gap-5 mt-4 flex-wrap">
          <div className="text-center">
            <p className="text-[16px] font-bold text-foreground">
              {formatNum(profile.posts)}
            </p>
            <p className="text-[11px] text-komo-text-muted">Posts</p>
          </div>
          <div className="text-center">
            <p className="text-[16px] font-bold text-foreground">
              {formatNum(profile.followers)}
            </p>
            <p className="text-[11px] text-komo-text-muted">Followers</p>
          </div>
          <div className="text-center">
            <p className="text-[16px] font-bold text-foreground">
              {formatNum(profile.following)}
            </p>
            <p className="text-[11px] text-komo-text-muted">Following</p>
          </div>
          {profile.isCreator && (
            <div className="text-center">
              <p className="text-[16px] font-bold text-foreground">
                {formatNum(profile.subscribers)}
              </p>
              <p className="text-[11px] text-komo-text-muted">Subscribers</p>
            </div>
          )}
          <div className="text-center">
            <p className="text-[16px] font-bold komo-gradient-text">
              {formatNum(HONOR_POINTS)}
            </p>
            <p className="text-[11px] text-komo-text-muted">Honor Pts</p>
          </div>
        </div>

        {/* Wallet shortcut */}
        {isOwnProfile && (
          <div
            className="mt-4 p-3 rounded-xl flex items-center gap-3"
            style={{
              background:
                "linear-gradient(135deg, rgba(47,168,255,0.08), rgba(168,85,247,0.12))",
              border: "1px solid rgba(168,85,247,0.25)",
            }}
          >
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center text-[18px]"
              style={{
                background: "linear-gradient(135deg, #2fa8ff, #a855f7)",
              }}
            >
              💳
            </div>
            <div className="flex-1">
              <p className="text-[11px] text-komo-text-muted">My Wallet</p>
              <div className="flex items-center gap-3 mt-0.5">
                <span className="text-[14px] font-bold komo-gradient-text">
                  ₹4,890
                </span>
                <span className="text-[11px] text-yellow-400 font-medium">
                  🪙 2,450 Coins
                </span>
              </div>
            </div>
            <Button
              data-ocid="profile.wallet.button"
              size="sm"
              className="komo-gradient border-0 text-white text-[11px] h-7 px-3"
              onClick={() => navigate("/wallet")}
            >
              View Wallet
            </Button>
          </div>
        )}

        {/* Creator earnings */}
        {isOwnProfile && profile.isCreator && (
          <div
            className="mt-4 p-3 rounded-xl flex items-center gap-3"
            style={{
              background:
                "linear-gradient(135deg, rgba(47,168,255,0.1), rgba(168,85,247,0.1))",
              border: "1px solid rgba(168,85,247,0.2)",
            }}
          >
            <div className="w-9 h-9 rounded-full komo-gradient flex items-center justify-center">
              <TrendingUp size={16} className="text-white" />
            </div>
            <div>
              <p className="text-[11px] text-komo-text-muted">
                Creator Earnings
              </p>
              <p className="text-[18px] font-bold komo-gradient-text">
                ${profile.earnings.toFixed(2)}
              </p>
            </div>
            <Button
              data-ocid="profile.withdraw.button"
              size="sm"
              className="ml-auto komo-gradient border-0 text-white text-[12px]"
              onClick={() => toast.info("Withdrawal coming soon!")}
            >
              Withdraw
            </Button>
          </div>
        )}
      </div>

      {/* Tabs */}
      <div
        data-ocid="profile.content.tab"
        className="flex border-b border-komo-border mt-5"
      >
        <button
          type="button"
          onClick={() => setActiveTab("posts")}
          className={`flex items-center gap-2 px-5 py-3 text-[13px] font-semibold border-b-2 transition-colors ${
            activeTab === "posts"
              ? "border-komo-blue text-komo-blue"
              : "border-transparent text-komo-text-muted hover:text-foreground"
          }`}
        >
          <Grid size={15} /> Posts
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("saved")}
          className={`flex items-center gap-2 px-5 py-3 text-[13px] font-semibold border-b-2 transition-colors ${
            activeTab === "saved"
              ? "border-komo-blue text-komo-blue"
              : "border-transparent text-komo-text-muted hover:text-foreground"
          }`}
        >
          <Bookmark size={15} /> Saved
        </button>
        <button
          type="button"
          data-ocid="profile.earning.tab"
          onClick={() => setActiveTab("earning")}
          className={`flex items-center gap-2 px-5 py-3 text-[13px] font-semibold border-b-2 transition-colors ${
            activeTab === "earning"
              ? "border-komo-blue text-komo-blue"
              : "border-transparent text-komo-text-muted hover:text-foreground"
          }`}
        >
          <Trophy size={15} /> Earning
        </button>
      </div>

      <AnimatePresence mode="wait">
        {/* Post/Saved grid */}
        {(activeTab === "posts" || activeTab === "saved") && (
          <motion.div
            key="grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-3 gap-1 mt-1"
          >
            {(activeTab === "saved"
              ? MOCK_POSTS.filter((p) => p.bookmarked)
              : MOCK_POSTS
            ).map((post, i) => (
              <motion.button
                key={post.id}
                data-ocid={`profile.post.item.${i + 1}`}
                className="aspect-square rounded-sm overflow-hidden relative group"
                onClick={() => setSelectedPost(post)}
                whileHover={{ opacity: 0.85 }}
              >
                {post.image ? (
                  <img
                    src={post.image}
                    alt="post"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div
                    className="w-full h-full flex items-center justify-center text-[11px] text-white font-medium p-2 text-center"
                    style={{ background: post.gradient }}
                  >
                    {post.caption.slice(0, 30)}...
                  </div>
                )}
              </motion.button>
            ))}
          </motion.div>
        )}

        {/* Earning tab */}
        {activeTab === "earning" && (
          <motion.div
            key="earning"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="mt-4 space-y-4 pb-8"
          >
            {/* Earning Account Card */}
            <div
              className="rounded-2xl p-4 flex items-center gap-4"
              style={{
                background:
                  "linear-gradient(135deg, rgba(34,197,94,0.1), rgba(47,168,255,0.15))",
                border: "1px solid rgba(47,168,255,0.3)",
                boxShadow: "0 4px 16px rgba(47,168,255,0.1)",
              }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-[22px] flex-shrink-0"
                style={{
                  background: "linear-gradient(135deg, #22c55e, #2fa8ff)",
                }}
              >
                💰
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[14px] font-bold text-foreground">
                  Earning Account
                </p>
                <p className="text-[12px] text-komo-text-muted leading-snug mt-0.5">
                  View all income sources &amp; linked accounts
                </p>
              </div>
              <Button
                data-ocid="profile.earning_account.primary_button"
                size="sm"
                className="komo-gradient border-0 text-white text-[12px] h-8 px-3 flex-shrink-0"
                onClick={() => navigate("/earning-account")}
              >
                Open
              </Button>
            </div>

            {/* Creator Studio Card */}
            <div
              className="rounded-2xl p-4 flex items-center gap-4"
              style={{
                background:
                  "linear-gradient(135deg, rgba(47,168,255,0.12), rgba(168,85,247,0.18))",
                border: "1px solid rgba(168,85,247,0.3)",
                boxShadow: "0 4px 16px rgba(168,85,247,0.12)",
              }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-[22px] flex-shrink-0"
                style={{
                  background: "linear-gradient(135deg, #2fa8ff, #a855f7)",
                }}
              >
                🚀
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[14px] font-bold text-foreground">
                  Creator Studio
                </p>
                <p className="text-[12px] text-komo-text-muted leading-snug mt-0.5">
                  Track earnings, check monetization eligibility
                </p>
              </div>
              <Button
                data-ocid="profile.creator_studio.primary_button"
                size="sm"
                className="komo-gradient border-0 text-white text-[12px] h-8 px-3 flex-shrink-0"
                onClick={() => navigate("/creator")}
              >
                Open
              </Button>
            </div>

            {/* Donation Link Card */}
            <div
              className="rounded-2xl p-4 flex items-center gap-4"
              style={{
                background:
                  "linear-gradient(135deg, rgba(244,114,182,0.12), rgba(168,85,247,0.18))",
                border: "1px solid rgba(244,114,182,0.35)",
                boxShadow: "0 4px 16px rgba(244,114,182,0.1)",
              }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-[22px] flex-shrink-0"
                style={{
                  background: "linear-gradient(135deg, #f472b6, #a855f7)",
                }}
              >
                💝
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[14px] font-bold text-foreground">
                  Donation Link
                </p>
                <p className="text-[12px] text-komo-text-muted leading-snug mt-0.5">
                  Accept donations from your supporters
                </p>
              </div>
              <Button
                data-ocid="profile.donate.primary_button"
                size="sm"
                className="border-0 text-white text-[12px] h-8 px-3 flex-shrink-0"
                style={{
                  background: "linear-gradient(135deg, #f472b6, #a855f7)",
                }}
                onClick={() => navigate("/donate")}
              >
                Open
              </Button>
            </div>

            {/* Honor Tier Card */}
            <div
              className="rounded-2xl p-5 relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, rgba(47,168,255,0.18) 0%, rgba(168,85,247,0.22) 60%, rgba(255,107,53,0.12) 100%)",
                border: "1px solid rgba(168,85,247,0.3)",
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{tier.emoji}</span>
                <div>
                  <p className="text-[11px] text-komo-text-muted uppercase tracking-widest">
                    Current Tier
                  </p>
                  <p
                    className="text-[20px] font-bold"
                    style={{ color: tier.color }}
                  >
                    {tier.name}
                  </p>
                </div>
                <div className="ml-auto text-right">
                  <p className="text-[11px] text-komo-text-muted">
                    Honor Points
                  </p>
                  <p className="text-[28px] font-bold komo-gradient-text leading-tight">
                    {HONOR_POINTS.toLocaleString()}
                  </p>
                </div>
              </div>

              {nextTier && (
                <>
                  <div className="flex justify-between text-[11px] text-komo-text-muted mb-1.5">
                    <span>{tier.name}</span>
                    <span>{nextTier.name}</span>
                  </div>
                  <Progress value={tierProgress} className="h-2 bg-white/10" />
                  <p className="text-[12px] text-komo-text-secondary mt-2">
                    <span
                      className="font-semibold"
                      style={{ color: nextTier.color }}
                    >
                      {(nextTier.min - HONOR_POINTS).toLocaleString()} pts
                    </span>{" "}
                    to reach {nextTier.emoji} {nextTier.name}
                  </p>
                </>
              )}
              {!nextTier && (
                <p className="text-[12px] text-komo-text-secondary mt-2">
                  🏆 You've reached the highest tier!
                </p>
              )}
            </div>

            {/* Activity Summary Grid */}
            <div>
              <p className="text-[13px] font-semibold text-komo-text-secondary mb-2 flex items-center gap-1.5">
                <Zap size={14} className="text-komo-blue" /> Activity Summary
              </p>
              <div className="grid grid-cols-3 gap-2">
                {ACTIVITY_STATS.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl p-3 flex flex-col items-center gap-1.5"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <stat.icon size={18} style={{ color: stat.color }} />
                    <p className="text-[15px] font-bold text-foreground">
                      {stat.value}
                    </p>
                    <p className="text-[10px] text-komo-text-muted text-center leading-tight">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Earning History */}
            <div>
              <p className="text-[13px] font-semibold text-komo-text-secondary mb-2 flex items-center gap-1.5">
                <TrendingUp size={14} className="text-komo-purple" /> Earning
                History
              </p>
              <div
                className="rounded-xl overflow-hidden"
                style={{ border: "1px solid rgba(255,255,255,0.08)" }}
              >
                {EARNING_HISTORY.map((item, i) => (
                  <div
                    key={item.activity}
                    className={`flex items-center gap-3 px-4 py-3 ${
                      i < EARNING_HISTORY.length - 1
                        ? "border-b border-white/5"
                        : ""
                    }`}
                    style={{ background: "rgba(255,255,255,0.03)" }}
                  >
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(47,168,255,0.15)" }}
                    >
                      <item.icon size={15} className="text-komo-blue" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[13px] font-medium text-foreground truncate">
                        {item.activity}
                      </p>
                      <p className="text-[11px] text-komo-text-muted">
                        {item.time}
                      </p>
                    </div>
                    <Badge
                      className="text-[11px] font-bold shrink-0"
                      style={{
                        background: "rgba(34,197,94,0.15)",
                        color: "#4ade80",
                        border: "1px solid rgba(34,197,94,0.3)",
                      }}
                    >
                      +{item.points} pts
                    </Badge>
                  </div>
                ))}
              </div>
            </div>

            {/* Redeem Rewards */}
            <div>
              <p className="text-[13px] font-semibold text-komo-text-secondary mb-2 flex items-center gap-1.5">
                <Star size={14} className="text-yellow-400" /> Redeem Rewards
              </p>
              <ScrollArea className="w-full">
                <div className="flex gap-3 pb-2">
                  {REWARDS.map((reward) => {
                    const canRedeem = HONOR_POINTS >= reward.cost;
                    return (
                      <div
                        key={reward.name}
                        className="rounded-xl p-4 flex-shrink-0 w-40 flex flex-col gap-2 relative"
                        style={{
                          background: canRedeem
                            ? "linear-gradient(135deg, rgba(47,168,255,0.1), rgba(168,85,247,0.12))"
                            : "rgba(255,255,255,0.03)",
                          border: canRedeem
                            ? "1px solid rgba(168,85,247,0.3)"
                            : "1px solid rgba(255,255,255,0.07)",
                        }}
                      >
                        {!canRedeem && (
                          <Lock
                            size={12}
                            className="absolute top-2.5 right-2.5 text-komo-text-muted opacity-60"
                          />
                        )}
                        <span className="text-2xl">{reward.emoji}</span>
                        <p
                          className={`text-[12px] font-semibold leading-tight ${
                            canRedeem
                              ? "text-foreground"
                              : "text-komo-text-muted"
                          }`}
                        >
                          {reward.name}
                        </p>
                        <p className="text-[11px] text-komo-text-muted">
                          {reward.cost.toLocaleString()} pts
                        </p>
                        <Button
                          data-ocid="profile.primary_button"
                          size="sm"
                          variant="outline"
                          disabled={!canRedeem}
                          className={`mt-auto text-[11px] h-7 ${
                            canRedeem
                              ? "border-komo-purple text-komo-purple hover:bg-komo-purple/10"
                              : "border-white/10 text-komo-text-muted cursor-not-allowed"
                          }`}
                          onClick={() =>
                            canRedeem
                              ? toast.success(`Redeemed: ${reward.name}!`)
                              : undefined
                          }
                        >
                          {canRedeem ? "Redeem" : "Locked"}
                        </Button>
                      </div>
                    );
                  })}
                </div>
              </ScrollArea>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* AI Tools Section */}
      {isOwnProfile && (
        <div
          className="mt-4 rounded-2xl overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div className="px-4 py-3 border-b border-white/5">
            <p className="text-[12px] font-semibold text-white/50 uppercase tracking-wider">
              🤖 AI Tools
            </p>
          </div>
          {[
            {
              label: "AI Voice Bot",
              sublabel: "AI Call Assistant",
              path: "/ai-voice-bot",
              emoji: "📞",
              color: "#2fa8ff",
            },
            {
              label: "AI Customer Support",
              sublabel: "Smart Chatbot",
              path: "/ai-support-chat",
              emoji: "🎧",
              color: "#a855f7",
            },
            {
              label: "AI Sales Chat",
              sublabel: "Sales & Offers",
              path: "/ai-sales-chat",
              emoji: "💼",
              color: "#f59e0b",
            },
          ].map((item, idx, arr) => (
            <button
              key={item.path}
              type="button"
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-white/5 transition-colors ${idx < arr.length - 1 ? "border-b border-white/5" : ""}`}
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-[16px] flex-shrink-0"
                style={{
                  background: `${item.color}22`,
                  border: `1px solid ${item.color}44`,
                }}
              >
                {item.emoji}
              </div>
              <div className="flex-1">
                <span className="text-[13px] font-medium text-white/80 block">
                  {item.label}
                </span>
                <span className="text-[11px] text-white/40">
                  {item.sublabel}
                </span>
              </div>
              <ChevronRight size={15} className="text-white/30" />
            </button>
          ))}
        </div>
      )}

      {/* Support & Legal Links */}
      {isOwnProfile && (
        <div
          className="mt-4 rounded-2xl overflow-hidden mb-6"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div className="px-4 py-3 border-b border-white/5">
            <p className="text-[12px] font-semibold text-white/50 uppercase tracking-wider">
              Support &amp; Legal
            </p>
          </div>

          {/* Language Setting */}
          <button
            type="button"
            data-ocid="profile.language.link"
            onClick={() => navigate("/language")}
            className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-white/5 transition-colors border-b border-white/5"
          >
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(47,168,255,0.25), rgba(168,85,247,0.25))",
              }}
            >
              <Globe size={14} className="text-komo-blue" />
            </div>
            <span className="flex-1 text-[13px] font-medium text-white/70">
              Language / भाषा
            </span>
            <span className="text-[12px] text-komo-text-muted mr-1">
              {currentLang?.flag} {currentLang?.native}
            </span>
            <ChevronRight size={15} className="text-white/30" />
          </button>

          {/* Help Center */}
          <button
            type="button"
            data-ocid="profile.help.link"
            onClick={() => navigate("/help")}
            className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-white/5 transition-colors border-b border-white/5"
          >
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(47,168,255,0.25), rgba(168,85,247,0.25))",
              }}
            >
              <HelpCircle size={14} className="text-komo-blue" />
            </div>
            <span className="flex-1 text-[13px] font-medium text-white/70">
              Help Center / सहायता केंद्र
            </span>
            <ChevronRight size={15} className="text-white/30" />
          </button>
          {[
            {
              label: "Privacy Policy",
              path: "/privacy-policy",
              emoji: "🔒",
              ocid: "profile.privacy.link",
            },
            {
              label: "Terms & Conditions",
              path: "/terms",
              emoji: "📜",
              ocid: "profile.terms.link",
            },
            {
              label: "Data Protection (IT Act)",
              path: "/data-protection",
              emoji: "🛡️",
              ocid: "profile.dataprotection.link",
            },
            {
              label: "Community Guidelines",
              path: "/community-guidelines",
              emoji: "📋",
              ocid: "profile.community_guidelines.link",
            },
            {
              label: "Content Rules",
              path: "/content-rules",
              emoji: "📖",
              ocid: "profile.content_rules.link",
            },
            {
              label: "File a Complaint",
              path: "/complaints",
              emoji: "📝",
              ocid: "profile.complaints.link",
            },
          ].map((item, idx, arr) => (
            <button
              key={item.path}
              type="button"
              data-ocid={item.ocid}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-white/5 transition-colors ${idx < arr.length - 1 ? "border-b border-white/5" : ""}`}
            >
              <span className="text-[18px]">{item.emoji}</span>
              <span className="flex-1 text-[13px] font-medium text-white/70">
                {item.label}
              </span>
              <ChevronRight size={15} className="text-white/30" />
            </button>
          ))}
        </div>
      )}

      <PostDetailModal
        post={selectedPost}
        open={!!selectedPost}
        onClose={() => setSelectedPost(null)}
      />

      <ReportModal
        open={reportUserOpen}
        onClose={() => setReportUserOpen(false)}
        targetId={profileUsername}
        targetUsername={profileUsername}
        type="user"
      />
    </div>
  );
}
