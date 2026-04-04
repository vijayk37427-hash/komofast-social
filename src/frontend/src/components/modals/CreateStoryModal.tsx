import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Image as ImageIcon, Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useApp } from "../../context/AppContext";

export default function CreateStoryModal() {
  const { createStoryOpen, setCreateStoryOpen } = useApp();
  const [storyText, setStoryText] = useState("");
  const [isPosting, setIsPosting] = useState(false);

  const handleSubmit = async () => {
    setIsPosting(true);
    await new Promise((r) => setTimeout(r, 800));
    toast.success("Story posted! Expires in 24 hours.");
    setStoryText("");
    setIsPosting(false);
    setCreateStoryOpen(false);
  };

  return (
    <Dialog open={createStoryOpen} onOpenChange={setCreateStoryOpen}>
      <DialogContent
        data-ocid="create_story.modal"
        className="komo-surface border-komo-border max-w-sm"
      >
        <DialogHeader>
          <DialogTitle className="text-foreground">Create Story</DialogTitle>
        </DialogHeader>

        {/* Upload area */}
        <div
          className="rounded-2xl aspect-[9/16] max-h-64 flex flex-col items-center justify-center gap-3 cursor-pointer hover:opacity-80 transition-opacity"
          style={{
            background:
              "linear-gradient(135deg, rgba(47,168,255,0.1), rgba(168,85,247,0.1))",
            border: "2px dashed rgba(59,130,246,0.3)",
          }}
        >
          <div className="w-14 h-14 rounded-full komo-gradient flex items-center justify-center">
            <ImageIcon size={24} className="text-white" />
          </div>
          <div className="text-center">
            <p className="text-[13px] font-semibold text-foreground">
              Tap to add photo
            </p>
            <p className="text-[11px] text-komo-text-muted mt-0.5">
              Stories expire after 24 hours
            </p>
          </div>
        </div>

        <Input
          data-ocid="create_story.text.input"
          placeholder="Add text to your story (optional)..."
          value={storyText}
          onChange={(e) => setStoryText(e.target.value)}
          className="bg-accent border-komo-border text-foreground placeholder:text-komo-text-muted"
        />

        <div className="flex gap-3">
          <Button
            data-ocid="create_story.cancel_button"
            variant="secondary"
            className="flex-1"
            onClick={() => setCreateStoryOpen(false)}
          >
            Cancel
          </Button>
          <Button
            data-ocid="create_story.submit_button"
            className="flex-1 komo-gradient border-0 text-white"
            onClick={handleSubmit}
            disabled={isPosting}
          >
            {isPosting ? (
              <Loader2 size={15} className="animate-spin mr-1" />
            ) : null}
            {isPosting ? "Posting..." : "Share Story"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
