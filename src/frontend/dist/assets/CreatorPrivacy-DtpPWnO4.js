import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, v as cn, u as useApp, m as motion, G as Globe, b as ue, ar as Eye, n as Sparkles, B as Button } from "./index-BlWpIyR8.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-Bt_vSzJy.js";
import { P as Primitive } from "./index-D4ku5XXv.js";
import { S as Switch } from "./switch-Cx12Axum.js";
import { A as ArrowLeft } from "./arrow-left-C_jsN0fF.js";
import { U as Users } from "./users-Xo-nsB-b.js";
import { L as Lock } from "./lock-D6SFrzne.js";
import { S as Shield } from "./shield-BtA-oc8E.js";
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
      d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
      key: "ct8e1f"
    }
  ],
  ["path", { d: "M14.084 14.158a3 3 0 0 1-4.242-4.242", key: "151rxh" }],
  [
    "path",
    {
      d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
      key: "13bj9a"
    }
  ],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
];
const EyeOff = createLucideIcon("eye-off", __iconNode);
var NAME = "Separator";
var DEFAULT_ORIENTATION = "horizontal";
var ORIENTATIONS = ["horizontal", "vertical"];
var Separator$1 = reactExports.forwardRef((props, forwardedRef) => {
  const { decorative, orientation: orientationProp = DEFAULT_ORIENTATION, ...domProps } = props;
  const orientation = isValidOrientation(orientationProp) ? orientationProp : DEFAULT_ORIENTATION;
  const ariaOrientation = orientation === "vertical" ? orientation : void 0;
  const semanticProps = decorative ? { role: "none" } : { "aria-orientation": ariaOrientation, role: "separator" };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Primitive.div,
    {
      "data-orientation": orientation,
      ...semanticProps,
      ...domProps,
      ref: forwardedRef
    }
  );
});
Separator$1.displayName = NAME;
function isValidOrientation(orientation) {
  return ORIENTATIONS.includes(orientation);
}
var Root = Separator$1;
function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Root,
    {
      "data-slot": "separator",
      decorative,
      orientation,
      className: cn(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className
      ),
      ...props
    }
  );
}
function SectionHeader({
  icon,
  title,
  subtitle
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 px-4 pt-6 pb-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0",
        style: {
          background: "linear-gradient(135deg, rgba(47,168,255,0.22), rgba(168,85,247,0.28))"
        },
        children: icon
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-semibold text-white/90", children: title }),
      subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-white/40 mt-0.5", children: subtitle })
    ] })
  ] });
}
function Card({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "mx-4 rounded-2xl overflow-hidden",
      style: {
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.07)"
      },
      children
    }
  );
}
function ToggleRow({
  ocid,
  icon,
  label,
  sublabel,
  checked,
  onChange
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 px-4 py-3.5", children: [
    icon && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0",
        style: {
          background: "linear-gradient(135deg, rgba(47,168,255,0.15), rgba(168,85,247,0.2))"
        },
        children: icon
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-medium text-white/85", children: label }),
      sublabel && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-white/40 mt-0.5", children: sublabel })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { "data-ocid": ocid, checked, onCheckedChange: onChange })
  ] });
}
function SelectRow({
  ocid,
  icon,
  label,
  value,
  options,
  onChange
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 px-4 py-3.5", children: [
    icon && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0",
        style: {
          background: "linear-gradient(135deg, rgba(47,168,255,0.15), rgba(168,85,247,0.2))"
        },
        children: icon
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 min-w-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-medium text-white/85", children: label }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value, onValueChange: onChange, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SelectTrigger,
        {
          "data-ocid": ocid,
          className: "w-36 h-8 bg-white/5 border-white/10 text-white text-[12px] rounded-xl",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { className: "bg-[#1A1F26] border-white/10", children: options.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        SelectItem,
        {
          value: o.value,
          className: "text-white/80 text-[12px]",
          children: o.label
        },
        o.value
      )) })
    ] })
  ] });
}
const AUDIENCE_OPTIONS = [
  { value: "everyone", label: "Everyone" },
  { value: "followers", label: "Followers only" },
  { value: "only_me", label: "Only Me" }
];
const STORIES_OPTIONS = [
  { value: "everyone", label: "Everyone" },
  { value: "close_friends", label: "Close Friends" },
  { value: "only_me", label: "Only Me" }
];
const INTERACTION_OPTIONS = [
  { value: "everyone", label: "Everyone" },
  { value: "followers", label: "Followers" },
  { value: "nobody", label: "No one" }
];
function CreatorPrivacy() {
  const { navigate } = useApp();
  const [publicProfile, setPublicProfile] = reactExports.useState(true);
  const [showFollowers, setShowFollowers] = reactExports.useState(true);
  const [showFollowing, setShowFollowing] = reactExports.useState(true);
  const [whoSeesPosts, setWhoSeesPosts] = reactExports.useState("everyone");
  const [whoSeesReels, setWhoSeesReels] = reactExports.useState("everyone");
  const [whoSeesStories, setWhoSeesStories] = reactExports.useState("everyone");
  const [showEarning, setShowEarning] = reactExports.useState(false);
  const [showHonor, setShowHonor] = reactExports.useState(true);
  const [showViews, setShowViews] = reactExports.useState(true);
  const [whoComments, setWhoComments] = reactExports.useState("everyone");
  const [whoMessages, setWhoMessages] = reactExports.useState("followers");
  const [whoTags, setWhoTags] = reactExports.useState("followers");
  const [showInSearch, setShowInSearch] = reactExports.useState(true);
  const [allowRecommend, setAllowRecommend] = reactExports.useState(true);
  const [showSuggested, setShowSuggested] = reactExports.useState(true);
  const [saving, setSaving] = reactExports.useState(false);
  const handleSave = async () => {
    setSaving(true);
    await new Promise((r) => setTimeout(r, 900));
    setSaving(false);
    ue.success("Creator privacy settings saved!");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "min-h-screen",
      style: {
        background: "linear-gradient(180deg, #0B0F14 0%, #11161D 100%)"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "sticky top-0 z-20 flex items-center gap-3 px-4 py-4",
            style: {
              background: "rgba(11,15,20,0.92)",
              backdropFilter: "blur(16px)",
              borderBottom: "1px solid rgba(255,255,255,0.06)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  "data-ocid": "creator_privacy.back.button",
                  onClick: () => navigate("/settings"),
                  className: "w-9 h-9 rounded-xl flex items-center justify-center hover:bg-white/8 transition-colors",
                  style: { background: "rgba(255,255,255,0.05)" },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 18, className: "text-white/80" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-[16px] font-bold text-white", children: "Creator Privacy" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-white/40", children: "Control your public visibility" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "px-3 py-1.5 rounded-full text-[11px] font-semibold",
                  style: {
                    background: "linear-gradient(90deg, #2FA8FF 0%, #A855F7 100%)",
                    color: "#fff"
                  },
                  children: "Creator"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pb-32", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 14 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.3, delay: 0.05 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  SectionHeader,
                  {
                    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { size: 15, className: "text-blue-400" }),
                    title: "Profile Visibility",
                    subtitle: "Who can discover and view your profile"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    ToggleRow,
                    {
                      ocid: "creator_privacy.public_profile.switch",
                      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { size: 14, className: "text-blue-400" }),
                      label: "Public Profile",
                      sublabel: "Anyone can view your profile and content",
                      checked: publicProfile,
                      onChange: (v) => {
                        setPublicProfile(v);
                        ue.success(
                          v ? "Profile set to public" : "Profile set to private"
                        );
                      }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "bg-white/5 mx-4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    ToggleRow,
                    {
                      ocid: "creator_privacy.show_followers.switch",
                      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { size: 14, className: "text-purple-400" }),
                      label: "Show Follower Count",
                      sublabel: "Display follower number on your profile",
                      checked: showFollowers,
                      onChange: setShowFollowers
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "bg-white/5 mx-4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    ToggleRow,
                    {
                      ocid: "creator_privacy.show_following.switch",
                      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { size: 14, className: "text-purple-400" }),
                      label: "Show Following Count",
                      sublabel: "Display following number on your profile",
                      checked: showFollowing,
                      onChange: setShowFollowing
                    }
                  )
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 14 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.3, delay: 0.1 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  SectionHeader,
                  {
                    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { size: 15, className: "text-purple-400" }),
                    title: "Content Privacy",
                    subtitle: "Control who can see your posts, Reels and Stories"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    SelectRow,
                    {
                      ocid: "creator_privacy.who_sees_posts.select",
                      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { size: 14, className: "text-blue-400" }),
                      label: "Who can see my Posts",
                      value: whoSeesPosts,
                      options: AUDIENCE_OPTIONS,
                      onChange: (v) => {
                        setWhoSeesPosts(v);
                        ue.success("Posts visibility updated");
                      }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "bg-white/5 mx-4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    SelectRow,
                    {
                      ocid: "creator_privacy.who_sees_reels.select",
                      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { size: 14, className: "text-purple-400" }),
                      label: "Who can see my Reels",
                      value: whoSeesReels,
                      options: AUDIENCE_OPTIONS,
                      onChange: (v) => {
                        setWhoSeesReels(v);
                        ue.success("Reels visibility updated");
                      }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "bg-white/5 mx-4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    SelectRow,
                    {
                      ocid: "creator_privacy.who_sees_stories.select",
                      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { size: 14, className: "text-pink-400" }),
                      label: "Who can see my Stories",
                      value: whoSeesStories,
                      options: STORIES_OPTIONS,
                      onChange: (v) => {
                        setWhoSeesStories(v);
                        ue.success("Stories visibility updated");
                      }
                    }
                  )
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 14 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.3, delay: 0.15 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  SectionHeader,
                  {
                    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 15, className: "text-yellow-400" }),
                    title: "Creator Stats Privacy",
                    subtitle: "Choose what stats are visible to your audience"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    ToggleRow,
                    {
                      ocid: "creator_privacy.show_earning.switch",
                      icon: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[14px]", children: "₹" }),
                      label: "Show Earning Stats Publicly",
                      sublabel: "Display your earnings on your public profile",
                      checked: showEarning,
                      onChange: setShowEarning
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "bg-white/5 mx-4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    ToggleRow,
                    {
                      ocid: "creator_privacy.show_honor.switch",
                      icon: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[14px]", children: "🏅" }),
                      label: "Show Honor Points & Tier",
                      sublabel: "Display your creator tier badge publicly",
                      checked: showHonor,
                      onChange: setShowHonor
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "bg-white/5 mx-4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    ToggleRow,
                    {
                      ocid: "creator_privacy.show_views.switch",
                      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { size: 14, className: "text-blue-400" }),
                      label: "Show Total Views Publicly",
                      sublabel: "Show your total view count on your profile",
                      checked: showViews,
                      onChange: setShowViews
                    }
                  )
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 14 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.3, delay: 0.2 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  SectionHeader,
                  {
                    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { size: 15, className: "text-blue-400" }),
                    title: "Interaction Controls",
                    subtitle: "Manage how your audience interacts with you"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    SelectRow,
                    {
                      ocid: "creator_privacy.who_comments.select",
                      icon: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[14px]", children: "💬" }),
                      label: "Who can comment",
                      value: whoComments,
                      options: INTERACTION_OPTIONS,
                      onChange: (v) => {
                        setWhoComments(v);
                        ue.success("Comment setting updated");
                      }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "bg-white/5 mx-4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    SelectRow,
                    {
                      ocid: "creator_privacy.who_messages.select",
                      icon: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[14px]", children: "📩" }),
                      label: "Who can send messages",
                      value: whoMessages,
                      options: INTERACTION_OPTIONS,
                      onChange: (v) => {
                        setWhoMessages(v);
                        ue.success("Message setting updated");
                      }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "bg-white/5 mx-4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    SelectRow,
                    {
                      ocid: "creator_privacy.who_tags.select",
                      icon: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[14px]", children: "🏷️" }),
                      label: "Who can tag me",
                      value: whoTags,
                      options: INTERACTION_OPTIONS,
                      onChange: (v) => {
                        setWhoTags(v);
                        ue.success("Tag setting updated");
                      }
                    }
                  )
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 14 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.3, delay: 0.25 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  SectionHeader,
                  {
                    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { size: 15, className: "text-green-400" }),
                    title: "Discovery Settings",
                    subtitle: "Control how people find your profile"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    ToggleRow,
                    {
                      ocid: "creator_privacy.show_in_search.switch",
                      icon: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[14px]", children: "🔍" }),
                      label: "Show in Search Results",
                      sublabel: "Allow others to find you by searching your name",
                      checked: showInSearch,
                      onChange: setShowInSearch
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "bg-white/5 mx-4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    ToggleRow,
                    {
                      ocid: "creator_privacy.allow_recommend.switch",
                      icon: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[14px]", children: "📢" }),
                      label: "Allow Recommendations to Others",
                      sublabel: "Let KomoFast recommend your profile to new users",
                      checked: allowRecommend,
                      onChange: setAllowRecommend
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "bg-white/5 mx-4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    ToggleRow,
                    {
                      ocid: "creator_privacy.show_suggested.switch",
                      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 14, className: "text-yellow-400" }),
                      label: 'Show in "Suggested Creators"',
                      sublabel: "Appear in the suggested creators section",
                      checked: showSuggested,
                      onChange: setShowSuggested
                    }
                  )
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 14 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.3, delay: 0.3 },
              className: "px-4 pt-8",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    "data-ocid": "creator_privacy.save.button",
                    onClick: handleSave,
                    disabled: saving,
                    className: "w-full h-12 text-[14px] font-bold rounded-2xl text-white border-0",
                    style: {
                      background: saving ? "rgba(255,255,255,0.08)" : "linear-gradient(90deg, #2FA8FF 0%, #A855F7 100%)"
                    },
                    children: saving ? "Saving..." : "Save Settings"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-[11px] text-white/30 mt-3", children: "Changes apply to your public creator profile immediately after saving." })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-center text-[11px] text-white/20 mt-8 px-4", children: [
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
                className: "underline hover:text-white/40 transition-colors",
                children: "caffeine.ai"
              }
            )
          ] })
        ] })
      ]
    }
  );
}
export {
  CreatorPrivacy as default
};
