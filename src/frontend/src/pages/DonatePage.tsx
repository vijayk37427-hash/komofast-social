import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Check, Copy, Heart, QrCode, Share2, Zap } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { useApp } from "../context/AppContext";

const PRESET_AMOUNTS = [10, 50, 100, 500, 1000];

const RECENT_DONORS = [
  {
    name: "Priya S.",
    initials: "PS",
    amount: 100,
    time: "2 min ago",
    gradient: "linear-gradient(135deg, #f472b6, #a855f7)",
  },
  {
    name: "Amit K.",
    initials: "AK",
    amount: 500,
    time: "15 min ago",
    gradient: "linear-gradient(135deg, #2fa8ff, #6366f1)",
  },
  {
    name: "Sneha R.",
    initials: "SR",
    amount: 50,
    time: "1 hr ago",
    gradient: "linear-gradient(135deg, #22c55e, #2fa8ff)",
  },
  {
    name: "Rahul M.",
    initials: "RM",
    amount: 1000,
    time: "3 hr ago",
    gradient: "linear-gradient(135deg, #f59e0b, #ef4444)",
  },
  {
    name: "Kavya P.",
    initials: "KP",
    amount: 200,
    time: "Yesterday",
    gradient: "linear-gradient(135deg, #a855f7, #ec4899)",
  },
];

const UPI_ID = "rahul@komofast";

export default function DonatePage() {
  const { navigate } = useApp();
  const [selectedAmount, setSelectedAmount] = useState<number | null>(100);
  const [customAmount, setCustomAmount] = useState("");
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);
  const [upiCopied, setUpiCopied] = useState(false);
  const [donated, setDonated] = useState(false);

  const finalAmount = customAmount ? Number(customAmount) : selectedAmount;

  const handleCopyUPI = () => {
    navigator.clipboard.writeText(UPI_ID).catch(() => {});
    setUpiCopied(true);
    toast.success("UPI ID copied!");
    setTimeout(() => setUpiCopied(false), 2000);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href).catch(() => {});
    setCopied(true);
    toast.success("Donation link copied!");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleWhatsApp = () => {
    const text = `Support Rahul Sharma on KomoFast! Donate here: ${window.location.href}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank");
  };

  const handleDonate = () => {
    if (!finalAmount || finalAmount <= 0) {
      toast.error("Please select or enter a donation amount.");
      return;
    }
    setDonated(true);
    toast.success(`₹${finalAmount} donation sent! Thank you! 💝`);
    setTimeout(() => setDonated(false), 3000);
  };

  return (
    <div className="max-w-lg mx-auto px-4 py-6 pb-12">
      {/* Back */}
      <button
        type="button"
        onClick={() => navigate("/profile")}
        className="flex items-center gap-1.5 text-[13px] text-komo-text-muted hover:text-foreground transition-colors mb-4"
      >
        ← Back to Profile
      </button>

      {/* Creator Card */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="rounded-2xl p-5 text-center mb-4"
        style={{
          background:
            "linear-gradient(135deg, rgba(47,168,255,0.12) 0%, rgba(168,85,247,0.18) 100%)",
          border: "1px solid rgba(168,85,247,0.3)",
          boxShadow: "0 8px 32px rgba(168,85,247,0.12)",
        }}
      >
        <div
          className="w-20 h-20 rounded-full mx-auto flex items-center justify-center text-[28px] font-bold text-white mb-3"
          style={{ background: "linear-gradient(135deg, #2fa8ff, #a855f7)" }}
        >
          RS
        </div>
        <h1 className="text-[20px] font-bold text-foreground">Rahul Sharma</h1>
        <p className="text-[13px] text-komo-text-muted mb-2">@rahul_komo</p>
        <p className="text-[13px] text-komo-text-secondary leading-relaxed mb-3">
          Content Creator | Help me keep creating!
        </p>
        <Badge className="bg-komo-badge/20 text-komo-blue border-komo-blue/30 text-[11px]">
          <Zap size={10} className="mr-1" /> KomoFast Creator
        </Badge>
      </motion.div>

      {/* Amount Selector */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.08 }}
        className="komo-surface rounded-2xl komo-card-shadow p-4 mb-4"
      >
        <p className="text-[13px] font-semibold text-komo-text-secondary mb-3 flex items-center gap-1.5">
          <Heart size={14} className="text-pink-400" /> Choose Donation Amount
        </p>
        <div className="grid grid-cols-5 gap-2 mb-3">
          {PRESET_AMOUNTS.map((amt) => (
            <button
              key={amt}
              type="button"
              data-ocid="donate.amount.button"
              onClick={() => {
                setSelectedAmount(amt);
                setCustomAmount("");
              }}
              className={`py-2.5 rounded-xl text-[13px] font-bold transition-all ${
                selectedAmount === amt && !customAmount
                  ? "text-white shadow-lg scale-105"
                  : "text-komo-text-secondary hover:text-foreground"
              }`}
              style={
                selectedAmount === amt && !customAmount
                  ? {
                      background: "linear-gradient(135deg, #2fa8ff, #a855f7)",
                      border: "1px solid rgba(168,85,247,0.5)",
                    }
                  : {
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }
              }
            >
              ₹{amt}
            </button>
          ))}
        </div>
        <Input
          data-ocid="donate.custom.input"
          type="number"
          placeholder="Custom amount (₹)"
          value={customAmount}
          onChange={(e) => {
            setCustomAmount(e.target.value);
            setSelectedAmount(null);
          }}
          className="bg-white/5 border-white/10 text-foreground placeholder:text-komo-text-muted focus:border-komo-purple/50"
        />
      </motion.div>

      {/* Payment Section */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.14 }}
        className="komo-surface rounded-2xl komo-card-shadow p-4 mb-4"
      >
        <p className="text-[13px] font-semibold text-komo-text-secondary mb-3">
          💳 Payment
        </p>

        {/* UPI ID */}
        <div
          className="flex items-center gap-3 rounded-xl px-4 py-3 mb-4"
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <div className="flex-1">
            <p className="text-[11px] text-komo-text-muted mb-0.5">UPI ID</p>
            <p className="text-[14px] font-bold text-foreground">{UPI_ID}</p>
          </div>
          <button
            type="button"
            data-ocid="donate.upi.button"
            onClick={handleCopyUPI}
            className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors hover:bg-white/10"
            style={{
              background: upiCopied
                ? "rgba(34,197,94,0.15)"
                : "rgba(47,168,255,0.15)",
              border: upiCopied
                ? "1px solid rgba(34,197,94,0.4)"
                : "1px solid rgba(47,168,255,0.3)",
            }}
          >
            {upiCopied ? (
              <Check size={15} className="text-green-400" />
            ) : (
              <Copy size={15} className="text-komo-blue" />
            )}
          </button>
        </div>

        {/* QR Code Placeholder */}
        <div
          className="rounded-xl p-6 flex flex-col items-center gap-2 mb-4"
          style={{
            background:
              "linear-gradient(135deg, rgba(47,168,255,0.1), rgba(168,85,247,0.12))",
            border: "1px solid rgba(168,85,247,0.25)",
          }}
        >
          <div
            className="w-32 h-32 rounded-xl flex flex-col items-center justify-center gap-2"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "2px dashed rgba(168,85,247,0.4)",
            }}
          >
            <QrCode size={48} className="text-komo-purple opacity-70" />
            <span className="text-[10px] text-komo-text-muted font-medium">
              QR Code
            </span>
          </div>
          <p className="text-[12px] font-semibold text-komo-text-secondary">
            Scan to Pay
          </p>
          <p className="text-[11px] text-komo-text-muted">{UPI_ID}</p>
        </div>

        {/* Donate Button */}
        <Button
          data-ocid="donate.submit_button"
          className="w-full h-12 text-[15px] font-bold border-0 text-white"
          style={{
            background: donated
              ? "linear-gradient(135deg, #22c55e, #16a34a)"
              : "linear-gradient(135deg, #2fa8ff, #a855f7)",
          }}
          onClick={handleDonate}
        >
          {donated ? (
            <>
              <Check size={18} className="mr-2" /> Donated! Thank you 💝
            </>
          ) : (
            <>
              <Heart size={18} className="mr-2" /> Donate Now
              {finalAmount ? ` ₹${finalAmount}` : ""}
            </>
          )}
        </Button>
      </motion.div>

      {/* Message Field */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.2 }}
        className="komo-surface rounded-2xl komo-card-shadow p-4 mb-4"
      >
        <p className="text-[13px] font-semibold text-komo-text-secondary mb-2">
          💬 Message (Optional)
        </p>
        <Textarea
          data-ocid="donate.message.textarea"
          placeholder="Leave a message for Rahul..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={3}
          className="bg-white/5 border-white/10 text-foreground placeholder:text-komo-text-muted focus:border-komo-purple/50 resize-none"
        />
      </motion.div>

      {/* Recent Donors */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.26 }}
        className="komo-surface rounded-2xl komo-card-shadow p-4 mb-4"
      >
        <p className="text-[13px] font-semibold text-komo-text-secondary mb-3">
          🏆 Recent Donors
        </p>
        <div className="space-y-3">
          {RECENT_DONORS.map((donor, i) => (
            <div
              key={donor.name}
              data-ocid={`donate.donor.item.${i + 1}`}
              className="flex items-center gap-3"
            >
              <Avatar className="w-9 h-9 flex-shrink-0">
                <AvatarFallback
                  className="text-[12px] font-bold text-white"
                  style={{ background: donor.gradient }}
                >
                  {donor.initials}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-[13px] font-semibold text-foreground">
                  {donor.name}
                </p>
                <p className="text-[11px] text-komo-text-muted">{donor.time}</p>
              </div>
              <Badge
                className="text-[12px] font-bold shrink-0"
                style={{
                  background: "rgba(34,197,94,0.12)",
                  color: "#4ade80",
                  border: "1px solid rgba(34,197,94,0.3)",
                }}
              >
                ₹{donor.amount}
              </Badge>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Share Section */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.32 }}
        className="komo-surface rounded-2xl komo-card-shadow p-4"
      >
        <p className="text-[13px] font-semibold text-komo-text-secondary mb-3">
          🔗 Share Donation Link
        </p>
        <div className="flex gap-3">
          <Button
            data-ocid="donate.copy.button"
            variant="outline"
            className="flex-1 border-komo-border text-komo-text-secondary hover:text-foreground hover:border-komo-blue/50 h-11"
            onClick={handleCopyLink}
          >
            {copied ? (
              <Check size={15} className="mr-2 text-green-400" />
            ) : (
              <Copy size={15} className="mr-2" />
            )}
            {copied ? "Copied!" : "Copy Link"}
          </Button>
          <Button
            data-ocid="donate.share.button"
            className="flex-1 h-11 border-0 text-white"
            style={{ background: "linear-gradient(135deg, #25d366, #128c7e)" }}
            onClick={handleWhatsApp}
          >
            <Share2 size={15} className="mr-2" /> WhatsApp
          </Button>
        </div>
      </motion.div>

      {/* Footer */}
      <p className="text-center text-[11px] text-komo-text-muted mt-6">
        © {new Date().getFullYear()}. Built with ❤️ using{" "}
        <a
          href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
          target="_blank"
          rel="noreferrer"
          className="text-komo-blue hover:underline"
        >
          caffeine.ai
        </a>
      </p>
    </div>
  );
}
