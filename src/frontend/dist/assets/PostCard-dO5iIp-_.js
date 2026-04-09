import { c as createLucideIcon, u as useApp, r as reactExports, j as jsxRuntimeExports, m as motion, Z as Zap, A as AnimatePresence, a as MessageCircle, S as Share2, b as ue } from "./index-BlWpIyR8.js";
import { B as Badge } from "./badge-BChbocV7.js";
import { F as Flag, R as ReportModal } from "./PostDetailModal-BxesKSU_.js";
import { U as UserX } from "./user-x-5lCfd0B1.js";
import { S as Send } from "./send-DcEmvjNY.js";
import { B as Bookmark } from "./bookmark-CcTbmyQr.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]
];
const Ellipsis = createLucideIcon("ellipsis", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
const Link = createLucideIcon("link", __iconNode);
const REACTIONS = [
  { key: "like", emoji: "👍", label: "Like", color: "#2fa8ff" },
  { key: "love", emoji: "❤️", label: "Love", color: "#ef4444" },
  { key: "haha", emoji: "😂", label: "Haha", color: "#f59e0b" },
  { key: "wow", emoji: "😮", label: "Wow", color: "#f59e0b" },
  { key: "sad", emoji: "😢", label: "Sad", color: "#f59e0b" },
  { key: "angry", emoji: "😡", label: "Angry", color: "#f97316" }
];
function formatCount(n) {
  if (n >= 1e6) return `${(n / 1e6).toFixed(1)}M`;
  if (n >= 1e3) return `${(n / 1e3).toFixed(1)}K`;
  return String(n);
}
function PostCard({
  post,
  onCommentClick,
  index
}) {
  const { blockedUsers, blockUser } = useApp();
  const [reaction, setReaction] = reactExports.useState(
    post.liked ? "like" : null
  );
  const [likeCount, setLikeCount] = reactExports.useState(post.likes);
  const [bookmarked, setBookmarked] = reactExports.useState(post.bookmarked);
  const [reactionPickerOpen, setReactionPickerOpen] = reactExports.useState(false);
  const [shareOpen, setShareOpen] = reactExports.useState(false);
  const [menuOpen, setMenuOpen] = reactExports.useState(false);
  const [showAnyway, setShowAnyway] = reactExports.useState(false);
  const [reportOpen, setReportOpen] = reactExports.useState(false);
  const [burst, setBurst] = reactExports.useState(false);
  const longPressTimer = reactExports.useRef(null);
  const menuRef = reactExports.useRef(null);
  const isBlocked = blockedUsers.includes(post.username);
  const currentReaction = REACTIONS.find((r) => r.key === reaction);
  const handleSelectReaction = (key) => {
    if (reaction === key) {
      setReaction(null);
      setLikeCount((c) => c - 1);
    } else {
      if (!reaction) setLikeCount((c) => c + 1);
      setReaction(key);
      if (key === "love" || key === "like") {
        setBurst(true);
        setTimeout(() => setBurst(false), 600);
      }
    }
    setReactionPickerOpen(false);
  };
  const handleTapLike = () => {
    if (!reactionPickerOpen) {
      handleSelectReaction("like");
    }
  };
  const handleLongPressStart = () => {
    longPressTimer.current = setTimeout(() => {
      setReactionPickerOpen(true);
    }, 400);
  };
  const handleLongPressEnd = () => {
    if (longPressTimer.current) clearTimeout(longPressTimer.current);
  };
  const handleBlock = () => {
    blockUser(post.username);
    ue.success(`@${post.username} blocked`);
    setMenuOpen(false);
  };
  if (isBlocked && !showAnyway) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        "data-ocid": `feed.post.item.${index}`,
        className: "komo-surface rounded-2xl komo-card-shadow px-4 py-3 flex items-center justify-between",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-komo-text-muted", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(UserX, { size: 15 }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[13px]", children: [
              "Post from blocked user @",
              post.username
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              className: "text-[12px] text-komo-blue hover:underline",
              onClick: () => setShowAnyway(true),
              children: "Show anyway"
            }
          )
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.article,
      {
        "data-ocid": `feed.post.item.${index}`,
        className: "komo-surface rounded-2xl komo-card-shadow overflow-hidden relative",
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: index * 0.07 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                className: "w-10 h-10 rounded-full flex items-center justify-center text-[13px] font-bold text-white flex-shrink-0",
                style: { background: post.gradient },
                children: post.initials
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[14px] font-semibold text-foreground truncate", children: post.displayName }),
                post.isCreator && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "text-[9px] px-1.5 py-0 h-4 bg-komo-badge/20 text-komo-blue border-komo-blue/30 font-semibold", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { size: 9, className: "mr-0.5" }),
                  " CREATOR"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[12px] text-komo-text-muted", children: [
                  "@",
                  post.username
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-komo-text-muted text-[10px]", children: "·" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12px] text-komo-text-muted", children: post.timestamp })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 relative", ref: menuRef, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  className: "text-[11px] font-medium px-2.5 py-1 rounded-full border border-komo-blue/30 text-komo-blue hover:bg-komo-blue/10 transition-colors",
                  "data-ocid": `feed.post.boost_button.${index}`,
                  children: "Boost"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  "data-ocid": `feed.post.dropdown_menu.${index}`,
                  className: "text-komo-text-muted hover:text-foreground p-1 rounded-lg hover:bg-white/5",
                  onClick: () => setMenuOpen((v) => !v),
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Ellipsis, { size: 18 })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: menuOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "fixed inset-0 z-40",
                    onClick: () => setMenuOpen(false),
                    onKeyDown: () => setMenuOpen(false),
                    role: "button",
                    tabIndex: -1,
                    "aria-label": "Close menu"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    className: "absolute right-0 top-8 z-50 bg-[#1A2030] border border-white/10 rounded-xl shadow-2xl min-w-[170px] overflow-hidden",
                    initial: { opacity: 0, scale: 0.9, y: -5 },
                    animate: { opacity: 1, scale: 1, y: 0 },
                    exit: { opacity: 0, scale: 0.9, y: -5 },
                    transition: { duration: 0.15 },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "button",
                        {
                          type: "button",
                          "data-ocid": `feed.post.report.${index}`,
                          className: "flex items-center gap-2.5 w-full px-4 py-3 text-[13px] text-orange-400 hover:bg-white/5 transition-colors",
                          onClick: () => {
                            setMenuOpen(false);
                            setReportOpen(true);
                          },
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Flag, { size: 14 }),
                            " Report Post"
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px bg-white/5" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "button",
                        {
                          type: "button",
                          "data-ocid": `feed.post.block.${index}`,
                          className: "flex items-center gap-2.5 w-full px-4 py-3 text-[13px] text-red-400 hover:bg-white/5 transition-colors",
                          onClick: handleBlock,
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(UserX, { size: 14 }),
                            " Block @",
                            post.username
                          ]
                        }
                      )
                    ]
                  }
                )
              ] }) })
            ] })
          ] }),
          post.image && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: post.image,
              alt: "Post",
              className: "w-full object-cover max-h-80 hover:scale-[1.01] transition-transform duration-500"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 pt-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[14px] text-foreground leading-relaxed line-clamp-3", children: post.caption }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-4 py-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: reactionPickerOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "fixed inset-0 z-40",
                      onClick: () => setReactionPickerOpen(false),
                      onKeyDown: () => setReactionPickerOpen(false),
                      role: "button",
                      tabIndex: -1,
                      "aria-label": "Close reaction picker"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.div,
                    {
                      "data-ocid": `feed.post.popover.${index}`,
                      className: "absolute bottom-12 left-0 z-50 flex items-center gap-1 px-3 py-2 rounded-full",
                      style: {
                        background: "rgba(20,26,36,0.95)",
                        backdropFilter: "blur(20px)",
                        border: "1px solid rgba(255,255,255,0.12)",
                        boxShadow: "0 8px 32px rgba(0,0,0,0.5)"
                      },
                      initial: { opacity: 0, scale: 0.6, y: 10 },
                      animate: { opacity: 1, scale: 1, y: 0 },
                      exit: { opacity: 0, scale: 0.6, y: 10 },
                      transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 25
                      },
                      children: REACTIONS.map((r, ri) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        motion.button,
                        {
                          type: "button",
                          onClick: () => handleSelectReaction(r.key),
                          className: "flex flex-col items-center gap-0.5 group",
                          initial: { opacity: 0, y: 8 },
                          animate: { opacity: 1, y: 0 },
                          transition: { delay: ri * 0.04 },
                          whileHover: { scale: 1.35, y: -4 },
                          title: r.label,
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[22px] leading-none", children: r.emoji }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "span",
                              {
                                className: "text-[9px] font-medium opacity-0 group-hover:opacity-100 transition-opacity",
                                style: { color: r.color },
                                children: r.label
                              }
                            )
                          ]
                        },
                        r.key
                      ))
                    }
                  )
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.button,
                  {
                    "data-ocid": `feed.post.like.${index}`,
                    className: "flex items-center gap-1.5 px-3 py-2 rounded-xl hover:bg-accent transition-colors",
                    whileTap: { scale: 0.85 },
                    onClick: handleTapLike,
                    onMouseEnter: () => setReactionPickerOpen(true),
                    onMouseLeave: () => setTimeout(() => setReactionPickerOpen(false), 300),
                    onTouchStart: handleLongPressStart,
                    onTouchEnd: handleLongPressEnd,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[19px] leading-none", children: currentReaction ? currentReaction.emoji : "👍" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "text-[13px] font-medium",
                          style: {
                            color: currentReaction ? currentReaction.color : "#6b7280"
                          },
                          children: formatCount(likeCount)
                        }
                      )
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  "data-ocid": `feed.post.comment.${index}`,
                  onClick: () => onCommentClick == null ? void 0 : onCommentClick(post.id),
                  className: "flex items-center gap-1.5 px-3 py-2 rounded-xl hover:bg-accent transition-colors group",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      MessageCircle,
                      {
                        size: 19,
                        className: "text-komo-text-secondary group-hover:text-komo-blue"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[13px] font-medium text-komo-text-secondary", children: formatCount(post.comments) })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    "data-ocid": `feed.post.share.${index}`,
                    className: "flex items-center gap-1.5 px-3 py-2 rounded-xl hover:bg-accent transition-colors group",
                    onClick: () => setShareOpen((v) => !v),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Share2,
                        {
                          size: 19,
                          className: "text-komo-text-secondary group-hover:text-komo-purple"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[13px] font-medium text-komo-text-secondary", children: formatCount(post.shares) })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: shareOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "fixed inset-0 z-40",
                      onClick: () => setShareOpen(false),
                      onKeyDown: () => setShareOpen(false),
                      role: "button",
                      tabIndex: -1,
                      "aria-label": "Close share menu"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    motion.div,
                    {
                      "data-ocid": `feed.post.dropdown_menu.share.${index}`,
                      className: "absolute bottom-12 left-0 z-50 bg-[#1A2030] border border-white/10 rounded-2xl shadow-2xl min-w-[200px] overflow-hidden",
                      initial: { opacity: 0, scale: 0.9, y: 5 },
                      animate: { opacity: 1, scale: 1, y: 0 },
                      exit: { opacity: 0, scale: 0.9, y: 5 },
                      transition: { duration: 0.15 },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-2 border-b border-white/5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-komo-text-muted font-medium uppercase tracking-wider", children: "Share to" }) }),
                        [
                          {
                            icon: "📖",
                            label: "Share to Story",
                            action: () => ue.success("Shared to your story!")
                          },
                          {
                            icon: Link,
                            label: "Copy Link",
                            action: () => {
                              ue.success("Link copied!");
                            }
                          },
                          {
                            icon: Send,
                            label: "Send in Chat",
                            action: () => ue.success("Opening chat...")
                          }
                        ].map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "button",
                          {
                            type: "button",
                            className: "flex items-center gap-3 w-full px-4 py-3 text-[13px] text-foreground hover:bg-white/5 transition-colors",
                            onClick: () => {
                              opt.action();
                              setShareOpen(false);
                            },
                            children: [
                              typeof opt.icon === "string" ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[16px]", children: opt.icon }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                                opt.icon,
                                {
                                  size: 15,
                                  className: "text-komo-text-secondary"
                                }
                              ),
                              opt.label
                            ]
                          },
                          opt.label
                        ))
                      ]
                    }
                  )
                ] }) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.button,
              {
                "data-ocid": `feed.post.bookmark.${index}`,
                onClick: () => setBookmarked((b) => !b),
                whileTap: { scale: 0.85 },
                className: "p-2 rounded-xl hover:bg-accent transition-colors",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Bookmark,
                  {
                    size: 19,
                    className: bookmarked ? "fill-komo-blue text-komo-blue" : "text-komo-text-secondary",
                    strokeWidth: bookmarked ? 0 : 2
                  }
                )
              }
            )
          ] }),
          burst && /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              className: "absolute inset-0 flex items-center justify-center pointer-events-none",
              initial: { opacity: 1, scale: 0.5 },
              animate: { opacity: 0, scale: 2.5 },
              transition: { duration: 0.6 },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[80px]", children: (currentReaction == null ? void 0 : currentReaction.emoji) ?? "👍" })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ReportModal,
      {
        open: reportOpen,
        onClose: () => setReportOpen(false),
        targetId: post.id,
        targetUsername: post.username,
        type: "post"
      }
    )
  ] });
}
export {
  PostCard as P
};
