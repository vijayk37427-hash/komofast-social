import { c as createLucideIcon, u as useApp, r as reactExports, j as jsxRuntimeExports, m as motion, a9 as User, I as Input, B as Button, b as ue, a as MessageCircle, G as Globe, d as Bell, Z as Zap, a8 as Volume2, X } from "./index-m-9XzHBK.js";
import { A as AlertDialog, a as AlertDialogTrigger, b as AlertDialogContent, c as AlertDialogHeader, d as AlertDialogTitle, e as AlertDialogDescription, f as AlertDialogFooter, g as AlertDialogCancel, h as AlertDialogAction } from "./alert-dialog-DLmy7JTH.js";
import { B as Badge } from "./badge-cznt1m0U.js";
import { L as Label } from "./label-DNPLIKWm.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-BnFOzO8n.js";
import { S as Switch } from "./switch-CFP8BJIt.js";
import { S as Smartphone } from "./smartphone-DdN3k3WN.js";
import { A as ArrowLeft } from "./arrow-left-MlK4V-5g.js";
import { P as Phone } from "./phone-Bat2xGsG.js";
import { S as ShieldCheck } from "./shield-check-fiUrS1Cs.js";
import { L as Lock } from "./lock-O0hEWYJj.js";
import { S as Shield } from "./shield-TSDCW4UE.js";
import { C as ChevronRight } from "./chevron-right-BnDfWRxn.js";
import { U as UserMinus } from "./user-minus-D0eTxhIp.js";
import { C as CircleHelp } from "./circle-help-CMLBf5py.js";
import { F as FileText } from "./file-text-CbcXejX-.js";
import { U as UserX } from "./user-x-i845ZXCE.js";
import { T as Trash2 } from "./trash-2-B7mQNprq.js";
import { L as LogOut } from "./log-out-DXOn_00b.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  [
    "path",
    {
      d: "M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",
      key: "1s6t7t"
    }
  ],
  ["circle", { cx: "16.5", cy: "7.5", r: ".5", fill: "currentColor", key: "w0ekpg" }]
];
const KeyRound = createLucideIcon("key-round", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z",
      key: "1pdavp"
    }
  ],
  ["path", { d: "M20.054 15.987H3.946", key: "14rxg9" }]
];
const Laptop = createLucideIcon("laptop", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
  ["line", { x1: "8", x2: "16", y1: "21", y2: "21", key: "1svkeh" }],
  ["line", { x1: "12", x2: "12", y1: "17", y2: "21", key: "vw1qmm" }]
];
const Monitor = createLucideIcon("monitor", __iconNode);
function SectionHeader({ title }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-1 mb-2 mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-bold text-white/40 uppercase tracking-widest", children: title }) });
}
function SettingRow({
  icon,
  label,
  sublabel,
  right,
  onClick,
  ocid
}) {
  const inner = /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
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
      sublabel && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-komo-text-muted mt-0.5", children: sublabel })
    ] }),
    right && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0", children: right }),
    onClick && !right && /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 15, className: "text-white/25 flex-shrink-0" })
  ] });
  if (onClick) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        "data-ocid": ocid,
        className: "w-full flex items-center gap-3 px-4 py-3.5 hover:bg-white/5 transition-colors text-left",
        onClick,
        children: inner
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-ocid": ocid, className: "flex items-center gap-3 px-4 py-3.5", children: inner });
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
function Settings() {
  const { navigate, logout } = useApp();
  const [editingProfile, setEditingProfile] = reactExports.useState(false);
  const [displayName, setDisplayName] = reactExports.useState("Komofast User");
  const [username, setUsername] = reactExports.useState("komofast_user");
  const [bio, setBio] = reactExports.useState("Content creator & digital explorer ✨");
  const [changingPassword, setChangingPassword] = reactExports.useState(false);
  const [currentPwd, setCurrentPwd] = reactExports.useState("");
  const [newPwd, setNewPwd] = reactExports.useState("");
  const [confirmPwd, setConfirmPwd] = reactExports.useState("");
  const [privateAccount, setPrivateAccount] = reactExports.useState(false);
  const [whoMessage, setWhoMessage] = reactExports.useState("friends");
  const [whoSeePosts, setWhoSeePosts] = reactExports.useState("everyone");
  const [twoFA, setTwoFA] = reactExports.useState(false);
  const [pushNotif, setPushNotif] = reactExports.useState(true);
  const [emailNotif, setEmailNotif] = reactExports.useState(false);
  const [likeNotif, setLikeNotif] = reactExports.useState(true);
  const [followerNotif, setFollowerNotif] = reactExports.useState(true);
  const [dmNotif, setDmNotif] = reactExports.useState(true);
  const [dataSaver, setDataSaver] = reactExports.useState(false);
  const [autoPlay, setAutoPlay] = reactExports.useState(true);
  const [sensitiveContent, setSensitiveContent] = reactExports.useState(false);
  const [mutedWord, setMutedWord] = reactExports.useState("");
  const [mutedWords, setMutedWords] = reactExports.useState(["spam", "scam"]);
  const MOCK_SESSIONS = [
    {
      id: 1,
      device: "Android • Chrome",
      location: "Mumbai, India",
      icon: Smartphone,
      current: true
    },
    {
      id: 2,
      device: "Windows • Chrome",
      location: "Delhi, India",
      icon: Monitor,
      current: false
    }
  ];
  const MOCK_RESTRICTED = [
    { username: "spammer_99", reason: "Spam" },
    { username: "troll_user", reason: "Harassment" }
  ];
  const [restrictedAccounts, setRestrictedAccounts] = reactExports.useState(MOCK_RESTRICTED);
  const [sessions, setSessions] = reactExports.useState(MOCK_SESSIONS);
  const handleSaveProfile = () => {
    setEditingProfile(false);
    ue.success("Profile updated! ✅");
  };
  const handleSavePassword = () => {
    if (!currentPwd || !newPwd || !confirmPwd) {
      ue.error("Please fill all password fields");
      return;
    }
    if (newPwd !== confirmPwd) {
      ue.error("Passwords don't match");
      return;
    }
    setChangingPassword(false);
    setCurrentPwd("");
    setNewPwd("");
    setConfirmPwd("");
    ue.success("Password changed successfully! 🔒");
  };
  const addMutedWord = () => {
    const word = mutedWord.trim().toLowerCase();
    if (!word || mutedWords.includes(word)) return;
    setMutedWords((prev) => [...prev, word]);
    setMutedWord("");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, x: 20 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.25 },
      className: "max-w-2xl mx-auto px-4 py-4 pb-12",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              "data-ocid": "settings.back.button",
              className: "w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors",
              onClick: () => navigate("/profile"),
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 18, className: "text-white" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-[20px] font-bold text-white leading-tight", children: "Settings" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-komo-text-muted", children: "सेटिंग्स" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Account Settings" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(SectionCard, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SettingRow,
              {
                ocid: "settings.edit_profile.button",
                icon: /* @__PURE__ */ jsxRuntimeExports.jsx(User, { size: 15, className: "text-komo-blue" }),
                label: "Edit Profile",
                sublabel: "Name, bio, username",
                onClick: () => setEditingProfile((v) => !v),
                right: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-komo-blue", children: editingProfile ? "Cancel" : "Edit" })
              }
            ),
            editingProfile && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { height: 0, opacity: 0 },
                animate: { height: "auto", opacity: 1 },
                exit: { height: 0, opacity: 0 },
                transition: { duration: 0.2 },
                className: "px-4 pb-4 space-y-3",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[11px] text-komo-text-muted", children: "Display Name" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        "data-ocid": "settings.name.input",
                        value: displayName,
                        onChange: (e) => setDisplayName(e.target.value),
                        className: "bg-white/5 border-white/10 text-white placeholder:text-white/30 h-9 text-[13px]"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[11px] text-komo-text-muted", children: "Username" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        "data-ocid": "settings.username.input",
                        value: username,
                        onChange: (e) => setUsername(e.target.value),
                        className: "bg-white/5 border-white/10 text-white placeholder:text-white/30 h-9 text-[13px]"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[11px] text-komo-text-muted", children: "Bio" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        "data-ocid": "settings.bio.input",
                        value: bio,
                        onChange: (e) => setBio(e.target.value),
                        className: "bg-white/5 border-white/10 text-white placeholder:text-white/30 h-9 text-[13px]"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      "data-ocid": "settings.save_profile.submit_button",
                      size: "sm",
                      className: "komo-gradient border-0 text-white w-full h-9 text-[13px]",
                      onClick: handleSaveProfile,
                      children: "Save Changes"
                    }
                  )
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SettingRow,
              {
                ocid: "settings.change_password.button",
                icon: /* @__PURE__ */ jsxRuntimeExports.jsx(KeyRound, { size: 15, className: "text-komo-purple" }),
                label: "Change Password",
                sublabel: "Update your login password",
                onClick: () => setChangingPassword((v) => !v),
                right: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-komo-blue", children: changingPassword ? "Cancel" : "Change" })
              }
            ),
            changingPassword && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { height: 0, opacity: 0 },
                animate: { height: "auto", opacity: 1 },
                transition: { duration: 0.2 },
                className: "px-4 pb-4 space-y-3",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[11px] text-komo-text-muted", children: "Current Password" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        "data-ocid": "settings.current_password.input",
                        type: "password",
                        value: currentPwd,
                        onChange: (e) => setCurrentPwd(e.target.value),
                        className: "bg-white/5 border-white/10 text-white h-9 text-[13px]"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[11px] text-komo-text-muted", children: "New Password" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        "data-ocid": "settings.new_password.input",
                        type: "password",
                        value: newPwd,
                        onChange: (e) => setNewPwd(e.target.value),
                        className: "bg-white/5 border-white/10 text-white h-9 text-[13px]"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[11px] text-komo-text-muted", children: "Confirm New Password" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        "data-ocid": "settings.confirm_password.input",
                        type: "password",
                        value: confirmPwd,
                        onChange: (e) => setConfirmPwd(e.target.value),
                        className: "bg-white/5 border-white/10 text-white h-9 text-[13px]"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      "data-ocid": "settings.save_password.submit_button",
                      size: "sm",
                      className: "komo-gradient border-0 text-white w-full h-9 text-[13px]",
                      onClick: handleSavePassword,
                      children: "Update Password"
                    }
                  )
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SettingRow,
            {
              ocid: "settings.mobile.button",
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 15, className: "text-green-400" }),
              label: "Mobile / Email",
              sublabel: "+91 ••••••7890 · user@komo.app",
              right: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "sm",
                  variant: "outline",
                  className: "border-white/15 text-white/60 h-7 text-[11px] px-3",
                  onClick: () => ue.info("Mobile/Email update coming soon!"),
                  children: "Update"
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SettingRow,
            {
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { size: 15, className: "text-komo-blue" }),
              label: "Verified Account",
              sublabel: "Your account is verified",
              right: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Badge,
                {
                  className: "text-[10px] font-bold",
                  style: {
                    background: "rgba(47,168,255,0.15)",
                    color: "#2fa8ff",
                    border: "1px solid rgba(47,168,255,0.3)"
                  },
                  children: "✓ Verified"
                }
              )
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Privacy & Security" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(SectionCard, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SettingRow,
            {
              ocid: "settings.private_account.switch",
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { size: 15, className: "text-komo-purple" }),
              label: "Private Account",
              sublabel: "Only approved followers can see your posts",
              right: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Switch,
                {
                  checked: privateAccount,
                  onCheckedChange: (v) => {
                    setPrivateAccount(v);
                    ue.success(
                      v ? "Account set to private" : "Account set to public"
                    );
                  }
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 px-4 py-3.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0",
                style: {
                  background: "linear-gradient(135deg, rgba(47,168,255,0.18), rgba(168,85,247,0.22))"
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { size: 15, className: "text-komo-blue" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 min-w-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-medium text-white/80", children: "Who can message me" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Select,
              {
                value: whoMessage,
                onValueChange: (v) => {
                  setWhoMessage(v);
                  ue.success("Preference saved");
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    SelectTrigger,
                    {
                      "data-ocid": "settings.who_message.select",
                      className: "w-32 h-8 bg-white/5 border-white/10 text-white text-[12px]",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { className: "bg-[#1A1F26] border-white/10", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      SelectItem,
                      {
                        value: "everyone",
                        className: "text-white/80 text-[12px]",
                        children: "Everyone"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "friends", className: "text-white/80 text-[12px]", children: "Friends only" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "nobody", className: "text-white/80 text-[12px]", children: "Nobody" })
                  ] })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 px-4 py-3.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0",
                style: {
                  background: "linear-gradient(135deg, rgba(47,168,255,0.18), rgba(168,85,247,0.22))"
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { size: 15, className: "text-green-400" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 min-w-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-medium text-white/80", children: "Who can see my posts" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Select,
              {
                value: whoSeePosts,
                onValueChange: (v) => {
                  setWhoSeePosts(v);
                  ue.success("Preference saved");
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    SelectTrigger,
                    {
                      "data-ocid": "settings.who_see_posts.select",
                      className: "w-32 h-8 bg-white/5 border-white/10 text-white text-[12px]",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { className: "bg-[#1A1F26] border-white/10", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      SelectItem,
                      {
                        value: "everyone",
                        className: "text-white/80 text-[12px]",
                        children: "Everyone"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      SelectItem,
                      {
                        value: "followers",
                        className: "text-white/80 text-[12px]",
                        children: "Followers"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "onlyme", className: "text-white/80 text-[12px]", children: "Only me" })
                  ] })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SettingRow,
            {
              ocid: "settings.two_fa.switch",
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { size: 15, className: "text-yellow-400" }),
              label: "Two-Factor Authentication",
              sublabel: "Extra security for your account",
              right: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Switch,
                {
                  checked: twoFA,
                  onCheckedChange: (v) => {
                    setTwoFA(v);
                    ue.success(v ? "2FA enabled" : "2FA disabled");
                  }
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-3.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0",
                  style: {
                    background: "linear-gradient(135deg, rgba(47,168,255,0.18), rgba(168,85,247,0.22))"
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Laptop, { size: 15, className: "text-komo-purple" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-medium text-white/80", children: "Active Sessions" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: sessions.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                "data-ocid": `settings.session.item.${s.id}`,
                className: "flex items-center gap-3 p-3 rounded-xl",
                style: {
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { size: 16, className: "text-komo-text-muted" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[12px] font-medium text-white/75", children: [
                      s.device,
                      s.current && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2 text-[10px] text-green-400 font-semibold", children: "● Current" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-komo-text-muted", children: s.location })
                  ] }),
                  !s.current && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      "data-ocid": `settings.revoke.button.${s.id}`,
                      size: "sm",
                      variant: "outline",
                      className: "border-red-800/50 text-red-400 hover:bg-red-900/20 h-7 text-[11px] px-3",
                      onClick: () => {
                        setSessions((prev) => prev.filter((x) => x.id !== s.id));
                        ue.success("Session revoked");
                      },
                      children: "Revoke"
                    }
                  )
                ]
              },
              s.id
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              "data-ocid": "settings.creator_privacy.link",
              onClick: () => navigate("/creator-privacy"),
              className: "w-full flex items-center gap-3 px-4 py-3.5 text-left hover:bg-white/5 transition-colors",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0",
                    style: {
                      background: "linear-gradient(135deg, rgba(47,168,255,0.18), rgba(168,85,247,0.22))"
                    },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[14px]", children: "2728" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[13px] font-medium text-white/80", children: "Creator Privacy" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-white/40 mt-0.5", children: "Public visibility for your creator profile" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 15, className: "text-white/25" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Notifications" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionCard, { children: [
          {
            id: "push",
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { size: 15, className: "text-komo-blue" }),
            label: "Push Notifications",
            sublabel: "App alerts on your device",
            value: pushNotif,
            set: setPushNotif,
            ocid: "settings.push_notif.switch"
          },
          {
            id: "email",
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { size: 15, className: "text-yellow-400" }),
            label: "Email Notifications",
            sublabel: "Summaries to your inbox",
            value: emailNotif,
            set: setEmailNotif,
            ocid: "settings.email_notif.switch"
          },
          {
            id: "like",
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[14px]", children: "❤️" }),
            label: "Likes & Comments",
            sublabel: "When someone reacts to your posts",
            value: likeNotif,
            set: setLikeNotif,
            ocid: "settings.like_notif.switch"
          },
          {
            id: "follower",
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[14px]", children: "👤" }),
            label: "New Followers",
            sublabel: "When someone follows you",
            value: followerNotif,
            set: setFollowerNotif,
            ocid: "settings.follower_notif.switch"
          },
          {
            id: "dm",
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { size: 15, className: "text-komo-purple" }),
            label: "Direct Messages",
            sublabel: "When you receive a new message",
            value: dmNotif,
            set: setDmNotif,
            ocid: "settings.dm_notif.switch"
          }
        ].map((item, i, arr) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SettingRow,
            {
              ocid: item.ocid,
              icon: item.icon,
              label: item.label,
              sublabel: item.sublabel,
              right: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Switch,
                {
                  checked: item.value,
                  onCheckedChange: (v) => {
                    item.set(v);
                    ue.success(
                      v ? `${item.label} enabled` : `${item.label} disabled`
                    );
                  }
                }
              )
            }
          ),
          i < arr.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {})
        ] }, item.id)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "App Preferences" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(SectionCard, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SettingRow,
            {
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Monitor, { size: 15, className: "text-komo-blue" }),
              label: "Dark Mode",
              sublabel: "Always enabled for best experience",
              right: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Switch,
                {
                  checked: true,
                  disabled: true,
                  className: "opacity-60",
                  onCheckedChange: () => ue.info("Dark mode is always on! 🌙")
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SettingRow,
            {
              ocid: "settings.language.link",
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { size: 15, className: "text-green-400" }),
              label: "Language / भाषा",
              sublabel: "Change app language",
              onClick: () => navigate("/language")
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SettingRow,
            {
              ocid: "settings.country.link",
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[14px]", children: "📍" }),
              label: "Country / देश",
              sublabel: "Detect your country automatically",
              onClick: () => navigate("/country-detect")
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SettingRow,
            {
              ocid: "settings.data_saver.switch",
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Volume2, { size: 15, className: "text-komo-purple" }),
              label: "Data Saver",
              sublabel: "Reduce video quality to save data",
              right: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Switch,
                {
                  checked: dataSaver,
                  onCheckedChange: (v) => {
                    setDataSaver(v);
                    ue.success(v ? "Data Saver on" : "Data Saver off");
                  }
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SettingRow,
            {
              ocid: "settings.autoplay.switch",
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[14px]", children: "▶️" }),
              label: "Auto-play Reels",
              sublabel: "Reels play automatically while scrolling",
              right: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Switch,
                {
                  checked: autoPlay,
                  onCheckedChange: (v) => {
                    setAutoPlay(v);
                    ue.success(v ? "Auto-play enabled" : "Auto-play disabled");
                  }
                }
              )
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Content & Feeds" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(SectionCard, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SettingRow,
            {
              ocid: "settings.sensitive_content.switch",
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { size: 15, className: "text-orange-400" }),
              label: "Show Sensitive Content",
              sublabel: "Content that may not be suitable for all audiences",
              right: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Switch,
                {
                  checked: sensitiveContent,
                  onCheckedChange: (v) => {
                    setSensitiveContent(v);
                    ue.success(
                      v ? "Sensitive content shown" : "Sensitive content hidden"
                    );
                  }
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-3.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0",
                  style: {
                    background: "linear-gradient(135deg, rgba(47,168,255,0.18), rgba(168,85,247,0.22))"
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[14px]", children: "🔇" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-medium text-white/80", children: "Muted Words" })
            ] }),
            mutedWords.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 mb-3", children: mutedWords.map((w) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "span",
              {
                "data-ocid": "settings.muted_words.panel",
                className: "flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-medium text-white/70",
                style: {
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.1)"
                },
                children: [
                  w,
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => setMutedWords((prev) => prev.filter((x) => x !== w)),
                      className: "ml-0.5 text-white/40 hover:text-red-400 transition-colors",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 10 })
                    }
                  )
                ]
              },
              w
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  "data-ocid": "settings.muted_word.input",
                  placeholder: "Add a word to mute…",
                  value: mutedWord,
                  onChange: (e) => setMutedWord(e.target.value),
                  onKeyDown: (e) => e.key === "Enter" && addMutedWord(),
                  className: "flex-1 bg-white/5 border-white/10 text-white placeholder:text-white/30 h-9 text-[13px]"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  "data-ocid": "settings.add_muted_word.button",
                  size: "sm",
                  className: "komo-gradient border-0 text-white h-9 px-4 text-[12px]",
                  onClick: addMutedWord,
                  children: "Add"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-3.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0",
                  style: {
                    background: "linear-gradient(135deg, rgba(47,168,255,0.18), rgba(168,85,247,0.22))"
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(UserMinus, { size: 15, className: "text-orange-400" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-medium text-white/80", children: "Restricted Accounts" })
            ] }),
            restrictedAccounts.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                "data-ocid": "settings.restricted.empty_state",
                className: "text-[12px] text-komo-text-muted py-1",
                children: "No restricted accounts"
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: restrictedAccounts.map((acc, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                "data-ocid": `settings.restricted.item.${i + 1}`,
                className: "flex items-center gap-3 p-3 rounded-xl",
                style: {
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold text-white",
                      style: {
                        background: "linear-gradient(135deg, rgba(168,85,247,0.4), rgba(47,168,255,0.4))"
                      },
                      children: acc.username[0].toUpperCase()
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[12px] font-medium text-white/75", children: [
                      "@",
                      acc.username
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-komo-text-muted", children: acc.reason })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      "data-ocid": `settings.unrestrict.button.${i + 1}`,
                      size: "sm",
                      variant: "outline",
                      className: "border-green-800/50 text-green-400 hover:bg-green-900/20 h-7 text-[11px] px-3",
                      onClick: () => {
                        setRestrictedAccounts(
                          (prev) => prev.filter((x) => x.username !== acc.username)
                        );
                        ue.success(`@${acc.username} unrestricted`);
                      },
                      children: "Unrestrict"
                    }
                  )
                ]
              },
              acc.username
            )) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Support & Legal" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionCard, { children: [
          {
            label: "Privacy Center / गोपनीयता केंद्र",
            path: "/privacy-center",
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { size: 15, className: "text-komo-blue" }),
            ocid: "settings.privacy_center.link"
          },
          {
            label: "Help Center / सहायता केंद्र",
            path: "/help",
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleHelp, { size: 15, className: "text-komo-blue" }),
            ocid: "settings.help.link"
          },
          {
            label: "Privacy Policy",
            path: "/privacy-policy",
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[14px]", children: "🔒" }),
            ocid: "settings.privacy.link"
          },
          {
            label: "Terms & Conditions",
            path: "/terms",
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { size: 15, className: "text-komo-purple" }),
            ocid: "settings.terms.link"
          },
          {
            label: "Data Protection (IT Act)",
            path: "/data-protection",
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { size: 15, className: "text-green-400" }),
            ocid: "settings.dataprotection.link"
          },
          {
            label: "Community Guidelines",
            path: "/community-guidelines",
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[14px]", children: "📋" }),
            ocid: "settings.community.link"
          }
        ].map((item, i, arr) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
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
                    children: item.icon
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1 text-[13px] font-medium text-white/80", children: item.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 15, className: "text-white/25" })
              ]
            }
          ),
          i < arr.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {})
        ] }, item.path)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Danger Zone" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(SectionCard, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-4 flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0",
                style: { background: "rgba(251,146,60,0.12)" },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(UserMinus, { size: 15, className: "text-orange-400" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-medium text-white/80", children: "Deactivate Account" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-komo-text-muted", children: "Temporarily disable your account" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                "data-ocid": "settings.deactivate.button",
                size: "sm",
                variant: "outline",
                className: "border-orange-700/50 text-orange-400 hover:bg-orange-900/20 h-8 text-[12px] px-4",
                onClick: () => ue.warning(
                  "Account deactivation coming soon. Contact support for help."
                ),
                children: "Deactivate"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-4 flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0",
                style: { background: "rgba(239,68,68,0.12)" },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(UserX, { size: 15, className: "text-red-400" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-medium text-red-400", children: "Delete Account" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-komo-text-muted", children: "Permanently delete all data" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialog, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  "data-ocid": "settings.delete_account.open_modal_button",
                  size: "sm",
                  className: "bg-red-600 hover:bg-red-700 text-white h-8 text-[12px] px-4 border-0",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 13, className: "mr-1" }),
                    " Delete"
                  ]
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                AlertDialogContent,
                {
                  "data-ocid": "settings.delete_account.dialog",
                  className: "bg-[#1A1F26] border-red-900/40",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogHeader, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTitle, { className: "text-white", children: "Delete Account?" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogDescription, { className: "text-komo-text-muted", children: [
                        "This will permanently delete your Komofast account, all posts, reels, earnings, and data. This action",
                        " ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-400 font-semibold", children: "cannot" }),
                        " be undone."
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogFooter, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        AlertDialogCancel,
                        {
                          "data-ocid": "settings.delete_account.cancel_button",
                          className: "bg-white/5 border-white/10 text-white hover:bg-white/10",
                          children: "Cancel"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        AlertDialogAction,
                        {
                          "data-ocid": "settings.delete_account.confirm_button",
                          className: "bg-red-600 hover:bg-red-700 text-white",
                          onClick: () => {
                            ue.error(
                              "Account deletion request submitted. You will receive an email."
                            );
                          },
                          children: "Yes, Delete Everything"
                        }
                      )
                    ] })
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Divider, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-4 flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0",
                style: { background: "rgba(168,85,247,0.12)" },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { size: 15, className: "text-komo-purple" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-medium text-white/80", children: "Log Out" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-komo-text-muted", children: "Sign out of your account" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                "data-ocid": "settings.logout.button",
                size: "sm",
                variant: "outline",
                className: "border-komo-purple/50 text-komo-purple hover:bg-komo-purple/10 h-8 text-[12px] px-4",
                onClick: () => {
                  logout();
                  ue.success("Logged out successfully");
                },
                children: "Log Out"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-center text-[11px] text-white/20 mt-8", children: [
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
  Settings as default
};
