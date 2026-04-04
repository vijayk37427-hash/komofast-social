import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowLeft,
  Download,
  IndianRupee,
  Package,
  PlusCircle,
  ShoppingCart,
  Star,
  Upload,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { useApp } from "../context/AppContext";

const CATEGORIES = [
  "All",
  "eBooks",
  "Presets/LUTs",
  "Templates",
  "Music/Beats",
  "Courses",
  "Art/Design",
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
    gradient: "linear-gradient(135deg, #1a3a5c, #2fa8ff35)",
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
    gradient: "linear-gradient(135deg, #3d2800, #f59e0b35)",
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
    gradient: "linear-gradient(135deg, #2d1b4e, #a855f735)",
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
    gradient: "linear-gradient(135deg, #3d0a25, #ec489935)",
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
    gradient: "linear-gradient(135deg, #0a2e20, #10b98135)",
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
    gradient: "linear-gradient(135deg, #1a1a3e, #6366f135)",
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
    gradient: "linear-gradient(135deg, #0a2e2e, #14b8a635)",
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
    gradient: "linear-gradient(135deg, #3d1a00, #f9731635)",
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
    gradient: "linear-gradient(135deg, #2a1a4e, #8b5cf635)",
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
    gradient: "linear-gradient(135deg, #3d0a3d, #d946ef35)",
  },
];

const MY_LISTINGS = [
  {
    id: 1,
    title: "Productivity Templates Bundle",
    price: 249,
    earnings: "₹7,470",
    sales: 30,
    status: "Active",
    color: "#2fa8ff",
  },
  {
    id: 2,
    title: "Daily Vlog Editing Presets",
    price: 179,
    earnings: "₹1,432",
    sales: 8,
    status: "Under Review",
    color: "#a855f7",
  },
  {
    id: 3,
    title: "Business Pitch Deck Template",
    price: 399,
    earnings: "₹0",
    sales: 0,
    status: "Under Review",
    color: "#f59e0b",
  },
];

const STATUS_STYLES: Record<
  string,
  { bg: string; text: string; border: string }
> = {
  Active: {
    bg: "rgba(16,185,129,0.15)",
    text: "#34d399",
    border: "rgba(16,185,129,0.3)",
  },
  "Under Review": {
    bg: "rgba(245,158,11,0.12)",
    text: "#fbbf24",
    border: "rgba(245,158,11,0.3)",
  },
};

export default function DigitalMarket() {
  const { navigate } = useApp();
  const [activeCategory, setActiveCategory] = useState("All");
  const [listing, setListing] = useState(false);

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.06 } },
  };
  const item = {
    hidden: { opacity: 0, y: 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.32, ease: "easeOut" as const },
    },
  };

  const filtered =
    activeCategory === "All"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  function handleListProduct() {
    setListing(true);
    setTimeout(() => {
      setListing(false);
      toast.success("Product listed successfully! 💎", {
        description:
          "Your product is under review and will be live within 24 hours.",
        duration: 5000,
      });
    }, 1500);
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-4 pb-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex items-center gap-3 mb-5"
      >
        <button
          type="button"
          data-ocid="digital_market.back.button"
          className="w-9 h-9 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 transition-colors text-komo-text-secondary"
          onClick={() => navigate("/marketplace")}
        >
          <ArrowLeft size={18} />
        </button>
        <div>
          <h1 className="text-[20px] font-bold komo-gradient-text leading-tight">
            Digital Market 💎
          </h1>
          <p className="text-[12px] text-komo-text-muted">
            Buy &amp; Sell Digital Products
          </p>
        </div>
      </motion.div>

      <Tabs defaultValue="browse" className="w-full">
        <TabsList
          className="w-full mb-5 rounded-xl h-10 grid grid-cols-2"
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <TabsTrigger
            data-ocid="digital_market.browse.tab"
            value="browse"
            className="rounded-lg text-[12px] font-medium"
          >
            <ShoppingCart size={13} className="mr-1" /> Browse
          </TabsTrigger>
          <TabsTrigger
            data-ocid="digital_market.sell.tab"
            value="sell"
            className="rounded-lg text-[12px] font-medium"
          >
            <IndianRupee size={13} className="mr-1" /> Sell
          </TabsTrigger>
        </TabsList>

        {/* BROWSE TAB */}
        <TabsContent value="browse">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-4"
          >
            {/* Category chips */}
            <motion.div
              variants={item}
              className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide"
            >
              {CATEGORIES.map((cat) => (
                <motion.button
                  key={cat}
                  data-ocid="digital_market.category.tab"
                  onClick={() => setActiveCategory(cat)}
                  whileTap={{ scale: 0.95 }}
                  className={`px-3.5 py-1.5 rounded-full text-[12px] font-medium whitespace-nowrap flex-shrink-0 transition-all ${
                    activeCategory === cat
                      ? "komo-gradient text-white"
                      : "bg-white/5 text-komo-text-secondary border border-white/10 hover:text-foreground"
                  }`}
                >
                  {cat}
                </motion.button>
              ))}
            </motion.div>

            {/* Product grid */}
            {filtered.length === 0 ? (
              <div
                data-ocid="digital_market.browse.empty_state"
                className="py-16 text-center"
              >
                <Package
                  size={44}
                  className="text-komo-text-muted mx-auto mb-3"
                />
                <p className="text-foreground font-semibold">
                  No products in this category
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {filtered.map((p, i) => (
                  <motion.div
                    key={p.id}
                    variants={item}
                    data-ocid={`digital_market.product.item.${i + 1}`}
                    className="rounded-2xl overflow-hidden flex flex-col"
                    style={{
                      background: p.gradient,
                      border: `1px solid ${p.color}30`,
                    }}
                  >
                    {/* Thumbnail */}
                    <div
                      className="h-24 flex items-center justify-center text-4xl"
                      style={{ background: `${p.color}15` }}
                    >
                      {p.emoji}
                    </div>
                    {/* Info */}
                    <div className="p-3 flex flex-col gap-1.5 flex-1">
                      <p className="text-[12px] font-bold text-foreground line-clamp-2 leading-snug">
                        {p.title}
                      </p>
                      <p className="text-[10px] text-komo-text-muted">
                        by {p.creator}
                      </p>
                      {/* Stats */}
                      <div className="flex items-center gap-2">
                        <span
                          className="flex items-center gap-0.5 text-[10px]"
                          style={{ color: "#f59e0b" }}
                        >
                          <Star size={9} fill="#f59e0b" />
                          {p.rating}
                        </span>
                        <span className="flex items-center gap-0.5 text-[10px] text-komo-text-muted">
                          <Download size={9} />
                          {p.downloads}
                        </span>
                      </div>
                      {/* Price + Buy */}
                      <div className="flex items-center justify-between mt-auto pt-1">
                        <span
                          className="text-[14px] font-bold"
                          style={{ color: p.color }}
                        >
                          ₹{p.price}
                        </span>
                        <button
                          type="button"
                          data-ocid="digital_market.buy.button"
                          className="px-3 py-1.5 rounded-lg text-[11px] font-semibold text-white"
                          style={{
                            background: `linear-gradient(135deg, ${p.color}, ${p.color}cc)`,
                            boxShadow: `0 2px 8px ${p.color}40`,
                          }}
                          onClick={() =>
                            toast.success("Added to cart! 🛒", {
                              description: p.title,
                            })
                          }
                        >
                          Buy Now
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </TabsContent>

        {/* SELL TAB */}
        <TabsContent value="sell">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-4"
          >
            <motion.div
              variants={item}
              className="rounded-2xl p-5"
              style={{
                background:
                  "linear-gradient(135deg, rgba(47,168,255,0.07), rgba(168,85,247,0.07))",
                border: "1px solid rgba(168,85,247,0.2)",
              }}
            >
              <div className="flex items-center gap-2 mb-4">
                <PlusCircle size={18} className="text-komo-purple" />
                <h2 className="text-[15px] font-bold text-foreground">
                  List a Digital Product
                </h2>
              </div>

              <div className="space-y-3">
                <div>
                  <Label className="text-[12px] text-komo-text-secondary mb-1.5 block">
                    Product Title *
                  </Label>
                  <Input
                    data-ocid="digital_market.product_title.input"
                    placeholder="Give your product a name..."
                    className="bg-white/5 border-white/10 text-foreground placeholder:text-komo-text-muted rounded-xl"
                  />
                </div>
                <div>
                  <Label className="text-[12px] text-komo-text-secondary mb-1.5 block">
                    Description *
                  </Label>
                  <Textarea
                    data-ocid="digital_market.product_desc.textarea"
                    placeholder="Describe your product, what's included, how to use..."
                    className="bg-white/5 border-white/10 text-foreground placeholder:text-komo-text-muted rounded-xl resize-none"
                    rows={3}
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label className="text-[12px] text-komo-text-secondary mb-1.5 block">
                      Category
                    </Label>
                    <Select>
                      <SelectTrigger
                        data-ocid="digital_market.category.select"
                        className="bg-white/5 border-white/10 text-foreground rounded-xl"
                      >
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        {[
                          "eBooks",
                          "Presets/LUTs",
                          "Templates",
                          "Music/Beats",
                          "Courses",
                          "Art/Design",
                        ].map((c) => (
                          <SelectItem key={c} value={c}>
                            {c}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="text-[12px] text-komo-text-secondary mb-1.5 block">
                      File Type
                    </Label>
                    <Select>
                      <SelectTrigger
                        data-ocid="digital_market.filetype.select"
                        className="bg-white/5 border-white/10 text-foreground rounded-xl"
                      >
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        {["PDF", "MP3", "ZIP", "PNG", "MP4", "PSD"].map((t) => (
                          <SelectItem key={t} value={t}>
                            {t}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <Label className="text-[12px] text-komo-text-secondary mb-1.5 block">
                    Price (₹) *
                  </Label>
                  <div className="relative">
                    <IndianRupee
                      size={14}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-komo-text-muted"
                    />
                    <Input
                      data-ocid="digital_market.price.input"
                      type="number"
                      placeholder="199"
                      className="bg-white/5 border-white/10 text-foreground placeholder:text-komo-text-muted rounded-xl pl-9"
                    />
                  </div>
                </div>

                {/* File upload */}
                <div
                  className="flex items-center gap-3 p-3 rounded-xl cursor-pointer hover:bg-white/5 transition-colors"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                  onClick={() => toast.info("File upload would open here")}
                  onKeyDown={(e) =>
                    e.key === "Enter" &&
                    toast.info("File upload would open here")
                  }
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ background: "rgba(47,168,255,0.12)" }}
                  >
                    <Upload size={18} className="text-komo-blue" />
                  </div>
                  <div>
                    <p className="text-[13px] font-medium text-foreground">
                      Upload Product File
                    </p>
                    <p className="text-[11px] text-komo-text-muted">
                      PDF, ZIP, MP3, PNG, PSD · Max 100MB
                    </p>
                  </div>
                  <button
                    type="button"
                    data-ocid="digital_market.file.upload_button"
                    className="ml-auto text-[12px] text-komo-blue font-semibold"
                  >
                    Upload
                  </button>
                </div>

                {/* Thumbnail upload */}
                <div
                  className="flex items-center gap-3 p-3 rounded-xl cursor-pointer hover:bg-white/5 transition-colors"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                  onClick={() => toast.info("Thumbnail upload would open here")}
                  onKeyDown={(e) =>
                    e.key === "Enter" &&
                    toast.info("Thumbnail upload would open here")
                  }
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ background: "rgba(168,85,247,0.12)" }}
                  >
                    <Package size={18} className="text-komo-purple" />
                  </div>
                  <div>
                    <p className="text-[13px] font-medium text-foreground">
                      Upload Thumbnail
                    </p>
                    <p className="text-[11px] text-komo-text-muted">
                      JPG, PNG · Recommended 600×400
                    </p>
                  </div>
                  <button
                    type="button"
                    data-ocid="digital_market.thumbnail.upload_button"
                    className="ml-auto text-[12px] text-komo-purple font-semibold"
                  >
                    Choose
                  </button>
                </div>
              </div>

              <Button
                data-ocid="digital_market.list_product.primary_button"
                className="w-full komo-gradient border-0 text-white font-bold text-[15px] rounded-2xl mt-4"
                style={{
                  height: "50px",
                  boxShadow: "0 4px 20px rgba(168,85,247,0.3)",
                }}
                disabled={listing}
                onClick={handleListProduct}
              >
                {listing ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                    Listing Product...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <PlusCircle size={17} /> List Product
                  </span>
                )}
              </Button>
            </motion.div>

            {/* My Listings */}
            <motion.div variants={item}>
              <p className="text-[14px] font-bold text-foreground mb-3 flex items-center gap-2">
                <Package size={15} className="text-komo-blue" /> My Listings
              </p>
              <div className="space-y-3">
                {MY_LISTINGS.map((l, i) => (
                  <div
                    key={l.id}
                    data-ocid={`digital_market.listing.item.${i + 1}`}
                    className="rounded-xl p-4 flex items-center gap-3"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${l.color}18` }}
                    >
                      <Package size={18} style={{ color: l.color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[13px] font-semibold text-foreground line-clamp-1">
                        {l.title}
                      </p>
                      <p className="text-[11px] text-komo-text-muted mt-0.5">
                        ₹{l.price} · {l.sales} sales ·{" "}
                        <span style={{ color: l.color }}>{l.earnings}</span>
                      </p>
                    </div>
                    <Badge
                      className="text-[10px] px-2.5 border-0 flex-shrink-0"
                      style={{
                        background: STATUS_STYLES[l.status]?.bg,
                        color: STATUS_STYLES[l.status]?.text,
                        border: `1px solid ${STATUS_STYLES[l.status]?.border}`,
                      }}
                    >
                      {l.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
