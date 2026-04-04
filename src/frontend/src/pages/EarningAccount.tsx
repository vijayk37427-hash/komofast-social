import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  BadgeCheck,
  Building2,
  CreditCard,
  DollarSign,
  FileText,
  Plus,
  ShoppingCart,
  Star,
  TrendingUp,
  Trophy,
  Users,
  Wallet,
} from "lucide-react";
import { motion } from "motion/react";
import { toast } from "sonner";
import { useApp } from "../context/AppContext";

const INCOME_SOURCES = [
  {
    icon: "📹",
    label: "Ad Revenue",
    amount: 3240,
    change: "+12%",
    positive: true,
  },
  {
    icon: "🎓",
    label: "Course Sales",
    amount: 5600,
    change: "+8%",
    positive: true,
  },
  {
    icon: "👥",
    label: "Referrals",
    amount: 1800,
    change: "+25%",
    positive: true,
  },
  {
    icon: "⭐",
    label: "Subscriptions",
    amount: 1450,
    change: "+5%",
    positive: true,
  },
  {
    icon: "🏆",
    label: "Honor Rewards",
    amount: 450,
    change: "redeemed",
    positive: false,
  },
  {
    icon: "🛒",
    label: "Marketplace",
    amount: 307.5,
    change: "+3%",
    positive: true,
  },
];

const MONTHLY_DATA = [
  { month: "Oct", amount: 8200, label: "₹8.2K" },
  { month: "Nov", amount: 9100, label: "₹9.1K" },
  { month: "Dec", amount: 11400, label: "₹11.4K" },
  { month: "Jan", amount: 10800, label: "₹10.8K" },
  { month: "Feb", amount: 13200, label: "₹13.2K" },
  { month: "Mar", amount: 12800, label: "₹12.8K" },
];

const PENDING_PAYOUTS = [
  {
    id: 1,
    amount: 3240,
    date: "Mar 20, 2026",
    method: "UPI – komofast@upi",
    status: "Processing",
  },
  {
    id: 2,
    amount: 1800,
    date: "Mar 15, 2026",
    method: "SBI ****4521",
    status: "Pending",
  },
  {
    id: 3,
    amount: 850,
    date: "Mar 10, 2026",
    method: "UPI – komofast@upi",
    status: "Pending",
  },
];

const maxMonthly = Math.max(...MONTHLY_DATA.map((d) => d.amount));

export default function EarningAccount() {
  const { navigate } = useApp();

  return (
    <div className="max-w-2xl mx-auto px-4 py-4 pb-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="flex items-center gap-3 mb-6"
      >
        <button
          type="button"
          data-ocid="earning_account.back.button"
          onClick={() => navigate("/profile")}
          className="w-9 h-9 rounded-full flex items-center justify-center text-komo-text-secondary hover:text-foreground transition-colors"
          style={{ background: "rgba(255,255,255,0.06)" }}
        >
          <ArrowLeft size={18} />
        </button>
        <div>
          <h1 className="text-[20px] font-bold text-foreground">
            Earning Account
          </h1>
          <p className="text-[12px] text-komo-text-muted">
            Your complete income overview
          </p>
        </div>
      </motion.div>

      {/* Balance Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.05 }}
        className="rounded-2xl p-5 mb-5 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, rgba(47,168,255,0.22) 0%, rgba(168,85,247,0.28) 100%)",
          border: "1px solid rgba(168,85,247,0.35)",
          boxShadow:
            "0 8px 32px rgba(168,85,247,0.2), 0 2px 8px rgba(47,168,255,0.15)",
        }}
      >
        <div
          className="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, #a855f7, transparent)",
          }}
        />
        <div
          className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, #2fa8ff, transparent)",
          }}
        />

        <div className="flex items-start gap-3 mb-1">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #2fa8ff, #a855f7)" }}
          >
            <Wallet size={18} className="text-white" />
          </div>
          <div>
            <p className="text-[11px] text-white/60 uppercase tracking-widest">
              Total Balance
            </p>
            <p className="text-[32px] font-bold text-white leading-tight">
              ₹12,847<span className="text-[20px]">.50</span>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-4 ml-1">
          <span className="text-[15px] text-yellow-300 font-semibold">
            🪙 6,230 KomoCoin
          </span>
        </div>

        <div className="flex gap-3">
          <Button
            data-ocid="earning_account.withdraw.primary_button"
            className="komo-gradient border-0 text-white flex-1 h-9 text-[13px] font-semibold"
            onClick={() => toast.success("Withdrawal request submitted!")}
          >
            <TrendingUp size={14} className="mr-1.5" />
            Withdraw
          </Button>
          <Button
            data-ocid="earning_account.add_bank.secondary_button"
            variant="outline"
            className="flex-1 h-9 text-[13px] font-semibold border-white/30 text-white hover:bg-white/10"
            onClick={() => toast.info("Bank account feature coming soon!")}
          >
            <Plus size={14} className="mr-1.5" />
            Add Bank Account
          </Button>
        </div>
      </motion.div>

      {/* Linked Accounts */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.1 }}
        className="komo-surface rounded-2xl p-4 mb-5"
        style={{ border: "1px solid rgba(255,255,255,0.08)" }}
      >
        <div className="flex items-center justify-between mb-3">
          <p className="text-[13px] font-semibold text-foreground flex items-center gap-1.5">
            <CreditCard size={14} className="text-komo-blue" />
            Linked Accounts
          </p>
          <button
            type="button"
            data-ocid="earning_account.add_account.button"
            className="flex items-center gap-1 text-[11px] text-komo-blue hover:text-komo-purple transition-colors"
            onClick={() => toast.info("Add account coming soon!")}
          >
            <Plus size={12} /> Add New Account
          </button>
        </div>

        <div className="space-y-3">
          <div
            className="flex items-center gap-3 p-3 rounded-xl"
            style={{ background: "rgba(255,255,255,0.04)" }}
          >
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center text-[16px] flex-shrink-0"
              style={{ background: "rgba(47,168,255,0.15)" }}
            >
              📱
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[13px] font-semibold text-foreground">
                komofast@upi
              </p>
              <p className="text-[11px] text-komo-text-muted">UPI ID</p>
            </div>
            <Badge
              className="text-[10px] font-bold"
              style={{
                background: "rgba(34,197,94,0.15)",
                color: "#4ade80",
                border: "1px solid rgba(34,197,94,0.3)",
              }}
            >
              <BadgeCheck size={10} className="mr-1" /> Verified
            </Badge>
          </div>

          <div
            className="flex items-center gap-3 p-3 rounded-xl"
            style={{ background: "rgba(255,255,255,0.04)" }}
          >
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(168,85,247,0.15)" }}
            >
              <Building2 size={16} className="text-komo-purple" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[13px] font-semibold text-foreground">
                SBI ****4521
              </p>
              <p className="text-[11px] text-komo-text-muted">Bank Account</p>
            </div>
            <Badge
              className="text-[10px] font-bold"
              style={{
                background: "rgba(34,197,94,0.15)",
                color: "#4ade80",
                border: "1px solid rgba(34,197,94,0.3)",
              }}
            >
              <BadgeCheck size={10} className="mr-1" /> Verified
            </Badge>
          </div>
        </div>
      </motion.div>

      {/* Income Sources */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.15 }}
        className="mb-5"
      >
        <p className="text-[13px] font-semibold text-komo-text-secondary mb-3 flex items-center gap-1.5">
          <DollarSign size={14} className="text-komo-blue" /> Income Sources
        </p>
        <div className="grid grid-cols-2 gap-3">
          {INCOME_SOURCES.map((src, i) => (
            <motion.div
              key={src.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.18 + i * 0.05 }}
              data-ocid={`earning_account.income.item.${i + 1}`}
              className="rounded-2xl p-4"
              style={{
                background:
                  "linear-gradient(135deg, rgba(47,168,255,0.07), rgba(168,85,247,0.1))",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div className="flex items-start justify-between mb-2">
                <span className="text-[22px]">{src.icon}</span>
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    src.positive
                      ? "bg-green-500/15 text-green-400 border border-green-500/25"
                      : "bg-blue-500/15 text-blue-300 border border-blue-500/25"
                  }`}
                >
                  {src.change}
                </span>
              </div>
              <p className="text-[18px] font-bold komo-gradient-text leading-tight">
                ₹{src.amount.toLocaleString()}
              </p>
              <p className="text-[11px] text-komo-text-muted mt-0.5">
                {src.label}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Monthly Chart */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.3 }}
        className="komo-surface rounded-2xl p-4 mb-5"
        style={{ border: "1px solid rgba(255,255,255,0.08)" }}
      >
        <p className="text-[13px] font-semibold text-foreground mb-4 flex items-center gap-1.5">
          <TrendingUp size={14} className="text-komo-purple" /> Monthly Earnings
        </p>
        <div className="space-y-3">
          {MONTHLY_DATA.map((d, i) => (
            <div key={d.month} className="flex items-center gap-3">
              <span className="text-[11px] text-komo-text-muted w-7 flex-shrink-0">
                {d.month}
              </span>
              <div className="flex-1 h-6 rounded-full overflow-hidden bg-white/5">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(d.amount / maxMonthly) * 100}%` }}
                  transition={{
                    duration: 0.7,
                    delay: 0.35 + i * 0.07,
                    ease: "easeOut",
                  }}
                  className="h-full rounded-full"
                  style={{
                    background: "linear-gradient(90deg, #2fa8ff, #a855f7)",
                  }}
                />
              </div>
              <span className="text-[11px] font-semibold komo-gradient-text w-12 text-right flex-shrink-0">
                {d.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Pending Payouts */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.35 }}
        className="komo-surface rounded-2xl p-4 mb-5"
        style={{ border: "1px solid rgba(255,255,255,0.08)" }}
      >
        <p className="text-[13px] font-semibold text-foreground mb-3 flex items-center gap-1.5">
          <Trophy size={14} className="text-yellow-400" /> Pending Payouts
        </p>
        <div className="space-y-2">
          {PENDING_PAYOUTS.map((payout, i) => (
            <div
              key={payout.id}
              data-ocid={`earning_account.payout.item.${i + 1}`}
              className="flex items-center gap-3 p-3 rounded-xl"
              style={{ background: "rgba(255,255,255,0.04)" }}
            >
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                style={{
                  background:
                    payout.status === "Processing"
                      ? "rgba(47,168,255,0.15)"
                      : "rgba(168,85,247,0.15)",
                }}
              >
                <DollarSign
                  size={15}
                  className={
                    payout.status === "Processing"
                      ? "text-komo-blue"
                      : "text-komo-purple"
                  }
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[13px] font-semibold text-foreground">
                  ₹{payout.amount.toLocaleString()}
                </p>
                <p className="text-[11px] text-komo-text-muted truncate">
                  {payout.method} · {payout.date}
                </p>
              </div>
              <Badge
                className="text-[10px] font-bold flex-shrink-0"
                style={{
                  background:
                    payout.status === "Processing"
                      ? "rgba(47,168,255,0.15)"
                      : "rgba(168,85,247,0.15)",
                  color: payout.status === "Processing" ? "#2fa8ff" : "#c084fc",
                  border:
                    payout.status === "Processing"
                      ? "1px solid rgba(47,168,255,0.3)"
                      : "1px solid rgba(168,85,247,0.3)",
                }}
              >
                {payout.status}
              </Badge>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Tax Summary */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.4 }}
        className="rounded-2xl p-4"
        style={{
          background:
            "linear-gradient(135deg, rgba(47,168,255,0.08), rgba(168,85,247,0.12))",
          border: "1px solid rgba(168,85,247,0.25)",
        }}
      >
        <p className="text-[13px] font-semibold text-foreground mb-3 flex items-center gap-1.5">
          <FileText size={14} className="text-komo-blue" /> Tax &amp; Summary
        </p>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <p className="text-[12px] text-komo-text-muted">Gross Earnings</p>
            <p className="text-[13px] font-semibold text-foreground">
              ₹12,847.50
            </p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-[12px] text-komo-text-muted">
              TDS Deducted (10%)
            </p>
            <p className="text-[13px] font-semibold text-red-400">−₹1,284</p>
          </div>
          <div
            className="h-px w-full my-1"
            style={{ background: "rgba(255,255,255,0.08)" }}
          />
          <div className="flex justify-between items-center">
            <p className="text-[13px] font-bold text-foreground">Net Payable</p>
            <p className="text-[16px] font-bold komo-gradient-text">₹11,563</p>
          </div>
          <div className="flex justify-between items-center pt-1">
            <p className="text-[11px] text-komo-text-muted flex items-center gap-1">
              <Users size={11} /> PAN Card
            </p>
            <p className="text-[11px] text-green-400 font-semibold flex items-center gap-1">
              <BadgeCheck size={11} /> ABCDE1234F – Linked
            </p>
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <div className="mt-8 text-center">
        <p className="text-[11px] text-komo-text-muted">
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
    </div>
  );
}
