import { r as reactExports, j as jsxRuntimeExports, m as motion, b as ue, h as Play, H as Heart } from "./index-m-9XzHBK.js";
import { B as Badge } from "./badge-cznt1m0U.js";
import { B as Bookmark } from "./bookmark-B2DARt3i.js";
const CATEGORIES = [
  "All",
  "For You",
  "Tech",
  "Education",
  "Entertainment",
  "Sports",
  "News"
];
const VIDEOS = [
  {
    id: "v1",
    title: "How to Build a Full-Stack App in 2026 — Complete Tutorial",
    creator: "CodeWithRahul",
    views: "2.4M",
    duration: "42:18",
    likes: "84K",
    category: "Tech",
    gradient: "linear-gradient(135deg, #2fa8ff 0%, #1d4ed8 100%)",
    emoji: "💻",
    featured: true
  },
  {
    id: "v2",
    title: "Stock Market Basics for Beginners — India 2026",
    creator: "FinanceGuru",
    views: "1.1M",
    duration: "18:45",
    likes: "47K",
    category: "Education",
    gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    emoji: "📈",
    featured: false
  },
  {
    id: "v3",
    title: "Top 10 Places to Visit in Rajasthan This Summer",
    creator: "TravelWithPriya",
    views: "890K",
    duration: "12:30",
    likes: "32K",
    category: "Entertainment",
    gradient: "linear-gradient(135deg, #f59e0b 0%, #ea580c 100%)",
    emoji: "🏜️",
    featured: false
  },
  {
    id: "v4",
    title: "IPL 2026 Highlights — Best Sixes Compilation",
    creator: "CricketZone",
    views: "5.2M",
    duration: "8:20",
    likes: "210K",
    category: "Sports",
    gradient: "linear-gradient(135deg, #a855f7 0%, #ec4899 100%)",
    emoji: "🏏",
    featured: false
  },
  {
    id: "v5",
    title: "AI Tools That Will Change Your Business in 2026",
    creator: "TechTalksIndia",
    views: "3.8M",
    duration: "25:00",
    likes: "125K",
    category: "Tech",
    gradient: "linear-gradient(135deg, #6366f1 0%, #2fa8ff 100%)",
    emoji: "🤖",
    featured: false
  },
  {
    id: "v6",
    title: "Evening News India — Top Stories Today",
    creator: "KomoNews",
    views: "450K",
    duration: "22:10",
    likes: "18K",
    category: "News",
    gradient: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)",
    emoji: "📰",
    featured: false
  },
  {
    id: "v7",
    title: "30-Minute Morning Yoga Routine for Beginners",
    creator: "YogaWithAnanya",
    views: "1.7M",
    duration: "30:00",
    likes: "62K",
    category: "Education",
    gradient: "linear-gradient(135deg, #10b981 0%, #a855f7 100%)",
    emoji: "🧘",
    featured: false
  }
];
function Watch() {
  const [activeCategory, setActiveCategory] = reactExports.useState("All");
  const [likedVideos, setLikedVideos] = reactExports.useState(/* @__PURE__ */ new Set());
  const [savedVideos, setSavedVideos] = reactExports.useState(/* @__PURE__ */ new Set());
  const filtered = activeCategory === "All" || activeCategory === "For You" ? VIDEOS : VIDEOS.filter((v) => v.category === activeCategory);
  const featured = filtered[0];
  const rest = filtered.slice(1);
  const toggleLike = (id) => {
    setLikedVideos((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
        ue.success("Liked! ❤️");
      }
      return next;
    });
  };
  const toggleSave = (id) => {
    setSavedVideos((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
        ue("Removed from saved");
      } else {
        next.add(id);
        ue.success("Saved to Watch Later!");
      }
      return next;
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto px-4 py-4 pb-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: -12 },
        animate: { opacity: 1, y: 0 },
        className: "mb-4",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-[22px] font-bold komo-gradient-text", children: "Watch" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-komo-text-muted", children: "Videos just for you" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 overflow-x-auto scrollbar-hide pb-2 mb-5", children: CATEGORIES.map((cat, ci) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.button,
      {
        type: "button",
        "data-ocid": "watch.category.tab",
        initial: { opacity: 0, x: -10 },
        animate: { opacity: 1, x: 0 },
        transition: { delay: ci * 0.04 },
        onClick: () => setActiveCategory(cat),
        className: "flex-shrink-0 px-4 py-1.5 rounded-full text-[13px] font-medium transition-all",
        style: {
          background: activeCategory === cat ? "linear-gradient(135deg, #2fa8ff, #a855f7)" : "rgba(255,255,255,0.07)",
          color: activeCategory === cat ? "white" : "#9ca3af",
          border: activeCategory === cat ? "none" : "1px solid rgba(255,255,255,0.1)"
        },
        children: cat
      },
      cat
    )) }),
    featured && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        "data-ocid": "watch.featured.card",
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.1 },
        className: "rounded-2xl overflow-hidden komo-card-shadow mb-5 cursor-pointer",
        style: {
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)"
        },
        onClick: () => ue.success(`Playing: ${featured.title}`),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "relative h-52 flex items-center justify-center",
              style: { background: featured.gradient },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[64px]", children: featured.emoji }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/20" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    whileHover: { scale: 1.1 },
                    className: "w-16 h-16 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm border border-white/30",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { size: 28, className: "text-white ml-1", fill: "white" })
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-3 right-3 bg-black/60 text-white text-[11px] font-bold px-2 py-0.5 rounded-md", children: featured.duration }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Badge,
                  {
                    className: "absolute top-3 left-3 text-[10px] border-0 font-semibold",
                    style: {
                      background: "rgba(168,85,247,0.7)",
                      color: "white",
                      backdropFilter: "blur(8px)"
                    },
                    children: "⭐ Featured"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[15px] font-bold text-foreground leading-tight mb-2", children: featured.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-7 h-7 rounded-full flex items-center justify-center text-[12px] font-bold text-white",
                    style: { background: featured.gradient },
                    children: featured.creator[0]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12px] text-komo-text-secondary", children: featured.creator }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-komo-text-muted text-[10px]", children: "·" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[12px] text-komo-text-muted", children: [
                  featured.views,
                  " views"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    "data-ocid": "watch.featured.like",
                    className: "p-1.5 rounded-lg hover:bg-white/5 transition-colors",
                    onClick: (e) => {
                      e.stopPropagation();
                      toggleLike(featured.id);
                    },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Heart,
                      {
                        size: 16,
                        className: likedVideos.has(featured.id) ? "fill-red-500 text-red-500" : "text-komo-text-muted"
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    "data-ocid": "watch.featured.save_button",
                    className: "p-1.5 rounded-lg hover:bg-white/5 transition-colors",
                    onClick: (e) => {
                      e.stopPropagation();
                      toggleSave(featured.id);
                    },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Bookmark,
                      {
                        size: 16,
                        className: savedVideos.has(featured.id) ? "fill-komo-blue text-komo-blue" : "text-komo-text-muted"
                      }
                    )
                  }
                )
              ] })
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3", children: rest.map((video, vi) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        "data-ocid": `watch.item.${vi + 1}`,
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.15 + vi * 0.06 },
        className: "rounded-xl overflow-hidden komo-card-shadow cursor-pointer",
        style: {
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)"
        },
        onClick: () => ue.success(`Playing: ${video.title}`),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "relative h-28 flex items-center justify-center",
              style: { background: video.gradient },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[36px]", children: video.emoji }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/15" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full bg-white/25 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { size: 16, className: "text-white ml-0.5", fill: "white" }) }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute bottom-1.5 right-1.5 bg-black/60 text-white text-[10px] font-bold px-1.5 py-0.5 rounded", children: video.duration })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] font-semibold text-foreground leading-tight line-clamp-2 mb-1.5", children: video.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-komo-text-secondary", children: video.creator }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-komo-text-muted", children: [
                  video.views,
                  " views"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  "data-ocid": `watch.save_button.${vi + 1}`,
                  className: "p-1 rounded-lg hover:bg-white/5 transition-colors",
                  onClick: (e) => {
                    e.stopPropagation();
                    toggleSave(video.id);
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Bookmark,
                    {
                      size: 13,
                      className: savedVideos.has(video.id) ? "fill-komo-blue text-komo-blue" : "text-komo-text-muted"
                    }
                  )
                }
              )
            ] })
          ] })
        ]
      },
      video.id
    )) })
  ] });
}
export {
  Watch as default
};
