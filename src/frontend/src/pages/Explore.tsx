import { Globe, MapPin, TrendingUp } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import PostCard from "../components/feed/PostCard";
import ReelCard from "../components/feed/ReelCard";
import PostDetailModal from "../components/modals/PostDetailModal";
import { MOCK_POSTS, MOCK_REELS, TRENDING_HASHTAGS } from "../data/mockData";

const LOCAL_POSTS = MOCK_POSTS.slice(0, 4);
const GLOBAL_POSTS = [...MOCK_POSTS].reverse();

export default function Explore() {
  const [tab, setTab] = useState<"local" | "global">("local");
  const [selectedPost, setSelectedPost] = useState<
    (typeof MOCK_POSTS)[0] | null
  >(null);

  const posts = tab === "local" ? LOCAL_POSTS : GLOBAL_POSTS;

  return (
    <div className="max-w-4xl mx-auto px-4 py-4">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <TrendingUp size={22} className="text-komo-blue" />
        <h1 className="text-[20px] font-bold text-foreground">Trending Feed</h1>
      </div>

      {/* Toggle */}
      <div
        data-ocid="explore.feed.tab"
        className="flex p-1 rounded-full bg-accent mb-6 w-fit"
      >
        <button
          type="button"
          onClick={() => setTab("local")}
          className={`flex items-center gap-2 px-5 py-2 rounded-full text-[13px] font-semibold transition-all ${
            tab === "local"
              ? "komo-gradient text-white shadow-sm"
              : "text-komo-text-secondary hover:text-foreground"
          }`}
        >
          <MapPin size={14} /> Local
        </button>
        <button
          type="button"
          onClick={() => setTab("global")}
          className={`flex items-center gap-2 px-5 py-2 rounded-full text-[13px] font-semibold transition-all ${
            tab === "global"
              ? "komo-gradient text-white shadow-sm"
              : "text-komo-text-secondary hover:text-foreground"
          }`}
        >
          <Globe size={14} /> Global
        </button>
      </div>

      {/* Trending hashtags */}
      <div className="komo-surface rounded-2xl komo-card-shadow p-4 mb-6">
        <h3 className="text-[13px] font-semibold text-foreground mb-3">
          🔥 Trending Hashtags
        </h3>
        <div className="flex flex-wrap gap-2">
          {TRENDING_HASHTAGS.map((tag, i) => (
            <motion.button
              key={tag}
              data-ocid={`explore.hashtag.item.${i + 1}`}
              className="text-[12px] font-medium px-3 py-1.5 rounded-full bg-[#202632] text-komo-text-secondary hover:text-komo-blue hover:bg-komo-blue/10 transition-colors border border-komo-border/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.04 }}
            >
              {tag}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Content grid */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_280px] gap-5">
        {/* Posts */}
        <div className="flex flex-col gap-4">
          <h3 className="text-[14px] font-semibold text-foreground">
            Trending Posts
          </h3>
          {posts.map((post, i) => (
            <PostCard
              key={post.id}
              post={post}
              index={i + 1}
              onCommentClick={() => setSelectedPost(post)}
            />
          ))}
        </div>

        {/* Reels column */}
        <div className="hidden md:flex flex-col gap-4">
          <h3 className="text-[14px] font-semibold text-foreground">
            Trending Reels
          </h3>
          {MOCK_REELS.map((reel, i) => (
            <ReelCard key={reel.id} reel={reel} index={i + 1} />
          ))}
        </div>
      </div>

      <PostDetailModal
        post={selectedPost}
        open={!!selectedPost}
        onClose={() => setSelectedPost(null)}
      />
    </div>
  );
}
