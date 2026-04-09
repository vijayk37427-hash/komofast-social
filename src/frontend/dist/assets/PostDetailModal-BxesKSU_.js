import { c as createLucideIcon, u as useApp, r as reactExports, j as jsxRuntimeExports, A as AnimatePresence, m as motion, T as Textarea, B as Button, b as ue, D as Dialog, k as DialogContent, i as ScrollArea, H as Heart, I as Input } from "./index-BlWpIyR8.js";
import { e as MOCK_COMMENTS } from "./mockData-BCdBG7qh.js";
import { S as Send } from "./send-DcEmvjNY.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z", key: "i9b6wo" }],
  ["line", { x1: "4", x2: "4", y1: "22", y2: "15", key: "1cm3nv" }]
];
const Flag = createLucideIcon("flag", __iconNode);
const CATEGORIES = [
  { id: "fake_news", label: "Fake News", emoji: "🗞️", color: "orange" },
  { id: "adult_content", label: "Adult Content", emoji: "🔞", color: "red" },
  { id: "hate_speech", label: "Hate Speech", emoji: "💬", color: "red" },
  { id: "spam", label: "Spam", emoji: "📢", color: "yellow" },
  { id: "other", label: "Other", emoji: "⚠️", color: "gray" }
];
function ReportModal({
  open,
  onClose,
  targetId,
  targetUsername,
  type
}) {
  const { reportItem, currentUser } = useApp();
  const [selectedCategory, setSelectedCategory] = reactExports.useState(
    null
  );
  const [description, setDescription] = reactExports.useState("");
  const [submitting, setSubmitting] = reactExports.useState(false);
  const handleSubmit = () => {
    if (!selectedCategory) {
      ue.error("Please select a reason");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      reportItem({
        id: `r_${Date.now()}`,
        type,
        targetId,
        targetUsername,
        category: selectedCategory,
        description: description || void 0,
        reportedBy: (currentUser == null ? void 0 : currentUser.username) || "anonymous",
        timestamp: /* @__PURE__ */ new Date(),
        status: "pending"
      });
      ue.success("Report submitted. Our team will review it.");
      setSubmitting(false);
      setSelectedCategory(null);
      setDescription("");
      onClose();
    }, 800);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        className: "fixed inset-0 bg-black/60 z-50",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        onClick: onClose
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        "data-ocid": "report.modal",
        className: "fixed bottom-0 left-0 right-0 z-50 max-w-lg mx-auto bg-[#141920] rounded-t-3xl border border-white/10 shadow-2xl",
        initial: { y: "100%" },
        animate: { y: 0 },
        exit: { y: "100%" },
        transition: { type: "spring", damping: 30, stiffness: 300 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center pt-3 pb-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-1 rounded-full bg-white/20" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 pb-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between py-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-[18px] font-bold text-white", children: [
                "Report ",
                type === "post" ? "Post" : "User"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  "data-ocid": "report.close_button",
                  onClick: onClose,
                  className: "w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-white/20 transition-colors",
                  children: "✕"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[13px] text-white/50 mb-4", children: [
              "Reporting @",
              targetUsername,
              " · Select a reason below"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-2 mb-5", children: CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              const borderColor = cat.color === "red" ? isSelected ? "border-red-500 bg-red-500/15" : "border-white/10 hover:border-red-500/50" : cat.color === "orange" ? isSelected ? "border-orange-500 bg-orange-500/15" : "border-white/10 hover:border-orange-500/50" : cat.color === "yellow" ? isSelected ? "border-yellow-500 bg-yellow-500/15" : "border-white/10 hover:border-yellow-500/50" : isSelected ? "border-blue-400 bg-blue-400/15" : "border-white/10 hover:border-blue-400/50";
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  "data-ocid": `report.category.${cat.id}`,
                  onClick: () => setSelectedCategory(cat.id),
                  className: `flex items-center gap-3 px-4 py-3 rounded-xl border transition-all text-left ${borderColor}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl", children: cat.emoji }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: `text-[14px] font-medium ${isSelected ? "text-white" : "text-white/70"}`,
                        children: cat.label
                      }
                    ),
                    isSelected && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto text-[12px] text-white/50", children: "✓" })
                  ]
                },
                cat.id
              );
            }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Textarea,
              {
                "data-ocid": "report.textarea",
                placeholder: "Add details (optional)",
                value: description,
                onChange: (e) => setDescription(e.target.value),
                className: "bg-white/5 border-white/10 text-white placeholder:text-white/30 resize-none mb-5 rounded-xl",
                rows: 3
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                "data-ocid": "report.submit_button",
                onClick: handleSubmit,
                disabled: !selectedCategory || submitting,
                className: "w-full h-12 rounded-xl text-[15px] font-semibold text-white border-0",
                style: {
                  background: selectedCategory && !submitting ? "linear-gradient(135deg, #2FA8FF, #9B4DCA)" : void 0
                },
                children: submitting ? "Submitting..." : "Submit Report"
              }
            )
          ] })
        ]
      }
    )
  ] }) });
}
function PostDetailModal({
  post,
  open,
  onClose
}) {
  const [comment, setComment] = reactExports.useState("");
  const [comments, setComments] = reactExports.useState(MOCK_COMMENTS);
  if (!post) return null;
  const handleComment = () => {
    if (!comment.trim()) return;
    setComments((prev) => [
      {
        id: `c${Date.now()}`,
        username: "you",
        initials: "YO",
        gradient: "linear-gradient(135deg, #2FA8FF, #A855F7)",
        text: comment,
        time: "just now",
        likes: 0
      },
      ...prev
    ]);
    setComment("");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open, onOpenChange: onClose, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    DialogContent,
    {
      "data-ocid": "post_detail.modal",
      className: "komo-surface border-komo-border max-w-2xl p-0 overflow-hidden",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row max-h-[80vh]", children: [
        post.image && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:w-1/2 bg-black flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: post.image,
            alt: "Post",
            className: "w-full h-full object-contain max-h-[50vh] md:max-h-full"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `flex flex-col ${post.image ? "md:w-1/2" : "w-full"} p-4`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4 pb-3 border-b border-komo-border/50", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-9 h-9 rounded-full flex items-center justify-center text-[12px] font-bold text-white",
                    style: { background: post.gradient },
                    children: post.initials
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-semibold text-foreground", children: post.displayName }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-komo-text-muted", children: [
                    post.caption.slice(0, 60),
                    "..."
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollArea, { className: "flex-1 min-h-0 max-h-[40vh]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: comments.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0",
                    style: { background: c.gradient },
                    children: c.initials
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12px] font-semibold text-foreground", children: c.username }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-komo-text-muted", children: c.time })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-komo-text-secondary mt-0.5", children: c.text }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        type: "button",
                        className: "flex items-center gap-1 text-[10px] text-komo-text-muted hover:text-komo-red",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { size: 11 }),
                          " ",
                          c.likes
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        className: "text-[10px] text-komo-text-muted hover:text-foreground",
                        children: "Reply"
                      }
                    )
                  ] })
                ] })
              ] }, c.id)) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mt-3 pt-3 border-t border-komo-border/50", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    "data-ocid": "post_detail.comment.input",
                    placeholder: "Add a comment...",
                    value: comment,
                    onChange: (e) => setComment(e.target.value),
                    onKeyDown: (e) => e.key === "Enter" && handleComment(),
                    className: "flex-1 bg-accent border-komo-border text-[13px] h-8"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    "data-ocid": "post_detail.comment.submit_button",
                    size: "sm",
                    className: "h-8 px-3 komo-gradient border-0 text-white",
                    onClick: handleComment,
                    disabled: !comment.trim(),
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { size: 13 })
                  }
                )
              ] })
            ]
          }
        )
      ] })
    }
  ) });
}
export {
  Flag as F,
  PostDetailModal as P,
  ReportModal as R
};
