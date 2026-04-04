import { Badge } from "@/components/ui/badge";
import {
  Bookmark,
  Flag,
  Link,
  MessageCircle,
  MoreHorizontal,
  Send,
  Share2,
  UserX,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useRef, useState } from "react";
import { toast } from "sonner";
import { useApp } from "../../context/AppContext";
import ReportModal from "../modals/ReportModal";

const REACTIONS = [
  { key: "like", emoji: "👍", label: "Like", color: "#2fa8ff" },
  { key: "love", emoji: "❤️", label: "Love", color: "#ef4444" },
  { key: "haha", emoji: "😂", label: "Haha", color: "#f59e0b" },
  { key: "wow", emoji: "😮", label: "Wow", color: "#f59e0b" },
  { key: "sad", emoji: "😢", label: "Sad", color: "#f59e0b" },
  { key: "angry", emoji: "😡", label: "Angry", color: "#f97316" },
];

interface PostCardProps {
  post: {
    id: string;
    username: string;
    displayName: string;
    initials: string;
    gradient: string;
    isCreator: boolean;
    timestamp: string;
    image: string | null;
    caption: string;
    likes: number;
    comments: number;
    shares: number;
    liked: boolean;
    bookmarked: boolean;
    postType: string;
  };
  onCommentClick?: (postId: string) => void;
  index: number;
}

function formatCount(n: number): string {
  if (n >= 1000000) return `${(n / 1000000).toFixed(1)}M`;
  if (n >= 1000) return `${(n / 1000).toFixed(1)}K`;
  return String(n);
}

export default function PostCard({
  post,
  onCommentClick,
  index,
}: PostCardProps) {
  const { blockedUsers, blockUser } = useApp();
  const [reaction, setReaction] = useState<string | null>(
    post.liked ? "like" : null,
  );
  const [likeCount, setLikeCount] = useState(post.likes);
  const [bookmarked, setBookmarked] = useState(post.bookmarked);
  const [reactionPickerOpen, setReactionPickerOpen] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showAnyway, setShowAnyway] = useState(false);
  const [reportOpen, setReportOpen] = useState(false);
  const [burst, setBurst] = useState(false);
  const longPressTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const isBlocked = blockedUsers.includes(post.username);

  const currentReaction = REACTIONS.find((r) => r.key === reaction);

  const handleSelectReaction = (key: string) => {
    if (reaction === key) {
      setReaction(null);
      setLikeCount((c) => c - 1);
    } else {
      if (!reaction) setLikeCount((c) => c + 1);
      setReaction(key);
      if (key === "love" || key === "like") {
        setBurst(true);
        setTimeout(() => setBurst(false), 600);
      }
    }
    setReactionPickerOpen(false);
  };

  const handleTapLike = () => {
    if (!reactionPickerOpen) {
      handleSelectReaction("like");
    }
  };

  const handleLongPressStart = () => {
    longPressTimer.current = setTimeout(() => {
      setReactionPickerOpen(true);
    }, 400);
  };

  const handleLongPressEnd = () => {
    if (longPressTimer.current) clearTimeout(longPressTimer.current);
  };

  const handleBlock = () => {
    blockUser(post.username);
    toast.success(`@${post.username} blocked`);
    setMenuOpen(false);
  };

  if (isBlocked && !showAnyway) {
    return (
      <motion.div
        data-ocid={`feed.post.item.${index}`}
        className="komo-surface rounded-2xl komo-card-shadow px-4 py-3 flex items-center justify-between"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="flex items-center gap-2 text-komo-text-muted">
          <UserX size={15} />
          <span className="text-[13px]">
            Post from blocked user @{post.username}
          </span>
        </div>
        <button
          type="button"
          className="text-[12px] text-komo-blue hover:underline"
          onClick={() => setShowAnyway(true)}
        >
          Show anyway
        </button>
      </motion.div>
    );
  }

  return (
    <>
      <motion.article
        data-ocid={`feed.post.item.${index}`}
        className="komo-surface rounded-2xl komo-card-shadow overflow-hidden relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.07 }}
      >
        {/* Header */}
        <div className="flex items-center gap-3 p-4">
          <button
            type="button"
            className="w-10 h-10 rounded-full flex items-center justify-center text-[13px] font-bold text-white flex-shrink-0"
            style={{ background: post.gradient }}
          >
            {post.initials}
          </button>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-[14px] font-semibold text-foreground truncate">
                {post.displayName}
              </span>
              {post.isCreator && (
                <Badge className="text-[9px] px-1.5 py-0 h-4 bg-komo-badge/20 text-komo-blue border-komo-blue/30 font-semibold">
                  <Zap size={9} className="mr-0.5" /> CREATOR
                </Badge>
              )}
            </div>
            <div className="flex items-center gap-1">
              <span className="text-[12px] text-komo-text-muted">
                @{post.username}
              </span>
              <span className="text-komo-text-muted text-[10px]">·</span>
              <span className="text-[12px] text-komo-text-muted">
                {post.timestamp}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-1 relative" ref={menuRef}>
            <button
              type="button"
              className="text-[11px] font-medium px-2.5 py-1 rounded-full border border-komo-blue/30 text-komo-blue hover:bg-komo-blue/10 transition-colors"
              data-ocid={`feed.post.boost_button.${index}`}
            >
              Boost
            </button>
            <button
              type="button"
              data-ocid={`feed.post.dropdown_menu.${index}`}
              className="text-komo-text-muted hover:text-foreground p-1 rounded-lg hover:bg-white/5"
              onClick={() => setMenuOpen((v) => !v)}
            >
              <MoreHorizontal size={18} />
            </button>

            <AnimatePresence>
              {menuOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setMenuOpen(false)}
                    onKeyDown={() => setMenuOpen(false)}
                    role="button"
                    tabIndex={-1}
                    aria-label="Close menu"
                  />
                  <motion.div
                    className="absolute right-0 top-8 z-50 bg-[#1A2030] border border-white/10 rounded-xl shadow-2xl min-w-[170px] overflow-hidden"
                    initial={{ opacity: 0, scale: 0.9, y: -5 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: -5 }}
                    transition={{ duration: 0.15 }}
                  >
                    <button
                      type="button"
                      data-ocid={`feed.post.report.${index}`}
                      className="flex items-center gap-2.5 w-full px-4 py-3 text-[13px] text-orange-400 hover:bg-white/5 transition-colors"
                      onClick={() => {
                        setMenuOpen(false);
                        setReportOpen(true);
                      }}
                    >
                      <Flag size={14} /> Report Post
                    </button>
                    <div className="h-px bg-white/5" />
                    <button
                      type="button"
                      data-ocid={`feed.post.block.${index}`}
                      className="flex items-center gap-2.5 w-full px-4 py-3 text-[13px] text-red-400 hover:bg-white/5 transition-colors"
                      onClick={handleBlock}
                    >
                      <UserX size={14} /> Block @{post.username}
                    </button>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Image */}
        {post.image && (
          <div className="w-full overflow-hidden">
            <img
              src={post.image}
              alt="Post"
              className="w-full object-cover max-h-80 hover:scale-[1.01] transition-transform duration-500"
            />
          </div>
        )}

        {/* Caption */}
        <div className="px-4 pt-3">
          <p className="text-[14px] text-foreground leading-relaxed line-clamp-3">
            {post.caption}
          </p>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-1">
            {/* Reaction Button */}
            <div className="relative">
              <AnimatePresence>
                {reactionPickerOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-40"
                      onClick={() => setReactionPickerOpen(false)}
                      onKeyDown={() => setReactionPickerOpen(false)}
                      role="button"
                      tabIndex={-1}
                      aria-label="Close reaction picker"
                    />
                    <motion.div
                      data-ocid={`feed.post.popover.${index}`}
                      className="absolute bottom-12 left-0 z-50 flex items-center gap-1 px-3 py-2 rounded-full"
                      style={{
                        background: "rgba(20,26,36,0.95)",
                        backdropFilter: "blur(20px)",
                        border: "1px solid rgba(255,255,255,0.12)",
                        boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
                      }}
                      initial={{ opacity: 0, scale: 0.6, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.6, y: 10 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 25,
                      }}
                    >
                      {REACTIONS.map((r, ri) => (
                        <motion.button
                          key={r.key}
                          type="button"
                          onClick={() => handleSelectReaction(r.key)}
                          className="flex flex-col items-center gap-0.5 group"
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: ri * 0.04 }}
                          whileHover={{ scale: 1.35, y: -4 }}
                          title={r.label}
                        >
                          <span className="text-[22px] leading-none">
                            {r.emoji}
                          </span>
                          <span
                            className="text-[9px] font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                            style={{ color: r.color }}
                          >
                            {r.label}
                          </span>
                        </motion.button>
                      ))}
                    </motion.div>
                  </>
                )}
              </AnimatePresence>

              <motion.button
                data-ocid={`feed.post.like.${index}`}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl hover:bg-accent transition-colors"
                whileTap={{ scale: 0.85 }}
                onClick={handleTapLike}
                onMouseEnter={() => setReactionPickerOpen(true)}
                onMouseLeave={() =>
                  setTimeout(() => setReactionPickerOpen(false), 300)
                }
                onTouchStart={handleLongPressStart}
                onTouchEnd={handleLongPressEnd}
              >
                <span className="text-[19px] leading-none">
                  {currentReaction ? currentReaction.emoji : "👍"}
                </span>
                <span
                  className="text-[13px] font-medium"
                  style={{
                    color: currentReaction ? currentReaction.color : "#6b7280",
                  }}
                >
                  {formatCount(likeCount)}
                </span>
              </motion.button>
            </div>

            {/* Comment */}
            <button
              type="button"
              data-ocid={`feed.post.comment.${index}`}
              onClick={() => onCommentClick?.(post.id)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl hover:bg-accent transition-colors group"
            >
              <MessageCircle
                size={19}
                className="text-komo-text-secondary group-hover:text-komo-blue"
              />
              <span className="text-[13px] font-medium text-komo-text-secondary">
                {formatCount(post.comments)}
              </span>
            </button>

            {/* Share dropdown */}
            <div className="relative">
              <button
                type="button"
                data-ocid={`feed.post.share.${index}`}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl hover:bg-accent transition-colors group"
                onClick={() => setShareOpen((v) => !v)}
              >
                <Share2
                  size={19}
                  className="text-komo-text-secondary group-hover:text-komo-purple"
                />
                <span className="text-[13px] font-medium text-komo-text-secondary">
                  {formatCount(post.shares)}
                </span>
              </button>

              <AnimatePresence>
                {shareOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-40"
                      onClick={() => setShareOpen(false)}
                      onKeyDown={() => setShareOpen(false)}
                      role="button"
                      tabIndex={-1}
                      aria-label="Close share menu"
                    />
                    <motion.div
                      data-ocid={`feed.post.dropdown_menu.share.${index}`}
                      className="absolute bottom-12 left-0 z-50 bg-[#1A2030] border border-white/10 rounded-2xl shadow-2xl min-w-[200px] overflow-hidden"
                      initial={{ opacity: 0, scale: 0.9, y: 5 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9, y: 5 }}
                      transition={{ duration: 0.15 }}
                    >
                      <div className="px-4 py-2 border-b border-white/5">
                        <p className="text-[11px] text-komo-text-muted font-medium uppercase tracking-wider">
                          Share to
                        </p>
                      </div>
                      {[
                        {
                          icon: "📖",
                          label: "Share to Story",
                          action: () => toast.success("Shared to your story!"),
                        },
                        {
                          icon: Link,
                          label: "Copy Link",
                          action: () => {
                            toast.success("Link copied!");
                          },
                        },
                        {
                          icon: Send,
                          label: "Send in Chat",
                          action: () => toast.success("Opening chat..."),
                        },
                      ].map((opt) => (
                        <button
                          key={opt.label}
                          type="button"
                          className="flex items-center gap-3 w-full px-4 py-3 text-[13px] text-foreground hover:bg-white/5 transition-colors"
                          onClick={() => {
                            opt.action();
                            setShareOpen(false);
                          }}
                        >
                          {typeof opt.icon === "string" ? (
                            <span className="text-[16px]">{opt.icon}</span>
                          ) : (
                            <opt.icon
                              size={15}
                              className="text-komo-text-secondary"
                            />
                          )}
                          {opt.label}
                        </button>
                      ))}
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Bookmark */}
          <motion.button
            data-ocid={`feed.post.bookmark.${index}`}
            onClick={() => setBookmarked((b) => !b)}
            whileTap={{ scale: 0.85 }}
            className="p-2 rounded-xl hover:bg-accent transition-colors"
          >
            <Bookmark
              size={19}
              className={
                bookmarked
                  ? "fill-komo-blue text-komo-blue"
                  : "text-komo-text-secondary"
              }
              strokeWidth={bookmarked ? 0 : 2}
            />
          </motion.button>
        </div>

        {burst && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            initial={{ opacity: 1, scale: 0.5 }}
            animate={{ opacity: 0, scale: 2.5 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[80px]">
              {currentReaction?.emoji ?? "👍"}
            </span>
          </motion.div>
        )}
      </motion.article>

      <ReportModal
        open={reportOpen}
        onClose={() => setReportOpen(false)}
        targetId={post.id}
        targetUsername={post.username}
        type="post"
      />
    </>
  );
}
