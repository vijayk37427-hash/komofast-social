import { motion } from "motion/react";
import { useState } from "react";
import AdBanner from "../components/feed/AdBanner";
import PostCard from "../components/feed/PostCard";
import ReelCard from "../components/feed/ReelCard";
import StoriesStrip from "../components/feed/StoriesStrip";
import UserSuggestion from "../components/feed/UserSuggestion";
import PostDetailModal from "../components/modals/PostDetailModal";
import {
  MOCK_POSTS,
  MOCK_REELS,
  MOCK_SUGGESTIONS,
  TRENDING_HASHTAGS,
} from "../data/mockData";

export default function Home() {
  const [selectedPost, setSelectedPost] = useState<
    (typeof MOCK_POSTS)[0] | null
  >(null);

  return (
    <div className="max-w-6xl mx-auto px-4">
      {/* Stories strip */}
      <StoriesStrip />

      {/* 3-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px_280px] gap-5">
        {/* Left: Feed */}
        <section data-ocid="home.feed.section" className="flex flex-col gap-4">
          {MOCK_POSTS.map((post, i) => (
            <div key={post.id} className="flex flex-col gap-4">
              <PostCard
                post={post}
                index={i + 1}
                onCommentClick={() => setSelectedPost(post)}
              />
              {/* Ad every 3 posts */}
              {(i + 1) % 3 === 0 && <AdBanner />}
            </div>
          ))}
        </section>

        {/* Middle: Reels */}
        <section
          data-ocid="home.reels.section"
          className="hidden lg:flex flex-col gap-4"
        >
          <h2 className="text-[14px] font-semibold text-foreground flex items-center gap-2 mb-1">
            <span className="w-1 h-4 rounded-full komo-gradient inline-block" />
            Reels
          </h2>
          {MOCK_REELS.map((reel, i) => (
            <ReelCard key={reel.id} reel={reel} index={i + 1} />
          ))}
        </section>

        {/* Right: Discovery */}
        <section
          data-ocid="home.discovery.section"
          className="hidden lg:flex flex-col gap-4"
        >
          {/* Suggested users */}
          <div className="komo-surface rounded-2xl komo-card-shadow p-4">
            <h3 className="text-[14px] font-semibold text-foreground mb-4 flex items-center gap-2">
              <span className="w-1 h-4 rounded-full komo-gradient inline-block" />
              Suggested for You
            </h3>
            <div className="flex flex-col gap-3">
              {MOCK_SUGGESTIONS.map((user, i) => (
                <UserSuggestion key={user.id} user={user} index={i + 1} />
              ))}
            </div>
          </div>

          {/* Trending topics */}
          <div className="komo-surface rounded-2xl komo-card-shadow p-4">
            <h3 className="text-[14px] font-semibold text-foreground mb-4 flex items-center gap-2">
              <span className="w-1 h-4 rounded-full komo-gradient inline-block" />
              Trending Topics
            </h3>
            <div className="flex flex-wrap gap-2">
              {TRENDING_HASHTAGS.map((tag) => (
                <motion.button
                  key={tag}
                  data-ocid="home.trending.button"
                  className="text-[12px] font-medium px-3 py-1.5 rounded-full bg-accent text-komo-text-secondary hover:text-komo-blue hover:bg-komo-blue/10 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tag}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Footer */}
          <p className="text-[11px] text-komo-text-muted text-center px-2">
            &copy; {new Date().getFullYear()}. Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-komo-blue hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </section>
      </div>

      {/* Post Detail Modal */}
      <PostDetailModal
        post={selectedPost}
        open={!!selectedPost}
        onClose={() => setSelectedPost(null)}
      />
    </div>
  );
}
