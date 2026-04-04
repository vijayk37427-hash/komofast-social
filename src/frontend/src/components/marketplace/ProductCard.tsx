import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Package, ShoppingCart, Star } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { useApp } from "../../context/AppContext";

interface ProductCardProps {
  product: {
    id: string;
    title: string;
    description: string;
    price: number;
    category: string;
    stock: number;
    image: string | null;
    seller: string;
    rating: number;
    reviews: number;
    soldCount?: number;
    discount?: number;
  };
  index: number;
  showLiveBadge?: boolean;
}

export default function ProductCard({
  product,
  index,
  showLiveBadge,
}: ProductCardProps) {
  const [inCart, setInCart] = useState(false);
  const [wishlisted, setWishlisted] = useState(false);
  const { setCartCount } = useApp();

  const handleAddToCart = () => {
    setInCart(true);
    setCartCount((c) => c + 1);
    toast.success(`${product.title} added to cart!`);
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.stopPropagation();
    setWishlisted((w) => !w);
    toast(wishlisted ? "Removed from wishlist" : "Added to wishlist ❤️");
  };

  const originalPrice = product.discount
    ? Math.round(product.price / (1 - product.discount / 100))
    : null;

  return (
    <motion.div
      data-ocid={`marketplace.product.item.${index}`}
      className="komo-surface rounded-2xl komo-card-shadow overflow-hidden flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06 }}
      whileHover={{ y: -4, scale: 1.01 }}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "1/1" }}>
        {product.image ? (
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div
            className="w-full h-full flex flex-col items-center justify-center"
            style={{
              background:
                "linear-gradient(135deg, rgba(47,168,255,0.15), rgba(168,85,247,0.15))",
            }}
          >
            <Package size={36} className="text-komo-text-muted mb-1" />
            <span className="text-[11px] text-komo-text-muted">
              {product.category}
            </span>
          </div>
        )}

        {/* Top left badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {showLiveBadge && (
            <span className="flex items-center gap-1 bg-red-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              LIVE
            </span>
          )}
          {product.discount && (
            <Badge className="text-[9px] px-1.5 py-0.5 bg-emerald-500 text-white border-0 font-bold">
              {product.discount}% OFF
            </Badge>
          )}
        </div>

        {/* Wishlist button */}
        <button
          type="button"
          data-ocid={`marketplace.wishlist.${index}`}
          onClick={handleWishlist}
          className="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center transition-transform hover:scale-110"
        >
          <Heart
            size={13}
            className={wishlisted ? "fill-red-400 text-red-400" : "text-white"}
          />
        </button>
      </div>

      {/* Content */}
      <div className="p-2.5 flex flex-col flex-1">
        <p className="text-[12px] font-semibold text-foreground line-clamp-2 leading-tight mb-0.5">
          {product.title}
        </p>
        <p className="text-[10px] text-komo-text-muted mb-1.5 line-clamp-1">
          by {product.seller}
        </p>

        <div className="flex items-center gap-1 mb-1">
          <Star size={10} className="fill-yellow-400 text-yellow-400" />
          <span className="text-[10px] font-semibold text-foreground">
            {product.rating}
          </span>
          <span className="text-[10px] text-komo-text-muted">
            ({product.reviews})
          </span>
          {product.soldCount && (
            <span className="text-[9px] text-komo-text-muted ml-auto">
              {product.soldCount >= 1000
                ? `${(product.soldCount / 1000).toFixed(1)}k sold`
                : `${product.soldCount} sold`}
            </span>
          )}
        </div>

        <div className="mt-auto">
          <div className="flex items-center gap-1.5 mb-2">
            <span className="text-[15px] font-bold komo-gradient-text">
              ₹{product.price.toLocaleString("en-IN")}
            </span>
            {originalPrice && (
              <span className="text-[11px] text-komo-text-muted line-through">
                ₹{originalPrice.toLocaleString("en-IN")}
              </span>
            )}
          </div>
          <Button
            data-ocid={`marketplace.add_cart.${index}`}
            className={`w-full h-7 text-[11px] font-semibold ${
              inCart
                ? "bg-accent text-komo-blue hover:bg-accent"
                : "komo-gradient border-0 text-white hover:opacity-90"
            }`}
            onClick={handleAddToCart}
            disabled={inCart}
          >
            <ShoppingCart size={12} className="mr-1" />
            {inCart ? "Added ✓" : "Add to Cart"}
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
