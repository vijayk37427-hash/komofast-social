import {
  ArrowLeft,
  CheckCircle,
  Globe,
  Loader2,
  MapPin,
  Navigation,
  Pencil,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { useApp } from "../context/AppContext";
import { useCountryDetect } from "../hooks/useCountryDetect";

const COUNTRIES = [
  { name: "India", code: "IN", flag: "🇮🇳" },
  { name: "United States", code: "US", flag: "🇺🇸" },
  { name: "United Kingdom", code: "GB", flag: "🇬🇧" },
  { name: "United Arab Emirates", code: "AE", flag: "🇦🇪" },
  { name: "Canada", code: "CA", flag: "🇨🇦" },
  { name: "Australia", code: "AU", flag: "🇦🇺" },
  { name: "Germany", code: "DE", flag: "🇩🇪" },
  { name: "France", code: "FR", flag: "🇫🇷" },
  { name: "Japan", code: "JP", flag: "🇯🇵" },
  { name: "China", code: "CN", flag: "🇨🇳" },
  { name: "Bangladesh", code: "BD", flag: "🇧🇩" },
  { name: "Pakistan", code: "PK", flag: "🇵🇰" },
  { name: "Nepal", code: "NP", flag: "🇳🇵" },
  { name: "Sri Lanka", code: "LK", flag: "🇱🇰" },
  { name: "Singapore", code: "SG", flag: "🇸🇬" },
  { name: "Malaysia", code: "MY", flag: "🇲🇾" },
  { name: "South Africa", code: "ZA", flag: "🇿🇦" },
  { name: "Brazil", code: "BR", flag: "🇧🇷" },
  { name: "Russia", code: "RU", flag: "🇷🇺" },
  { name: "Indonesia", code: "ID", flag: "🇮🇩" },
];

const METHOD_LABELS: Record<string, string> = {
  ip: "IP Address",
  gps: "GPS",
  browser: "Browser Language",
  manual: "Manual Select",
};

const METHOD_COLORS: Record<string, string> = {
  ip: "rgba(47,168,255,0.25)",
  gps: "rgba(34,197,94,0.25)",
  browser: "rgba(168,85,247,0.25)",
  manual: "rgba(251,191,36,0.25)",
};

const CARD_STYLE = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.09)",
  borderRadius: 14,
};

export default function CountryDetect() {
  const { navigate } = useApp();
  const {
    detected,
    ipResult,
    gpsResult,
    browserResult,
    loading,
    gpsLoading,
    requestGPS,
    manualSet,
  } = useCountryDetect();

  const [showManual, setShowManual] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedManual, setSelectedManual] = useState<string | null>(null);

  const filtered = COUNTRIES.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase()),
  );

  function handleManualSelect(c: (typeof COUNTRIES)[0]) {
    manualSet(c.name, c.code, c.flag);
    setSelectedManual(c.name);
    setShowManual(false);
    setSearch("");
  }

  return (
    <div
      className="min-h-screen pb-10"
      style={{
        background: "linear-gradient(180deg, #0B0F14 0%, #11161D 100%)",
      }}
    >
      {/* Header */}
      <div
        className="sticky top-0 z-20 flex items-center gap-3 px-4 py-4"
        style={{
          background: "rgba(11,15,20,0.95)",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        <button
          type="button"
          data-ocid="country_detect.back.button"
          onClick={() => navigate("/settings")}
          className="p-2 rounded-full"
          style={{ background: "rgba(255,255,255,0.07)" }}
        >
          <ArrowLeft size={18} className="text-white" />
        </button>
        <div>
          <h1 className="text-[16px] font-bold text-white">
            📍 देश का पता लगाएं
          </h1>
          <p
            className="text-[11px]"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            Detect Country
          </p>
        </div>
      </div>

      <div className="px-4 pt-5 space-y-4 max-w-lg mx-auto">
        {/* Auto-detected Hero */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            ...CARD_STYLE,
            background:
              "linear-gradient(135deg, rgba(47,168,255,0.13) 0%, rgba(168,85,247,0.13) 100%)",
            border: "1px solid rgba(47,168,255,0.22)",
          }}
          className="p-5"
          data-ocid="country_detect.result.card"
        >
          {loading ? (
            <div className="flex items-center gap-3">
              <Loader2
                size={28}
                className="animate-spin"
                style={{ color: "#2FA8FF" }}
              />
              <div>
                <p className="text-white font-semibold">Detecting...</p>
                <p
                  className="text-[12px]"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  IP Address check हो रहा है
                </p>
              </div>
            </div>
          ) : detected ? (
            <div className="flex items-center gap-4">
              <span className="text-5xl">{detected.flag}</span>
              <div className="flex-1 min-w-0">
                <p className="text-white text-[20px] font-bold">
                  {detected.country}
                </p>
                {detected.city ? (
                  <p
                    className="text-[13px]"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                  >
                    {detected.city}
                    {detected.region ? `, ${detected.region}` : ""}
                  </p>
                ) : null}
                <span
                  className="inline-block mt-1 px-2 py-0.5 rounded-full text-[11px] font-semibold"
                  style={{
                    background: METHOD_COLORS[detected.method ?? "ip"],
                    color: "rgba(255,255,255,0.85)",
                  }}
                >
                  {METHOD_LABELS[detected.method ?? "ip"]} ✅
                </span>
              </div>
            </div>
          ) : (
            <p className="text-white">
              🌍 Detection failed — please select manually
            </p>
          )}
        </motion.div>

        {/* Method Cards */}
        <h2
          className="text-[13px] font-semibold uppercase tracking-widest"
          style={{ color: "rgba(255,255,255,0.4)" }}
        >
          Detection Methods
        </h2>

        {/* IP Address */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          style={CARD_STYLE}
          className="p-4 flex items-center gap-3"
          data-ocid="country_detect.ip.card"
        >
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center"
            style={{ background: "rgba(47,168,255,0.15)" }}
          >
            <Globe size={16} style={{ color: "#2FA8FF" }} />
          </div>
          <div className="flex-1">
            <p className="text-white text-[14px] font-semibold">
              🌐 IP Address
            </p>
            <p
              className="text-[12px]"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              Automatic • 90% accurate
            </p>
          </div>
          <div className="text-right">
            {loading ? (
              <Loader2
                size={14}
                className="animate-spin"
                style={{ color: "#2FA8FF" }}
              />
            ) : ipResult ? (
              <div className="text-right">
                <p className="text-white text-[13px] font-semibold">
                  {ipResult.flag} {ipResult.country}
                </p>
                {ipResult.city ? (
                  <p
                    className="text-[11px]"
                    style={{ color: "rgba(255,255,255,0.4)" }}
                  >
                    {ipResult.city}
                  </p>
                ) : null}
                <CheckCircle
                  size={13}
                  className="ml-auto mt-0.5"
                  style={{ color: "#22c55e" }}
                />
              </div>
            ) : (
              <p
                className="text-[12px]"
                style={{ color: "rgba(255,255,255,0.35)" }}
              >
                Failed
              </p>
            )}
          </div>
        </motion.div>

        {/* GPS */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          style={CARD_STYLE}
          className="p-4 flex items-center gap-3"
          data-ocid="country_detect.gps.card"
        >
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center"
            style={{ background: "rgba(34,197,94,0.15)" }}
          >
            <MapPin size={16} style={{ color: "#22c55e" }} />
          </div>
          <div className="flex-1">
            <p className="text-white text-[14px] font-semibold">
              📍 GPS Location
            </p>
            <p
              className="text-[12px]"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              Most accurate • Permission needed
            </p>
          </div>
          <div className="text-right">
            {gpsLoading ? (
              <Loader2
                size={14}
                className="animate-spin"
                style={{ color: "#22c55e" }}
              />
            ) : gpsResult ? (
              <div className="text-right">
                <p className="text-white text-[13px] font-semibold">
                  {gpsResult.flag} {gpsResult.country}
                </p>
                {gpsResult.city ? (
                  <p
                    className="text-[11px]"
                    style={{ color: "rgba(255,255,255,0.4)" }}
                  >
                    {gpsResult.city}
                  </p>
                ) : null}
                <CheckCircle
                  size={13}
                  className="ml-auto mt-0.5"
                  style={{ color: "#22c55e" }}
                />
              </div>
            ) : (
              <button
                type="button"
                data-ocid="country_detect.gps.button"
                onClick={requestGPS}
                className="px-3 py-1.5 rounded-full text-[12px] font-semibold"
                style={{
                  background: "rgba(34,197,94,0.2)",
                  color: "#22c55e",
                  border: "1px solid rgba(34,197,94,0.3)",
                }}
              >
                Allow करें
              </button>
            )}
          </div>
        </motion.div>

        {/* Browser Language */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          style={CARD_STYLE}
          className="p-4 flex items-center gap-3"
          data-ocid="country_detect.browser.card"
        >
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center"
            style={{ background: "rgba(168,85,247,0.15)" }}
          >
            <Navigation size={16} style={{ color: "#A855F7" }} />
          </div>
          <div className="flex-1">
            <p className="text-white text-[14px] font-semibold">
              🌍 Browser Language
            </p>
            <p
              className="text-[12px]"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              From device locale — {navigator.language}
            </p>
          </div>
          <div className="text-right">
            {/* always auto-detected */}
            <p className="text-white text-[13px] font-semibold">
              {browserResult?.flag ?? ""} {browserResult?.country ?? "Unknown"}
            </p>
            {browserResult && (
              <CheckCircle
                size={13}
                className="ml-auto mt-0.5"
                style={{ color: "#22c55e" }}
              />
            )}
          </div>
        </motion.div>

        {/* Manual Select */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={CARD_STYLE}
          className="p-4"
          data-ocid="country_detect.manual.card"
        >
          <div className="flex items-center gap-3 mb-3">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center"
              style={{ background: "rgba(251,191,36,0.15)" }}
            >
              <Pencil size={16} style={{ color: "#fbbf24" }} />
            </div>
            <div className="flex-1">
              <p className="text-white text-[14px] font-semibold">
                ✏️ Manual Select
              </p>
              <p
                className="text-[12px]"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                Manually choose your country
              </p>
            </div>
            <button
              type="button"
              data-ocid="country_detect.manual.button"
              onClick={() => setShowManual((v) => !v)}
              className="px-3 py-1.5 rounded-full text-[12px] font-semibold"
              style={{
                background: "rgba(251,191,36,0.15)",
                color: "#fbbf24",
                border: "1px solid rgba(251,191,36,0.25)",
              }}
            >
              {selectedManual ? `${selectedManual}` : "Select"}
            </button>
          </div>

          {showManual && (
            <div className="space-y-2">
              <input
                data-ocid="country_detect.manual.input"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search country..."
                className="w-full px-3 py-2 rounded-xl text-[13px] text-white outline-none"
                style={{
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              />
              <div className="max-h-48 overflow-y-auto space-y-1 pr-1">
                {filtered.map((c) => (
                  <button
                    type="button"
                    key={c.code}
                    onClick={() => handleManualSelect(c)}
                    className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-[13px] text-white hover:opacity-80 transition-opacity"
                    style={{
                      background:
                        selectedManual === c.name
                          ? "rgba(47,168,255,0.15)"
                          : "rgba(255,255,255,0.04)",
                    }}
                  >
                    <span className="text-lg">{c.flag}</span>
                    <span>{c.name}</span>
                    <span
                      className="ml-auto text-[11px]"
                      style={{ color: "rgba(255,255,255,0.3)" }}
                    >
                      {c.code}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </motion.div>

        {/* Accuracy info */}
        <div
          className="flex items-center gap-2 px-2"
          style={{ color: "rgba(255,255,255,0.35)" }}
        >
          <p className="text-[12px] leading-relaxed">
            💡{" "}
            <strong style={{ color: "rgba(255,255,255,0.6)" }}>
              90% cases में IP Address से country पता चलता है
            </strong>{" "}
            • GPS से ज़्यादा accurate
          </p>
        </div>
      </div>
    </div>
  );
}
