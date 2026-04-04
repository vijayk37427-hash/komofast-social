import { Edit2, Film, Play, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import ReelCard from "../components/feed/ReelCard";
import ReelAIEditorModal from "../components/modals/ReelAIEditorModal";
import { useApp } from "../context/AppContext";
import { MOCK_REELS } from "../data/mockData";

type Reel = (typeof MOCK_REELS)[number];

function ReelDetailModal({
  reel,
  onClose,
}: { reel: Reel; onClose: () => void }) {
  return (
    <motion.div
      data-ocid="reels.modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <button
        type="button"
        aria-label="Close"
        className="absolute inset-0 bg-black/80 backdrop-blur-md w-full"
        onClick={onClose}
      />
      <motion.div
        className="relative w-full max-w-sm rounded-3xl overflow-hidden"
        style={{ aspectRatio: "9/16", maxHeight: "85vh" }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: "spring", stiffness: 350, damping: 30 }}
      >
        <img
          src={reel.image}
          alt={reel.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

        {/* Close */}
        <button
          type="button"
          data-ocid="reels.close_button"
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center"
        >
          <X size={18} className="text-white" />
        </button>

        {/* Center play */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
            <Play size={28} className="text-white fill-white ml-1" />
          </div>
        </div>

        {/* Bottom info */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="flex items-center gap-2 mb-2">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center text-[12px] font-bold text-white"
              style={{ background: reel.gradient }}
            >
              {reel.initials}
            </div>
            <div>
              <p className="text-white font-semibold text-sm">
                {reel.displayName}
              </p>
              <p className="text-white/60 text-[12px]">@{reel.username}</p>
            </div>
          </div>
          <p className="text-white/90 text-sm leading-relaxed mb-3">
            {reel.title}
          </p>
          <div className="flex items-center gap-4 text-white/70 text-[13px]">
            <span>❤️ {(reel.likes / 1000).toFixed(1)}K</span>
            <span>👁 {reel.views} views</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Reels() {
  const [selectedReel, setSelectedReel] = useState<Reel | null>(null);
  const { navigate } = useApp();
  const [aiEditorOpen, setAiEditorOpen] = useState(false);

  const handleCreateReel = () => {
    setAiEditorOpen(true);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <div
            className="w-8 h-8 rounded-xl flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #A855F7, #EC4899)" }}
          >
            <Film size={16} className="text-white" />
          </div>
          <h1 className="text-xl font-bold text-foreground">Reels</h1>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            data-ocid="reels.edit.button"
            onClick={() => navigate("/reel-editor")}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[13px] font-semibold text-white"
            style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)" }}
          >
            <Edit2 size={14} />
            Edit
          </button>
          <button
            type="button"
            data-ocid="reels.create.button"
            onClick={handleCreateReel}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[13px] font-semibold text-white"
            style={{ background: "linear-gradient(135deg, #A855F7, #EC4899)" }}
          >
            <Film size={14} />
            Create Reel
          </button>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {MOCK_REELS.map((reel, i) => (
          <button
            type="button"
            key={reel.id}
            onClick={() => setSelectedReel(reel)}
            className="text-left w-full"
          >
            <ReelCard reel={reel} index={i + 1} />
          </button>
        ))}
      </div>

      {/* Detail modal */}
      <AnimatePresence>
        {selectedReel && (
          <ReelDetailModal
            reel={selectedReel}
            onClose={() => setSelectedReel(null)}
          />
        )}
      </AnimatePresence>

      {/* AI Editor Modal */}
      <ReelAIEditorModal
        open={aiEditorOpen}
        onClose={() => setAiEditorOpen(false)}
      />
    </div>
  );
}
