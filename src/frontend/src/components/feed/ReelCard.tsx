import { Heart, MessageCircle, Music, Play } from "lucide-react";
import { motion } from "motion/react";

interface MusicInfo {
  title: string;
  artist: string;
}

interface ReelCardProps {
  reel: {
    id: string;
    username: string;
    displayName: string;
    title: string;
    image: string;
    likes: number;
    views: string;
    initials: string;
    gradient: string;
    music?: MusicInfo;
  };
  index: number;
}

function formatCount(n: number): string {
  if (n >= 1000) return `${(n / 1000).toFixed(1)}K`;
  return String(n);
}

export default function ReelCard({ reel, index }: ReelCardProps) {
  return (
    <motion.div
      data-ocid={`reels.item.${index}`}
      className="relative rounded-2xl overflow-hidden komo-card-shadow cursor-pointer group"
      style={{ aspectRatio: "9/16" }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Background image */}
      <img
        src={reel.image}
        alt={reel.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Reel icon top right */}
      <div className="absolute top-3 right-3">
        <div className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center">
          <Music size={14} className="text-white" />
        </div>
      </div>

      {/* Views top left */}
      <div className="absolute top-3 left-3">
        <span className="text-[11px] text-white/80 font-medium bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded-full">
          {reel.views} views
        </span>
      </div>

      {/* Play button center */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
          <Play size={24} className="text-white fill-white ml-1" />
        </div>
      </div>

      {/* Bottom overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-3">
        {/* Music marquee bar */}
        {reel.music && (
          <div
            className="flex items-center gap-2 px-2.5 py-1.5 rounded-full mb-2 overflow-hidden"
            style={{
              background: "rgba(0,0,0,0.6)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            {/* Spinning vinyl disc */}
            <div
              className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #a855f7, #ec4899)",
                animation: "spin 3s linear infinite",
              }}
            >
              <Music size={9} className="text-white" />
            </div>
            {/* Scrolling text */}
            <div className="flex-1 overflow-hidden">
              <div
                className="whitespace-nowrap text-[10px] text-white font-medium"
                style={{ animation: "marquee 8s linear infinite" }}
              >
                ♪ {reel.music.title} - {reel.music.artist}
                &nbsp;&nbsp;&nbsp;♪ {reel.music.title} - {reel.music.artist}
              </div>
            </div>
          </div>
        )}

        <div className="flex items-center gap-2 mb-2">
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0"
            style={{ background: reel.gradient }}
          >
            {reel.initials}
          </div>
          <span className="text-[12px] font-semibold text-white truncate">
            @{reel.username}
          </span>
        </div>
        <p className="text-[12px] text-white/90 leading-tight line-clamp-2 mb-2">
          {reel.title}
        </p>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <Heart size={13} className="text-komo-red fill-komo-red" />
            <span className="text-[11px] text-white/80">
              {formatCount(reel.likes)}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <MessageCircle size={13} className="text-white/70" />
            <span className="text-[11px] text-white/80">Reply</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
