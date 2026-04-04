import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bell, Globe, Lock, Plus, Search, Users } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

const MY_GROUPS = [
  {
    id: "1",
    name: "Tech Enthusiasts",
    members: 12400,
    category: "Technology",
    gradient: "linear-gradient(135deg, #2fa8ff 0%, #1d4ed8 100%)",
    lastPost: "Rahul posted: 'Just got my hands on the new...' · 2h ago",
    unread: 7,
    isPublic: true,
    emoji: "💻",
  },
  {
    id: "2",
    name: "Photography Club",
    members: 8750,
    category: "Creative",
    gradient: "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)",
    lastPost: "Priya shared a photo: 'Golden hour at...' · 5h ago",
    unread: 3,
    isPublic: true,
    emoji: "📸",
  },
  {
    id: "3",
    name: "Business Network India",
    members: 21000,
    category: "Business",
    gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    lastPost: "New job opportunity posted by Amit · 1d ago",
    unread: 14,
    isPublic: false,
    emoji: "💼",
  },
  {
    id: "4",
    name: "Gaming Zone 🎮",
    members: 35800,
    category: "Gaming",
    gradient: "linear-gradient(135deg, #a855f7 0%, #ec4899 100%)",
    lastPost: "Tournament this Sunday! Register now · 12h ago",
    unread: 0,
    isPublic: true,
    emoji: "🎮",
  },
];

const DISCOVER_GROUPS = [
  {
    id: "d1",
    name: "Startup India Hub",
    members: 48200,
    category: "Business",
    gradient: "linear-gradient(135deg, #f59e0b 0%, #ea580c 100%)",
    emoji: "🚀",
    joined: false,
  },
  {
    id: "d2",
    name: "Bollywood Fans",
    members: 182000,
    category: "Entertainment",
    gradient: "linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)",
    emoji: "🎬",
    joined: false,
  },
  {
    id: "d3",
    name: "Fitness & Yoga",
    members: 29400,
    category: "Health",
    gradient: "linear-gradient(135deg, #10b981 0%, #2fa8ff 100%)",
    emoji: "🧘",
    joined: false,
  },
  {
    id: "d4",
    name: "Travel India",
    members: 67100,
    category: "Travel",
    gradient: "linear-gradient(135deg, #f97316 0%, #eab308 100%)",
    emoji: "✈️",
    joined: false,
  },
  {
    id: "d5",
    name: "Cooking & Recipes",
    members: 44300,
    category: "Food",
    gradient: "linear-gradient(135deg, #ef4444 0%, #f97316 100%)",
    emoji: "🍳",
    joined: false,
  },
  {
    id: "d6",
    name: "Finance & Investment",
    members: 93800,
    category: "Finance",
    gradient: "linear-gradient(135deg, #2fa8ff 0%, #10b981 100%)",
    emoji: "📈",
    joined: false,
  },
];

function formatMembers(n: number): string {
  if (n >= 1000) return `${(n / 1000).toFixed(1)}K`;
  return String(n);
}

export default function Groups() {
  const [joinedGroups, setJoinedGroups] = useState<Set<string>>(new Set());
  const [activeGroupId, setActiveGroupId] = useState<string | null>(null);

  const toggleJoin = (id: string, name: string) => {
    setJoinedGroups((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
        toast.success(`Left ${name}`);
      } else {
        next.add(id);
        toast.success(`Joined ${name}! 🎉`);
      }
      return next;
    });
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-4 pb-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between mb-4"
      >
        <div>
          <h1 className="text-[22px] font-bold komo-gradient-text">Groups</h1>
          <p className="text-[12px] text-komo-text-muted">
            Connect with communities
          </p>
        </div>
        <Button
          data-ocid="groups.create.primary_button"
          size="sm"
          className="komo-gradient border-0 text-white rounded-xl gap-1.5 font-semibold"
          onClick={() => toast.success("Group creation coming soon!")}
        >
          <Plus size={15} /> Create Group
        </Button>
      </motion.div>

      {/* Search */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
        className="relative mb-5"
      >
        <Search
          size={15}
          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-komo-text-muted"
        />
        <input
          data-ocid="groups.search_input"
          type="text"
          placeholder="Search groups..."
          className="w-full pl-9 pr-4 py-2.5 rounded-xl text-[14px] text-foreground placeholder:text-komo-text-muted bg-white/5 border border-white/10 focus:outline-none focus:border-komo-blue/50 transition-colors"
        />
      </motion.div>

      <Tabs defaultValue="your" className="w-full">
        <TabsList
          className="w-full mb-4 rounded-xl h-10"
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <TabsTrigger
            data-ocid="groups.your.tab"
            value="your"
            className="flex-1 rounded-lg text-[13px] font-medium"
          >
            <Users size={13} className="mr-1.5" /> Your Groups
          </TabsTrigger>
          <TabsTrigger
            data-ocid="groups.discover.tab"
            value="discover"
            className="flex-1 rounded-lg text-[13px] font-medium"
          >
            <Globe size={13} className="mr-1.5" /> Discover
          </TabsTrigger>
        </TabsList>

        <TabsContent value="your" className="space-y-3">
          {MY_GROUPS.map((group, i) => (
            <motion.div
              key={group.id}
              data-ocid={`groups.item.${i + 1}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07 }}
              className="rounded-2xl overflow-hidden komo-card-shadow cursor-pointer"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
              onClick={() =>
                setActiveGroupId(activeGroupId === group.id ? null : group.id)
              }
            >
              {/* Cover banner */}
              <div
                className="h-20 relative flex items-end p-3"
                style={{ background: group.gradient }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-2xl border-2 border-white/30">
                    {group.emoji}
                  </div>
                  <div>
                    <p className="text-white font-bold text-[15px] leading-tight drop-shadow">
                      {group.name}
                    </p>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <Badge className="text-[10px] px-1.5 py-0 h-4 border-0 bg-white/20 text-white">
                        {group.category}
                      </Badge>
                      {group.isPublic ? (
                        <Globe size={10} className="text-white/70" />
                      ) : (
                        <Lock size={10} className="text-white/70" />
                      )}
                    </div>
                  </div>
                </div>
                {group.unread > 0 && (
                  <div className="absolute top-3 right-3 bg-red-500 text-white text-[11px] font-bold rounded-full min-w-[20px] h-5 flex items-center justify-center px-1.5">
                    {group.unread}
                  </div>
                )}
              </div>

              <div className="p-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1.5 text-komo-text-muted">
                    <Users size={12} />
                    <span className="text-[12px]">
                      {formatMembers(group.members)} members
                    </span>
                  </div>
                  <button
                    type="button"
                    data-ocid={`groups.notification.toggle.${i + 1}`}
                    className="p-1.5 rounded-lg hover:bg-white/5 transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      toast.success("Notifications updated");
                    }}
                  >
                    <Bell size={14} className="text-komo-text-muted" />
                  </button>
                </div>
                <p className="text-[12px] text-komo-text-secondary truncate">
                  {group.lastPost}
                </p>
              </div>

              {/* Inline feed preview */}
              <AnimatePresence>
                {activeGroupId === group.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden border-t border-white/5"
                  >
                    <div className="p-3 space-y-2">
                      {[
                        "Welcome to the group! Share your thoughts 👋",
                        "Anyone attending the weekend meetup?",
                        "Check out this amazing article I found...",
                      ].map((text) => (
                        <div
                          key={text}
                          className="flex items-start gap-2.5 py-2 px-3 rounded-xl"
                          style={{ background: "rgba(255,255,255,0.03)" }}
                        >
                          <div
                            className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0"
                            style={{ background: group.gradient }}
                          >
                            {group.emoji}
                          </div>
                          <p className="text-[12px] text-komo-text-secondary leading-relaxed">
                            {text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </TabsContent>

        <TabsContent value="discover">
          <div className="grid grid-cols-2 gap-3">
            {DISCOVER_GROUPS.map((group, i) => {
              const isJoined = joinedGroups.has(group.id);
              return (
                <motion.div
                  key={group.id}
                  data-ocid={`groups.discover.item.${i + 1}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.06 }}
                  className="rounded-2xl overflow-hidden komo-card-shadow"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div
                    className="h-24 flex items-center justify-center text-5xl"
                    style={{ background: group.gradient }}
                  >
                    {group.emoji}
                  </div>
                  <div className="p-3">
                    <p className="text-[13px] font-bold text-foreground leading-tight mb-1">
                      {group.name}
                    </p>
                    <div className="flex items-center gap-1 mb-2.5">
                      <Badge
                        className="text-[10px] px-1.5 py-0 h-4 border-0"
                        style={{
                          background: "rgba(47,168,255,0.15)",
                          color: "#2fa8ff",
                          border: "1px solid rgba(47,168,255,0.25)",
                        }}
                      >
                        {group.category}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] text-komo-text-muted flex items-center gap-1">
                        <Users size={10} /> {formatMembers(group.members)}
                      </span>
                      <button
                        type="button"
                        data-ocid={`groups.join.button.${i + 1}`}
                        className="text-[11px] font-semibold px-3 py-1 rounded-lg transition-all"
                        style={{
                          background: isJoined
                            ? "rgba(255,255,255,0.08)"
                            : "linear-gradient(135deg, #2fa8ff, #a855f7)",
                          color: isJoined ? "#9ca3af" : "white",
                        }}
                        onClick={() => toggleJoin(group.id, group.name)}
                      >
                        {isJoined ? "Joined ✓" : "+ Join"}
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
