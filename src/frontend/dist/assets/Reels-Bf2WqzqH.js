import { c as createLucideIcon, r as reactExports, u as useApp, j as jsxRuntimeExports, F as Film, A as AnimatePresence, J as ReelAIEditorModal, m as motion, X, h as Play } from "./index-m-9XzHBK.js";
import { R as ReelCard } from "./ReelCard-me2hIT_k.js";
import { b as MOCK_REELS } from "./mockData-BCdBG7qh.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ]
];
const Pen = createLucideIcon("pen", __iconNode);
function ReelDetailModal({
  reel,
  onClose
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      "data-ocid": "reels.modal",
      className: "fixed inset-0 z-50 flex items-center justify-center p-4",
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            "aria-label": "Close",
            className: "absolute inset-0 bg-black/80 backdrop-blur-md w-full",
            onClick: onClose
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            className: "relative w-full max-w-sm rounded-3xl overflow-hidden",
            style: { aspectRatio: "9/16", maxHeight: "85vh" },
            initial: { scale: 0.8, opacity: 0 },
            animate: { scale: 1, opacity: 1 },
            exit: { scale: 0.8, opacity: 0 },
            transition: { type: "spring", stiffness: 350, damping: 30 },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: reel.image,
                  alt: reel.title,
                  className: "w-full h-full object-cover"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  "data-ocid": "reels.close_button",
                  onClick: onClose,
                  className: "absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 18, className: "text-white" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { size: 28, className: "text-white fill-white ml-1" }) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "w-9 h-9 rounded-full flex items-center justify-center text-[12px] font-bold text-white",
                      style: { background: reel.gradient },
                      children: reel.initials
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white font-semibold text-sm", children: reel.displayName }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-white/60 text-[12px]", children: [
                      "@",
                      reel.username
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/90 text-sm leading-relaxed mb-3", children: reel.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 text-white/70 text-[13px]", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    "❤️ ",
                    (reel.likes / 1e3).toFixed(1),
                    "K"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    "👁 ",
                    reel.views,
                    " views"
                  ] })
                ] })
              ] })
            ]
          }
        )
      ]
    }
  );
}
function Reels() {
  const [selectedReel, setSelectedReel] = reactExports.useState(null);
  const { navigate } = useApp();
  const [aiEditorOpen, setAiEditorOpen] = reactExports.useState(false);
  const handleCreateReel = () => {
    setAiEditorOpen(true);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto px-4 py-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "w-8 h-8 rounded-xl flex items-center justify-center",
            style: { background: "linear-gradient(135deg, #A855F7, #EC4899)" },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Film, { size: 16, className: "text-white" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-bold text-foreground", children: "Reels" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            "data-ocid": "reels.edit.button",
            onClick: () => navigate("/reel-editor"),
            className: "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[13px] font-semibold text-white",
            style: { background: "linear-gradient(135deg, #6366f1, #8b5cf6)" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Pen, { size: 14 }),
              "Edit"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            "data-ocid": "reels.create.button",
            onClick: handleCreateReel,
            className: "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[13px] font-semibold text-white",
            style: { background: "linear-gradient(135deg, #A855F7, #EC4899)" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Film, { size: 14 }),
              "Create Reel"
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-3", children: MOCK_REELS.map((reel, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: () => setSelectedReel(reel),
        className: "text-left w-full",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(ReelCard, { reel, index: i + 1 })
      },
      reel.id
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: selectedReel && /* @__PURE__ */ jsxRuntimeExports.jsx(
      ReelDetailModal,
      {
        reel: selectedReel,
        onClose: () => setSelectedReel(null)
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ReelAIEditorModal,
      {
        open: aiEditorOpen,
        onClose: () => setAiEditorOpen(false)
      }
    )
  ] });
}
export {
  Reels as default
};
