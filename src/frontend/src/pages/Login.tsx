import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { useApp } from "../context/AppContext";

const MOCK_OTP = "123456";
const OTP_INDICES = [0, 1, 2, 3, 4, 5] as const;

type PageMode = "login" | "register";
type LoginStep = "phone" | "otp";
type RegisterStep = "form" | "verify";
type ContactType = "mobile" | "email";

function CountryBadge() {
  const [info, setInfo] = useState<{
    flag: string;
    country: string;
    method: string;
  } | null>(null);

  useEffect(() => {
    // Browser language quick check
    const lang = navigator.language || "";
    const code = lang.split("-")[1]?.toUpperCase();
    const LANG_MAP: Record<string, { country: string; flag: string }> = {
      IN: { country: "India", flag: "\u{1f1ee}\u{1f1f3}" },
      US: { country: "United States", flag: "\u{1f1fa}\u{1f1f8}" },
      GB: { country: "United Kingdom", flag: "\u{1f1ec}\u{1f1e7}" },
      AE: { country: "UAE", flag: "\u{1f1e6}\u{1f1ea}" },
      CA: { country: "Canada", flag: "\u{1f1e8}\u{1f1e6}" },
      AU: { country: "Australia", flag: "\u{1f1e6}\u{1f1fa}" },
    };
    if (code && LANG_MAP[code]) {
      setInfo({ ...LANG_MAP[code], method: "Browser" });
    }

    // IP detection
    const controller = new AbortController();
    const t = setTimeout(() => controller.abort(), 4000);
    fetch("https://ipapi.co/json/", { signal: controller.signal })
      .then((r) => r.json())
      .then((d) => {
        if (d?.country_name) {
          const cc = (d.country_code ?? "").toUpperCase();
          const flagChars =
            cc.length === 2
              ? String.fromCodePoint(
                  ...[...cc].map((c) => 0x1f1e0 + c.charCodeAt(0) - 65),
                )
              : "\u{1f30d}";
          setInfo({ country: d.country_name, flag: flagChars, method: "IP" });
        }
      })
      .catch(() => {})
      .finally(() => clearTimeout(t));

    return () => {
      controller.abort();
      clearTimeout(t);
    };
  }, []);

  if (!info) return null;

  return (
    <p
      className="mt-3 text-center text-[11px]"
      style={{ color: "rgba(255,255,255,0.35)" }}
    >
      <span
        className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full"
        style={{
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        {info.flag} {info.country} &bull; Detected via {info.method}
      </span>
    </p>
  );
}

export default function Login() {
  const { login, navigate } = useApp();

  // Mode
  const [mode, setMode] = useState<PageMode>("login");

  // Login state
  const [loginStep, setLoginStep] = useState<LoginStep>("phone");
  const [phone, setPhone] = useState("");
  const [loginOtp, setLoginOtp] = useState(["", "", "", "", "", ""]);
  const loginOtpRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Register state
  const [regStep, setRegStep] = useState<RegisterStep>("form");
  const [regName, setRegName] = useState("");
  const [contactType, setContactType] = useState<ContactType>("mobile");
  const [regPhone, setRegPhone] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [regOtp, setRegOtp] = useState(["", "", "", "", "", ""]);
  const regOtpRefs = useRef<(HTMLInputElement | null)[]>([]);

  const [loading, setLoading] = useState(false);

  // --- Login handlers ---
  const handleSendOtp = () => {
    if (phone.length < 10) {
      toast.error("Please enter a valid 10-digit mobile number");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setLoginStep("otp");
      toast.success("OTP sent successfully!");
    }, 1200);
  };

  const handleOtpChange = (
    index: number,
    value: string,
    arr: string[],
    setArr: (v: string[]) => void,
    refs: React.MutableRefObject<(HTMLInputElement | null)[]>,
  ) => {
    if (!/^[0-9]?$/.test(value)) return;
    const next = [...arr];
    next[index] = value;
    setArr(next);
    if (value && index < 5) {
      refs.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (
    index: number,
    e: React.KeyboardEvent,
    arr: string[],
    refs: React.MutableRefObject<(HTMLInputElement | null)[]>,
  ) => {
    if (e.key === "Backspace" && !arr[index] && index > 0) {
      refs.current[index - 1]?.focus();
    }
  };

  const handleVerifyLogin = () => {
    const code = loginOtp.join("");
    if (code.length < 6) {
      toast.error("Please enter the 6-digit OTP");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      login(`+91${phone}`);
      toast.success("Login successful! Welcome to Komofast 🎉");
    }, 1000);
  };

  // --- Register handlers ---
  const handleSendVerificationCode = () => {
    if (!regName.trim()) {
      toast.error("Please enter your full name");
      return;
    }
    if (contactType === "mobile" && regPhone.length < 10) {
      toast.error("Please enter a valid 10-digit mobile number");
      return;
    }
    if (contactType === "email" && !regEmail.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }
    if (regPassword.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setRegStep("verify");
      toast.success("Verification code sent!");
    }, 1200);
  };

  const handleVerifyRegister = () => {
    const code = regOtp.join("");
    if (code.length < 6) {
      toast.error("Please enter the 6-digit code");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      const contact = contactType === "mobile" ? `+91${regPhone}` : regEmail;
      login(contact, regName.trim());
      toast.success(`Welcome to Komofast, ${regName.split(" ")[0]}! 🎉`);
    }, 1000);
  };

  const switchMode = (m: PageMode) => {
    setMode(m);
    setLoading(false);
    // reset login
    setLoginStep("phone");
    setPhone("");
    setLoginOtp(["", "", "", "", "", ""]);
    // reset register
    setRegStep("form");
    setRegName("");
    setRegPhone("");
    setRegEmail("");
    setRegPassword("");
    setRegOtp(["", "", "", "", "", ""]);
  };

  // shared OTP box renderer
  const renderOtpBoxes = (
    arr: string[],
    setArr: (v: string[]) => void,
    refs: React.MutableRefObject<(HTMLInputElement | null)[]>,
    ocidPrefix: string,
  ) =>
    OTP_INDICES.map((i) => (
      <input
        key={`otp-digit-${i}`}
        data-ocid={`${ocidPrefix}.input`}
        ref={(el) => {
          refs.current[i] = el;
        }}
        type="text"
        inputMode="numeric"
        maxLength={1}
        value={arr[i]}
        onChange={(e) => handleOtpChange(i, e.target.value, arr, setArr, refs)}
        onKeyDown={(e) => handleOtpKeyDown(i, e, arr, refs)}
        className="w-12 h-14 rounded-xl text-center text-[22px] font-bold text-white outline-none transition-all"
        style={{
          background: arr[i]
            ? "rgba(47,168,255,0.15)"
            : "rgba(255,255,255,0.06)",
          border: arr[i]
            ? "1.5px solid rgba(47,168,255,0.6)"
            : "1.5px solid rgba(255,255,255,0.12)",
        }}
      />
    ));

  const cardStyle: React.CSSProperties = {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.09)",
    backdropFilter: "blur(16px)",
    boxShadow: "0 24px 64px rgba(0,0,0,0.5)",
  };

  const gradientBtn: React.CSSProperties = {
    background: "linear-gradient(135deg, #2FA8FF 0%, #A855F7 100%)",
    boxShadow: loading ? "none" : "0 4px 24px rgba(47,168,255,0.35)",
  };

  const mockHint = (
    <div
      className="mb-6 px-3 py-2 rounded-xl text-[12px] font-mono"
      style={{
        background: "rgba(168,85,247,0.12)",
        border: "1px dashed rgba(168,85,247,0.35)",
        color: "rgba(168,85,247,0.9)",
      }}
    >
      🔐 Your code: <strong>{MOCK_OTP}</strong> (demo mode)
    </div>
  );

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-5"
      style={{
        background:
          "linear-gradient(160deg, #0B0F14 0%, #0d1220 40%, #110b1e 100%)",
      }}
    >
      {/* Background glow blobs */}
      <div
        className="fixed top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full opacity-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(47,168,255,0.5) 0%, transparent 70%)",
        }}
      />
      <div
        className="fixed bottom-0 right-0 w-80 h-80 rounded-full opacity-15 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(168,85,247,0.6) 0%, transparent 70%)",
        }}
      />

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-10 text-center"
      >
        <div
          className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center text-3xl font-black text-white"
          style={{
            background: "linear-gradient(135deg, #2FA8FF 0%, #A855F7 100%)",
            boxShadow: "0 8px 32px rgba(47,168,255,0.35)",
          }}
        >
          K
        </div>
        <h1 className="text-[28px] font-black text-white tracking-tight">
          Komofast
          <span
            className="ml-2"
            style={{
              background: "linear-gradient(90deg, #2FA8FF, #A855F7)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Social
          </span>
        </h1>
        <p
          className="text-[13px] mt-1"
          style={{ color: "rgba(255,255,255,0.45)" }}
        >
          Connect. Create. Earn.
        </p>
      </motion.div>

      {/* Card area */}
      <AnimatePresence mode="wait">
        {mode === "login" ? (
          // ===== LOGIN MODE =====
          <AnimatePresence mode="wait" key="login-mode">
            {loginStep === "phone" ? (
              <motion.div
                key="login-phone"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
                className="w-full max-w-sm rounded-2xl p-6"
                style={cardStyle}
              >
                <h2 className="text-[20px] font-bold text-white mb-1">
                  Login with Mobile
                </h2>
                <p
                  className="text-[13px] mb-6"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  Enter your mobile number to receive OTP
                </p>

                <p className="text-[12px] font-semibold text-white/60 uppercase tracking-wider mb-2">
                  Mobile Number
                </p>
                <div className="flex gap-2 mb-5">
                  <div
                    className="flex items-center px-3 rounded-xl text-[15px] font-semibold text-white"
                    style={{
                      background: "rgba(47,168,255,0.12)",
                      border: "1px solid rgba(47,168,255,0.25)",
                      minWidth: "52px",
                    }}
                  >
                    +91
                  </div>
                  <Input
                    data-ocid="login.input"
                    type="tel"
                    inputMode="numeric"
                    maxLength={10}
                    placeholder="Enter 10-digit number"
                    value={phone}
                    onChange={(e) =>
                      setPhone(e.target.value.replace(/\D/g, ""))
                    }
                    onKeyDown={(e) => e.key === "Enter" && handleSendOtp()}
                    className="flex-1 rounded-xl text-[15px] text-white placeholder:text-white/25"
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      height: "48px",
                    }}
                  />
                </div>

                <Button
                  data-ocid="login.primary_button"
                  className="w-full h-12 rounded-xl text-[15px] font-bold text-white border-0"
                  style={gradientBtn}
                  onClick={handleSendOtp}
                  disabled={loading}
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                      Sending OTP...
                    </span>
                  ) : (
                    "Send OTP →"
                  )}
                </Button>

                <p
                  className="text-center text-[13px] mt-5"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                >
                  Don&apos;t have an account?{" "}
                  <button
                    type="button"
                    data-ocid="login.register_link"
                    onClick={() => switchMode("register")}
                    className="font-semibold"
                    style={{ color: "rgba(168,85,247,0.9)" }}
                  >
                    Create New Account
                  </button>
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="login-otp"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
                className="w-full max-w-sm rounded-2xl p-6"
                style={cardStyle}
              >
                <button
                  type="button"
                  onClick={() => {
                    setLoginStep("phone");
                    setLoginOtp(["", "", "", "", "", ""]);
                  }}
                  className="text-[13px] mb-4 flex items-center gap-1"
                  style={{ color: "rgba(47,168,255,0.8)" }}
                >
                  ← Back
                </button>

                <h2 className="text-[20px] font-bold text-white mb-1">
                  Verify OTP
                </h2>
                <p
                  className="text-[13px] mb-1"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  Sent to +91 {phone}
                </p>

                {mockHint}

                <p className="text-[12px] font-semibold text-white/60 uppercase tracking-wider mb-3">
                  Enter 6-digit OTP
                </p>

                <div className="flex gap-2 justify-between mb-5">
                  {renderOtpBoxes(loginOtp, setLoginOtp, loginOtpRefs, "login")}
                </div>

                <Button
                  data-ocid="login.submit_button"
                  className="w-full h-12 rounded-xl text-[15px] font-bold text-white border-0"
                  style={gradientBtn}
                  onClick={handleVerifyLogin}
                  disabled={loading}
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                      Verifying...
                    </span>
                  ) : (
                    "Verify & Login ✓"
                  )}
                </Button>

                <p
                  className="text-center text-[12px] mt-4"
                  style={{ color: "rgba(255,255,255,0.3)" }}
                >
                  Didn&apos;t receive OTP?{" "}
                  <button
                    type="button"
                    onClick={() => toast.info("OTP resent! (demo mode)")}
                    style={{ color: "rgba(47,168,255,0.7)" }}
                  >
                    Resend
                  </button>
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        ) : (
          // ===== REGISTER MODE =====
          <AnimatePresence mode="wait" key="register-mode">
            {regStep === "form" ? (
              <motion.div
                key="reg-form"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
                className="w-full max-w-sm rounded-2xl p-6"
                style={cardStyle}
              >
                <h2 className="text-[20px] font-bold text-white mb-1">
                  Create Account
                </h2>
                <p
                  className="text-[13px] mb-6"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  Join Komofast Social today
                </p>

                {/* Full Name */}
                <p className="text-[12px] font-semibold text-white/60 uppercase tracking-wider mb-2">
                  Full Name
                </p>
                <Input
                  data-ocid="register.input"
                  type="text"
                  placeholder="Enter your full name"
                  value={regName}
                  onChange={(e) => setRegName(e.target.value)}
                  className="w-full rounded-xl text-[15px] text-white placeholder:text-white/25 mb-4"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    height: "48px",
                  }}
                />

                {/* Contact type toggle */}
                <p className="text-[12px] font-semibold text-white/60 uppercase tracking-wider mb-2">
                  Contact
                </p>
                <div
                  className="flex gap-1 p-1 rounded-xl mb-3"
                  style={{ background: "rgba(255,255,255,0.06)" }}
                >
                  {(["mobile", "email"] as ContactType[]).map((t) => (
                    <button
                      key={t}
                      type="button"
                      data-ocid={`register.${t}_tab`}
                      onClick={() => setContactType(t)}
                      className="flex-1 py-2 rounded-lg text-[13px] font-semibold capitalize transition-all"
                      style={{
                        background:
                          contactType === t
                            ? "linear-gradient(135deg, #2FA8FF 0%, #A855F7 100%)"
                            : "transparent",
                        color:
                          contactType === t ? "#fff" : "rgba(255,255,255,0.45)",
                      }}
                    >
                      {t === "mobile" ? "📱 Mobile" : "✉️ Email"}
                    </button>
                  ))}
                </div>

                {/* Contact input */}
                <AnimatePresence mode="wait">
                  {contactType === "mobile" ? (
                    <motion.div
                      key="contact-mobile"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      transition={{ duration: 0.2 }}
                      className="flex gap-2 mb-4"
                    >
                      <div
                        className="flex items-center px-3 rounded-xl text-[15px] font-semibold text-white"
                        style={{
                          background: "rgba(47,168,255,0.12)",
                          border: "1px solid rgba(47,168,255,0.25)",
                          minWidth: "52px",
                        }}
                      >
                        +91
                      </div>
                      <Input
                        data-ocid="register.input"
                        type="tel"
                        inputMode="numeric"
                        maxLength={10}
                        placeholder="Enter 10-digit number"
                        value={regPhone}
                        onChange={(e) =>
                          setRegPhone(e.target.value.replace(/\D/g, ""))
                        }
                        className="flex-1 rounded-xl text-[15px] text-white placeholder:text-white/25"
                        style={{
                          background: "rgba(255,255,255,0.06)",
                          border: "1px solid rgba(255,255,255,0.12)",
                          height: "48px",
                        }}
                      />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="contact-email"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.2 }}
                      className="mb-4"
                    >
                      <Input
                        data-ocid="register.input"
                        type="email"
                        placeholder="Enter your email address"
                        value={regEmail}
                        onChange={(e) => setRegEmail(e.target.value)}
                        className="w-full rounded-xl text-[15px] text-white placeholder:text-white/25"
                        style={{
                          background: "rgba(255,255,255,0.06)",
                          border: "1px solid rgba(255,255,255,0.12)",
                          height: "48px",
                        }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Password */}
                <p className="text-[12px] font-semibold text-white/60 uppercase tracking-wider mb-2">
                  Password
                </p>
                <div className="relative mb-5">
                  <Input
                    data-ocid="register.input"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password (min 6 chars)"
                    value={regPassword}
                    onChange={(e) => setRegPassword(e.target.value)}
                    className="w-full rounded-xl text-[15px] text-white placeholder:text-white/25 pr-12"
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      height: "48px",
                    }}
                  />
                  <button
                    type="button"
                    data-ocid="register.toggle"
                    onClick={() => setShowPassword((p) => !p)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[18px] opacity-60 hover:opacity-100 transition-opacity"
                  >
                    {showPassword ? "🙈" : "👁️"}
                  </button>
                </div>

                <Button
                  data-ocid="register.primary_button"
                  className="w-full h-12 rounded-xl text-[15px] font-bold text-white border-0"
                  style={gradientBtn}
                  onClick={handleSendVerificationCode}
                  disabled={loading}
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                      Sending Code...
                    </span>
                  ) : (
                    "Send Verification Code →"
                  )}
                </Button>

                <p
                  className="text-center text-[13px] mt-5"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                >
                  Already have an account?{" "}
                  <button
                    type="button"
                    data-ocid="register.login_link"
                    onClick={() => switchMode("login")}
                    className="font-semibold"
                    style={{ color: "rgba(47,168,255,0.8)" }}
                  >
                    Login
                  </button>
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="reg-verify"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
                className="w-full max-w-sm rounded-2xl p-6"
                style={cardStyle}
              >
                <button
                  type="button"
                  onClick={() => {
                    setRegStep("form");
                    setRegOtp(["", "", "", "", "", ""]);
                  }}
                  className="text-[13px] mb-4 flex items-center gap-1"
                  style={{ color: "rgba(47,168,255,0.8)" }}
                >
                  ← Back
                </button>

                <h2 className="text-[20px] font-bold text-white mb-1">
                  Verify Your Account
                </h2>
                <p
                  className="text-[13px] mb-1"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  Code sent to{" "}
                  <span className="text-white font-semibold">
                    {contactType === "mobile" ? `+91 ${regPhone}` : regEmail}
                  </span>
                </p>

                <div className="my-4">{mockHint}</div>

                <p className="text-[12px] font-semibold text-white/60 uppercase tracking-wider mb-3">
                  Enter 6-digit Code
                </p>

                <div className="flex gap-2 justify-between mb-5">
                  {renderOtpBoxes(regOtp, setRegOtp, regOtpRefs, "register")}
                </div>

                <Button
                  data-ocid="register.submit_button"
                  className="w-full h-12 rounded-xl text-[15px] font-bold text-white border-0"
                  style={gradientBtn}
                  onClick={handleVerifyRegister}
                  disabled={loading}
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                      Creating Account...
                    </span>
                  ) : (
                    "Verify & Create Account ✓"
                  )}
                </Button>

                <p
                  className="text-center text-[12px] mt-4"
                  style={{ color: "rgba(255,255,255,0.3)" }}
                >
                  Didn&apos;t receive the code?{" "}
                  <button
                    type="button"
                    onClick={() => toast.info("Code resent! (demo mode)")}
                    style={{ color: "rgba(47,168,255,0.7)" }}
                  >
                    Resend
                  </button>
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </AnimatePresence>

      {/* Country detection badge */}
      <CountryBadge />

      {/* Terms & Privacy links */}
      <p
        className="mt-6 text-[12px] text-center"
        style={{ color: "rgba(255,255,255,0.35)" }}
      >
        By signing up, you agree to our{" "}
        <button
          type="button"
          data-ocid="login.terms.link"
          onClick={() => navigate("/terms")}
          style={{ color: "rgba(47,168,255,0.7)" }}
          className="hover:underline"
        >
          Terms &amp; Conditions
        </button>{" "}
        and{" "}
        <button
          type="button"
          data-ocid="login.privacy.link"
          onClick={() => navigate("/privacy-policy")}
          style={{ color: "rgba(47,168,255,0.7)" }}
          className="hover:underline"
        >
          Privacy Policy
        </button>
      </p>

      <p
        className="mt-8 text-[11px]"
        style={{ color: "rgba(255,255,255,0.2)" }}
      >
        © {new Date().getFullYear()}. Built with love using{" "}
        <a
          href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
          target="_blank"
          rel="noreferrer"
          style={{ color: "rgba(47,168,255,0.5)" }}
        >
          caffeine.ai
        </a>
      </p>
    </div>
  );
}
