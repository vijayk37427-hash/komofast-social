import { Film, Image as ImageIcon, Plus, Sparkles, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { useApp } from "../../context/AppContext";

const ACTIONS = [
  {
    label: "Post",
    icon: ImageIcon,
    type: "post" as const,
    ocid: "fab.post.button",
    color: "from-blue-500 to-blue-600",
  },
  {
    label: "Story",
    icon: Sparkles,
    type: "story" as const,
    ocid: "fab.story.button",
    color: "from-orange-500 to-pink-500",
  },
  {
    label: "Reel",
    icon: Film,
    type: "reel" as const,
    ocid: "fab.reel.button",
    color: "from-purple-500 to-pink-500",
  },
];

export default function FAB() {
  const {
    setCreatePostOpen,
    setCreateStoryOpen,
    setCreatePostInitialType,
    setCameraReelOpen,
    currentPath,
  } = useApp();
  const [open, setOpen] = useState(false);

  // Hide on admin page
  if (currentPath === "/admin") return null;

  const handleAction = (type: "post" | "story" | "reel") => {
    setOpen(false);
    if (type === "story") {
      setCreateStoryOpen(true);
    } else if (type === "reel") {
      setCameraReelOpen(true);
    } else {
      setCreatePostInitialType(type);
      setCreatePostOpen(true);
    }
  };

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="fab-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      {/* Speed dial actions */}
      <div className="fixed bottom-20 right-4 z-50 flex flex-col items-end gap-3">
        <AnimatePresence>
          {open &&
            ACTIONS.map((action, i) => (
              <motion.button
                key={action.type}
                data-ocid={action.ocid}
                type="button"
                onClick={() => handleAction(action.type)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${action.color} text-white text-sm font-semibold shadow-lg`}
                initial={{ opacity: 0, x: 40, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 40, scale: 0.8 }}
                transition={{
                  delay: (ACTIONS.length - 1 - i) * 0.06,
                  type: "spring",
                  stiffness: 400,
                  damping: 25,
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <action.icon size={16} />
                <span>{action.label}</span>
              </motion.button>
            ))}
        </AnimatePresence>

        {/* Main FAB */}
        <motion.button
          data-ocid="fab.create.button"
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="w-14 h-14 rounded-full komo-gradient shadow-glow flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.92 }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <motion.div
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            {open ? (
              <X size={24} className="text-white" />
            ) : (
              <Plus size={26} className="text-white" strokeWidth={2.5} />
            )}
          </motion.div>
        </motion.button>
      </div>
    </>
  );
}
