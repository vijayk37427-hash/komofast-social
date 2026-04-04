import { Check, ChevronLeft, Globe, Search, X } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { useApp } from "../context/AppContext";
import { useLanguage } from "../context/LanguageContext";
import { LANGUAGES, type LangCode } from "../i18n/translations";

export default function LanguageSettings() {
  const { lang, setLang } = useLanguage();
  const { navigate } = useApp();
  const [query, setQuery] = useState("");

  const filtered = LANGUAGES.filter(
    (l) =>
      query.trim() === "" ||
      l.native.toLowerCase().includes(query.toLowerCase()) ||
      l.english.toLowerCase().includes(query.toLowerCase()),
  );

  const handleSelect = (code: LangCode) => {
    setLang(code);
    const chosen = LANGUAGES.find((l) => l.code === code);
    toast.success(`Language changed to ${chosen?.native ?? code}`);
  };

  return (
    <div className="max-w-lg mx-auto px-4 py-4">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <button
          type="button"
          data-ocid="language.back.button"
          onClick={() => navigate("/profile")}
          className="w-9 h-9 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 transition-colors"
        >
          <ChevronLeft size={18} className="text-white" />
        </button>
        <div className="flex items-center gap-2">
          <Globe size={20} className="text-komo-blue" />
          <h1 className="text-[18px] font-bold text-foreground">
            Language / भाषा
          </h1>
        </div>
      </div>

      <p className="text-[13px] text-komo-text-muted mb-4">
        Choose your preferred language for the Komofast Social app.
      </p>

      {/* Search Box */}
      <div
        className="flex items-center gap-2 px-4 py-2.5 rounded-2xl mb-5"
        style={{
          background: "rgba(255,255,255,0.06)",
          border: "1.5px solid rgba(255,255,255,0.10)",
        }}
      >
        <Search size={15} className="text-komo-text-muted flex-shrink-0" />
        <input
          type="text"
          placeholder="Search language... / भाषा खोजें"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 bg-transparent text-[13px] text-foreground placeholder:text-komo-text-muted outline-none"
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery("")}
            className="text-komo-text-muted hover:text-white transition-colors"
          >
            <X size={14} />
          </button>
        )}
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-12 text-komo-text-muted text-[13px]">
          No language found for "{query}"
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-3">
          {filtered.map((language, i) => {
            const isSelected = lang === language.code;
            return (
              <motion.button
                key={language.code}
                type="button"
                data-ocid={`language.item.${i + 1}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: i * 0.04 }}
                onClick={() => handleSelect(language.code)}
                className="relative flex items-center gap-3 p-4 rounded-2xl text-left transition-all group"
                style={{
                  background: isSelected
                    ? "linear-gradient(135deg, rgba(47,168,255,0.15), rgba(168,85,247,0.2))"
                    : "rgba(255,255,255,0.04)",
                  border: isSelected
                    ? "2px solid rgba(168,85,247,0.6)"
                    : "2px solid rgba(255,255,255,0.08)",
                  boxShadow: isSelected
                    ? "0 0 16px rgba(168,85,247,0.2)"
                    : "none",
                }}
              >
                <span className="text-2xl flex-shrink-0">{language.flag}</span>
                <div className="min-w-0">
                  <p
                    className={`text-[14px] font-bold leading-tight ${
                      isSelected ? "komo-gradient-text" : "text-foreground"
                    }`}
                  >
                    {language.native}
                  </p>
                  <p className="text-[11px] text-komo-text-muted mt-0.5">
                    {language.english}
                  </p>
                </div>
                {isSelected && (
                  <div
                    className="absolute top-2.5 right-2.5 w-5 h-5 rounded-full flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg, #2fa8ff, #a855f7)",
                    }}
                  >
                    <Check size={11} className="text-white" strokeWidth={3} />
                  </div>
                )}
              </motion.button>
            );
          })}
        </div>
      )}

      <p className="text-center text-[11px] text-komo-text-muted mt-8">
        © {new Date().getFullYear()}. Built with love using{" "}
        <a
          href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-komo-blue hover:underline"
        >
          caffeine.ai
        </a>
      </p>
    </div>
  );
}
