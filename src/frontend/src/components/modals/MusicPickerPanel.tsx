import { ScrollArea } from "@/components/ui/scroll-area";
import { Check, Music, Pause, Play, Search, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

export interface Song {
  id: string;
  title: string;
  artist: string;
  duration: string;
  category: string;
  src?: string;
}

export const ALL_SONGS: Song[] = [
  // Trending
  {
    id: "t1",
    title: "Kesariya",
    artist: "Arijit Singh",
    duration: "4:28",
    category: "Trending",
  },
  {
    id: "t2",
    title: "Calm Down",
    artist: "Rema",
    duration: "3:39",
    category: "Trending",
  },
  {
    id: "t3",
    title: "As It Was",
    artist: "Harry Styles",
    duration: "2:37",
    category: "Trending",
  },
  {
    id: "t4",
    title: "Lut Gaye",
    artist: "Jubin Nautiyal",
    duration: "4:12",
    category: "Trending",
  },
  {
    id: "t5",
    title: "Tum Hi Ho",
    artist: "Arijit Singh",
    duration: "4:37",
    category: "Trending",
  },
  {
    id: "t6",
    title: "Dil Diyan Gallan",
    artist: "Atif Aslam",
    duration: "3:58",
    category: "Trending",
  },
  // Bollywood
  {
    id: "b1",
    title: "Raataan Lambiyan",
    artist: "Jubin Nautiyal",
    duration: "3:51",
    category: "Bollywood",
  },
  {
    id: "b2",
    title: "Pasoori",
    artist: "Ali Sethi",
    duration: "3:57",
    category: "Bollywood",
  },
  {
    id: "b3",
    title: "Bhool Bhulaiyaa",
    artist: "Neeraj Shridhar",
    duration: "4:05",
    category: "Bollywood",
  },
  {
    id: "b4",
    title: "Jai Ho",
    artist: "A.R. Rahman",
    duration: "4:44",
    category: "Bollywood",
  },
  {
    id: "b5",
    title: "Chaiyya Chaiyya",
    artist: "Sukhwinder Singh",
    duration: "5:12",
    category: "Bollywood",
  },
  {
    id: "b6",
    title: "Naatu Naatu",
    artist: "M.M. Keeravani",
    duration: "3:36",
    category: "Bollywood",
  },
  {
    id: "b7",
    title: "Srivalli",
    artist: "Sid Sriram",
    duration: "3:44",
    category: "Bollywood",
  },
  // Pop
  {
    id: "p1",
    title: "Blinding Lights",
    artist: "The Weeknd",
    duration: "3:20",
    category: "Pop",
  },
  {
    id: "p2",
    title: "Shape of You",
    artist: "Ed Sheeran",
    duration: "3:54",
    category: "Pop",
  },
  {
    id: "p3",
    title: "Stay",
    artist: "Justin Bieber",
    duration: "2:21",
    category: "Pop",
  },
  {
    id: "p4",
    title: "Levitating",
    artist: "Dua Lipa",
    duration: "3:23",
    category: "Pop",
  },
  {
    id: "p5",
    title: "Good 4 U",
    artist: "Olivia Rodrigo",
    duration: "2:58",
    category: "Pop",
  },
  {
    id: "p6",
    title: "Anti-Hero",
    artist: "Taylor Swift",
    duration: "3:21",
    category: "Pop",
  },
  // Hip-Hop
  {
    id: "h1",
    title: "God's Plan",
    artist: "Drake",
    duration: "3:19",
    category: "Hip-Hop",
  },
  {
    id: "h2",
    title: "HUMBLE.",
    artist: "Kendrick Lamar",
    duration: "2:57",
    category: "Hip-Hop",
  },
  {
    id: "h3",
    title: "Rockstar",
    artist: "Post Malone",
    duration: "3:39",
    category: "Hip-Hop",
  },
  {
    id: "h4",
    title: "Sunflower",
    artist: "Post Malone",
    duration: "2:38",
    category: "Hip-Hop",
  },
  {
    id: "h5",
    title: "Lucid Dreams",
    artist: "Juice WRLD",
    duration: "3:59",
    category: "Hip-Hop",
  },
  {
    id: "h6",
    title: "Rich Flex",
    artist: "Drake & 21 Savage",
    duration: "3:28",
    category: "Hip-Hop",
  },
  // Romantic
  {
    id: "r1",
    title: "Perfect",
    artist: "Ed Sheeran",
    duration: "4:23",
    category: "Romantic",
  },
  {
    id: "r2",
    title: "All of Me",
    artist: "John Legend",
    duration: "4:29",
    category: "Romantic",
  },
  {
    id: "r3",
    title: "A Thousand Years",
    artist: "Christina Perri",
    duration: "4:45",
    category: "Romantic",
  },
  {
    id: "r4",
    title: "Thinking Out Loud",
    artist: "Ed Sheeran",
    duration: "4:41",
    category: "Romantic",
  },
  {
    id: "r5",
    title: "Make You Feel My Love",
    artist: "Adele",
    duration: "3:32",
    category: "Romantic",
  },
  {
    id: "r6",
    title: "Tera Ban Jaunga",
    artist: "Akhil Sachdeva",
    duration: "4:02",
    category: "Romantic",
  },
  // Devotional
  {
    id: "d1",
    title: "Jai Ganesh Jai Ganesh",
    artist: "Traditional",
    duration: "5:18",
    category: "Devotional",
  },
  {
    id: "d2",
    title: "Hanuman Chalisa",
    artist: "Hariharan",
    duration: "7:32",
    category: "Devotional",
  },
  {
    id: "d3",
    title: "Om Namah Shivaya",
    artist: "Shankar Mahadevan",
    duration: "6:44",
    category: "Devotional",
  },
  {
    id: "d4",
    title: "Achyutam Keshavam",
    artist: "Traditional",
    duration: "4:55",
    category: "Devotional",
  },
  {
    id: "d5",
    title: "Hey Ram",
    artist: "Jagjit Singh",
    duration: "5:10",
    category: "Devotional",
  },
  {
    id: "d6",
    title: "Gayatri Mantra",
    artist: "Anuradha Paudwal",
    duration: "4:22",
    category: "Devotional",
  },
  // Bhojpuri
  {
    id: "bh1",
    title: "Lollypop Lagelu",
    artist: "Pawan Singh",
    duration: "3:45",
    category: "Bhojpuri",
  },
  {
    id: "bh2",
    title: "Teri Aakhya Ka Yo Kajal",
    artist: "Sapna Choudhary",
    duration: "3:58",
    category: "Bhojpuri",
  },
  {
    id: "bh3",
    title: "Patna Se Patna Tak",
    artist: "Khesari Lal Yadav",
    duration: "4:12",
    category: "Bhojpuri",
  },
  {
    id: "bh4",
    title: "Tohse Naina Lage",
    artist: "Dinesh Lal Yadav",
    duration: "4:05",
    category: "Bhojpuri",
  },
  {
    id: "bh5",
    title: "Lagawelu Jab Lipistik",
    artist: "Pawan Singh",
    duration: "3:30",
    category: "Bhojpuri",
  },
  {
    id: "bh6",
    title: "Sarkar Raj",
    artist: "Khesari Lal Yadav",
    duration: "4:20",
    category: "Bhojpuri",
  },
  {
    id: "bh7",
    title: "Choliya Me Mobile",
    artist: "Pramod Premi Yadav",
    duration: "3:55",
    category: "Bhojpuri",
  },
  {
    id: "bh8",
    title: "Aaj Balamua Ke Sanghe",
    artist: "Indu Sonali",
    duration: "4:08",
    category: "Bhojpuri",
  },
  {
    id: "bh9",
    title: "Raat Diya Buta Ke",
    artist: "Ritesh Pandey",
    duration: "3:48",
    category: "Bhojpuri",
  },
  {
    id: "bh10",
    title: "Jaan Tani Ruko Na",
    artist: "Neelkamal Singh",
    duration: "4:15",
    category: "Bhojpuri",
  },
];

const CATEGORIES = [
  "Trending",
  "Bollywood",
  "Pop",
  "Hip-Hop",
  "Romantic",
  "Devotional",
  "Bhojpuri",
];

interface Props {
  open: boolean;
  onClose: () => void;
  selectedSong: Song | null;
  onSelect: (song: Song) => void;
}

export default function MusicPickerPanel({
  open,
  onClose,
  selectedSong,
  onSelect,
}: Props) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Trending");
  const [playingId, setPlayingId] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Stop audio on close
  useEffect(() => {
    if (!open) {
      audioRef.current?.pause();
      setPlayingId(null);
    }
  }, [open]);

  const handlePlay = (song: Song) => {
    if (playingId === song.id) {
      audioRef.current?.pause();
      setPlayingId(null);
    } else {
      audioRef.current?.pause();
      if (song.src) {
        const audio = new Audio(song.src);
        audio.play().catch(() => {});
        audio.ontimeupdate = () => {
          if (audio.currentTime >= 15) {
            audio.pause();
            setPlayingId(null);
          }
        };
        audioRef.current = audio;
      }
      setPlayingId(song.id);
      // Auto stop after 15s preview even without real src
      setTimeout(
        () => setPlayingId((prev) => (prev === song.id ? null : prev)),
        15000,
      );
    }
  };

  const filtered = ALL_SONGS.filter((s) => {
    const matchCategory = s.category === activeCategory;
    const matchQuery =
      query.trim() === "" ||
      s.title.toLowerCase().includes(query.toLowerCase()) ||
      s.artist.toLowerCase().includes(query.toLowerCase());
    return query.trim() !== "" ? matchQuery : matchCategory;
  });

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          data-ocid="music_picker.panel"
          className="fixed inset-0 z-[90] flex flex-col justify-end"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <div
            role="presentation"
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
            onKeyDown={(e) => e.key === "Escape" && onClose()}
          />

          <motion.div
            className="relative z-10 rounded-t-3xl overflow-hidden flex flex-col"
            style={{
              background: "linear-gradient(180deg, #1a1a2e 0%, #0d0d1a 100%)",
              border: "1px solid rgba(168,85,247,0.25)",
              borderBottom: "none",
              maxHeight: "85vh",
            }}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 350, damping: 35 }}
          >
            {/* Handle bar */}
            <div className="flex justify-center pt-3 pb-1">
              <div className="w-10 h-1 rounded-full bg-white/20" />
            </div>

            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3">
              <div className="flex items-center gap-2">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, #a855f7, #ec4899)",
                  }}
                >
                  <Music size={15} className="text-white" />
                </div>
                <span className="text-white font-bold text-base">🎵 Music</span>
              </div>
              <button
                type="button"
                data-ocid="music_picker.close_button"
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"
              >
                <X size={16} className="text-white" />
              </button>
            </div>

            {/* Search */}
            <div className="px-4 pb-3">
              <div
                className="flex items-center gap-2 px-3 py-2.5 rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <Search size={15} className="text-white/40 flex-shrink-0" />
                <input
                  data-ocid="music_picker.search_input"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="🔍 Song खोजें... / Search song..."
                  className="flex-1 bg-transparent text-white text-sm outline-none placeholder:text-white/30"
                />
                {query && (
                  <button type="button" onClick={() => setQuery("")}>
                    <X size={13} className="text-white/40" />
                  </button>
                )}
              </div>
            </div>

            {/* Category tabs */}
            {query.trim() === "" && (
              <div className="px-4 pb-3">
                <div
                  className="flex gap-2 overflow-x-auto"
                  style={{ scrollbarWidth: "none" }}
                >
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      data-ocid={`music_picker.${cat.toLowerCase().replace("-", "_")}.tab`}
                      onClick={() => setActiveCategory(cat)}
                      className="flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200"
                      style={{
                        background:
                          activeCategory === cat
                            ? cat === "Bhojpuri"
                              ? "linear-gradient(135deg, #f97316, #ef4444)"
                              : "linear-gradient(135deg, #a855f7, #ec4899)"
                            : "rgba(255,255,255,0.07)",
                        color:
                          activeCategory === cat
                            ? "#fff"
                            : "rgba(255,255,255,0.55)",
                        border:
                          activeCategory === cat
                            ? "none"
                            : cat === "Bhojpuri"
                              ? "1px solid rgba(249,115,22,0.3)"
                              : "1px solid rgba(255,255,255,0.1)",
                      }}
                    >
                      {cat === "Bhojpuri" ? "🎶 Bhojpuri" : cat}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Song list */}
            <ScrollArea className="flex-1 min-h-0">
              <div className="px-4 pb-4 flex flex-col gap-1">
                {filtered.map((song, idx) => {
                  const isSelected = selectedSong?.id === song.id;
                  const isPlaying = playingId === song.id;
                  const isBhojpuri = song.category === "Bhojpuri";
                  return (
                    <motion.button
                      key={song.id}
                      type="button"
                      data-ocid={`music_picker.song.item.${idx + 1}`}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.03 }}
                      onClick={() => onSelect(song)}
                      className="w-full flex items-center gap-3 px-3 py-3 rounded-2xl text-left transition-all duration-200"
                      style={{
                        background: isSelected
                          ? isBhojpuri
                            ? "linear-gradient(135deg, rgba(249,115,22,0.25), rgba(239,68,68,0.15))"
                            : "linear-gradient(135deg, rgba(168,85,247,0.25), rgba(236,72,153,0.15))"
                          : "rgba(255,255,255,0.03)",
                        border: isSelected
                          ? isBhojpuri
                            ? "1px solid rgba(249,115,22,0.6)"
                            : "1px solid rgba(168,85,247,0.6)"
                          : "1px solid rgba(255,255,255,0.06)",
                      }}
                    >
                      {/* Disc icon */}
                      <div
                        className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center"
                        style={{
                          background: isSelected
                            ? isBhojpuri
                              ? "linear-gradient(135deg, #f97316, #ef4444)"
                              : "linear-gradient(135deg, #a855f7, #ec4899)"
                            : "linear-gradient(135deg, #374151, #1f2937)",
                          animation: isPlaying
                            ? "spin 2s linear infinite"
                            : "none",
                        }}
                      >
                        <Music size={16} className="text-white" />
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <p className="text-white text-sm font-semibold truncate">
                          {song.title}
                        </p>
                        <p className="text-white/50 text-xs truncate">
                          {song.artist}
                        </p>
                      </div>

                      {/* Duration + play */}
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <span className="text-white/40 text-xs">
                          {song.duration}
                        </span>
                        <button
                          type="button"
                          data-ocid={`music_picker.play.button.${idx + 1}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            handlePlay(song);
                          }}
                          className="w-7 h-7 rounded-full flex items-center justify-center transition-all duration-150"
                          style={{
                            background: isPlaying
                              ? isBhojpuri
                                ? "linear-gradient(135deg, #f97316, #ef4444)"
                                : "linear-gradient(135deg, #a855f7, #ec4899)"
                              : "rgba(255,255,255,0.1)",
                          }}
                        >
                          {isPlaying ? (
                            <Pause size={11} className="text-white" />
                          ) : (
                            <Play
                              size={11}
                              className="text-white fill-white ml-0.5"
                            />
                          )}
                        </button>
                        {isSelected && (
                          <Check
                            size={15}
                            className={
                              isBhojpuri ? "text-orange-400" : "text-purple-400"
                            }
                          />
                        )}
                      </div>
                    </motion.button>
                  );
                })}
                {filtered.length === 0 && (
                  <div className="py-10 text-center">
                    <Music size={32} className="text-white/20 mx-auto mb-2" />
                    <p className="text-white/40 text-sm">कोई song नहीं मिला</p>
                    <p className="text-white/30 text-xs mt-1">No songs found</p>
                  </div>
                )}
              </div>
            </ScrollArea>

            {/* Add Music CTA */}
            <div
              className="px-4 py-4"
              style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
            >
              <button
                type="button"
                data-ocid="music_picker.add_music.button"
                disabled={!selectedSong}
                onClick={onClose}
                className="w-full py-3.5 rounded-2xl text-white font-bold text-[15px] transition-all duration-200 disabled:opacity-40"
                style={{
                  background: selectedSong
                    ? selectedSong.category === "Bhojpuri"
                      ? "linear-gradient(135deg, #f97316, #ef4444)"
                      : "linear-gradient(135deg, #a855f7, #ec4899)"
                    : "rgba(255,255,255,0.1)",
                }}
              >
                {selectedSong
                  ? `♪ Add "${selectedSong.title}"`
                  : "Select a Song"}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
