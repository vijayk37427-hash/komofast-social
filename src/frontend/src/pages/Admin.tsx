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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import {
  AlertTriangle,
  BarChart2,
  Check,
  Crown,
  Download,
  Edit,
  Headphones,
  LayoutDashboard,
  Loader2,
  Megaphone,
  Package,
  Plus,
  RefreshCw,
  Shield,
  ShoppingBag,
  ToggleLeft,
  ToggleRight,
  Trash2,
  TrendingUp,
  Users,
  X,
} from "lucide-react";
import { motion } from "motion/react";
import React, { useState } from "react";
import { toast } from "sonner";
import { useApp } from "../context/AppContext";
import { AVATAR_GRADIENTS, MOCK_PRODUCTS } from "../data/mockData";
import {
  useAllUsers,
  useApprovePost,
  useCreateProduct,
  useDeleteProduct,
  usePendingPosts,
  usePlatformStats,
  useRejectPost,
  useToggleUserActive,
} from "../hooks/useQueries";

const SIDEBAR_ITEMS = [
  { id: "overview", label: "Overview", icon: LayoutDashboard },
  { id: "users", label: "Users", icon: Users },
  { id: "moderation", label: "Moderation", icon: Shield },
  { id: "marketplace", label: "Marketplace", icon: ShoppingBag },
  { id: "analytics", label: "Analytics", icon: BarChart2 },
  { id: "ads", label: "Ads", icon: Megaphone },
  { id: "owner", label: "Owner", icon: Crown },
];

const MOCK_USERS_ADMIN = [
  {
    id: "u1",
    displayName: "Alex Creator",
    username: "alex_creates",
    role: "user",
    isActive: true,
    isCreator: true,
    posts: 42,
    followers: 2847,
    initials: "AC",
    gradient: AVATAR_GRADIENTS[0],
  },
  {
    id: "u2",
    displayName: "Riya Travels",
    username: "travel_riya",
    role: "user",
    isActive: true,
    isCreator: false,
    posts: 18,
    followers: 5421,
    initials: "TR",
    gradient: AVATAR_GRADIENTS[2],
  },
  {
    id: "u3",
    displayName: "Dev Master",
    username: "devmaster",
    role: "owner",
    isActive: true,
    isCreator: true,
    posts: 67,
    followers: 1293,
    initials: "DM",
    gradient: AVATAR_GRADIENTS[3],
  },
  {
    id: "u4",
    displayName: "Nova Beats",
    username: "nova_beats",
    role: "user",
    isActive: false,
    isCreator: true,
    posts: 31,
    followers: 4521,
    initials: "NB",
    gradient: AVATAR_GRADIENTS[4],
  },
  {
    id: "u5",
    displayName: "Emi Wellness",
    username: "emi_yoga",
    role: "user",
    isActive: true,
    isCreator: false,
    posts: 25,
    followers: 3156,
    initials: "EY",
    gradient: AVATAR_GRADIENTS[6],
  },
];

const MOCK_PENDING_POSTS = [
  {
    id: "pp1",
    username: "new_user_42",
    initials: "NU",
    gradient: AVATAR_GRADIENTS[7],
    caption:
      "Check out my new content piece! Excited to share this with the Komofast community.",
    type: "post",
    time: "10m ago",
  },
  {
    id: "pp2",
    username: "creator_sarah",
    initials: "CS",
    gradient: AVATAR_GRADIENTS[1],
    caption:
      "My latest reel showcasing the new dance challenge that's been trending worldwide!",
    type: "reel",
    time: "25m ago",
  },
  {
    id: "pp3",
    username: "techblog_jay",
    initials: "TJ",
    gradient: AVATAR_GRADIENTS[5],
    caption:
      "5 reasons why Web3 social media is the future - A deep dive into decentralized platforms.",
    type: "post",
    time: "1h ago",
  },
];

function RoleBadge({ role }: { role: string }) {
  if (role === "owner") {
    return (
      <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/40 text-[10px] gap-1">
        <Crown size={9} /> owner
      </Badge>
    );
  }
  if (role === "admin") {
    return (
      <Badge className="bg-komo-badge/20 text-komo-blue border-komo-blue/30 text-[10px]">
        admin
      </Badge>
    );
  }
  return (
    <Badge className="bg-accent text-komo-text-secondary border-0 text-[10px]">
      user
    </Badge>
  );
}

function StatCard({
  title,
  value,
  icon: Icon,
  color,
}: { title: string; value: string; icon: any; color: string }) {
  return (
    <div className="komo-surface rounded-2xl komo-card-shadow p-4">
      <div className="flex items-center gap-3">
        <div
          className={`w-10 h-10 rounded-xl flex items-center justify-center ${color}`}
        >
          <Icon size={20} className="text-white" />
        </div>
        <div>
          <p className="text-[12px] text-komo-text-muted">{title}</p>
          <p className="text-[22px] font-bold komo-gradient-text">{value}</p>
        </div>
      </div>
    </div>
  );
}

const ADS_DATA_INIT = [
  {
    id: 1,
    title: "Summer Sale",
    advertiser: "FashionBrand",
    type: "Banner",
    status: "Active",
    impressions: "450K",
    ctr: "3.2%",
    budget: "₹12,000",
  },
  {
    id: 2,
    title: "New App Launch",
    advertiser: "TechCorp",
    type: "Video",
    status: "Active",
    impressions: "220K",
    ctr: "5.8%",
    budget: "₹25,000",
  },
  {
    id: 3,
    title: "Food Delivery Offer",
    advertiser: "QuickEats",
    type: "Story",
    status: "Paused",
    impressions: "180K",
    ctr: "2.1%",
    budget: "₹8,500",
  },
  {
    id: 4,
    title: "Fitness Challenge",
    advertiser: "GymPro",
    type: "Banner",
    status: "Active",
    impressions: "310K",
    ctr: "4.5%",
    budget: "₹15,000",
  },
  {
    id: 5,
    title: "Online Course",
    advertiser: "LearnNow",
    type: "Video",
    status: "Ended",
    impressions: "95K",
    ctr: "1.9%",
    budget: "₹5,000",
  },
];

const AD_THUMB_GRADIENTS = [
  "linear-gradient(135deg, #2FA8FF, #A855F7)",
  "linear-gradient(135deg, #f59e0b, #ef4444)",
  "linear-gradient(135deg, #22c55e, #2FA8FF)",
  "linear-gradient(135deg, #A855F7, #ec4899)",
  "linear-gradient(135deg, #64748b, #475569)",
];

const CATEGORY_META: Record<
  string,
  { label: string; emoji: string; bgColor: string; textColor: string }
> = {
  fake_news: {
    label: "Fake News",
    emoji: "🗞️",
    bgColor: "bg-orange-500/15",
    textColor: "text-orange-400",
  },
  adult_content: {
    label: "Adult Content",
    emoji: "🔞",
    bgColor: "bg-red-500/15",
    textColor: "text-red-400",
  },
  hate_speech: {
    label: "Hate Speech",
    emoji: "💬",
    bgColor: "bg-red-600/15",
    textColor: "text-red-500",
  },
  spam: {
    label: "Spam",
    emoji: "📢",
    bgColor: "bg-yellow-500/15",
    textColor: "text-yellow-400",
  },
  other: {
    label: "Other",
    emoji: "⚠️",
    bgColor: "bg-white/10",
    textColor: "text-komo-text-muted",
  },
};

const MODERATION_CATEGORIES = [
  {
    emoji: "📰",
    category: "Fake News / Misinformation",
    description:
      "Deliberately false or misleading information presented as fact.",
    action: "Warning → Ban",
    enforcement:
      "1st offense: Warning. 2nd offense: 7-day suspension. 3rd offense: Permanent ban.",
  },
  {
    emoji: "🔞",
    category: "Adult / Sexual Content",
    description: "Explicit, pornographic, or sexually suggestive material.",
    action: "Immediate Removal",
    enforcement:
      "Immediate content removal. Repeat offenders: Account permanently banned.",
  },
  {
    emoji: "💢",
    category: "Hate Speech",
    description:
      "Content promoting discrimination, violence, or hatred based on race, religion, gender, or nationality.",
    action: "Warning → Ban",
    enforcement:
      "1st offense: Warning + removal. 2nd offense: 30-day suspension. 3rd offense: Permanent ban.",
  },
  {
    emoji: "🔪",
    category: "Violence / Gore",
    description:
      "Graphic depictions of violence, self-harm, or threats of physical harm.",
    action: "Immediate Removal",
    enforcement:
      "Immediate removal. Reported to authorities if content involves real threats.",
  },
  {
    emoji: "📧",
    category: "Spam / Scam",
    description:
      "Unsolicited commercial messages, phishing links, or fraudulent schemes.",
    action: "Warning → Suspension",
    enforcement:
      "1st offense: Warning. 2nd offense: 14-day suspension. Persistent: Permanent ban.",
  },
  {
    emoji: "❌",
    category: "Illegal Content",
    description:
      "Any content that violates Indian law or international laws (IT Act 2000).",
    action: "Immediate Ban",
    enforcement:
      "Immediate permanent ban + content removal. Case reported to law enforcement as required.",
  },
];

function ModerationPanel() {
  const { reportedItems, bannedUsers, banUser, unbanUser, updateReportStatus } =
    useApp();
  const [autoModEnabled, setAutoModEnabled] = useState(true);
  const pendingReports = reportedItems.filter((r) => r.status === "pending");
  const removedCount = reportedItems.filter(
    (r) => r.status === "removed",
  ).length;

  const formatTime = (d: Date) => {
    const mins = Math.round((Date.now() - d.getTime()) / 60000);
    if (mins < 60) return `${mins}m ago`;
    if (mins < 1440) return `${Math.round(mins / 60)}h ago`;
    return `${Math.round(mins / 1440)}d ago`;
  };

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h1 className="text-[20px] font-bold text-foreground">
          Content Moderation
        </h1>
        <Badge className="bg-orange-500/15 text-orange-400 border-orange-500/30">
          {pendingReports.length} pending
        </Badge>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-2 sm:gap-3">
        <div className="komo-surface rounded-xl p-3 komo-card-shadow text-center">
          <p className="text-[22px] font-bold text-orange-400">
            {pendingReports.length}
          </p>
          <p className="text-[11px] text-komo-text-muted mt-0.5">
            Pending Reports
          </p>
        </div>
        <div className="komo-surface rounded-xl p-3 komo-card-shadow text-center">
          <p className="text-[22px] font-bold text-red-400">{removedCount}</p>
          <p className="text-[11px] text-komo-text-muted mt-0.5">Removed</p>
        </div>
        <div className="komo-surface rounded-xl p-3 komo-card-shadow text-center">
          <p className="text-[22px] font-bold text-foreground">
            {bannedUsers.length}
          </p>
          <p className="text-[11px] text-komo-text-muted mt-0.5">
            Banned Users
          </p>
        </div>
      </div>

      {/* Reports Queue */}
      <div className="komo-surface rounded-2xl komo-card-shadow overflow-hidden">
        <div className="px-4 py-3 border-b border-komo-border flex items-center gap-2">
          <Shield size={15} className="text-komo-blue" />
          <span className="text-[14px] font-semibold text-foreground">
            Reports Queue
          </span>
        </div>
        {pendingReports.length === 0 ? (
          <div
            data-ocid="admin.moderation.empty_state"
            className="text-center py-10"
          >
            <Check size={32} className="text-green-400 mx-auto mb-2" />
            <p className="text-foreground font-semibold text-[14px]">
              No pending reports
            </p>
            <p className="text-komo-text-muted text-[12px] mt-0.5">
              All clear!
            </p>
          </div>
        ) : (
          <div className="flex flex-col divide-y divide-komo-border">
            {pendingReports.map((report, i) => {
              const meta =
                CATEGORY_META[report.category] ?? CATEGORY_META.other;
              return (
                <motion.div
                  key={report.id}
                  data-ocid={`admin.moderation.item.${i + 1}`}
                  className="p-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center text-[11px] font-bold text-white flex-shrink-0"
                      style={{
                        background:
                          AVATAR_GRADIENTS[i % AVATAR_GRADIENTS.length],
                      }}
                    >
                      {report.targetUsername.slice(0, 2).toUpperCase()}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-[13px] font-semibold text-foreground">
                          @{report.targetUsername}
                        </span>
                        <span
                          className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${meta.bgColor} ${meta.textColor}`}
                        >
                          {meta.emoji} {meta.label}
                        </span>
                        <Badge className="text-[9px] bg-accent text-komo-text-muted border-0">
                          {report.type}
                        </Badge>
                        <span className="text-[11px] text-komo-text-muted ml-auto">
                          {formatTime(report.timestamp)}
                        </span>
                      </div>
                      {report.description && (
                        <p className="text-[12px] text-komo-text-secondary mt-1 line-clamp-2">
                          {report.description}
                        </p>
                      )}
                      <p className="text-[11px] text-komo-text-muted mt-0.5">
                        Reported by @{report.reportedBy}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      data-ocid={`admin.moderation.remove.${i + 1}`}
                      size="sm"
                      className="flex-1 bg-red-500/15 text-red-400 hover:bg-red-500/25 border-0 text-[12px] h-8"
                      onClick={() => {
                        updateReportStatus(report.id, "removed");
                        toast.success("Content removed");
                      }}
                    >
                      <Trash2 size={12} className="mr-1" /> Remove
                    </Button>
                    <Button
                      data-ocid={`admin.moderation.dismiss.${i + 1}`}
                      size="sm"
                      variant="ghost"
                      className="flex-1 text-komo-text-muted hover:text-foreground text-[12px] h-8"
                      onClick={() => {
                        updateReportStatus(report.id, "dismissed");
                        toast.success("Report dismissed");
                      }}
                    >
                      <X size={12} className="mr-1" /> Dismiss
                    </Button>
                    <Button
                      data-ocid={`admin.moderation.ban.${i + 1}`}
                      size="sm"
                      className="bg-red-900/30 text-red-300 hover:bg-red-900/50 border-0 text-[12px] h-8 px-3"
                      onClick={() => {
                        banUser(report.targetUsername);
                        updateReportStatus(report.id, "removed");
                        toast.success(`@${report.targetUsername} banned`);
                      }}
                    >
                      Ban User
                    </Button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>

      {/* Banned Users */}
      <div className="komo-surface rounded-2xl komo-card-shadow overflow-hidden">
        <div className="px-4 py-3 border-b border-komo-border flex items-center gap-2">
          <Users size={15} className="text-red-400" />
          <span className="text-[14px] font-semibold text-foreground">
            Banned Users
          </span>
          {bannedUsers.length > 0 && (
            <Badge className="ml-auto bg-red-500/15 text-red-400 border-red-500/30 text-[10px]">
              {bannedUsers.length}
            </Badge>
          )}
        </div>
        {bannedUsers.length === 0 ? (
          <div
            data-ocid="admin.banned.empty_state"
            className="text-center py-8"
          >
            <p className="text-komo-text-muted text-[13px]">No banned users</p>
          </div>
        ) : (
          <div className="flex flex-col divide-y divide-komo-border">
            {bannedUsers.map((username, i) => (
              <div
                key={username}
                data-ocid={`admin.banned.item.${i + 1}`}
                className="flex items-center justify-between px-4 py-3"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-bold text-white"
                    style={{
                      background: AVATAR_GRADIENTS[i % AVATAR_GRADIENTS.length],
                    }}
                  >
                    {username.slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-foreground">
                      @{username}
                    </p>
                    <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-red-500/15 text-red-400 font-semibold">
                      BANNED
                    </span>
                  </div>
                </div>
                <Button
                  data-ocid={`admin.banned.unban.${i + 1}`}
                  size="sm"
                  variant="outline"
                  className="border-green-700/50 text-green-400 hover:bg-green-900/20 text-[12px] h-8"
                  onClick={() => {
                    unbanUser(username);
                    toast.success(`@${username} unbanned`);
                  }}
                >
                  Unban
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Content Moderation Policy */}
      <div className="komo-surface rounded-2xl komo-card-shadow overflow-hidden">
        <div className="px-4 py-3 border-b border-komo-border flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield size={15} className="text-komo-purple" />
            <span className="text-[14px] font-semibold text-foreground">
              Content Moderation Policy
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span
              className={`text-[11px] font-semibold ${autoModEnabled ? "text-green-400" : "text-komo-text-muted"}`}
            >
              {autoModEnabled ? "Auto-Mod ON" : "Auto-Mod OFF"}
            </span>
            <Switch
              checked={autoModEnabled}
              onCheckedChange={setAutoModEnabled}
            />
          </div>
        </div>

        <div className="p-4 space-y-3">
          {MODERATION_CATEGORIES.map((cat) => (
            <div
              key={cat.category}
              className="rounded-xl p-3"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div className="flex items-center gap-2 mb-1">
                <span>{cat.emoji}</span>
                <span className="text-[13px] font-bold text-foreground">
                  {cat.category}
                </span>
                <Badge className="ml-auto text-[9px] bg-red-500/15 text-red-400 border-red-500/30">
                  {cat.action}
                </Badge>
              </div>
              <p className="text-[12px] text-komo-text-muted">
                {cat.description}
              </p>
              <p className="text-[11px] text-orange-400/80 mt-1">
                ⚠️ {cat.enforcement}
              </p>
            </div>
          ))}
        </div>

        <div
          className="mx-4 mb-4 p-3 rounded-xl"
          style={{
            background: "rgba(47,168,255,0.07)",
            border: "1px solid rgba(47,168,255,0.2)",
          }}
        >
          <p className="text-[12px] font-semibold text-komo-blue mb-1">
            📌 Appeal Process
          </p>
          <p className="text-[12px] text-komo-text-muted">
            Users can appeal content removal decisions within{" "}
            <strong className="text-white/80">7 days</strong> by contacting{" "}
            <span className="text-komo-blue">vijayk37427@gmail.com</span> with
            their username and the content ID.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Admin() {
  const { isAdmin: _isAdmin } = useApp();
  const [activeSection, setActiveSection] = useState("overview");
  const [users, setUsers] = useState(MOCK_USERS_ADMIN);
  const [_pendingPosts, setPendingPosts] = useState(MOCK_PENDING_POSTS);
  const [products, setProducts] = useState(MOCK_PRODUCTS);
  const [addProductOpen, setAddProductOpen] = useState(false);
  const [newProduct, setNewProduct] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    stock: "",
  });

  // Ads section state
  const [createAdOpen, setCreateAdOpen] = useState(false);
  const [adFrequency, setAdFrequency] = useState(3);
  const [newAd, setNewAd] = useState({
    title: "",
    advertiser: "",
    type: "Banner",
    budget: "",
    duration: "7 days",
  });
  const [adsData, setAdsData] = useState(ADS_DATA_INIT);

  // Owner section state
  const [ownerRoles, setOwnerRoles] = useState<Record<string, string>>(
    Object.fromEntries(MOCK_USERS_ADMIN.map((u) => [u.id, u.role])),
  );
  const [platformSettings, setPlatformSettings] = useState({
    registrations: true,
    marketplace: true,
    reels: true,
    creatorApplications: true,
  });
  const [transferUsername, setTransferUsername] = useState("");
  const [transferDialogOpen, setTransferDialogOpen] = useState(false);
  const [ticketStatuses, setTicketStatuses] = useState<Record<string, string>>({
    t1: "Open",
    t2: "Open",
    t3: "In Progress",
    t4: "In Progress",
    t5: "Resolved",
    t6: "Resolved",
  });
  const [ticketFilter, setTicketFilter] = useState<string>("All");
  const [replyTicketId, setReplyTicketId] = useState<string | null>(null);
  const [replyText, setReplyText] = useState("");

  // Revenue settings state
  const [revenueSettings, setRevenueSettings] = useState({
    creatorShare: 70,
    platformCommission: 20,
    adRevenue: true,
    payoutThreshold: 500,
    payoutSchedule: "monthly" as "weekly" | "monthly",
  });

  // Banned words state
  const [bannedWordsEnabled, setBannedWordsEnabled] = useState(true);
  const [bannedAutoAction, setBannedAutoAction] = useState<
    "hide" | "remove" | "warn"
  >("warn");
  const [bannedWords, setBannedWords] = useState([
    "spam",
    "hate",
    "abuse",
    "scam",
    "fake",
  ]);
  const [newBannedWord, setNewBannedWord] = useState("");
  const [commissionRate, setCommissionRate] = useState(30);
  const [adsEnabled, setAdsEnabled] = useState(true);
  const [subscriptionEnabled, setSubscriptionEnabled] = useState(true);
  const [payoutQueue, setPayoutQueue] = useState([
    {
      id: "p1",
      teacher: "Anjali Sharma",
      amount: 4200,
      course: "React Masterclass",
      date: "Mar 15",
      status: "pending",
    },
    {
      id: "p2",
      teacher: "Rahul Verma",
      amount: 2800,
      course: "Python for Beginners",
      date: "Mar 14",
      status: "pending",
    },
    {
      id: "p3",
      teacher: "Priya Singh",
      amount: 6150,
      course: "UI/UX Design Pro",
      date: "Mar 13",
      status: "pending",
    },
    {
      id: "p4",
      teacher: "Vikram Nair",
      amount: 1950,
      course: "Digital Marketing",
      date: "Mar 12",
      status: "pending",
    },
  ]);

  const { data: stats } = usePlatformStats();
  const approvePost = useApprovePost();
  const rejectPost = useRejectPost();
  const toggleUser = useToggleUserActive();

  const _handleApprove = (id: string) => {
    setPendingPosts((prev) => prev.filter((p) => p.id !== id));
    approvePost.mutate(id);
    toast.success("Post approved!");
  };

  const _handleReject = (id: string) => {
    setPendingPosts((prev) => prev.filter((p) => p.id !== id));
    rejectPost.mutate(id);
    toast.error("Post rejected");
  };

  const handleToggleUser = (userId: string) => {
    setUsers((prev) =>
      prev.map((u) => (u.id === userId ? { ...u, isActive: !u.isActive } : u)),
    );
    toggleUser.mutate(userId);
  };

  const handleAddProduct = () => {
    if (!newProduct.title || !newProduct.price) {
      toast.error("Title and price required");
      return;
    }
    setProducts((prev) => [
      ...prev,
      {
        id: `pr${Date.now()}`,
        ...newProduct,
        price: Number.parseFloat(newProduct.price) || 0,
        stock: Number.parseInt(newProduct.stock) || 0,
        image: null,
        seller: "Admin",
        rating: 5.0,
        reviews: 0,
        soldCount: 0,
        discount: 0,
      },
    ]);
    setNewProduct({
      title: "",
      description: "",
      price: "",
      category: "",
      stock: "",
    });
    setAddProductOpen(false);
    toast.success("Product added!");
  };

  const handlePromoteOrDemote = (userId: string, currentRole: string) => {
    if (currentRole === "user") {
      setOwnerRoles((prev) => ({ ...prev, [userId]: "admin" }));
      toast.success("User promoted to Admin!");
    } else if (currentRole === "admin") {
      setOwnerRoles((prev) => ({ ...prev, [userId]: "user" }));
      toast.success("Admin demoted to User.");
    }
  };

  const handleTransferOwnership = () => {
    if (!transferUsername.trim()) {
      toast.error("Please enter a username");
      return;
    }
    const target = MOCK_USERS_ADMIN.find(
      (u) => u.username === transferUsername.trim(),
    );
    if (!target) {
      toast.error("User not found");
      return;
    }
    setTransferUsername("");
    setTransferDialogOpen(false);
    toast.success(`Ownership transferred to @${target.username}!`);
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Mobile sticky tab bar */}
      <div className="md:hidden sticky top-0 z-20 bg-background/95 backdrop-blur-sm border-b border-komo-border/60 shadow-sm">
        <div className="flex gap-1.5 overflow-x-auto pb-2 pt-2 px-3 scrollbar-hide">
          {SIDEBAR_ITEMS.map((item) => (
            <button
              type="button"
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`flex-shrink-0 flex flex-col items-center gap-0.5 px-3 py-1.5 min-h-[52px] min-w-[56px] justify-center rounded-xl text-[10px] font-semibold transition-all ${
                activeSection === item.id
                  ? "komo-gradient text-white shadow-md"
                  : "bg-accent/70 text-komo-text-secondary"
              }`}
            >
              <item.icon size={16} />
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex gap-5 px-3 sm:px-4 py-3 sm:py-4">
        {/* Sidebar */}
        <aside className="w-48 flex-shrink-0 hidden md:block">
          <div className="komo-surface rounded-2xl komo-card-shadow p-3 sticky top-20">
            <h2 className="text-[12px] font-bold text-komo-text-muted uppercase tracking-wider px-2 mb-3">
              Admin Panel
            </h2>
            <nav className="flex flex-col gap-1">
              {SIDEBAR_ITEMS.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  data-ocid={`admin.${item.id}.link`}
                  onClick={() => setActiveSection(item.id)}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13px] font-medium transition-all ${
                    activeSection === item.id
                      ? "komo-gradient text-white"
                      : "text-komo-text-secondary hover:bg-accent hover:text-foreground"
                  }`}
                >
                  <item.icon size={16} />
                  {item.label}
                  {item.id === "owner" && (
                    <span className="ml-auto text-yellow-400">
                      <Crown size={11} />
                    </span>
                  )}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Content */}
        <main className="flex-1 min-w-0">
          {/* Overview */}
          {activeSection === "overview" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-6"
            >
              <h1 className="text-[20px] font-bold text-foreground">
                Platform Overview
              </h1>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <StatCard
                  title="Total Users"
                  value={String(stats?.userCount || "1,248")}
                  icon={Users}
                  color="bg-komo-blue"
                />
                <StatCard
                  title="Total Posts"
                  value={String(stats?.postCount || "8,392")}
                  icon={TrendingUp}
                  color="bg-komo-purple"
                />
                <StatCard
                  title="Orders"
                  value={String(stats?.orderCount || "347")}
                  icon={Package}
                  color="bg-green-500"
                />
                <StatCard
                  title="Commissions"
                  value="$2,847"
                  icon={BarChart2}
                  color="bg-orange-500"
                />
              </div>

              {/* Charts placeholder */}
              <div className="komo-surface rounded-2xl komo-card-shadow p-5">
                <h3 className="text-[14px] font-semibold text-foreground mb-4">
                  Activity Overview
                </h3>
                <div className="flex items-end gap-2 h-32">
                  {[65, 80, 55, 90, 70, 85, 95, 60, 75, 88, 72, 94].map(
                    (h, i) => (
                      <motion.div
                        key={`bar-${h}`}
                        className="flex-1 rounded-t-md komo-gradient opacity-70 hover:opacity-100 transition-opacity"
                        style={{ height: `${h}%` }}
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{ delay: i * 0.05 }}
                      />
                    ),
                  )}
                </div>
                <div className="flex justify-between mt-2">
                  {[
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                  ].map((m) => (
                    <span key={m} className="text-[10px] text-komo-text-muted">
                      {m}
                    </span>
                  ))}
                </div>
              </div>

              {/* Monetization — Revenue Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  {
                    label: "Total Revenue",
                    value: "₹1,84,200",
                    growth: "+18.2%",
                    icon: "💰",
                  },
                  {
                    label: "Course Sales",
                    value: "₹1,12,500",
                    growth: "+24.6%",
                    icon: "🎓",
                  },
                  {
                    label: "Ad Revenue",
                    value: "₹38,400",
                    growth: "+11.3%",
                    icon: "📢",
                  },
                  {
                    label: "Subscriptions",
                    value: "₹33,300",
                    growth: "+32.1%",
                    icon: "⭐",
                  },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="komo-surface rounded-2xl komo-card-shadow p-4"
                  >
                    <div className="text-[20px] mb-1">{stat.icon}</div>
                    <h4 className="text-[11px] font-medium text-komo-text-muted mb-1">
                      {stat.label}
                    </h4>
                    <p className="text-[18px] font-bold komo-gradient-text">
                      {stat.value}
                    </p>
                    <p className="text-[11px] text-green-400 mt-1">
                      {stat.growth} this month
                    </p>
                  </div>
                ))}
              </div>

              {/* Commission Rate Slider */}
              <div className="komo-surface rounded-2xl komo-card-shadow p-5">
                <h3 className="text-[14px] font-semibold text-foreground mb-1">
                  Commission & Revenue Split
                </h3>
                <p className="text-[12px] text-komo-text-muted mb-4">
                  Drag to adjust platform commission rate
                </p>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-purple-500" />
                    <span className="text-[12px] text-komo-text-secondary">
                      Platform Commission
                    </span>
                    <span className="text-[14px] font-bold komo-gradient-text">
                      {commissionRate}%
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-blue-400" />
                    <span className="text-[12px] text-komo-text-secondary">
                      Teacher Share
                    </span>
                    <span className="text-[14px] font-bold text-blue-400">
                      {100 - commissionRate}%
                    </span>
                  </div>
                </div>
                <Slider
                  data-ocid="admin.commission.slider"
                  value={[commissionRate]}
                  onValueChange={(v) => setCommissionRate(v[0])}
                  min={5}
                  max={50}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between mt-1">
                  <span className="text-[10px] text-komo-text-muted">
                    5% (min)
                  </span>
                  <span className="text-[10px] text-komo-text-muted">
                    50% (max)
                  </span>
                </div>
                <p className="text-[11px] text-komo-text-muted mt-3">
                  On a ₹1,000 course: Platform earns{" "}
                  <span className="text-purple-400 font-semibold">
                    ₹{commissionRate * 10}
                  </span>
                  , Teacher earns{" "}
                  <span className="text-blue-400 font-semibold">
                    ₹{(100 - commissionRate) * 10}
                  </span>
                </p>
              </div>

              {/* Toggles Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="komo-surface rounded-2xl komo-card-shadow p-4 flex items-center justify-between">
                  <div>
                    <h4 className="text-[13px] font-semibold text-foreground">
                      Ads Integration
                    </h4>
                    <p className="text-[11px] text-komo-text-muted mt-0.5">
                      Show ads to free users between content
                    </p>
                  </div>
                  <Switch
                    data-ocid="admin.ads.toggle"
                    checked={adsEnabled}
                    onCheckedChange={(v) => {
                      setAdsEnabled(v);
                      toast.success(`Ads ${v ? "enabled" : "disabled"}`);
                    }}
                  />
                </div>
                <div className="komo-surface rounded-2xl komo-card-shadow p-4 flex items-center justify-between">
                  <div>
                    <h4 className="text-[13px] font-semibold text-foreground">
                      Academy Subscriptions
                    </h4>
                    <p className="text-[11px] text-komo-text-muted mt-0.5">
                      ₹199/mo · ₹999/yr — Netflix model
                    </p>
                  </div>
                  <Switch
                    data-ocid="admin.subscription.toggle"
                    checked={subscriptionEnabled}
                    onCheckedChange={(v) => {
                      setSubscriptionEnabled(v);
                      toast.success(
                        `Subscriptions ${v ? "enabled" : "disabled"}`,
                      );
                    }}
                  />
                </div>
              </div>

              {/* Subscription Management */}
              <div className="komo-surface rounded-2xl komo-card-shadow p-5">
                <h3 className="text-[14px] font-semibold text-foreground mb-3">
                  ⭐ Subscription Management
                </h3>
                <div className="grid grid-cols-3 gap-3 mb-3">
                  {[
                    { label: "Total Subscribers", value: "4,280" },
                    { label: "Monthly Revenue", value: "₹4,23,720" },
                    { label: "Churn Rate", value: "2.4%" },
                  ].map((s) => (
                    <div
                      key={s.label}
                      className="bg-white/5 rounded-xl p-3 text-center"
                    >
                      <p className="text-[16px] font-bold komo-gradient-text">
                        {s.value}
                      </p>
                      <p className="text-[10px] text-komo-text-muted mt-0.5">
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                  {[
                    {
                      plan: "KomoPro ₹999/yr",
                      count: 1240,
                      revenue: "₹12,37,560",
                    },
                    {
                      plan: "KomoPremium ₹99/mo",
                      count: 3040,
                      revenue: "₹3,00,960",
                    },
                  ].map((p) => (
                    <div
                      key={p.plan}
                      className="flex items-center justify-between bg-white/5 rounded-xl p-3"
                    >
                      <span className="text-[12px] text-komo-text-secondary">
                        {p.plan}
                      </span>
                      <span className="text-[12px] text-komo-text-muted">
                        {p.count} users
                      </span>
                      <span className="text-[12px] font-semibold komo-gradient-text">
                        {p.revenue}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Membership Management */}
              <div className="komo-surface rounded-2xl komo-card-shadow p-5">
                <h3 className="text-[14px] font-semibold text-foreground mb-3">
                  👥 Membership Management
                </h3>
                <div className="grid grid-cols-3 gap-3 mb-3">
                  {[
                    { label: "Total Members", value: "1,962" },
                    { label: "Monthly Revenue", value: "₹6,450" },
                    { label: "Active Creators", value: "48" },
                  ].map((s) => (
                    <div
                      key={s.label}
                      className="bg-white/5 rounded-xl p-3 text-center"
                    >
                      <p className="text-[16px] font-bold komo-gradient-text">
                        {s.value}
                      </p>
                      <p className="text-[10px] text-komo-text-muted mt-0.5">
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                  {[
                    {
                      tier: "Super Fan ₹199/mo",
                      count: 142,
                      payout: "₹14,158",
                    },
                    { tier: "Supporter ₹99/mo", count: 580, payout: "₹34,220" },
                    { tier: "Fan ₹49/mo", count: 1240, payout: "₹36,260" },
                  ].map((t) => (
                    <div
                      key={t.tier}
                      className="flex items-center justify-between bg-white/5 rounded-xl p-3"
                    >
                      <span className="text-[12px] text-komo-text-secondary">
                        {t.tier}
                      </span>
                      <span className="text-[12px] text-komo-text-muted">
                        {t.count} members
                      </span>
                      <span className="text-[12px] font-semibold text-green-400">
                        {t.payout}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Super Chat Logs */}
              <div className="komo-surface rounded-2xl komo-card-shadow p-5">
                <h3 className="text-[14px] font-semibold text-foreground mb-3">
                  💬 Super Chat Logs
                </h3>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  {[
                    { label: "Today Earned", value: "₹2,450" },
                    { label: "This Month", value: "₹4,200" },
                  ].map((s) => (
                    <div
                      key={s.label}
                      className="bg-white/5 rounded-xl p-3 text-center"
                    >
                      <p className="text-[16px] font-bold komo-gradient-text">
                        {s.value}
                      </p>
                      <p className="text-[10px] text-komo-text-muted mt-0.5">
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                  {[
                    {
                      user: "Ravi Kumar",
                      amount: 1000,
                      msg: "Amazing stream! 🔥",
                    },
                    {
                      user: "Priya S",
                      amount: 500,
                      msg: "Love your content ❤️",
                    },
                    { user: "Deepak V", amount: 100, msg: "Keep it up!" },
                  ].map((sc) => (
                    <div
                      key={sc.user}
                      className="flex items-center justify-between bg-white/5 rounded-xl p-3"
                    >
                      <div>
                        <p className="text-[12px] font-semibold text-foreground">
                          {sc.user}
                        </p>
                        <p className="text-[11px] text-komo-text-muted">
                          {sc.msg}
                        </p>
                      </div>
                      <span className="text-[14px] font-bold text-yellow-400">
                        ₹{sc.amount}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Merch Orders */}
              <div className="komo-surface rounded-2xl komo-card-shadow p-5">
                <h3 className="text-[14px] font-semibold text-foreground mb-3">
                  🛍️ Merch Orders
                </h3>
                <div className="grid grid-cols-3 gap-3 mb-3">
                  {[
                    {
                      label: "Pending Orders",
                      value: "24",
                      color: "text-yellow-400",
                    },
                    {
                      label: "Fulfilled",
                      value: "186",
                      color: "text-green-400",
                    },
                    {
                      label: "Total Revenue",
                      value: "₹3,900",
                      color: "komo-gradient-text",
                    },
                  ].map((s) => (
                    <div
                      key={s.label}
                      className="bg-white/5 rounded-xl p-3 text-center"
                    >
                      <p className={`text-[16px] font-bold ${s.color}`}>
                        {s.value}
                      </p>
                      <p className="text-[10px] text-komo-text-muted mt-0.5">
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Payout Approvals Queue */}
              <div className="komo-surface rounded-2xl komo-card-shadow overflow-hidden">
                <div className="p-4 border-b border-komo-border flex items-center justify-between">
                  <h3 className="text-[14px] font-semibold text-foreground">
                    Pending Teacher Payouts
                  </h3>
                  <span className="text-[11px] bg-orange-500/20 text-orange-400 px-2 py-0.5 rounded-full font-medium">
                    {payoutQueue.filter((p) => p.status === "pending").length}{" "}
                    pending
                  </span>
                </div>
                <div className="divide-y divide-komo-border">
                  {payoutQueue.map((payout, i) => (
                    <div
                      key={payout.id}
                      data-ocid={`admin.payout.row.${i + 1}`}
                      className="p-4 flex items-center gap-3"
                    >
                      <div className="w-9 h-9 rounded-full komo-gradient flex items-center justify-center text-white text-[13px] font-bold flex-shrink-0">
                        {payout.teacher.charAt(0)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[13px] font-semibold text-foreground truncate">
                          {payout.teacher}
                        </p>
                        <p className="text-[11px] text-komo-text-muted truncate">
                          {payout.course}
                        </p>
                      </div>
                      <div className="text-right mr-3">
                        <p className="text-[14px] font-bold komo-gradient-text">
                          ₹{payout.amount.toLocaleString()}
                        </p>
                        <p className="text-[10px] text-komo-text-muted">
                          {payout.date}
                        </p>
                      </div>
                      {payout.status === "pending" ? (
                        <div className="flex gap-2">
                          <Button
                            data-ocid={`admin.payout.confirm_button.${i + 1}`}
                            size="sm"
                            className="komo-gradient border-0 text-white text-[11px] h-7 px-3"
                            onClick={() => {
                              setPayoutQueue((prev) =>
                                prev.map((p) =>
                                  p.id === payout.id
                                    ? { ...p, status: "approved" }
                                    : p,
                                ),
                              );
                              toast.success(
                                `Payout of ₹${payout.amount.toLocaleString()} approved for ${payout.teacher}`,
                              );
                            }}
                          >
                            Approve
                          </Button>
                          <Button
                            data-ocid={`admin.payout.delete_button.${i + 1}`}
                            size="sm"
                            variant="outline"
                            className="border-red-800/50 text-red-400 hover:bg-red-900/20 text-[11px] h-7 px-3"
                            onClick={() => {
                              setPayoutQueue((prev) =>
                                prev.map((p) =>
                                  p.id === payout.id
                                    ? { ...p, status: "rejected" }
                                    : p,
                                ),
                              );
                              toast.error(
                                `Payout rejected for ${payout.teacher}`,
                              );
                            }}
                          >
                            Reject
                          </Button>
                        </div>
                      ) : (
                        <span
                          className={`text-[11px] px-2 py-0.5 rounded-full font-medium ${payout.status === "approved" ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"}`}
                        >
                          {payout.status === "approved"
                            ? "Approved"
                            : "Rejected"}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Users */}
          {activeSection === "users" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-4"
            >
              <h1 className="text-[20px] font-bold text-foreground">
                User Management
              </h1>
              {/* Mobile: User Cards */}
              <div className="sm:hidden komo-surface rounded-2xl komo-card-shadow divide-y divide-komo-border">
                {users.map((user, i) => (
                  <div
                    key={user.id}
                    data-ocid={`admin.users.row.${i + 1}`}
                    className="p-4 flex items-center gap-3"
                  >
                    <div
                      className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center text-[12px] font-bold text-white"
                      style={{ background: user.gradient }}
                    >
                      {user.initials}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[13px] font-semibold text-foreground truncate">
                        {user.displayName}
                      </p>
                      <p className="text-[11px] text-komo-text-muted">
                        @{user.username}
                      </p>
                      <div className="flex items-center gap-2 mt-1 flex-wrap">
                        <RoleBadge role={user.role} />
                        <span
                          className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${user.isActive ? "bg-green-500/15 text-green-400" : "bg-destructive/15 text-destructive"}`}
                        >
                          {user.isActive ? "Active" : "Suspended"}
                        </span>
                        <span className="text-[11px] text-komo-text-muted">
                          {user.followers.toLocaleString()} followers
                        </span>
                      </div>
                    </div>
                    <Button
                      data-ocid={`admin.users.toggle.${i + 1}`}
                      variant="ghost"
                      size="sm"
                      className="h-9 min-w-[80px] text-[11px] flex-shrink-0"
                      onClick={() => handleToggleUser(user.id)}
                    >
                      {user.isActive ? (
                        <>
                          <ToggleRight
                            size={14}
                            className="text-green-400 mr-1"
                          />{" "}
                          Suspend
                        </>
                      ) : (
                        <>
                          <ToggleLeft
                            size={14}
                            className="text-destructive mr-1"
                          />{" "}
                          Restore
                        </>
                      )}
                    </Button>
                  </div>
                ))}
              </div>

              {/* Desktop: Table */}
              <div className="hidden sm:block komo-surface rounded-2xl komo-card-shadow overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow className="border-komo-border hover:bg-transparent">
                      <TableHead className="text-komo-text-muted">
                        User
                      </TableHead>
                      <TableHead className="text-komo-text-muted">
                        Role
                      </TableHead>
                      <TableHead className="text-komo-text-muted">
                        Posts
                      </TableHead>
                      <TableHead className="text-komo-text-muted">
                        Followers
                      </TableHead>
                      <TableHead className="text-komo-text-muted">
                        Status
                      </TableHead>
                      <TableHead className="text-komo-text-muted">
                        Actions
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {users.map((user, i) => (
                      <TableRow
                        key={user.id}
                        data-ocid={`admin.users.row.${i + 1}`}
                        className="border-komo-border hover:bg-accent/30"
                      >
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <div
                              className="w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-bold text-white"
                              style={{ background: user.gradient }}
                            >
                              {user.initials}
                            </div>
                            <div>
                              <p className="text-[13px] font-semibold text-foreground">
                                {user.displayName}
                              </p>
                              <p className="text-[11px] text-komo-text-muted">
                                @{user.username}
                              </p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <RoleBadge role={user.role} />
                        </TableCell>
                        <TableCell className="text-foreground text-[13px]">
                          {user.posts}
                        </TableCell>
                        <TableCell className="text-foreground text-[13px]">
                          {user.followers.toLocaleString()}
                        </TableCell>
                        <TableCell>
                          <span
                            className={`text-[11px] font-semibold px-2 py-1 rounded-full ${
                              user.isActive
                                ? "bg-green-500/15 text-green-400"
                                : "bg-destructive/15 text-destructive"
                            }`}
                          >
                            {user.isActive ? "Active" : "Suspended"}
                          </span>
                        </TableCell>
                        <TableCell>
                          <Button
                            data-ocid={`admin.users.toggle.${i + 1}`}
                            variant="ghost"
                            size="sm"
                            className="h-7 text-[11px]"
                            onClick={() => handleToggleUser(user.id)}
                          >
                            {user.isActive ? (
                              <>
                                <ToggleRight
                                  size={14}
                                  className="text-green-400 mr-1"
                                />{" "}
                                Suspend
                              </>
                            ) : (
                              <>
                                <ToggleLeft
                                  size={14}
                                  className="text-destructive mr-1"
                                />{" "}
                                Restore
                              </>
                            )}
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </motion.div>
          )}

          {/* Moderation */}
          {activeSection === "moderation" && <ModerationPanel />}

          {/* Marketplace */}
          {activeSection === "marketplace" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between">
                <h1 className="text-[20px] font-bold text-foreground">
                  Marketplace Management
                </h1>
                <Button
                  data-ocid="admin.marketplace.add.button"
                  className="komo-gradient border-0 text-white text-[13px] h-9"
                  onClick={() => setAddProductOpen(true)}
                >
                  <Plus size={15} className="mr-1" /> Add Product
                </Button>
              </div>

              {/* Mobile: Product Cards */}
              <div className="sm:hidden komo-surface rounded-2xl komo-card-shadow divide-y divide-komo-border">
                {products.map((p, i) => (
                  <div
                    key={p.id}
                    data-ocid={`admin.marketplace.row.${i + 1}`}
                    className="p-4 flex items-center gap-3"
                  >
                    {p.image ? (
                      <img
                        src={p.image}
                        alt={p.title}
                        className="w-12 h-12 rounded-xl object-cover flex-shrink-0"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                        <Package size={18} className="text-komo-text-muted" />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="text-[13px] font-semibold text-foreground truncate">
                        {p.title}
                      </p>
                      <p className="text-[11px] text-komo-text-muted">
                        {p.category}
                      </p>
                      <p className="text-[13px] font-bold komo-gradient-text mt-0.5">
                        ${p.price.toFixed(2)} · Stock: {p.stock}
                      </p>
                    </div>
                    <div className="flex gap-1 flex-shrink-0">
                      <Button
                        data-ocid={`admin.marketplace.edit.${i + 1}`}
                        variant="ghost"
                        size="sm"
                        className="h-9 w-9 p-0 hover:bg-komo-blue/10 text-komo-blue"
                        onClick={() => toast.info("Edit product coming soon!")}
                      >
                        <Edit size={14} />
                      </Button>
                      <Button
                        data-ocid={`admin.marketplace.delete.${i + 1}`}
                        variant="ghost"
                        size="sm"
                        className="h-9 w-9 p-0 hover:bg-destructive/10 text-destructive"
                        onClick={() => {
                          setProducts((prev) =>
                            prev.filter((pr) => pr.id !== p.id),
                          );
                          toast.success("Product deleted");
                        }}
                      >
                        <Trash2 size={14} />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Desktop: Table */}
              <div className="hidden sm:block komo-surface rounded-2xl komo-card-shadow overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow className="border-komo-border hover:bg-transparent">
                      <TableHead className="text-komo-text-muted">
                        Product
                      </TableHead>
                      <TableHead className="text-komo-text-muted">
                        Category
                      </TableHead>
                      <TableHead className="text-komo-text-muted">
                        Price
                      </TableHead>
                      <TableHead className="text-komo-text-muted">
                        Stock
                      </TableHead>
                      <TableHead className="text-komo-text-muted">
                        Actions
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {products.map((p, i) => (
                      <TableRow
                        key={p.id}
                        data-ocid={`admin.marketplace.row.${i + 1}`}
                        className="border-komo-border hover:bg-accent/30"
                      >
                        <TableCell>
                          <div className="flex items-center gap-2">
                            {p.image ? (
                              <img
                                src={p.image}
                                alt={p.title}
                                className="w-9 h-9 rounded-lg object-cover"
                              />
                            ) : (
                              <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center">
                                <Package
                                  size={16}
                                  className="text-komo-text-muted"
                                />
                              </div>
                            )}
                            <p className="text-[13px] font-medium text-foreground max-w-[150px] truncate">
                              {p.title}
                            </p>
                          </div>
                        </TableCell>
                        <TableCell className="text-komo-text-secondary text-[12px]">
                          {p.category}
                        </TableCell>
                        <TableCell className="font-semibold komo-gradient-text text-[13px]">
                          ${p.price.toFixed(2)}
                        </TableCell>
                        <TableCell className="text-foreground text-[13px]">
                          {p.stock}
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-1">
                            <Button
                              data-ocid={`admin.marketplace.edit.${i + 1}`}
                              variant="ghost"
                              size="sm"
                              className="h-7 w-7 p-0 hover:bg-komo-blue/10 text-komo-blue"
                              onClick={() =>
                                toast.info("Edit product coming soon!")
                              }
                            >
                              <Edit size={13} />
                            </Button>
                            <Button
                              data-ocid={`admin.marketplace.delete.${i + 1}`}
                              variant="ghost"
                              size="sm"
                              className="h-7 w-7 p-0 hover:bg-destructive/10 text-destructive"
                              onClick={() => {
                                setProducts((prev) =>
                                  prev.filter((pr) => pr.id !== p.id),
                                );
                                toast.success("Product deleted");
                              }}
                            >
                              <Trash2 size={13} />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              {/* Add product dialog */}
              <Dialog open={addProductOpen} onOpenChange={setAddProductOpen}>
                <DialogContent
                  data-ocid="admin.add_product.modal"
                  className="komo-surface border-komo-border"
                >
                  <DialogHeader>
                    <DialogTitle className="text-foreground">
                      Add New Product
                    </DialogTitle>
                  </DialogHeader>
                  <div className="space-y-3">
                    <Input
                      data-ocid="admin.product.title.input"
                      placeholder="Product title"
                      value={newProduct.title}
                      onChange={(e) =>
                        setNewProduct((p) => ({ ...p, title: e.target.value }))
                      }
                      className="bg-accent border-komo-border"
                    />
                    <Textarea
                      data-ocid="admin.product.description.textarea"
                      placeholder="Description"
                      value={newProduct.description}
                      onChange={(e) =>
                        setNewProduct((p) => ({
                          ...p,
                          description: e.target.value,
                        }))
                      }
                      className="bg-accent border-komo-border resize-none"
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      <Input
                        data-ocid="admin.product.price.input"
                        placeholder="Price ($)"
                        value={newProduct.price}
                        onChange={(e) =>
                          setNewProduct((p) => ({
                            ...p,
                            price: e.target.value,
                          }))
                        }
                        className="bg-accent border-komo-border"
                      />
                      <Input
                        placeholder="Category"
                        value={newProduct.category}
                        onChange={(e) =>
                          setNewProduct((p) => ({
                            ...p,
                            category: e.target.value,
                          }))
                        }
                        className="bg-accent border-komo-border"
                      />
                      <Input
                        placeholder="Stock"
                        value={newProduct.stock}
                        onChange={(e) =>
                          setNewProduct((p) => ({
                            ...p,
                            stock: e.target.value,
                          }))
                        }
                        className="bg-accent border-komo-border"
                      />
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Button
                      data-ocid="admin.add_product.cancel_button"
                      variant="secondary"
                      className="flex-1"
                      onClick={() => setAddProductOpen(false)}
                    >
                      Cancel
                    </Button>
                    <Button
                      data-ocid="admin.add_product.submit_button"
                      className="flex-1 komo-gradient border-0 text-white"
                      onClick={handleAddProduct}
                    >
                      Add Product
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>
          )}

          {/* Analytics */}
          {activeSection === "analytics" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-5"
            >
              <h1 className="text-[20px] font-bold text-foreground">
                Analytics
              </h1>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="komo-surface rounded-2xl komo-card-shadow p-4">
                  <h3 className="text-[13px] font-semibold text-foreground mb-3">
                    Top Creators
                  </h3>
                  <div className="space-y-3">
                    {MOCK_USERS_ADMIN.filter((u) => u.isCreator).map((u, i) => (
                      <div
                        key={u.id}
                        data-ocid={`admin.analytics.creator.${i + 1}`}
                        className="flex items-center gap-2"
                      >
                        <span className="text-[11px] text-komo-text-muted w-4">
                          {i + 1}.
                        </span>
                        <div
                          className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold text-white"
                          style={{ background: u.gradient }}
                        >
                          {u.initials}
                        </div>
                        <div className="flex-1">
                          <p className="text-[12px] font-semibold text-foreground">
                            {u.displayName}
                          </p>
                        </div>
                        <span className="text-[12px] font-medium komo-gradient-text">
                          {u.followers.toLocaleString()}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="komo-surface rounded-2xl komo-card-shadow p-4">
                  <h3 className="text-[13px] font-semibold text-foreground mb-3">
                    Revenue Breakdown
                  </h3>
                  <div className="space-y-2">
                    {[
                      { label: "Ad Revenue", value: "$14,280", pct: 68 },
                      { label: "Subscriptions", value: "$3,420", pct: 16 },
                      { label: "Marketplace", value: "$2,847", pct: 14 },
                      { label: "Boosts", value: "$380", pct: 2 },
                    ].map((item) => (
                      <div key={item.label}>
                        <div className="flex justify-between mb-1">
                          <span className="text-[12px] text-komo-text-secondary">
                            {item.label}
                          </span>
                          <span className="text-[12px] font-semibold text-foreground">
                            {item.value}
                          </span>
                        </div>
                        <div className="h-1.5 bg-accent rounded-full overflow-hidden">
                          <motion.div
                            className="h-full rounded-full komo-gradient"
                            style={{ width: `${item.pct}%` }}
                            initial={{ width: 0 }}
                            animate={{ width: `${item.pct}%` }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="komo-surface rounded-2xl komo-card-shadow p-4">
                <h3 className="text-[13px] font-semibold text-foreground mb-3">
                  Commission Tracking
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <div className="p-3 bg-accent rounded-xl">
                    <p className="text-[11px] text-komo-text-muted">
                      This Month
                    </p>
                    <p className="text-[18px] font-bold komo-gradient-text">
                      $2,847
                    </p>
                  </div>
                  <div className="p-3 bg-accent rounded-xl">
                    <p className="text-[11px] text-komo-text-muted">
                      Total Orders
                    </p>
                    <p className="text-[18px] font-bold komo-gradient-text">
                      347
                    </p>
                  </div>
                  <div className="p-3 bg-accent rounded-xl">
                    <p className="text-[11px] text-komo-text-muted">
                      Avg. Order
                    </p>
                    <p className="text-[18px] font-bold komo-gradient-text">
                      $82.05
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Owner Management */}

          {/* Ads Management */}
          {activeSection === "ads" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-5"
            >
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Megaphone size={20} className="text-blue-400" />
                  <h2 className="text-lg font-bold text-foreground">
                    Ads Management
                  </h2>
                </div>
                <button
                  type="button"
                  data-ocid="ads.create_ad.open_modal_button"
                  onClick={() => setCreateAdOpen(true)}
                  className="komo-gradient text-white text-sm font-semibold px-4 py-2 rounded-xl flex items-center gap-2 shadow-md hover:opacity-90 transition-opacity"
                >
                  <Plus size={15} /> Create New Ad
                </button>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  { label: "Total Ads", value: "12", color: "#2FA8FF" },
                  { label: "Active Ads", value: "8", color: "#22c55e" },
                  { label: "Impressions", value: "2.4M", color: "#A855F7" },
                  { label: "Revenue", value: "₹48,500", color: "#f59e0b" },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.07 }}
                    data-ocid={`ads.stats.card.${i + 1}`}
                    className="komo-surface rounded-2xl p-4 komo-card-shadow"
                  >
                    <p className="text-xs text-komo-text-muted mb-1">
                      {stat.label}
                    </p>
                    <p
                      className="text-xl font-bold"
                      style={{ color: stat.color }}
                    >
                      {stat.value}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Ads List */}
              <div className="komo-surface rounded-2xl komo-card-shadow overflow-hidden">
                <div className="px-4 py-3 border-b border-komo-border/40">
                  <h3 className="text-sm font-semibold text-foreground">
                    Active Campaigns
                  </h3>
                </div>
                <div className="divide-y divide-komo-border/30">
                  {adsData.map((ad, i) => (
                    <motion.div
                      key={ad.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06 }}
                      data-ocid={`ads.item.${i + 1}`}
                      className="flex items-center gap-3 px-4 py-3"
                    >
                      {/* Thumbnail */}
                      <div
                        className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center text-white font-bold text-sm"
                        style={{
                          background:
                            AD_THUMB_GRADIENTS[i % AD_THUMB_GRADIENTS.length],
                        }}
                      >
                        {ad.title[0]}
                      </div>
                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-foreground truncate">
                          {ad.title}
                        </p>
                        <p className="text-xs text-komo-text-muted">
                          {ad.advertiser}
                        </p>
                        <div className="flex items-center gap-2 mt-1 flex-wrap">
                          <span className="text-[10px] px-1.5 py-0.5 rounded-md font-medium bg-blue-500/15 text-blue-400">
                            {ad.type}
                          </span>
                          <span
                            className={`text-[10px] px-1.5 py-0.5 rounded-md font-medium ${
                              ad.status === "Active"
                                ? "bg-green-500/15 text-green-400"
                                : ad.status === "Paused"
                                  ? "bg-yellow-500/15 text-yellow-400"
                                  : "bg-red-500/15 text-red-400"
                            }`}
                          >
                            {ad.status}
                          </span>
                        </div>
                      </div>
                      {/* Metrics */}
                      <div className="hidden sm:flex flex-col items-end text-right gap-0.5">
                        <p className="text-xs text-komo-text-muted">
                          {ad.impressions} imp.
                        </p>
                        <p className="text-xs text-komo-text-muted">
                          CTR {ad.ctr}
                        </p>
                        <p className="text-xs font-semibold text-foreground">
                          {ad.budget}
                        </p>
                      </div>
                      {/* Actions */}
                      <div className="flex items-center gap-1 ml-1">
                        <button
                          type="button"
                          data-ocid={`ads.pause_toggle.${i + 1}`}
                          onClick={() =>
                            setAdsData((prev) =>
                              prev.map((a) =>
                                a.id === ad.id
                                  ? {
                                      ...a,
                                      status:
                                        a.status === "Active"
                                          ? "Paused"
                                          : "Active",
                                    }
                                  : a,
                              ),
                            )
                          }
                          className={`p-1.5 rounded-lg text-xs font-medium transition-colors ${ad.status === "Active" ? "bg-yellow-500/15 text-yellow-400 hover:bg-yellow-500/25" : "bg-green-500/15 text-green-400 hover:bg-green-500/25"}`}
                          title={ad.status === "Active" ? "Pause" : "Resume"}
                        >
                          {ad.status === "Active" ? (
                            <ToggleLeft size={14} />
                          ) : (
                            <ToggleRight size={14} />
                          )}
                        </button>
                        <button
                          type="button"
                          data-ocid={`ads.edit_button.${i + 1}`}
                          className="p-1.5 rounded-lg bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 transition-colors"
                        >
                          <Edit size={13} />
                        </button>
                        <button
                          type="button"
                          data-ocid={`ads.delete_button.${i + 1}`}
                          onClick={() => {
                            setAdsData((prev) =>
                              prev.filter((a) => a.id !== ad.id),
                            );
                            toast.success("Ad removed");
                          }}
                          className="p-1.5 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-colors"
                        >
                          <Trash2 size={13} />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Placement Settings */}
              <div className="komo-surface rounded-2xl p-4 komo-card-shadow space-y-4">
                <h3 className="text-sm font-semibold text-foreground">
                  Ad Placement Settings
                </h3>
                {[
                  { key: "feed", label: "Show ads in Feed", default: true },
                  { key: "reels", label: "Show ads in Reels", default: true },
                  {
                    key: "stories",
                    label: "Show ads in Stories",
                    default: false,
                  },
                ].map((item) => (
                  <div
                    key={item.key}
                    className="flex items-center justify-between"
                  >
                    <span className="text-sm text-komo-text-secondary">
                      {item.label}
                    </span>
                    <Switch
                      data-ocid={`ads.placement.${item.key}.switch`}
                      defaultChecked={item.default}
                    />
                  </div>
                ))}
                <div className="pt-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-komo-text-secondary">
                      Ad frequency (every N posts)
                    </span>
                    <span className="text-sm font-bold text-foreground">
                      {adFrequency}
                    </span>
                  </div>
                  <Slider
                    data-ocid="ads.frequency.slider"
                    min={1}
                    max={10}
                    step={1}
                    value={[adFrequency]}
                    onValueChange={([v]) => setAdFrequency(v)}
                    className="w-full"
                  />
                </div>
              </div>

              {/* Create Ad Modal */}
              <Dialog open={createAdOpen} onOpenChange={setCreateAdOpen}>
                <DialogContent
                  data-ocid="ads.create.dialog"
                  className="komo-surface border-komo-border max-w-md"
                >
                  <DialogHeader>
                    <DialogTitle className="text-foreground flex items-center gap-2">
                      <Megaphone size={16} className="text-blue-400" /> Launch
                      New Ad
                    </DialogTitle>
                  </DialogHeader>
                  <div className="space-y-3 mt-2">
                    <div>
                      <p className="text-xs text-komo-text-muted mb-1">
                        Ad Title
                      </p>
                      <Input
                        data-ocid="ads.create.title.input"
                        placeholder="e.g. Summer Sale 2026"
                        value={newAd.title}
                        onChange={(e) =>
                          setNewAd((p) => ({ ...p, title: e.target.value }))
                        }
                        className="bg-komo-bg border-komo-border text-foreground"
                      />
                    </div>
                    <div>
                      <p className="text-xs text-komo-text-muted mb-1">
                        Advertiser Name
                      </p>
                      <Input
                        data-ocid="ads.create.advertiser.input"
                        placeholder="e.g. FashionBrand"
                        value={newAd.advertiser}
                        onChange={(e) =>
                          setNewAd((p) => ({
                            ...p,
                            advertiser: e.target.value,
                          }))
                        }
                        className="bg-komo-bg border-komo-border text-foreground"
                      />
                    </div>
                    <div>
                      <p className="text-xs text-komo-text-muted mb-1">
                        Ad Type
                      </p>
                      <select
                        data-ocid="ads.create.type.select"
                        value={newAd.type}
                        onChange={(e) =>
                          setNewAd((p) => ({ ...p, type: e.target.value }))
                        }
                        className="w-full rounded-xl border border-komo-border bg-komo-bg text-foreground px-3 py-2 text-sm"
                      >
                        <option value="Banner">Banner</option>
                        <option value="Video">Video</option>
                        <option value="Story">Story</option>
                      </select>
                    </div>
                    <div>
                      <p className="text-xs text-komo-text-muted mb-1">
                        Budget (₹)
                      </p>
                      <Input
                        data-ocid="ads.create.budget.input"
                        type="number"
                        placeholder="e.g. 10000"
                        value={newAd.budget}
                        onChange={(e) =>
                          setNewAd((p) => ({ ...p, budget: e.target.value }))
                        }
                        className="bg-komo-bg border-komo-border text-foreground"
                      />
                    </div>
                    <div>
                      <p className="text-xs text-komo-text-muted mb-1">
                        Duration
                      </p>
                      <div
                        className="flex gap-2"
                        data-ocid="ads.create.duration.radio"
                      >
                        {["7 days", "15 days", "30 days"].map((d) => (
                          <button
                            type="button"
                            key={d}
                            onClick={() =>
                              setNewAd((p) => ({ ...p, duration: d }))
                            }
                            className={`flex-1 py-1.5 rounded-xl text-sm font-medium border transition-all ${newAd.duration === d ? "komo-gradient text-white border-transparent" : "border-komo-border text-komo-text-secondary"}`}
                          >
                            {d}
                          </button>
                        ))}
                      </div>
                    </div>
                    <button
                      type="button"
                      data-ocid="ads.create.submit_button"
                      onClick={() => {
                        if (!newAd.title || !newAd.advertiser) {
                          toast.error("Please fill all fields");
                          return;
                        }
                        setAdsData((prev) => [
                          ...prev,
                          {
                            id: Date.now(),
                            title: newAd.title,
                            advertiser: newAd.advertiser,
                            type: newAd.type,
                            status: "Active",
                            impressions: "0",
                            ctr: "0%",
                            budget: `₹${newAd.budget || "0"}`,
                          },
                        ]);
                        toast.success("Ad launched successfully!");
                        setCreateAdOpen(false);
                        setNewAd({
                          title: "",
                          advertiser: "",
                          type: "Banner",
                          budget: "",
                          duration: "7 days",
                        });
                      }}
                      className="w-full komo-gradient text-white font-semibold py-2.5 rounded-xl hover:opacity-90 transition-opacity mt-1"
                    >
                      🚀 Launch Ad
                    </button>
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>
          )}

          {activeSection === "owner" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-5"
            >
              <div className="flex items-center gap-2">
                <Crown size={20} className="text-yellow-400" />
                <h1 className="text-[20px] font-bold text-foreground">
                  Owner Management
                </h1>
              </div>

              {/* Admin Management Card */}
              <div className="komo-surface rounded-2xl komo-card-shadow overflow-hidden">
                <div className="p-4 border-b border-komo-border">
                  <h2 className="text-[14px] font-semibold text-foreground">
                    Admin Management
                  </h2>
                  <p className="text-[12px] text-komo-text-muted mt-0.5">
                    Promote users to admin or demote existing admins
                  </p>
                </div>

                {/* Mobile: User Role Cards */}
                <div className="sm:hidden divide-y divide-komo-border">
                  {MOCK_USERS_ADMIN.map((user, i) => {
                    const currentRole = ownerRoles[user.id] ?? user.role;
                    return (
                      <div
                        key={user.id}
                        data-ocid={`owner.admin_mgmt.row.${i + 1}`}
                        className="p-4 flex items-center gap-3"
                      >
                        <div
                          className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center text-[12px] font-bold text-white"
                          style={{ background: user.gradient }}
                        >
                          {user.initials}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[13px] font-semibold text-foreground truncate">
                            {user.displayName}
                          </p>
                          <p className="text-[11px] text-komo-text-muted">
                            @{user.username}
                          </p>
                          <div className="mt-1">
                            <RoleBadge role={currentRole} />
                          </div>
                        </div>
                        <div className="flex-shrink-0">
                          {currentRole === "owner" ? (
                            <span className="text-[11px] text-komo-text-muted italic">
                              Owner
                            </span>
                          ) : currentRole === "user" ? (
                            <Button
                              data-ocid={`owner.promote.button.${i + 1}`}
                              size="sm"
                              className="h-9 text-[11px] komo-gradient border-0 text-white"
                              onClick={() =>
                                handlePromoteOrDemote(user.id, currentRole)
                              }
                            >
                              <Shield size={12} className="mr-1" /> Promote
                            </Button>
                          ) : (
                            <Button
                              data-ocid={`owner.demote.button.${i + 1}`}
                              size="sm"
                              variant="ghost"
                              className="h-9 text-[11px] text-destructive hover:bg-destructive/10"
                              onClick={() =>
                                handlePromoteOrDemote(user.id, currentRole)
                              }
                            >
                              <X size={12} className="mr-1" /> Demote
                            </Button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Desktop: Table */}
                <div className="hidden sm:block">
                  <Table>
                    <TableHeader>
                      <TableRow className="border-komo-border hover:bg-transparent">
                        <TableHead className="text-komo-text-muted">
                          User
                        </TableHead>
                        <TableHead className="text-komo-text-muted">
                          Current Role
                        </TableHead>
                        <TableHead className="text-komo-text-muted">
                          Action
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {MOCK_USERS_ADMIN.map((user, i) => {
                        const currentRole = ownerRoles[user.id] ?? user.role;
                        return (
                          <TableRow
                            key={user.id}
                            data-ocid={`owner.admin_mgmt.row.${i + 1}`}
                            className="border-komo-border hover:bg-accent/30"
                          >
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <div
                                  className="w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-bold text-white"
                                  style={{ background: user.gradient }}
                                >
                                  {user.initials}
                                </div>
                                <div>
                                  <p className="text-[13px] font-semibold text-foreground">
                                    {user.displayName}
                                  </p>
                                  <p className="text-[11px] text-komo-text-muted">
                                    @{user.username}
                                  </p>
                                </div>
                              </div>
                            </TableCell>
                            <TableCell>
                              <RoleBadge role={currentRole} />
                            </TableCell>
                            <TableCell>
                              {currentRole === "owner" ? (
                                <span className="text-[11px] text-komo-text-muted italic">
                                  Platform Owner
                                </span>
                              ) : currentRole === "user" ? (
                                <Button
                                  data-ocid={`owner.promote.button.${i + 1}`}
                                  size="sm"
                                  className="h-7 text-[11px] komo-gradient border-0 text-white"
                                  onClick={() =>
                                    handlePromoteOrDemote(user.id, currentRole)
                                  }
                                >
                                  <Shield size={12} className="mr-1" /> Promote
                                  to Admin
                                </Button>
                              ) : (
                                <Button
                                  data-ocid={`owner.demote.button.${i + 1}`}
                                  size="sm"
                                  variant="ghost"
                                  className="h-7 text-[11px] text-destructive hover:bg-destructive/10"
                                  onClick={() =>
                                    handlePromoteOrDemote(user.id, currentRole)
                                  }
                                >
                                  <X size={12} className="mr-1" /> Demote
                                </Button>
                              )}
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </div>
              </div>

              {/* Platform Settings Card */}
              <div className="komo-surface rounded-2xl komo-card-shadow p-5">
                <h2 className="text-[14px] font-semibold text-foreground mb-1">
                  Platform Settings
                </h2>
                <p className="text-[12px] text-komo-text-muted mb-4">
                  Toggle platform-wide features on or off
                </p>
                <div className="space-y-3">
                  {(
                    [
                      {
                        key: "registrations" as const,
                        label: "New Registrations",
                        desc: "Allow new users to sign up",
                      },
                      {
                        key: "marketplace" as const,
                        label: "Marketplace",
                        desc: "Enable the product marketplace",
                      },
                      {
                        key: "reels" as const,
                        label: "Reels",
                        desc: "Allow users to create and view reels",
                      },
                      {
                        key: "creatorApplications" as const,
                        label: "Creator Applications",
                        desc: "Let users apply for creator status",
                      },
                    ] as {
                      key: keyof typeof platformSettings;
                      label: string;
                      desc: string;
                    }[]
                  ).map((setting, i) => (
                    <div
                      key={setting.key}
                      data-ocid={`owner.settings.row.${i + 1}`}
                      className="flex items-center justify-between p-3 rounded-xl bg-accent/40"
                    >
                      <div>
                        <p className="text-[13px] font-medium text-foreground">
                          {setting.label}
                        </p>
                        <p className="text-[11px] text-komo-text-muted">
                          {setting.desc}
                        </p>
                      </div>
                      <Switch
                        data-ocid={`owner.settings.switch.${i + 1}`}
                        checked={platformSettings[setting.key]}
                        onCheckedChange={(val) => {
                          setPlatformSettings((prev) => ({
                            ...prev,
                            [setting.key]: val,
                          }));
                          toast.success(
                            `${setting.label} ${val ? "enabled" : "disabled"}`,
                          );
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Revenue Settings Card */}
              <div className="komo-surface rounded-2xl komo-card-shadow p-5">
                <div className="flex items-center gap-2 mb-1">
                  <TrendingUp size={16} className="text-primary" />
                  <h2 className="text-[14px] font-semibold text-foreground">
                    Revenue Settings
                  </h2>
                </div>
                <p className="text-[12px] text-komo-text-muted mb-4">
                  Configure creator payouts and platform earnings
                </p>
                <div className="space-y-3">
                  <div className="bg-accent/40 p-3 rounded-xl">
                    <div className="flex justify-between items-center mb-2">
                      <p className="text-[13px] font-medium text-foreground">
                        Creator Revenue Share
                      </p>
                      <span className="text-[13px] font-bold text-primary">
                        {revenueSettings.creatorShare}%
                      </span>
                    </div>
                    <Slider
                      data-ocid="owner.revenue.creator_share.input"
                      min={0}
                      max={100}
                      step={1}
                      value={[revenueSettings.creatorShare]}
                      onValueChange={([val]) =>
                        setRevenueSettings((prev) => ({
                          ...prev,
                          creatorShare: val,
                        }))
                      }
                      className="w-full"
                    />
                  </div>
                  <div className="bg-accent/40 p-3 rounded-xl">
                    <div className="flex justify-between items-center mb-2">
                      <p className="text-[13px] font-medium text-foreground">
                        Platform Commission
                      </p>
                      <span className="text-[13px] font-bold text-primary">
                        {revenueSettings.platformCommission}%
                      </span>
                    </div>
                    <Slider
                      data-ocid="owner.revenue.commission.input"
                      min={0}
                      max={50}
                      step={1}
                      value={[revenueSettings.platformCommission]}
                      onValueChange={([val]) =>
                        setRevenueSettings((prev) => ({
                          ...prev,
                          platformCommission: val,
                        }))
                      }
                      className="w-full"
                    />
                  </div>
                  <div className="bg-accent/40 p-3 rounded-xl flex items-center justify-between">
                    <div>
                      <p className="text-[13px] font-medium text-foreground">
                        Ad Revenue Distribution
                      </p>
                      <p className="text-[11px] text-komo-text-muted">
                        Share ad revenue with creators
                      </p>
                    </div>
                    <Switch
                      data-ocid="owner.revenue.ad_revenue.switch"
                      checked={revenueSettings.adRevenue}
                      onCheckedChange={(val) =>
                        setRevenueSettings((prev) => ({
                          ...prev,
                          adRevenue: val,
                        }))
                      }
                    />
                  </div>
                  <div className="bg-accent/40 p-3 rounded-xl">
                    <p className="text-[13px] font-medium text-foreground mb-2">
                      Minimum Payout Threshold (₹)
                    </p>
                    <input
                      data-ocid="owner.revenue.payout_threshold.input"
                      type="number"
                      className="w-full bg-background border border-border rounded-lg px-3 py-2 text-[13px] text-foreground"
                      value={revenueSettings.payoutThreshold}
                      onChange={(e) =>
                        setRevenueSettings((prev) => ({
                          ...prev,
                          payoutThreshold: Number(e.target.value),
                        }))
                      }
                    />
                  </div>
                  <div className="bg-accent/40 p-3 rounded-xl">
                    <p className="text-[13px] font-medium text-foreground mb-2">
                      Payout Schedule
                    </p>
                    <div className="flex gap-2">
                      {(["weekly", "monthly"] as const).map((s) => (
                        <button
                          type="button"
                          key={s}
                          data-ocid={`owner.revenue.schedule_${s}.toggle`}
                          onClick={() =>
                            setRevenueSettings((prev) => ({
                              ...prev,
                              payoutSchedule: s,
                            }))
                          }
                          className={`px-4 py-1.5 rounded-full text-[12px] font-medium transition-all ${revenueSettings.payoutSchedule === s ? "bg-gradient-to-r from-[hsl(var(--komo-blue))] to-[hsl(var(--komo-purple))] text-white" : "bg-accent/60 text-foreground"}`}
                        >
                          {s.charAt(0).toUpperCase() + s.slice(1)}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  data-ocid="owner.revenue.save.button"
                  onClick={() => toast.success("Revenue settings saved")}
                  className="mt-4 w-full py-2 rounded-xl text-[13px] font-semibold text-white bg-gradient-to-r from-[hsl(var(--komo-blue))] to-[hsl(var(--komo-purple))]"
                >
                  Save Revenue Settings
                </button>
              </div>

              {/* Banned Words Filter Card */}
              <div className="komo-surface rounded-2xl komo-card-shadow p-5">
                <div className="flex items-center gap-2 mb-1">
                  <Shield size={16} className="text-primary" />
                  <h2 className="text-[14px] font-semibold text-foreground">
                    Banned Words Filter
                  </h2>
                </div>
                <p className="text-[12px] text-komo-text-muted mb-4">
                  Automatically filter harmful content in posts and comments
                </p>
                <div className="space-y-3">
                  <div className="bg-accent/40 p-3 rounded-xl flex items-center justify-between">
                    <div>
                      <p className="text-[13px] font-medium text-foreground">
                        Enable Filter
                      </p>
                      <p className="text-[11px] text-komo-text-muted">
                        Activate banned words detection
                      </p>
                    </div>
                    <Switch
                      data-ocid="owner.banned.enable.switch"
                      checked={bannedWordsEnabled}
                      onCheckedChange={setBannedWordsEnabled}
                    />
                  </div>
                  <div className="bg-accent/40 p-3 rounded-xl">
                    <p className="text-[13px] font-medium text-foreground mb-2">
                      Auto Action
                    </p>
                    <div className="flex gap-2">
                      {(
                        [
                          { value: "warn", label: "Warn User" },
                          { value: "hide", label: "Hide Post" },
                          { value: "remove", label: "Remove Post" },
                        ] as const
                      ).map((opt) => (
                        <button
                          type="button"
                          key={opt.value}
                          data-ocid={`owner.banned.action_${opt.value}.toggle`}
                          onClick={() => setBannedAutoAction(opt.value)}
                          className={`px-3 py-1.5 rounded-full text-[11px] font-medium transition-all ${bannedAutoAction === opt.value ? "bg-gradient-to-r from-[hsl(var(--komo-blue))] to-[hsl(var(--komo-purple))] text-white" : "bg-accent/60 text-foreground"}`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="bg-accent/40 p-3 rounded-xl">
                    <p className="text-[13px] font-medium text-foreground mb-2">
                      Banned Words
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {bannedWords.map((word) => (
                        <span
                          key={word}
                          className="flex items-center gap-1 bg-accent/40 rounded-full px-3 py-1 text-[11px] text-foreground"
                        >
                          {word}
                          <button
                            type="button"
                            data-ocid="owner.banned.word.delete_button"
                            onClick={() =>
                              setBannedWords((prev) =>
                                prev.filter((w) => w !== word),
                              )
                            }
                            className="text-komo-text-muted hover:text-destructive transition-colors"
                          >
                            <X size={10} />
                          </button>
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <input
                        data-ocid="owner.banned.add_word.input"
                        type="text"
                        placeholder="Add banned word..."
                        value={newBannedWord}
                        onChange={(e) => setNewBannedWord(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" && newBannedWord.trim()) {
                            const w = newBannedWord.trim().toLowerCase();
                            if (!bannedWords.includes(w)) {
                              setBannedWords((prev) => [...prev, w]);
                              toast.success(`"${w}" added to banned words`);
                            }
                            setNewBannedWord("");
                          }
                        }}
                        className="flex-1 bg-background border border-border rounded-lg px-3 py-1.5 text-[13px] text-foreground"
                      />
                      <button
                        type="button"
                        data-ocid="owner.banned.add_word.button"
                        onClick={() => {
                          const w = newBannedWord.trim().toLowerCase();
                          if (w && !bannedWords.includes(w)) {
                            setBannedWords((prev) => [...prev, w]);
                            toast.success(`"${w}" added to banned words`);
                          }
                          setNewBannedWord("");
                        }}
                        className="px-4 py-1.5 rounded-lg text-[13px] font-medium bg-gradient-to-r from-[hsl(var(--komo-blue))] to-[hsl(var(--komo-purple))] text-white"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  data-ocid="owner.banned.save.button"
                  onClick={() => toast.success("Banned words filter updated")}
                  className="mt-4 w-full py-2 rounded-xl text-[13px] font-semibold text-white bg-gradient-to-r from-[hsl(var(--komo-blue))] to-[hsl(var(--komo-purple))]"
                >
                  Save Filter Settings
                </button>
              </div>

              {/* Danger Zone Card */}
              <div className="rounded-2xl border-2 border-destructive/40 p-5 bg-destructive/5">
                <h2 className="text-[14px] font-semibold text-destructive mb-1">
                  Danger Zone
                </h2>
                <p className="text-[12px] text-komo-text-muted mb-4">
                  Irreversible actions — proceed with caution
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button
                    data-ocid="owner.danger.reset_stats.button"
                    variant="outline"
                    className="border-destructive/40 text-destructive hover:bg-destructive/10 text-[13px]"
                    onClick={() =>
                      toast.success(
                        "Platform stats reset successfully. All counters cleared.",
                      )
                    }
                  >
                    <RefreshCw size={14} className="mr-2" /> Reset Stats
                  </Button>
                  <Button
                    data-ocid="owner.danger.export_data.button"
                    variant="outline"
                    className="border-destructive/40 text-destructive hover:bg-destructive/10 text-[13px]"
                    onClick={() =>
                      toast.success(
                        "Data export started. You'll receive a download link shortly.",
                      )
                    }
                  >
                    <Download size={14} className="mr-2" /> Export Data
                  </Button>
                </div>
              </div>

              {/* Customer Support Card */}
              <div className="komo-surface rounded-2xl komo-card-shadow p-5">
                <div className="flex items-center gap-2 mb-1">
                  <Headphones size={16} className="text-purple-400" />
                  <h2 className="text-[14px] font-semibold text-foreground">
                    Customer Support
                  </h2>
                </div>
                <p className="text-[12px] text-komo-text-muted mb-4">
                  Manage and resolve user-reported issues
                </p>
                {/* Filter tabs */}
                <div className="flex gap-2 mb-4 flex-wrap">
                  {["All", "Open", "In Progress", "Resolved"].map((f) => (
                    <button
                      key={f}
                      type="button"
                      data-ocid="support.filter.tab"
                      onClick={() => setTicketFilter(f)}
                      className={`px-3 py-1 rounded-full text-[11px] font-semibold transition-all ${ticketFilter === f ? "text-white" : "text-komo-text-muted bg-white/5 hover:bg-white/10"}`}
                      style={
                        ticketFilter === f
                          ? {
                              background:
                                "linear-gradient(135deg,#a855f7,#6366f1)",
                            }
                          : {}
                      }
                    >
                      {f}
                    </button>
                  ))}
                </div>
                {/* Tickets */}
                <div className="flex flex-col gap-3">
                  {[
                    {
                      id: "t1",
                      user: "Riya Sharma",
                      username: "riya_s",
                      initials: "RS",
                      gradient: "linear-gradient(135deg,#f97316,#ef4444)",
                      category: "Payment",
                      priority: "High",
                      issue:
                        "My subscription payment was deducted twice but premium access is not activated.",
                    },
                    {
                      id: "t2",
                      user: "Arjun Mehta",
                      username: "arjun_m",
                      initials: "AM",
                      gradient: "linear-gradient(135deg,#3b82f6,#6366f1)",
                      category: "Account",
                      priority: "High",
                      issue:
                        "I cannot login to my account. OTP is not being received.",
                    },
                    {
                      id: "t3",
                      user: "Priya Kapoor",
                      username: "priya_k",
                      initials: "PK",
                      gradient: "linear-gradient(135deg,#a855f7,#ec4899)",
                      category: "Content",
                      priority: "Medium",
                      issue:
                        "My reel was removed without reason. Please review.",
                    },
                    {
                      id: "t4",
                      user: "Vikram Singh",
                      username: "vik_singh",
                      initials: "VS",
                      gradient: "linear-gradient(135deg,#22c55e,#16a34a)",
                      category: "Bug",
                      priority: "Medium",
                      issue:
                        "App crashes when trying to open the Marketplace on mobile.",
                    },
                    {
                      id: "t5",
                      user: "Neha Gupta",
                      username: "neha_g",
                      initials: "NG",
                      gradient: "linear-gradient(135deg,#f59e0b,#d97706)",
                      category: "Account",
                      priority: "Low",
                      issue:
                        "I want to change my username but the option is greyed out.",
                    },
                    {
                      id: "t6",
                      user: "Karan Dev",
                      username: "karan_d",
                      initials: "KD",
                      gradient: "linear-gradient(135deg,#06b6d4,#3b82f6)",
                      category: "Content",
                      priority: "Low",
                      issue:
                        "My story was not visible to followers for 2 hours.",
                    },
                  ]
                    .filter(
                      (t) =>
                        ticketFilter === "All" ||
                        ticketStatuses[t.id] === ticketFilter,
                    )
                    .map((t, idx) => (
                      <div
                        key={t.id}
                        data-ocid={`support.item.${idx + 1}`}
                        className="p-3 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-2"
                      >
                        <div className="flex items-start gap-3">
                          <div
                            className="w-8 h-8 rounded-full flex items-center justify-center text-white text-[11px] font-bold flex-shrink-0"
                            style={{ background: t.gradient }}
                          >
                            {t.initials}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 flex-wrap mb-1">
                              <span className="text-[13px] font-semibold text-foreground">
                                {t.user}
                              </span>
                              <span className="text-[10px] text-komo-text-muted">
                                @{t.username}
                              </span>
                              <span
                                className={`px-1.5 py-0.5 rounded text-[9px] font-bold ${t.category === "Payment" ? "bg-orange-500/20 text-orange-400" : t.category === "Account" ? "bg-blue-500/20 text-blue-400" : t.category === "Content" ? "bg-purple-500/20 text-purple-400" : "bg-red-500/20 text-red-400"}`}
                              >
                                {t.category}
                              </span>
                              <span
                                className={`px-1.5 py-0.5 rounded text-[9px] font-bold ${t.priority === "High" ? "bg-red-500/20 text-red-400" : t.priority === "Medium" ? "bg-yellow-500/20 text-yellow-400" : "bg-green-500/20 text-green-400"}`}
                              >
                                {t.priority}
                              </span>
                            </div>
                            <p className="text-[12px] text-komo-text-muted line-clamp-2">
                              {t.issue}
                            </p>
                          </div>
                          <div className="flex flex-col items-end gap-1 flex-shrink-0">
                            <span
                              className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${ticketStatuses[t.id] === "Resolved" ? "bg-green-500/20 text-green-400" : ticketStatuses[t.id] === "In Progress" ? "bg-yellow-500/20 text-yellow-400" : "bg-blue-500/20 text-blue-400"}`}
                            >
                              {ticketStatuses[t.id]}
                            </span>
                            <span className="text-[10px] text-komo-text-muted">
                              {t.id === "t1"
                                ? "2h ago"
                                : t.id === "t2"
                                  ? "4h ago"
                                  : t.id === "t3"
                                    ? "1d ago"
                                    : t.id === "t4"
                                      ? "2d ago"
                                      : t.id === "t5"
                                        ? "3d ago"
                                        : "5d ago"}
                            </span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          {ticketStatuses[t.id] !== "Resolved" && (
                            <button
                              type="button"
                              data-ocid="support.primary_button"
                              onClick={() => {
                                setTicketStatuses((prev) => ({
                                  ...prev,
                                  [t.id]: "Resolved",
                                }));
                                toast.success(
                                  `Ticket #${t.id.toUpperCase()} resolved`,
                                );
                              }}
                              className="flex-1 py-1.5 rounded-lg text-white text-[11px] font-semibold bg-green-600/80 hover:bg-green-600 transition-colors"
                            >
                              Resolve
                            </button>
                          )}
                          <button
                            type="button"
                            data-ocid="support.secondary_button"
                            onClick={() => {
                              setReplyTicketId(t.id);
                              setReplyText("");
                            }}
                            className="flex-1 py-1.5 rounded-lg text-[11px] font-semibold border border-white/20 text-komo-text-muted hover:text-foreground hover:border-white/40 transition-colors"
                          >
                            Reply
                          </button>
                        </div>
                        {replyTicketId === t.id && (
                          <div className="flex gap-2 mt-1">
                            <input
                              type="text"
                              data-ocid="support.input"
                              value={replyText}
                              onChange={(e) => setReplyText(e.target.value)}
                              placeholder={`Reply to @${t.username}...`}
                              className="flex-1 px-3 py-1.5 rounded-lg bg-white/10 border border-white/20 text-[12px] text-foreground outline-none focus:border-purple-500/60"
                            />
                            <button
                              type="button"
                              data-ocid="support.submit_button"
                              onClick={() => {
                                if (!replyText.trim()) return;
                                toast.success(`Reply sent to @${t.username}`);
                                setReplyTicketId(null);
                                setReplyText("");
                              }}
                              className="px-3 py-1.5 rounded-lg text-white text-[11px] font-semibold"
                              style={{
                                background:
                                  "linear-gradient(135deg,#a855f7,#6366f1)",
                              }}
                            >
                              Send
                            </button>
                          </div>
                        )}
                      </div>
                    ))}
                </div>
              </div>

              {/* Transfer Ownership Card */}
              <div className="komo-surface rounded-2xl komo-card-shadow p-5">
                <div className="flex items-center gap-2 mb-1">
                  <Crown size={16} className="text-yellow-400" />
                  <h2 className="text-[14px] font-semibold text-foreground">
                    Transfer Ownership
                  </h2>
                </div>
                <p className="text-[12px] text-komo-text-muted mb-4">
                  Transfer platform ownership to another user. This action
                  cannot be undone.
                </p>
                <div className="flex gap-2">
                  <Input
                    data-ocid="owner.transfer.input"
                    placeholder="Enter username (e.g. alex_creates)"
                    value={transferUsername}
                    onChange={(e) => setTransferUsername(e.target.value)}
                    className="bg-accent border-komo-border flex-1"
                  />
                  <AlertDialog
                    open={transferDialogOpen}
                    onOpenChange={setTransferDialogOpen}
                  >
                    <AlertDialogTrigger asChild>
                      <Button
                        data-ocid="owner.transfer.open_modal_button"
                        className="komo-gradient border-0 text-white text-[13px]"
                        onClick={() => {
                          if (!transferUsername.trim()) {
                            toast.error("Please enter a username first");
                            return;
                          }
                          setTransferDialogOpen(true);
                        }}
                      >
                        <Crown size={14} className="mr-1" /> Transfer
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent
                      data-ocid="owner.transfer.dialog"
                      className="komo-surface border-komo-border"
                    >
                      <AlertDialogHeader>
                        <AlertDialogTitle className="text-foreground flex items-center gap-2">
                          <Crown size={16} className="text-yellow-400" />
                          Confirm Ownership Transfer
                        </AlertDialogTitle>
                        <AlertDialogDescription className="text-komo-text-secondary">
                          Are you sure you want to transfer platform ownership
                          to{" "}
                          <span className="font-semibold text-foreground">
                            @{transferUsername}
                          </span>
                          ? You will lose owner-level access permanently.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel
                          data-ocid="owner.transfer.cancel_button"
                          className="border-komo-border"
                        >
                          Cancel
                        </AlertDialogCancel>
                        <AlertDialogAction
                          data-ocid="owner.transfer.confirm_button"
                          className="komo-gradient border-0 text-white"
                          onClick={handleTransferOwnership}
                        >
                          Yes, Transfer
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </div>
            </motion.div>
          )}
        </main>
      </div>
    </div>
  );
}
