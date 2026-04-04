import { ExternalLink, ShoppingBag } from "lucide-react";

export default function AdBanner() {
  return (
    <div
      data-ocid="feed.ad.card"
      className="rounded-2xl overflow-hidden relative komo-card-shadow"
      style={{
        background:
          "linear-gradient(135deg, rgba(47,168,255,0.08) 0%, rgba(168,85,247,0.08) 100%)",
        border: "1px solid rgba(59,130,246,0.25)",
      }}
    >
      {/* Header */}
      <div className="px-4 py-2 flex items-center justify-between border-b border-komo-border/30">
        <span className="text-[10px] font-semibold text-komo-text-muted uppercase tracking-wider">
          Sponsored
        </span>
        <ExternalLink size={12} className="text-komo-text-muted" />
      </div>

      {/* Ad Content */}
      <div className="p-4">
        <div className="flex items-center gap-3 mb-3">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
            style={{ background: "linear-gradient(135deg, #2FA8FF, #A855F7)" }}
          >
            S
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[14px] font-bold text-foreground">
              Summer Sale — Up to 60% Off!
            </p>
            <p className="text-[12px] text-komo-text-muted mt-0.5">
              FashionBrand · Limited time offer
            </p>
          </div>
        </div>

        {/* Banner visual */}
        <div
          className="w-full rounded-xl p-4 flex items-center justify-between"
          style={{
            background:
              "linear-gradient(135deg, rgba(47,168,255,0.18), rgba(168,85,247,0.22))",
            border: "1px solid rgba(59,130,246,0.2)",
          }}
        >
          <div>
            <p className="text-[13px] font-semibold text-foreground">
              Flat ₹500 off on orders ₹2,000+
            </p>
            <p className="text-[11px] text-komo-text-muted mt-0.5">
              Use code:{" "}
              <span className="font-bold text-blue-400">SUMMER60</span>
            </p>
          </div>
          <ShoppingBag size={28} className="text-purple-400 opacity-70" />
        </div>

        {/* CTA */}
        <button
          type="button"
          data-ocid="feed.ad.learn_more_button"
          className="mt-3 w-full komo-gradient text-white text-sm font-semibold py-2.5 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
        >
          Learn More <ExternalLink size={13} />
        </button>
      </div>
    </div>
  );
}
