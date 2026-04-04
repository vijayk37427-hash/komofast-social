import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ArrowLeft,
  Loader2,
  MapPin,
  Package,
  ShoppingCart,
  Trash2,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { useApp } from "../context/AppContext";
import { MOCK_PRODUCTS } from "../data/mockData";

export default function Cart() {
  const { navigate, setCartCount } = useApp();
  const [items, setItems] = useState(
    MOCK_PRODUCTS.slice(0, 2).map((p, i) => ({ ...p, qty: i + 1 })),
  );
  const [address, setAddress] = useState("");
  const [placing, setPlacing] = useState(false);
  const [ordered, setOrdered] = useState(false);

  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
    setCartCount((c) => Math.max(0, c - 1));
  };

  const handleOrder = async () => {
    if (!address.trim()) {
      toast.error("Please enter a delivery address");
      return;
    }
    setPlacing(true);
    await new Promise((r) => setTimeout(r, 1200));
    setPlacing(false);
    setOrdered(true);
    setCartCount(0);
    toast.success("Order placed! Cash on Delivery.");
  };

  if (ordered) {
    return (
      <div className="max-w-lg mx-auto px-4 py-12 text-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-20 h-20 rounded-full komo-gradient flex items-center justify-center mx-auto mb-4"
        >
          <Package size={36} className="text-white" />
        </motion.div>
        <h2 className="text-[22px] font-bold text-foreground mb-2">
          Order Placed! 🎉
        </h2>
        <p className="text-komo-text-secondary mb-2">
          Your order will be delivered to:
        </p>
        <p className="text-foreground font-medium mb-6">{address}</p>
        <p className="text-[13px] text-komo-text-muted mb-6">
          Payment method: Cash on Delivery
        </p>
        <Button
          data-ocid="cart.continue_shopping.button"
          className="komo-gradient border-0 text-white px-8"
          onClick={() => navigate("/marketplace")}
        >
          Continue Shopping
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto px-4 py-4">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <button
          type="button"
          data-ocid="cart.back.button"
          onClick={() => navigate("/marketplace")}
          className="p-2 rounded-full hover:bg-accent transition-colors"
        >
          <ArrowLeft size={20} className="text-komo-text-secondary" />
        </button>
        <ShoppingCart size={22} className="text-komo-blue" />
        <h1 className="text-[20px] font-bold text-foreground">Your Cart</h1>
        <span className="text-komo-text-muted text-[14px]">
          ({items.length} items)
        </span>
      </div>

      {items.length === 0 ? (
        <div data-ocid="cart.empty_state" className="text-center py-16">
          <ShoppingCart
            size={48}
            className="text-komo-text-muted mx-auto mb-3"
          />
          <p className="text-foreground font-semibold">Your cart is empty</p>
          <p className="text-komo-text-muted text-[13px] mt-1">
            Browse marketplace to add items
          </p>
          <Button
            className="mt-4 komo-gradient border-0 text-white"
            onClick={() => navigate("/marketplace")}
          >
            Browse Marketplace
          </Button>
        </div>
      ) : (
        <>
          {/* Items */}
          <div className="flex flex-col gap-3 mb-6">
            <AnimatePresence>
              {items.map((item, i) => (
                <motion.div
                  key={item.id}
                  data-ocid={`cart.item.${i + 1}`}
                  className="komo-surface rounded-2xl komo-card-shadow p-3 flex items-center gap-3"
                  exit={{ opacity: 0, x: -40, height: 0, marginBottom: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Image */}
                  <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-accent flex items-center justify-center">
                        <Package size={20} className="text-komo-text-muted" />
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <p className="text-[13px] font-semibold text-foreground truncate">
                      {item.title}
                    </p>
                    <p className="text-[12px] text-komo-text-muted">
                      {item.category}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[15px] font-bold komo-gradient-text">
                        ${(item.price * item.qty).toFixed(2)}
                      </span>
                      <span className="text-[11px] text-komo-text-muted">
                        (x{item.qty})
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    data-ocid={`cart.delete_button.${i + 1}`}
                    onClick={() => removeItem(item.id)}
                    className="p-2 rounded-xl hover:bg-destructive/10 text-komo-text-muted hover:text-destructive transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Order summary */}
          <div className="komo-surface rounded-2xl komo-card-shadow p-4 mb-4">
            <h3 className="text-[14px] font-semibold text-foreground mb-3">
              Order Summary
            </h3>
            <div className="space-y-2 text-[13px]">
              <div className="flex justify-between">
                <span className="text-komo-text-secondary">Subtotal</span>
                <span className="text-foreground">${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-komo-text-secondary">Delivery</span>
                <span className="text-green-400 font-medium">FREE</span>
              </div>
              <div className="flex justify-between font-bold text-[15px] pt-2 border-t border-komo-border">
                <span className="text-foreground">Total</span>
                <span className="komo-gradient-text">${total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Delivery address */}
          <div className="komo-surface rounded-2xl komo-card-shadow p-4 mb-6">
            <div className="flex items-center gap-2 mb-3">
              <MapPin size={16} className="text-komo-blue" />
              <h3 className="text-[14px] font-semibold text-foreground">
                Delivery Address
              </h3>
            </div>
            <Input
              data-ocid="cart.address.input"
              placeholder="Enter your full delivery address..."
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="bg-accent border-komo-border text-foreground placeholder:text-komo-text-muted"
            />
            <p className="text-[11px] text-komo-text-muted mt-2 flex items-center gap-1">
              💵 Payment method:{" "}
              <strong className="text-foreground">Cash on Delivery</strong>
            </p>
          </div>

          {/* Place order */}
          <Button
            data-ocid="cart.place_order.button"
            className="w-full h-12 komo-gradient border-0 text-white text-[15px] font-semibold"
            onClick={handleOrder}
            disabled={placing}
          >
            {placing ? (
              <>
                <Loader2 size={18} className="animate-spin mr-2" /> Placing
                Order...
              </>
            ) : (
              <>Place Order (COD) → ${total.toFixed(2)}</>
            )}
          </Button>
        </>
      )}
    </div>
  );
}
