import { Button } from "@/components/ui/button";
import {
  AtSign,
  Bell,
  Check,
  Heart,
  MessageCircle,
  Settings2,
  Trash2,
  UserPlus,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { useMemo, useState } from "react";
import { useApp } from "../context/AppContext";
import { MOCK_NOTIFICATIONS } from "../data/mockData";

const NOTIF_ICONS = {
  like: { icon: Heart, color: "text-komo-red", bg: "bg-komo-red/15" },
  follow: { icon: UserPlus, color: "text-komo-blue", bg: "bg-komo-blue/15" },
  comment: {
    icon: MessageCircle,
    color: "text-komo-purple",
    bg: "bg-komo-purple/15",
  },
  subscribe: { icon: Zap, color: "text-yellow-400", bg: "bg-yellow-400/15" },
  mention: { icon: AtSign, color: "text-green-400", bg: "bg-green-400/15" },
  system: { icon: Settings2, color: "text-blue-400", bg: "bg-blue-400/15" },
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
    postImage: null,
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
    postImage: null,
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
    postImage: null,
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
    postImage: null,
  },
];

const TABS = [
  { key: "all", label: "All", icon: "🔔" },
  { key: "like", label: "Likes", icon: "❤️" },
  { key: "comment", label: "Comments", icon: "💬" },
  { key: "follow", label: "Follows", icon: "👥" },
  { key: "mention", label: "Mentions", icon: "@" },
  { key: "system", label: "System", icon: "⚙️" },
] as const;

type TabKey = (typeof TABS)[number]["key"];

function groupByDate(notifs: typeof MOCK_NOTIFICATIONS) {
  const groups: Record<string, typeof MOCK_NOTIFICATIONS> = {
    Today: [],
    Yesterday: [],
    "This Week": [],
  };
  for (const n of notifs) {
    const t = (n as any).time as string;
    if (t?.includes("m") || t?.includes("h") || t === "Today")
      groups.Today.push(n);
    else if (t?.includes("1d") || t === "Yesterday") groups.Yesterday.push(n);
    else groups["This Week"].push(n);
  }
  return groups;
}

export default function Notifications() {
  const { setUnreadNotifs } = useApp();
  const [notifications, setNotifications] = useState([
    ...MOCK_NOTIFICATIONS,
    ...SYSTEM_NOTIFICATIONS,
  ]);
  const [activeTab, setActiveTab] = useState<TabKey>("all");

  const filtered = useMemo(() => {
    if (activeTab === "all") return notifications;
    return notifications.filter((n) => n.type === activeTab);
  }, [notifications, activeTab]);

  const grouped = useMemo(() => groupByDate(filtered), [filtered]);

  const markAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
    setUnreadNotifs(0);
  };

  const clearAll = () => {
    setNotifications([]);
    setUnreadNotifs(0);
  };

  const markRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n)),
    );
    setUnreadNotifs((c) => Math.max(0, c - 1));
  };

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div className="max-w-2xl mx-auto px-4 py-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <Bell size={22} className="text-komo-blue" />
          <h1 className="text-[20px] font-bold text-foreground">
            Notifications
          </h1>
          {unreadCount > 0 && (
            <span className="w-6 h-6 rounded-full bg-komo-blue text-white text-[11px] font-bold flex items-center justify-center">
              {unreadCount}
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          {unreadCount > 0 && (
            <Button
              data-ocid="notifications.mark_all_read.button"
              variant="ghost"
              size="sm"
              className="text-[13px] text-komo-blue hover:text-komo-blue hover:bg-komo-blue/10"
              onClick={markAllRead}
            >
              <Check size={14} className="mr-1" /> Mark all
            </Button>
          )}
          <Button
            data-ocid="notifications.clear_all.button"
            variant="ghost"
            size="sm"
            className="text-[13px] text-komo-text-muted hover:text-red-400 hover:bg-red-400/10"
            onClick={clearAll}
          >
            <Trash2 size={14} />
          </Button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1.5 overflow-x-auto pb-2 mb-4 scrollbar-hide">
        {TABS.map((t) => (
          <button
            type="button"
            key={t.key}
            data-ocid={`notifications.${t.key}.tab`}
            onClick={() => setActiveTab(t.key)}
            className={`flex-shrink-0 flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
              activeTab === t.key
                ? "text-white"
                : "bg-white/5 text-white/50 border border-white/10"
            }`}
            style={
              activeTab === t.key
                ? { background: "linear-gradient(135deg,#a855f7,#ec4899)" }
                : {}
            }
          >
            <span>{t.icon}</span> {t.label}
          </button>
        ))}
      </div>

      {/* Grouped Notification list */}
      {filtered.length === 0 ? (
        <div
          data-ocid="notifications.empty_state"
          className="text-center py-16"
        >
          <Bell size={48} className="text-komo-text-muted mx-auto mb-3" />
          <p className="text-foreground font-semibold">No notifications yet</p>
          <p className="text-komo-text-muted text-[13px] mt-1">
            You're all caught up!
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-4" data-ocid="notifications.list">
          {Object.entries(grouped).map(([group, items]) => {
            if (items.length === 0) return null;
            let globalIdx = 0;
            return (
              <div key={group}>
                <p className="text-[11px] text-komo-text-muted font-semibold uppercase tracking-wider mb-2 px-1">
                  {group}
                </p>
                <div className="flex flex-col gap-2">
                  {items.map((notif) => {
                    globalIdx += 1;
                    const config =
                      NOTIF_ICONS[notif.type as keyof typeof NOTIF_ICONS] ||
                      NOTIF_ICONS.system;
                    const Icon = config.icon;
                    return (
                      <motion.div
                        key={notif.id}
                        data-ocid={`notifications.item.${globalIdx}`}
                        className={`flex items-center gap-3 p-4 rounded-2xl komo-card-shadow cursor-pointer transition-colors ${
                          notif.read
                            ? "komo-surface"
                            : "bg-komo-blue/5 border border-komo-blue/20"
                        }`}
                        onClick={() => markRead(notif.id)}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: globalIdx * 0.04 }}
                      >
                        <div className="relative flex-shrink-0">
                          <div
                            className="w-11 h-11 rounded-full flex items-center justify-center text-[13px] font-bold text-white"
                            style={{ background: notif.gradient }}
                          >
                            {notif.actorInitials}
                          </div>
                          <div
                            className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center ${config.bg}`}
                          >
                            <Icon size={11} className={config.color} />
                          </div>
                        </div>

                        <div className="flex-1 min-w-0">
                          <p className="text-[13px] text-foreground">
                            <span className="font-semibold">{notif.actor}</span>{" "}
                            <span className="text-komo-text-secondary">
                              {notif.message}
                            </span>
                          </p>
                          <p className="text-[11px] text-komo-text-muted mt-0.5">
                            {notif.time}
                          </p>
                        </div>

                        {notif.postImage && (
                          <div className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0">
                            <img
                              src={notif.postImage}
                              alt="post"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}

                        {!notif.read && (
                          <div className="w-2 h-2 rounded-full bg-komo-blue flex-shrink-0" />
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
