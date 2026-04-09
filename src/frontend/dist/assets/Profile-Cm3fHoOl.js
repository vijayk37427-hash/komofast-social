import { c as createLucideIcon, u as useApp, f as useLanguage, r as reactExports, L as LANGUAGES, j as jsxRuntimeExports, m as motion, Z as Zap, B as Button, U as UserPlus, b as ue, g as UserCheck, A as AnimatePresence, h as Play, H as Heart, S as Share2, i as ScrollArea, G as Globe } from "./index-BlWpIyR8.js";
import { B as Badge } from "./badge-BChbocV7.js";
import { P as Progress } from "./progress-5UnY2Quz.js";
import { F as Flag, P as PostDetailModal, R as ReportModal } from "./PostDetailModal-BxesKSU_.js";
import { A as AVATAR_GRADIENTS, a as MOCK_POSTS } from "./mockData-BCdBG7qh.js";
import { S as Settings } from "./settings-DIb6Y4dJ.js";
import { L as LogOut } from "./log-out-CbpoBa2g.js";
import { U as UserMinus } from "./user-minus-IIm4QPAm.js";
import { S as Star } from "./star-0Ucxj6tT.js";
import { T as TrendingUp } from "./trending-up-DGT7M1As.js";
import { B as Bookmark } from "./bookmark-CcTbmyQr.js";
import { T as Trophy } from "./trophy-CUcLP930.js";
import { U as Users } from "./users-Xo-nsB-b.js";
import { S as ShoppingBag } from "./shopping-bag-ZIzuKwi3.js";
import { L as Lock } from "./lock-D6SFrzne.js";
import { C as ChevronRight } from "./chevron-right-DBH-VzQy.js";
import { C as CircleHelp } from "./circle-help-D-L8_5v3.js";
import "./index-BRBSbcSo.js";
import "./index-D4ku5XXv.js";
import "./send-DcEmvjNY.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m4.9 4.9 14.2 14.2", key: "1m5liu" }]
];
const Ban = createLucideIcon("ban", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",
      key: "96xj49"
    }
  ]
];
const Flame = createLucideIcon("flame", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M3 15h18", key: "5xshup" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }],
  ["path", { d: "M15 3v18", key: "14nvp0" }]
];
const Grid3x3 = createLucideIcon("grid-3x3", __iconNode);
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
  initials: "KU"
};
const HONOR_POINTS = 4250;
const TIERS = [
  { name: "Bronze", min: 0, max: 999, color: "#CD7F32", emoji: "🥉" },
  { name: "Silver", min: 1e3, max: 4999, color: "#C0C0C0", emoji: "🥈" },
  { name: "Gold", min: 5e3, max: 14999, color: "#FFD700", emoji: "🥇" },
  {
    name: "Platinum",
    min: 15e3,
    max: Number.POSITIVE_INFINITY,
    color: "#E5E4E2",
    emoji: "💎"
  }
];
const ACTIVITY_STATS = [
  { label: "Login Streak", value: "7 days", icon: Flame, color: "#FF6B35" },
  { label: "Reels Watched", value: "142", icon: Play, color: "#2FA8FF" },
  { label: "Likes Given", value: "89", icon: Heart, color: "#FF4B8B" },
  { label: "Posts Shared", value: "23", icon: Share2, color: "#A855F7" },
  { label: "Referrals", value: "3", icon: Users, color: "#22C55E" },
  { label: "Purchases", value: "2", icon: ShoppingBag, color: "#F59E0B" }
];
const EARNING_HISTORY = [
  { activity: "Daily Login", points: 10, time: "Today", icon: Flame },
  { activity: "Watched 5 Reels", points: 25, time: "Today", icon: Play },
  { activity: "Liked 10 Posts", points: 10, time: "Yesterday", icon: Heart },
  {
    activity: "Referred a Friend",
    points: 200,
    time: "3 days ago",
    icon: Users
  },
  {
    activity: "Made a Purchase",
    points: 150,
    time: "1 week ago",
    icon: ShoppingBag
  }
];
const REWARDS = [
  { name: "10% Marketplace Discount", cost: 500, emoji: "🛒" },
  { name: "Exclusive Gold Badge", cost: 1e3, emoji: "🏅" },
  { name: "Creator Boost", cost: 2e3, emoji: "🚀" },
  { name: "Free Subscription", cost: 3e3, emoji: "⭐" }
];
function formatNum(n) {
  if (n >= 1e6) return `${(n / 1e6).toFixed(1)}M`;
  if (n >= 1e3) return `${(n / 1e3).toFixed(1)}K`;
  return String(n);
}
function getTierInfo(pts) {
  const current = TIERS.findLast((t) => pts >= t.min) ?? TIERS[0];
  const nextIndex = TIERS.indexOf(current) + 1;
  const next = TIERS[nextIndex] ?? null;
  const progress = next ? Math.round((pts - current.min) / (next.min - current.min) * 100) : 100;
  return { current, next, progress };
}
function Profile() {
  const {
    currentPath,
    currentUser,
    logout,
    navigate,
    blockedUsers,
    blockUser,
    unblockUser,
    bannedUsers
  } = useApp();
  const { lang } = useLanguage();
  const isOwnProfile = !currentPath.includes("userId");
  const profileUsername = currentPath.includes("userId") ? "other_user" : (currentUser == null ? void 0 : currentUser.username) || "komofast_user";
  const [following, setFollowing] = reactExports.useState(false);
  const [friendStatus, setFriendStatus] = reactExports.useState("none");
  const [reportUserOpen, setReportUserOpen] = reactExports.useState(false);
  const [subscribed, setSubscribed] = reactExports.useState(false);
  const [activeTab, setActiveTab] = reactExports.useState(
    "posts"
  );
  const [selectedPost, setSelectedPost] = reactExports.useState(null);
  const profile = currentUser ? {
    ...PROFILE_MOCK,
    displayName: currentUser.displayName || PROFILE_MOCK.displayName,
    username: currentUser.username || PROFILE_MOCK.username,
    bio: currentUser.bio || PROFILE_MOCK.bio,
    isCreator: currentUser.isCreator
  } : PROFILE_MOCK;
  const handleLogout = () => {
    logout();
    ue.success("Logged out successfully");
  };
  const {
    current: tier,
    next: nextTier,
    progress: tierProgress
  } = getTierInfo(HONOR_POINTS);
  const currentLang = LANGUAGES.find((l) => l.code === lang);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto px-4 py-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "h-32 rounded-2xl mb-0 -mb-8 relative flex items-center justify-center",
        style: {
          background: "linear-gradient(135deg, rgba(47,168,255,0.3) 0%, rgba(168,85,247,0.3) 100%)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, scale: 0.8 },
              animate: { opacity: 1, scale: 1 },
              transition: { duration: 0.5, ease: "easeOut" },
              className: "flex flex-col items-center gap-1",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: "/assets/generated/komofast-logo-transparent.dim_200x200.png",
                    alt: "KomoFast",
                    className: "w-14 h-14 object-contain",
                    style: {
                      filter: "drop-shadow(0 0 12px rgba(168,85,247,0.7)) drop-shadow(0 0 24px rgba(47,168,255,0.5))"
                    }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "text-[10px] font-bold tracking-widest uppercase text-white/70",
                    style: { textShadow: "0 0 10px rgba(168,85,247,0.8)" },
                    children: "KomoFast"
                  }
                )
              ]
            }
          ),
          isOwnProfile && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-3 right-3 flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                "data-ocid": "profile.settings.button",
                className: "w-8 h-8 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/50 transition-colors",
                onClick: () => navigate("/settings"),
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Settings, { size: 16 })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                "data-ocid": "profile.delete_button",
                className: "w-8 h-8 rounded-full bg-red-900/40 backdrop-blur-sm flex items-center justify-center text-red-400 hover:bg-red-900/60 transition-colors",
                title: "Logout",
                onClick: handleLogout,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { size: 15 })
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "komo-surface rounded-2xl komo-card-shadow p-4 pt-12 relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute -top-10 left-4 w-20 h-20 rounded-full flex items-center justify-center text-[24px] font-bold text-white border-4 border-[#1A1F26]",
          style: { background: profile.gradient },
          children: profile.initials
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-[18px] font-bold text-foreground flex items-center gap-2", children: [
              profile.displayName,
              bannedUsers.includes(profileUsername) && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-500/20 text-red-400 border border-red-500/30", children: "BANNED" })
            ] }),
            profile.isCreator && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-komo-badge/20 text-komo-blue border-komo-blue/30 text-[10px]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { size: 10, className: "mr-0.5" }),
              " CREATOR"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30 text-[10px]", children: "⭐ Premium" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-purple-500/20 text-purple-400 border-purple-500\\/30 text-[10px]", children: "👥 Super Fan" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[13px] text-komo-text-muted", children: [
            "@",
            profile.username
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 mt-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: "/assets/generated/komofast-logo-transparent.dim_200x200.png",
                alt: "KomoFast",
                className: "w-4 h-4 object-contain opacity-80",
                style: {
                  filter: "drop-shadow(0 0 4px rgba(168,85,247,0.6))"
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-komo-text-muted font-medium tracking-wide", children: "KomoFast Member" })
          ] })
        ] }),
        !isOwnProfile ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 items-end", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                "data-ocid": "profile.follow.button",
                size: "sm",
                className: following ? "bg-accent text-komo-text-secondary" : "komo-gradient border-0 text-white",
                onClick: () => {
                  setFollowing((f) => !f);
                  ue.success(following ? "Unfollowed" : "Following!");
                },
                children: [
                  following ? /* @__PURE__ */ jsxRuntimeExports.jsx(UserMinus, { size: 14, className: "mr-1" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(UserPlus, { size: 14, className: "mr-1" }),
                  following ? "Unfollow" : "Follow"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                "data-ocid": "profile.add_friend.button",
                size: "sm",
                onClick: () => {
                  if (friendStatus === "none") {
                    setFriendStatus("pending");
                    ue.success("Friend request bheji gayi! 🤝");
                  }
                },
                className: friendStatus === "friends" ? "bg-green-600/20 text-green-400 border border-green-600/40" : friendStatus === "pending" ? "bg-muted text-muted-foreground" : "bg-gradient-to-r from-blue-500 to-purple-600 border-0 text-white",
                children: friendStatus === "friends" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(UserCheck, { size: 14, className: "mr-1" }),
                  "Friends"
                ] }) : friendStatus === "pending" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(UserPlus, { size: 14, className: "mr-1" }),
                  "Pending..."
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(UserPlus, { size: 14, className: "mr-1" }),
                  "Add Friend"
                ] })
              }
            ),
            profile.isCreator && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                "data-ocid": "profile.subscribe.button",
                size: "sm",
                variant: subscribed ? "secondary" : "outline",
                className: subscribed ? "" : "border-komo-purple text-komo-purple hover:bg-komo-purple/10",
                onClick: () => {
                  setSubscribed((s) => !s);
                  ue.success(
                    subscribed ? "Unsubscribed" : "Subscribed to creator!"
                  );
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 13, className: "mr-1" }),
                  subscribed ? "Subscribed" : "Subscribe"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            blockedUsers.includes(profileUsername) ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                "data-ocid": "profile.unblock.button",
                size: "sm",
                variant: "outline",
                className: "border-green-700/50 text-green-400 hover:bg-green-900/20 text-[11px] h-7",
                onClick: () => {
                  unblockUser(profileUsername);
                  ue.success("User unblocked");
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Ban, { size: 11, className: "mr-1" }),
                  " Unblock"
                ]
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                "data-ocid": "profile.block.button",
                size: "sm",
                variant: "outline",
                className: "border-red-800/50 text-red-400 hover:bg-red-900/20 text-[11px] h-7",
                onClick: () => {
                  blockUser(profileUsername);
                  ue.success(`@${profileUsername} blocked`);
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Ban, { size: 11, className: "mr-1" }),
                  " Block"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                "data-ocid": "profile.report.button",
                size: "sm",
                variant: "outline",
                className: "border-orange-800/50 text-orange-400 hover:bg-orange-900/20 text-[11px] h-7",
                onClick: () => setReportUserOpen(true),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Flag, { size: 11, className: "mr-1" }),
                  " Report"
                ]
              }
            )
          ] })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              "data-ocid": "profile.edit.button",
              size: "sm",
              variant: "outline",
              className: "border-komo-border text-komo-text-secondary hover:text-foreground",
              onClick: () => ue.info("Edit profile coming soon!"),
              children: "Edit Profile"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              "data-ocid": "profile.delete_button",
              size: "sm",
              variant: "outline",
              className: "border-red-800/50 text-red-400 hover:bg-red-900/20 hover:text-red-300",
              onClick: handleLogout,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { size: 13, className: "mr-1" }),
                " Logout"
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-komo-text-secondary mt-3 leading-relaxed", children: profile.bio }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-5 mt-4 flex-wrap", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[16px] font-bold text-foreground", children: formatNum(profile.posts) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-komo-text-muted", children: "Posts" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[16px] font-bold text-foreground", children: formatNum(profile.followers) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-komo-text-muted", children: "Followers" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[16px] font-bold text-foreground", children: formatNum(profile.following) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-komo-text-muted", children: "Following" })
        ] }),
        profile.isCreator && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[16px] font-bold text-foreground", children: formatNum(profile.subscribers) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-komo-text-muted", children: "Subscribers" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[16px] font-bold komo-gradient-text", children: formatNum(HONOR_POINTS) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-komo-text-muted", children: "Honor Pts" })
        ] })
      ] }),
      isOwnProfile && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "mt-4 p-3 rounded-xl flex items-center gap-3",
          style: {
            background: "linear-gradient(135deg, rgba(47,168,255,0.08), rgba(168,85,247,0.12))",
            border: "1px solid rgba(168,85,247,0.25)"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-9 h-9 rounded-full flex items-center justify-center text-[18px]",
                style: {
                  background: "linear-gradient(135deg, #2fa8ff, #a855f7)"
                },
                children: "💳"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-komo-text-muted", children: "My Wallet" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mt-0.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[14px] font-bold komo-gradient-text", children: "₹4,890" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-yellow-400 font-medium", children: "🪙 2,450 Coins" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                "data-ocid": "profile.wallet.button",
                size: "sm",
                className: "komo-gradient border-0 text-white text-[11px] h-7 px-3",
                onClick: () => navigate("/wallet"),
                children: "View Wallet"
              }
            )
          ]
        }
      ),
      isOwnProfile && profile.isCreator && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "mt-4 p-3 rounded-xl flex items-center gap-3",
          style: {
            background: "linear-gradient(135deg, rgba(47,168,255,0.1), rgba(168,85,247,0.1))",
            border: "1px solid rgba(168,85,247,0.2)"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-full komo-gradient flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { size: 16, className: "text-white" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-komo-text-muted", children: "Creator Earnings" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[18px] font-bold komo-gradient-text", children: [
                "$",
                profile.earnings.toFixed(2)
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                "data-ocid": "profile.withdraw.button",
                size: "sm",
                className: "ml-auto komo-gradient border-0 text-white text-[12px]",
                onClick: () => ue.info("Withdrawal coming soon!"),
                children: "Withdraw"
              }
            )
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        "data-ocid": "profile.content.tab",
        className: "flex border-b border-komo-border mt-5",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => setActiveTab("posts"),
              className: `flex items-center gap-2 px-5 py-3 text-[13px] font-semibold border-b-2 transition-colors ${activeTab === "posts" ? "border-komo-blue text-komo-blue" : "border-transparent text-komo-text-muted hover:text-foreground"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Grid3x3, { size: 15 }),
                " Posts"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => setActiveTab("saved"),
              className: `flex items-center gap-2 px-5 py-3 text-[13px] font-semibold border-b-2 transition-colors ${activeTab === "saved" ? "border-komo-blue text-komo-blue" : "border-transparent text-komo-text-muted hover:text-foreground"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Bookmark, { size: 15 }),
                " Saved"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              "data-ocid": "profile.earning.tab",
              onClick: () => setActiveTab("earning"),
              className: `flex items-center gap-2 px-5 py-3 text-[13px] font-semibold border-b-2 transition-colors ${activeTab === "earning" ? "border-komo-blue text-komo-blue" : "border-transparent text-komo-text-muted hover:text-foreground"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { size: 15 }),
                " Earning"
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatePresence, { mode: "wait", children: [
      (activeTab === "posts" || activeTab === "saved") && /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          transition: { duration: 0.2 },
          className: "grid grid-cols-3 gap-1 mt-1",
          children: (activeTab === "saved" ? MOCK_POSTS.filter((p) => p.bookmarked) : MOCK_POSTS).map((post, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.button,
            {
              "data-ocid": `profile.post.item.${i + 1}`,
              className: "aspect-square rounded-sm overflow-hidden relative group",
              onClick: () => setSelectedPost(post),
              whileHover: { opacity: 0.85 },
              children: post.image ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: post.image,
                  alt: "post",
                  className: "w-full h-full object-cover"
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "w-full h-full flex items-center justify-center text-[11px] text-white font-medium p-2 text-center",
                  style: { background: post.gradient },
                  children: [
                    post.caption.slice(0, 30),
                    "..."
                  ]
                }
              )
            },
            post.id
          ))
        },
        "grid"
      ),
      activeTab === "earning" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -8 },
          transition: { duration: 0.25 },
          className: "mt-4 space-y-4 pb-8",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "rounded-2xl p-4 flex items-center gap-4",
                style: {
                  background: "linear-gradient(135deg, rgba(34,197,94,0.1), rgba(47,168,255,0.15))",
                  border: "1px solid rgba(47,168,255,0.3)",
                  boxShadow: "0 4px 16px rgba(47,168,255,0.1)"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "w-11 h-11 rounded-xl flex items-center justify-center text-[22px] flex-shrink-0",
                      style: {
                        background: "linear-gradient(135deg, #22c55e, #2fa8ff)"
                      },
                      children: "💰"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[14px] font-bold text-foreground", children: "Earning Account" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-komo-text-muted leading-snug mt-0.5", children: "View all income sources & linked accounts" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      "data-ocid": "profile.earning_account.primary_button",
                      size: "sm",
                      className: "komo-gradient border-0 text-white text-[12px] h-8 px-3 flex-shrink-0",
                      onClick: () => navigate("/earning-account"),
                      children: "Open"
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "rounded-2xl p-4 flex items-center gap-4",
                style: {
                  background: "linear-gradient(135deg, rgba(47,168,255,0.12), rgba(168,85,247,0.18))",
                  border: "1px solid rgba(168,85,247,0.3)",
                  boxShadow: "0 4px 16px rgba(168,85,247,0.12)"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "w-11 h-11 rounded-xl flex items-center justify-center text-[22px] flex-shrink-0",
                      style: {
                        background: "linear-gradient(135deg, #2fa8ff, #a855f7)"
                      },
                      children: "🚀"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[14px] font-bold text-foreground", children: "Creator Studio" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-komo-text-muted leading-snug mt-0.5", children: "Track earnings, check monetization eligibility" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      "data-ocid": "profile.creator_studio.primary_button",
                      size: "sm",
                      className: "komo-gradient border-0 text-white text-[12px] h-8 px-3 flex-shrink-0",
                      onClick: () => navigate("/creator"),
                      children: "Open"
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "rounded-2xl p-4 flex items-center gap-4",
                style: {
                  background: "linear-gradient(135deg, rgba(244,114,182,0.12), rgba(168,85,247,0.18))",
                  border: "1px solid rgba(244,114,182,0.35)",
                  boxShadow: "0 4px 16px rgba(244,114,182,0.1)"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "w-11 h-11 rounded-xl flex items-center justify-center text-[22px] flex-shrink-0",
                      style: {
                        background: "linear-gradient(135deg, #f472b6, #a855f7)"
                      },
                      children: "💝"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[14px] font-bold text-foreground", children: "Donation Link" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-komo-text-muted leading-snug mt-0.5", children: "Accept donations from your supporters" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      "data-ocid": "profile.donate.primary_button",
                      size: "sm",
                      className: "border-0 text-white text-[12px] h-8 px-3 flex-shrink-0",
                      style: {
                        background: "linear-gradient(135deg, #f472b6, #a855f7)"
                      },
                      onClick: () => navigate("/donate"),
                      children: "Open"
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "rounded-2xl p-5 relative overflow-hidden",
                style: {
                  background: "linear-gradient(135deg, rgba(47,168,255,0.18) 0%, rgba(168,85,247,0.22) 60%, rgba(255,107,53,0.12) 100%)",
                  border: "1px solid rgba(168,85,247,0.3)"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", children: tier.emoji }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-komo-text-muted uppercase tracking-widest", children: "Current Tier" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "text-[20px] font-bold",
                          style: { color: tier.color },
                          children: tier.name
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-auto text-right", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-komo-text-muted", children: "Honor Points" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[28px] font-bold komo-gradient-text leading-tight", children: HONOR_POINTS.toLocaleString() })
                    ] })
                  ] }),
                  nextTier && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-[11px] text-komo-text-muted mb-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tier.name }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: nextTier.name })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Progress, { value: tierProgress, className: "h-2 bg-white/10" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[12px] text-komo-text-secondary mt-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "span",
                        {
                          className: "font-semibold",
                          style: { color: nextTier.color },
                          children: [
                            (nextTier.min - HONOR_POINTS).toLocaleString(),
                            " pts"
                          ]
                        }
                      ),
                      " ",
                      "to reach ",
                      nextTier.emoji,
                      " ",
                      nextTier.name
                    ] })
                  ] }),
                  !nextTier && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-komo-text-secondary mt-2", children: "🏆 You've reached the highest tier!" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[13px] font-semibold text-komo-text-secondary mb-2 flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { size: 14, className: "text-komo-blue" }),
                " Activity Summary"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2", children: ACTIVITY_STATS.map((stat) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "rounded-xl p-3 flex flex-col items-center gap-1.5",
                  style: {
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(stat.icon, { size: 18, style: { color: stat.color } }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[15px] font-bold text-foreground", children: stat.value }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-komo-text-muted text-center leading-tight", children: stat.label })
                  ]
                },
                stat.label
              )) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[13px] font-semibold text-komo-text-secondary mb-2 flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { size: 14, className: "text-komo-purple" }),
                " Earning History"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "rounded-xl overflow-hidden",
                  style: { border: "1px solid rgba(255,255,255,0.08)" },
                  children: EARNING_HISTORY.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: `flex items-center gap-3 px-4 py-3 ${i < EARNING_HISTORY.length - 1 ? "border-b border-white/5" : ""}`,
                      style: { background: "rgba(255,255,255,0.03)" },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0",
                            style: { background: "rgba(47,168,255,0.15)" },
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { size: 15, className: "text-komo-blue" })
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-medium text-foreground truncate", children: item.activity }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-komo-text-muted", children: item.time })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          Badge,
                          {
                            className: "text-[11px] font-bold shrink-0",
                            style: {
                              background: "rgba(34,197,94,0.15)",
                              color: "#4ade80",
                              border: "1px solid rgba(34,197,94,0.3)"
                            },
                            children: [
                              "+",
                              item.points,
                              " pts"
                            ]
                          }
                        )
                      ]
                    },
                    item.activity
                  ))
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[13px] font-semibold text-komo-text-secondary mb-2 flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 14, className: "text-yellow-400" }),
                " Redeem Rewards"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollArea, { className: "w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3 pb-2", children: REWARDS.map((reward) => {
                const canRedeem = HONOR_POINTS >= reward.cost;
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "rounded-xl p-4 flex-shrink-0 w-40 flex flex-col gap-2 relative",
                    style: {
                      background: canRedeem ? "linear-gradient(135deg, rgba(47,168,255,0.1), rgba(168,85,247,0.12))" : "rgba(255,255,255,0.03)",
                      border: canRedeem ? "1px solid rgba(168,85,247,0.3)" : "1px solid rgba(255,255,255,0.07)"
                    },
                    children: [
                      !canRedeem && /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Lock,
                        {
                          size: 12,
                          className: "absolute top-2.5 right-2.5 text-komo-text-muted opacity-60"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: reward.emoji }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: `text-[12px] font-semibold leading-tight ${canRedeem ? "text-foreground" : "text-komo-text-muted"}`,
                          children: reward.name
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-komo-text-muted", children: [
                        reward.cost.toLocaleString(),
                        " pts"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Button,
                        {
                          "data-ocid": "profile.primary_button",
                          size: "sm",
                          variant: "outline",
                          disabled: !canRedeem,
                          className: `mt-auto text-[11px] h-7 ${canRedeem ? "border-komo-purple text-komo-purple hover:bg-komo-purple/10" : "border-white/10 text-komo-text-muted cursor-not-allowed"}`,
                          onClick: () => canRedeem ? ue.success(`Redeemed: ${reward.name}!`) : void 0,
                          children: canRedeem ? "Redeem" : "Locked"
                        }
                      )
                    ]
                  },
                  reward.name
                );
              }) }) })
            ] })
          ]
        },
        "earning"
      )
    ] }),
    isOwnProfile && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "mt-4 rounded-2xl overflow-hidden",
        style: {
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.08)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-3 border-b border-white/5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] font-semibold text-white/50 uppercase tracking-wider", children: "🤖 AI Tools" }) }),
          [
            {
              label: "AI Voice Bot",
              sublabel: "AI Call Assistant",
              path: "/ai-voice-bot",
              emoji: "📞",
              color: "#2fa8ff"
            },
            {
              label: "AI Customer Support",
              sublabel: "Smart Chatbot",
              path: "/ai-support-chat",
              emoji: "🎧",
              color: "#a855f7"
            },
            {
              label: "AI Sales Chat",
              sublabel: "Sales & Offers",
              path: "/ai-sales-chat",
              emoji: "💼",
              color: "#f59e0b"
            }
          ].map((item, idx, arr) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => navigate(item.path),
              className: `w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-white/5 transition-colors ${idx < arr.length - 1 ? "border-b border-white/5" : ""}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-8 h-8 rounded-full flex items-center justify-center text-[16px] flex-shrink-0",
                    style: {
                      background: `${item.color}22`,
                      border: `1px solid ${item.color}44`
                    },
                    children: item.emoji
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[13px] font-medium text-white/80 block", children: item.label }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-white/40", children: item.sublabel })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 15, className: "text-white/30" })
              ]
            },
            item.path
          ))
        ]
      }
    ),
    isOwnProfile && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "mt-4 rounded-2xl overflow-hidden mb-6",
        style: {
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.08)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-3 border-b border-white/5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] font-semibold text-white/50 uppercase tracking-wider", children: "Support & Legal" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              "data-ocid": "profile.language.link",
              onClick: () => navigate("/language"),
              className: "w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-white/5 transition-colors border-b border-white/5",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0",
                    style: {
                      background: "linear-gradient(135deg, rgba(47,168,255,0.25), rgba(168,85,247,0.25))"
                    },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { size: 14, className: "text-komo-blue" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1 text-[13px] font-medium text-white/70", children: "Language / भाषा" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[12px] text-komo-text-muted mr-1", children: [
                  currentLang == null ? void 0 : currentLang.flag,
                  " ",
                  currentLang == null ? void 0 : currentLang.native
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 15, className: "text-white/30" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              "data-ocid": "profile.help.link",
              onClick: () => navigate("/help"),
              className: "w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-white/5 transition-colors border-b border-white/5",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0",
                    style: {
                      background: "linear-gradient(135deg, rgba(47,168,255,0.25), rgba(168,85,247,0.25))"
                    },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleHelp, { size: 14, className: "text-komo-blue" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1 text-[13px] font-medium text-white/70", children: "Help Center / सहायता केंद्र" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 15, className: "text-white/30" })
              ]
            }
          ),
          [
            {
              label: "Privacy Policy",
              path: "/privacy-policy",
              emoji: "🔒",
              ocid: "profile.privacy.link"
            },
            {
              label: "Terms & Conditions",
              path: "/terms",
              emoji: "📜",
              ocid: "profile.terms.link"
            },
            {
              label: "Data Protection (IT Act)",
              path: "/data-protection",
              emoji: "🛡️",
              ocid: "profile.dataprotection.link"
            },
            {
              label: "Community Guidelines",
              path: "/community-guidelines",
              emoji: "📋",
              ocid: "profile.community_guidelines.link"
            },
            {
              label: "Content Rules",
              path: "/content-rules",
              emoji: "📖",
              ocid: "profile.content_rules.link"
            },
            {
              label: "File a Complaint",
              path: "/complaints",
              emoji: "📝",
              ocid: "profile.complaints.link"
            }
          ].map((item, idx, arr) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              "data-ocid": item.ocid,
              onClick: () => navigate(item.path),
              className: `w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-white/5 transition-colors ${idx < arr.length - 1 ? "border-b border-white/5" : ""}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[18px]", children: item.emoji }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1 text-[13px] font-medium text-white/70", children: item.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 15, className: "text-white/30" })
              ]
            },
            item.path
          ))
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PostDetailModal,
      {
        post: selectedPost,
        open: !!selectedPost,
        onClose: () => setSelectedPost(null)
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ReportModal,
      {
        open: reportUserOpen,
        onClose: () => setReportUserOpen(false),
        targetId: profileUsername,
        targetUsername: profileUsername,
        type: "user"
      }
    )
  ] });
}
export {
  Profile as default
};
