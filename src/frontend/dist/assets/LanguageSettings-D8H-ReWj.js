import { f as useLanguage, u as useApp, r as reactExports, L as LANGUAGES, j as jsxRuntimeExports, G as Globe, o as Search, X, m as motion, C as Check, b as ue } from "./index-BlWpIyR8.js";
import { C as ChevronLeft } from "./chevron-left-C5lkywMo.js";
function LanguageSettings() {
  const { lang, setLang } = useLanguage();
  const { navigate } = useApp();
  const [query, setQuery] = reactExports.useState("");
  const filtered = LANGUAGES.filter(
    (l) => query.trim() === "" || l.native.toLowerCase().includes(query.toLowerCase()) || l.english.toLowerCase().includes(query.toLowerCase())
  );
  const handleSelect = (code) => {
    setLang(code);
    const chosen = LANGUAGES.find((l) => l.code === code);
    ue.success(`Language changed to ${(chosen == null ? void 0 : chosen.native) ?? code}`);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-lg mx-auto px-4 py-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          "data-ocid": "language.back.button",
          onClick: () => navigate("/profile"),
          className: "w-9 h-9 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 transition-colors",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { size: 18, className: "text-white" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { size: 20, className: "text-komo-blue" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-[18px] font-bold text-foreground", children: "Language / भाषा" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-komo-text-muted mb-4", children: "Choose your preferred language for the Komofast Social app." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex items-center gap-2 px-4 py-2.5 rounded-2xl mb-5",
        style: {
          background: "rgba(255,255,255,0.06)",
          border: "1.5px solid rgba(255,255,255,0.10)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { size: 15, className: "text-komo-text-muted flex-shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              placeholder: "Search language... / भाषा खोजें",
              value: query,
              onChange: (e) => setQuery(e.target.value),
              className: "flex-1 bg-transparent text-[13px] text-foreground placeholder:text-komo-text-muted outline-none"
            }
          ),
          query && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setQuery(""),
              className: "text-komo-text-muted hover:text-white transition-colors",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 14 })
            }
          )
        ]
      }
    ),
    filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-12 text-komo-text-muted text-[13px]", children: [
      'No language found for "',
      query,
      '"'
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3", children: filtered.map((language, i) => {
      const isSelected = lang === language.code;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.button,
        {
          type: "button",
          "data-ocid": `language.item.${i + 1}`,
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.2, delay: i * 0.04 },
          onClick: () => handleSelect(language.code),
          className: "relative flex items-center gap-3 p-4 rounded-2xl text-left transition-all group",
          style: {
            background: isSelected ? "linear-gradient(135deg, rgba(47,168,255,0.15), rgba(168,85,247,0.2))" : "rgba(255,255,255,0.04)",
            border: isSelected ? "2px solid rgba(168,85,247,0.6)" : "2px solid rgba(255,255,255,0.08)",
            boxShadow: isSelected ? "0 0 16px rgba(168,85,247,0.2)" : "none"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl flex-shrink-0", children: language.flag }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: `text-[14px] font-bold leading-tight ${isSelected ? "komo-gradient-text" : "text-foreground"}`,
                  children: language.native
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-komo-text-muted mt-0.5", children: language.english })
            ] }),
            isSelected && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute top-2.5 right-2.5 w-5 h-5 rounded-full flex items-center justify-center",
                style: {
                  background: "linear-gradient(135deg, #2fa8ff, #a855f7)"
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 11, className: "text-white", strokeWidth: 3 })
              }
            )
          ]
        },
        language.code
      );
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-center text-[11px] text-komo-text-muted mt-8", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      ". Built with love using",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "text-komo-blue hover:underline",
          children: "caffeine.ai"
        }
      )
    ] })
  ] });
}
export {
  LanguageSettings as default
};
