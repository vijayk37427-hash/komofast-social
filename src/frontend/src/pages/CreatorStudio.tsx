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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowLeft,
  BarChart2,
  CalendarDays,
  Clock,
  Eye,
  Film,
  Heart,
  Image,
  LayoutGrid,
  PlusCircle,
  Share2,
  Upload,
  Video,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { useApp } from "../context/AppContext";

const CONTENT_ITEMS = [
  {
    id: 1,
    title: "Morning Reel - Delhi Street Food",
    type: "Reel",
    views: "284K",
    likes: "18.4K",
    shares: "3.2K",
    color: "#2fa8ff",
    gradient: "linear-gradient(135deg, #1a3a5c, #2fa8ff40)",
    emoji: "🍜",
  },
  {
    id: 2,
    title: "Tech Review - Budget Smartphones 2025",
    type: "Video",
    views: "121K",
    likes: "9.7K",
    shares: "1.8K",
    color: "#a855f7",
    gradient: "linear-gradient(135deg, #2d1b4e, #a855f740)",
    emoji: "📱",
  },
  {
    id: 3,
    title: "Diwali Celebration Vibes ✨",
    type: "Photo",
    views: "98K",
    likes: "14.2K",
    shares: "2.1K",
    color: "#f59e0b",
    gradient: "linear-gradient(135deg, #3d2800, #f59e0b40)",
    emoji: "🪔",
  },
  {
    id: 4,
    title: "Fitness Morning Routine 💪",
    type: "Reel",
    views: "67K",
    likes: "5.9K",
    shares: "980",
    color: "#10b981",
    gradient: "linear-gradient(135deg, #0a2e20, #10b98140)",
    emoji: "💪",
  },
  {
    id: 5,
    title: "Monsoon Photography - Mumbai",
    type: "Photo",
    views: "52K",
    likes: "4.3K",
    shares: "720",
    color: "#6366f1",
    gradient: "linear-gradient(135deg, #1a1a3e, #6366f140)",
    emoji: "🌧️",
  },
  {
    id: 6,
    title: "Hindi Standup Comedy Clip",
    type: "Reel",
    views: "43K",
    likes: "6.1K",
    shares: "1.4K",
    color: "#ec4899",
    gradient: "linear-gradient(135deg, #3d0a25, #ec489940)",
    emoji: "😂",
  },
];

const SCHEDULE_ITEMS = [
  {
    id: 1,
    title: "Navratri Special Dance Reel",
    date: "26 Mar 2026, 7:00 PM",
    status: "Scheduled",
  },
  {
    id: 2,
    title: "Product Review Draft - Budget Earbuds",
    date: "28 Mar 2026",
    status: "Draft",
  },
  {
    id: 3,
    title: "Cooking Tutorial - Dal Makhni",
    date: "Processing...",
    status: "Processing",
  },
];

const STATUS_COLORS: Record<
  string,
  { bg: string; text: string; border: string }
> = {
  Scheduled: {
    bg: "rgba(47,168,255,0.15)",
    text: "#60c8ff",
    border: "rgba(47,168,255,0.3)",
  },
  Draft: {
    bg: "rgba(245,158,11,0.12)",
    text: "#fbbf24",
    border: "rgba(245,158,11,0.3)",
  },
  Processing: {
    bg: "rgba(168,85,247,0.12)",
    text: "#c084fc",
    border: "rgba(168,85,247,0.3)",
  },
};

const TYPE_COLORS: Record<string, { bg: string; text: string }> = {
  Reel: { bg: "rgba(47,168,255,0.15)", text: "#2fa8ff" },
  Video: { bg: "rgba(168,85,247,0.15)", text: "#a855f7" },
  Photo: { bg: "rgba(16,185,129,0.15)", text: "#10b981" },
};

const TOP5 = CONTENT_ITEMS.slice(0, 5);
const MAX_VIEWS = 284;

export default function CreatorStudio() {
  const { navigate } = useApp();
  const [scheduleEnabled, setScheduleEnabled] = useState(false);
  const [publishing, setPublishing] = useState(false);
  const [privacy, setPrivacy] = useState("Public");

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.07 } },
  };
  const item = {
    hidden: { opacity: 0, y: 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.32, ease: "easeOut" as const },
    },
  };

  function handlePublish() {
    setPublishing(true);
    setTimeout(() => {
      setPublishing(false);
      toast.success("Content published successfully! 🎬", {
        description: "Your content is now live and visible to your audience.",
        duration: 4000,
      });
    }, 1600);
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-4 pb-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex items-center gap-3 mb-5"
      >
        <button
          type="button"
          data-ocid="creator_studio.back.button"
          className="w-9 h-9 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 transition-colors text-komo-text-secondary"
          onClick={() => navigate("/creator")}
        >
          <ArrowLeft size={18} />
        </button>
        <div>
          <h1 className="text-[20px] font-bold komo-gradient-text leading-tight">
            Creator Studio 🎬
          </h1>
          <p className="text-[12px] text-komo-text-muted">
            Manage, upload & analyze your content
          </p>
        </div>
      </motion.div>

      <Tabs defaultValue="content" className="w-full">
        <TabsList
          className="w-full mb-5 rounded-xl h-10 grid grid-cols-4"
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <TabsTrigger
            data-ocid="creator_studio.content.tab"
            value="content"
            className="rounded-lg text-[11px] font-medium"
          >
            <LayoutGrid size={13} className="mr-1" /> Content
          </TabsTrigger>
          <TabsTrigger
            data-ocid="creator_studio.upload.tab"
            value="upload"
            className="rounded-lg text-[11px] font-medium"
          >
            <Upload size={13} className="mr-1" /> Upload
          </TabsTrigger>
          <TabsTrigger
            data-ocid="creator_studio.analytics.tab"
            value="analytics"
            className="rounded-lg text-[11px] font-medium"
          >
            <BarChart2 size={13} className="mr-1" /> Analytics
          </TabsTrigger>
          <TabsTrigger
            data-ocid="creator_studio.schedule.tab"
            value="schedule"
            className="rounded-lg text-[11px] font-medium"
          >
            <CalendarDays size={13} className="mr-1" /> Schedule
          </TabsTrigger>
        </TabsList>

        {/* MY CONTENT TAB */}
        <TabsContent value="content">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-3"
          >
            <motion.p
              variants={item}
              className="text-[13px] text-komo-text-muted"
            >
              {CONTENT_ITEMS.length} items · Reels, Videos & Photos
            </motion.p>
            {CONTENT_ITEMS.map((c, i) => (
              <motion.div
                key={c.id}
                variants={item}
                data-ocid={`creator_studio.content.item.${i + 1}`}
                className="rounded-2xl overflow-hidden flex gap-3 p-3 cursor-pointer hover:scale-[1.01] transition-transform"
                style={{
                  background: c.gradient,
                  border: `1px solid ${c.color}30`,
                }}
                onClick={() => toast.info(`Opening "${c.title}"`)}
              >
                {/* Thumbnail */}
                <div
                  className="w-20 h-14 rounded-xl flex items-center justify-center flex-shrink-0 text-3xl"
                  style={{ background: `${c.color}20` }}
                >
                  {c.emoji}
                </div>
                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-[13px] font-semibold text-foreground leading-snug line-clamp-2">
                      {c.title}
                    </p>
                    <Badge
                      className="text-[10px] px-2 py-0.5 border-0 flex-shrink-0"
                      style={{
                        background: TYPE_COLORS[c.type]?.bg,
                        color: TYPE_COLORS[c.type]?.text,
                      }}
                    >
                      {c.type === "Reel" ? (
                        <Film size={9} className="mr-1" />
                      ) : c.type === "Video" ? (
                        <Video size={9} className="mr-1" />
                      ) : (
                        <Image size={9} className="mr-1" />
                      )}
                      {c.type}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-3 mt-1.5">
                    <span className="flex items-center gap-1 text-[11px] text-komo-text-secondary">
                      <Eye size={11} style={{ color: c.color }} />
                      {c.views}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] text-komo-text-secondary">
                      <Heart size={11} style={{ color: "#ec4899" }} />
                      {c.likes}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] text-komo-text-secondary">
                      <Share2 size={11} style={{ color: "#10b981" }} />
                      {c.shares}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </TabsContent>

        {/* UPLOAD TAB */}
        <TabsContent value="upload">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-4"
          >
            {/* Drop zone */}
            <motion.div
              variants={item}
              data-ocid="creator_studio.upload.dropzone"
              className="rounded-2xl border-2 border-dashed flex flex-col items-center justify-center py-10 px-4 cursor-pointer hover:bg-white/5 transition-colors"
              style={{ borderColor: "rgba(47,168,255,0.35)" }}
              onClick={() => toast.info("File picker would open here")}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-3"
                style={{ background: "rgba(47,168,255,0.12)" }}
              >
                <Upload size={24} className="text-komo-blue" />
              </div>
              <p className="text-[15px] font-bold text-foreground mb-1">
                Drag & Drop your file here
              </p>
              <p className="text-[12px] text-komo-text-muted">
                Supports MP4, MOV, JPG, PNG · Max 500MB
              </p>
              <button
                type="button"
                data-ocid="creator_studio.upload_button"
                className="mt-4 px-5 py-2 rounded-full text-[13px] font-semibold text-white komo-gradient"
                onClick={(e) => {
                  e.stopPropagation();
                  toast.info("File picker would open here");
                }}
              >
                Browse Files
              </button>
            </motion.div>

            {/* Form fields */}
            <motion.div variants={item} className="space-y-3">
              <div>
                <Label className="text-[12px] text-komo-text-secondary mb-1.5 block">
                  Title *
                </Label>
                <Input
                  data-ocid="creator_studio.title.input"
                  placeholder="Give your content a catchy title..."
                  className="bg-white/5 border-white/10 text-foreground placeholder:text-komo-text-muted rounded-xl"
                />
              </div>
              <div>
                <Label className="text-[12px] text-komo-text-secondary mb-1.5 block">
                  Description
                </Label>
                <Textarea
                  data-ocid="creator_studio.description.textarea"
                  placeholder="Tell your audience what this is about..."
                  className="bg-white/5 border-white/10 text-foreground placeholder:text-komo-text-muted rounded-xl resize-none"
                  rows={3}
                />
              </div>
              <div>
                <Label className="text-[12px] text-komo-text-secondary mb-1.5 block">
                  Category
                </Label>
                <Select>
                  <SelectTrigger
                    data-ocid="creator_studio.category.select"
                    className="bg-white/5 border-white/10 text-foreground rounded-xl"
                  >
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {[
                      "Entertainment",
                      "Education",
                      "Music",
                      "Comedy",
                      "Tech",
                      "Fashion",
                      "Cooking",
                      "Travel",
                    ].map((c) => (
                      <SelectItem key={c} value={c}>
                        {c}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <button
                type="button"
                className="flex items-center gap-3 p-3 rounded-xl cursor-pointer hover:bg-white/5 transition-colors"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
                onClick={() => toast.info("Thumbnail upload would open here")}
                onKeyDown={(e) =>
                  e.key === "Enter" &&
                  toast.info("Thumbnail upload would open here")
                }
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ background: "rgba(168,85,247,0.15)" }}
                >
                  <Image size={18} className="text-komo-purple" />
                </div>
                <div>
                  <p className="text-[13px] font-medium text-foreground">
                    Upload Thumbnail
                  </p>
                  <p className="text-[11px] text-komo-text-muted">
                    JPG, PNG · Recommended 1080×1920
                  </p>
                </div>
                <span
                  data-ocid="creator_studio.thumbnail.upload_button"
                  className="ml-auto text-[12px] text-komo-blue font-semibold"
                >
                  Choose
                </span>
              </button>
              <div>
                <Label className="text-[12px] text-komo-text-secondary mb-1.5 block">
                  Privacy
                </Label>
                <div className="flex gap-2">
                  {["Public", "Friends", "Only Me"].map((p) => (
                    <button
                      key={p}
                      type="button"
                      data-ocid="creator_studio.privacy.toggle"
                      onClick={() => setPrivacy(p)}
                      className="flex-1 py-2 rounded-xl text-[12px] font-medium transition-all"
                      style={{
                        background:
                          privacy === p
                            ? "linear-gradient(135deg, #2fa8ff, #a855f7)"
                            : "rgba(255,255,255,0.05)",
                        color: privacy === p ? "#fff" : "rgba(255,255,255,0.5)",
                        border: `1px solid ${privacy === p ? "transparent" : "rgba(255,255,255,0.08)"}`,
                      }}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>
              <div
                className="flex items-center justify-between p-3 rounded-xl"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <div>
                  <p className="text-[13px] font-medium text-foreground">
                    Schedule Post
                  </p>
                  <p className="text-[11px] text-komo-text-muted">
                    Set a date & time to publish
                  </p>
                </div>
                <Switch
                  data-ocid="creator_studio.schedule.switch"
                  checked={scheduleEnabled}
                  onCheckedChange={setScheduleEnabled}
                />
              </div>
              {scheduleEnabled && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <Input
                    data-ocid="creator_studio.schedule_datetime.input"
                    type="datetime-local"
                    className="bg-white/5 border-white/10 text-foreground rounded-xl"
                  />
                </motion.div>
              )}
            </motion.div>

            <motion.div variants={item}>
              <Button
                data-ocid="creator_studio.publish.primary_button"
                className="w-full komo-gradient border-0 text-white font-bold text-[15px] rounded-2xl"
                style={{
                  height: "52px",
                  boxShadow: "0 4px 20px rgba(168,85,247,0.35)",
                }}
                disabled={publishing}
                onClick={handlePublish}
              >
                {publishing ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                    Publishing...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Upload size={17} /> Publish Content
                  </span>
                )}
              </Button>
            </motion.div>
          </motion.div>
        </TabsContent>

        {/* ANALYTICS TAB */}
        <TabsContent value="analytics">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-4"
          >
            {/* Total stats */}
            <motion.div variants={item} className="grid grid-cols-2 gap-3">
              {[
                {
                  label: "Total Views",
                  value: "665K",
                  color: "#2fa8ff",
                  icon: Eye,
                },
                {
                  label: "Total Likes",
                  value: "58.6K",
                  color: "#ec4899",
                  icon: Heart,
                },
                {
                  label: "Total Shares",
                  value: "10.2K",
                  color: "#10b981",
                  icon: Share2,
                },
                {
                  label: "Avg Watch Time",
                  value: "2m 34s",
                  color: "#a855f7",
                  icon: Clock,
                },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl p-4"
                  style={{
                    background: `linear-gradient(135deg, ${stat.color}12, ${stat.color}06)`,
                    border: `1px solid ${stat.color}25`,
                  }}
                >
                  <stat.icon
                    size={16}
                    style={{ color: stat.color }}
                    className="mb-2"
                  />
                  <p className="text-[22px] font-bold text-foreground leading-tight">
                    {stat.value}
                  </p>
                  <p className="text-[12px] text-komo-text-muted">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Top 5 content by views */}
            <motion.div
              variants={item}
              className="rounded-2xl p-5"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div className="flex items-center gap-2 mb-4">
                <BarChart2 size={17} className="text-komo-blue" />
                <h3 className="text-[14px] font-bold text-foreground">
                  Top 5 Content by Views
                </h3>
              </div>
              <div className="space-y-3">
                {TOP5.map((c, i) => {
                  const viewNum =
                    Number.parseInt(c.views.replace("K", "")) *
                    (c.views.includes("K") ? 1 : 1);
                  const pct = Math.round((viewNum / MAX_VIEWS) * 100);
                  return (
                    <div
                      key={c.id}
                      data-ocid={`creator_studio.analytics.item.${i + 1}`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[12px] text-foreground font-medium flex items-center gap-2">
                          <span
                            className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold"
                            style={{ background: c.color, color: "#fff" }}
                          >
                            {i + 1}
                          </span>
                          <span className="line-clamp-1">{c.title}</span>
                        </span>
                        <span
                          className="text-[12px] font-bold"
                          style={{ color: c.color }}
                        >
                          {c.views}
                        </span>
                      </div>
                      <div
                        className="h-2 rounded-full overflow-hidden"
                        style={{ background: "rgba(255,255,255,0.07)" }}
                      >
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${pct}%` }}
                          transition={{
                            duration: 0.9,
                            ease: "easeOut",
                            delay: 0.1 + i * 0.08,
                          }}
                          className="h-full rounded-full"
                          style={{
                            background: `linear-gradient(90deg, ${c.color}, ${c.color}90)`,
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        </TabsContent>

        {/* SCHEDULE TAB */}
        <TabsContent value="schedule">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-3"
          >
            <motion.div
              variants={item}
              className="flex items-center justify-between"
            >
              <p className="text-[13px] text-komo-text-muted">
                Scheduled & Draft posts
              </p>
              <Button
                data-ocid="creator_studio.new_draft.button"
                size="sm"
                className="komo-gradient border-0 text-white text-[12px] rounded-xl gap-1.5"
                onClick={() => toast.success("New draft created!")}
              >
                <PlusCircle size={13} /> New Draft
              </Button>
            </motion.div>

            {SCHEDULE_ITEMS.map((s, i) => (
              <motion.div
                key={s.id}
                variants={item}
                data-ocid={`creator_studio.schedule.item.${i + 1}`}
                className="rounded-2xl p-4 flex items-start gap-3"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: STATUS_COLORS[s.status]?.bg }}
                >
                  {s.status === "Scheduled" ? (
                    <CalendarDays
                      size={18}
                      style={{ color: STATUS_COLORS[s.status]?.text }}
                    />
                  ) : s.status === "Draft" ? (
                    <Film
                      size={18}
                      style={{ color: STATUS_COLORS[s.status]?.text }}
                    />
                  ) : (
                    <Clock
                      size={18}
                      style={{ color: STATUS_COLORS[s.status]?.text }}
                    />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[13px] font-semibold text-foreground line-clamp-1">
                    {s.title}
                  </p>
                  <p className="text-[11px] text-komo-text-muted mt-0.5">
                    {s.date}
                  </p>
                </div>
                <Badge
                  className="text-[10px] px-2.5 border-0 flex-shrink-0"
                  style={{
                    background: STATUS_COLORS[s.status]?.bg,
                    color: STATUS_COLORS[s.status]?.text,
                    border: `1px solid ${STATUS_COLORS[s.status]?.border}`,
                  }}
                >
                  {s.status}
                </Badge>
              </motion.div>
            ))}

            <motion.div
              variants={item}
              data-ocid="creator_studio.schedule.empty_state"
              className="rounded-2xl p-6 text-center"
              style={{
                background: "rgba(47,168,255,0.04)",
                border: "1px dashed rgba(47,168,255,0.25)",
              }}
            >
              <CalendarDays
                size={28}
                className="text-komo-text-muted mx-auto mb-2"
              />
              <p className="text-[13px] font-medium text-foreground">
                Plan more content
              </p>
              <p className="text-[11px] text-komo-text-muted mt-0.5">
                Schedule posts in advance to grow consistently
              </p>
            </motion.div>
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
