import { u as useApp, r as reactExports, j as jsxRuntimeExports, m as motion, l as ShoppingCart, b as ue, I as Input, T as Textarea, B as Button } from "./index-m-9XzHBK.js";
import { B as Badge } from "./badge-cznt1m0U.js";
import { L as Label } from "./label-DNPLIKWm.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-BnFOzO8n.js";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-DaPSxr7p.js";
import { A as ArrowLeft } from "./arrow-left-MlK4V-5g.js";
import { I as IndianRupee } from "./indian-rupee-DNxjxjo7.js";
import { P as Package } from "./package-D8SduUuj.js";
import { S as Star } from "./star-BCPUGzI5.js";
import { D as Download } from "./download-DsuTF61L.js";
import { C as CirclePlus, U as Upload } from "./upload-BODdUrzU.js";
const CATEGORIES = [
  "All",
  "eBooks",
  "Presets/LUTs",
  "Templates",
  "Music/Beats",
  "Courses",
  "Art/Design"
];
const PRODUCTS = [
  {
    id: 1,
    title: "50 Cinematic LUT Pack",
    creator: "VisualsByRahul",
    category: "Presets/LUTs",
    price: 299,
    downloads: "4.2K",
    rating: 4.8,
    emoji: "🎨",
    color: "#2fa8ff",
    gradient: "linear-gradient(135deg, #1a3a5c, #2fa8ff35)"
  },
  {
    id: 2,
    title: "Personal Finance Mastery eBook",
    creator: "MoneyGuruIndia",
    category: "eBooks",
    price: 149,
    downloads: "8.7K",
    rating: 4.9,
    emoji: "📚",
    color: "#f59e0b",
    gradient: "linear-gradient(135deg, #3d2800, #f59e0b35)"
  },
  {
    id: 3,
    title: "Instagram Reels Templates Pack",
    creator: "CreativeSneha",
    category: "Templates",
    price: 199,
    downloads: "12.3K",
    rating: 4.7,
    emoji: "📐",
    color: "#a855f7",
    gradient: "linear-gradient(135deg, #2d1b4e, #a855f735)"
  },
  {
    id: 4,
    title: "Bollywood Trap Beat Pack",
    creator: "BeatsByArjun",
    category: "Music/Beats",
    price: 499,
    downloads: "2.1K",
    rating: 4.6,
    emoji: "🎵",
    color: "#ec4899",
    gradient: "linear-gradient(135deg, #3d0a25, #ec489935)"
  },
  {
    id: 5,
    title: "Python for Beginners - Complete Course",
    creator: "TechMasterKumar",
    category: "Courses",
    price: 799,
    downloads: "6.4K",
    rating: 4.9,
    emoji: "🐍",
    color: "#10b981",
    gradient: "linear-gradient(135deg, #0a2e20, #10b98135)"
  },
  {
    id: 6,
    title: "Minimalist UI Design Kit",
    creator: "DesignByPriya",
    category: "Art/Design",
    price: 399,
    downloads: "3.8K",
    rating: 4.7,
    emoji: "🖼️",
    color: "#6366f1",
    gradient: "linear-gradient(135deg, #1a1a3e, #6366f135)"
  },
  {
    id: 7,
    title: "Social Media Calendar Template",
    creator: "GrowthHackDev",
    category: "Templates",
    price: 99,
    downloads: "15.6K",
    rating: 4.5,
    emoji: "📅",
    color: "#14b8a6",
    gradient: "linear-gradient(135deg, #0a2e2e, #14b8a635)"
  },
  {
    id: 8,
    title: "Hindi Copywriting Masterclass",
    creator: "ContentQueenAnita",
    category: "Courses",
    price: 599,
    downloads: "1.9K",
    rating: 4.8,
    emoji: "✍️",
    color: "#f97316",
    gradient: "linear-gradient(135deg, #3d1a00, #f9731635)"
  },
  {
    id: 9,
    title: "Portrait Photography Presets",
    creator: "LensManVijay",
    category: "Presets/LUTs",
    price: 249,
    downloads: "5.1K",
    rating: 4.6,
    emoji: "📸",
    color: "#8b5cf6",
    gradient: "linear-gradient(135deg, #2a1a4e, #8b5cf635)"
  },
  {
    id: 10,
    title: "Digital Art Illustration Pack",
    creator: "ArtByShruti",
    category: "Art/Design",
    price: 349,
    downloads: "2.8K",
    rating: 4.9,
    emoji: "🎭",
    color: "#d946ef",
    gradient: "linear-gradient(135deg, #3d0a3d, #d946ef35)"
  }
];
const MY_LISTINGS = [
  {
    id: 1,
    title: "Productivity Templates Bundle",
    price: 249,
    earnings: "₹7,470",
    sales: 30,
    status: "Active",
    color: "#2fa8ff"
  },
  {
    id: 2,
    title: "Daily Vlog Editing Presets",
    price: 179,
    earnings: "₹1,432",
    sales: 8,
    status: "Under Review",
    color: "#a855f7"
  },
  {
    id: 3,
    title: "Business Pitch Deck Template",
    price: 399,
    earnings: "₹0",
    sales: 0,
    status: "Under Review",
    color: "#f59e0b"
  }
];
const STATUS_STYLES = {
  Active: {
    bg: "rgba(16,185,129,0.15)",
    text: "#34d399",
    border: "rgba(16,185,129,0.3)"
  },
  "Under Review": {
    bg: "rgba(245,158,11,0.12)",
    text: "#fbbf24",
    border: "rgba(245,158,11,0.3)"
  }
};
function DigitalMarket() {
  const { navigate } = useApp();
  const [activeCategory, setActiveCategory] = reactExports.useState("All");
  const [listing, setListing] = reactExports.useState(false);
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.06 } }
  };
  const item = {
    hidden: { opacity: 0, y: 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.32, ease: "easeOut" }
    }
  };
  const filtered = activeCategory === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.category === activeCategory);
  function handleListProduct() {
    setListing(true);
    setTimeout(() => {
      setListing(false);
      ue.success("Product listed successfully! 💎", {
        description: "Your product is under review and will be live within 24 hours.",
        duration: 5e3
      });
    }, 1500);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto px-4 py-4 pb-10", children: [
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
              "data-ocid": "digital_market.back.button",
              className: "w-9 h-9 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 transition-colors text-komo-text-secondary",
              onClick: () => navigate("/marketplace"),
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 18 })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-[20px] font-bold komo-gradient-text leading-tight", children: "Digital Market 💎" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-komo-text-muted", children: "Buy & Sell Digital Products" })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "browse", className: "w-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        TabsList,
        {
          className: "w-full mb-5 rounded-xl h-10 grid grid-cols-2",
          style: {
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.08)"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              TabsTrigger,
              {
                "data-ocid": "digital_market.browse.tab",
                value: "browse",
                className: "rounded-lg text-[12px] font-medium",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { size: 13, className: "mr-1" }),
                  " Browse"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              TabsTrigger,
              {
                "data-ocid": "digital_market.sell.tab",
                value: "sell",
                className: "rounded-lg text-[12px] font-medium",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(IndianRupee, { size: 13, className: "mr-1" }),
                  " Sell"
                ]
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "browse", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          variants: container,
          initial: "hidden",
          animate: "show",
          className: "space-y-4",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                variants: item,
                className: "flex gap-2 overflow-x-auto pb-1 scrollbar-hide",
                children: CATEGORIES.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.button,
                  {
                    "data-ocid": "digital_market.category.tab",
                    onClick: () => setActiveCategory(cat),
                    whileTap: { scale: 0.95 },
                    className: `px-3.5 py-1.5 rounded-full text-[12px] font-medium whitespace-nowrap flex-shrink-0 transition-all ${activeCategory === cat ? "komo-gradient text-white" : "bg-white/5 text-komo-text-secondary border border-white/10 hover:text-foreground"}`,
                    children: cat
                  },
                  cat
                ))
              }
            ),
            filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                "data-ocid": "digital_market.browse.empty_state",
                className: "py-16 text-center",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Package,
                    {
                      size: 44,
                      className: "text-komo-text-muted mx-auto mb-3"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground font-semibold", children: "No products in this category" })
                ]
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3", children: filtered.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                variants: item,
                "data-ocid": `digital_market.product.item.${i + 1}`,
                className: "rounded-2xl overflow-hidden flex flex-col",
                style: {
                  background: p.gradient,
                  border: `1px solid ${p.color}30`
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "h-24 flex items-center justify-center text-4xl",
                      style: { background: `${p.color}15` },
                      children: p.emoji
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 flex flex-col gap-1.5 flex-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] font-bold text-foreground line-clamp-2 leading-snug", children: p.title }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-komo-text-muted", children: [
                      "by ",
                      p.creator
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "span",
                        {
                          className: "flex items-center gap-0.5 text-[10px]",
                          style: { color: "#f59e0b" },
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 9, fill: "#f59e0b" }),
                            p.rating
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-0.5 text-[10px] text-komo-text-muted", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { size: 9 }),
                        p.downloads
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mt-auto pt-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "span",
                        {
                          className: "text-[14px] font-bold",
                          style: { color: p.color },
                          children: [
                            "₹",
                            p.price
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          type: "button",
                          "data-ocid": "digital_market.buy.button",
                          className: "px-3 py-1.5 rounded-lg text-[11px] font-semibold text-white",
                          style: {
                            background: `linear-gradient(135deg, ${p.color}, ${p.color}cc)`,
                            boxShadow: `0 2px 8px ${p.color}40`
                          },
                          onClick: () => ue.success("Added to cart! 🛒", {
                            description: p.title
                          }),
                          children: "Buy Now"
                        }
                      )
                    ] })
                  ] })
                ]
              },
              p.id
            )) })
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "sell", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
                className: "rounded-2xl p-5",
                style: {
                  background: "linear-gradient(135deg, rgba(47,168,255,0.07), rgba(168,85,247,0.07))",
                  border: "1px solid rgba(168,85,247,0.2)"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CirclePlus, { size: 18, className: "text-komo-purple" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[15px] font-bold text-foreground", children: "List a Digital Product" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[12px] text-komo-text-secondary mb-1.5 block", children: "Product Title *" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Input,
                        {
                          "data-ocid": "digital_market.product_title.input",
                          placeholder: "Give your product a name...",
                          className: "bg-white/5 border-white/10 text-foreground placeholder:text-komo-text-muted rounded-xl"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[12px] text-komo-text-secondary mb-1.5 block", children: "Description *" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Textarea,
                        {
                          "data-ocid": "digital_market.product_desc.textarea",
                          placeholder: "Describe your product, what's included, how to use...",
                          className: "bg-white/5 border-white/10 text-foreground placeholder:text-komo-text-muted rounded-xl resize-none",
                          rows: 3
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[12px] text-komo-text-secondary mb-1.5 block", children: "Category" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            SelectTrigger,
                            {
                              "data-ocid": "digital_market.category.select",
                              className: "bg-white/5 border-white/10 text-foreground rounded-xl",
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select" })
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: [
                            "eBooks",
                            "Presets/LUTs",
                            "Templates",
                            "Music/Beats",
                            "Courses",
                            "Art/Design"
                          ].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: c, children: c }, c)) })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[12px] text-komo-text-secondary mb-1.5 block", children: "File Type" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            SelectTrigger,
                            {
                              "data-ocid": "digital_market.filetype.select",
                              className: "bg-white/5 border-white/10 text-foreground rounded-xl",
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select" })
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: ["PDF", "MP3", "ZIP", "PNG", "MP4", "PSD"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: t, children: t }, t)) })
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[12px] text-komo-text-secondary mb-1.5 block", children: "Price (₹) *" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          IndianRupee,
                          {
                            size: 14,
                            className: "absolute left-3 top-1/2 -translate-y-1/2 text-komo-text-muted"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Input,
                          {
                            "data-ocid": "digital_market.price.input",
                            type: "number",
                            placeholder: "199",
                            className: "bg-white/5 border-white/10 text-foreground placeholder:text-komo-text-muted rounded-xl pl-9"
                          }
                        )
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: "flex items-center gap-3 p-3 rounded-xl cursor-pointer hover:bg-white/5 transition-colors",
                        style: {
                          background: "rgba(255,255,255,0.03)",
                          border: "1px solid rgba(255,255,255,0.07)"
                        },
                        onClick: () => ue.info("File upload would open here"),
                        onKeyDown: (e) => e.key === "Enter" && ue.info("File upload would open here"),
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "div",
                            {
                              className: "w-10 h-10 rounded-lg flex items-center justify-center",
                              style: { background: "rgba(47,168,255,0.12)" },
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { size: 18, className: "text-komo-blue" })
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-medium text-foreground", children: "Upload Product File" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-komo-text-muted", children: "PDF, ZIP, MP3, PNG, PSD · Max 100MB" })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "button",
                            {
                              type: "button",
                              "data-ocid": "digital_market.file.upload_button",
                              className: "ml-auto text-[12px] text-komo-blue font-semibold",
                              children: "Upload"
                            }
                          )
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
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
                              style: { background: "rgba(168,85,247,0.12)" },
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { size: 18, className: "text-komo-purple" })
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-medium text-foreground", children: "Upload Thumbnail" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-komo-text-muted", children: "JPG, PNG · Recommended 600×400" })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "button",
                            {
                              type: "button",
                              "data-ocid": "digital_market.thumbnail.upload_button",
                              className: "ml-auto text-[12px] text-komo-purple font-semibold",
                              children: "Choose"
                            }
                          )
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      "data-ocid": "digital_market.list_product.primary_button",
                      className: "w-full komo-gradient border-0 text-white font-bold text-[15px] rounded-2xl mt-4",
                      style: {
                        height: "50px",
                        boxShadow: "0 4px 20px rgba(168,85,247,0.3)"
                      },
                      disabled: listing,
                      onClick: handleListProduct,
                      children: listing ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" }),
                        "Listing Product..."
                      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(CirclePlus, { size: 17 }),
                        " List Product"
                      ] })
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: item, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[14px] font-bold text-foreground mb-3 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { size: 15, className: "text-komo-blue" }),
                " My Listings"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: MY_LISTINGS.map((l, i) => {
                var _a, _b, _c;
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    "data-ocid": `digital_market.listing.item.${i + 1}`,
                    className: "rounded-xl p-4 flex items-center gap-3",
                    style: {
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0",
                          style: { background: `${l.color}18` },
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { size: 18, style: { color: l.color } })
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-semibold text-foreground line-clamp-1", children: l.title }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-komo-text-muted mt-0.5", children: [
                          "₹",
                          l.price,
                          " · ",
                          l.sales,
                          " sales ·",
                          " ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: l.color }, children: l.earnings })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Badge,
                        {
                          className: "text-[10px] px-2.5 border-0 flex-shrink-0",
                          style: {
                            background: (_a = STATUS_STYLES[l.status]) == null ? void 0 : _a.bg,
                            color: (_b = STATUS_STYLES[l.status]) == null ? void 0 : _b.text,
                            border: `1px solid ${(_c = STATUS_STYLES[l.status]) == null ? void 0 : _c.border}`
                          },
                          children: l.status
                        }
                      )
                    ]
                  },
                  l.id
                );
              }) })
            ] })
          ]
        }
      ) })
    ] })
  ] });
}
export {
  DigitalMarket as default
};
