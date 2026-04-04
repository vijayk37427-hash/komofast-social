import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Heart, Send, X } from "lucide-react";
import { useState } from "react";
import { MOCK_COMMENTS } from "../../data/mockData";

interface PostDetailModalProps {
  post: {
    id: string;
    username: string;
    displayName: string;
    initials: string;
    gradient: string;
    image: string | null;
    caption: string;
    likes: number;
    comments: number;
  } | null;
  open: boolean;
  onClose: () => void;
}

export default function PostDetailModal({
  post,
  open,
  onClose,
}: PostDetailModalProps) {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState(MOCK_COMMENTS);

  if (!post) return null;

  const handleComment = () => {
    if (!comment.trim()) return;
    setComments((prev) => [
      {
        id: `c${Date.now()}`,
        username: "you",
        initials: "YO",
        gradient: "linear-gradient(135deg, #2FA8FF, #A855F7)",
        text: comment,
        time: "just now",
        likes: 0,
      },
      ...prev,
    ]);
    setComment("");
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent
        data-ocid="post_detail.modal"
        className="komo-surface border-komo-border max-w-2xl p-0 overflow-hidden"
      >
        <div className="flex flex-col md:flex-row max-h-[80vh]">
          {/* Image side */}
          {post.image && (
            <div className="md:w-1/2 bg-black flex items-center">
              <img
                src={post.image}
                alt="Post"
                className="w-full h-full object-contain max-h-[50vh] md:max-h-full"
              />
            </div>
          )}

          {/* Comments side */}
          <div
            className={`flex flex-col ${post.image ? "md:w-1/2" : "w-full"} p-4`}
          >
            {/* Post author */}
            <div className="flex items-center gap-3 mb-4 pb-3 border-b border-komo-border/50">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center text-[12px] font-bold text-white"
                style={{ background: post.gradient }}
              >
                {post.initials}
              </div>
              <div>
                <p className="text-[13px] font-semibold text-foreground">
                  {post.displayName}
                </p>
                <p className="text-[11px] text-komo-text-muted">
                  {post.caption.slice(0, 60)}...
                </p>
              </div>
            </div>

            {/* Comments list */}
            <ScrollArea className="flex-1 min-h-0 max-h-[40vh]">
              <div className="space-y-3">
                {comments.map((c) => (
                  <div key={c.id} className="flex gap-2">
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0"
                      style={{ background: c.gradient }}
                    >
                      {c.initials}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-baseline gap-2">
                        <span className="text-[12px] font-semibold text-foreground">
                          {c.username}
                        </span>
                        <span className="text-[10px] text-komo-text-muted">
                          {c.time}
                        </span>
                      </div>
                      <p className="text-[12px] text-komo-text-secondary mt-0.5">
                        {c.text}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <button
                          type="button"
                          className="flex items-center gap-1 text-[10px] text-komo-text-muted hover:text-komo-red"
                        >
                          <Heart size={11} /> {c.likes}
                        </button>
                        <button
                          type="button"
                          className="text-[10px] text-komo-text-muted hover:text-foreground"
                        >
                          Reply
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            {/* Comment input */}
            <div className="flex gap-2 mt-3 pt-3 border-t border-komo-border/50">
              <Input
                data-ocid="post_detail.comment.input"
                placeholder="Add a comment..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleComment()}
                className="flex-1 bg-accent border-komo-border text-[13px] h-8"
              />
              <Button
                data-ocid="post_detail.comment.submit_button"
                size="sm"
                className="h-8 px-3 komo-gradient border-0 text-white"
                onClick={handleComment}
                disabled={!comment.trim()}
              >
                <Send size={13} />
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
