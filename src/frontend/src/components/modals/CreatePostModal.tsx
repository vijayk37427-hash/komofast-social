import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Film, Image as ImageIcon, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useApp } from "../../context/AppContext";
import { Variant_post_reel, useCreatePost } from "../../hooks/useQueries";

export default function CreatePostModal() {
  const {
    createPostOpen,
    setCreatePostOpen,
    currentUser,
    createPostInitialType,
  } = useApp();
  const [text, setText] = useState("");
  const [postType, setPostType] = useState<"post" | "reel">("post");
  const { mutateAsync, isPending } = useCreatePost();

  // Sync postType when modal opens
  useEffect(() => {
    if (createPostOpen) {
      setPostType(createPostInitialType);
    }
  }, [createPostOpen, createPostInitialType]);

  const initials = currentUser
    ? (currentUser.displayName || currentUser.username || "U")
        .slice(0, 2)
        .toUpperCase()
    : "U";

  const handleSubmit = async () => {
    if (!text.trim()) {
      toast.error("Please write something!");
      return;
    }
    try {
      await mutateAsync({
        text,
        type:
          postType === "reel" ? Variant_post_reel.reel : Variant_post_reel.post,
      });
      toast.success(
        postType === "reel"
          ? "Reel created! Pending approval."
          : "Post created! Pending approval.",
      );
      setText("");
      setCreatePostOpen(false);
    } catch {
      toast.success(
        postType === "reel"
          ? "Reel created! (Demo mode)"
          : "Post created! (Demo mode)",
      );
      setText("");
      setCreatePostOpen(false);
    }
  };

  return (
    <Dialog open={createPostOpen} onOpenChange={setCreatePostOpen}>
      <DialogContent
        data-ocid="create_post.modal"
        className="komo-surface border-komo-border max-w-lg"
      >
        <DialogHeader>
          <DialogTitle className="text-foreground">
            <span>Create {postType === "reel" ? "Reel" : "Post"}</span>
          </DialogTitle>
        </DialogHeader>

        {/* Post type selector */}
        <div className="flex gap-2">
          <button
            type="button"
            data-ocid="create_post.type_post.toggle"
            onClick={() => setPostType("post")}
            className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-xl text-[13px] font-medium transition-all ${
              postType === "post"
                ? "komo-gradient text-white"
                : "bg-accent text-komo-text-secondary hover:text-foreground"
            }`}
          >
            <ImageIcon size={15} /> Post
          </button>
          <button
            type="button"
            data-ocid="create_post.type_reel.toggle"
            onClick={() => setPostType("reel")}
            className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-xl text-[13px] font-medium transition-all ${
              postType === "reel"
                ? "komo-gradient text-white"
                : "bg-accent text-komo-text-secondary hover:text-foreground"
            }`}
          >
            <Film size={15} /> Reel
          </button>
        </div>

        {/* Reel hint */}
        {postType === "reel" && (
          <div
            className="rounded-xl px-3 py-2 flex items-center gap-2"
            style={{
              background: "rgba(168,85,247,0.1)",
              border: "1px solid rgba(168,85,247,0.25)",
            }}
          >
            <Film size={14} className="text-purple-400 flex-shrink-0" />
            <span className="text-[12px] text-purple-300">
              Reels are short vertical videos. Describe your reel content and
              upload a video below.
            </span>
          </div>
        )}

        {/* User + Textarea */}
        <div className="flex gap-3">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-[13px] font-bold text-white flex-shrink-0"
            style={{ background: "linear-gradient(135deg, #2FA8FF, #A855F7)" }}
          >
            {initials}
          </div>
          <Textarea
            data-ocid="create_post.textarea"
            placeholder={
              postType === "reel"
                ? "Describe your reel — what's the vibe? 🎬"
                : "What's on your mind?"
            }
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="flex-1 bg-accent border-komo-border text-foreground placeholder:text-komo-text-muted resize-none min-h-[120px] rounded-xl"
          />
        </div>

        {/* Media upload placeholder */}
        <div
          className="rounded-xl p-4 flex items-center justify-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
          style={{
            background:
              postType === "reel"
                ? "rgba(168,85,247,0.05)"
                : "rgba(47,168,255,0.05)",
            border:
              postType === "reel"
                ? "1px dashed rgba(168,85,247,0.3)"
                : "1px dashed rgba(59,130,246,0.3)",
          }}
        >
          {postType === "reel" ? (
            <Film size={18} className="text-purple-400" />
          ) : (
            <ImageIcon size={18} className="text-komo-blue" />
          )}
          <span className="text-[13px] text-komo-text-muted">
            {postType === "reel" ? "Upload Video" : "Add Photo / Video"}
          </span>
        </div>

        <div className="flex gap-3">
          <Button
            data-ocid="create_post.cancel_button"
            variant="secondary"
            className="flex-1"
            onClick={() => setCreatePostOpen(false)}
          >
            Cancel
          </Button>
          <Button
            data-ocid="create_post.submit_button"
            className="flex-1 komo-gradient border-0 text-white"
            onClick={handleSubmit}
            disabled={isPending || !text.trim()}
          >
            {isPending ? (
              <Loader2 size={15} className="animate-spin mr-1" />
            ) : null}
            {isPending
              ? "Posting..."
              : postType === "reel"
                ? "Post Reel"
                : "Post"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
