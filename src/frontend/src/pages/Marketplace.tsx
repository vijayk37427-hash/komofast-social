import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Package,
  Plus,
  Search,
  ShoppingBag,
  ShoppingCart,
  Sparkles,
  Store,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import ProductCard from "../components/marketplace/ProductCard";
import { useApp } from "../context/AppContext";
import { MOCK_PRODUCTS } from "../data/mockData";

const CATEGORIES = [
  { label: "All", emoji: "🏠" },
  { label: "Electronics", emoji: "📱" },
  { label: "Home & Living", emoji: "🏡" },
  { label: "Creator Tools", emoji: "🎬" },
  { label: "Sports & Fitness", emoji: "💪" },
  { label: "Fashion", emoji: "👗" },
];

const STATS = [
  { icon: "👨‍💼", value: "10K+", label: "Sellers" },
  { icon: "📦", value: "50K+", label: "Products" },
  { icon: "🚚", value: "COD", label: "Cash on Delivery" },
  { icon: "↩️", value: "Free", label: "Returns" },
];

export default function Marketplace() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sellOpen, setSellOpen] = useState(false);
  const [sellForm, setSellForm] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
  });
  const { navigate, cartCount } = useApp();

  const hotDeals = MOCK_PRODUCTS.slice(0, 3);

  const filtered = MOCK_PRODUCTS.filter((p) => {
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    const matchSearch =
      searchQuery.trim() === "" ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.seller.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  const handleSellSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Product listed successfully! 🎉");
    setSellOpen(false);
    setSellForm({ title: "", description: "", price: "", category: "" });
  };

  return (
    <div className="max-w-5xl mx-auto px-3 pb-24">
      {/* Header */}
      <div className="flex items-center justify-between py-3">
        <div className="flex items-center gap-2">
          <ShoppingBag size={20} className="text-komo-blue" />
          <h1 className="text-[18px] font-bold text-foreground">Marketplace</h1>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            data-ocid="marketplace.digital_market.button"
            onClick={() => navigate("/digital-market")}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-full text-[11px] font-semibold"
            style={{
              background:
                "linear-gradient(135deg, rgba(168,85,247,0.2), rgba(47,168,255,0.15))",
              border: "1px solid rgba(168,85,247,0.4)",
              color: "#c084fc",
            }}
          >
            <Sparkles size={11} />
            Digital 💎
          </button>
          <button
            type="button"
            data-ocid="marketplace.cart.button"
            onClick={() => navigate("/cart")}
            className="relative flex items-center gap-1.5 px-3 py-1.5 rounded-full komo-gradient text-white text-[12px] font-medium"
          >
            <ShoppingCart size={14} />
            <span>Cart</span>
            {cartCount > 0 && (
              <span className="w-4 h-4 rounded-full bg-white/25 text-[10px] font-bold flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Hero Banner */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative rounded-2xl overflow-hidden mb-4"
        style={{
          background:
            "linear-gradient(135deg, #1a3a6b 0%, #2d1b69 40%, #4a1a7a 70%, #1e3a5f 100%)",
          minHeight: "140px",
        }}
      >
        {/* Decorative circles */}
        <div
          className="absolute -top-8 -right-8 w-40 h-40 rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, #2FA8FF, transparent)",
          }}
        />
        <div
          className="absolute -bottom-10 left-1/3 w-32 h-32 rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, #A855F7, transparent)",
          }}
        />
        <div className="relative z-10 p-5 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-bold bg-orange-500 text-white px-2 py-0.5 rounded-full animate-pulse">
                🔥 Flash Sale
              </span>
              <span className="text-[10px] font-semibold text-orange-300">
                50% OFF
              </span>
            </div>
            <h2 className="text-[20px] font-bold text-white leading-tight">
              🛍️ Komofast Marketplace
            </h2>
            <p className="text-[12px] text-blue-200 mt-0.5">
              India ka sab se bada social marketplace
            </p>
          </div>
          <div className="hidden sm:flex flex-col items-center">
            <Store size={40} className="text-white/30" />
          </div>
        </div>
      </motion.div>

      {/* Stats bar */}
      <div
        className="grid grid-cols-4 gap-2 mb-4 p-3 rounded-xl"
        style={{
          background:
            "linear-gradient(135deg, rgba(47,168,255,0.06), rgba(168,85,247,0.06))",
          border: "1px solid rgba(59,130,246,0.12)",
        }}
      >
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-[14px]">{stat.icon}</div>
            <div className="text-[12px] font-bold komo-gradient-text">
              {stat.value}
            </div>
            <div className="text-[9px] text-komo-text-muted leading-tight">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Search */}
      <div className="relative mb-4">
        <Search
          size={15}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-komo-text-muted"
        />
        <Input
          data-ocid="marketplace.search_input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search products, sellers..."
          className="pl-9 h-9 text-[13px] rounded-xl border-komo-border bg-accent/50"
        />
      </div>

      {/* Category tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-5 scrollbar-hide">
        {CATEGORIES.map((cat) => (
          <motion.button
            key={cat.label}
            data-ocid="marketplace.category.tab"
            onClick={() => setActiveCategory(cat.label)}
            className={`px-3 py-1.5 rounded-full text-[12px] font-medium whitespace-nowrap transition-all flex-shrink-0 flex items-center gap-1 ${
              activeCategory === cat.label
                ? "komo-gradient text-white shadow-sm"
                : "bg-accent text-komo-text-secondary hover:text-foreground border border-komo-border"
            }`}
            whileTap={{ scale: 0.95 }}
          >
            <span>{cat.emoji}</span>
            <span>{cat.label}</span>
          </motion.button>
        ))}
      </div>

      {/* Hot Deals horizontal scroll */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[15px] font-bold text-foreground">
            🔥 Hot Deals
          </span>
          <span className="text-[11px] text-komo-text-muted">
            Limited time offers
          </span>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {hotDeals.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex-shrink-0 w-48 komo-surface rounded-xl komo-card-shadow overflow-hidden"
            >
              <div className="relative" style={{ aspectRatio: "4/3" }}>
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div
                    className="w-full h-full flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(47,168,255,0.15), rgba(168,85,247,0.15))",
                    }}
                  >
                    <Package size={28} className="text-komo-text-muted" />
                  </div>
                )}
                <div className="absolute top-2 left-2">
                  <span className="text-[9px] font-bold bg-red-500 text-white px-1.5 py-0.5 rounded-full">
                    SALE
                  </span>
                </div>
              </div>
              <div className="p-2">
                <p className="text-[11px] font-semibold text-foreground line-clamp-1 mb-1">
                  {product.title}
                </p>
                <div className="flex items-center gap-1.5">
                  <span className="text-[13px] font-bold komo-gradient-text">
                    ₹{product.price.toLocaleString("en-IN")}
                  </span>
                  {product.discount && (
                    <span className="text-[9px] bg-emerald-500/15 text-emerald-400 px-1 py-0.5 rounded font-semibold">
                      -{product.discount}%
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Product grid */}
      {filtered.length === 0 ? (
        <div data-ocid="marketplace.empty_state" className="text-center py-16">
          <ShoppingBag
            size={48}
            className="text-komo-text-muted mx-auto mb-3"
          />
          <p className="text-foreground font-semibold">No products found</p>
          <p className="text-[12px] text-komo-text-muted mt-1">
            Try a different category or search
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {filtered.map((product, i) => (
            <ProductCard
              key={product.id}
              product={product}
              index={i + 1}
              showLiveBadge={i < 2}
            />
          ))}
        </div>
      )}

      {/* Footer info */}
      <div
        className="mt-8 p-4 rounded-2xl text-center"
        style={{
          background:
            "linear-gradient(135deg, rgba(47,168,255,0.05), rgba(168,85,247,0.05))",
          border: "1px solid rgba(59,130,246,0.12)",
        }}
      >
        <p className="text-[11px] text-komo-text-muted">
          📦 Cash on Delivery available &bull; Free returns within 7 days &bull;
          Secure payments
        </p>
        <p className="text-[10px] text-komo-text-muted mt-1">
          © {new Date().getFullYear()}. Built with love using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-komo-blue"
          >
            caffeine.ai
          </a>
        </p>
      </div>

      {/* Floating Sell Button */}
      <Dialog open={sellOpen} onOpenChange={setSellOpen}>
        <DialogTrigger asChild>
          <motion.button
            type="button"
            data-ocid="marketplace.sell.open_modal_button"
            className="fixed bottom-20 right-4 z-50 flex items-center gap-2 px-4 py-3 rounded-full text-white text-[13px] font-bold shadow-lg"
            style={{
              background: "linear-gradient(135deg, #2FA8FF, #A855F7)",
              boxShadow: "0 4px 20px rgba(168,85,247,0.5)",
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Plus size={16} />
            Sell
          </motion.button>
        </DialogTrigger>
        <DialogContent
          data-ocid="marketplace.sell.dialog"
          className="sm:max-w-md"
        >
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Sparkles size={18} className="text-komo-blue" />
              List Your Product
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSellSubmit} className="space-y-4 mt-2">
            <div>
              <Label className="text-[12px] mb-1 block">Product Name *</Label>
              <Input
                data-ocid="marketplace.sell.title.input"
                placeholder="e.g. Handloom Kurta Set"
                value={sellForm.title}
                onChange={(e) =>
                  setSellForm((f) => ({ ...f, title: e.target.value }))
                }
                required
              />
            </div>
            <div>
              <Label className="text-[12px] mb-1 block">Description *</Label>
              <Textarea
                data-ocid="marketplace.sell.description.textarea"
                placeholder="Describe your product..."
                value={sellForm.description}
                onChange={(e) =>
                  setSellForm((f) => ({ ...f, description: e.target.value }))
                }
                rows={3}
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label className="text-[12px] mb-1 block">Price (₹) *</Label>
                <Input
                  data-ocid="marketplace.sell.price.input"
                  type="number"
                  placeholder="e.g. 999"
                  value={sellForm.price}
                  onChange={(e) =>
                    setSellForm((f) => ({ ...f, price: e.target.value }))
                  }
                  required
                />
              </div>
              <div>
                <Label className="text-[12px] mb-1 block">Category *</Label>
                <Select
                  value={sellForm.category}
                  onValueChange={(v) =>
                    setSellForm((f) => ({ ...f, category: v }))
                  }
                >
                  <SelectTrigger data-ocid="marketplace.sell.category.select">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Electronics">📱 Electronics</SelectItem>
                    <SelectItem value="Home & Living">
                      🏡 Home & Living
                    </SelectItem>
                    <SelectItem value="Creator Tools">
                      🎬 Creator Tools
                    </SelectItem>
                    <SelectItem value="Sports & Fitness">
                      💪 Sports & Fitness
                    </SelectItem>
                    <SelectItem value="Fashion">👗 Fashion</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex gap-2 pt-1">
              <Button
                type="button"
                variant="outline"
                data-ocid="marketplace.sell.cancel_button"
                className="flex-1"
                onClick={() => setSellOpen(false)}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                data-ocid="marketplace.sell.submit_button"
                className="flex-1 komo-gradient text-white border-0"
              >
                List Product 🚀
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
