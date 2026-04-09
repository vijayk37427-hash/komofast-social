import { u as useApp, r as reactExports, j as jsxRuntimeExports, l as ShoppingCart, m as motion, A as AnimatePresence, X, I as Input, b as ue } from "./index-BlWpIyR8.js";
import { B as Badge } from "./badge-BChbocV7.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-Bt_vSzJy.js";
import { A as ArrowLeft } from "./arrow-left-C_jsN0fF.js";
import { T as Trash2 } from "./trash-2-BBHB0PWB.js";
const PRODUCTS = [
  {
    id: "tshirt",
    name: "KomoFast T-Shirt",
    nameHindi: "टी-शर्ट",
    price: 499,
    emoji: "👕",
    color: "from-blue-600 to-purple-600",
    stock: true
  },
  {
    id: "hoodie",
    name: "Creator Hoodie",
    nameHindi: "हूडी",
    price: 999,
    emoji: "🧥",
    color: "from-purple-700 to-indigo-800",
    stock: true
  },
  {
    id: "cap",
    name: "KomoFast Cap",
    nameHindi: "कैप",
    price: 299,
    emoji: "🧢",
    color: "from-cyan-600 to-blue-700",
    stock: true
  },
  {
    id: "mug",
    name: "Creator Mug",
    nameHindi: "मग",
    price: 199,
    emoji: "☕",
    color: "from-amber-600 to-orange-700",
    stock: true
  },
  {
    id: "phonecase",
    name: "Phone Case",
    nameHindi: "फोन केस",
    price: 349,
    emoji: "📱",
    color: "from-rose-600 to-pink-700",
    stock: true
  },
  {
    id: "notebook",
    name: "Creator Notebook",
    nameHindi: "नोटबुक",
    price: 149,
    emoji: "📓",
    color: "from-green-700 to-teal-700",
    stock: false
  }
];
const SIZES = ["S", "M", "L", "XL"];
function MerchStore() {
  const { navigate } = useApp();
  const [cart, setCart] = reactExports.useState([]);
  const [sizes, setSizes] = reactExports.useState({});
  const [cartOpen, setCartOpen] = reactExports.useState(false);
  const [payModal, setPayModal] = reactExports.useState(false);
  const [upiId, setUpiId] = reactExports.useState("");
  const [paying, setPaying] = reactExports.useState(false);
  const cartTotal = cart.reduce((acc, i) => acc + i.price * i.qty, 0);
  const cartCount = cart.reduce((acc, i) => acc + i.qty, 0);
  const addToCart = (product) => {
    const size = sizes[product.id] || "M";
    setCart((prev) => {
      const existing = prev.find((i) => i.id === product.id && i.size === size);
      if (existing)
        return prev.map(
          (i) => i.id === product.id && i.size === size ? { ...i, qty: i.qty + 1 } : i
        );
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          size,
          qty: 1,
          emoji: product.emoji
        }
      ];
    });
    ue.success(`${product.emoji} Cart में add हुआ!`);
  };
  const removeFromCart = (id, size) => setCart((prev) => prev.filter((i) => !(i.id === id && i.size === size)));
  const handleCheckout = () => {
    if (!upiId.trim()) {
      ue.error("UPI ID डालें");
      return;
    }
    setPaying(true);
    setTimeout(() => {
      setPaying(false);
      setPayModal(false);
      setCart([]);
      ue.success("Order placed! 2-5 दिन में deliver होगा 🎉");
    }, 1800);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "min-h-screen px-4 py-6 pb-32",
      style: { background: "linear-gradient(180deg,#0B0F14 0%,#11161D 100%)" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => navigate("/"),
                className: "w-9 h-9 rounded-full bg-white/10 flex items-center justify-center",
                "data-ocid": "merch.back_button",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 18, className: "text-white" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-white text-xl font-bold", children: "मर्च स्टोर" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/50 text-xs", children: "KomoFast Merch Store" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              "data-ocid": "merch.cart.open_modal_button",
              onClick: () => setCartOpen(true),
              className: "relative w-10 h-10 rounded-full bg-white/10 flex items-center justify-center",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { size: 18, className: "text-white" }),
                cartCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-1 -right-1 w-5 h-5 rounded-full bg-purple-600 text-white text-[10px] font-bold flex items-center justify-center", children: cartCount })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "rounded-2xl p-4 mb-6 flex items-center gap-4",
            style: { background: "linear-gradient(135deg,#1e1b4b,#312e81)" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl", children: "🛍️" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-white font-bold", children: "Official KomoFast Merch" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/60 text-xs", children: "Wear your creator pride" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "ml-auto bg-yellow-500/20 text-yellow-400 border-yellow-500/30 text-[10px]", children: "FREE DELIVERY ₹999+" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3", children: PRODUCTS.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: i * 0.07 },
            className: "bg-white/5 rounded-2xl border border-white/10 overflow-hidden",
            "data-ocid": `merch.product.item.${i + 1}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: `h-32 bg-gradient-to-br ${p.color} flex items-center justify-center text-5xl relative`,
                  children: [
                    p.emoji,
                    !p.stock && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/60 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/80 text-xs font-bold", children: "Out of Stock" }) })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white text-xs font-semibold mb-0.5", children: p.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/40 text-[10px] mb-2", children: p.nameHindi }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-purple-400 font-bold text-sm mb-2", children: [
                  "₹",
                  p.price
                ] }),
                (p.id === "tshirt" || p.id === "hoodie") && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Select,
                  {
                    value: sizes[p.id] || "M",
                    onValueChange: (v) => setSizes((prev) => ({ ...prev, [p.id]: v })),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        SelectTrigger,
                        {
                          className: "h-7 text-[10px] bg-white/5 border-white/10 text-white mb-2",
                          "data-ocid": `merch.size_${p.id}.select`,
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { className: "bg-[#1a1f2e] border-white/10", children: SIZES.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                        SelectItem,
                        {
                          value: s,
                          className: "text-white text-xs",
                          children: s
                        },
                        s
                      )) })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    "data-ocid": `merch.add_to_cart.primary_button.${i + 1}`,
                    onClick: () => p.stock && addToCart(p),
                    disabled: !p.stock,
                    className: `w-full py-1.5 rounded-lg text-white text-xs font-semibold transition-all ${p.stock ? "bg-gradient-to-r from-blue-600 to-purple-600" : "bg-white/10 text-white/30 cursor-not-allowed"}`,
                    children: p.stock ? "+ Cart में Add" : "Unavailable"
                  }
                )
              ] })
            ]
          },
          p.id
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: cartOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              className: "fixed inset-0 bg-black/60 z-40",
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              onClick: () => setCartOpen(false)
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              className: "fixed bottom-0 left-0 right-0 z-50 bg-[#12161e] rounded-t-3xl border-t border-white/10 p-5 pb-8 max-h-[70vh] overflow-y-auto",
              initial: { y: "100%" },
              animate: { y: 0 },
              exit: { y: "100%" },
              "data-ocid": "merch.cart.sheet",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-white font-bold flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { size: 16 }),
                    " Cart (",
                    cartCount,
                    " items)"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => setCartOpen(false),
                      className: "text-white/50",
                      "data-ocid": "merch.cart.close_button",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 18 })
                    }
                  )
                ] }),
                cart.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "text-center py-8",
                    "data-ocid": "merch.cart.empty_state",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl mb-2", children: "🛒" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/40 text-sm", children: "Cart खाली है" })
                    ]
                  }
                ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3 mb-4", children: cart.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "flex items-center gap-3 bg-white/5 rounded-xl p-3",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: item.emoji }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white text-sm font-semibold", children: item.name }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-white/40 text-xs", children: [
                            "Size: ",
                            item.size,
                            " × ",
                            item.qty
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-purple-400 font-bold text-sm", children: [
                          "₹",
                          item.price * item.qty
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "button",
                          {
                            type: "button",
                            onClick: () => removeFromCart(item.id, item.size),
                            className: "text-white/30 hover:text-red-400",
                            "data-ocid": "merch.cart.delete_button",
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 14 })
                          }
                        )
                      ]
                    },
                    `${item.id}-${item.size}`
                  )) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-white/10 pt-3 mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60", children: "Total" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-white font-bold text-lg", children: [
                      "₹",
                      cartTotal
                    ] })
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      "data-ocid": "merch.checkout.primary_button",
                      onClick: () => {
                        setCartOpen(false);
                        setPayModal(true);
                      },
                      className: "w-full py-3 rounded-xl text-white font-bold bg-gradient-to-r from-blue-600 to-purple-600",
                      children: [
                        "Checkout — ₹",
                        cartTotal
                      ]
                    }
                  )
                ] })
              ]
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: payModal && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              className: "fixed inset-0 bg-black/70 z-50",
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              onClick: () => setPayModal(false)
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              className: "fixed bottom-0 left-0 right-0 z-50 bg-[#12161e] rounded-t-3xl p-5 pb-8 border-t border-white/10",
              initial: { y: "100%" },
              animate: { y: 0 },
              exit: { y: "100%" },
              "data-ocid": "merch.payment.dialog",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-white font-bold text-lg mb-4", children: "💳 Payment" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-purple-600/20 rounded-xl p-3 mb-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/60 text-xs", children: "Total Amount" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-white font-bold text-2xl", children: [
                    "₹",
                    cartTotal
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "label",
                  {
                    htmlFor: "merch-upi",
                    className: "text-white/60 text-xs mb-1.5 block",
                    children: "UPI ID डालें"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "merch-upi",
                    "data-ocid": "merch.upi.input",
                    placeholder: "name@upi",
                    value: upiId,
                    onChange: (e) => setUpiId(e.target.value),
                    className: "bg-white/5 border-white/10 text-white placeholder:text-white/30 mb-4"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    "data-ocid": "merch.pay.primary_button",
                    onClick: handleCheckout,
                    disabled: paying,
                    className: "w-full py-3 rounded-xl text-white font-bold bg-gradient-to-r from-blue-600 to-purple-600",
                    children: paying ? "Processing..." : `Pay ₹${cartTotal} & Order`
                  }
                )
              ]
            }
          )
        ] }) })
      ]
    }
  );
}
export {
  MerchStore as default
};
