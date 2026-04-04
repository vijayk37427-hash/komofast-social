import { c as createLucideIcon, j as jsxRuntimeExports, v as cn, u as useApp, r as reactExports, w as usePlatformStats, x as useApprovePost, y as useRejectPost, z as useToggleUserActive, m as motion, E as Slider, b as ue, B as Button, P as Plus, D as Dialog, k as DialogContent, q as DialogHeader, s as DialogTitle, I as Input, T as Textarea, X, R as RefreshCw, C as Check } from "./index-m-9XzHBK.js";
import { A as AlertDialog, a as AlertDialogTrigger, b as AlertDialogContent, c as AlertDialogHeader, d as AlertDialogTitle, e as AlertDialogDescription, f as AlertDialogFooter, g as AlertDialogCancel, h as AlertDialogAction } from "./alert-dialog-DLmy7JTH.js";
import { B as Badge } from "./badge-cznt1m0U.js";
import { S as Switch } from "./switch-CFP8BJIt.js";
import { A as AVATAR_GRADIENTS, f as MOCK_PRODUCTS } from "./mockData-BCdBG7qh.js";
import { U as Users } from "./users-D7GbLS6T.js";
import { S as Shield } from "./shield-TSDCW4UE.js";
import { S as ShoppingBag } from "./shopping-bag-Bb0LqKX_.js";
import { C as ChartNoAxesColumn } from "./chart-no-axes-column-53n4iwYO.js";
import { C as Crown } from "./crown-B9eg6AC3.js";
import { T as TrendingUp } from "./trending-up-DdiiMpOP.js";
import { P as Package } from "./package-D8SduUuj.js";
import { T as Trash2 } from "./trash-2-B7mQNprq.js";
import { D as Download } from "./download-DsuTF61L.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$5 = [
  [
    "path",
    {
      d: "M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",
      key: "1xhozi"
    }
  ]
];
const Headphones = createLucideIcon("headphones", __iconNode$5);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$4 = [
  ["rect", { width: "7", height: "9", x: "3", y: "3", rx: "1", key: "10lvy0" }],
  ["rect", { width: "7", height: "5", x: "14", y: "3", rx: "1", key: "16une8" }],
  ["rect", { width: "7", height: "9", x: "14", y: "12", rx: "1", key: "1hutg5" }],
  ["rect", { width: "7", height: "5", x: "3", y: "16", rx: "1", key: "ldoo1y" }]
];
const LayoutDashboard = createLucideIcon("layout-dashboard", __iconNode$4);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["path", { d: "m3 11 18-5v12L3 14v-3z", key: "n962bs" }],
  ["path", { d: "M11.6 16.8a3 3 0 1 1-5.8-1.6", key: "1yl0tm" }]
];
const Megaphone = createLucideIcon("megaphone", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1m0v6g" }],
  [
    "path",
    {
      d: "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",
      key: "ohrbg2"
    }
  ]
];
const SquarePen = createLucideIcon("square-pen", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["circle", { cx: "9", cy: "12", r: "3", key: "u3jwor" }],
  ["rect", { width: "20", height: "14", x: "2", y: "5", rx: "7", key: "g7kal2" }]
];
const ToggleLeft = createLucideIcon("toggle-left", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["circle", { cx: "15", cy: "12", r: "3", key: "1afu0r" }],
  ["rect", { width: "20", height: "14", x: "2", y: "5", rx: "7", key: "g7kal2" }]
];
const ToggleRight = createLucideIcon("toggle-right", __iconNode);
function Table({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-slot": "table-container",
      className: "relative w-full overflow-x-auto",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "table",
        {
          "data-slot": "table",
          className: cn("w-full caption-bottom text-sm", className),
          ...props
        }
      )
    }
  );
}
function TableHeader({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "thead",
    {
      "data-slot": "table-header",
      className: cn("[&_tr]:border-b", className),
      ...props
    }
  );
}
function TableBody({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "tbody",
    {
      "data-slot": "table-body",
      className: cn("[&_tr:last-child]:border-0", className),
      ...props
    }
  );
}
function TableRow({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "tr",
    {
      "data-slot": "table-row",
      className: cn(
        "hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",
        className
      ),
      ...props
    }
  );
}
function TableHead({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "th",
    {
      "data-slot": "table-head",
      className: cn(
        "text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      ),
      ...props
    }
  );
}
function TableCell({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "td",
    {
      "data-slot": "table-cell",
      className: cn(
        "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      ),
      ...props
    }
  );
}
const SIDEBAR_ITEMS = [
  { id: "overview", label: "Overview", icon: LayoutDashboard },
  { id: "users", label: "Users", icon: Users },
  { id: "moderation", label: "Moderation", icon: Shield },
  { id: "marketplace", label: "Marketplace", icon: ShoppingBag },
  { id: "analytics", label: "Analytics", icon: ChartNoAxesColumn },
  { id: "ads", label: "Ads", icon: Megaphone },
  { id: "owner", label: "Owner", icon: Crown }
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
    gradient: AVATAR_GRADIENTS[0]
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
    gradient: AVATAR_GRADIENTS[2]
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
    gradient: AVATAR_GRADIENTS[3]
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
    gradient: AVATAR_GRADIENTS[4]
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
    gradient: AVATAR_GRADIENTS[6]
  }
];
const MOCK_PENDING_POSTS = [
  {
    id: "pp1",
    username: "new_user_42",
    initials: "NU",
    gradient: AVATAR_GRADIENTS[7],
    caption: "Check out my new content piece! Excited to share this with the Komofast community.",
    type: "post",
    time: "10m ago"
  },
  {
    id: "pp2",
    username: "creator_sarah",
    initials: "CS",
    gradient: AVATAR_GRADIENTS[1],
    caption: "My latest reel showcasing the new dance challenge that's been trending worldwide!",
    type: "reel",
    time: "25m ago"
  },
  {
    id: "pp3",
    username: "techblog_jay",
    initials: "TJ",
    gradient: AVATAR_GRADIENTS[5],
    caption: "5 reasons why Web3 social media is the future - A deep dive into decentralized platforms.",
    type: "post",
    time: "1h ago"
  }
];
function RoleBadge({ role }) {
  if (role === "owner") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-yellow-500/20 text-yellow-400 border-yellow-500/40 text-[10px] gap-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Crown, { size: 9 }),
      " owner"
    ] });
  }
  if (role === "admin") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-komo-badge/20 text-komo-blue border-komo-blue/30 text-[10px]", children: "admin" });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-accent text-komo-text-secondary border-0 text-[10px]", children: "user" });
}
function StatCard({
  title,
  value,
  icon: Icon,
  color
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "komo-surface rounded-2xl komo-card-shadow p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: `w-10 h-10 rounded-xl flex items-center justify-center ${color}`,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 20, className: "text-white" })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-komo-text-muted", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[22px] font-bold komo-gradient-text", children: value })
    ] })
  ] }) });
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
    budget: "₹12,000"
  },
  {
    id: 2,
    title: "New App Launch",
    advertiser: "TechCorp",
    type: "Video",
    status: "Active",
    impressions: "220K",
    ctr: "5.8%",
    budget: "₹25,000"
  },
  {
    id: 3,
    title: "Food Delivery Offer",
    advertiser: "QuickEats",
    type: "Story",
    status: "Paused",
    impressions: "180K",
    ctr: "2.1%",
    budget: "₹8,500"
  },
  {
    id: 4,
    title: "Fitness Challenge",
    advertiser: "GymPro",
    type: "Banner",
    status: "Active",
    impressions: "310K",
    ctr: "4.5%",
    budget: "₹15,000"
  },
  {
    id: 5,
    title: "Online Course",
    advertiser: "LearnNow",
    type: "Video",
    status: "Ended",
    impressions: "95K",
    ctr: "1.9%",
    budget: "₹5,000"
  }
];
const AD_THUMB_GRADIENTS = [
  "linear-gradient(135deg, #2FA8FF, #A855F7)",
  "linear-gradient(135deg, #f59e0b, #ef4444)",
  "linear-gradient(135deg, #22c55e, #2FA8FF)",
  "linear-gradient(135deg, #A855F7, #ec4899)",
  "linear-gradient(135deg, #64748b, #475569)"
];
const CATEGORY_META = {
  fake_news: {
    label: "Fake News",
    emoji: "🗞️",
    bgColor: "bg-orange-500/15",
    textColor: "text-orange-400"
  },
  adult_content: {
    label: "Adult Content",
    emoji: "🔞",
    bgColor: "bg-red-500/15",
    textColor: "text-red-400"
  },
  hate_speech: {
    label: "Hate Speech",
    emoji: "💬",
    bgColor: "bg-red-600/15",
    textColor: "text-red-500"
  },
  spam: {
    label: "Spam",
    emoji: "📢",
    bgColor: "bg-yellow-500/15",
    textColor: "text-yellow-400"
  },
  other: {
    label: "Other",
    emoji: "⚠️",
    bgColor: "bg-white/10",
    textColor: "text-komo-text-muted"
  }
};
const MODERATION_CATEGORIES = [
  {
    emoji: "📰",
    category: "Fake News / Misinformation",
    description: "Deliberately false or misleading information presented as fact.",
    action: "Warning → Ban",
    enforcement: "1st offense: Warning. 2nd offense: 7-day suspension. 3rd offense: Permanent ban."
  },
  {
    emoji: "🔞",
    category: "Adult / Sexual Content",
    description: "Explicit, pornographic, or sexually suggestive material.",
    action: "Immediate Removal",
    enforcement: "Immediate content removal. Repeat offenders: Account permanently banned."
  },
  {
    emoji: "💢",
    category: "Hate Speech",
    description: "Content promoting discrimination, violence, or hatred based on race, religion, gender, or nationality.",
    action: "Warning → Ban",
    enforcement: "1st offense: Warning + removal. 2nd offense: 30-day suspension. 3rd offense: Permanent ban."
  },
  {
    emoji: "🔪",
    category: "Violence / Gore",
    description: "Graphic depictions of violence, self-harm, or threats of physical harm.",
    action: "Immediate Removal",
    enforcement: "Immediate removal. Reported to authorities if content involves real threats."
  },
  {
    emoji: "📧",
    category: "Spam / Scam",
    description: "Unsolicited commercial messages, phishing links, or fraudulent schemes.",
    action: "Warning → Suspension",
    enforcement: "1st offense: Warning. 2nd offense: 14-day suspension. Persistent: Permanent ban."
  },
  {
    emoji: "❌",
    category: "Illegal Content",
    description: "Any content that violates Indian law or international laws (IT Act 2000).",
    action: "Immediate Ban",
    enforcement: "Immediate permanent ban + content removal. Case reported to law enforcement as required."
  }
];
function ModerationPanel() {
  const { reportedItems, bannedUsers, banUser, unbanUser, updateReportStatus } = useApp();
  const [autoModEnabled, setAutoModEnabled] = reactExports.useState(true);
  const pendingReports = reportedItems.filter((r) => r.status === "pending");
  const removedCount = reportedItems.filter(
    (r) => r.status === "removed"
  ).length;
  const formatTime = (d) => {
    const mins = Math.round((Date.now() - d.getTime()) / 6e4);
    if (mins < 60) return `${mins}m ago`;
    if (mins < 1440) return `${Math.round(mins / 60)}h ago`;
    return `${Math.round(mins / 1440)}d ago`;
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-[20px] font-bold text-foreground", children: "Content Moderation" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-orange-500/15 text-orange-400 border-orange-500/30", children: [
        pendingReports.length,
        " pending"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-2 sm:gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "komo-surface rounded-xl p-3 komo-card-shadow text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[22px] font-bold text-orange-400", children: pendingReports.length }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-komo-text-muted mt-0.5", children: "Pending Reports" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "komo-surface rounded-xl p-3 komo-card-shadow text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[22px] font-bold text-red-400", children: removedCount }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-komo-text-muted mt-0.5", children: "Removed" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "komo-surface rounded-xl p-3 komo-card-shadow text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[22px] font-bold text-foreground", children: bannedUsers.length }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-komo-text-muted mt-0.5", children: "Banned Users" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "komo-surface rounded-2xl komo-card-shadow overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-3 border-b border-komo-border flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { size: 15, className: "text-komo-blue" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[14px] font-semibold text-foreground", children: "Reports Queue" })
      ] }),
      pendingReports.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          "data-ocid": "admin.moderation.empty_state",
          className: "text-center py-10",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 32, className: "text-green-400 mx-auto mb-2" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground font-semibold text-[14px]", children: "No pending reports" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-komo-text-muted text-[12px] mt-0.5", children: "All clear!" })
          ]
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col divide-y divide-komo-border", children: pendingReports.map((report, i) => {
        const meta = CATEGORY_META[report.category] ?? CATEGORY_META.other;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            "data-ocid": `admin.moderation.item.${i + 1}`,
            className: "p-4",
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-9 h-9 rounded-full flex items-center justify-center text-[11px] font-bold text-white flex-shrink-0",
                    style: {
                      background: AVATAR_GRADIENTS[i % AVATAR_GRADIENTS.length]
                    },
                    children: report.targetUsername.slice(0, 2).toUpperCase()
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[13px] font-semibold text-foreground", children: [
                      "@",
                      report.targetUsername
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "span",
                      {
                        className: `text-[10px] px-2 py-0.5 rounded-full font-semibold ${meta.bgColor} ${meta.textColor}`,
                        children: [
                          meta.emoji,
                          " ",
                          meta.label
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "text-[9px] bg-accent text-komo-text-muted border-0", children: report.type }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-komo-text-muted ml-auto", children: formatTime(report.timestamp) })
                  ] }),
                  report.description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-komo-text-secondary mt-1 line-clamp-2", children: report.description }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-komo-text-muted mt-0.5", children: [
                    "Reported by @",
                    report.reportedBy
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    "data-ocid": `admin.moderation.remove.${i + 1}`,
                    size: "sm",
                    className: "flex-1 bg-red-500/15 text-red-400 hover:bg-red-500/25 border-0 text-[12px] h-8",
                    onClick: () => {
                      updateReportStatus(report.id, "removed");
                      ue.success("Content removed");
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 12, className: "mr-1" }),
                      " Remove"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    "data-ocid": `admin.moderation.dismiss.${i + 1}`,
                    size: "sm",
                    variant: "ghost",
                    className: "flex-1 text-komo-text-muted hover:text-foreground text-[12px] h-8",
                    onClick: () => {
                      updateReportStatus(report.id, "dismissed");
                      ue.success("Report dismissed");
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 12, className: "mr-1" }),
                      " Dismiss"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    "data-ocid": `admin.moderation.ban.${i + 1}`,
                    size: "sm",
                    className: "bg-red-900/30 text-red-300 hover:bg-red-900/50 border-0 text-[12px] h-8 px-3",
                    onClick: () => {
                      banUser(report.targetUsername);
                      updateReportStatus(report.id, "removed");
                      ue.success(`@${report.targetUsername} banned`);
                    },
                    children: "Ban User"
                  }
                )
              ] })
            ]
          },
          report.id
        );
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "komo-surface rounded-2xl komo-card-shadow overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-3 border-b border-komo-border flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { size: 15, className: "text-red-400" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[14px] font-semibold text-foreground", children: "Banned Users" }),
        bannedUsers.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "ml-auto bg-red-500/15 text-red-400 border-red-500/30 text-[10px]", children: bannedUsers.length })
      ] }),
      bannedUsers.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          "data-ocid": "admin.banned.empty_state",
          className: "text-center py-8",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-komo-text-muted text-[13px]", children: "No banned users" })
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col divide-y divide-komo-border", children: bannedUsers.map((username, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          "data-ocid": `admin.banned.item.${i + 1}`,
          className: "flex items-center justify-between px-4 py-3",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-bold text-white",
                  style: {
                    background: AVATAR_GRADIENTS[i % AVATAR_GRADIENTS.length]
                  },
                  children: username.slice(0, 2).toUpperCase()
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[13px] font-semibold text-foreground", children: [
                  "@",
                  username
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] px-1.5 py-0.5 rounded-full bg-red-500/15 text-red-400 font-semibold", children: "BANNED" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                "data-ocid": `admin.banned.unban.${i + 1}`,
                size: "sm",
                variant: "outline",
                className: "border-green-700/50 text-green-400 hover:bg-green-900/20 text-[12px] h-8",
                onClick: () => {
                  unbanUser(username);
                  ue.success(`@${username} unbanned`);
                },
                children: "Unban"
              }
            )
          ]
        },
        username
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "komo-surface rounded-2xl komo-card-shadow overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-3 border-b border-komo-border flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { size: 15, className: "text-komo-purple" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[14px] font-semibold text-foreground", children: "Content Moderation Policy" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: `text-[11px] font-semibold ${autoModEnabled ? "text-green-400" : "text-komo-text-muted"}`,
              children: autoModEnabled ? "Auto-Mod ON" : "Auto-Mod OFF"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Switch,
            {
              checked: autoModEnabled,
              onCheckedChange: setAutoModEnabled
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 space-y-3", children: MODERATION_CATEGORIES.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "rounded-xl p-3",
          style: {
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.06)"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: cat.emoji }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[13px] font-bold text-foreground", children: cat.category }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "ml-auto text-[9px] bg-red-500/15 text-red-400 border-red-500/30", children: cat.action })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-komo-text-muted", children: cat.description }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-orange-400/80 mt-1", children: [
              "⚠️ ",
              cat.enforcement
            ] })
          ]
        },
        cat.category
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "mx-4 mb-4 p-3 rounded-xl",
          style: {
            background: "rgba(47,168,255,0.07)",
            border: "1px solid rgba(47,168,255,0.2)"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] font-semibold text-komo-blue mb-1", children: "📌 Appeal Process" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[12px] text-komo-text-muted", children: [
              "Users can appeal content removal decisions within",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-white/80", children: "7 days" }),
              " by contacting",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-komo-blue", children: "vijayk37427@gmail.com" }),
              " with their username and the content ID."
            ] })
          ]
        }
      )
    ] })
  ] });
}
function Admin() {
  const { isAdmin: _isAdmin } = useApp();
  const [activeSection, setActiveSection] = reactExports.useState("overview");
  const [users, setUsers] = reactExports.useState(MOCK_USERS_ADMIN);
  const [_pendingPosts, setPendingPosts] = reactExports.useState(MOCK_PENDING_POSTS);
  const [products, setProducts] = reactExports.useState(MOCK_PRODUCTS);
  const [addProductOpen, setAddProductOpen] = reactExports.useState(false);
  const [newProduct, setNewProduct] = reactExports.useState({
    title: "",
    description: "",
    price: "",
    category: "",
    stock: ""
  });
  const [createAdOpen, setCreateAdOpen] = reactExports.useState(false);
  const [adFrequency, setAdFrequency] = reactExports.useState(3);
  const [newAd, setNewAd] = reactExports.useState({
    title: "",
    advertiser: "",
    type: "Banner",
    budget: "",
    duration: "7 days"
  });
  const [adsData, setAdsData] = reactExports.useState(ADS_DATA_INIT);
  const [ownerRoles, setOwnerRoles] = reactExports.useState(
    Object.fromEntries(MOCK_USERS_ADMIN.map((u) => [u.id, u.role]))
  );
  const [platformSettings, setPlatformSettings] = reactExports.useState({
    registrations: true,
    marketplace: true,
    reels: true,
    creatorApplications: true
  });
  const [transferUsername, setTransferUsername] = reactExports.useState("");
  const [transferDialogOpen, setTransferDialogOpen] = reactExports.useState(false);
  const [ticketStatuses, setTicketStatuses] = reactExports.useState({
    t1: "Open",
    t2: "Open",
    t3: "In Progress",
    t4: "In Progress",
    t5: "Resolved",
    t6: "Resolved"
  });
  const [ticketFilter, setTicketFilter] = reactExports.useState("All");
  const [replyTicketId, setReplyTicketId] = reactExports.useState(null);
  const [replyText, setReplyText] = reactExports.useState("");
  const [revenueSettings, setRevenueSettings] = reactExports.useState({
    creatorShare: 70,
    platformCommission: 20,
    adRevenue: true,
    payoutThreshold: 500,
    payoutSchedule: "monthly"
  });
  const [bannedWordsEnabled, setBannedWordsEnabled] = reactExports.useState(true);
  const [bannedAutoAction, setBannedAutoAction] = reactExports.useState("warn");
  const [bannedWords, setBannedWords] = reactExports.useState([
    "spam",
    "hate",
    "abuse",
    "scam",
    "fake"
  ]);
  const [newBannedWord, setNewBannedWord] = reactExports.useState("");
  const [commissionRate, setCommissionRate] = reactExports.useState(30);
  const [adsEnabled, setAdsEnabled] = reactExports.useState(true);
  const [subscriptionEnabled, setSubscriptionEnabled] = reactExports.useState(true);
  const [payoutQueue, setPayoutQueue] = reactExports.useState([
    {
      id: "p1",
      teacher: "Anjali Sharma",
      amount: 4200,
      course: "React Masterclass",
      date: "Mar 15",
      status: "pending"
    },
    {
      id: "p2",
      teacher: "Rahul Verma",
      amount: 2800,
      course: "Python for Beginners",
      date: "Mar 14",
      status: "pending"
    },
    {
      id: "p3",
      teacher: "Priya Singh",
      amount: 6150,
      course: "UI/UX Design Pro",
      date: "Mar 13",
      status: "pending"
    },
    {
      id: "p4",
      teacher: "Vikram Nair",
      amount: 1950,
      course: "Digital Marketing",
      date: "Mar 12",
      status: "pending"
    }
  ]);
  const { data: stats } = usePlatformStats();
  useApprovePost();
  useRejectPost();
  const toggleUser = useToggleUserActive();
  const handleToggleUser = (userId) => {
    setUsers(
      (prev) => prev.map((u) => u.id === userId ? { ...u, isActive: !u.isActive } : u)
    );
    toggleUser.mutate(userId);
  };
  const handleAddProduct = () => {
    if (!newProduct.title || !newProduct.price) {
      ue.error("Title and price required");
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
        rating: 5,
        reviews: 0,
        soldCount: 0,
        discount: 0
      }
    ]);
    setNewProduct({
      title: "",
      description: "",
      price: "",
      category: "",
      stock: ""
    });
    setAddProductOpen(false);
    ue.success("Product added!");
  };
  const handlePromoteOrDemote = (userId, currentRole) => {
    if (currentRole === "user") {
      setOwnerRoles((prev) => ({ ...prev, [userId]: "admin" }));
      ue.success("User promoted to Admin!");
    } else if (currentRole === "admin") {
      setOwnerRoles((prev) => ({ ...prev, [userId]: "user" }));
      ue.success("Admin demoted to User.");
    }
  };
  const handleTransferOwnership = () => {
    if (!transferUsername.trim()) {
      ue.error("Please enter a username");
      return;
    }
    const target = MOCK_USERS_ADMIN.find(
      (u) => u.username === transferUsername.trim()
    );
    if (!target) {
      ue.error("User not found");
      return;
    }
    setTransferUsername("");
    setTransferDialogOpen(false);
    ue.success(`Ownership transferred to @${target.username}!`);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:hidden sticky top-0 z-20 bg-background/95 backdrop-blur-sm border-b border-komo-border/60 shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1.5 overflow-x-auto pb-2 pt-2 px-3 scrollbar-hide", children: SIDEBAR_ITEMS.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: () => setActiveSection(item.id),
        className: `flex-shrink-0 flex flex-col items-center gap-0.5 px-3 py-1.5 min-h-[52px] min-w-[56px] justify-center rounded-xl text-[10px] font-semibold transition-all ${activeSection === item.id ? "komo-gradient text-white shadow-md" : "bg-accent/70 text-komo-text-secondary"}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { size: 16 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item.label })
        ]
      },
      item.id
    )) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-5 px-3 sm:px-4 py-3 sm:py-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("aside", { className: "w-48 flex-shrink-0 hidden md:block", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "komo-surface rounded-2xl komo-card-shadow p-3 sticky top-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[12px] font-bold text-komo-text-muted uppercase tracking-wider px-2 mb-3", children: "Admin Panel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "flex flex-col gap-1", children: SIDEBAR_ITEMS.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            "data-ocid": `admin.${item.id}.link`,
            onClick: () => setActiveSection(item.id),
            className: `flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13px] font-medium transition-all ${activeSection === item.id ? "komo-gradient text-white" : "text-komo-text-secondary hover:bg-accent hover:text-foreground"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { size: 16 }),
              item.label,
              item.id === "owner" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto text-yellow-400", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Crown, { size: 11 }) })
            ]
          },
          item.id
        )) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1 min-w-0", children: [
        activeSection === "overview" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            className: "space-y-6",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-[20px] font-bold text-foreground", children: "Platform Overview" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  StatCard,
                  {
                    title: "Total Users",
                    value: String((stats == null ? void 0 : stats.userCount) || "1,248"),
                    icon: Users,
                    color: "bg-komo-blue"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  StatCard,
                  {
                    title: "Total Posts",
                    value: String((stats == null ? void 0 : stats.postCount) || "8,392"),
                    icon: TrendingUp,
                    color: "bg-komo-purple"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  StatCard,
                  {
                    title: "Orders",
                    value: String((stats == null ? void 0 : stats.orderCount) || "347"),
                    icon: Package,
                    color: "bg-green-500"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  StatCard,
                  {
                    title: "Commissions",
                    value: "$2,847",
                    icon: ChartNoAxesColumn,
                    color: "bg-orange-500"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "komo-surface rounded-2xl komo-card-shadow p-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[14px] font-semibold text-foreground mb-4", children: "Activity Overview" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-end gap-2 h-32", children: [65, 80, 55, 90, 70, 85, 95, 60, 75, 88, 72, 94].map(
                  (h, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.div,
                    {
                      className: "flex-1 rounded-t-md komo-gradient opacity-70 hover:opacity-100 transition-opacity",
                      style: { height: `${h}%` },
                      initial: { scaleY: 0 },
                      animate: { scaleY: 1 },
                      transition: { delay: i * 0.05 }
                    },
                    `bar-${h}`
                  )
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-between mt-2", children: [
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
                  "Dec"
                ].map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-komo-text-muted", children: m }, m)) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-3", children: [
                {
                  label: "Total Revenue",
                  value: "₹1,84,200",
                  growth: "+18.2%",
                  icon: "💰"
                },
                {
                  label: "Course Sales",
                  value: "₹1,12,500",
                  growth: "+24.6%",
                  icon: "🎓"
                },
                {
                  label: "Ad Revenue",
                  value: "₹38,400",
                  growth: "+11.3%",
                  icon: "📢"
                },
                {
                  label: "Subscriptions",
                  value: "₹33,300",
                  growth: "+32.1%",
                  icon: "⭐"
                }
              ].map((stat) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "komo-surface rounded-2xl komo-card-shadow p-4",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[20px] mb-1", children: stat.icon }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-[11px] font-medium text-komo-text-muted mb-1", children: stat.label }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[18px] font-bold komo-gradient-text", children: stat.value }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-green-400 mt-1", children: [
                      stat.growth,
                      " this month"
                    ] })
                  ]
                },
                stat.label
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "komo-surface rounded-2xl komo-card-shadow p-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[14px] font-semibold text-foreground mb-1", children: "Commission & Revenue Split" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-komo-text-muted mb-4", children: "Drag to adjust platform commission rate" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3 h-3 rounded-full bg-purple-500" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12px] text-komo-text-secondary", children: "Platform Commission" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[14px] font-bold komo-gradient-text", children: [
                      commissionRate,
                      "%"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3 h-3 rounded-full bg-blue-400" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12px] text-komo-text-secondary", children: "Teacher Share" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[14px] font-bold text-blue-400", children: [
                      100 - commissionRate,
                      "%"
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Slider,
                  {
                    "data-ocid": "admin.commission.slider",
                    value: [commissionRate],
                    onValueChange: (v) => setCommissionRate(v[0]),
                    min: 5,
                    max: 50,
                    step: 1,
                    className: "w-full"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between mt-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-komo-text-muted", children: "5% (min)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-komo-text-muted", children: "50% (max)" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-komo-text-muted mt-3", children: [
                  "On a ₹1,000 course: Platform earns",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-purple-400 font-semibold", children: [
                    "₹",
                    commissionRate * 10
                  ] }),
                  ", Teacher earns",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-blue-400 font-semibold", children: [
                    "₹",
                    (100 - commissionRate) * 10
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "komo-surface rounded-2xl komo-card-shadow p-4 flex items-center justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-[13px] font-semibold text-foreground", children: "Ads Integration" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-komo-text-muted mt-0.5", children: "Show ads to free users between content" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Switch,
                    {
                      "data-ocid": "admin.ads.toggle",
                      checked: adsEnabled,
                      onCheckedChange: (v) => {
                        setAdsEnabled(v);
                        ue.success(`Ads ${v ? "enabled" : "disabled"}`);
                      }
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "komo-surface rounded-2xl komo-card-shadow p-4 flex items-center justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-[13px] font-semibold text-foreground", children: "Academy Subscriptions" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-komo-text-muted mt-0.5", children: "₹199/mo · ₹999/yr — Netflix model" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Switch,
                    {
                      "data-ocid": "admin.subscription.toggle",
                      checked: subscriptionEnabled,
                      onCheckedChange: (v) => {
                        setSubscriptionEnabled(v);
                        ue.success(
                          `Subscriptions ${v ? "enabled" : "disabled"}`
                        );
                      }
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "komo-surface rounded-2xl komo-card-shadow p-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[14px] font-semibold text-foreground mb-3", children: "⭐ Subscription Management" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-3 mb-3", children: [
                  { label: "Total Subscribers", value: "4,280" },
                  { label: "Monthly Revenue", value: "₹4,23,720" },
                  { label: "Churn Rate", value: "2.4%" }
                ].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "bg-white/5 rounded-xl p-3 text-center",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[16px] font-bold komo-gradient-text", children: s.value }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-komo-text-muted mt-0.5", children: s.label })
                    ]
                  },
                  s.label
                )) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: [
                  {
                    plan: "KomoPro ₹999/yr",
                    count: 1240,
                    revenue: "₹12,37,560"
                  },
                  {
                    plan: "KomoPremium ₹99/mo",
                    count: 3040,
                    revenue: "₹3,00,960"
                  }
                ].map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex items-center justify-between bg-white/5 rounded-xl p-3",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12px] text-komo-text-secondary", children: p.plan }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[12px] text-komo-text-muted", children: [
                        p.count,
                        " users"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12px] font-semibold komo-gradient-text", children: p.revenue })
                    ]
                  },
                  p.plan
                )) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "komo-surface rounded-2xl komo-card-shadow p-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[14px] font-semibold text-foreground mb-3", children: "👥 Membership Management" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-3 mb-3", children: [
                  { label: "Total Members", value: "1,962" },
                  { label: "Monthly Revenue", value: "₹6,450" },
                  { label: "Active Creators", value: "48" }
                ].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "bg-white/5 rounded-xl p-3 text-center",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[16px] font-bold komo-gradient-text", children: s.value }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-komo-text-muted mt-0.5", children: s.label })
                    ]
                  },
                  s.label
                )) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: [
                  {
                    tier: "Super Fan ₹199/mo",
                    count: 142,
                    payout: "₹14,158"
                  },
                  { tier: "Supporter ₹99/mo", count: 580, payout: "₹34,220" },
                  { tier: "Fan ₹49/mo", count: 1240, payout: "₹36,260" }
                ].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex items-center justify-between bg-white/5 rounded-xl p-3",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12px] text-komo-text-secondary", children: t.tier }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[12px] text-komo-text-muted", children: [
                        t.count,
                        " members"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12px] font-semibold text-green-400", children: t.payout })
                    ]
                  },
                  t.tier
                )) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "komo-surface rounded-2xl komo-card-shadow p-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[14px] font-semibold text-foreground mb-3", children: "💬 Super Chat Logs" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3 mb-3", children: [
                  { label: "Today Earned", value: "₹2,450" },
                  { label: "This Month", value: "₹4,200" }
                ].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "bg-white/5 rounded-xl p-3 text-center",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[16px] font-bold komo-gradient-text", children: s.value }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-komo-text-muted mt-0.5", children: s.label })
                    ]
                  },
                  s.label
                )) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: [
                  {
                    user: "Ravi Kumar",
                    amount: 1e3,
                    msg: "Amazing stream! 🔥"
                  },
                  {
                    user: "Priya S",
                    amount: 500,
                    msg: "Love your content ❤️"
                  },
                  { user: "Deepak V", amount: 100, msg: "Keep it up!" }
                ].map((sc) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex items-center justify-between bg-white/5 rounded-xl p-3",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] font-semibold text-foreground", children: sc.user }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-komo-text-muted", children: sc.msg })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[14px] font-bold text-yellow-400", children: [
                        "₹",
                        sc.amount
                      ] })
                    ]
                  },
                  sc.user
                )) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "komo-surface rounded-2xl komo-card-shadow p-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[14px] font-semibold text-foreground mb-3", children: "🛍️ Merch Orders" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-3 mb-3", children: [
                  {
                    label: "Pending Orders",
                    value: "24",
                    color: "text-yellow-400"
                  },
                  {
                    label: "Fulfilled",
                    value: "186",
                    color: "text-green-400"
                  },
                  {
                    label: "Total Revenue",
                    value: "₹3,900",
                    color: "komo-gradient-text"
                  }
                ].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "bg-white/5 rounded-xl p-3 text-center",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-[16px] font-bold ${s.color}`, children: s.value }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-komo-text-muted mt-0.5", children: s.label })
                    ]
                  },
                  s.label
                )) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "komo-surface rounded-2xl komo-card-shadow overflow-hidden", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border-b border-komo-border flex items-center justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[14px] font-semibold text-foreground", children: "Pending Teacher Payouts" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] bg-orange-500/20 text-orange-400 px-2 py-0.5 rounded-full font-medium", children: [
                    payoutQueue.filter((p) => p.status === "pending").length,
                    " ",
                    "pending"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-komo-border", children: payoutQueue.map((payout, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    "data-ocid": `admin.payout.row.${i + 1}`,
                    className: "p-4 flex items-center gap-3",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-full komo-gradient flex items-center justify-center text-white text-[13px] font-bold flex-shrink-0", children: payout.teacher.charAt(0) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-semibold text-foreground truncate", children: payout.teacher }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-komo-text-muted truncate", children: payout.course })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right mr-3", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[14px] font-bold komo-gradient-text", children: [
                          "₹",
                          payout.amount.toLocaleString()
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-komo-text-muted", children: payout.date })
                      ] }),
                      payout.status === "pending" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Button,
                          {
                            "data-ocid": `admin.payout.confirm_button.${i + 1}`,
                            size: "sm",
                            className: "komo-gradient border-0 text-white text-[11px] h-7 px-3",
                            onClick: () => {
                              setPayoutQueue(
                                (prev) => prev.map(
                                  (p) => p.id === payout.id ? { ...p, status: "approved" } : p
                                )
                              );
                              ue.success(
                                `Payout of ₹${payout.amount.toLocaleString()} approved for ${payout.teacher}`
                              );
                            },
                            children: "Approve"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Button,
                          {
                            "data-ocid": `admin.payout.delete_button.${i + 1}`,
                            size: "sm",
                            variant: "outline",
                            className: "border-red-800/50 text-red-400 hover:bg-red-900/20 text-[11px] h-7 px-3",
                            onClick: () => {
                              setPayoutQueue(
                                (prev) => prev.map(
                                  (p) => p.id === payout.id ? { ...p, status: "rejected" } : p
                                )
                              );
                              ue.error(
                                `Payout rejected for ${payout.teacher}`
                              );
                            },
                            children: "Reject"
                          }
                        )
                      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: `text-[11px] px-2 py-0.5 rounded-full font-medium ${payout.status === "approved" ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"}`,
                          children: payout.status === "approved" ? "Approved" : "Rejected"
                        }
                      )
                    ]
                  },
                  payout.id
                )) })
              ] })
            ]
          }
        ),
        activeSection === "users" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            className: "space-y-4",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-[20px] font-bold text-foreground", children: "User Management" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sm:hidden komo-surface rounded-2xl komo-card-shadow divide-y divide-komo-border", children: users.map((user, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  "data-ocid": `admin.users.row.${i + 1}`,
                  className: "p-4 flex items-center gap-3",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center text-[12px] font-bold text-white",
                        style: { background: user.gradient },
                        children: user.initials
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-semibold text-foreground truncate", children: user.displayName }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-komo-text-muted", children: [
                        "@",
                        user.username
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-1 flex-wrap", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(RoleBadge, { role: user.role }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            className: `text-[10px] font-semibold px-2 py-0.5 rounded-full ${user.isActive ? "bg-green-500/15 text-green-400" : "bg-destructive/15 text-destructive"}`,
                            children: user.isActive ? "Active" : "Suspended"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] text-komo-text-muted", children: [
                          user.followers.toLocaleString(),
                          " followers"
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        "data-ocid": `admin.users.toggle.${i + 1}`,
                        variant: "ghost",
                        size: "sm",
                        className: "h-9 min-w-[80px] text-[11px] flex-shrink-0",
                        onClick: () => handleToggleUser(user.id),
                        children: user.isActive ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            ToggleRight,
                            {
                              size: 14,
                              className: "text-green-400 mr-1"
                            }
                          ),
                          " ",
                          "Suspend"
                        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            ToggleLeft,
                            {
                              size: 14,
                              className: "text-destructive mr-1"
                            }
                          ),
                          " ",
                          "Restore"
                        ] })
                      }
                    )
                  ]
                },
                user.id
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden sm:block komo-surface rounded-2xl komo-card-shadow overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { className: "border-komo-border hover:bg-transparent", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-komo-text-muted", children: "User" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-komo-text-muted", children: "Role" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-komo-text-muted", children: "Posts" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-komo-text-muted", children: "Followers" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-komo-text-muted", children: "Status" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-komo-text-muted", children: "Actions" })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: users.map((user, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  TableRow,
                  {
                    "data-ocid": `admin.users.row.${i + 1}`,
                    className: "border-komo-border hover:bg-accent/30",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: "w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-bold text-white",
                            style: { background: user.gradient },
                            children: user.initials
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-semibold text-foreground", children: user.displayName }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-komo-text-muted", children: [
                            "@",
                            user.username
                          ] })
                        ] })
                      ] }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(RoleBadge, { role: user.role }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-foreground text-[13px]", children: user.posts }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-foreground text-[13px]", children: user.followers.toLocaleString() }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: `text-[11px] font-semibold px-2 py-1 rounded-full ${user.isActive ? "bg-green-500/15 text-green-400" : "bg-destructive/15 text-destructive"}`,
                          children: user.isActive ? "Active" : "Suspended"
                        }
                      ) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Button,
                        {
                          "data-ocid": `admin.users.toggle.${i + 1}`,
                          variant: "ghost",
                          size: "sm",
                          className: "h-7 text-[11px]",
                          onClick: () => handleToggleUser(user.id),
                          children: user.isActive ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              ToggleRight,
                              {
                                size: 14,
                                className: "text-green-400 mr-1"
                              }
                            ),
                            " ",
                            "Suspend"
                          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              ToggleLeft,
                              {
                                size: 14,
                                className: "text-destructive mr-1"
                              }
                            ),
                            " ",
                            "Restore"
                          ] })
                        }
                      ) })
                    ]
                  },
                  user.id
                )) })
              ] }) })
            ]
          }
        ),
        activeSection === "moderation" && /* @__PURE__ */ jsxRuntimeExports.jsx(ModerationPanel, {}),
        activeSection === "marketplace" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            className: "space-y-4",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-[20px] font-bold text-foreground", children: "Marketplace Management" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    "data-ocid": "admin.marketplace.add.button",
                    className: "komo-gradient border-0 text-white text-[13px] h-9",
                    onClick: () => setAddProductOpen(true),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 15, className: "mr-1" }),
                      " Add Product"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sm:hidden komo-surface rounded-2xl komo-card-shadow divide-y divide-komo-border", children: products.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  "data-ocid": `admin.marketplace.row.${i + 1}`,
                  className: "p-4 flex items-center gap-3",
                  children: [
                    p.image ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "img",
                      {
                        src: p.image,
                        alt: p.title,
                        className: "w-12 h-12 rounded-xl object-cover flex-shrink-0"
                      }
                    ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { size: 18, className: "text-komo-text-muted" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-semibold text-foreground truncate", children: p.title }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-komo-text-muted", children: p.category }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[13px] font-bold komo-gradient-text mt-0.5", children: [
                        "$",
                        p.price.toFixed(2),
                        " · Stock: ",
                        p.stock
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1 flex-shrink-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Button,
                        {
                          "data-ocid": `admin.marketplace.edit.${i + 1}`,
                          variant: "ghost",
                          size: "sm",
                          className: "h-9 w-9 p-0 hover:bg-komo-blue/10 text-komo-blue",
                          onClick: () => ue.info("Edit product coming soon!"),
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(SquarePen, { size: 14 })
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Button,
                        {
                          "data-ocid": `admin.marketplace.delete.${i + 1}`,
                          variant: "ghost",
                          size: "sm",
                          className: "h-9 w-9 p-0 hover:bg-destructive/10 text-destructive",
                          onClick: () => {
                            setProducts(
                              (prev) => prev.filter((pr) => pr.id !== p.id)
                            );
                            ue.success("Product deleted");
                          },
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 14 })
                        }
                      )
                    ] })
                  ]
                },
                p.id
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden sm:block komo-surface rounded-2xl komo-card-shadow overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { className: "border-komo-border hover:bg-transparent", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-komo-text-muted", children: "Product" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-komo-text-muted", children: "Category" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-komo-text-muted", children: "Price" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-komo-text-muted", children: "Stock" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-komo-text-muted", children: "Actions" })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: products.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  TableRow,
                  {
                    "data-ocid": `admin.marketplace.row.${i + 1}`,
                    className: "border-komo-border hover:bg-accent/30",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                        p.image ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "img",
                          {
                            src: p.image,
                            alt: p.title,
                            className: "w-9 h-9 rounded-lg object-cover"
                          }
                        ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-lg bg-accent flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Package,
                          {
                            size: 16,
                            className: "text-komo-text-muted"
                          }
                        ) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-medium text-foreground max-w-[150px] truncate", children: p.title })
                      ] }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-komo-text-secondary text-[12px]", children: p.category }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { className: "font-semibold komo-gradient-text text-[13px]", children: [
                        "$",
                        p.price.toFixed(2)
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-foreground text-[13px]", children: p.stock }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Button,
                          {
                            "data-ocid": `admin.marketplace.edit.${i + 1}`,
                            variant: "ghost",
                            size: "sm",
                            className: "h-7 w-7 p-0 hover:bg-komo-blue/10 text-komo-blue",
                            onClick: () => ue.info("Edit product coming soon!"),
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(SquarePen, { size: 13 })
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Button,
                          {
                            "data-ocid": `admin.marketplace.delete.${i + 1}`,
                            variant: "ghost",
                            size: "sm",
                            className: "h-7 w-7 p-0 hover:bg-destructive/10 text-destructive",
                            onClick: () => {
                              setProducts(
                                (prev) => prev.filter((pr) => pr.id !== p.id)
                              );
                              ue.success("Product deleted");
                            },
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 13 })
                          }
                        )
                      ] }) })
                    ]
                  },
                  p.id
                )) })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: addProductOpen, onOpenChange: setAddProductOpen, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                DialogContent,
                {
                  "data-ocid": "admin.add_product.modal",
                  className: "komo-surface border-komo-border",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "text-foreground", children: "Add New Product" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Input,
                        {
                          "data-ocid": "admin.product.title.input",
                          placeholder: "Product title",
                          value: newProduct.title,
                          onChange: (e) => setNewProduct((p) => ({ ...p, title: e.target.value })),
                          className: "bg-accent border-komo-border"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Textarea,
                        {
                          "data-ocid": "admin.product.description.textarea",
                          placeholder: "Description",
                          value: newProduct.description,
                          onChange: (e) => setNewProduct((p) => ({
                            ...p,
                            description: e.target.value
                          })),
                          className: "bg-accent border-komo-border resize-none"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Input,
                          {
                            "data-ocid": "admin.product.price.input",
                            placeholder: "Price ($)",
                            value: newProduct.price,
                            onChange: (e) => setNewProduct((p) => ({
                              ...p,
                              price: e.target.value
                            })),
                            className: "bg-accent border-komo-border"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Input,
                          {
                            placeholder: "Category",
                            value: newProduct.category,
                            onChange: (e) => setNewProduct((p) => ({
                              ...p,
                              category: e.target.value
                            })),
                            className: "bg-accent border-komo-border"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Input,
                          {
                            placeholder: "Stock",
                            value: newProduct.stock,
                            onChange: (e) => setNewProduct((p) => ({
                              ...p,
                              stock: e.target.value
                            })),
                            className: "bg-accent border-komo-border"
                          }
                        )
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Button,
                        {
                          "data-ocid": "admin.add_product.cancel_button",
                          variant: "secondary",
                          className: "flex-1",
                          onClick: () => setAddProductOpen(false),
                          children: "Cancel"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Button,
                        {
                          "data-ocid": "admin.add_product.submit_button",
                          className: "flex-1 komo-gradient border-0 text-white",
                          onClick: handleAddProduct,
                          children: "Add Product"
                        }
                      )
                    ] })
                  ]
                }
              ) })
            ]
          }
        ),
        activeSection === "analytics" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            className: "space-y-5",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-[20px] font-bold text-foreground", children: "Analytics" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "komo-surface rounded-2xl komo-card-shadow p-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[13px] font-semibold text-foreground mb-3", children: "Top Creators" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: MOCK_USERS_ADMIN.filter((u) => u.isCreator).map((u, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      "data-ocid": `admin.analytics.creator.${i + 1}`,
                      className: "flex items-center gap-2",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] text-komo-text-muted w-4", children: [
                          i + 1,
                          "."
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: "w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold text-white",
                            style: { background: u.gradient },
                            children: u.initials
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] font-semibold text-foreground", children: u.displayName }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12px] font-medium komo-gradient-text", children: u.followers.toLocaleString() })
                      ]
                    },
                    u.id
                  )) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "komo-surface rounded-2xl komo-card-shadow p-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[13px] font-semibold text-foreground mb-3", children: "Revenue Breakdown" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: [
                    { label: "Ad Revenue", value: "$14,280", pct: 68 },
                    { label: "Subscriptions", value: "$3,420", pct: 16 },
                    { label: "Marketplace", value: "$2,847", pct: 14 },
                    { label: "Boosts", value: "$380", pct: 2 }
                  ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between mb-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12px] text-komo-text-secondary", children: item.label }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12px] font-semibold text-foreground", children: item.value })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 bg-accent rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.div,
                      {
                        className: "h-full rounded-full komo-gradient",
                        style: { width: `${item.pct}%` },
                        initial: { width: 0 },
                        animate: { width: `${item.pct}%` },
                        transition: { duration: 0.8, delay: 0.2 }
                      }
                    ) })
                  ] }, item.label)) })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "komo-surface rounded-2xl komo-card-shadow p-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[13px] font-semibold text-foreground mb-3", children: "Commission Tracking" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-accent rounded-xl", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-komo-text-muted", children: "This Month" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[18px] font-bold komo-gradient-text", children: "$2,847" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-accent rounded-xl", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-komo-text-muted", children: "Total Orders" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[18px] font-bold komo-gradient-text", children: "347" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-accent rounded-xl", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-komo-text-muted", children: "Avg. Order" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[18px] font-bold komo-gradient-text", children: "$82.05" })
                  ] })
                ] })
              ] })
            ]
          }
        ),
        activeSection === "ads" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            className: "space-y-5",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Megaphone, { size: 20, className: "text-blue-400" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-bold text-foreground", children: "Ads Management" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    "data-ocid": "ads.create_ad.open_modal_button",
                    onClick: () => setCreateAdOpen(true),
                    className: "komo-gradient text-white text-sm font-semibold px-4 py-2 rounded-xl flex items-center gap-2 shadow-md hover:opacity-90 transition-opacity",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 15 }),
                      " Create New Ad"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3 sm:grid-cols-4", children: [
                { label: "Total Ads", value: "12", color: "#2FA8FF" },
                { label: "Active Ads", value: "8", color: "#22c55e" },
                { label: "Impressions", value: "2.4M", color: "#A855F7" },
                { label: "Revenue", value: "₹48,500", color: "#f59e0b" }
              ].map((stat, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 12 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: i * 0.07 },
                  "data-ocid": `ads.stats.card.${i + 1}`,
                  className: "komo-surface rounded-2xl p-4 komo-card-shadow",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-komo-text-muted mb-1", children: stat.label }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "text-xl font-bold",
                        style: { color: stat.color },
                        children: stat.value
                      }
                    )
                  ]
                },
                stat.label
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "komo-surface rounded-2xl komo-card-shadow overflow-hidden", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-3 border-b border-komo-border/40", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold text-foreground", children: "Active Campaigns" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-komo-border/30", children: adsData.map((ad, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, x: -10 },
                    animate: { opacity: 1, x: 0 },
                    transition: { delay: i * 0.06 },
                    "data-ocid": `ads.item.${i + 1}`,
                    className: "flex items-center gap-3 px-4 py-3",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center text-white font-bold text-sm",
                          style: {
                            background: AD_THUMB_GRADIENTS[i % AD_THUMB_GRADIENTS.length]
                          },
                          children: ad.title[0]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground truncate", children: ad.title }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-komo-text-muted", children: ad.advertiser }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-1 flex-wrap", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] px-1.5 py-0.5 rounded-md font-medium bg-blue-500/15 text-blue-400", children: ad.type }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "span",
                            {
                              className: `text-[10px] px-1.5 py-0.5 rounded-md font-medium ${ad.status === "Active" ? "bg-green-500/15 text-green-400" : ad.status === "Paused" ? "bg-yellow-500/15 text-yellow-400" : "bg-red-500/15 text-red-400"}`,
                              children: ad.status
                            }
                          )
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden sm:flex flex-col items-end text-right gap-0.5", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-komo-text-muted", children: [
                          ad.impressions,
                          " imp."
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-komo-text-muted", children: [
                          "CTR ",
                          ad.ctr
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground", children: ad.budget })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 ml-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "button",
                          {
                            type: "button",
                            "data-ocid": `ads.pause_toggle.${i + 1}`,
                            onClick: () => setAdsData(
                              (prev) => prev.map(
                                (a) => a.id === ad.id ? {
                                  ...a,
                                  status: a.status === "Active" ? "Paused" : "Active"
                                } : a
                              )
                            ),
                            className: `p-1.5 rounded-lg text-xs font-medium transition-colors ${ad.status === "Active" ? "bg-yellow-500/15 text-yellow-400 hover:bg-yellow-500/25" : "bg-green-500/15 text-green-400 hover:bg-green-500/25"}`,
                            title: ad.status === "Active" ? "Pause" : "Resume",
                            children: ad.status === "Active" ? /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleLeft, { size: 14 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleRight, { size: 14 })
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "button",
                          {
                            type: "button",
                            "data-ocid": `ads.edit_button.${i + 1}`,
                            className: "p-1.5 rounded-lg bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 transition-colors",
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(SquarePen, { size: 13 })
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "button",
                          {
                            type: "button",
                            "data-ocid": `ads.delete_button.${i + 1}`,
                            onClick: () => {
                              setAdsData(
                                (prev) => prev.filter((a) => a.id !== ad.id)
                              );
                              ue.success("Ad removed");
                            },
                            className: "p-1.5 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-colors",
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 13 })
                          }
                        )
                      ] })
                    ]
                  },
                  ad.id
                )) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "komo-surface rounded-2xl p-4 komo-card-shadow space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold text-foreground", children: "Ad Placement Settings" }),
                [
                  { key: "feed", label: "Show ads in Feed", default: true },
                  { key: "reels", label: "Show ads in Reels", default: true },
                  {
                    key: "stories",
                    label: "Show ads in Stories",
                    default: false
                  }
                ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex items-center justify-between",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-komo-text-secondary", children: item.label }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Switch,
                        {
                          "data-ocid": `ads.placement.${item.key}.switch`,
                          defaultChecked: item.default
                        }
                      )
                    ]
                  },
                  item.key
                )),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-komo-text-secondary", children: "Ad frequency (every N posts)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold text-foreground", children: adFrequency })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Slider,
                    {
                      "data-ocid": "ads.frequency.slider",
                      min: 1,
                      max: 10,
                      step: 1,
                      value: [adFrequency],
                      onValueChange: ([v]) => setAdFrequency(v),
                      className: "w-full"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: createAdOpen, onOpenChange: setCreateAdOpen, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                DialogContent,
                {
                  "data-ocid": "ads.create.dialog",
                  className: "komo-surface border-komo-border max-w-md",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "text-foreground flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Megaphone, { size: 16, className: "text-blue-400" }),
                      " Launch New Ad"
                    ] }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 mt-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-komo-text-muted mb-1", children: "Ad Title" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Input,
                          {
                            "data-ocid": "ads.create.title.input",
                            placeholder: "e.g. Summer Sale 2026",
                            value: newAd.title,
                            onChange: (e) => setNewAd((p) => ({ ...p, title: e.target.value })),
                            className: "bg-komo-bg border-komo-border text-foreground"
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-komo-text-muted mb-1", children: "Advertiser Name" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Input,
                          {
                            "data-ocid": "ads.create.advertiser.input",
                            placeholder: "e.g. FashionBrand",
                            value: newAd.advertiser,
                            onChange: (e) => setNewAd((p) => ({
                              ...p,
                              advertiser: e.target.value
                            })),
                            className: "bg-komo-bg border-komo-border text-foreground"
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-komo-text-muted mb-1", children: "Ad Type" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "select",
                          {
                            "data-ocid": "ads.create.type.select",
                            value: newAd.type,
                            onChange: (e) => setNewAd((p) => ({ ...p, type: e.target.value })),
                            className: "w-full rounded-xl border border-komo-border bg-komo-bg text-foreground px-3 py-2 text-sm",
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Banner", children: "Banner" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Video", children: "Video" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Story", children: "Story" })
                            ]
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-komo-text-muted mb-1", children: "Budget (₹)" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Input,
                          {
                            "data-ocid": "ads.create.budget.input",
                            type: "number",
                            placeholder: "e.g. 10000",
                            value: newAd.budget,
                            onChange: (e) => setNewAd((p) => ({ ...p, budget: e.target.value })),
                            className: "bg-komo-bg border-komo-border text-foreground"
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-komo-text-muted mb-1", children: "Duration" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: "flex gap-2",
                            "data-ocid": "ads.create.duration.radio",
                            children: ["7 days", "15 days", "30 days"].map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "button",
                              {
                                type: "button",
                                onClick: () => setNewAd((p) => ({ ...p, duration: d })),
                                className: `flex-1 py-1.5 rounded-xl text-sm font-medium border transition-all ${newAd.duration === d ? "komo-gradient text-white border-transparent" : "border-komo-border text-komo-text-secondary"}`,
                                children: d
                              },
                              d
                            ))
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          type: "button",
                          "data-ocid": "ads.create.submit_button",
                          onClick: () => {
                            if (!newAd.title || !newAd.advertiser) {
                              ue.error("Please fill all fields");
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
                                budget: `₹${newAd.budget || "0"}`
                              }
                            ]);
                            ue.success("Ad launched successfully!");
                            setCreateAdOpen(false);
                            setNewAd({
                              title: "",
                              advertiser: "",
                              type: "Banner",
                              budget: "",
                              duration: "7 days"
                            });
                          },
                          className: "w-full komo-gradient text-white font-semibold py-2.5 rounded-xl hover:opacity-90 transition-opacity mt-1",
                          children: "🚀 Launch Ad"
                        }
                      )
                    ] })
                  ]
                }
              ) })
            ]
          }
        ),
        activeSection === "owner" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            className: "space-y-5",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Crown, { size: 20, className: "text-yellow-400" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-[20px] font-bold text-foreground", children: "Owner Management" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "komo-surface rounded-2xl komo-card-shadow overflow-hidden", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border-b border-komo-border", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[14px] font-semibold text-foreground", children: "Admin Management" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-komo-text-muted mt-0.5", children: "Promote users to admin or demote existing admins" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sm:hidden divide-y divide-komo-border", children: MOCK_USERS_ADMIN.map((user, i) => {
                  const currentRole = ownerRoles[user.id] ?? user.role;
                  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      "data-ocid": `owner.admin_mgmt.row.${i + 1}`,
                      className: "p-4 flex items-center gap-3",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: "w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center text-[12px] font-bold text-white",
                            style: { background: user.gradient },
                            children: user.initials
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-semibold text-foreground truncate", children: user.displayName }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-komo-text-muted", children: [
                            "@",
                            user.username
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(RoleBadge, { role: currentRole }) })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0", children: currentRole === "owner" ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-komo-text-muted italic", children: "Owner" }) : currentRole === "user" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          Button,
                          {
                            "data-ocid": `owner.promote.button.${i + 1}`,
                            size: "sm",
                            className: "h-9 text-[11px] komo-gradient border-0 text-white",
                            onClick: () => handlePromoteOrDemote(user.id, currentRole),
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { size: 12, className: "mr-1" }),
                              " Promote"
                            ]
                          }
                        ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          Button,
                          {
                            "data-ocid": `owner.demote.button.${i + 1}`,
                            size: "sm",
                            variant: "ghost",
                            className: "h-9 text-[11px] text-destructive hover:bg-destructive/10",
                            onClick: () => handlePromoteOrDemote(user.id, currentRole),
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 12, className: "mr-1" }),
                              " Demote"
                            ]
                          }
                        ) })
                      ]
                    },
                    user.id
                  );
                }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden sm:block", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { className: "border-komo-border hover:bg-transparent", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-komo-text-muted", children: "User" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-komo-text-muted", children: "Current Role" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-komo-text-muted", children: "Action" })
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: MOCK_USERS_ADMIN.map((user, i) => {
                    const currentRole = ownerRoles[user.id] ?? user.role;
                    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      TableRow,
                      {
                        "data-ocid": `owner.admin_mgmt.row.${i + 1}`,
                        className: "border-komo-border hover:bg-accent/30",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "div",
                              {
                                className: "w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-bold text-white",
                                style: { background: user.gradient },
                                children: user.initials
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-semibold text-foreground", children: user.displayName }),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-komo-text-muted", children: [
                                "@",
                                user.username
                              ] })
                            ] })
                          ] }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(RoleBadge, { role: currentRole }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: currentRole === "owner" ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-komo-text-muted italic", children: "Platform Owner" }) : currentRole === "user" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            Button,
                            {
                              "data-ocid": `owner.promote.button.${i + 1}`,
                              size: "sm",
                              className: "h-7 text-[11px] komo-gradient border-0 text-white",
                              onClick: () => handlePromoteOrDemote(user.id, currentRole),
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { size: 12, className: "mr-1" }),
                                " Promote to Admin"
                              ]
                            }
                          ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            Button,
                            {
                              "data-ocid": `owner.demote.button.${i + 1}`,
                              size: "sm",
                              variant: "ghost",
                              className: "h-7 text-[11px] text-destructive hover:bg-destructive/10",
                              onClick: () => handlePromoteOrDemote(user.id, currentRole),
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 12, className: "mr-1" }),
                                " Demote"
                              ]
                            }
                          ) })
                        ]
                      },
                      user.id
                    );
                  }) })
                ] }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "komo-surface rounded-2xl komo-card-shadow p-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[14px] font-semibold text-foreground mb-1", children: "Platform Settings" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-komo-text-muted mb-4", children: "Toggle platform-wide features on or off" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: [
                  {
                    key: "registrations",
                    label: "New Registrations",
                    desc: "Allow new users to sign up"
                  },
                  {
                    key: "marketplace",
                    label: "Marketplace",
                    desc: "Enable the product marketplace"
                  },
                  {
                    key: "reels",
                    label: "Reels",
                    desc: "Allow users to create and view reels"
                  },
                  {
                    key: "creatorApplications",
                    label: "Creator Applications",
                    desc: "Let users apply for creator status"
                  }
                ].map((setting, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    "data-ocid": `owner.settings.row.${i + 1}`,
                    className: "flex items-center justify-between p-3 rounded-xl bg-accent/40",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-medium text-foreground", children: setting.label }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-komo-text-muted", children: setting.desc })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Switch,
                        {
                          "data-ocid": `owner.settings.switch.${i + 1}`,
                          checked: platformSettings[setting.key],
                          onCheckedChange: (val) => {
                            setPlatformSettings((prev) => ({
                              ...prev,
                              [setting.key]: val
                            }));
                            ue.success(
                              `${setting.label} ${val ? "enabled" : "disabled"}`
                            );
                          }
                        }
                      )
                    ]
                  },
                  setting.key
                )) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "komo-surface rounded-2xl komo-card-shadow p-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { size: 16, className: "text-primary" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[14px] font-semibold text-foreground", children: "Revenue Settings" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-komo-text-muted mb-4", children: "Configure creator payouts and platform earnings" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-accent/40 p-3 rounded-xl", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-medium text-foreground", children: "Creator Revenue Share" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[13px] font-bold text-primary", children: [
                        revenueSettings.creatorShare,
                        "%"
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Slider,
                      {
                        "data-ocid": "owner.revenue.creator_share.input",
                        min: 0,
                        max: 100,
                        step: 1,
                        value: [revenueSettings.creatorShare],
                        onValueChange: ([val]) => setRevenueSettings((prev) => ({
                          ...prev,
                          creatorShare: val
                        })),
                        className: "w-full"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-accent/40 p-3 rounded-xl", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-medium text-foreground", children: "Platform Commission" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[13px] font-bold text-primary", children: [
                        revenueSettings.platformCommission,
                        "%"
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Slider,
                      {
                        "data-ocid": "owner.revenue.commission.input",
                        min: 0,
                        max: 50,
                        step: 1,
                        value: [revenueSettings.platformCommission],
                        onValueChange: ([val]) => setRevenueSettings((prev) => ({
                          ...prev,
                          platformCommission: val
                        })),
                        className: "w-full"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-accent/40 p-3 rounded-xl flex items-center justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-medium text-foreground", children: "Ad Revenue Distribution" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-komo-text-muted", children: "Share ad revenue with creators" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Switch,
                      {
                        "data-ocid": "owner.revenue.ad_revenue.switch",
                        checked: revenueSettings.adRevenue,
                        onCheckedChange: (val) => setRevenueSettings((prev) => ({
                          ...prev,
                          adRevenue: val
                        }))
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-accent/40 p-3 rounded-xl", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-medium text-foreground mb-2", children: "Minimum Payout Threshold (₹)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        "data-ocid": "owner.revenue.payout_threshold.input",
                        type: "number",
                        className: "w-full bg-background border border-border rounded-lg px-3 py-2 text-[13px] text-foreground",
                        value: revenueSettings.payoutThreshold,
                        onChange: (e) => setRevenueSettings((prev) => ({
                          ...prev,
                          payoutThreshold: Number(e.target.value)
                        }))
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-accent/40 p-3 rounded-xl", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-medium text-foreground mb-2", children: "Payout Schedule" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: ["weekly", "monthly"].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        "data-ocid": `owner.revenue.schedule_${s}.toggle`,
                        onClick: () => setRevenueSettings((prev) => ({
                          ...prev,
                          payoutSchedule: s
                        })),
                        className: `px-4 py-1.5 rounded-full text-[12px] font-medium transition-all ${revenueSettings.payoutSchedule === s ? "bg-gradient-to-r from-[hsl(var(--komo-blue))] to-[hsl(var(--komo-purple))] text-white" : "bg-accent/60 text-foreground"}`,
                        children: s.charAt(0).toUpperCase() + s.slice(1)
                      },
                      s
                    )) })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    "data-ocid": "owner.revenue.save.button",
                    onClick: () => ue.success("Revenue settings saved"),
                    className: "mt-4 w-full py-2 rounded-xl text-[13px] font-semibold text-white bg-gradient-to-r from-[hsl(var(--komo-blue))] to-[hsl(var(--komo-purple))]",
                    children: "Save Revenue Settings"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "komo-surface rounded-2xl komo-card-shadow p-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { size: 16, className: "text-primary" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[14px] font-semibold text-foreground", children: "Banned Words Filter" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-komo-text-muted mb-4", children: "Automatically filter harmful content in posts and comments" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-accent/40 p-3 rounded-xl flex items-center justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-medium text-foreground", children: "Enable Filter" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-komo-text-muted", children: "Activate banned words detection" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Switch,
                      {
                        "data-ocid": "owner.banned.enable.switch",
                        checked: bannedWordsEnabled,
                        onCheckedChange: setBannedWordsEnabled
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-accent/40 p-3 rounded-xl", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-medium text-foreground mb-2", children: "Auto Action" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: [
                      { value: "warn", label: "Warn User" },
                      { value: "hide", label: "Hide Post" },
                      { value: "remove", label: "Remove Post" }
                    ].map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        "data-ocid": `owner.banned.action_${opt.value}.toggle`,
                        onClick: () => setBannedAutoAction(opt.value),
                        className: `px-3 py-1.5 rounded-full text-[11px] font-medium transition-all ${bannedAutoAction === opt.value ? "bg-gradient-to-r from-[hsl(var(--komo-blue))] to-[hsl(var(--komo-purple))] text-white" : "bg-accent/60 text-foreground"}`,
                        children: opt.label
                      },
                      opt.value
                    )) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-accent/40 p-3 rounded-xl", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-medium text-foreground mb-2", children: "Banned Words" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 mb-3", children: bannedWords.map((word) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "span",
                      {
                        className: "flex items-center gap-1 bg-accent/40 rounded-full px-3 py-1 text-[11px] text-foreground",
                        children: [
                          word,
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "button",
                            {
                              type: "button",
                              "data-ocid": "owner.banned.word.delete_button",
                              onClick: () => setBannedWords(
                                (prev) => prev.filter((w) => w !== word)
                              ),
                              className: "text-komo-text-muted hover:text-destructive transition-colors",
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 10 })
                            }
                          )
                        ]
                      },
                      word
                    )) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "input",
                        {
                          "data-ocid": "owner.banned.add_word.input",
                          type: "text",
                          placeholder: "Add banned word...",
                          value: newBannedWord,
                          onChange: (e) => setNewBannedWord(e.target.value),
                          onKeyDown: (e) => {
                            if (e.key === "Enter" && newBannedWord.trim()) {
                              const w = newBannedWord.trim().toLowerCase();
                              if (!bannedWords.includes(w)) {
                                setBannedWords((prev) => [...prev, w]);
                                ue.success(`"${w}" added to banned words`);
                              }
                              setNewBannedWord("");
                            }
                          },
                          className: "flex-1 bg-background border border-border rounded-lg px-3 py-1.5 text-[13px] text-foreground"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          type: "button",
                          "data-ocid": "owner.banned.add_word.button",
                          onClick: () => {
                            const w = newBannedWord.trim().toLowerCase();
                            if (w && !bannedWords.includes(w)) {
                              setBannedWords((prev) => [...prev, w]);
                              ue.success(`"${w}" added to banned words`);
                            }
                            setNewBannedWord("");
                          },
                          className: "px-4 py-1.5 rounded-lg text-[13px] font-medium bg-gradient-to-r from-[hsl(var(--komo-blue))] to-[hsl(var(--komo-purple))] text-white",
                          children: "Add"
                        }
                      )
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    "data-ocid": "owner.banned.save.button",
                    onClick: () => ue.success("Banned words filter updated"),
                    className: "mt-4 w-full py-2 rounded-xl text-[13px] font-semibold text-white bg-gradient-to-r from-[hsl(var(--komo-blue))] to-[hsl(var(--komo-purple))]",
                    children: "Save Filter Settings"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border-2 border-destructive/40 p-5 bg-destructive/5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[14px] font-semibold text-destructive mb-1", children: "Danger Zone" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-komo-text-muted mb-4", children: "Irreversible actions — proceed with caution" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      "data-ocid": "owner.danger.reset_stats.button",
                      variant: "outline",
                      className: "border-destructive/40 text-destructive hover:bg-destructive/10 text-[13px]",
                      onClick: () => ue.success(
                        "Platform stats reset successfully. All counters cleared."
                      ),
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { size: 14, className: "mr-2" }),
                        " Reset Stats"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      "data-ocid": "owner.danger.export_data.button",
                      variant: "outline",
                      className: "border-destructive/40 text-destructive hover:bg-destructive/10 text-[13px]",
                      onClick: () => ue.success(
                        "Data export started. You'll receive a download link shortly."
                      ),
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { size: 14, className: "mr-2" }),
                        " Export Data"
                      ]
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "komo-surface rounded-2xl komo-card-shadow p-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Headphones, { size: 16, className: "text-purple-400" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[14px] font-semibold text-foreground", children: "Customer Support" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-komo-text-muted mb-4", children: "Manage and resolve user-reported issues" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 mb-4 flex-wrap", children: ["All", "Open", "In Progress", "Resolved"].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    "data-ocid": "support.filter.tab",
                    onClick: () => setTicketFilter(f),
                    className: `px-3 py-1 rounded-full text-[11px] font-semibold transition-all ${ticketFilter === f ? "text-white" : "text-komo-text-muted bg-white/5 hover:bg-white/10"}`,
                    style: ticketFilter === f ? {
                      background: "linear-gradient(135deg,#a855f7,#6366f1)"
                    } : {},
                    children: f
                  },
                  f
                )) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-3", children: [
                  {
                    id: "t1",
                    user: "Riya Sharma",
                    username: "riya_s",
                    initials: "RS",
                    gradient: "linear-gradient(135deg,#f97316,#ef4444)",
                    category: "Payment",
                    priority: "High",
                    issue: "My subscription payment was deducted twice but premium access is not activated."
                  },
                  {
                    id: "t2",
                    user: "Arjun Mehta",
                    username: "arjun_m",
                    initials: "AM",
                    gradient: "linear-gradient(135deg,#3b82f6,#6366f1)",
                    category: "Account",
                    priority: "High",
                    issue: "I cannot login to my account. OTP is not being received."
                  },
                  {
                    id: "t3",
                    user: "Priya Kapoor",
                    username: "priya_k",
                    initials: "PK",
                    gradient: "linear-gradient(135deg,#a855f7,#ec4899)",
                    category: "Content",
                    priority: "Medium",
                    issue: "My reel was removed without reason. Please review."
                  },
                  {
                    id: "t4",
                    user: "Vikram Singh",
                    username: "vik_singh",
                    initials: "VS",
                    gradient: "linear-gradient(135deg,#22c55e,#16a34a)",
                    category: "Bug",
                    priority: "Medium",
                    issue: "App crashes when trying to open the Marketplace on mobile."
                  },
                  {
                    id: "t5",
                    user: "Neha Gupta",
                    username: "neha_g",
                    initials: "NG",
                    gradient: "linear-gradient(135deg,#f59e0b,#d97706)",
                    category: "Account",
                    priority: "Low",
                    issue: "I want to change my username but the option is greyed out."
                  },
                  {
                    id: "t6",
                    user: "Karan Dev",
                    username: "karan_d",
                    initials: "KD",
                    gradient: "linear-gradient(135deg,#06b6d4,#3b82f6)",
                    category: "Content",
                    priority: "Low",
                    issue: "My story was not visible to followers for 2 hours."
                  }
                ].filter(
                  (t) => ticketFilter === "All" || ticketStatuses[t.id] === ticketFilter
                ).map((t, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    "data-ocid": `support.item.${idx + 1}`,
                    className: "p-3 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-2",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: "w-8 h-8 rounded-full flex items-center justify-center text-white text-[11px] font-bold flex-shrink-0",
                            style: { background: t.gradient },
                            children: t.initials
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap mb-1", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[13px] font-semibold text-foreground", children: t.user }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-komo-text-muted", children: [
                              "@",
                              t.username
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "span",
                              {
                                className: `px-1.5 py-0.5 rounded text-[9px] font-bold ${t.category === "Payment" ? "bg-orange-500/20 text-orange-400" : t.category === "Account" ? "bg-blue-500/20 text-blue-400" : t.category === "Content" ? "bg-purple-500/20 text-purple-400" : "bg-red-500/20 text-red-400"}`,
                                children: t.category
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "span",
                              {
                                className: `px-1.5 py-0.5 rounded text-[9px] font-bold ${t.priority === "High" ? "bg-red-500/20 text-red-400" : t.priority === "Medium" ? "bg-yellow-500/20 text-yellow-400" : "bg-green-500/20 text-green-400"}`,
                                children: t.priority
                              }
                            )
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-komo-text-muted line-clamp-2", children: t.issue })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-end gap-1 flex-shrink-0", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "span",
                            {
                              className: `px-2 py-0.5 rounded-full text-[10px] font-semibold ${ticketStatuses[t.id] === "Resolved" ? "bg-green-500/20 text-green-400" : ticketStatuses[t.id] === "In Progress" ? "bg-yellow-500/20 text-yellow-400" : "bg-blue-500/20 text-blue-400"}`,
                              children: ticketStatuses[t.id]
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-komo-text-muted", children: t.id === "t1" ? "2h ago" : t.id === "t2" ? "4h ago" : t.id === "t3" ? "1d ago" : t.id === "t4" ? "2d ago" : t.id === "t5" ? "3d ago" : "5d ago" })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                        ticketStatuses[t.id] !== "Resolved" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "button",
                          {
                            type: "button",
                            "data-ocid": "support.primary_button",
                            onClick: () => {
                              setTicketStatuses((prev) => ({
                                ...prev,
                                [t.id]: "Resolved"
                              }));
                              ue.success(
                                `Ticket #${t.id.toUpperCase()} resolved`
                              );
                            },
                            className: "flex-1 py-1.5 rounded-lg text-white text-[11px] font-semibold bg-green-600/80 hover:bg-green-600 transition-colors",
                            children: "Resolve"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "button",
                          {
                            type: "button",
                            "data-ocid": "support.secondary_button",
                            onClick: () => {
                              setReplyTicketId(t.id);
                              setReplyText("");
                            },
                            className: "flex-1 py-1.5 rounded-lg text-[11px] font-semibold border border-white/20 text-komo-text-muted hover:text-foreground hover:border-white/40 transition-colors",
                            children: "Reply"
                          }
                        )
                      ] }),
                      replyTicketId === t.id && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mt-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "input",
                          {
                            type: "text",
                            "data-ocid": "support.input",
                            value: replyText,
                            onChange: (e) => setReplyText(e.target.value),
                            placeholder: `Reply to @${t.username}...`,
                            className: "flex-1 px-3 py-1.5 rounded-lg bg-white/10 border border-white/20 text-[12px] text-foreground outline-none focus:border-purple-500/60"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "button",
                          {
                            type: "button",
                            "data-ocid": "support.submit_button",
                            onClick: () => {
                              if (!replyText.trim()) return;
                              ue.success(`Reply sent to @${t.username}`);
                              setReplyTicketId(null);
                              setReplyText("");
                            },
                            className: "px-3 py-1.5 rounded-lg text-white text-[11px] font-semibold",
                            style: {
                              background: "linear-gradient(135deg,#a855f7,#6366f1)"
                            },
                            children: "Send"
                          }
                        )
                      ] })
                    ]
                  },
                  t.id
                )) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "komo-surface rounded-2xl komo-card-shadow p-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Crown, { size: 16, className: "text-yellow-400" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[14px] font-semibold text-foreground", children: "Transfer Ownership" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-komo-text-muted mb-4", children: "Transfer platform ownership to another user. This action cannot be undone." }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      "data-ocid": "owner.transfer.input",
                      placeholder: "Enter username (e.g. alex_creates)",
                      value: transferUsername,
                      onChange: (e) => setTransferUsername(e.target.value),
                      className: "bg-accent border-komo-border flex-1"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    AlertDialog,
                    {
                      open: transferDialogOpen,
                      onOpenChange: setTransferDialogOpen,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          Button,
                          {
                            "data-ocid": "owner.transfer.open_modal_button",
                            className: "komo-gradient border-0 text-white text-[13px]",
                            onClick: () => {
                              if (!transferUsername.trim()) {
                                ue.error("Please enter a username first");
                                return;
                              }
                              setTransferDialogOpen(true);
                            },
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(Crown, { size: 14, className: "mr-1" }),
                              " Transfer"
                            ]
                          }
                        ) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          AlertDialogContent,
                          {
                            "data-ocid": "owner.transfer.dialog",
                            className: "komo-surface border-komo-border",
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogHeader, { children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogTitle, { className: "text-foreground flex items-center gap-2", children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(Crown, { size: 16, className: "text-yellow-400" }),
                                  "Confirm Ownership Transfer"
                                ] }),
                                /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogDescription, { className: "text-komo-text-secondary", children: [
                                  "Are you sure you want to transfer platform ownership to",
                                  " ",
                                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-foreground", children: [
                                    "@",
                                    transferUsername
                                  ] }),
                                  "? You will lose owner-level access permanently."
                                ] })
                              ] }),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogFooter, { children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  AlertDialogCancel,
                                  {
                                    "data-ocid": "owner.transfer.cancel_button",
                                    className: "border-komo-border",
                                    children: "Cancel"
                                  }
                                ),
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  AlertDialogAction,
                                  {
                                    "data-ocid": "owner.transfer.confirm_button",
                                    className: "komo-gradient border-0 text-white",
                                    onClick: handleTransferOwnership,
                                    children: "Yes, Transfer"
                                  }
                                )
                              ] })
                            ]
                          }
                        )
                      ]
                    }
                  )
                ] })
              ] })
            ]
          }
        )
      ] })
    ] })
  ] });
}
export {
  Admin as default
};
