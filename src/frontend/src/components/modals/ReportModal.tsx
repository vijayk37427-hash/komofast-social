import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import type { ReportedItem } from "../../context/AppContext";
import { useApp } from "../../context/AppContext";

type Category = ReportedItem["category"];

const CATEGORIES: {
  id: Category;
  label: string;
  emoji: string;
  color: string;
}[] = [
  { id: "fake_news", label: "Fake News", emoji: "🗞️", color: "orange" },
  { id: "adult_content", label: "Adult Content", emoji: "🔞", color: "red" },
  { id: "hate_speech", label: "Hate Speech", emoji: "💬", color: "red" },
  { id: "spam", label: "Spam", emoji: "📢", color: "yellow" },
  { id: "other", label: "Other", emoji: "⚠️", color: "gray" },
];

interface ReportModalProps {
  open: boolean;
  onClose: () => void;
  targetId: string;
  targetUsername: string;
  type: "post" | "user";
}

export default function ReportModal({
  open,
  onClose,
  targetId,
  targetUsername,
  type,
}: ReportModalProps) {
  const { reportItem, currentUser } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null,
  );
  const [description, setDescription] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = () => {
    if (!selectedCategory) {
      toast.error("Please select a reason");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      reportItem({
        id: `r_${Date.now()}`,
        type,
        targetId,
        targetUsername,
        category: selectedCategory,
        description: description || undefined,
        reportedBy: currentUser?.username || "anonymous",
        timestamp: new Date(),
        status: "pending",
      });
      toast.success("Report submitted. Our team will review it.");
      setSubmitting(false);
      setSelectedCategory(null);
      setDescription("");
      onClose();
    }, 800);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          {/* Bottom Sheet */}
          <motion.div
            data-ocid="report.modal"
            className="fixed bottom-0 left-0 right-0 z-50 max-w-lg mx-auto bg-[#141920] rounded-t-3xl border border-white/10 shadow-2xl"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
          >
            {/* Handle */}
            <div className="flex justify-center pt-3 pb-1">
              <div className="w-10 h-1 rounded-full bg-white/20" />
            </div>

            <div className="px-5 pb-8">
              {/* Header */}
              <div className="flex items-center justify-between py-4">
                <h2 className="text-[18px] font-bold text-white">
                  Report {type === "post" ? "Post" : "User"}
                </h2>
                <button
                  type="button"
                  data-ocid="report.close_button"
                  onClick={onClose}
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-white/20 transition-colors"
                >
                  ✕
                </button>
              </div>

              <p className="text-[13px] text-white/50 mb-4">
                Reporting @{targetUsername} · Select a reason below
              </p>

              {/* Categories */}
              <div className="flex flex-col gap-2 mb-5">
                {CATEGORIES.map((cat) => {
                  const isSelected = selectedCategory === cat.id;
                  const borderColor =
                    cat.color === "red"
                      ? isSelected
                        ? "border-red-500 bg-red-500/15"
                        : "border-white/10 hover:border-red-500/50"
                      : cat.color === "orange"
                        ? isSelected
                          ? "border-orange-500 bg-orange-500/15"
                          : "border-white/10 hover:border-orange-500/50"
                        : cat.color === "yellow"
                          ? isSelected
                            ? "border-yellow-500 bg-yellow-500/15"
                            : "border-white/10 hover:border-yellow-500/50"
                          : isSelected
                            ? "border-blue-400 bg-blue-400/15"
                            : "border-white/10 hover:border-blue-400/50";

                  return (
                    <button
                      key={cat.id}
                      type="button"
                      data-ocid={`report.category.${cat.id}`}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl border transition-all text-left ${
                        borderColor
                      }`}
                    >
                      <span className="text-xl">{cat.emoji}</span>
                      <span
                        className={`text-[14px] font-medium ${
                          isSelected ? "text-white" : "text-white/70"
                        }`}
                      >
                        {cat.label}
                      </span>
                      {isSelected && (
                        <span className="ml-auto text-[12px] text-white/50">
                          ✓
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Description */}
              <Textarea
                data-ocid="report.textarea"
                placeholder="Add details (optional)"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="bg-white/5 border-white/10 text-white placeholder:text-white/30 resize-none mb-5 rounded-xl"
                rows={3}
              />

              {/* Submit */}
              <Button
                data-ocid="report.submit_button"
                onClick={handleSubmit}
                disabled={!selectedCategory || submitting}
                className="w-full h-12 rounded-xl text-[15px] font-semibold text-white border-0"
                style={{
                  background:
                    selectedCategory && !submitting
                      ? "linear-gradient(135deg, #2FA8FF, #9B4DCA)"
                      : undefined,
                }}
              >
                {submitting ? "Submitting..." : "Submit Report"}
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
