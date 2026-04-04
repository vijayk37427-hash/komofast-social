import { c as createLucideIcon, r as reactExports, u as useApp, j as jsxRuntimeExports, m as motion, H as Heart, B as Button, l as ShoppingCart, b as ue, n as Sparkles, o as Search, I as Input, D as Dialog, p as DialogTrigger, P as Plus, k as DialogContent, q as DialogHeader, s as DialogTitle, T as Textarea } from "./index-m-9XzHBK.js";
import { L as Label } from "./label-DNPLIKWm.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-BnFOzO8n.js";
import { B as Badge } from "./badge-cznt1m0U.js";
import { P as Package } from "./package-D8SduUuj.js";
import { S as Star } from "./star-BCPUGzI5.js";
import { f as MOCK_PRODUCTS } from "./mockData-BCdBG7qh.js";
import { S as ShoppingBag } from "./shopping-bag-Bb0LqKX_.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7", key: "ztvudi" }],
  ["path", { d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8", key: "1b2hhj" }],
  ["path", { d: "M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4", key: "2ebpfo" }],
  ["path", { d: "M2 7h20", key: "1fcdvo" }],
  [
    "path",
    {
      d: "M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7",
      key: "6c3vgh"
    }
  ]
];
const Store = createLucideIcon("store", __iconNode);
function ProductCard({
  product,
  index,
  showLiveBadge
}) {
  const [inCart, setInCart] = reactExports.useState(false);
  const [wishlisted, setWishlisted] = reactExports.useState(false);
  const { setCartCount } = useApp();
  const handleAddToCart = () => {
    setInCart(true);
    setCartCount((c) => c + 1);
    ue.success(`${product.title} added to cart!`);
  };
  const handleWishlist = (e) => {
    e.stopPropagation();
    setWishlisted((w) => !w);
    ue(wishlisted ? "Removed from wishlist" : "Added to wishlist ❤️");
  };
  const originalPrice = product.discount ? Math.round(product.price / (1 - product.discount / 100)) : null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      "data-ocid": `marketplace.product.item.${index}`,
      className: "komo-surface rounded-2xl komo-card-shadow overflow-hidden flex flex-col",
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: index * 0.06 },
      whileHover: { y: -4, scale: 1.01 },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden", style: { aspectRatio: "1/1" }, children: [
          product.image ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: product.image,
              alt: product.title,
              className: "w-full h-full object-cover"
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "w-full h-full flex flex-col items-center justify-center",
              style: {
                background: "linear-gradient(135deg, rgba(47,168,255,0.15), rgba(168,85,247,0.15))"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { size: 36, className: "text-komo-text-muted mb-1" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-komo-text-muted", children: product.category })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-2 left-2 flex flex-col gap-1", children: [
            showLiveBadge && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 bg-red-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-white animate-pulse" }),
              "LIVE"
            ] }),
            product.discount && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "text-[9px] px-1.5 py-0.5 bg-emerald-500 text-white border-0 font-bold", children: [
              product.discount,
              "% OFF"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              "data-ocid": `marketplace.wishlist.${index}`,
              onClick: handleWishlist,
              className: "absolute top-2 right-2 w-7 h-7 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center transition-transform hover:scale-110",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Heart,
                {
                  size: 13,
                  className: wishlisted ? "fill-red-400 text-red-400" : "text-white"
                }
              )
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 flex flex-col flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] font-semibold text-foreground line-clamp-2 leading-tight mb-0.5", children: product.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-komo-text-muted mb-1.5 line-clamp-1", children: [
            "by ",
            product.seller
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 mb-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 10, className: "fill-yellow-400 text-yellow-400" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-semibold text-foreground", children: product.rating }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-komo-text-muted", children: [
              "(",
              product.reviews,
              ")"
            ] }),
            product.soldCount && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] text-komo-text-muted ml-auto", children: product.soldCount >= 1e3 ? `${(product.soldCount / 1e3).toFixed(1)}k sold` : `${product.soldCount} sold` })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[15px] font-bold komo-gradient-text", children: [
                "₹",
                product.price.toLocaleString("en-IN")
              ] }),
              originalPrice && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] text-komo-text-muted line-through", children: [
                "₹",
                originalPrice.toLocaleString("en-IN")
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                "data-ocid": `marketplace.add_cart.${index}`,
                className: `w-full h-7 text-[11px] font-semibold ${inCart ? "bg-accent text-komo-blue hover:bg-accent" : "komo-gradient border-0 text-white hover:opacity-90"}`,
                onClick: handleAddToCart,
                disabled: inCart,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { size: 12, className: "mr-1" }),
                  inCart ? "Added ✓" : "Add to Cart"
                ]
              }
            )
          ] })
        ] })
      ]
    }
  );
}
const CATEGORIES = [
  { label: "All", emoji: "🏠" },
  { label: "Electronics", emoji: "📱" },
  { label: "Home & Living", emoji: "🏡" },
  { label: "Creator Tools", emoji: "🎬" },
  { label: "Sports & Fitness", emoji: "💪" },
  { label: "Fashion", emoji: "👗" }
];
const STATS = [
  { icon: "👨‍💼", value: "10K+", label: "Sellers" },
  { icon: "📦", value: "50K+", label: "Products" },
  { icon: "🚚", value: "COD", label: "Cash on Delivery" },
  { icon: "↩️", value: "Free", label: "Returns" }
];
function Marketplace() {
  const [activeCategory, setActiveCategory] = reactExports.useState("All");
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const [sellOpen, setSellOpen] = reactExports.useState(false);
  const [sellForm, setSellForm] = reactExports.useState({
    title: "",
    description: "",
    price: "",
    category: ""
  });
  const { navigate, cartCount } = useApp();
  const hotDeals = MOCK_PRODUCTS.slice(0, 3);
  const filtered = MOCK_PRODUCTS.filter((p) => {
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    const matchSearch = searchQuery.trim() === "" || p.title.toLowerCase().includes(searchQuery.toLowerCase()) || p.seller.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });
  const handleSellSubmit = (e) => {
    e.preventDefault();
    ue.success("Product listed successfully! 🎉");
    setSellOpen(false);
    setSellForm({ title: "", description: "", price: "", category: "" });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto px-3 pb-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between py-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { size: 20, className: "text-komo-blue" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-[18px] font-bold text-foreground", children: "Marketplace" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            "data-ocid": "marketplace.digital_market.button",
            onClick: () => navigate("/digital-market"),
            className: "flex items-center gap-1 px-2.5 py-1.5 rounded-full text-[11px] font-semibold",
            style: {
              background: "linear-gradient(135deg, rgba(168,85,247,0.2), rgba(47,168,255,0.15))",
              border: "1px solid rgba(168,85,247,0.4)",
              color: "#c084fc"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 11 }),
              "Digital 💎"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            "data-ocid": "marketplace.cart.button",
            onClick: () => navigate("/cart"),
            className: "relative flex items-center gap-1.5 px-3 py-1.5 rounded-full komo-gradient text-white text-[12px] font-medium",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { size: 14 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Cart" }),
              cartCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-4 h-4 rounded-full bg-white/25 text-[10px] font-bold flex items-center justify-center", children: cartCount })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: -10 },
        animate: { opacity: 1, y: 0 },
        className: "relative rounded-2xl overflow-hidden mb-4",
        style: {
          background: "linear-gradient(135deg, #1a3a6b 0%, #2d1b69 40%, #4a1a7a 70%, #1e3a5f 100%)",
          minHeight: "140px"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute -top-8 -right-8 w-40 h-40 rounded-full opacity-20",
              style: {
                background: "radial-gradient(circle, #2FA8FF, transparent)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute -bottom-10 left-1/3 w-32 h-32 rounded-full opacity-15",
              style: {
                background: "radial-gradient(circle, #A855F7, transparent)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 p-5 flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold bg-orange-500 text-white px-2 py-0.5 rounded-full animate-pulse", children: "🔥 Flash Sale" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-semibold text-orange-300", children: "50% OFF" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[20px] font-bold text-white leading-tight", children: "🛍️ Komofast Marketplace" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-blue-200 mt-0.5", children: "India ka sab se bada social marketplace" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden sm:flex flex-col items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Store, { size: 40, className: "text-white/30" }) })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "grid grid-cols-4 gap-2 mb-4 p-3 rounded-xl",
        style: {
          background: "linear-gradient(135deg, rgba(47,168,255,0.06), rgba(168,85,247,0.06))",
          border: "1px solid rgba(59,130,246,0.12)"
        },
        children: STATS.map((stat) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[14px]", children: stat.icon }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[12px] font-bold komo-gradient-text", children: stat.value }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-komo-text-muted leading-tight", children: stat.label })
        ] }, stat.label))
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Search,
        {
          size: 15,
          className: "absolute left-3 top-1/2 -translate-y-1/2 text-komo-text-muted"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          "data-ocid": "marketplace.search_input",
          value: searchQuery,
          onChange: (e) => setSearchQuery(e.target.value),
          placeholder: "Search products, sellers...",
          className: "pl-9 h-9 text-[13px] rounded-xl border-komo-border bg-accent/50"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 overflow-x-auto pb-2 mb-5 scrollbar-hide", children: CATEGORIES.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.button,
      {
        "data-ocid": "marketplace.category.tab",
        onClick: () => setActiveCategory(cat.label),
        className: `px-3 py-1.5 rounded-full text-[12px] font-medium whitespace-nowrap transition-all flex-shrink-0 flex items-center gap-1 ${activeCategory === cat.label ? "komo-gradient text-white shadow-sm" : "bg-accent text-komo-text-secondary hover:text-foreground border border-komo-border"}`,
        whileTap: { scale: 0.95 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: cat.emoji }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: cat.label })
        ]
      },
      cat.label
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[15px] font-bold text-foreground", children: "🔥 Hot Deals" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-komo-text-muted", children: "Limited time offers" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3 overflow-x-auto pb-2 scrollbar-hide", children: hotDeals.map((product, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: 20 },
          animate: { opacity: 1, x: 0 },
          transition: { delay: i * 0.1 },
          className: "flex-shrink-0 w-48 komo-surface rounded-xl komo-card-shadow overflow-hidden",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", style: { aspectRatio: "4/3" }, children: [
              product.image ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: product.image,
                  alt: product.title,
                  className: "w-full h-full object-cover"
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-full h-full flex items-center justify-center",
                  style: {
                    background: "linear-gradient(135deg, rgba(47,168,255,0.15), rgba(168,85,247,0.15))"
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { size: 28, className: "text-komo-text-muted" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-2 left-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-bold bg-red-500 text-white px-1.5 py-0.5 rounded-full", children: "SALE" }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-semibold text-foreground line-clamp-1 mb-1", children: product.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[13px] font-bold komo-gradient-text", children: [
                  "₹",
                  product.price.toLocaleString("en-IN")
                ] }),
                product.discount && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[9px] bg-emerald-500/15 text-emerald-400 px-1 py-0.5 rounded font-semibold", children: [
                  "-",
                  product.discount,
                  "%"
                ] })
              ] })
            ] })
          ]
        },
        product.id
      )) })
    ] }),
    filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "marketplace.empty_state", className: "text-center py-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ShoppingBag,
        {
          size: 48,
          className: "text-komo-text-muted mx-auto mb-3"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground font-semibold", children: "No products found" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-komo-text-muted mt-1", children: "Try a different category or search" })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3", children: filtered.map((product, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      ProductCard,
      {
        product,
        index: i + 1,
        showLiveBadge: i < 2
      },
      product.id
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "mt-8 p-4 rounded-2xl text-center",
        style: {
          background: "linear-gradient(135deg, rgba(47,168,255,0.05), rgba(168,85,247,0.05))",
          border: "1px solid rgba(59,130,246,0.12)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-komo-text-muted", children: "📦 Cash on Delivery available • Free returns within 7 days • Secure payments" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-komo-text-muted mt-1", children: [
            "© ",
            (/* @__PURE__ */ new Date()).getFullYear(),
            ". Built with love using",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "underline hover:text-komo-blue",
                children: "caffeine.ai"
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open: sellOpen, onOpenChange: setSellOpen, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.button,
        {
          type: "button",
          "data-ocid": "marketplace.sell.open_modal_button",
          className: "fixed bottom-20 right-4 z-50 flex items-center gap-2 px-4 py-3 rounded-full text-white text-[13px] font-bold shadow-lg",
          style: {
            background: "linear-gradient(135deg, #2FA8FF, #A855F7)",
            boxShadow: "0 4px 20px rgba(168,85,247,0.5)"
          },
          whileHover: { scale: 1.05 },
          whileTap: { scale: 0.95 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 16 }),
            "Sell"
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        DialogContent,
        {
          "data-ocid": "marketplace.sell.dialog",
          className: "sm:max-w-md",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 18, className: "text-komo-blue" }),
              "List Your Product"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSellSubmit, className: "space-y-4 mt-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[12px] mb-1 block", children: "Product Name *" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    "data-ocid": "marketplace.sell.title.input",
                    placeholder: "e.g. Handloom Kurta Set",
                    value: sellForm.title,
                    onChange: (e) => setSellForm((f) => ({ ...f, title: e.target.value })),
                    required: true
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[12px] mb-1 block", children: "Description *" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Textarea,
                  {
                    "data-ocid": "marketplace.sell.description.textarea",
                    placeholder: "Describe your product...",
                    value: sellForm.description,
                    onChange: (e) => setSellForm((f) => ({ ...f, description: e.target.value })),
                    rows: 3,
                    required: true
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[12px] mb-1 block", children: "Price (₹) *" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      "data-ocid": "marketplace.sell.price.input",
                      type: "number",
                      placeholder: "e.g. 999",
                      value: sellForm.price,
                      onChange: (e) => setSellForm((f) => ({ ...f, price: e.target.value })),
                      required: true
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[12px] mb-1 block", children: "Category *" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Select,
                    {
                      value: sellForm.category,
                      onValueChange: (v) => setSellForm((f) => ({ ...f, category: v })),
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { "data-ocid": "marketplace.sell.category.select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select" }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Electronics", children: "📱 Electronics" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Home & Living", children: "🏡 Home & Living" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Creator Tools", children: "🎬 Creator Tools" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Sports & Fitness", children: "💪 Sports & Fitness" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Fashion", children: "👗 Fashion" })
                        ] })
                      ]
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 pt-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    type: "button",
                    variant: "outline",
                    "data-ocid": "marketplace.sell.cancel_button",
                    className: "flex-1",
                    onClick: () => setSellOpen(false),
                    children: "Cancel"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    type: "submit",
                    "data-ocid": "marketplace.sell.submit_button",
                    className: "flex-1 komo-gradient text-white border-0",
                    children: "List Product 🚀"
                  }
                )
              ] })
            ] })
          ]
        }
      )
    ] })
  ] });
}
export {
  Marketplace as default
};
