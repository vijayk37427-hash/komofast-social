import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Check, Crown, Star, Zap } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { useApp } from "../context/AppContext";

const PLANS = [
  {
    id: "free",
    name: "Basic Free",
    nameHindi: "मुफ़्त",
    price: 0,
    priceLabel: "मुफ़्त",
    period: "",
    icon: "👤",
    color: "from-gray-600 to-gray-700",
    border: "border-white/10",
    features: [
      { label: "Basic Feed", included: true },
      { label: "5 Reels/day", included: true },
      { label: "Standard filters", included: true },
      { label: "Ads shown", included: false },
      { label: "Creator Badge", included: false },
      { label: "Higher Payout %", included: false },
      { label: "Priority Support", included: false },
      { label: "Exclusive Filters", included: false },
      { label: "Analytics Pro", included: false },
    ],
  },
  {
    id: "premium",
    name: "KomoPremium",
    nameHindi: "प्रीमियम",
    price: 99,
    priceLabel: "₹99",
    period: "/माह",
    icon: "⭐",
    color: "from-blue-600 to-purple-600",
    border: "border-purple-500/50",
    recommended: true,
    features: [
      { label: "Unlimited Reels", included: true },
      { label: "Ads-free experience", included: true },
      { label: "Creator Badge ⭐", included: true },
      { label: "Higher Payout %", included: true },
      { label: "Priority Support", included: true },
      { label: "Exclusive Filters", included: true },
      { label: "Analytics Pro", included: true },
      { label: "Membership perks", included: false },
      { label: "Early access", included: false },
    ],
  },
  {
    id: "pro",
    name: "KomoPro",
    nameHindi: "प्रो",
    price: 999,
    priceLabel: "₹999",
    period: "/वर्ष",
    altPrice: "₹499",
    altPeriod: "/6 माह",
    icon: "👑",
    color: "from-yellow-500 to-orange-500",
    border: "border-yellow-500/50",
    features: [
      { label: "All Premium features", included: true },
      { label: "Ads-free experience", included: true },
      { label: "PRO Crown Badge 👑", included: true },
      { label: "Max Payout %", included: true },
      { label: "24/7 Priority Support", included: true },
      { label: "All Exclusive Filters", included: true },
      { label: "Analytics Pro + AI", included: true },
      { label: "Membership discounts", included: true },
      { label: "Early access features", included: true },
    ],
  },
];

export default function PremiumSubscription() {
  const { navigate } = useApp();
  const [currentPlan] = useState("free");
  const [payModal, setPayModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<(typeof PLANS)[0] | null>(
    null,
  );
  const [upiId, setUpiId] = useState("");
  const [paying, setPaying] = useState(false);

  const handleSubscribe = (plan: (typeof PLANS)[0]) => {
    if (plan.id === "free") return;
    setSelectedPlan(plan);
    setPayModal(true);
  };

  const handlePay = () => {
    if (!upiId.trim()) {
      toast.error("UPI ID डालें");
      return;
    }
    setPaying(true);
    setTimeout(() => {
      setPaying(false);
      setPayModal(false);
      toast.success(`${selectedPlan?.name} सब्सक्रिप्शन सक्रिय! 🎉`);
    }, 1800);
  };

  return (
    <div
      className="min-h-screen px-4 py-6"
      style={{ background: "linear-gradient(180deg,#0B0F14 0%,#11161D 100%)" }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <button
          type="button"
          onClick={() => navigate("/")}
          className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center"
          data-ocid="premium.back_button"
        >
          <ArrowLeft size={18} className="text-white" />
        </button>
        <div>
          <h1 className="text-white text-xl font-bold">प्रीमियम सदस्यता</h1>
          <p className="text-white/50 text-xs">Premium Subscription</p>
        </div>
      </div>

      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-3xl p-6 mb-8 text-center relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg,#1e1b4b,#312e81,#4c1d95)",
        }}
      >
        <div className="text-5xl mb-3">👑</div>
        <h2 className="text-white text-2xl font-bold mb-2">KomoFast Premium</h2>
        <p className="text-white/70 text-sm">
          Ad-free experience, exclusive badges & higher earnings
        </p>
        <div className="absolute top-3 right-3">
          <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30 text-[10px]">
            MOST POPULAR
          </Badge>
        </div>
      </motion.div>

      {/* Plans */}
      <div className="space-y-4 mb-8">
        {PLANS.map((plan, i) => (
          <motion.div
            key={plan.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`rounded-2xl border p-5 relative ${plan.border} bg-white/5`}
            data-ocid={`premium.${plan.id}.card`}
          >
            {plan.recommended && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 text-[10px] px-3">
                  ⭐ RECOMMENDED
                </Badge>
              </div>
            )}

            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div
                  className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center text-xl`}
                >
                  {plan.icon}
                </div>
                <div>
                  <h3 className="text-white font-bold text-base">
                    {plan.name}
                  </h3>
                  <p className="text-white/50 text-xs">{plan.nameHindi}</p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-white font-bold text-xl">
                  {plan.priceLabel}
                </span>
                <span className="text-white/50 text-xs">{plan.period}</span>
                {plan.altPrice && (
                  <p className="text-white/40 text-[10px] mt-0.5">
                    {plan.altPrice}
                    {plan.altPeriod}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-1.5 mb-4">
              {plan.features.map((f) => (
                <div key={f.label} className="flex items-center gap-2">
                  <div
                    className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${
                      f.included ? "bg-green-500/20" : "bg-white/5"
                    }`}
                  >
                    <Check
                      size={9}
                      className={
                        f.included ? "text-green-400" : "text-white/20"
                      }
                    />
                  </div>
                  <span
                    className={`text-xs ${f.included ? "text-white/80" : "text-white/30 line-through"}`}
                  >
                    {f.label}
                  </span>
                </div>
              ))}
            </div>

            {currentPlan === plan.id ? (
              <div
                className="w-full py-3 rounded-xl text-center bg-white/10 text-white/60 text-sm font-semibold"
                data-ocid={`premium.${plan.id}.current_button`}
              >
                ✓ Current Plan
              </div>
            ) : (
              <button
                type="button"
                data-ocid={`premium.${plan.id}.primary_button`}
                onClick={() => handleSubscribe(plan)}
                disabled={plan.id === "free"}
                className={`w-full py-3 rounded-xl text-white font-bold text-sm transition-opacity ${plan.id === "free" ? "bg-white/5 text-white/30 cursor-not-allowed" : `bg-gradient-to-r ${plan.color}`}`}
              >
                {plan.id === "free"
                  ? "Current Plan"
                  : "Subscribe Now / सब्सक्राइब करें"}
              </button>
            )}
          </motion.div>
        ))}
      </div>

      {/* Feature comparison note */}
      <div className="bg-white/5 rounded-2xl p-4 border border-white/10 mb-20">
        <div className="flex items-center gap-2 mb-2">
          <Star size={14} className="text-yellow-400" />
          <span className="text-white font-semibold text-sm">
            Premium के फायदे
          </span>
        </div>
        <ul className="space-y-1 text-white/60 text-xs">
          <li>• No ads — clean, distraction-free feed</li>
          <li>• Earn 20% more on every content sale</li>
          <li>• Blue-purple creator badge on profile</li>
          <li>• Priority customer support response</li>
          <li>• Access exclusive filter packs every month</li>
        </ul>
      </div>

      {/* Payment Modal */}
      <Dialog open={payModal} onOpenChange={setPayModal}>
        <DialogContent
          className="bg-[#12161e] border-white/10 text-white max-w-sm"
          data-ocid="premium.payment.dialog"
        >
          <DialogHeader>
            <DialogTitle className="text-white flex items-center gap-2">
              <Crown size={18} className="text-yellow-400" />
              {selectedPlan?.name} - {selectedPlan?.priceLabel}
              {selectedPlan?.period}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl p-4 border border-purple-500/20">
              <p className="text-white/70 text-xs mb-1">Total Amount</p>
              <p className="text-white text-2xl font-bold">
                {selectedPlan?.priceLabel}
              </p>
            </div>
            <div>
              <label
                htmlFor="premium-upi"
                className="text-white/60 text-xs mb-1.5 block"
              >
                UPI ID डालें
              </label>
              <Input
                id="premium-upi"
                data-ocid="premium.upi.input"
                placeholder="name@upi या number@paytm"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
                className="bg-white/5 border-white/10 text-white placeholder:text-white/30"
              />
            </div>
            <div className="grid grid-cols-3 gap-2">
              {["PhonePe", "GPay", "Paytm"].map((app) => (
                <button
                  type="button"
                  key={app}
                  className="py-2 bg-white/5 rounded-lg text-white/70 text-xs border border-white/10 hover:bg-white/10 transition-colors"
                >
                  {app}
                </button>
              ))}
            </div>
            <button
              type="button"
              data-ocid="premium.pay.primary_button"
              onClick={handlePay}
              disabled={paying}
              className="w-full py-3 rounded-xl text-white font-bold text-sm bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center gap-2"
            >
              {paying ? (
                <Zap size={16} className="animate-spin" />
              ) : (
                <Crown size={16} />
              )}
              {paying ? "Processing..." : "Pay & Subscribe"}
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
