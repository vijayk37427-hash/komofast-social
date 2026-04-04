import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeft, Minus, Plus, ShoppingCart, Trash2, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { useApp } from "../context/AppContext";

const PRODUCTS = [
  {
    id: "tshirt",
    name: "KomoFast T-Shirt",
    nameHindi: "टी-शर्ट",
    price: 499,
    emoji: "👕",
    color: "from-blue-600 to-purple-600",
    stock: true,
  },
  {
    id: "hoodie",
    name: "Creator Hoodie",
    nameHindi: "हूडी",
    price: 999,
    emoji: "🧥",
    color: "from-purple-700 to-indigo-800",
    stock: true,
  },
  {
    id: "cap",
    name: "KomoFast Cap",
    nameHindi: "कैप",
    price: 299,
    emoji: "🧢",
    color: "from-cyan-600 to-blue-700",
    stock: true,
  },
  {
    id: "mug",
    name: "Creator Mug",
    nameHindi: "मग",
    price: 199,
    emoji: "☕",
    color: "from-amber-600 to-orange-700",
    stock: true,
  },
  {
    id: "phonecase",
    name: "Phone Case",
    nameHindi: "फोन केस",
    price: 349,
    emoji: "📱",
    color: "from-rose-600 to-pink-700",
    stock: true,
  },
  {
    id: "notebook",
    name: "Creator Notebook",
    nameHindi: "नोटबुक",
    price: 149,
    emoji: "📓",
    color: "from-green-700 to-teal-700",
    stock: false,
  },
];

const SIZES = ["S", "M", "L", "XL"];

type CartItem = {
  id: string;
  name: string;
  price: number;
  size: string;
  qty: number;
  emoji: string;
};

export default function MerchStore() {
  const { navigate } = useApp();
  const [cart, setCart] = useState<CartItem[]>([]);
  const [sizes, setSizes] = useState<Record<string, string>>({});
  const [cartOpen, setCartOpen] = useState(false);
  const [payModal, setPayModal] = useState(false);
  const [upiId, setUpiId] = useState("");
  const [paying, setPaying] = useState(false);

  const cartTotal = cart.reduce((acc, i) => acc + i.price * i.qty, 0);
  const cartCount = cart.reduce((acc, i) => acc + i.qty, 0);

  const addToCart = (product: (typeof PRODUCTS)[0]) => {
    const size = sizes[product.id] || "M";
    setCart((prev) => {
      const existing = prev.find((i) => i.id === product.id && i.size === size);
      if (existing)
        return prev.map((i) =>
          i.id === product.id && i.size === size ? { ...i, qty: i.qty + 1 } : i,
        );
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          size,
          qty: 1,
          emoji: product.emoji,
        },
      ];
    });
    toast.success(`${product.emoji} Cart में add हुआ!`);
  };

  const removeFromCart = (id: string, size: string) =>
    setCart((prev) => prev.filter((i) => !(i.id === id && i.size === size)));

  const handleCheckout = () => {
    if (!upiId.trim()) {
      toast.error("UPI ID डालें");
      return;
    }
    setPaying(true);
    setTimeout(() => {
      setPaying(false);
      setPayModal(false);
      setCart([]);
      toast.success("Order placed! 2-5 दिन में deliver होगा 🎉");
    }, 1800);
  };

  return (
    <div
      className="min-h-screen px-4 py-6 pb-32"
      style={{ background: "linear-gradient(180deg,#0B0F14 0%,#11161D 100%)" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center"
            data-ocid="merch.back_button"
          >
            <ArrowLeft size={18} className="text-white" />
          </button>
          <div>
            <h1 className="text-white text-xl font-bold">मर्च स्टोर</h1>
            <p className="text-white/50 text-xs">KomoFast Merch Store</p>
          </div>
        </div>
        <button
          type="button"
          data-ocid="merch.cart.open_modal_button"
          onClick={() => setCartOpen(true)}
          className="relative w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"
        >
          <ShoppingCart size={18} className="text-white" />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-purple-600 text-white text-[10px] font-bold flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </button>
      </div>

      {/* Hero */}
      <div
        className="rounded-2xl p-4 mb-6 flex items-center gap-4"
        style={{ background: "linear-gradient(135deg,#1e1b4b,#312e81)" }}
      >
        <div className="text-4xl">🛍️</div>
        <div>
          <h2 className="text-white font-bold">Official KomoFast Merch</h2>
          <p className="text-white/60 text-xs">Wear your creator pride</p>
        </div>
        <Badge className="ml-auto bg-yellow-500/20 text-yellow-400 border-yellow-500/30 text-[10px]">
          FREE DELIVERY ₹999+
        </Badge>
      </div>

      {/* Products */}
      <div className="grid grid-cols-2 gap-3">
        {PRODUCTS.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.07 }}
            className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden"
            data-ocid={`merch.product.item.${i + 1}`}
          >
            {/* Product image placeholder */}
            <div
              className={`h-32 bg-gradient-to-br ${p.color} flex items-center justify-center text-5xl relative`}
            >
              {p.emoji}
              {!p.stock && (
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                  <span className="text-white/80 text-xs font-bold">
                    Out of Stock
                  </span>
                </div>
              )}
            </div>
            <div className="p-3">
              <p className="text-white text-xs font-semibold mb-0.5">
                {p.name}
              </p>
              <p className="text-white/40 text-[10px] mb-2">{p.nameHindi}</p>
              <p className="text-purple-400 font-bold text-sm mb-2">
                ₹{p.price}
              </p>
              {(p.id === "tshirt" || p.id === "hoodie") && (
                <Select
                  value={sizes[p.id] || "M"}
                  onValueChange={(v) =>
                    setSizes((prev) => ({ ...prev, [p.id]: v }))
                  }
                >
                  <SelectTrigger
                    className="h-7 text-[10px] bg-white/5 border-white/10 text-white mb-2"
                    data-ocid={`merch.size_${p.id}.select`}
                  >
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-[#1a1f2e] border-white/10">
                    {SIZES.map((s) => (
                      <SelectItem
                        key={s}
                        value={s}
                        className="text-white text-xs"
                      >
                        {s}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
              <button
                type="button"
                data-ocid={`merch.add_to_cart.primary_button.${i + 1}`}
                onClick={() => p.stock && addToCart(p)}
                disabled={!p.stock}
                className={`w-full py-1.5 rounded-lg text-white text-xs font-semibold transition-all ${
                  p.stock
                    ? "bg-gradient-to-r from-blue-600 to-purple-600"
                    : "bg-white/10 text-white/30 cursor-not-allowed"
                }`}
              >
                {p.stock ? "+ Cart में Add" : "Unavailable"}
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Cart bottom sheet */}
      <AnimatePresence>
        {cartOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setCartOpen(false)}
            />
            <motion.div
              className="fixed bottom-0 left-0 right-0 z-50 bg-[#12161e] rounded-t-3xl border-t border-white/10 p-5 pb-8 max-h-[70vh] overflow-y-auto"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              data-ocid="merch.cart.sheet"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-bold flex items-center gap-2">
                  <ShoppingCart size={16} /> Cart ({cartCount} items)
                </h3>
                <button
                  type="button"
                  onClick={() => setCartOpen(false)}
                  className="text-white/50"
                  data-ocid="merch.cart.close_button"
                >
                  <X size={18} />
                </button>
              </div>
              {cart.length === 0 ? (
                <div
                  className="text-center py-8"
                  data-ocid="merch.cart.empty_state"
                >
                  <div className="text-4xl mb-2">🛒</div>
                  <p className="text-white/40 text-sm">Cart खाली है</p>
                </div>
              ) : (
                <>
                  <div className="space-y-3 mb-4">
                    {cart.map((item) => (
                      <div
                        key={`${item.id}-${item.size}`}
                        className="flex items-center gap-3 bg-white/5 rounded-xl p-3"
                      >
                        <span className="text-2xl">{item.emoji}</span>
                        <div className="flex-1">
                          <p className="text-white text-sm font-semibold">
                            {item.name}
                          </p>
                          <p className="text-white/40 text-xs">
                            Size: {item.size} × {item.qty}
                          </p>
                        </div>
                        <p className="text-purple-400 font-bold text-sm">
                          ₹{item.price * item.qty}
                        </p>
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.id, item.size)}
                          className="text-white/30 hover:text-red-400"
                          data-ocid="merch.cart.delete_button"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-white/10 pt-3 mb-4">
                    <div className="flex justify-between">
                      <span className="text-white/60">Total</span>
                      <span className="text-white font-bold text-lg">
                        ₹{cartTotal}
                      </span>
                    </div>
                  </div>
                  <button
                    type="button"
                    data-ocid="merch.checkout.primary_button"
                    onClick={() => {
                      setCartOpen(false);
                      setPayModal(true);
                    }}
                    className="w-full py-3 rounded-xl text-white font-bold bg-gradient-to-r from-blue-600 to-purple-600"
                  >
                    Checkout — ₹{cartTotal}
                  </button>
                </>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Pay Modal */}
      <AnimatePresence>
        {payModal && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/70 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setPayModal(false)}
            />
            <motion.div
              className="fixed bottom-0 left-0 right-0 z-50 bg-[#12161e] rounded-t-3xl p-5 pb-8 border-t border-white/10"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              data-ocid="merch.payment.dialog"
            >
              <h3 className="text-white font-bold text-lg mb-4">💳 Payment</h3>
              <div className="bg-purple-600/20 rounded-xl p-3 mb-4">
                <p className="text-white/60 text-xs">Total Amount</p>
                <p className="text-white font-bold text-2xl">₹{cartTotal}</p>
              </div>
              <label
                htmlFor="merch-upi"
                className="text-white/60 text-xs mb-1.5 block"
              >
                UPI ID डालें
              </label>
              <Input
                id="merch-upi"
                data-ocid="merch.upi.input"
                placeholder="name@upi"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
                className="bg-white/5 border-white/10 text-white placeholder:text-white/30 mb-4"
              />
              <button
                type="button"
                data-ocid="merch.pay.primary_button"
                onClick={handleCheckout}
                disabled={paying}
                className="w-full py-3 rounded-xl text-white font-bold bg-gradient-to-r from-blue-600 to-purple-600"
              >
                {paying ? "Processing..." : `Pay ₹${cartTotal} & Order`}
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
