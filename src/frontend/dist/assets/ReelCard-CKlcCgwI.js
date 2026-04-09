import { j as jsxRuntimeExports, m as motion, K as Music, h as Play, H as Heart, a as MessageCircle } from "./index-BlWpIyR8.js";
function formatCount(n) {
  if (n >= 1e3) return `${(n / 1e3).toFixed(1)}K`;
  return String(n);
}
function ReelCard({ reel, index }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      "data-ocid": `reels.item.${index}`,
      className: "relative rounded-2xl overflow-hidden komo-card-shadow cursor-pointer group",
      style: { aspectRatio: "9/16" },
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: index * 0.1 },
      whileHover: { scale: 1.02 },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: reel.image,
            alt: reel.title,
            className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 right-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Music, { size: 14, className: "text-white" }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 left-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] text-white/80 font-medium bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded-full", children: [
          reel.views,
          " views"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { size: 24, className: "text-white fill-white ml-1" }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-3", children: [
          reel.music && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex items-center gap-2 px-2.5 py-1.5 rounded-full mb-2 overflow-hidden",
              style: {
                background: "rgba(0,0,0,0.6)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.1)"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center",
                    style: {
                      background: "linear-gradient(135deg, #a855f7, #ec4899)",
                      animation: "spin 3s linear infinite"
                    },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Music, { size: 9, className: "text-white" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "whitespace-nowrap text-[10px] text-white font-medium",
                    style: { animation: "marquee 8s linear infinite" },
                    children: [
                      "♪ ",
                      reel.music.title,
                      " - ",
                      reel.music.artist,
                      "   ♪ ",
                      reel.music.title,
                      " - ",
                      reel.music.artist
                    ]
                  }
                ) })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0",
                style: { background: reel.gradient },
                children: reel.initials
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[12px] font-semibold text-white truncate", children: [
              "@",
              reel.username
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-white/90 leading-tight line-clamp-2 mb-2", children: reel.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { size: 13, className: "text-komo-red fill-komo-red" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-white/80", children: formatCount(reel.likes) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { size: 13, className: "text-white/70" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-white/80", children: "Reply" })
            ] })
          ] })
        ] })
      ]
    }
  );
}
export {
  ReelCard as R
};
