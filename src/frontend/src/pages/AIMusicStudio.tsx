import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { useRef, useState } from "react";

type Screen =
  | "home"
  | "create"
  | "generating"
  | "output"
  | "mysongs"
  | "profile";

interface Song {
  id: string;
  title: string;
  style: string;
  language: string;
  voice: string;
  duration: string;
  createdAt: string;
}

const TRENDING_SONGS = [
  { title: "Dil Ki Awaaz", plays: "12.4K", style: "Romantic" },
  { title: "Bhojpuri Dhamaal", plays: "9.8K", style: "Bhojpuri" },
  { title: "Sad Vibes Only", plays: "8.1K", style: "Sad" },
  { title: "Mumbai Rap King", plays: "7.5K", style: "Rap" },
  { title: "Pyaar Ki Raah", plays: "6.9K", style: "Romantic" },
];

const MY_SONGS_MOCK: Song[] = [
  {
    id: "1",
    title: "Mera Dil Song",
    style: "Romantic",
    language: "Hindi",
    voice: "Male",
    duration: "3:24",
    createdAt: "2 days ago",
  },
  {
    id: "2",
    title: "Rap Beat No.1",
    style: "Rap",
    language: "English",
    voice: "AI Voice",
    duration: "2:48",
    createdAt: "5 days ago",
  },
  {
    id: "3",
    title: "Bhojpuri Hit",
    style: "Bhojpuri",
    language: "Bhojpuri",
    voice: "Female",
    duration: "4:10",
    createdAt: "1 week ago",
  },
];

const STYLE_COLOR: Record<string, string> = {
  Romantic: "bg-pink-500/20 text-pink-300 border-pink-500/30",
  Sad: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  Rap: "bg-orange-500/20 text-orange-300 border-orange-500/30",
  Bhojpuri: "bg-green-500/20 text-green-300 border-green-500/30",
};

const STYLE_EMOJI: Record<string, string> = {
  Romantic: "❤️",
  Sad: "😢",
  Rap: "🔥",
  Bhojpuri: "🎤",
};

export default function AIMusicStudio() {
  const [screen, setScreen] = useState<Screen>("home");
  const [lyrics, setLyrics] = useState("");
  const [style, setStyle] = useState("Romantic");
  const [voice, setVoice] = useState("Male");
  const [language, setLanguage] = useState("Hindi");
  const [isPlaying, setIsPlaying] = useState(false);
  const [generatingStep, setGeneratingStep] = useState(0);
  const [mySongs, setMySongs] = useState<Song[]>(MY_SONGS_MOCK);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const generatingSteps = [
    "🎵 Lyrics analyze हो रहे हैं...",
    "🎶 Music compose हो रही है...",
    "🎙️ Voice synthesis शुरू...",
    "🎧 Final mix तैयार हो रहा है...",
    "✅ Song तैयार है!",
  ];

  const handleGenerate = () => {
    setScreen("generating");
    setGeneratingStep(0);
    let step = 0;
    const run = () => {
      if (step < generatingSteps.length - 1) {
        step++;
        setGeneratingStep(step);
        timerRef.current = setTimeout(run, 900);
      } else {
        timerRef.current = setTimeout(() => setScreen("output"), 600);
      }
    };
    timerRef.current = setTimeout(run, 800);
  };

  const handleGenerateLyrics = () => {
    const samples = [
      "तू मेरी ज़िंदगी है, तू मेरी रोशनी है\nतेरे बिना अधूरा हूँ मैं, तू मेरी खुशी है",
      "Main toh teri raahon mein khoya hoon\nHar mod pe tera naam liya hai",
      "Bhojpuri ke rang mein ranga hai mann\nGaon ki mitti ke bina kahan",
      "City lights, city nights\nI'm on the grind, I'm feeling right",
    ];
    setLyrics(samples[Math.floor(Math.random() * samples.length)]);
  };

  const handleDeleteSong = (id: string) => {
    setMySongs(mySongs.filter((s) => s.id !== id));
  };

  const bgGrad = "linear-gradient(135deg, #6c3de8, #b044f0)";
  const pageBg = {
    background: "linear-gradient(135deg, #0d0d1a 0%, #1a0a2e 100%)",
  };

  if (screen === "home") {
    return (
      <div
        className="min-h-screen pb-6"
        style={{
          background:
            "linear-gradient(135deg, #0d0d1a 0%, #1a0a2e 50%, #0d1a0d 100%)",
        }}
      >
        <div className="relative overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, #6c3de8 0%, #b044f0 50%, #e8405a 100%)",
              opacity: 0.15,
            }}
          />
          <div className="relative px-4 pt-6 pb-8 text-center">
            <div
              className="w-16 h-16 mx-auto mb-3 rounded-2xl flex items-center justify-center text-3xl"
              style={{ background: bgGrad }}
            >
              🎵
            </div>
            <h1 className="text-2xl font-bold text-white">AI Music Studio</h1>
            <p className="text-purple-300 text-sm mt-1">AI से अपना गाना बनाएं</p>
          </div>
        </div>
        <div className="px-4 space-y-3 mb-6">
          <button
            type="button"
            onClick={() => setScreen("create")}
            className="w-full py-4 rounded-2xl text-white font-bold text-lg flex items-center justify-center gap-2"
            style={{ background: bgGrad }}
          >
            🎤 Create Song
          </button>
          <button
            type="button"
            onClick={() => setScreen("mysongs")}
            className="w-full py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 border border-purple-500/40 text-purple-200"
            style={{ background: "rgba(108,61,232,0.15)" }}
          >
            📁 My Songs
          </button>
          <button
            type="button"
            onClick={() => setScreen("profile")}
            className="w-full py-3 rounded-2xl font-semibold text-base flex items-center justify-center gap-2 border border-white/10 text-white/70"
            style={{ background: "rgba(255,255,255,0.05)" }}
          >
            👤 Profile
          </button>
        </div>
        <div className="px-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-lg">🔥</span>
            <h2 className="text-white font-bold text-base">Trending Songs</h2>
          </div>
          <div className="space-y-2">
            {TRENDING_SONGS.map((song) => (
              <div
                key={song.title}
                className="flex items-center gap-3 p-3 rounded-xl"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ background: bgGrad }}
                >
                  🎵
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-semibold text-sm truncate">
                    {song.title}
                  </p>
                  <p className="text-white/50 text-xs">{song.plays} plays</p>
                </div>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full border ${STYLE_COLOR[song.style] ?? "bg-white/10 text-white/60 border-white/20"}`}
                >
                  {song.style}
                </span>
                <button type="button" className="text-purple-400 text-lg">
                  ▶
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (screen === "create") {
    return (
      <div className="min-h-screen pb-6" style={pageBg}>
        <div className="px-4 pt-4">
          <button
            type="button"
            onClick={() => setScreen("home")}
            className="flex items-center gap-2 text-purple-300 text-sm mb-4"
          >
            ← Back
          </button>
          <h2 className="text-white font-bold text-xl mb-1">🎤 Create Song</h2>
          <p className="text-white/50 text-sm mb-5">अपना गाना AI से बनाएं</p>
          <div className="mb-4">
            <p className="text-white/70 text-sm font-medium mb-2">📝 Lyrics</p>
            <Textarea
              value={lyrics}
              onChange={(e) => setLyrics(e.target.value)}
              placeholder={"Write your lyrics here…\nअपने lyrics यहाँ लिखें…"}
              className="min-h-[120px] bg-white/5 border-white/10 text-white placeholder:text-white/30 resize-none rounded-xl"
            />
            <button
              type="button"
              onClick={handleGenerateLyrics}
              className="mt-2 w-full py-2.5 rounded-xl text-sm font-semibold text-purple-200 border border-purple-500/40"
              style={{ background: "rgba(108,61,232,0.2)" }}
            >
              ✨ Generate Lyrics (AI)
            </button>
          </div>
          <div className="mb-4">
            <p className="text-white/70 text-sm font-medium mb-2">
              🎶 Music Style
            </p>
            <div className="grid grid-cols-2 gap-2">
              {["Romantic", "Sad", "Rap", "Bhojpuri"].map((s) => (
                <button
                  type="button"
                  key={s}
                  onClick={() => setStyle(s)}
                  className={`py-3 rounded-xl text-sm font-semibold border transition-all ${style === s ? `border-purple-500 text-white ${STYLE_COLOR[s]}` : "border-white/10 text-white/60 bg-white/5"}`}
                >
                  {STYLE_EMOJI[s]} {s}
                </button>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <p className="text-white/70 text-sm font-medium mb-2">
              🎙️ Voice Select
            </p>
            <div className="grid grid-cols-2 gap-2">
              {["Male", "Female", "AI Voice", "Custom Voice"].map((v) => (
                <button
                  type="button"
                  key={v}
                  onClick={() => setVoice(v)}
                  className={`py-3 rounded-xl text-sm font-semibold border transition-all ${voice === v ? "border-purple-500 bg-purple-500/20 text-purple-200" : "border-white/10 text-white/60 bg-white/5"}`}
                >
                  {v === "Male"
                    ? "👨"
                    : v === "Female"
                      ? "👩"
                      : v === "AI Voice"
                        ? "🤖"
                        : "🎤"}{" "}
                  {v}
                </button>
              ))}
            </div>
            {voice === "Custom Voice" && (
              <div
                className="mt-2 p-3 rounded-xl border border-dashed border-purple-500/40 text-center"
                style={{ background: "rgba(108,61,232,0.1)" }}
              >
                <p className="text-purple-300 text-sm">
                  📤 Upload your voice sample
                </p>
                <button
                  type="button"
                  className="mt-1 text-xs text-purple-400 underline"
                >
                  Choose File
                </button>
              </div>
            )}
          </div>
          <div className="mb-6">
            <p className="text-white/70 text-sm font-medium mb-2">
              🌐 Language
            </p>
            <div className="grid grid-cols-3 gap-2">
              {["Hindi", "English", "Bhojpuri"].map((l) => (
                <button
                  type="button"
                  key={l}
                  onClick={() => setLanguage(l)}
                  className={`py-3 rounded-xl text-sm font-semibold border transition-all ${language === l ? "border-purple-500 bg-purple-500/20 text-purple-200" : "border-white/10 text-white/60 bg-white/5"}`}
                >
                  {l === "Hindi" ? "🇮🇳" : l === "English" ? "🌍" : "🎵"} {l}
                </button>
              ))}
            </div>
          </div>
          <button
            type="button"
            onClick={handleGenerate}
            className="w-full py-4 rounded-2xl text-white font-bold text-lg"
            style={{
              background: "linear-gradient(135deg, #6c3de8, #b044f0, #e8405a)",
            }}
          >
            🎵 Generate Song
          </button>
        </div>
      </div>
    );
  }

  if (screen === "generating") {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center px-4"
        style={pageBg}
      >
        <div className="relative mb-8">
          <div
            className="w-28 h-28 rounded-full flex items-center justify-center text-5xl"
            style={{ background: bgGrad }}
          >
            🎧
          </div>
          <div
            className="absolute inset-0 rounded-full animate-ping"
            style={{ background: "rgba(108,61,232,0.3)" }}
          />
        </div>
        <h2 className="text-white font-bold text-xl mb-2">
          Creating your song…
        </h2>
        <p className="text-purple-300 text-sm mb-8">गाना तैयार हो रहा है</p>
        <div className="w-full max-w-xs space-y-3">
          {generatingSteps.map((step) => {
            const idx = generatingSteps.indexOf(step);
            return (
              <div
                key={step}
                className={`flex items-center gap-3 transition-all duration-500 ${idx <= generatingStep ? "opacity-100" : "opacity-20"}`}
              >
                <div
                  className={`w-5 h-5 rounded-full flex items-center justify-center text-xs flex-shrink-0 ${idx < generatingStep ? "bg-green-500" : idx === generatingStep ? "bg-purple-500 animate-pulse" : "bg-white/10"}`}
                >
                  {idx < generatingStep
                    ? "✓"
                    : idx === generatingStep
                      ? "●"
                      : ""}
                </div>
                <p
                  className={`text-sm ${idx <= generatingStep ? "text-white" : "text-white/30"}`}
                >
                  {step}
                </p>
              </div>
            );
          })}
        </div>
        <div className="w-full max-w-xs mt-8 bg-white/10 rounded-full h-2">
          <div
            className="h-2 rounded-full transition-all duration-500"
            style={{
              width: `${((generatingStep + 1) / generatingSteps.length) * 100}%`,
              background: "linear-gradient(90deg, #6c3de8, #b044f0)",
            }}
          />
        </div>
      </div>
    );
  }

  if (screen === "output") {
    return (
      <div className="min-h-screen pb-6" style={pageBg}>
        <div className="px-4 pt-4">
          <button
            type="button"
            onClick={() => setScreen("home")}
            className="flex items-center gap-2 text-purple-300 text-sm mb-4"
          >
            ← Home
          </button>
          <div className="relative mb-6">
            <div
              className="w-full h-52 rounded-2xl flex flex-col items-center justify-center"
              style={{
                background:
                  "linear-gradient(135deg, #6c3de8, #b044f0, #e8405a)",
              }}
            >
              <div
                className={`text-6xl transition-all ${isPlaying ? "animate-spin" : ""}`}
                style={{ animationDuration: "3s" }}
              >
                🎵
              </div>
              <p className="text-white font-bold text-lg mt-3">My AI Song</p>
              <p className="text-white/70 text-sm">
                {style} • {language} • {voice}
              </p>
              <span
                className={`mt-2 text-xs px-2 py-0.5 rounded-full border ${STYLE_COLOR[style] ?? "bg-white/10 text-white border-white/20"}`}
              >
                {style}
              </span>
            </div>
          </div>
          <div className="mb-4">
            <div className="bg-white/10 rounded-full h-1.5 mb-1">
              <div
                className="h-1.5 rounded-full"
                style={{
                  width: "35%",
                  background: "linear-gradient(90deg, #6c3de8, #b044f0)",
                }}
              />
            </div>
            <div className="flex justify-between text-xs text-white/40">
              <span>1:12</span>
              <span>3:24</span>
            </div>
          </div>
          <div className="flex items-center justify-center gap-6 mb-6">
            <button type="button" className="text-white/50 text-2xl">
              ⏮
            </button>
            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-16 h-16 rounded-full text-white text-3xl flex items-center justify-center"
              style={{ background: bgGrad }}
            >
              {isPlaying ? "⏸" : "▶"}
            </button>
            <button type="button" className="text-white/50 text-2xl">
              ⏭
            </button>
          </div>
          <div className="grid grid-cols-2 gap-3 mb-4">
            <button
              type="button"
              className="flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm text-white"
              style={{ background: bgGrad }}
            >
              ⬇️ Download Song
            </button>
            <button
              type="button"
              onClick={() => {
                const newSong: Song = {
                  id: Date.now().toString(),
                  title: "My AI Song",
                  style,
                  language,
                  voice,
                  duration: "3:24",
                  createdAt: "Just now",
                };
                setMySongs([newSong, ...mySongs]);
                setScreen("mysongs");
              }}
              className="flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm text-purple-200 border border-purple-500/40"
              style={{ background: "rgba(108,61,232,0.15)" }}
            >
              📁 Save to My Songs
            </button>
          </div>
          <div
            className="p-4 rounded-xl"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <p className="text-white/60 text-sm mb-3">🔗 Share Your Song</p>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold"
                style={{ background: "#25D366", color: "#fff" }}
              >
                📱 WhatsApp
              </button>
              <button
                type="button"
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold"
                style={{
                  background:
                    "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
                  color: "#fff",
                }}
              >
                📸 Instagram
              </button>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setScreen("create")}
            className="mt-4 w-full py-3 rounded-xl text-sm font-semibold text-white/60 border border-white/10"
          >
            🎤 Create Another Song
          </button>
        </div>
      </div>
    );
  }

  if (screen === "mysongs") {
    return (
      <div className="min-h-screen pb-6" style={pageBg}>
        <div className="px-4 pt-4">
          <button
            type="button"
            onClick={() => setScreen("home")}
            className="flex items-center gap-2 text-purple-300 text-sm mb-4"
          >
            ← Back
          </button>
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="text-white font-bold text-xl">📁 My Songs</h2>
              <p className="text-white/50 text-sm">
                {mySongs.length} songs saved
              </p>
            </div>
            <button
              type="button"
              onClick={() => setScreen("create")}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold text-white"
              style={{ background: bgGrad }}
            >
              + New
            </button>
          </div>
          {mySongs.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-5xl mb-3">🎵</p>
              <p className="text-white/50">कोई song नहीं है अभी</p>
              <button
                type="button"
                onClick={() => setScreen("create")}
                className="mt-4 px-6 py-2 rounded-xl text-sm text-white"
                style={{ background: bgGrad }}
              >
                Create Song
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {mySongs.map((song) => (
                <div
                  key={song.id}
                  className="p-4 rounded-2xl"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                      style={{ background: bgGrad }}
                    >
                      🎵
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white font-semibold text-sm truncate">
                        {song.title}
                      </p>
                      <div className="flex gap-1 mt-0.5 flex-wrap">
                        <span
                          className={`text-xs px-1.5 py-0.5 rounded-full border ${STYLE_COLOR[song.style] ?? "bg-white/10 text-white/60 border-white/20"}`}
                        >
                          {song.style}
                        </span>
                        <span className="text-xs text-white/40">
                          {song.language}
                        </span>
                        <span className="text-xs text-white/40">
                          • {song.duration}
                        </span>
                      </div>
                      <p className="text-white/30 text-xs mt-0.5">
                        {song.createdAt}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-3">
                    <button
                      type="button"
                      onClick={() => setScreen("output")}
                      className="flex-1 py-2 rounded-lg text-xs font-semibold text-white flex items-center justify-center gap-1"
                      style={{ background: bgGrad }}
                    >
                      ▶ Play
                    </button>
                    <button
                      type="button"
                      className="flex-1 py-2 rounded-lg text-xs font-semibold text-green-300 border border-green-500/30 bg-green-500/10 flex items-center justify-center gap-1"
                    >
                      🔗 Share
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDeleteSong(song.id)}
                      className="px-4 py-2 rounded-lg text-xs font-semibold text-red-300 border border-red-500/30 bg-red-500/10"
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-6" style={pageBg}>
      <div className="px-4 pt-4">
        <button
          type="button"
          onClick={() => setScreen("home")}
          className="flex items-center gap-2 text-purple-300 text-sm mb-4"
        >
          ← Back
        </button>
        <div className="flex flex-col items-center py-6">
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center text-4xl mb-3"
            style={{ background: bgGrad }}
          >
            🎵
          </div>
          <h2 className="text-white font-bold text-xl">Music Creator</h2>
          <p className="text-white/50 text-sm">@musiccreator</p>
          <Badge className="mt-2 bg-purple-500/20 text-purple-300 border-purple-500/30">
            AI Music Studio
          </Badge>
        </div>
        <div className="space-y-3">
          {[
            { icon: "👤", label: "Name", value: "Music Creator" },
            { icon: "📧", label: "Email", value: "creator@aimusic.com" },
          ].map((item) => (
            <div
              key={item.label}
              className="p-4 rounded-xl"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <p className="text-white/50 text-xs mb-1">
                {item.icon} {item.label}
              </p>
              <p className="text-white font-semibold">{item.value}</p>
            </div>
          ))}
          <div
            className="p-4 rounded-xl"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <p className="text-white/50 text-xs mb-1">💎 Subscription Plan</p>
            <div className="flex items-center justify-between">
              <p className="text-white font-semibold">Free Plan</p>
              <button
                type="button"
                className="px-3 py-1 rounded-lg text-xs font-bold text-white"
                style={{
                  background: "linear-gradient(135deg, #f7971e, #ffd200)",
                }}
              >
                ⬆ Upgrade
              </button>
            </div>
          </div>
          <div
            className="p-4 rounded-xl"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <p className="text-white/50 text-xs mb-1">🎵 Songs Created</p>
            <p className="text-white font-semibold">{mySongs.length} Songs</p>
          </div>
        </div>
        <div className="mt-4 p-4 rounded-2xl" style={{ background: bgGrad }}>
          <p className="text-white font-bold">💎 Premium Plan</p>
          <p className="text-white/80 text-sm mt-1">
            Unlimited songs, HD quality, custom voice, no ads
          </p>
          <button
            type="button"
            className="mt-3 w-full py-2.5 rounded-xl font-bold text-sm"
            style={{
              background: "rgba(255,255,255,0.15)",
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.3)",
            }}
          >
            ₹99/month से शुरू करें
          </button>
        </div>
      </div>
    </div>
  );
}
