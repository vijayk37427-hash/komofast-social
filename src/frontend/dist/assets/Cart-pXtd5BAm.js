import { u as useApp, r as reactExports, j as jsxRuntimeExports, m as motion, B as Button, l as ShoppingCart, A as AnimatePresence, M as MapPin, I as Input, t as LoaderCircle, b as ue } from "./index-m-9XzHBK.js";
import { f as MOCK_PRODUCTS } from "./mockData-BCdBG7qh.js";
import { P as Package } from "./package-D8SduUuj.js";
import { A as ArrowLeft } from "./arrow-left-MlK4V-5g.js";
import { T as Trash2 } from "./trash-2-B7mQNprq.js";
function Cart() {
  const { navigate, setCartCount } = useApp();
  const [items, setItems] = reactExports.useState(
    MOCK_PRODUCTS.slice(0, 2).map((p, i) => ({ ...p, qty: i + 1 }))
  );
  const [address, setAddress] = reactExports.useState("");
  const [placing, setPlacing] = reactExports.useState(false);
  const [ordered, setOrdered] = reactExports.useState(false);
  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const removeItem = (id) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
    setCartCount((c) => Math.max(0, c - 1));
  };
  const handleOrder = async () => {
    if (!address.trim()) {
      ue.error("Please enter a delivery address");
      return;
    }
    setPlacing(true);
    await new Promise((r) => setTimeout(r, 1200));
    setPlacing(false);
    setOrdered(true);
    setCartCount(0);
    ue.success("Order placed! Cash on Delivery.");
  };
  if (ordered) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-lg mx-auto px-4 py-12 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { scale: 0, opacity: 0 },
          animate: { scale: 1, opacity: 1 },
          className: "w-20 h-20 rounded-full komo-gradient flex items-center justify-center mx-auto mb-4",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { size: 36, className: "text-white" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[22px] font-bold text-foreground mb-2", children: "Order Placed! 🎉" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-komo-text-secondary mb-2", children: "Your order will be delivered to:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground font-medium mb-6", children: address }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-komo-text-muted mb-6", children: "Payment method: Cash on Delivery" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          "data-ocid": "cart.continue_shopping.button",
          className: "komo-gradient border-0 text-white px-8",
          onClick: () => navigate("/marketplace"),
          children: "Continue Shopping"
        }
      )
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-lg mx-auto px-4 py-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          "data-ocid": "cart.back.button",
          onClick: () => navigate("/marketplace"),
          className: "p-2 rounded-full hover:bg-accent transition-colors",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 20, className: "text-komo-text-secondary" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { size: 22, className: "text-komo-blue" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-[20px] font-bold text-foreground", children: "Your Cart" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-komo-text-muted text-[14px]", children: [
        "(",
        items.length,
        " items)"
      ] })
    ] }),
    items.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "cart.empty_state", className: "text-center py-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ShoppingCart,
        {
          size: 48,
          className: "text-komo-text-muted mx-auto mb-3"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground font-semibold", children: "Your cart is empty" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-komo-text-muted text-[13px] mt-1", children: "Browse marketplace to add items" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          className: "mt-4 komo-gradient border-0 text-white",
          onClick: () => navigate("/marketplace"),
          children: "Browse Marketplace"
        }
      )
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-3 mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: items.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          "data-ocid": `cart.item.${i + 1}`,
          className: "komo-surface rounded-2xl komo-card-shadow p-3 flex items-center gap-3",
          exit: { opacity: 0, x: -40, height: 0, marginBottom: 0 },
          transition: { duration: 0.2 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-xl overflow-hidden flex-shrink-0", children: item.image ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: item.image,
                alt: item.title,
                className: "w-full h-full object-cover"
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full bg-accent flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { size: 20, className: "text-komo-text-muted" }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-semibold text-foreground truncate", children: item.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-komo-text-muted", children: item.category }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[15px] font-bold komo-gradient-text", children: [
                  "$",
                  (item.price * item.qty).toFixed(2)
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] text-komo-text-muted", children: [
                  "(x",
                  item.qty,
                  ")"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                "data-ocid": `cart.delete_button.${i + 1}`,
                onClick: () => removeItem(item.id),
                className: "p-2 rounded-xl hover:bg-destructive/10 text-komo-text-muted hover:text-destructive transition-colors",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 16 })
              }
            )
          ]
        },
        item.id
      )) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "komo-surface rounded-2xl komo-card-shadow p-4 mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[14px] font-semibold text-foreground mb-3", children: "Order Summary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-[13px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-komo-text-secondary", children: "Subtotal" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-foreground", children: [
              "$",
              total.toFixed(2)
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-komo-text-secondary", children: "Delivery" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-400 font-medium", children: "FREE" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between font-bold text-[15px] pt-2 border-t border-komo-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "Total" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "komo-gradient-text", children: [
              "$",
              total.toFixed(2)
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "komo-surface rounded-2xl komo-card-shadow p-4 mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 16, className: "text-komo-blue" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[14px] font-semibold text-foreground", children: "Delivery Address" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            "data-ocid": "cart.address.input",
            placeholder: "Enter your full delivery address...",
            value: address,
            onChange: (e) => setAddress(e.target.value),
            className: "bg-accent border-komo-border text-foreground placeholder:text-komo-text-muted"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-komo-text-muted mt-2 flex items-center gap-1", children: [
          "💵 Payment method:",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Cash on Delivery" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          "data-ocid": "cart.place_order.button",
          className: "w-full h-12 komo-gradient border-0 text-white text-[15px] font-semibold",
          onClick: handleOrder,
          disabled: placing,
          children: placing ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { size: 18, className: "animate-spin mr-2" }),
            " Placing Order..."
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            "Place Order (COD) → $",
            total.toFixed(2)
          ] })
        }
      )
    ] })
  ] });
}
export {
  Cart as default
};
