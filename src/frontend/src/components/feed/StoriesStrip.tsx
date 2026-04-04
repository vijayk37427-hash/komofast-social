import { Plus, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { useApp } from "../../context/AppContext";
import { MOCK_STORIES } from "../../data/mockData";

const STORY_REACTIONS = [
  { emoji: "😍", label: "Love" },
  { emoji: "🔥", label: "Fire" },
  { emoji: "👏", label: "Clap" },
  { emoji: "😂", label: "Haha" },
  { emoji: "😮", label: "Wow" },
  { emoji: "❤️", label: "Heart" },
];

export default function StoriesStrip() {
  const { setCreateStoryOpen } = useApp();
  const [activeStory, setActiveStory] = useState<
    (typeof MOCK_STORIES)[0] | null
  >(null);
  const [storyReaction, setStoryReaction] = useState<string | null>(null);
  const [reactionBurst, setReactionBurst] = useState<string | null>(null);

  const handleStoryReact = (emoji: string) => {
    setReactionBurst(emoji);
    setStoryReaction(emoji);
    setTimeout(() => setReactionBurst(null), 800);
  };

  return (
    <>
      <div className="flex items-center gap-4 py-4 px-1 overflow-x-auto scrollbar-hide">
        <div className="flex items-center gap-3 flex-shrink-0">
          {MOCK_STORIES.map((story, i) => (
            <motion.button
              key={story.id}
              data-ocid={`stories.item.${i + 1}`}
              className="flex flex-col items-center gap-1.5 flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              onClick={() => {
                setActiveStory(story);
                setStoryReaction(null);
              }}
            >
              <div
                className="w-16 h-16 rounded-full p-[3px] flex-shrink-0"
                style={{
                  background: story.viewed
                    ? "#2A313C"
                    : "linear-gradient(135deg, #2FA8FF 0%, #A855F7 100%)",
                }}
              >
                <div
                  className="w-full h-full rounded-full flex items-center justify-center text-[13px] font-bold text-white border-2 border-[#1A1F26]"
                  style={{ background: story.gradient }}
                >
                  {story.initials}
                </div>
              </div>
              <span className="text-[11px] text-komo-text-secondary truncate max-w-[64px] text-center">
                {story.username}
              </span>
            </motion.button>
          ))}

          {/* Your Story */}
          <motion.button
            data-ocid="stories.add.button"
            onClick={() => setCreateStoryOpen(true)}
            className="flex flex-col items-center gap-1.5 flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-16 h-16 rounded-full border-2 border-dashed border-[#2A313C] flex items-center justify-center bg-[#202632] hover:border-komo-blue transition-colors">
              <Plus size={22} className="text-komo-blue" />
            </div>
            <span className="text-[11px] text-komo-text-muted">Your Story</span>
          </motion.button>
        </div>
      </div>

      {/* Story Viewer */}
      <AnimatePresence>
        {activeStory && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0"
              style={{ background: "rgba(0,0,0,0.9)" }}
              onClick={() => setActiveStory(null)}
              onKeyDown={() => setActiveStory(null)}
              role="button"
              tabIndex={-1}
              aria-label="Close story"
            />
            <motion.div
              className="relative w-full max-w-sm h-[80vh] rounded-3xl overflow-hidden"
              style={{ background: activeStory.gradient }}
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 320, damping: 28 }}
            >
              {/* Progress bar */}
              <div className="absolute top-3 left-3 right-3 h-1 rounded-full bg-white/20">
                <motion.div
                  className="h-full rounded-full bg-white"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 5, ease: "linear" }}
                  onAnimationComplete={() => setActiveStory(null)}
                />
              </div>

              {/* Header */}
              <div className="absolute top-8 left-4 right-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-[12px] font-bold text-white"
                    style={{ background: "rgba(255,255,255,0.25)" }}
                  >
                    {activeStory.initials}
                  </div>
                  <div>
                    <p className="text-white text-[13px] font-semibold">
                      {activeStory.username}
                    </p>
                    <p className="text-white/70 text-[11px]">Just now</p>
                  </div>
                </div>
                <button
                  type="button"
                  className="w-8 h-8 rounded-full bg-black/30 flex items-center justify-center"
                  onClick={() => setActiveStory(null)}
                >
                  <X size={16} className="text-white" />
                </button>
              </div>

              {/* Story content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-white text-[22px] font-bold text-center px-8 drop-shadow-lg">
                  ✨ Story by {activeStory.username}
                </p>
              </div>

              {/* Reaction burst */}
              <AnimatePresence>
                {reactionBurst && (
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    initial={{ opacity: 1, scale: 0.5, y: 0 }}
                    animate={{ opacity: 0, scale: 2, y: -60 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7 }}
                  >
                    <span className="text-[80px]">{reactionBurst}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Reaction bar */}
              <div className="absolute bottom-6 left-0 right-0 flex items-center justify-center gap-2">
                <div
                  className="flex items-center gap-3 px-4 py-2.5 rounded-full"
                  style={{
                    background: "rgba(0,0,0,0.5)",
                    backdropFilter: "blur(16px)",
                    border: "1px solid rgba(255,255,255,0.15)",
                  }}
                >
                  {STORY_REACTIONS.map((r, ri) => (
                    <motion.button
                      key={r.emoji}
                      type="button"
                      data-ocid={`stories.reaction.${ri + 1}`}
                      onClick={() => handleStoryReact(r.emoji)}
                      whileHover={{ scale: 1.4, y: -6 }}
                      whileTap={{ scale: 0.9 }}
                      className={`text-[24px] leading-none transition-all ${
                        storyReaction === r.emoji
                          ? "ring-2 ring-white rounded-full"
                          : ""
                      }`}
                      title={r.label}
                    >
                      {r.emoji}
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
