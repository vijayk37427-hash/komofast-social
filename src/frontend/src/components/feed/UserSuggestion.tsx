import { Button } from "@/components/ui/button";
import { Check, UserPlus, Zap } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

interface UserSuggestionProps {
  user: {
    id: string;
    username: string;
    displayName: string;
    initials: string;
    gradient: string;
    isCreator: boolean;
    mutuals: number;
    following: boolean;
  };
  index: number;
}

export default function UserSuggestion({ user, index }: UserSuggestionProps) {
  const [following, setFollowing] = useState(user.following);

  return (
    <motion.div
      data-ocid={`suggestions.item.${index}`}
      className="flex items-center gap-3"
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.06 }}
    >
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center text-[13px] font-bold text-white flex-shrink-0"
        style={{ background: user.gradient }}
      >
        {user.initials}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1">
          <span className="text-[13px] font-semibold text-foreground truncate">
            {user.displayName}
          </span>
          {user.isCreator && (
            <Zap size={10} className="text-komo-blue flex-shrink-0" />
          )}
        </div>
        <p className="text-[11px] text-komo-text-muted">
          {user.mutuals} mutual friends
        </p>
      </div>
      <Button
        data-ocid={`suggestions.follow.${index}`}
        variant={following ? "secondary" : "default"}
        size="sm"
        className={`h-7 text-[11px] px-3 flex-shrink-0 ${
          following
            ? "bg-accent text-komo-text-secondary"
            : "komo-gradient border-0 text-white hover:opacity-90"
        }`}
        onClick={() => setFollowing((f) => !f)}
      >
        {following ? (
          <Check size={12} />
        ) : (
          <UserPlus size={12} className="mr-1" />
        )}
        {following ? "Following" : "Follow"}
      </Button>
    </motion.div>
  );
}
