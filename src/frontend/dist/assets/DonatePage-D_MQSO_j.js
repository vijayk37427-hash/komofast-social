import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, ax as useCallbackRef, a1 as useLayoutEffect2, v as cn, u as useApp, m as motion, Z as Zap, H as Heart, I as Input, C as Check, B as Button, T as Textarea, S as Share2, b as ue } from "./index-BlWpIyR8.js";
import { c as createContextScope } from "./index-BRBSbcSo.js";
import { P as Primitive } from "./index-D4ku5XXv.js";
import { B as Badge } from "./badge-BChbocV7.js";
import { Q as QrCode } from "./qr-code-Cq38KS2O.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
];
const Copy = createLucideIcon("copy", __iconNode);
var shim$1 = { exports: {} };
var useSyncExternalStoreShim_production = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var React = reactExports;
function is(x, y) {
  return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
}
var objectIs = "function" === typeof Object.is ? Object.is : is, useState = React.useState, useEffect = React.useEffect, useLayoutEffect = React.useLayoutEffect, useDebugValue = React.useDebugValue;
function useSyncExternalStore$2(subscribe2, getSnapshot) {
  var value = getSnapshot(), _useState = useState({ inst: { value, getSnapshot } }), inst = _useState[0].inst, forceUpdate = _useState[1];
  useLayoutEffect(
    function() {
      inst.value = value;
      inst.getSnapshot = getSnapshot;
      checkIfSnapshotChanged(inst) && forceUpdate({ inst });
    },
    [subscribe2, value, getSnapshot]
  );
  useEffect(
    function() {
      checkIfSnapshotChanged(inst) && forceUpdate({ inst });
      return subscribe2(function() {
        checkIfSnapshotChanged(inst) && forceUpdate({ inst });
      });
    },
    [subscribe2]
  );
  useDebugValue(value);
  return value;
}
function checkIfSnapshotChanged(inst) {
  var latestGetSnapshot = inst.getSnapshot;
  inst = inst.value;
  try {
    var nextValue = latestGetSnapshot();
    return !objectIs(inst, nextValue);
  } catch (error) {
    return true;
  }
}
function useSyncExternalStore$1(subscribe2, getSnapshot) {
  return getSnapshot();
}
var shim = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? useSyncExternalStore$1 : useSyncExternalStore$2;
useSyncExternalStoreShim_production.useSyncExternalStore = void 0 !== React.useSyncExternalStore ? React.useSyncExternalStore : shim;
{
  shim$1.exports = useSyncExternalStoreShim_production;
}
var shimExports = shim$1.exports;
function useIsHydrated() {
  return shimExports.useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );
}
function subscribe() {
  return () => {
  };
}
var AVATAR_NAME = "Avatar";
var [createAvatarContext] = createContextScope(AVATAR_NAME);
var [AvatarProvider, useAvatarContext] = createAvatarContext(AVATAR_NAME);
var Avatar$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAvatar, ...avatarProps } = props;
    const [imageLoadingStatus, setImageLoadingStatus] = reactExports.useState("idle");
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      AvatarProvider,
      {
        scope: __scopeAvatar,
        imageLoadingStatus,
        onImageLoadingStatusChange: setImageLoadingStatus,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Primitive.span, { ...avatarProps, ref: forwardedRef })
      }
    );
  }
);
Avatar$1.displayName = AVATAR_NAME;
var IMAGE_NAME = "AvatarImage";
var AvatarImage = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAvatar, src, onLoadingStatusChange = () => {
    }, ...imageProps } = props;
    const context = useAvatarContext(IMAGE_NAME, __scopeAvatar);
    const imageLoadingStatus = useImageLoadingStatus(src, imageProps);
    const handleLoadingStatusChange = useCallbackRef((status) => {
      onLoadingStatusChange(status);
      context.onImageLoadingStatusChange(status);
    });
    useLayoutEffect2(() => {
      if (imageLoadingStatus !== "idle") {
        handleLoadingStatusChange(imageLoadingStatus);
      }
    }, [imageLoadingStatus, handleLoadingStatusChange]);
    return imageLoadingStatus === "loaded" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Primitive.img, { ...imageProps, ref: forwardedRef, src }) : null;
  }
);
AvatarImage.displayName = IMAGE_NAME;
var FALLBACK_NAME = "AvatarFallback";
var AvatarFallback$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAvatar, delayMs, ...fallbackProps } = props;
    const context = useAvatarContext(FALLBACK_NAME, __scopeAvatar);
    const [canRender, setCanRender] = reactExports.useState(delayMs === void 0);
    reactExports.useEffect(() => {
      if (delayMs !== void 0) {
        const timerId = window.setTimeout(() => setCanRender(true), delayMs);
        return () => window.clearTimeout(timerId);
      }
    }, [delayMs]);
    return canRender && context.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Primitive.span, { ...fallbackProps, ref: forwardedRef }) : null;
  }
);
AvatarFallback$1.displayName = FALLBACK_NAME;
function resolveLoadingStatus(image, src) {
  if (!image) {
    return "idle";
  }
  if (!src) {
    return "error";
  }
  if (image.src !== src) {
    image.src = src;
  }
  return image.complete && image.naturalWidth > 0 ? "loaded" : "loading";
}
function useImageLoadingStatus(src, { referrerPolicy, crossOrigin }) {
  const isHydrated = useIsHydrated();
  const imageRef = reactExports.useRef(null);
  const image = (() => {
    if (!isHydrated) return null;
    if (!imageRef.current) {
      imageRef.current = new window.Image();
    }
    return imageRef.current;
  })();
  const [loadingStatus, setLoadingStatus] = reactExports.useState(
    () => resolveLoadingStatus(image, src)
  );
  useLayoutEffect2(() => {
    setLoadingStatus(resolveLoadingStatus(image, src));
  }, [image, src]);
  useLayoutEffect2(() => {
    const updateStatus = (status) => () => {
      setLoadingStatus(status);
    };
    if (!image) return;
    const handleLoad = updateStatus("loaded");
    const handleError = updateStatus("error");
    image.addEventListener("load", handleLoad);
    image.addEventListener("error", handleError);
    if (referrerPolicy) {
      image.referrerPolicy = referrerPolicy;
    }
    if (typeof crossOrigin === "string") {
      image.crossOrigin = crossOrigin;
    }
    return () => {
      image.removeEventListener("load", handleLoad);
      image.removeEventListener("error", handleError);
    };
  }, [image, crossOrigin, referrerPolicy]);
  return loadingStatus;
}
var Root = Avatar$1;
var Fallback = AvatarFallback$1;
function Avatar({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Root,
    {
      "data-slot": "avatar",
      className: cn(
        "relative flex size-8 shrink-0 overflow-hidden rounded-full",
        className
      ),
      ...props
    }
  );
}
function AvatarFallback({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Fallback,
    {
      "data-slot": "avatar-fallback",
      className: cn(
        "bg-muted flex size-full items-center justify-center rounded-full",
        className
      ),
      ...props
    }
  );
}
const PRESET_AMOUNTS = [10, 50, 100, 500, 1e3];
const RECENT_DONORS = [
  {
    name: "Priya S.",
    initials: "PS",
    amount: 100,
    time: "2 min ago",
    gradient: "linear-gradient(135deg, #f472b6, #a855f7)"
  },
  {
    name: "Amit K.",
    initials: "AK",
    amount: 500,
    time: "15 min ago",
    gradient: "linear-gradient(135deg, #2fa8ff, #6366f1)"
  },
  {
    name: "Sneha R.",
    initials: "SR",
    amount: 50,
    time: "1 hr ago",
    gradient: "linear-gradient(135deg, #22c55e, #2fa8ff)"
  },
  {
    name: "Rahul M.",
    initials: "RM",
    amount: 1e3,
    time: "3 hr ago",
    gradient: "linear-gradient(135deg, #f59e0b, #ef4444)"
  },
  {
    name: "Kavya P.",
    initials: "KP",
    amount: 200,
    time: "Yesterday",
    gradient: "linear-gradient(135deg, #a855f7, #ec4899)"
  }
];
const UPI_ID = "rahul@komofast";
function DonatePage() {
  const { navigate } = useApp();
  const [selectedAmount, setSelectedAmount] = reactExports.useState(100);
  const [customAmount, setCustomAmount] = reactExports.useState("");
  const [message, setMessage] = reactExports.useState("");
  const [copied, setCopied] = reactExports.useState(false);
  const [upiCopied, setUpiCopied] = reactExports.useState(false);
  const [donated, setDonated] = reactExports.useState(false);
  const finalAmount = customAmount ? Number(customAmount) : selectedAmount;
  const handleCopyUPI = () => {
    navigator.clipboard.writeText(UPI_ID).catch(() => {
    });
    setUpiCopied(true);
    ue.success("UPI ID copied!");
    setTimeout(() => setUpiCopied(false), 2e3);
  };
  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href).catch(() => {
    });
    setCopied(true);
    ue.success("Donation link copied!");
    setTimeout(() => setCopied(false), 2e3);
  };
  const handleWhatsApp = () => {
    const text = `Support Rahul Sharma on KomoFast! Donate here: ${window.location.href}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank");
  };
  const handleDonate = () => {
    if (!finalAmount || finalAmount <= 0) {
      ue.error("Please select or enter a donation amount.");
      return;
    }
    setDonated(true);
    ue.success(`₹${finalAmount} donation sent! Thank you! 💝`);
    setTimeout(() => setDonated(false), 3e3);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-lg mx-auto px-4 py-6 pb-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: () => navigate("/profile"),
        className: "flex items-center gap-1.5 text-[13px] text-komo-text-muted hover:text-foreground transition-colors mb-4",
        children: "← Back to Profile"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.35 },
        className: "rounded-2xl p-5 text-center mb-4",
        style: {
          background: "linear-gradient(135deg, rgba(47,168,255,0.12) 0%, rgba(168,85,247,0.18) 100%)",
          border: "1px solid rgba(168,85,247,0.3)",
          boxShadow: "0 8px 32px rgba(168,85,247,0.12)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "w-20 h-20 rounded-full mx-auto flex items-center justify-center text-[28px] font-bold text-white mb-3",
              style: { background: "linear-gradient(135deg, #2fa8ff, #a855f7)" },
              children: "RS"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-[20px] font-bold text-foreground", children: "Rahul Sharma" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-komo-text-muted mb-2", children: "@rahul_komo" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-komo-text-secondary leading-relaxed mb-3", children: "Content Creator | Help me keep creating!" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-komo-badge/20 text-komo-blue border-komo-blue/30 text-[11px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { size: 10, className: "mr-1" }),
            " KomoFast Creator"
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.35, delay: 0.08 },
        className: "komo-surface rounded-2xl komo-card-shadow p-4 mb-4",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[13px] font-semibold text-komo-text-secondary mb-3 flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { size: 14, className: "text-pink-400" }),
            " Choose Donation Amount"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-5 gap-2 mb-3", children: PRESET_AMOUNTS.map((amt) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              "data-ocid": "donate.amount.button",
              onClick: () => {
                setSelectedAmount(amt);
                setCustomAmount("");
              },
              className: `py-2.5 rounded-xl text-[13px] font-bold transition-all ${selectedAmount === amt && !customAmount ? "text-white shadow-lg scale-105" : "text-komo-text-secondary hover:text-foreground"}`,
              style: selectedAmount === amt && !customAmount ? {
                background: "linear-gradient(135deg, #2fa8ff, #a855f7)",
                border: "1px solid rgba(168,85,247,0.5)"
              } : {
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)"
              },
              children: [
                "₹",
                amt
              ]
            },
            amt
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              "data-ocid": "donate.custom.input",
              type: "number",
              placeholder: "Custom amount (₹)",
              value: customAmount,
              onChange: (e) => {
                setCustomAmount(e.target.value);
                setSelectedAmount(null);
              },
              className: "bg-white/5 border-white/10 text-foreground placeholder:text-komo-text-muted focus:border-komo-purple/50"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.35, delay: 0.14 },
        className: "komo-surface rounded-2xl komo-card-shadow p-4 mb-4",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-semibold text-komo-text-secondary mb-3", children: "💳 Payment" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex items-center gap-3 rounded-xl px-4 py-3 mb-4",
              style: {
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-komo-text-muted mb-0.5", children: "UPI ID" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[14px] font-bold text-foreground", children: UPI_ID })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    "data-ocid": "donate.upi.button",
                    onClick: handleCopyUPI,
                    className: "w-9 h-9 rounded-lg flex items-center justify-center transition-colors hover:bg-white/10",
                    style: {
                      background: upiCopied ? "rgba(34,197,94,0.15)" : "rgba(47,168,255,0.15)",
                      border: upiCopied ? "1px solid rgba(34,197,94,0.4)" : "1px solid rgba(47,168,255,0.3)"
                    },
                    children: upiCopied ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 15, className: "text-green-400" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { size: 15, className: "text-komo-blue" })
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "rounded-xl p-6 flex flex-col items-center gap-2 mb-4",
              style: {
                background: "linear-gradient(135deg, rgba(47,168,255,0.1), rgba(168,85,247,0.12))",
                border: "1px solid rgba(168,85,247,0.25)"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "w-32 h-32 rounded-xl flex flex-col items-center justify-center gap-2",
                    style: {
                      background: "rgba(255,255,255,0.06)",
                      border: "2px dashed rgba(168,85,247,0.4)"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(QrCode, { size: 48, className: "text-komo-purple opacity-70" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-komo-text-muted font-medium", children: "QR Code" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] font-semibold text-komo-text-secondary", children: "Scan to Pay" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-komo-text-muted", children: UPI_ID })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              "data-ocid": "donate.submit_button",
              className: "w-full h-12 text-[15px] font-bold border-0 text-white",
              style: {
                background: donated ? "linear-gradient(135deg, #22c55e, #16a34a)" : "linear-gradient(135deg, #2fa8ff, #a855f7)"
              },
              onClick: handleDonate,
              children: donated ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 18, className: "mr-2" }),
                " Donated! Thank you 💝"
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { size: 18, className: "mr-2" }),
                " Donate Now",
                finalAmount ? ` ₹${finalAmount}` : ""
              ] })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.35, delay: 0.2 },
        className: "komo-surface rounded-2xl komo-card-shadow p-4 mb-4",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-semibold text-komo-text-secondary mb-2", children: "💬 Message (Optional)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Textarea,
            {
              "data-ocid": "donate.message.textarea",
              placeholder: "Leave a message for Rahul...",
              value: message,
              onChange: (e) => setMessage(e.target.value),
              rows: 3,
              className: "bg-white/5 border-white/10 text-foreground placeholder:text-komo-text-muted focus:border-komo-purple/50 resize-none"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.35, delay: 0.26 },
        className: "komo-surface rounded-2xl komo-card-shadow p-4 mb-4",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-semibold text-komo-text-secondary mb-3", children: "🏆 Recent Donors" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: RECENT_DONORS.map((donor, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              "data-ocid": `donate.donor.item.${i + 1}`,
              className: "flex items-center gap-3",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { className: "w-9 h-9 flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  AvatarFallback,
                  {
                    className: "text-[12px] font-bold text-white",
                    style: { background: donor.gradient },
                    children: donor.initials
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-semibold text-foreground", children: donor.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-komo-text-muted", children: donor.time })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Badge,
                  {
                    className: "text-[12px] font-bold shrink-0",
                    style: {
                      background: "rgba(34,197,94,0.12)",
                      color: "#4ade80",
                      border: "1px solid rgba(34,197,94,0.3)"
                    },
                    children: [
                      "₹",
                      donor.amount
                    ]
                  }
                )
              ]
            },
            donor.name
          )) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.35, delay: 0.32 },
        className: "komo-surface rounded-2xl komo-card-shadow p-4",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-semibold text-komo-text-secondary mb-3", children: "🔗 Share Donation Link" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                "data-ocid": "donate.copy.button",
                variant: "outline",
                className: "flex-1 border-komo-border text-komo-text-secondary hover:text-foreground hover:border-komo-blue/50 h-11",
                onClick: handleCopyLink,
                children: [
                  copied ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 15, className: "mr-2 text-green-400" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { size: 15, className: "mr-2" }),
                  copied ? "Copied!" : "Copy Link"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                "data-ocid": "donate.share.button",
                className: "flex-1 h-11 border-0 text-white",
                style: { background: "linear-gradient(135deg, #25d366, #128c7e)" },
                onClick: handleWhatsApp,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { size: 15, className: "mr-2" }),
                  " WhatsApp"
                ]
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-center text-[11px] text-komo-text-muted mt-6", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      ". Built with ❤️ using",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`,
          target: "_blank",
          rel: "noreferrer",
          className: "text-komo-blue hover:underline",
          children: "caffeine.ai"
        }
      )
    ] })
  ] });
}
export {
  DonatePage as default
};
