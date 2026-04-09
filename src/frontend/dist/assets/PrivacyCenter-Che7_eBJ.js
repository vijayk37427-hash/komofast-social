import { u as useApp, r as reactExports, j as jsxRuntimeExports, m as motion, b as ue, ao as Camera, a7 as Mic, d as Bell, M as MapPin, B as Button, D as Dialog, p as DialogTrigger, k as DialogContent, q as DialogHeader, s as DialogTitle, A as AnimatePresence, I as Input, T as Textarea } from "./index-BlWpIyR8.js";
import { B as Badge } from "./badge-BChbocV7.js";
import { L as Label } from "./label-DrmZZQeS.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-Bt_vSzJy.js";
import { S as Switch } from "./switch-Cx12Axum.js";
import { A as ArrowLeft } from "./arrow-left-C_jsN0fF.js";
import { S as ShieldCheck } from "./shield-check-SG0as2WD.js";
import { D as Download } from "./download-bwGeHIgr.js";
import { F as FileText } from "./file-text--vkZEpl3.js";
import { C as ChevronRight } from "./chevron-right-DBH-VzQy.js";
import { S as Shield } from "./shield-BtA-oc8E.js";
import "./index-D4ku5XXv.js";
function SectionHeader({ title }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-1 mb-2 mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-bold text-white/40 uppercase tracking-widest", children: title }) });
}
function SectionCard({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "rounded-2xl overflow-hidden",
      style: {
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)"
      },
      children
    }
  );
}
function Divider() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-4 h-px bg-white/5" });
}
function PermissionRow({
  icon,
  label,
  sublabel,
  enabled,
  onChange,
  ocid
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 px-4 py-3.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0",
        style: {
          background: "linear-gradient(135deg, rgba(47,168,255,0.18), rgba(168,85,247,0.22))"
        },
        children: icon
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-medium text-white/80", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-komo-text-muted mt-0.5", children: sublabel })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-shrink-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Badge,
        {
          className: "text-[10px] font-semibold px-2 py-0.5",
          style: {
            background: enabled ? "rgba(34,197,94,0.15)" : "rgba(239,68,68,0.15)",
            color: enabled ? "#22c55e" : "#ef4444",
            border: `1px solid ${enabled ? "rgba(34,197,94,0.3)" : "rgba(239,68,68,0.3)"}`
          },
          children: enabled ? "Allowed" : "Blocked"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { "data-ocid": ocid, checked: enabled, onCheckedChange: onChange })
    ] })
  ] });
}
const DATA_REPORT = [
  { label: "Posts", value: "45", icon: "📝" },
  { label: "Reels", value: "12", icon: "🎬" },
  { label: "Messages", value: "230", icon: "💬" },
  { label: "Searches", value: "89", icon: "🔍" },
  { label: "Profile Views", value: "1.2K", icon: "👁️" }
];
const LEGAL_LINKS = [
  {
    label: "Privacy Policy",
    path: "/privacy-policy",
    icon: "🔒",
    ocid: "privacy_center.privacy_policy.link"
  },
  {
    label: "Terms & Conditions",
    path: "/terms",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { size: 15, className: "text-komo-purple" }),
    ocid: "privacy_center.terms.link"
  },
  {
    label: "Data Protection (IT Act)",
    path: "/data-protection",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { size: 15, className: "text-green-400" }),
    ocid: "privacy_center.data_protection.link"
  },
  {
    label: "Community Guidelines",
    path: "/community-guidelines",
    icon: "📋",
    ocid: "privacy_center.community_guidelines.link"
  }
];
function PrivacyCenter() {
  const { navigate } = useApp();
  const [camera, setCamera] = reactExports.useState(true);
  const [microphone, setMicrophone] = reactExports.useState(true);
  const [notifications, setNotifications] = reactExports.useState(true);
  const [location, setLocation] = reactExports.useState(false);
  const [personalizedAds, setPersonalizedAds] = reactExports.useState(true);
  const [usageAnalytics, setUsageAnalytics] = reactExports.useState(true);
  const [crashReports, setCrashReports] = reactExports.useState(true);
  const [activityStatus, setActivityStatus] = reactExports.useState(true);
  const [deletionOpen, setDeletionOpen] = reactExports.useState(false);
  const [delName, setDelName] = reactExports.useState("");
  const [delEmail, setDelEmail] = reactExports.useState("");
  const [delReason, setDelReason] = reactExports.useState("");
  const [delMessage, setDelMessage] = reactExports.useState("");
  const score = reactExports.useMemo(() => {
    let s = 50;
    if (!location) s += 15;
    if (!personalizedAds) s += 10;
    if (!usageAnalytics) s += 8;
    if (crashReports) s += 7;
    if (!activityStatus) s += 10;
    return Math.min(100, s);
  }, [location, personalizedAds, usageAnalytics, crashReports, activityStatus]);
  const scoreColor = score >= 70 ? "#22c55e" : score >= 40 ? "#eab308" : "#ef4444";
  const scoreLabel = score >= 70 ? "Strong" : score >= 40 ? "Moderate" : "Weak";
  const handleDownloadData = () => {
    ue.success(
      "Data export request submitted! You'll receive an email within 48 hours."
    );
  };
  const handleDeletionSubmit = () => {
    if (!delName || !delEmail || !delReason) {
      ue.error("Please fill in all required fields.");
      return;
    }
    setDeletionOpen(false);
    setDelName("");
    setDelEmail("");
    setDelReason("");
    setDelMessage("");
    ue.success(
      "Data deletion request submitted. We'll process it within 30 days."
    );
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 16 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.3 },
      className: "max-w-2xl mx-auto px-4 py-4 pb-16",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              "data-ocid": "privacy_center.back.button",
              className: "w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors",
              onClick: () => navigate("/settings"),
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 18, className: "text-white" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-[20px] font-bold text-white leading-tight flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { size: 20, className: "text-komo-blue" }),
              "Privacy Center"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-komo-text-muted", children: "गोपनीयता केंद्र · App & Technology Privacy" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Privacy Score" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionCard, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "relative flex-shrink-0",
              style: { width: 88, height: 88 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "svg",
                  {
                    width: "88",
                    height: "88",
                    viewBox: "0 0 88 88",
                    "aria-hidden": "true",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "circle",
                        {
                          cx: "44",
                          cy: "44",
                          r: "36",
                          fill: "none",
                          stroke: "rgba(255,255,255,0.07)",
                          strokeWidth: "8"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "circle",
                        {
                          cx: "44",
                          cy: "44",
                          r: "36",
                          fill: "none",
                          stroke: scoreColor,
                          strokeWidth: "8",
                          strokeLinecap: "round",
                          strokeDasharray: `${2 * Math.PI * 36}`,
                          strokeDashoffset: `${2 * Math.PI * 36 * (1 - score / 100)}`,
                          transform: "rotate(-90 44 44)",
                          style: { transition: "stroke-dashoffset 0.6s ease" }
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 flex flex-col items-center justify-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "text-[22px] font-bold leading-none",
                      style: { color: scoreColor },
                      children: score
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] text-white/40 font-medium mt-0.5", children: "/ 100" })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 mb-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "span",
              {
                className: "text-[14px] font-bold",
                style: { color: scoreColor },
                children: [
                  scoreLabel,
                  " Protection"
                ]
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-white/50 mb-3", children: "Your Privacy Protection Level" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "h-2 rounded-full w-full overflow-hidden",
                style: { background: "rgba(255,255,255,0.07)" },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    className: "h-full rounded-full",
                    style: { background: scoreColor },
                    initial: { width: 0 },
                    animate: { width: `${score}%` },
                    transition: { duration: 0.6, ease: "easeOut" }
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-white/30 mt-2", children: "Adjust the settings below to improve your score" })
          ] })
        ] }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "App Permissions" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(SectionCard, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            PermissionRow,
            {
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { size: 15, className: "text-komo-blue" }),
              label: "Camera",
              sublabel: "Used for Reels, photos, and video calls",
              enabled: camera,
              onChange: (v) => {
                setCamera(v);
                ue.success(
                  v ? "Camera access allowed" : "Camera access blocked"
                );
              },
              ocid: "privacy_center.camera.switch"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            PermissionRow,
            {
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Mic, { size: 15, className: "text-komo-purple" }),
              label: "Microphone",
              sublabel: "Used for voice messages and calls",
              enabled: microphone,
              onChange: (v) => {
                setMicrophone(v);
                ue.success(
                  v ? "Microphone access allowed" : "Microphone access blocked"
                );
              },
              ocid: "privacy_center.microphone.switch"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            PermissionRow,
            {
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { size: 15, className: "text-yellow-400" }),
              label: "Notifications",
              sublabel: "Push alerts for activity and messages",
              enabled: notifications,
              onChange: (v) => {
                setNotifications(v);
                ue.success(
                  v ? "Notifications enabled" : "Notifications disabled"
                );
              },
              ocid: "privacy_center.notifications.switch"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            PermissionRow,
            {
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 15, className: "text-red-400" }),
              label: "Location",
              sublabel: "Used for local content and check-ins",
              enabled: location,
              onChange: (v) => {
                setLocation(v);
                ue.success(
                  v ? "Location access allowed" : "Location access blocked"
                );
              },
              ocid: "privacy_center.location.switch"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Data & Personalization" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionCard, { children: [
          {
            id: "ads",
            label: "Personalized Ads",
            sublabel: "Allow Komofast to show ads based on your activity",
            value: personalizedAds,
            set: setPersonalizedAds,
            ocid: "privacy_center.personalized_ads.switch"
          },
          {
            id: "analytics",
            label: "Usage Analytics",
            sublabel: "Share anonymous usage data to improve the app",
            value: usageAnalytics,
            set: setUsageAnalytics,
            ocid: "privacy_center.usage_analytics.switch"
          },
          {
            id: "crash",
            label: "Crash Reports",
            sublabel: "Automatically send crash reports to our team",
            value: crashReports,
            set: setCrashReports,
            ocid: "privacy_center.crash_reports.switch"
          },
          {
            id: "activity",
            label: "Activity Status",
            sublabel: "Show when you're online to friends",
            value: activityStatus,
            set: setActivityStatus,
            ocid: "privacy_center.activity_status.switch"
          }
        ].map((item, i, arr) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 px-4 py-3.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-medium text-white/80", children: item.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-komo-text-muted mt-0.5", children: item.sublabel })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Switch,
              {
                "data-ocid": item.ocid,
                checked: item.value,
                onCheckedChange: (v) => {
                  item.set(v);
                  ue.success(
                    v ? `${item.label} enabled` : `${item.label} disabled`
                  );
                }
              }
            )
          ] }),
          i < arr.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {})
        ] }, item.id)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Your Data" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(SectionCard, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 px-4 py-3.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0",
                style: {
                  background: "linear-gradient(135deg, rgba(47,168,255,0.18), rgba(168,85,247,0.22))"
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { size: 15, className: "text-komo-blue" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-medium text-white/80", children: "Download My Data" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-komo-text-muted mt-0.5", children: "Export a copy of all your Komofast data" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                "data-ocid": "privacy_center.download_data.button",
                size: "sm",
                className: "komo-gradient border-0 text-white h-8 text-[12px] px-3",
                onClick: handleDownloadData,
                children: "Export"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                "data-ocid": "privacy_center.data_report.open_modal_button",
                className: "w-full flex items-center gap-3 px-4 py-3.5 hover:bg-white/5 transition-colors text-left",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0",
                      style: {
                        background: "linear-gradient(135deg, rgba(47,168,255,0.18), rgba(168,85,247,0.22))"
                      },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { size: 15, className: "text-komo-purple" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-medium text-white/80", children: "View Data Usage Report" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-komo-text-muted mt-0.5", children: "See a breakdown of data Komofast has stored" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 15, className: "text-white/25 flex-shrink-0" })
                ]
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              DialogContent,
              {
                "data-ocid": "privacy_center.data_report.dialog",
                className: "bg-[#1A1F26] border-white/10 max-w-sm",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "text-white flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { size: 16, className: "text-komo-purple" }),
                    "Data Usage Report"
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 pt-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-komo-text-muted", children: "Summary of data associated with your account:" }),
                    DATA_REPORT.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: "flex items-center justify-between p-3 rounded-xl",
                        style: {
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(255,255,255,0.07)"
                        },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[16px]", children: item.icon }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[13px] text-white/70", children: item.label })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[14px] font-bold text-komo-blue", children: item.value })
                        ]
                      },
                      item.label
                    )),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-white/30 text-center pt-1", children: "Data as of March 2026" })
                  ] })
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Data Deletion Request" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionCard, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-3.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              "data-ocid": "privacy_center.deletion_form.toggle",
              className: "w-full flex items-center justify-between",
              onClick: () => setDeletionOpen((v) => !v),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0",
                      style: { background: "rgba(239,68,68,0.12)" },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { size: 15, className: "text-red-400" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-medium text-white/80", children: "Request Data Deletion" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-komo-text-muted mt-0.5", children: "Submit a formal request under IT Act 2000" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  ChevronRight,
                  {
                    size: 15,
                    className: "text-white/25 transition-transform",
                    style: {
                      transform: deletionOpen ? "rotate(90deg)" : "rotate(0deg)"
                    }
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: deletionOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { height: 0, opacity: 0 },
              animate: { height: "auto", opacity: 1 },
              exit: { height: 0, opacity: 0 },
              transition: { duration: 0.25 },
              className: "overflow-hidden",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-4 space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[11px] text-komo-text-muted", children: "Full Name *" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      "data-ocid": "privacy_center.deletion_name.input",
                      placeholder: "Your full name",
                      value: delName,
                      onChange: (e) => setDelName(e.target.value),
                      className: "bg-white/5 border-white/10 text-white placeholder:text-white/30 h-9 text-[13px]"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[11px] text-komo-text-muted", children: "Email Address *" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      "data-ocid": "privacy_center.deletion_email.input",
                      type: "email",
                      placeholder: "your@email.com",
                      value: delEmail,
                      onChange: (e) => setDelEmail(e.target.value),
                      className: "bg-white/5 border-white/10 text-white placeholder:text-white/30 h-9 text-[13px]"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[11px] text-komo-text-muted", children: "Reason *" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: delReason, onValueChange: setDelReason, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      SelectTrigger,
                      {
                        "data-ocid": "privacy_center.deletion_reason.select",
                        className: "bg-white/5 border-white/10 text-white h-9 text-[13px]",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select a reason" })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { className: "bg-[#1A1F26] border-white/10", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        SelectItem,
                        {
                          value: "account_closure",
                          className: "text-white/80 text-[12px]",
                          children: "Account Closure"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        SelectItem,
                        {
                          value: "data_breach",
                          className: "text-white/80 text-[12px]",
                          children: "Data Breach Concern"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        SelectItem,
                        {
                          value: "personal_choice",
                          className: "text-white/80 text-[12px]",
                          children: "Personal Choice"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        SelectItem,
                        {
                          value: "other",
                          className: "text-white/80 text-[12px]",
                          children: "Other"
                        }
                      )
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[11px] text-komo-text-muted", children: "Additional Message" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Textarea,
                    {
                      "data-ocid": "privacy_center.deletion_message.textarea",
                      placeholder: "Any additional details…",
                      value: delMessage,
                      onChange: (e) => setDelMessage(e.target.value),
                      className: "bg-white/5 border-white/10 text-white placeholder:text-white/30 text-[13px] resize-none",
                      rows: 3
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    "data-ocid": "privacy_center.deletion.submit_button",
                    className: "w-full h-9 text-[13px] border-0",
                    style: {
                      background: "linear-gradient(135deg, #ef4444, #b91c1c)"
                    },
                    onClick: handleDeletionSubmit,
                    children: "Submit Deletion Request"
                  }
                )
              ] })
            }
          ) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Legal & Policies" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionCard, { children: LEGAL_LINKS.map((item, i, arr) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              "data-ocid": item.ocid,
              onClick: () => navigate(item.path),
              className: "w-full flex items-center gap-3 px-4 py-3.5 text-left hover:bg-white/5 transition-colors",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0",
                    style: {
                      background: "linear-gradient(135deg, rgba(47,168,255,0.18), rgba(168,85,247,0.22))"
                    },
                    children: typeof item.icon === "string" ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[14px]", children: item.icon }) : item.icon
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1 text-[13px] font-medium text-white/80", children: item.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 15, className: "text-white/25" })
              ]
            }
          ),
          i < arr.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {})
        ] }, item.path)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "mt-6 rounded-2xl px-4 py-4 text-center",
            style: {
              background: "rgba(47,168,255,0.06)",
              border: "1px solid rgba(47,168,255,0.15)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { size: 18, className: "text-komo-blue mx-auto mb-2" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[12px] text-white/60 leading-relaxed", children: [
                "Your data is protected under",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-komo-blue font-semibold", children: "IT Act 2000, India" }),
                ".",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "Last reviewed: ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/50", children: "March 2026" })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-center text-[11px] text-white/20 mt-6", children: [
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
              className: "underline hover:text-white/40",
              children: "caffeine.ai"
            }
          )
        ] })
      ]
    }
  );
}
export {
  PrivacyCenter as default
};
