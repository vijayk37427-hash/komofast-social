import { j as jsxRuntimeExports, v as cn, u as useApp, r as reactExports, m as motion, U as UserPlus, B as Button, g as UserCheck, a as MessageCircle, b as ue } from "./index-m-9XzHBK.js";
import { B as Badge } from "./badge-cznt1m0U.js";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-DaPSxr7p.js";
import { U as Users } from "./users-D7GbLS6T.js";
import { U as UserMinus } from "./user-minus-D0eTxhIp.js";
function Card({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-slot": "card",
      className: cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className
      ),
      ...props
    }
  );
}
function CardContent({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-slot": "card-content",
      className: cn("px-6", className),
      ...props
    }
  );
}
const AVATAR_COLORS = [
  "from-blue-500 to-purple-600",
  "from-pink-500 to-rose-600",
  "from-emerald-500 to-teal-600",
  "from-amber-500 to-orange-600",
  "from-cyan-500 to-blue-600",
  "from-violet-500 to-purple-600",
  "from-green-500 to-emerald-600",
  "from-red-500 to-pink-600",
  "from-indigo-500 to-blue-600",
  "from-yellow-500 to-amber-600"
];
const INITIAL_REQUESTS = [
  { id: "r1", name: "Rahul Sharma", mutual: 5, initials: "RS" },
  { id: "r2", name: "Priya Patel", mutual: 3, initials: "PP" },
  { id: "r3", name: "Amit Kumar", mutual: 8, initials: "AK" }
];
const INITIAL_FRIENDS = [
  { id: "f1", name: "Neha Singh", online: true, initials: "NS" },
  { id: "f2", name: "Ravi Verma", online: false, initials: "RV" },
  { id: "f3", name: "Sunita Devi", online: true, initials: "SD" },
  { id: "f4", name: "Arun Yadav", online: false, initials: "AY" },
  { id: "f5", name: "Meena Gupta", online: true, initials: "MG" }
];
const SUGGESTIONS = [
  { id: "s1", name: "Vikram Joshi", mutual: 12, initials: "VJ" },
  { id: "s2", name: "Pooja Mishra", mutual: 4, initials: "PM" },
  { id: "s3", name: "Suresh Tiwari", mutual: 7, initials: "ST" },
  { id: "s4", name: "Anita Rao", mutual: 2, initials: "AR" }
];
function getColor(idx) {
  return AVATAR_COLORS[idx % AVATAR_COLORS.length];
}
function FriendsPage() {
  const { navigate } = useApp();
  const [requests, setRequests] = reactExports.useState(INITIAL_REQUESTS);
  const [friends, setFriends] = reactExports.useState(INITIAL_FRIENDS);
  const [suggestions, _setSuggestions] = reactExports.useState(SUGGESTIONS);
  const [addedSuggestions, setAddedSuggestions] = reactExports.useState(
    /* @__PURE__ */ new Set()
  );
  const acceptRequest = (id, name) => {
    const req = requests.find((r) => r.id === id);
    if (req) {
      setFriends((prev) => [
        ...prev,
        { id: req.id, name: req.name, online: true, initials: req.initials }
      ]);
      setRequests((prev) => prev.filter((r) => r.id !== id));
      ue.success(`${name} की friend request accept हो गई! ✓`);
    }
  };
  const declineRequest = (id, _name) => {
    setRequests((prev) => prev.filter((r) => r.id !== id));
    ue("Request decline हो गई");
  };
  const removeFriend = (id, name) => {
    setFriends((prev) => prev.filter((f) => f.id !== id));
    ue(`${name} को friend list से हटा दिया गया`);
  };
  const addSuggestion = (id, name) => {
    setAddedSuggestions((prev) => /* @__PURE__ */ new Set([...prev, id]));
    ue.success(`${name} को friend request भेजी गई! 🤝`);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen pb-24 pt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-lg mx-auto px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: -12 },
        animate: { opacity: 1, y: 0 },
        className: "mb-5",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-2xl bg-gradient-to-br from-komo-blue to-komo-purple flex items-center justify-center shadow-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { size: 20, className: "text-white" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-bold text-foreground", children: "Friends" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
              friends.length,
              " friends · ",
              requests.length,
              " requests"
            ] })
          ] }),
          requests.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "ml-auto bg-red-500 text-white border-0 px-2 py-0.5 text-xs", children: requests.length })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "requests", className: "w-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "w-full mb-4 bg-card/60 backdrop-blur-sm border border-border rounded-2xl p-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          TabsTrigger,
          {
            value: "requests",
            "data-ocid": "friends.requests.tab",
            className: "flex-1 rounded-xl text-sm font-medium data-[state=active]:bg-gradient-to-r data-[state=active]:from-komo-blue data-[state=active]:to-komo-purple data-[state=active]:text-white",
            children: [
              "Requests",
              requests.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1.5 bg-red-500 text-white text-[10px] rounded-full w-4 h-4 inline-flex items-center justify-center", children: requests.length })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TabsTrigger,
          {
            value: "friends",
            "data-ocid": "friends.friends.tab",
            className: "flex-1 rounded-xl text-sm font-medium data-[state=active]:bg-gradient-to-r data-[state=active]:from-komo-blue data-[state=active]:to-komo-purple data-[state=active]:text-white",
            children: "Friends"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TabsTrigger,
          {
            value: "suggestions",
            "data-ocid": "friends.suggestions.tab",
            className: "flex-1 rounded-xl text-sm font-medium data-[state=active]:bg-gradient-to-r data-[state=active]:from-komo-blue data-[state=active]:to-komo-purple data-[state=active]:text-white",
            children: "Suggestions"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "requests", className: "space-y-3", children: requests.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          "data-ocid": "friends.requests.empty_state",
          className: "text-center py-16 text-muted-foreground",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(UserPlus, { size: 40, className: "mx-auto mb-3 opacity-30" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: "कोई pending request नहीं है" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mt-1", children: "नए लोगों से connect करें!" })
          ]
        }
      ) : requests.map((req, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, x: -20 },
          animate: { opacity: 1, x: 0 },
          exit: { opacity: 0, x: 20 },
          transition: { delay: idx * 0.07 },
          "data-ocid": `friends.requests.item.${idx + 1}`,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border border-border/50 bg-card/80 backdrop-blur-sm shadow-sm rounded-2xl overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: `w-12 h-12 rounded-full bg-gradient-to-br ${getColor(idx)} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`,
                children: req.initials
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground text-sm", children: req.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                req.mutual,
                " mutual friends"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  size: "sm",
                  "data-ocid": `friends.requests.accept.button.${idx + 1}`,
                  onClick: () => acceptRequest(req.id, req.name),
                  className: "h-8 px-3 text-xs bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white border-0 rounded-xl",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(UserCheck, { size: 13, className: "mr-1" }),
                    "Accept"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "sm",
                  variant: "outline",
                  "data-ocid": `friends.requests.decline.button.${idx + 1}`,
                  onClick: () => declineRequest(req.id, req.name),
                  className: "h-8 px-3 text-xs border-red-400/60 text-red-400 hover:bg-red-500/10 rounded-xl",
                  children: "Decline"
                }
              )
            ] })
          ] }) }) })
        },
        req.id
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "friends", className: "space-y-3", children: friends.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          "data-ocid": "friends.list.empty_state",
          className: "text-center py-16 text-muted-foreground",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { size: 40, className: "mx-auto mb-3 opacity-30" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: "अभी कोई friend नहीं है" })
          ]
        }
      ) : friends.map((friend, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: idx * 0.06 },
          "data-ocid": `friends.list.item.${idx + 1}`,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border border-border/50 bg-card/80 backdrop-blur-sm shadow-sm rounded-2xl overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-shrink-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: `w-12 h-12 rounded-full bg-gradient-to-br ${getColor(idx + 3)} flex items-center justify-center text-white font-bold text-sm`,
                  children: friend.initials
                }
              ),
              friend.online && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-background" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground text-sm", children: friend.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: friend.online ? "🟢 Online" : "⚫ Offline" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  size: "sm",
                  "data-ocid": `friends.list.message.button.${idx + 1}`,
                  onClick: () => navigate("/chat"),
                  className: "h-8 px-3 text-xs bg-gradient-to-r from-komo-blue to-komo-purple text-white border-0 rounded-xl",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { size: 13, className: "mr-1" }),
                    "Message"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "sm",
                  variant: "ghost",
                  "data-ocid": `friends.list.remove.button.${idx + 1}`,
                  onClick: () => removeFriend(friend.id, friend.name),
                  className: "h-8 w-8 p-0 text-muted-foreground hover:text-red-400 hover:bg-red-500/10 rounded-xl",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(UserMinus, { size: 14 })
                }
              )
            ] })
          ] }) }) })
        },
        friend.id
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "suggestions", className: "space-y-3", children: suggestions.map((sug, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: idx * 0.07 },
          "data-ocid": `friends.suggestions.item.${idx + 1}`,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border border-border/50 bg-card/80 backdrop-blur-sm shadow-sm rounded-2xl overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: `w-12 h-12 rounded-full bg-gradient-to-br ${getColor(idx + 6)} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`,
                children: sug.initials
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground text-sm", children: sug.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                sug.mutual,
                " mutual friends"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "sm",
                disabled: addedSuggestions.has(sug.id),
                "data-ocid": `friends.suggestions.add.button.${idx + 1}`,
                onClick: () => addSuggestion(sug.id, sug.name),
                className: `h-8 px-3 text-xs rounded-xl border-0 ${addedSuggestions.has(sug.id) ? "bg-muted text-muted-foreground" : "bg-gradient-to-r from-komo-blue to-komo-purple text-white"}`,
                children: addedSuggestions.has(sug.id) ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(UserCheck, { size: 13, className: "mr-1" }),
                  "Pending..."
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(UserPlus, { size: 13, className: "mr-1" }),
                  "Add Friend"
                ] })
              }
            )
          ] }) }) })
        },
        sug.id
      )) })
    ] })
  ] }) });
}
export {
  FriendsPage as default
};
