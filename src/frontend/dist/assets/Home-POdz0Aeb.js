import { j as jsxRuntimeExports, u as useApp, r as reactExports, m as motion, P as Plus, A as AnimatePresence, X, Z as Zap, B as Button, C as Check, U as UserPlus } from "./index-BlWpIyR8.js";
import { E as ExternalLink } from "./external-link-DFH2B-hl.js";
import { S as ShoppingBag } from "./shopping-bag-ZIzuKwi3.js";
import { P as PostCard } from "./PostCard-dO5iIp-_.js";
import { R as ReelCard } from "./ReelCard-CKlcCgwI.js";
import { M as MOCK_STORIES, a as MOCK_POSTS, b as MOCK_REELS, c as MOCK_SUGGESTIONS, T as TRENDING_HASHTAGS } from "./mockData-BCdBG7qh.js";
import { P as PostDetailModal } from "./PostDetailModal-BxesKSU_.js";
import "./badge-BChbocV7.js";
import "./user-x-5lCfd0B1.js";
import "./send-DcEmvjNY.js";
import "./bookmark-CcTbmyQr.js";
function AdBanner() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      "data-ocid": "feed.ad.card",
      className: "rounded-2xl overflow-hidden relative komo-card-shadow",
      style: {
        background: "linear-gradient(135deg, rgba(47,168,255,0.08) 0%, rgba(168,85,247,0.08) 100%)",
        border: "1px solid rgba(59,130,246,0.25)"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-2 flex items-center justify-between border-b border-komo-border/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-semibold text-komo-text-muted uppercase tracking-wider", children: "Sponsored" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { size: 12, className: "text-komo-text-muted" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0",
                style: { background: "linear-gradient(135deg, #2FA8FF, #A855F7)" },
                children: "S"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[14px] font-bold text-foreground", children: "Summer Sale — Up to 60% Off!" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-komo-text-muted mt-0.5", children: "FashionBrand · Limited time offer" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "w-full rounded-xl p-4 flex items-center justify-between",
              style: {
                background: "linear-gradient(135deg, rgba(47,168,255,0.18), rgba(168,85,247,0.22))",
                border: "1px solid rgba(59,130,246,0.2)"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-semibold text-foreground", children: "Flat ₹500 off on orders ₹2,000+" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-komo-text-muted mt-0.5", children: [
                    "Use code:",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-blue-400", children: "SUMMER60" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { size: 28, className: "text-purple-400 opacity-70" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              "data-ocid": "feed.ad.learn_more_button",
              className: "mt-3 w-full komo-gradient text-white text-sm font-semibold py-2.5 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity",
              children: [
                "Learn More ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { size: 13 })
              ]
            }
          )
        ] })
      ]
    }
  );
}
const STORY_REACTIONS = [
  { emoji: "😍", label: "Love" },
  { emoji: "🔥", label: "Fire" },
  { emoji: "👏", label: "Clap" },
  { emoji: "😂", label: "Haha" },
  { emoji: "😮", label: "Wow" },
  { emoji: "❤️", label: "Heart" }
];
function StoriesStrip() {
  const { setCreateStoryOpen } = useApp();
  const [activeStory, setActiveStory] = reactExports.useState(null);
  const [storyReaction, setStoryReaction] = reactExports.useState(null);
  const [reactionBurst, setReactionBurst] = reactExports.useState(null);
  const handleStoryReact = (emoji) => {
    setReactionBurst(emoji);
    setStoryReaction(emoji);
    setTimeout(() => setReactionBurst(null), 800);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-4 py-4 px-1 overflow-x-auto scrollbar-hide", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 flex-shrink-0", children: [
      MOCK_STORIES.map((story, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.button,
        {
          "data-ocid": `stories.item.${i + 1}`,
          className: "flex flex-col items-center gap-1.5 flex-shrink-0",
          whileHover: { scale: 1.05 },
          whileTap: { scale: 0.95 },
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: i * 0.05 },
          onClick: () => {
            setActiveStory(story);
            setStoryReaction(null);
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-16 h-16 rounded-full p-[3px] flex-shrink-0",
                style: {
                  background: story.viewed ? "#2A313C" : "linear-gradient(135deg, #2FA8FF 0%, #A855F7 100%)"
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-full h-full rounded-full flex items-center justify-center text-[13px] font-bold text-white border-2 border-[#1A1F26]",
                    style: { background: story.gradient },
                    children: story.initials
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-komo-text-secondary truncate max-w-[64px] text-center", children: story.username })
          ]
        },
        story.id
      )),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.button,
        {
          "data-ocid": "stories.add.button",
          onClick: () => setCreateStoryOpen(true),
          className: "flex flex-col items-center gap-1.5 flex-shrink-0",
          whileHover: { scale: 1.05 },
          whileTap: { scale: 0.95 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full border-2 border-dashed border-[#2A313C] flex items-center justify-center bg-[#202632] hover:border-komo-blue transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 22, className: "text-komo-blue" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-komo-text-muted", children: "Your Story" })
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: activeStory && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        className: "fixed inset-0 z-50 flex items-center justify-center",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0",
              style: { background: "rgba(0,0,0,0.9)" },
              onClick: () => setActiveStory(null),
              onKeyDown: () => setActiveStory(null),
              role: "button",
              tabIndex: -1,
              "aria-label": "Close story"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              className: "relative w-full max-w-sm h-[80vh] rounded-3xl overflow-hidden",
              style: { background: activeStory.gradient },
              initial: { scale: 0.85, opacity: 0 },
              animate: { scale: 1, opacity: 1 },
              exit: { scale: 0.85, opacity: 0 },
              transition: { type: "spring", stiffness: 320, damping: 28 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 left-3 right-3 h-1 rounded-full bg-white/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    className: "h-full rounded-full bg-white",
                    initial: { width: "0%" },
                    animate: { width: "100%" },
                    transition: { duration: 5, ease: "linear" },
                    onAnimationComplete: () => setActiveStory(null)
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-8 left-4 right-4 flex items-center justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "w-9 h-9 rounded-full flex items-center justify-center text-[12px] font-bold text-white",
                        style: { background: "rgba(255,255,255,0.25)" },
                        children: activeStory.initials
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white text-[13px] font-semibold", children: activeStory.username }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/70 text-[11px]", children: "Just now" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      className: "w-8 h-8 rounded-full bg-black/30 flex items-center justify-center",
                      onClick: () => setActiveStory(null),
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 16, className: "text-white" })
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-white text-[22px] font-bold text-center px-8 drop-shadow-lg", children: [
                  "✨ Story by ",
                  activeStory.username
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: reactionBurst && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    className: "absolute inset-0 flex items-center justify-center pointer-events-none",
                    initial: { opacity: 1, scale: 0.5, y: 0 },
                    animate: { opacity: 0, scale: 2, y: -60 },
                    exit: { opacity: 0 },
                    transition: { duration: 0.7 },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[80px]", children: reactionBurst })
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-6 left-0 right-0 flex items-center justify-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "flex items-center gap-3 px-4 py-2.5 rounded-full",
                    style: {
                      background: "rgba(0,0,0,0.5)",
                      backdropFilter: "blur(16px)",
                      border: "1px solid rgba(255,255,255,0.15)"
                    },
                    children: STORY_REACTIONS.map((r, ri) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.button,
                      {
                        type: "button",
                        "data-ocid": `stories.reaction.${ri + 1}`,
                        onClick: () => handleStoryReact(r.emoji),
                        whileHover: { scale: 1.4, y: -6 },
                        whileTap: { scale: 0.9 },
                        className: `text-[24px] leading-none transition-all ${storyReaction === r.emoji ? "ring-2 ring-white rounded-full" : ""}`,
                        title: r.label,
                        children: r.emoji
                      },
                      r.emoji
                    ))
                  }
                ) })
              ]
            }
          )
        ]
      }
    ) })
  ] });
}
function UserSuggestion({ user, index }) {
  const [following, setFollowing] = reactExports.useState(user.following);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      "data-ocid": `suggestions.item.${index}`,
      className: "flex items-center gap-3",
      initial: { opacity: 0, x: 10 },
      animate: { opacity: 1, x: 0 },
      transition: { delay: index * 0.06 },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "w-10 h-10 rounded-full flex items-center justify-center text-[13px] font-bold text-white flex-shrink-0",
            style: { background: user.gradient },
            children: user.initials
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[13px] font-semibold text-foreground truncate", children: user.displayName }),
            user.isCreator && /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { size: 10, className: "text-komo-blue flex-shrink-0" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-komo-text-muted", children: [
            user.mutuals,
            " mutual friends"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            "data-ocid": `suggestions.follow.${index}`,
            variant: following ? "secondary" : "default",
            size: "sm",
            className: `h-7 text-[11px] px-3 flex-shrink-0 ${following ? "bg-accent text-komo-text-secondary" : "komo-gradient border-0 text-white hover:opacity-90"}`,
            onClick: () => setFollowing((f) => !f),
            children: [
              following ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 12 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(UserPlus, { size: 12, className: "mr-1" }),
              following ? "Following" : "Follow"
            ]
          }
        )
      ]
    }
  );
}
function Home() {
  const [selectedPost, setSelectedPost] = reactExports.useState(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(StoriesStrip, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-[1fr_280px_280px] gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { "data-ocid": "home.feed.section", className: "flex flex-col gap-4", children: MOCK_POSTS.map((post, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          PostCard,
          {
            post,
            index: i + 1,
            onCommentClick: () => setSelectedPost(post)
          }
        ),
        (i + 1) % 3 === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(AdBanner, {})
      ] }, post.id)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "section",
        {
          "data-ocid": "home.reels.section",
          className: "hidden lg:flex flex-col gap-4",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-[14px] font-semibold text-foreground flex items-center gap-2 mb-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1 h-4 rounded-full komo-gradient inline-block" }),
              "Reels"
            ] }),
            MOCK_REELS.map((reel, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ReelCard, { reel, index: i + 1 }, reel.id))
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "section",
        {
          "data-ocid": "home.discovery.section",
          className: "hidden lg:flex flex-col gap-4",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "komo-surface rounded-2xl komo-card-shadow p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-[14px] font-semibold text-foreground mb-4 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1 h-4 rounded-full komo-gradient inline-block" }),
                "Suggested for You"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-3", children: MOCK_SUGGESTIONS.map((user, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(UserSuggestion, { user, index: i + 1 }, user.id)) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "komo-surface rounded-2xl komo-card-shadow p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-[14px] font-semibold text-foreground mb-4 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1 h-4 rounded-full komo-gradient inline-block" }),
                "Trending Topics"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: TRENDING_HASHTAGS.map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.button,
                {
                  "data-ocid": "home.trending.button",
                  className: "text-[12px] font-medium px-3 py-1.5 rounded-full bg-accent text-komo-text-secondary hover:text-komo-blue hover:bg-komo-blue/10 transition-colors",
                  whileHover: { scale: 1.05 },
                  whileTap: { scale: 0.95 },
                  children: tag
                },
                tag
              )) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-komo-text-muted text-center px-2", children: [
              "© ",
              (/* @__PURE__ */ new Date()).getFullYear(),
              ". Built with love using",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "text-komo-blue hover:underline",
                  children: "caffeine.ai"
                }
              )
            ] })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PostDetailModal,
      {
        post: selectedPost,
        open: !!selectedPost,
        onClose: () => setSelectedPost(null)
      }
    )
  ] });
}
export {
  Home as default
};
