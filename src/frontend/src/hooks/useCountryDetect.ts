import { useCallback, useEffect, useState } from "react";

export interface CountryInfo {
  country: string;
  countryCode: string;
  city: string;
  region: string;
  flag: string;
  method: "ip" | "gps" | "browser" | "manual" | null;
}

export interface UseCountryDetectReturn {
  detected: CountryInfo | null;
  ipResult: CountryInfo | null;
  gpsResult: CountryInfo | null;
  browserResult: CountryInfo | null;
  manualResult: CountryInfo | null;
  loading: boolean;
  gpsLoading: boolean;
  error: string | null;
  requestGPS: () => void;
  manualSet: (countryName: string, countryCode: string, flag: string) => void;
}

const FLAG_MAP: Record<string, string> = {
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
  ID: "🇮🇩",
};

const LOCALE_COUNTRY_MAP: Record<string, { country: string; code: string }> = {
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
  ID: { country: "Indonesia", code: "ID" },
};

function getFlag(code: string): string {
  return FLAG_MAP[code.toUpperCase()] ?? "🌍";
}

function parseBrowserLanguage(): CountryInfo | null {
  const lang = navigator.language || "";
  const parts = lang.split("-");
  const regionCode = parts[1]?.toUpperCase();
  if (regionCode && LOCALE_COUNTRY_MAP[regionCode]) {
    const info = LOCALE_COUNTRY_MAP[regionCode];
    return {
      country: info.country,
      countryCode: info.code,
      city: "",
      region: "",
      flag: getFlag(info.code),
      method: "browser",
    };
  }
  return null;
}

export function useCountryDetect(): UseCountryDetectReturn {
  const [ipResult, setIpResult] = useState<CountryInfo | null>(null);
  const [gpsResult, setGpsResult] = useState<CountryInfo | null>(null);
  const [browserResult, setBrowserResult] = useState<CountryInfo | null>(null);
  const [manualResult, setManualResult] = useState<CountryInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [gpsLoading, setGpsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Browser language detection (sync)
    setBrowserResult(parseBrowserLanguage());

    // IP detection
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000);

    fetch("https://ipapi.co/json/", { signal: controller.signal })
      .then((r) => r.json())
      .then((data) => {
        if (data?.country_name) {
          setIpResult({
            country: data.country_name,
            countryCode: data.country_code ?? "",
            city: data.city ?? "",
            region: data.region ?? "",
            flag: getFlag(data.country_code ?? ""),
            method: "ip",
          });
        }
      })
      .catch(() => {
        setError("IP detection failed");
      })
      .finally(() => {
        clearTimeout(timeout);
        setLoading(false);
      });

    return () => {
      controller.abort();
      clearTimeout(timeout);
    };
  }, []);

  const requestGPS = useCallback(() => {
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
          { headers: { "Accept-Language": "en" } },
        )
          .then((r) => r.json())
          .then((data) => {
            const addr = data.address ?? {};
            const countryCode = (addr.country_code ?? "").toUpperCase();
            setGpsResult({
              country: addr.country ?? "Unknown",
              countryCode,
              city: addr.city ?? addr.town ?? addr.village ?? "",
              region: addr.state ?? "",
              flag: getFlag(countryCode),
              method: "gps",
            });
          })
          .catch(() => setError("GPS reverse geocoding failed"))
          .finally(() => setGpsLoading(false));
      },
      () => {
        setError("GPS permission denied");
        setGpsLoading(false);
      },
    );
  }, []);

  const manualSet = useCallback(
    (countryName: string, countryCode: string, flag: string) => {
      setManualResult({
        country: countryName,
        countryCode,
        city: "",
        region: "",
        flag,
        method: "manual",
      });
    },
    [],
  );

  // Priority: manual > gps > ip > browser
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
    manualSet,
  };
}
