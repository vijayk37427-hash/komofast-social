import { c as createLucideIcon, r as reactExports, u as useApp, j as jsxRuntimeExports, m as motion, t as LoaderCircle, G as Globe, M as MapPin } from "./index-BlWpIyR8.js";
import { A as ArrowLeft } from "./arrow-left-C_jsN0fF.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
];
const CircleCheckBig = createLucideIcon("circle-check-big", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["polygon", { points: "3 11 22 2 13 21 11 13 3 11", key: "1ltx0t" }]
];
const Navigation = createLucideIcon("navigation", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
const Pencil = createLucideIcon("pencil", __iconNode);
const FLAG_MAP = {
  IN: "🇮🇳",
  US: "🇺🇸",
  GB: "🇬🇧",
  AE: "🇦🇪",
  CA: "🇨🇦",
  AU: "🇦🇺",
  DE: "🇩🇪",
  FR: "🇫🇷",
  JP: "🇯🇵",
  CN: "🇨🇳",
  BD: "🇧🇩",
  PK: "🇵🇰",
  NP: "🇳🇵",
  LK: "🇱🇰",
  SG: "🇸🇬",
  MY: "🇲🇾",
  ZA: "🇿🇦",
  BR: "🇧🇷",
  RU: "🇷🇺",
  ID: "🇮🇩"
};
const LOCALE_COUNTRY_MAP = {
  IN: { country: "India", code: "IN" },
  US: { country: "United States", code: "US" },
  GB: { country: "United Kingdom", code: "GB" },
  AE: { country: "United Arab Emirates", code: "AE" },
  CA: { country: "Canada", code: "CA" },
  AU: { country: "Australia", code: "AU" },
  DE: { country: "Germany", code: "DE" },
  FR: { country: "France", code: "FR" },
  JP: { country: "Japan", code: "JP" },
  CN: { country: "China", code: "CN" },
  BD: { country: "Bangladesh", code: "BD" },
  PK: { country: "Pakistan", code: "PK" },
  NP: { country: "Nepal", code: "NP" },
  LK: { country: "Sri Lanka", code: "LK" },
  SG: { country: "Singapore", code: "SG" },
  MY: { country: "Malaysia", code: "MY" },
  ZA: { country: "South Africa", code: "ZA" },
  BR: { country: "Brazil", code: "BR" },
  RU: { country: "Russia", code: "RU" },
  ID: { country: "Indonesia", code: "ID" }
};
function getFlag(code) {
  return FLAG_MAP[code.toUpperCase()] ?? "🌍";
}
function parseBrowserLanguage() {
  var _a;
  const lang = navigator.language || "";
  const parts = lang.split("-");
  const regionCode = (_a = parts[1]) == null ? void 0 : _a.toUpperCase();
  if (regionCode && LOCALE_COUNTRY_MAP[regionCode]) {
    const info = LOCALE_COUNTRY_MAP[regionCode];
    return {
      country: info.country,
      countryCode: info.code,
      city: "",
      region: "",
      flag: getFlag(info.code),
      method: "browser"
    };
  }
  return null;
}
function useCountryDetect() {
  const [ipResult, setIpResult] = reactExports.useState(null);
  const [gpsResult, setGpsResult] = reactExports.useState(null);
  const [browserResult, setBrowserResult] = reactExports.useState(null);
  const [manualResult, setManualResult] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  const [gpsLoading, setGpsLoading] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(null);
  reactExports.useEffect(() => {
    setBrowserResult(parseBrowserLanguage());
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5e3);
    fetch("https://ipapi.co/json/", { signal: controller.signal }).then((r) => r.json()).then((data) => {
      if (data == null ? void 0 : data.country_name) {
        setIpResult({
          country: data.country_name,
          countryCode: data.country_code ?? "",
          city: data.city ?? "",
          region: data.region ?? "",
          flag: getFlag(data.country_code ?? ""),
          method: "ip"
        });
      }
    }).catch(() => {
      setError("IP detection failed");
    }).finally(() => {
      clearTimeout(timeout);
      setLoading(false);
    });
    return () => {
      controller.abort();
      clearTimeout(timeout);
    };
  }, []);
  const requestGPS = reactExports.useCallback(() => {
    if (!navigator.geolocation) {
      setError("GPS not supported");
      return;
    }
    setGpsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`,
          { headers: { "Accept-Language": "en" } }
        ).then((r) => r.json()).then((data) => {
          const addr = data.address ?? {};
          const countryCode = (addr.country_code ?? "").toUpperCase();
          setGpsResult({
            country: addr.country ?? "Unknown",
            countryCode,
            city: addr.city ?? addr.town ?? addr.village ?? "",
            region: addr.state ?? "",
            flag: getFlag(countryCode),
            method: "gps"
          });
        }).catch(() => setError("GPS reverse geocoding failed")).finally(() => setGpsLoading(false));
      },
      () => {
        setError("GPS permission denied");
        setGpsLoading(false);
      }
    );
  }, []);
  const manualSet = reactExports.useCallback(
    (countryName, countryCode, flag) => {
      setManualResult({
        country: countryName,
        countryCode,
        city: "",
        region: "",
        flag,
        method: "manual"
      });
    },
    []
  );
  const detected = manualResult ?? gpsResult ?? ipResult ?? browserResult;
  return {
    detected,
    ipResult,
    gpsResult,
    browserResult,
    manualResult,
    loading,
    gpsLoading,
    error,
    requestGPS,
    manualSet
  };
}
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
  { name: "Indonesia", code: "ID", flag: "🇮🇩" }
];
const METHOD_LABELS = {
  ip: "IP Address",
  gps: "GPS",
  browser: "Browser Language",
  manual: "Manual Select"
};
const METHOD_COLORS = {
  ip: "rgba(47,168,255,0.25)",
  gps: "rgba(34,197,94,0.25)",
  browser: "rgba(168,85,247,0.25)",
  manual: "rgba(251,191,36,0.25)"
};
const CARD_STYLE = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.09)",
  borderRadius: 14
};
function CountryDetect() {
  const { navigate } = useApp();
  const {
    detected,
    ipResult,
    gpsResult,
    browserResult,
    loading,
    gpsLoading,
    requestGPS,
    manualSet
  } = useCountryDetect();
  const [showManual, setShowManual] = reactExports.useState(false);
  const [search, setSearch] = reactExports.useState("");
  const [selectedManual, setSelectedManual] = reactExports.useState(null);
  const filtered = COUNTRIES.filter(
    (c) => c.name.toLowerCase().includes(search.toLowerCase())
  );
  function handleManualSelect(c) {
    manualSet(c.name, c.code, c.flag);
    setSelectedManual(c.name);
    setShowManual(false);
    setSearch("");
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "min-h-screen pb-10",
      style: {
        background: "linear-gradient(180deg, #0B0F14 0%, #11161D 100%)"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "sticky top-0 z-20 flex items-center gap-3 px-4 py-4",
            style: {
              background: "rgba(11,15,20,0.95)",
              borderBottom: "1px solid rgba(255,255,255,0.07)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  "data-ocid": "country_detect.back.button",
                  onClick: () => navigate("/settings"),
                  className: "p-2 rounded-full",
                  style: { background: "rgba(255,255,255,0.07)" },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 18, className: "text-white" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-[16px] font-bold text-white", children: "📍 देश का पता लगाएं" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "text-[11px]",
                    style: { color: "rgba(255,255,255,0.45)" },
                    children: "Detect Country"
                  }
                )
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 pt-5 space-y-4 max-w-lg mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 12 },
              animate: { opacity: 1, y: 0 },
              style: {
                ...CARD_STYLE,
                background: "linear-gradient(135deg, rgba(47,168,255,0.13) 0%, rgba(168,85,247,0.13) 100%)",
                border: "1px solid rgba(47,168,255,0.22)"
              },
              className: "p-5",
              "data-ocid": "country_detect.result.card",
              children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  LoaderCircle,
                  {
                    size: 28,
                    className: "animate-spin",
                    style: { color: "#2FA8FF" }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white font-semibold", children: "Detecting..." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "text-[12px]",
                      style: { color: "rgba(255,255,255,0.45)" },
                      children: "IP Address check हो रहा है"
                    }
                  )
                ] })
              ] }) : detected ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-5xl", children: detected.flag }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white text-[20px] font-bold", children: detected.country }),
                  detected.city ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "p",
                    {
                      className: "text-[13px]",
                      style: { color: "rgba(255,255,255,0.6)" },
                      children: [
                        detected.city,
                        detected.region ? `, ${detected.region}` : ""
                      ]
                    }
                  ) : null,
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "span",
                    {
                      className: "inline-block mt-1 px-2 py-0.5 rounded-full text-[11px] font-semibold",
                      style: {
                        background: METHOD_COLORS[detected.method ?? "ip"],
                        color: "rgba(255,255,255,0.85)"
                      },
                      children: [
                        METHOD_LABELS[detected.method ?? "ip"],
                        " ✅"
                      ]
                    }
                  )
                ] })
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white", children: "🌍 Detection failed — please select manually" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h2",
            {
              className: "text-[13px] font-semibold uppercase tracking-widest",
              style: { color: "rgba(255,255,255,0.4)" },
              children: "Detection Methods"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 10 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.05 },
              style: CARD_STYLE,
              className: "p-4 flex items-center gap-3",
              "data-ocid": "country_detect.ip.card",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-9 h-9 rounded-full flex items-center justify-center",
                    style: { background: "rgba(47,168,255,0.15)" },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { size: 16, style: { color: "#2FA8FF" } })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white text-[14px] font-semibold", children: "🌐 IP Address" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "text-[12px]",
                      style: { color: "rgba(255,255,255,0.45)" },
                      children: "Automatic • 90% accurate"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-right", children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                  LoaderCircle,
                  {
                    size: 14,
                    className: "animate-spin",
                    style: { color: "#2FA8FF" }
                  }
                ) : ipResult ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-white text-[13px] font-semibold", children: [
                    ipResult.flag,
                    " ",
                    ipResult.country
                  ] }),
                  ipResult.city ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "text-[11px]",
                      style: { color: "rgba(255,255,255,0.4)" },
                      children: ipResult.city
                    }
                  ) : null,
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    CircleCheckBig,
                    {
                      size: 13,
                      className: "ml-auto mt-0.5",
                      style: { color: "#22c55e" }
                    }
                  )
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "text-[12px]",
                    style: { color: "rgba(255,255,255,0.35)" },
                    children: "Failed"
                  }
                ) })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 10 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.1 },
              style: CARD_STYLE,
              className: "p-4 flex items-center gap-3",
              "data-ocid": "country_detect.gps.card",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-9 h-9 rounded-full flex items-center justify-center",
                    style: { background: "rgba(34,197,94,0.15)" },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 16, style: { color: "#22c55e" } })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white text-[14px] font-semibold", children: "📍 GPS Location" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "text-[12px]",
                      style: { color: "rgba(255,255,255,0.45)" },
                      children: "Most accurate • Permission needed"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-right", children: gpsLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                  LoaderCircle,
                  {
                    size: 14,
                    className: "animate-spin",
                    style: { color: "#22c55e" }
                  }
                ) : gpsResult ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-white text-[13px] font-semibold", children: [
                    gpsResult.flag,
                    " ",
                    gpsResult.country
                  ] }),
                  gpsResult.city ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "text-[11px]",
                      style: { color: "rgba(255,255,255,0.4)" },
                      children: gpsResult.city
                    }
                  ) : null,
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    CircleCheckBig,
                    {
                      size: 13,
                      className: "ml-auto mt-0.5",
                      style: { color: "#22c55e" }
                    }
                  )
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    "data-ocid": "country_detect.gps.button",
                    onClick: requestGPS,
                    className: "px-3 py-1.5 rounded-full text-[12px] font-semibold",
                    style: {
                      background: "rgba(34,197,94,0.2)",
                      color: "#22c55e",
                      border: "1px solid rgba(34,197,94,0.3)"
                    },
                    children: "Allow करें"
                  }
                ) })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 10 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.15 },
              style: CARD_STYLE,
              className: "p-4 flex items-center gap-3",
              "data-ocid": "country_detect.browser.card",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-9 h-9 rounded-full flex items-center justify-center",
                    style: { background: "rgba(168,85,247,0.15)" },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Navigation, { size: 16, style: { color: "#A855F7" } })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white text-[14px] font-semibold", children: "🌍 Browser Language" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "p",
                    {
                      className: "text-[12px]",
                      style: { color: "rgba(255,255,255,0.45)" },
                      children: [
                        "From device locale — ",
                        navigator.language
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-white text-[13px] font-semibold", children: [
                    (browserResult == null ? void 0 : browserResult.flag) ?? "",
                    " ",
                    (browserResult == null ? void 0 : browserResult.country) ?? "Unknown"
                  ] }),
                  browserResult && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    CircleCheckBig,
                    {
                      size: 13,
                      className: "ml-auto mt-0.5",
                      style: { color: "#22c55e" }
                    }
                  )
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 10 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.2 },
              style: CARD_STYLE,
              className: "p-4",
              "data-ocid": "country_detect.manual.card",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "w-9 h-9 rounded-full flex items-center justify-center",
                      style: { background: "rgba(251,191,36,0.15)" },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { size: 16, style: { color: "#fbbf24" } })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white text-[14px] font-semibold", children: "✏️ Manual Select" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "text-[12px]",
                        style: { color: "rgba(255,255,255,0.45)" },
                        children: "Manually choose your country"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      "data-ocid": "country_detect.manual.button",
                      onClick: () => setShowManual((v) => !v),
                      className: "px-3 py-1.5 rounded-full text-[12px] font-semibold",
                      style: {
                        background: "rgba(251,191,36,0.15)",
                        color: "#fbbf24",
                        border: "1px solid rgba(251,191,36,0.25)"
                      },
                      children: selectedManual ? `${selectedManual}` : "Select"
                    }
                  )
                ] }),
                showManual && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      "data-ocid": "country_detect.manual.input",
                      value: search,
                      onChange: (e) => setSearch(e.target.value),
                      placeholder: "Search country...",
                      className: "w-full px-3 py-2 rounded-xl text-[13px] text-white outline-none",
                      style: {
                        background: "rgba(255,255,255,0.07)",
                        border: "1px solid rgba(255,255,255,0.1)"
                      }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-h-48 overflow-y-auto space-y-1 pr-1", children: filtered.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => handleManualSelect(c),
                      className: "w-full flex items-center gap-2 px-3 py-2 rounded-lg text-[13px] text-white hover:opacity-80 transition-opacity",
                      style: {
                        background: selectedManual === c.name ? "rgba(47,168,255,0.15)" : "rgba(255,255,255,0.04)"
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg", children: c.flag }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: c.name }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            className: "ml-auto text-[11px]",
                            style: { color: "rgba(255,255,255,0.3)" },
                            children: c.code
                          }
                        )
                      ]
                    },
                    c.code
                  )) })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "flex items-center gap-2 px-2",
              style: { color: "rgba(255,255,255,0.35)" },
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[12px] leading-relaxed", children: [
                "💡",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { style: { color: "rgba(255,255,255,0.6)" }, children: "90% cases में IP Address से country पता चलता है" }),
                " ",
                "• GPS से ज़्यादा accurate"
              ] })
            }
          )
        ] })
      ]
    }
  );
}
export {
  CountryDetect as default
};
