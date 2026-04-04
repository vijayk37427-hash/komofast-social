import { ArrowLeft, Download, ExternalLink, TrendingUp } from "lucide-react";
import { motion } from "motion/react";
import { toast } from "sonner";
import { useApp } from "../context/AppContext";

const STREAMS = [
  {
    icon: "📺",
    name: "Ads Revenue",
    nameHindi: "विज्ञापन",
    amount: 18200,
    trend: 23,
    route: "/ads-targeting",
  },
  {
    icon: "⭐",
    name: "Premium Subscriptions",
    nameHindi: "प्रीमियम",
    amount: 9800,
    trend: 15,
    route: "/premium",
  },
  {
    icon: "👥",
    name: "Memberships",
    nameHindi: "मेंबरशिप",
    amount: 6450,
    trend: 31,
    route: "/memberships",
  },
  {
    icon: "💬",
    name: "Super Chats",
    nameHindi: "सुपर चैट",
    amount: 4200,
    trend: 45,
    route: "/live",
  },
  {
    icon: "🛍️",
    name: "Merch Sales",
    nameHindi: "मर्च",
    amount: 3900,
    trend: 12,
    route: "/merch",
  },
  {
    icon: "📚",
    name: "Digital Market",
    nameHindi: "डिजिटल मार्केट",
    amount: 2800,
    trend: 8,
    route: "/digital-market",
  },
  {
    icon: "🎓",
    name: "Academy",
    nameHindi: "अकादमी",
    amount: 2500,
    trend: 5,
    route: "/academy",
  },
];

const MONTHLY = [
  { month: "Oct", val: 28000 },
  { month: "Nov", val: 32000 },
  { month: "Dec", val: 38000 },
  { month: "Jan", val: 41000 },
  { month: "Feb", val: 44000 },
  { month: "Mar", val: 47850 },
];

const maxVal = Math.max(...MONTHLY.map((m) => m.val));

export default function MonetizationHub() {
  const { navigate } = useApp();
  const total = STREAMS.reduce((a, s) => a + s.amount, 0);

  return (
    <div
      className="min-h-screen px-4 py-6 pb-20"
      style={{ background: "linear-gradient(180deg,#0B0F14 0%,#11161D 100%)" }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <button
          type="button"
          onClick={() => navigate("/")}
          className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center"
          data-ocid="monetization.back_button"
        >
          <ArrowLeft size={18} className="text-white" />
        </button>
        <div>
          <h1 className="text-white text-xl font-bold">कमाई केंद्र</h1>
          <p className="text-white/50 text-xs">Monetization Hub</p>
        </div>
      </div>

      {/* Total earnings hero */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-3xl p-6 mb-6 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg,#1e1b4b,#312e81,#4c1d95)",
        }}
        data-ocid="monetization.summary.card"
      >
        <div
          className="absolute top-0 right-0 w-32 h-32 rounded-full"
          style={{
            background:
              "radial-gradient(circle,rgba(168,85,247,0.3),transparent)",
          }}
        />
        <p className="text-white/60 text-xs mb-1">
          This Month's Total Earnings
        </p>
        <p className="text-white text-4xl font-bold mb-1">
          ₹{total.toLocaleString()}
        </p>
        <div className="flex items-center gap-2">
          <TrendingUp size={12} className="text-green-400" />
          <span className="text-green-400 text-xs">+22% vs last month</span>
        </div>
      </motion.div>

      {/* Income streams */}
      <h2 className="text-white font-semibold text-sm mb-3">
        💰 Income Streams
      </h2>
      <div className="space-y-2 mb-6">
        {STREAMS.map((s, i) => (
          <motion.button
            type="button"
            key={s.name}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.06 }}
            onClick={() => navigate(s.route)}
            className="w-full flex items-center gap-4 bg-white/5 rounded-2xl p-4 border border-white/10 hover:bg-white/10 transition-colors"
            data-ocid={`monetization.stream.item.${i + 1}`}
          >
            <span className="text-2xl w-8 text-center">{s.icon}</span>
            <div className="flex-1 text-left">
              <p className="text-white text-sm font-semibold">{s.name}</p>
              <p className="text-white/40 text-[10px]">{s.nameHindi}</p>
            </div>
            <div className="text-right">
              <p className="text-white font-bold text-sm">
                ₹{s.amount.toLocaleString()}
              </p>
              <p className="text-green-400 text-[10px]">+{s.trend}% ↑</p>
            </div>
            <ExternalLink size={14} className="text-white/30" />
          </motion.button>
        ))}
      </div>

      {/* Monthly chart */}
      <div className="bg-white/5 rounded-2xl p-4 border border-white/10 mb-6">
        <h3 className="text-white font-semibold text-sm mb-4">
          📊 Monthly Trend (6 months)
        </h3>
        <div className="flex items-end gap-2 h-28">
          {MONTHLY.map((m, i) => (
            <div
              key={m.month}
              className="flex-1 flex flex-col items-center gap-1"
            >
              <span className="text-white/40 text-[9px]">
                ₹{(m.val / 1000).toFixed(0)}k
              </span>
              <motion.div
                className="w-full rounded-t-lg"
                style={{
                  background:
                    i === MONTHLY.length - 1
                      ? "linear-gradient(180deg,#a855f7,#3b82f6)"
                      : "rgba(168,85,247,0.3)",
                }}
                initial={{ height: 0 }}
                animate={{ height: `${(m.val / maxVal) * 80}px` }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              />
              <span className="text-white/50 text-[9px]">{m.month}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Payout */}
      <button
        type="button"
        data-ocid="monetization.withdraw.primary_button"
        onClick={() =>
          toast.success(
            "Withdrawal initiated! 2-3 business days में UPI पर आएगा 💰",
          )
        }
        className="w-full py-4 rounded-2xl text-white font-bold text-base mb-4 flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-teal-600"
      >
        <Download size={18} /> Withdraw to UPI / निकालें
      </button>

      {/* Quick links */}
      <h2 className="text-white font-semibold text-sm mb-3">🚀 Quick Access</h2>
      <div className="grid grid-cols-2 gap-2">
        {[
          { label: "Premium", icon: "⭐", route: "/premium" },
          { label: "Memberships", icon: "👥", route: "/memberships" },
          { label: "Merch Store", icon: "🛍️", route: "/merch" },
          { label: "Ads Targeting", icon: "🎯", route: "/ads-targeting" },
          { label: "Business Acct", icon: "💼", route: "/business-account" },
          { label: "Donations", icon: "💝", route: "/donate" },
        ].map((link) => (
          <button
            type="button"
            key={link.route}
            data-ocid="monetization.quicklink.button"
            onClick={() => navigate(link.route)}
            className="flex items-center gap-3 bg-white/5 rounded-xl p-3 border border-white/10 hover:bg-white/10 transition-colors"
          >
            <span className="text-xl">{link.icon}</span>
            <span className="text-white/70 text-xs font-medium">
              {link.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
