import { c as createLucideIcon, u as useApp, r as reactExports, j as jsxRuntimeExports, m as motion, an as LayoutGrid, b as ue, F as Film, V as Video, ao as Image, ap as Eye, H as Heart, S as Share2, I as Input, T as Textarea, B as Button } from "./index-m-9XzHBK.js";
import { B as Badge } from "./badge-cznt1m0U.js";
import { L as Label } from "./label-DNPLIKWm.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-BnFOzO8n.js";
import { S as Switch } from "./switch-CFP8BJIt.js";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-DaPSxr7p.js";
import { A as ArrowLeft } from "./arrow-left-MlK4V-5g.js";
import { U as Upload, C as CirclePlus } from "./upload-BODdUrzU.js";
import { C as ChartNoAxesColumn } from "./chart-no-axes-column-53n4iwYO.js";
import { C as Clock } from "./clock-CU0p-3di.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  ["path", { d: "M8 14h.01", key: "6423bh" }],
  ["path", { d: "M12 14h.01", key: "1etili" }],
  ["path", { d: "M16 14h.01", key: "1gbofw" }],
  ["path", { d: "M8 18h.01", key: "lrp35t" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }],
  ["path", { d: "M16 18h.01", key: "kzsmim" }]
];
const CalendarDays = createLucideIcon("calendar-days", __iconNode);
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
    emoji: "🍜"
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
    emoji: "📱"
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
    emoji: "🪔"
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
    emoji: "💪"
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
    emoji: "🌧️"
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
    emoji: "😂"
  }
];
const SCHEDULE_ITEMS = [
  {
    id: 1,
    title: "Navratri Special Dance Reel",
    date: "26 Mar 2026, 7:00 PM",
    status: "Scheduled"
  },
  {
    id: 2,
    title: "Product Review Draft - Budget Earbuds",
    date: "28 Mar 2026",
    status: "Draft"
  },
  {
    id: 3,
    title: "Cooking Tutorial - Dal Makhni",
    date: "Processing...",
    status: "Processing"
  }
];
const STATUS_COLORS = {
  Scheduled: {
    bg: "rgba(47,168,255,0.15)",
    text: "#60c8ff",
    border: "rgba(47,168,255,0.3)"
  },
  Draft: {
    bg: "rgba(245,158,11,0.12)",
    text: "#fbbf24",
    border: "rgba(245,158,11,0.3)"
  },
  Processing: {
    bg: "rgba(168,85,247,0.12)",
    text: "#c084fc",
    border: "rgba(168,85,247,0.3)"
  }
};
const TYPE_COLORS = {
  Reel: { bg: "rgba(47,168,255,0.15)", text: "#2fa8ff" },
  Video: { bg: "rgba(168,85,247,0.15)", text: "#a855f7" },
  Photo: { bg: "rgba(16,185,129,0.15)", text: "#10b981" }
};
const TOP5 = CONTENT_ITEMS.slice(0, 5);
const MAX_VIEWS = 284;
function CreatorStudio() {
  const { navigate } = useApp();
  const [scheduleEnabled, setScheduleEnabled] = reactExports.useState(false);
  const [publishing, setPublishing] = reactExports.useState(false);
  const [privacy, setPrivacy] = reactExports.useState("Public");
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.07 } }
  };
  const item = {
    hidden: { opacity: 0, y: 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.32, ease: "easeOut" }
    }
  };
  function handlePublish() {
    setPublishing(true);
    setTimeout(() => {
      setPublishing(false);
      ue.success("Content published successfully! 🎬", {
        description: "Your content is now live and visible to your audience.",
        duration: 4e3
      });
    }, 1600);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto px-4 py-4 pb-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: -12 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.3 },
        className: "flex items-center gap-3 mb-5",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              "data-ocid": "creator_studio.back.button",
              className: "w-9 h-9 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 transition-colors text-komo-text-secondary",
              onClick: () => navigate("/creator"),
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 18 })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-[20px] font-bold komo-gradient-text leading-tight", children: "Creator Studio 🎬" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-komo-text-muted", children: "Manage, upload & analyze your content" })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "content", className: "w-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        TabsList,
        {
          className: "w-full mb-5 rounded-xl h-10 grid grid-cols-4",
          style: {
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.08)"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              TabsTrigger,
              {
                "data-ocid": "creator_studio.content.tab",
                value: "content",
                className: "rounded-lg text-[11px] font-medium",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(LayoutGrid, { size: 13, className: "mr-1" }),
                  " Content"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              TabsTrigger,
              {
                "data-ocid": "creator_studio.upload.tab",
                value: "upload",
                className: "rounded-lg text-[11px] font-medium",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { size: 13, className: "mr-1" }),
                  " Upload"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              TabsTrigger,
              {
                "data-ocid": "creator_studio.analytics.tab",
                value: "analytics",
                className: "rounded-lg text-[11px] font-medium",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ChartNoAxesColumn, { size: 13, className: "mr-1" }),
                  " Analytics"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              TabsTrigger,
              {
                "data-ocid": "creator_studio.schedule.tab",
                value: "schedule",
                className: "rounded-lg text-[11px] font-medium",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { size: 13, className: "mr-1" }),
                  " Schedule"
                ]
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "content", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          variants: container,
          initial: "hidden",
          animate: "show",
          className: "space-y-3",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.p,
              {
                variants: item,
                className: "text-[13px] text-komo-text-muted",
                children: [
                  CONTENT_ITEMS.length,
                  " items · Reels, Videos & Photos"
                ]
              }
            ),
            CONTENT_ITEMS.map((c, i) => {
              var _a, _b;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  variants: item,
                  "data-ocid": `creator_studio.content.item.${i + 1}`,
                  className: "rounded-2xl overflow-hidden flex gap-3 p-3 cursor-pointer hover:scale-[1.01] transition-transform",
                  style: {
                    background: c.gradient,
                    border: `1px solid ${c.color}30`
                  },
                  onClick: () => ue.info(`Opening "${c.title}"`),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "w-20 h-14 rounded-xl flex items-center justify-center flex-shrink-0 text-3xl",
                        style: { background: `${c.color}20` },
                        children: c.emoji
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-semibold text-foreground leading-snug line-clamp-2", children: c.title }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          Badge,
                          {
                            className: "text-[10px] px-2 py-0.5 border-0 flex-shrink-0",
                            style: {
                              background: (_a = TYPE_COLORS[c.type]) == null ? void 0 : _a.bg,
                              color: (_b = TYPE_COLORS[c.type]) == null ? void 0 : _b.text
                            },
                            children: [
                              c.type === "Reel" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Film, { size: 9, className: "mr-1" }) : c.type === "Video" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Video, { size: 9, className: "mr-1" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { size: 9, className: "mr-1" }),
                              c.type
                            ]
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mt-1.5", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-[11px] text-komo-text-secondary", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { size: 11, style: { color: c.color } }),
                          c.views
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-[11px] text-komo-text-secondary", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { size: 11, style: { color: "#ec4899" } }),
                          c.likes
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-[11px] text-komo-text-secondary", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { size: 11, style: { color: "#10b981" } }),
                          c.shares
                        ] })
                      ] })
                    ] })
                  ]
                },
                c.id
              );
            })
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "upload", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          variants: container,
          initial: "hidden",
          animate: "show",
          className: "space-y-4",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                variants: item,
                "data-ocid": "creator_studio.upload.dropzone",
                className: "rounded-2xl border-2 border-dashed flex flex-col items-center justify-center py-10 px-4 cursor-pointer hover:bg-white/5 transition-colors",
                style: { borderColor: "rgba(47,168,255,0.35)" },
                onClick: () => ue.info("File picker would open here"),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "w-14 h-14 rounded-2xl flex items-center justify-center mb-3",
                      style: { background: "rgba(47,168,255,0.12)" },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { size: 24, className: "text-komo-blue" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[15px] font-bold text-foreground mb-1", children: "Drag & Drop your file here" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-komo-text-muted", children: "Supports MP4, MOV, JPG, PNG · Max 500MB" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      "data-ocid": "creator_studio.upload_button",
                      className: "mt-4 px-5 py-2 rounded-full text-[13px] font-semibold text-white komo-gradient",
                      onClick: (e) => {
                        e.stopPropagation();
                        ue.info("File picker would open here");
                      },
                      children: "Browse Files"
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: item, className: "space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[12px] text-komo-text-secondary mb-1.5 block", children: "Title *" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    "data-ocid": "creator_studio.title.input",
                    placeholder: "Give your content a catchy title...",
                    className: "bg-white/5 border-white/10 text-foreground placeholder:text-komo-text-muted rounded-xl"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[12px] text-komo-text-secondary mb-1.5 block", children: "Description" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Textarea,
                  {
                    "data-ocid": "creator_studio.description.textarea",
                    placeholder: "Tell your audience what this is about...",
                    className: "bg-white/5 border-white/10 text-foreground placeholder:text-komo-text-muted rounded-xl resize-none",
                    rows: 3
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[12px] text-komo-text-secondary mb-1.5 block", children: "Category" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    SelectTrigger,
                    {
                      "data-ocid": "creator_studio.category.select",
                      className: "bg-white/5 border-white/10 text-foreground rounded-xl",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select a category" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: [
                    "Entertainment",
                    "Education",
                    "Music",
                    "Comedy",
                    "Tech",
                    "Fashion",
                    "Cooking",
                    "Travel"
                  ].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: c, children: c }, c)) })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  className: "flex items-center gap-3 p-3 rounded-xl cursor-pointer hover:bg-white/5 transition-colors",
                  style: {
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)"
                  },
                  onClick: () => ue.info("Thumbnail upload would open here"),
                  onKeyDown: (e) => e.key === "Enter" && ue.info("Thumbnail upload would open here"),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "w-10 h-10 rounded-lg flex items-center justify-center",
                        style: { background: "rgba(168,85,247,0.15)" },
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { size: 18, className: "text-komo-purple" })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-medium text-foreground", children: "Upload Thumbnail" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-komo-text-muted", children: "JPG, PNG · Recommended 1080×1920" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        "data-ocid": "creator_studio.thumbnail.upload_button",
                        className: "ml-auto text-[12px] text-komo-blue font-semibold",
                        children: "Choose"
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[12px] text-komo-text-secondary mb-1.5 block", children: "Privacy" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: ["Public", "Friends", "Only Me"].map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    "data-ocid": "creator_studio.privacy.toggle",
                    onClick: () => setPrivacy(p),
                    className: "flex-1 py-2 rounded-xl text-[12px] font-medium transition-all",
                    style: {
                      background: privacy === p ? "linear-gradient(135deg, #2fa8ff, #a855f7)" : "rgba(255,255,255,0.05)",
                      color: privacy === p ? "#fff" : "rgba(255,255,255,0.5)",
                      border: `1px solid ${privacy === p ? "transparent" : "rgba(255,255,255,0.08)"}`
                    },
                    children: p
                  },
                  p
                )) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex items-center justify-between p-3 rounded-xl",
                  style: {
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-medium text-foreground", children: "Schedule Post" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-komo-text-muted", children: "Set a date & time to publish" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Switch,
                      {
                        "data-ocid": "creator_studio.schedule.switch",
                        checked: scheduleEnabled,
                        onCheckedChange: setScheduleEnabled
                      }
                    )
                  ]
                }
              ),
              scheduleEnabled && /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { opacity: 0, height: 0 },
                  animate: { opacity: 1, height: "auto" },
                  exit: { opacity: 0, height: 0 },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      "data-ocid": "creator_studio.schedule_datetime.input",
                      type: "datetime-local",
                      className: "bg-white/5 border-white/10 text-foreground rounded-xl"
                    }
                  )
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: item, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                "data-ocid": "creator_studio.publish.primary_button",
                className: "w-full komo-gradient border-0 text-white font-bold text-[15px] rounded-2xl",
                style: {
                  height: "52px",
                  boxShadow: "0 4px 20px rgba(168,85,247,0.35)"
                },
                disabled: publishing,
                onClick: handlePublish,
                children: publishing ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" }),
                  "Publishing..."
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { size: 17 }),
                  " Publish Content"
                ] })
              }
            ) })
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "analytics", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          variants: container,
          initial: "hidden",
          animate: "show",
          className: "space-y-4",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: item, className: "grid grid-cols-2 gap-3", children: [
              {
                label: "Total Views",
                value: "665K",
                color: "#2fa8ff",
                icon: Eye
              },
              {
                label: "Total Likes",
                value: "58.6K",
                color: "#ec4899",
                icon: Heart
              },
              {
                label: "Total Shares",
                value: "10.2K",
                color: "#10b981",
                icon: Share2
              },
              {
                label: "Avg Watch Time",
                value: "2m 34s",
                color: "#a855f7",
                icon: Clock
              }
            ].map((stat) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "rounded-xl p-4",
                style: {
                  background: `linear-gradient(135deg, ${stat.color}12, ${stat.color}06)`,
                  border: `1px solid ${stat.color}25`
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    stat.icon,
                    {
                      size: 16,
                      style: { color: stat.color },
                      className: "mb-2"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[22px] font-bold text-foreground leading-tight", children: stat.value }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-komo-text-muted", children: stat.label })
                ]
              },
              stat.label
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                variants: item,
                className: "rounded-2xl p-5",
                style: {
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ChartNoAxesColumn, { size: 17, className: "text-komo-blue" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[14px] font-bold text-foreground", children: "Top 5 Content by Views" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: TOP5.map((c, i) => {
                    const viewNum = Number.parseInt(c.views.replace("K", "")) * (c.views.includes("K") ? 1 : 1);
                    const pct = Math.round(viewNum / MAX_VIEWS * 100);
                    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        "data-ocid": `creator_studio.analytics.item.${i + 1}`,
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-1", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[12px] text-foreground font-medium flex items-center gap-2", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "span",
                                {
                                  className: "w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold",
                                  style: { background: c.color, color: "#fff" },
                                  children: i + 1
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "line-clamp-1", children: c.title })
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "span",
                              {
                                className: "text-[12px] font-bold",
                                style: { color: c.color },
                                children: c.views
                              }
                            )
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "div",
                            {
                              className: "h-2 rounded-full overflow-hidden",
                              style: { background: "rgba(255,255,255,0.07)" },
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                                motion.div,
                                {
                                  initial: { width: 0 },
                                  animate: { width: `${pct}%` },
                                  transition: {
                                    duration: 0.9,
                                    ease: "easeOut",
                                    delay: 0.1 + i * 0.08
                                  },
                                  className: "h-full rounded-full",
                                  style: {
                                    background: `linear-gradient(90deg, ${c.color}, ${c.color}90)`
                                  }
                                }
                              )
                            }
                          )
                        ]
                      },
                      c.id
                    );
                  }) })
                ]
              }
            )
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "schedule", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          variants: container,
          initial: "hidden",
          animate: "show",
          className: "space-y-3",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                variants: item,
                className: "flex items-center justify-between",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-komo-text-muted", children: "Scheduled & Draft posts" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      "data-ocid": "creator_studio.new_draft.button",
                      size: "sm",
                      className: "komo-gradient border-0 text-white text-[12px] rounded-xl gap-1.5",
                      onClick: () => ue.success("New draft created!"),
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(CirclePlus, { size: 13 }),
                        " New Draft"
                      ]
                    }
                  )
                ]
              }
            ),
            SCHEDULE_ITEMS.map((s, i) => {
              var _a, _b, _c, _d, _e, _f, _g;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  variants: item,
                  "data-ocid": `creator_studio.schedule.item.${i + 1}`,
                  className: "rounded-2xl p-4 flex items-start gap-3",
                  style: {
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0",
                        style: { background: (_a = STATUS_COLORS[s.status]) == null ? void 0 : _a.bg },
                        children: s.status === "Scheduled" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                          CalendarDays,
                          {
                            size: 18,
                            style: { color: (_b = STATUS_COLORS[s.status]) == null ? void 0 : _b.text }
                          }
                        ) : s.status === "Draft" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Film,
                          {
                            size: 18,
                            style: { color: (_c = STATUS_COLORS[s.status]) == null ? void 0 : _c.text }
                          }
                        ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Clock,
                          {
                            size: 18,
                            style: { color: (_d = STATUS_COLORS[s.status]) == null ? void 0 : _d.text }
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-semibold text-foreground line-clamp-1", children: s.title }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-komo-text-muted mt-0.5", children: s.date })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Badge,
                      {
                        className: "text-[10px] px-2.5 border-0 flex-shrink-0",
                        style: {
                          background: (_e = STATUS_COLORS[s.status]) == null ? void 0 : _e.bg,
                          color: (_f = STATUS_COLORS[s.status]) == null ? void 0 : _f.text,
                          border: `1px solid ${(_g = STATUS_COLORS[s.status]) == null ? void 0 : _g.border}`
                        },
                        children: s.status
                      }
                    )
                  ]
                },
                s.id
              );
            }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                variants: item,
                "data-ocid": "creator_studio.schedule.empty_state",
                className: "rounded-2xl p-6 text-center",
                style: {
                  background: "rgba(47,168,255,0.04)",
                  border: "1px dashed rgba(47,168,255,0.25)"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    CalendarDays,
                    {
                      size: 28,
                      className: "text-komo-text-muted mx-auto mb-2"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-medium text-foreground", children: "Plan more content" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-komo-text-muted mt-0.5", children: "Schedule posts in advance to grow consistently" })
                ]
              }
            )
          ]
        }
      ) })
    ] })
  ] });
}
export {
  CreatorStudio as default
};
