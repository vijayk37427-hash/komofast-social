import { c as createLucideIcon, u as useApp, r as reactExports, j as jsxRuntimeExports, D as Dialog, p as DialogTrigger, P as Plus, k as DialogContent, q as DialogHeader, s as DialogTitle, I as Input, T as Textarea, m as motion, M as MapPin } from "./index-BlWpIyR8.js";
import { A as ArrowLeft } from "./arrow-left-C_jsN0fF.js";
import { U as Users } from "./users-Xo-nsB-b.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
];
const Calendar = createLucideIcon("calendar", __iconNode);
const EVENT_BANNERS = {
  Concert: "linear-gradient(135deg,#f97316,#ef4444)",
  Tech: "linear-gradient(135deg,#3b82f6,#8b5cf6)",
  Workshop: "linear-gradient(135deg,#10b981,#3b82f6)",
  Webinar: "linear-gradient(135deg,#8b5cf6,#ec4899)",
  Meetup: "linear-gradient(135deg,#f59e0b,#f97316)",
  Sports: "linear-gradient(135deg,#22c55e,#f59e0b)"
};
const MOCK_EVENTS = [
  {
    id: "1",
    title: "KomoFest Music Night 2026",
    category: "Concert",
    date: "Sat, Apr 5",
    time: "7:00 PM",
    location: "Connaught Place, Delhi",
    organizer: "Rahul Events",
    organizerInitials: "RE",
    going: 342,
    rsvpd: false,
    tab: "upcoming"
  },
  {
    id: "2",
    title: "React & ICP Developer Meetup",
    category: "Tech",
    date: "Sun, Apr 13",
    time: "2:00 PM",
    location: "Online",
    organizer: "Dev Community",
    organizerInitials: "DC",
    going: 89,
    rsvpd: true,
    tab: "upcoming"
  },
  {
    id: "3",
    title: "Content Creator Workshop",
    category: "Workshop",
    date: "Fri, Apr 18",
    time: "11:00 AM",
    location: "Online",
    organizer: "KomoFast Team",
    organizerInitials: "KT",
    going: 156,
    rsvpd: false,
    tab: "upcoming"
  },
  {
    id: "4",
    title: "Digital Marketing Webinar",
    category: "Webinar",
    date: "Wed, Apr 23",
    time: "6:00 PM",
    location: "Online",
    organizer: "Priya Sharma",
    organizerInitials: "PS",
    going: 211,
    rsvpd: false,
    tab: "upcoming"
  },
  {
    id: "5",
    title: "Startup Networking Meetup",
    category: "Meetup",
    date: "Sat, May 3",
    time: "4:00 PM",
    location: "Bandra, Mumbai",
    organizer: "Startup India",
    organizerInitials: "SI",
    going: 74,
    rsvpd: false,
    tab: "upcoming"
  },
  {
    id: "6",
    title: "My Birthday Bash 🎉",
    category: "Concert",
    date: "Sun, Mar 2",
    time: "8:00 PM",
    location: "Home",
    organizer: "You",
    organizerInitials: "ME",
    going: 28,
    rsvpd: true,
    tab: "mine"
  },
  {
    id: "7",
    title: "Holi Celebration 2026",
    category: "Sports",
    date: "Mon, Mar 14",
    time: "10:00 AM",
    location: "Society Ground",
    organizer: "RWA",
    organizerInitials: "RW",
    going: 95,
    rsvpd: true,
    tab: "past"
  }
];
const CATEGORIES_LIST = [
  "Concert",
  "Tech",
  "Workshop",
  "Webinar",
  "Meetup",
  "Sports"
];
function Events() {
  const { navigate } = useApp();
  const [tab, setTab] = reactExports.useState("upcoming");
  const [events, setEvents] = reactExports.useState(MOCK_EVENTS);
  const [createOpen, setCreateOpen] = reactExports.useState(false);
  const [form, setForm] = reactExports.useState({
    title: "",
    desc: "",
    date: "",
    time: "",
    location: "",
    category: "Tech"
  });
  const filtered = events.filter((e) => e.tab === tab);
  const rsvp = (id) => {
    setEvents(
      (prev) => prev.map(
        (e) => e.id === id ? {
          ...e,
          rsvpd: !e.rsvpd,
          going: e.rsvpd ? e.going - 1 : e.going + 1
        } : e
      )
    );
  };
  const createEvent = () => {
    if (!form.title.trim()) return;
    const newEvent = {
      id: Date.now().toString(),
      title: form.title,
      category: form.category,
      date: form.date || "TBD",
      time: form.time || "TBD",
      location: form.location || "Online",
      organizer: "You",
      organizerInitials: "ME",
      going: 1,
      rsvpd: true,
      tab: "mine"
    };
    setEvents((prev) => [...prev, newEvent]);
    setCreateOpen(false);
    setForm({
      title: "",
      desc: "",
      date: "",
      time: "",
      location: "",
      category: "Tech"
    });
    setTab("mine");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto px-4 py-4 pb-24", "data-ocid": "events.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            "data-ocid": "events.back_button",
            onClick: () => navigate("/"),
            className: "w-8 h-8 rounded-full bg-white/5 flex items-center justify-center",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 16, className: "text-white" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-white text-xl font-bold", children: "Events" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open: createOpen, onOpenChange: setCreateOpen, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            "data-ocid": "events.create_event_button",
            className: "flex items-center gap-1.5 px-4 py-2 rounded-xl text-white text-sm font-semibold",
            style: { background: "linear-gradient(135deg,#a855f7,#ec4899)" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 15 }),
              " Create Event"
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "bg-[#11161D] border-white/10 text-white max-w-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "text-white", children: "Create Event" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 pt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                "data-ocid": "events.create.title_input",
                placeholder: "Event title",
                value: form.title,
                onChange: (e) => setForm((f) => ({ ...f, title: e.target.value })),
                className: "bg-white/5 border-white/10 text-white placeholder:text-white/30"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Textarea,
              {
                "data-ocid": "events.create.desc_input",
                placeholder: "Description",
                value: form.desc,
                onChange: (e) => setForm((f) => ({ ...f, desc: e.target.value })),
                className: "bg-white/5 border-white/10 text-white placeholder:text-white/30 resize-none",
                rows: 2
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  "data-ocid": "events.create.date_input",
                  type: "date",
                  value: form.date,
                  onChange: (e) => setForm((f) => ({ ...f, date: e.target.value })),
                  className: "bg-white/5 border-white/10 text-white"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  "data-ocid": "events.create.time_input",
                  type: "time",
                  value: form.time,
                  onChange: (e) => setForm((f) => ({ ...f, time: e.target.value })),
                  className: "bg-white/5 border-white/10 text-white"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                "data-ocid": "events.create.location_input",
                placeholder: "Location or Online",
                value: form.location,
                onChange: (e) => setForm((f) => ({ ...f, location: e.target.value })),
                className: "bg-white/5 border-white/10 text-white placeholder:text-white/30"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/50 text-xs mb-1.5", children: "Category" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: CATEGORIES_LIST.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  "data-ocid": `events.create.category_${cat.toLowerCase()}.toggle`,
                  onClick: () => setForm((f) => ({ ...f, category: cat })),
                  className: `px-2.5 py-1 rounded-full text-xs font-medium transition-colors ${form.category === cat ? "text-white" : "bg-white/5 text-white/50"}`,
                  style: form.category === cat ? { background: EVENT_BANNERS[cat] } : {},
                  children: cat
                },
                cat
              )) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                "data-ocid": "events.create.submit_button",
                onClick: createEvent,
                className: "w-full py-3 rounded-xl text-white font-semibold text-sm",
                style: {
                  background: "linear-gradient(135deg,#a855f7,#ec4899)"
                },
                children: "Create Event"
              }
            )
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 bg-white/5 rounded-xl p-1 mb-5", children: ["upcoming", "mine", "past"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        "data-ocid": `events.${t}.tab`,
        onClick: () => setTab(t),
        className: `flex-1 py-2 rounded-lg text-xs font-semibold transition-colors capitalize ${tab === t ? "text-white" : "text-white/50"}`,
        style: tab === t ? { background: "linear-gradient(135deg,#a855f7,#ec4899)" } : {},
        children: t === "mine" ? "My Events" : t === "upcoming" ? "Upcoming" : "Past"
      },
      t
    )) }),
    filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "events.empty_state", className: "text-center py-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { size: 48, className: "text-white/20 mx-auto mb-3" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/60 font-medium", children: "No events here" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/30 text-sm mt-1", children: "Create one or explore upcoming events!" })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: filtered.map((event, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        "data-ocid": `events.item.${i + 1}`,
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: i * 0.06 },
        className: "rounded-2xl overflow-hidden bg-white/5 border border-white/8",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "h-20 flex items-end px-4 pb-2",
              style: {
                background: EVENT_BANNERS[event.category] || EVENT_BANNERS.Tech
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/80 text-xs font-bold uppercase tracking-wider", children: event.category })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-white font-bold text-[15px] mb-2", children: event.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-white/50 text-xs", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { size: 12 }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  event.date,
                  " · ",
                  event.time
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-white/50 text-xs", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 12 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: event.location })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-white/50 text-xs", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { size: 12 }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  event.going,
                  " going"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-7 h-7 rounded-full text-white text-[10px] font-bold flex items-center justify-center",
                    style: {
                      background: EVENT_BANNERS[event.category] || EVENT_BANNERS.Tech
                    },
                    children: event.organizerInitials
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60 text-xs", children: event.organizer })
              ] }),
              tab !== "past" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  "data-ocid": `events.rsvp.${i + 1}.button`,
                  onClick: () => rsvp(event.id),
                  className: `px-4 py-1.5 rounded-xl text-xs font-semibold transition-all ${event.rsvpd ? "bg-white/10 text-white/60 border border-white/10" : "text-white"}`,
                  style: !event.rsvpd ? {
                    background: "linear-gradient(135deg,#a855f7,#ec4899)"
                  } : {},
                  children: event.rsvpd ? "✓ Going" : "RSVP"
                }
              )
            ] })
          ] })
        ]
      },
      event.id
    )) })
  ] });
}
export {
  Events as default
};
