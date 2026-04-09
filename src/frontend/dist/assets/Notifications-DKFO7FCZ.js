import { c as createLucideIcon, u as useApp, r as reactExports, j as jsxRuntimeExports, d as Bell, B as Button, C as Check, e as Settings2, Z as Zap, a as MessageCircle, U as UserPlus, H as Heart, m as motion } from "./index-BlWpIyR8.js";
import { d as MOCK_NOTIFICATIONS } from "./mockData-BCdBG7qh.js";
import { T as Trash2 } from "./trash-2-BBHB0PWB.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8", key: "7n84p3" }]
];
const AtSign = createLucideIcon("at-sign", __iconNode);
const NOTIF_ICONS = {
  like: { icon: Heart, color: "text-komo-red", bg: "bg-komo-red/15" },
  follow: { icon: UserPlus, color: "text-komo-blue", bg: "bg-komo-blue/15" },
  comment: {
    icon: MessageCircle,
    color: "text-komo-purple",
    bg: "bg-komo-purple/15"
  },
  subscribe: { icon: Zap, color: "text-yellow-400", bg: "bg-yellow-400/15" },
  mention: { icon: AtSign, color: "text-green-400", bg: "bg-green-400/15" },
  system: { icon: Settings2, color: "text-blue-400", bg: "bg-blue-400/15" }
};
const SYSTEM_NOTIFICATIONS = [
  {
    id: "sys1",
    type: "system",
    actor: "KomoFast",
    actorInitials: "KF",
    gradient: "linear-gradient(135deg,#3b82f6,#8b5cf6)",
    message: "Your account has been verified ✅",
    time: "Today",
    read: false,
    postImage: null
  },
  {
    id: "sys2",
    type: "system",
    actor: "KomoFast",
    actorInitials: "KF",
    gradient: "linear-gradient(135deg,#3b82f6,#8b5cf6)",
    message: "New feature available: Group Video Calls! Try it now.",
    time: "Today",
    read: false,
    postImage: null
  },
  {
    id: "sys3",
    type: "system",
    actor: "KomoFast",
    actorInitials: "KF",
    gradient: "linear-gradient(135deg,#3b82f6,#8b5cf6)",
    message: "Promo code WELCOME50 is available — ₹500 cashback!",
    time: "Yesterday",
    read: true,
    postImage: null
  },
  {
    id: "sys4",
    type: "system",
    actor: "KomoFast",
    actorInitials: "KF",
    gradient: "linear-gradient(135deg,#3b82f6,#8b5cf6)",
    message: "Your Creator Studio is ready. Start earning today!",
    time: "This Week",
    read: true,
    postImage: null
  }
];
const TABS = [
  { key: "all", label: "All", icon: "🔔" },
  { key: "like", label: "Likes", icon: "❤️" },
  { key: "comment", label: "Comments", icon: "💬" },
  { key: "follow", label: "Follows", icon: "👥" },
  { key: "mention", label: "Mentions", icon: "@" },
  { key: "system", label: "System", icon: "⚙️" }
];
function groupByDate(notifs) {
  const groups = {
    Today: [],
    Yesterday: [],
    "This Week": []
  };
  for (const n of notifs) {
    const t = n.time;
    if ((t == null ? void 0 : t.includes("m")) || (t == null ? void 0 : t.includes("h")) || t === "Today")
      groups.Today.push(n);
    else if ((t == null ? void 0 : t.includes("1d")) || t === "Yesterday") groups.Yesterday.push(n);
    else groups["This Week"].push(n);
  }
  return groups;
}
function Notifications() {
  const { setUnreadNotifs } = useApp();
  const [notifications, setNotifications] = reactExports.useState([
    ...MOCK_NOTIFICATIONS,
    ...SYSTEM_NOTIFICATIONS
  ]);
  const [activeTab, setActiveTab] = reactExports.useState("all");
  const filtered = reactExports.useMemo(() => {
    if (activeTab === "all") return notifications;
    return notifications.filter((n) => n.type === activeTab);
  }, [notifications, activeTab]);
  const grouped = reactExports.useMemo(() => groupByDate(filtered), [filtered]);
  const markAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
    setUnreadNotifs(0);
  };
  const clearAll = () => {
    setNotifications([]);
    setUnreadNotifs(0);
  };
  const markRead = (id) => {
    setNotifications(
      (prev) => prev.map((n) => n.id === id ? { ...n, read: true } : n)
    );
    setUnreadNotifs((c) => Math.max(0, c - 1));
  };
  const unreadCount = notifications.filter((n) => !n.read).length;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto px-4 py-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { size: 22, className: "text-komo-blue" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-[20px] font-bold text-foreground", children: "Notifications" }),
        unreadCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-6 h-6 rounded-full bg-komo-blue text-white text-[11px] font-bold flex items-center justify-center", children: unreadCount })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        unreadCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            "data-ocid": "notifications.mark_all_read.button",
            variant: "ghost",
            size: "sm",
            className: "text-[13px] text-komo-blue hover:text-komo-blue hover:bg-komo-blue/10",
            onClick: markAllRead,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 14, className: "mr-1" }),
              " Mark all"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            "data-ocid": "notifications.clear_all.button",
            variant: "ghost",
            size: "sm",
            className: "text-[13px] text-komo-text-muted hover:text-red-400 hover:bg-red-400/10",
            onClick: clearAll,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 14 })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1.5 overflow-x-auto pb-2 mb-4 scrollbar-hide", children: TABS.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        "data-ocid": `notifications.${t.key}.tab`,
        onClick: () => setActiveTab(t.key),
        className: `flex-shrink-0 flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${activeTab === t.key ? "text-white" : "bg-white/5 text-white/50 border border-white/10"}`,
        style: activeTab === t.key ? { background: "linear-gradient(135deg,#a855f7,#ec4899)" } : {},
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.icon }),
          " ",
          t.label
        ]
      },
      t.key
    )) }),
    filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        "data-ocid": "notifications.empty_state",
        className: "text-center py-16",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { size: 48, className: "text-komo-text-muted mx-auto mb-3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground font-semibold", children: "No notifications yet" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-komo-text-muted text-[13px] mt-1", children: "You're all caught up!" })
        ]
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-4", "data-ocid": "notifications.list", children: Object.entries(grouped).map(([group, items]) => {
      if (items.length === 0) return null;
      let globalIdx = 0;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-komo-text-muted font-semibold uppercase tracking-wider mb-2 px-1", children: group }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-2", children: items.map((notif) => {
          globalIdx += 1;
          const config = NOTIF_ICONS[notif.type] || NOTIF_ICONS.system;
          const Icon = config.icon;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              "data-ocid": `notifications.item.${globalIdx}`,
              className: `flex items-center gap-3 p-4 rounded-2xl komo-card-shadow cursor-pointer transition-colors ${notif.read ? "komo-surface" : "bg-komo-blue/5 border border-komo-blue/20"}`,
              onClick: () => markRead(notif.id),
              initial: { opacity: 0, x: -10 },
              animate: { opacity: 1, x: 0 },
              transition: { delay: globalIdx * 0.04 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-shrink-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "w-11 h-11 rounded-full flex items-center justify-center text-[13px] font-bold text-white",
                      style: { background: notif.gradient },
                      children: notif.actorInitials
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: `absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center ${config.bg}`,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 11, className: config.color })
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[13px] text-foreground", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: notif.actor }),
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-komo-text-secondary", children: notif.message })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-komo-text-muted mt-0.5", children: notif.time })
                ] }),
                notif.postImage && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl overflow-hidden flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: notif.postImage,
                    alt: "post",
                    className: "w-full h-full object-cover"
                  }
                ) }),
                !notif.read && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 rounded-full bg-komo-blue flex-shrink-0" })
              ]
            },
            notif.id
          );
        }) })
      ] }, group);
    }) })
  ] });
}
export {
  Notifications as default
};
