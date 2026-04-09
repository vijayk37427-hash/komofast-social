import { r as reactExports, j as jsxRuntimeExports, T as Textarea } from "./index-BlWpIyR8.js";
import { B as Badge } from "./badge-BChbocV7.js";
const TRENDING_SONGS = [
  { title: "Dil Ki Awaaz", plays: "12.4K", style: "Romantic" },
  { title: "Bhojpuri Dhamaal", plays: "9.8K", style: "Bhojpuri" },
  { title: "Sad Vibes Only", plays: "8.1K", style: "Sad" },
  { title: "Mumbai Rap King", plays: "7.5K", style: "Rap" },
  { title: "Pyaar Ki Raah", plays: "6.9K", style: "Romantic" }
];
const MY_SONGS_MOCK = [
  {
    id: "1",
    title: "Mera Dil Song",
    style: "Romantic",
    language: "Hindi",
    voice: "Male",
    duration: "3:24",
    createdAt: "2 days ago"
  },
  {
    id: "2",
    title: "Rap Beat No.1",
    style: "Rap",
    language: "English",
    voice: "AI Voice",
    duration: "2:48",
    createdAt: "5 days ago"
  },
  {
    id: "3",
    title: "Bhojpuri Hit",
    style: "Bhojpuri",
    language: "Bhojpuri",
    voice: "Female",
    duration: "4:10",
    createdAt: "1 week ago"
  }
];
const STYLE_COLOR = {
  Romantic: "bg-pink-500/20 text-pink-300 border-pink-500/30",
  Sad: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  Rap: "bg-orange-500/20 text-orange-300 border-orange-500/30",
  Bhojpuri: "bg-green-500/20 text-green-300 border-green-500/30"
};
const STYLE_EMOJI = {
  Romantic: "❤️",
  Sad: "😢",
  Rap: "🔥",
  Bhojpuri: "🎤"
};
function AIMusicStudio() {
  const [screen, setScreen] = reactExports.useState("home");
  const [lyrics, setLyrics] = reactExports.useState("");
  const [style, setStyle] = reactExports.useState("Romantic");
  const [voice, setVoice] = reactExports.useState("Male");
  const [language, setLanguage] = reactExports.useState("Hindi");
  const [isPlaying, setIsPlaying] = reactExports.useState(false);
  const [generatingStep, setGeneratingStep] = reactExports.useState(0);
  const [mySongs, setMySongs] = reactExports.useState(MY_SONGS_MOCK);
  const timerRef = reactExports.useRef(null);
  const generatingSteps = [
    "🎵 Lyrics analyze हो रहे हैं...",
    "🎶 Music compose हो रही है...",
    "🎙️ Voice synthesis शुरू...",
    "🎧 Final mix तैयार हो रहा है...",
    "✅ Song तैयार है!"
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
      "City lights, city nights\nI'm on the grind, I'm feeling right"
    ];
    setLyrics(samples[Math.floor(Math.random() * samples.length)]);
  };
  const handleDeleteSong = (id) => {
    setMySongs(mySongs.filter((s) => s.id !== id));
  };
  const bgGrad = "linear-gradient(135deg, #6c3de8, #b044f0)";
  const pageBg = {
    background: "linear-gradient(135deg, #0d0d1a 0%, #1a0a2e 100%)"
  };
  if (screen === "home") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "min-h-screen pb-6",
        style: {
          background: "linear-gradient(135deg, #0d0d1a 0%, #1a0a2e 50%, #0d1a0d 100%)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute inset-0",
                style: {
                  background: "linear-gradient(135deg, #6c3de8 0%, #b044f0 50%, #e8405a 100%)",
                  opacity: 0.15
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative px-4 pt-6 pb-8 text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-16 h-16 mx-auto mb-3 rounded-2xl flex items-center justify-center text-3xl",
                  style: { background: bgGrad },
                  children: "🎵"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold text-white", children: "AI Music Studio" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-purple-300 text-sm mt-1", children: "AI से अपना गाना बनाएं" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 space-y-3 mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setScreen("create"),
                className: "w-full py-4 rounded-2xl text-white font-bold text-lg flex items-center justify-center gap-2",
                style: { background: bgGrad },
                children: "🎤 Create Song"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setScreen("mysongs"),
                className: "w-full py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 border border-purple-500/40 text-purple-200",
                style: { background: "rgba(108,61,232,0.15)" },
                children: "📁 My Songs"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setScreen("profile"),
                className: "w-full py-3 rounded-2xl font-semibold text-base flex items-center justify-center gap-2 border border-white/10 text-white/70",
                style: { background: "rgba(255,255,255,0.05)" },
                children: "👤 Profile"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg", children: "🔥" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-white font-bold text-base", children: "Trending Songs" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: TRENDING_SONGS.map((song) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex items-center gap-3 p-3 rounded-xl",
                style: {
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0",
                      style: { background: bgGrad },
                      children: "🎵"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white font-semibold text-sm truncate", children: song.title }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-white/50 text-xs", children: [
                      song.plays,
                      " plays"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: `text-xs px-2 py-0.5 rounded-full border ${STYLE_COLOR[song.style] ?? "bg-white/10 text-white/60 border-white/20"}`,
                      children: song.style
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "text-purple-400 text-lg", children: "▶" })
                ]
              },
              song.title
            )) })
          ] })
        ]
      }
    );
  }
  if (screen === "create") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen pb-6", style: pageBg, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 pt-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => setScreen("home"),
          className: "flex items-center gap-2 text-purple-300 text-sm mb-4",
          children: "← Back"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-white font-bold text-xl mb-1", children: "🎤 Create Song" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/50 text-sm mb-5", children: "अपना गाना AI से बनाएं" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/70 text-sm font-medium mb-2", children: "📝 Lyrics" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Textarea,
          {
            value: lyrics,
            onChange: (e) => setLyrics(e.target.value),
            placeholder: "Write your lyrics here…\nअपने lyrics यहाँ लिखें…",
            className: "min-h-[120px] bg-white/5 border-white/10 text-white placeholder:text-white/30 resize-none rounded-xl"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: handleGenerateLyrics,
            className: "mt-2 w-full py-2.5 rounded-xl text-sm font-semibold text-purple-200 border border-purple-500/40",
            style: { background: "rgba(108,61,232,0.2)" },
            children: "✨ Generate Lyrics (AI)"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/70 text-sm font-medium mb-2", children: "🎶 Music Style" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-2", children: ["Romantic", "Sad", "Rap", "Bhojpuri"].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => setStyle(s),
            className: `py-3 rounded-xl text-sm font-semibold border transition-all ${style === s ? `border-purple-500 text-white ${STYLE_COLOR[s]}` : "border-white/10 text-white/60 bg-white/5"}`,
            children: [
              STYLE_EMOJI[s],
              " ",
              s
            ]
          },
          s
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/70 text-sm font-medium mb-2", children: "🎙️ Voice Select" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-2", children: ["Male", "Female", "AI Voice", "Custom Voice"].map((v) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => setVoice(v),
            className: `py-3 rounded-xl text-sm font-semibold border transition-all ${voice === v ? "border-purple-500 bg-purple-500/20 text-purple-200" : "border-white/10 text-white/60 bg-white/5"}`,
            children: [
              v === "Male" ? "👨" : v === "Female" ? "👩" : v === "AI Voice" ? "🤖" : "🎤",
              " ",
              v
            ]
          },
          v
        )) }),
        voice === "Custom Voice" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "mt-2 p-3 rounded-xl border border-dashed border-purple-500/40 text-center",
            style: { background: "rgba(108,61,232,0.1)" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-purple-300 text-sm", children: "📤 Upload your voice sample" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  className: "mt-1 text-xs text-purple-400 underline",
                  children: "Choose File"
                }
              )
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/70 text-sm font-medium mb-2", children: "🌐 Language" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2", children: ["Hindi", "English", "Bhojpuri"].map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => setLanguage(l),
            className: `py-3 rounded-xl text-sm font-semibold border transition-all ${language === l ? "border-purple-500 bg-purple-500/20 text-purple-200" : "border-white/10 text-white/60 bg-white/5"}`,
            children: [
              l === "Hindi" ? "🇮🇳" : l === "English" ? "🌍" : "🎵",
              " ",
              l
            ]
          },
          l
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: handleGenerate,
          className: "w-full py-4 rounded-2xl text-white font-bold text-lg",
          style: {
            background: "linear-gradient(135deg, #6c3de8, #b044f0, #e8405a)"
          },
          children: "🎵 Generate Song"
        }
      )
    ] }) });
  }
  if (screen === "generating") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "min-h-screen flex flex-col items-center justify-center px-4",
        style: pageBg,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mb-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-28 h-28 rounded-full flex items-center justify-center text-5xl",
                style: { background: bgGrad },
                children: "🎧"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute inset-0 rounded-full animate-ping",
                style: { background: "rgba(108,61,232,0.3)" }
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-white font-bold text-xl mb-2", children: "Creating your song…" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-purple-300 text-sm mb-8", children: "गाना तैयार हो रहा है" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full max-w-xs space-y-3", children: generatingSteps.map((step) => {
            const idx = generatingSteps.indexOf(step);
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: `flex items-center gap-3 transition-all duration-500 ${idx <= generatingStep ? "opacity-100" : "opacity-20"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: `w-5 h-5 rounded-full flex items-center justify-center text-xs flex-shrink-0 ${idx < generatingStep ? "bg-green-500" : idx === generatingStep ? "bg-purple-500 animate-pulse" : "bg-white/10"}`,
                      children: idx < generatingStep ? "✓" : idx === generatingStep ? "●" : ""
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: `text-sm ${idx <= generatingStep ? "text-white" : "text-white/30"}`,
                      children: step
                    }
                  )
                ]
              },
              step
            );
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full max-w-xs mt-8 bg-white/10 rounded-full h-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "h-2 rounded-full transition-all duration-500",
              style: {
                width: `${(generatingStep + 1) / generatingSteps.length * 100}%`,
                background: "linear-gradient(90deg, #6c3de8, #b044f0)"
              }
            }
          ) })
        ]
      }
    );
  }
  if (screen === "output") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen pb-6", style: pageBg, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 pt-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => setScreen("home"),
          className: "flex items-center gap-2 text-purple-300 text-sm mb-4",
          children: "← Home"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "w-full h-52 rounded-2xl flex flex-col items-center justify-center",
          style: {
            background: "linear-gradient(135deg, #6c3de8, #b044f0, #e8405a)"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: `text-6xl transition-all ${isPlaying ? "animate-spin" : ""}`,
                style: { animationDuration: "3s" },
                children: "🎵"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white font-bold text-lg mt-3", children: "My AI Song" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-white/70 text-sm", children: [
              style,
              " • ",
              language,
              " • ",
              voice
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: `mt-2 text-xs px-2 py-0.5 rounded-full border ${STYLE_COLOR[style] ?? "bg-white/10 text-white border-white/20"}`,
                children: style
              }
            )
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white/10 rounded-full h-1.5 mb-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "h-1.5 rounded-full",
            style: {
              width: "35%",
              background: "linear-gradient(90deg, #6c3de8, #b044f0)"
            }
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs text-white/40", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "1:12" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "3:24" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-6 mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "text-white/50 text-2xl", children: "⏮" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setIsPlaying(!isPlaying),
            className: "w-16 h-16 rounded-full text-white text-3xl flex items-center justify-center",
            style: { background: bgGrad },
            children: isPlaying ? "⏸" : "▶"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "text-white/50 text-2xl", children: "⏭" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3 mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            className: "flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm text-white",
            style: { background: bgGrad },
            children: "⬇️ Download Song"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => {
              const newSong = {
                id: Date.now().toString(),
                title: "My AI Song",
                style,
                language,
                voice,
                duration: "3:24",
                createdAt: "Just now"
              };
              setMySongs([newSong, ...mySongs]);
              setScreen("mysongs");
            },
            className: "flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm text-purple-200 border border-purple-500/40",
            style: { background: "rgba(108,61,232,0.15)" },
            children: "📁 Save to My Songs"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "p-4 rounded-xl",
          style: {
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/60 text-sm mb-3", children: "🔗 Share Your Song" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  className: "flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold",
                  style: { background: "#25D366", color: "#fff" },
                  children: "📱 WhatsApp"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  className: "flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold",
                  style: {
                    background: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
                    color: "#fff"
                  },
                  children: "📸 Instagram"
                }
              )
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => setScreen("create"),
          className: "mt-4 w-full py-3 rounded-xl text-sm font-semibold text-white/60 border border-white/10",
          children: "🎤 Create Another Song"
        }
      )
    ] }) });
  }
  if (screen === "mysongs") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen pb-6", style: pageBg, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 pt-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => setScreen("home"),
          className: "flex items-center gap-2 text-purple-300 text-sm mb-4",
          children: "← Back"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-white font-bold text-xl", children: "📁 My Songs" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-white/50 text-sm", children: [
            mySongs.length,
            " songs saved"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setScreen("create"),
            className: "px-3 py-1.5 rounded-lg text-xs font-semibold text-white",
            style: { background: bgGrad },
            children: "+ New"
          }
        )
      ] }),
      mySongs.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-5xl mb-3", children: "🎵" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/50", children: "कोई song नहीं है अभी" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setScreen("create"),
            className: "mt-4 px-6 py-2 rounded-xl text-sm text-white",
            style: { background: bgGrad },
            children: "Create Song"
          }
        )
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: mySongs.map((song) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "p-4 rounded-2xl",
          style: {
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.08)"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0",
                  style: { background: bgGrad },
                  children: "🎵"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white font-semibold text-sm truncate", children: song.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1 mt-0.5 flex-wrap", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: `text-xs px-1.5 py-0.5 rounded-full border ${STYLE_COLOR[song.style] ?? "bg-white/10 text-white/60 border-white/20"}`,
                      children: song.style
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-white/40", children: song.language }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-white/40", children: [
                    "• ",
                    song.duration
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/30 text-xs mt-0.5", children: song.createdAt })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mt-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setScreen("output"),
                  className: "flex-1 py-2 rounded-lg text-xs font-semibold text-white flex items-center justify-center gap-1",
                  style: { background: bgGrad },
                  children: "▶ Play"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  className: "flex-1 py-2 rounded-lg text-xs font-semibold text-green-300 border border-green-500/30 bg-green-500/10 flex items-center justify-center gap-1",
                  children: "🔗 Share"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => handleDeleteSong(song.id),
                  className: "px-4 py-2 rounded-lg text-xs font-semibold text-red-300 border border-red-500/30 bg-red-500/10",
                  children: "🗑️"
                }
              )
            ] })
          ]
        },
        song.id
      )) })
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen pb-6", style: pageBg, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 pt-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: () => setScreen("home"),
        className: "flex items-center gap-2 text-purple-300 text-sm mb-4",
        children: "← Back"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center py-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "w-20 h-20 rounded-full flex items-center justify-center text-4xl mb-3",
          style: { background: bgGrad },
          children: "🎵"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-white font-bold text-xl", children: "Music Creator" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/50 text-sm", children: "@musiccreator" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "mt-2 bg-purple-500/20 text-purple-300 border-purple-500/30", children: "AI Music Studio" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
      [
        { icon: "👤", label: "Name", value: "Music Creator" },
        { icon: "📧", label: "Email", value: "creator@aimusic.com" }
      ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "p-4 rounded-xl",
          style: {
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.08)"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-white/50 text-xs mb-1", children: [
              item.icon,
              " ",
              item.label
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white font-semibold", children: item.value })
          ]
        },
        item.label
      )),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "p-4 rounded-xl",
          style: {
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.08)"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/50 text-xs mb-1", children: "💎 Subscription Plan" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white font-semibold", children: "Free Plan" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  className: "px-3 py-1 rounded-lg text-xs font-bold text-white",
                  style: {
                    background: "linear-gradient(135deg, #f7971e, #ffd200)"
                  },
                  children: "⬆ Upgrade"
                }
              )
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "p-4 rounded-xl",
          style: {
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.08)"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/50 text-xs mb-1", children: "🎵 Songs Created" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-white font-semibold", children: [
              mySongs.length,
              " Songs"
            ] })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 p-4 rounded-2xl", style: { background: bgGrad }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white font-bold", children: "💎 Premium Plan" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/80 text-sm mt-1", children: "Unlimited songs, HD quality, custom voice, no ads" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          className: "mt-3 w-full py-2.5 rounded-xl font-bold text-sm",
          style: {
            background: "rgba(255,255,255,0.15)",
            color: "#fff",
            border: "1px solid rgba(255,255,255,0.3)"
          },
          children: "₹99/month से शुरू करें"
        }
      )
    ] })
  ] }) });
}
export {
  AIMusicStudio as default
};
