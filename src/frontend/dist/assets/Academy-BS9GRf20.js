import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, h as Play, X, C as Check } from "./index-m-9XzHBK.js";
import { C as Crown } from "./crown-B9eg6AC3.js";
import { S as Star } from "./star-BCPUGzI5.js";
import { C as Clock } from "./clock-CU0p-3di.js";
import { T as TrendingUp } from "./trending-up-DdiiMpOP.js";
import { T as Tag } from "./tag-C2yI2cxL.js";
import { U as Users } from "./users-D7GbLS6T.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M12 7v14", key: "1akyts" }],
  [
    "path",
    {
      d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
      key: "ruj8y"
    }
  ]
];
const BookOpen = createLucideIcon("book-open", __iconNode$1);
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
      d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",
      key: "j76jl0"
    }
  ],
  ["path", { d: "M22 10v6", key: "1lu8f3" }],
  ["path", { d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5", key: "1r8lef" }]
];
const GraduationCap = createLucideIcon("graduation-cap", __iconNode);
const COURSES = [
  {
    id: 1,
    title: "Complete Python Programming",
    teacher: "Rahul Sharma",
    price: 999,
    rating: 4.8,
    students: 12400,
    duration: "42 hrs",
    category: "Tech",
    enrolled: true,
    progress: 65,
    thumbnail: "🐍"
  },
  {
    id: 2,
    title: "Digital Marketing Masterclass",
    teacher: "Priya Verma",
    price: 799,
    rating: 4.7,
    students: 8900,
    duration: "28 hrs",
    category: "Marketing",
    enrolled: false,
    progress: 0,
    thumbnail: "📈"
  },
  {
    id: 3,
    title: "Stock Market & Investing",
    teacher: "Amit Patel",
    price: 1299,
    rating: 4.9,
    students: 15600,
    duration: "35 hrs",
    category: "Finance",
    enrolled: true,
    progress: 30,
    thumbnail: "📊"
  },
  {
    id: 4,
    title: "UI/UX Design Bootcamp",
    teacher: "Neha Singh",
    price: 899,
    rating: 4.6,
    students: 6700,
    duration: "20 hrs",
    category: "Design",
    enrolled: false,
    progress: 0,
    thumbnail: "🎨"
  },
  {
    id: 5,
    title: "English Speaking Course",
    teacher: "Anjali Gupta",
    price: 499,
    rating: 4.5,
    students: 22e3,
    duration: "15 hrs",
    category: "Language",
    enrolled: false,
    progress: 0,
    thumbnail: "🗣️"
  },
  {
    id: 6,
    title: "Photography & Editing",
    teacher: "Vikram Das",
    price: 699,
    rating: 4.7,
    students: 9100,
    duration: "18 hrs",
    category: "Creative",
    enrolled: true,
    progress: 80,
    thumbnail: "📷"
  }
];
const CATEGORIES = [
  "All",
  "Tech",
  "Marketing",
  "Finance",
  "Design",
  "Language",
  "Creative"
];
const MONTHLY_PRICE = 199;
const YEARLY_PRICE = 999;
const MONTHLY_DISCOUNTED = 159;
const YEARLY_DISCOUNTED = 799;
function Academy() {
  const [activeTab, setActiveTab] = reactExports.useState(
    "browse"
  );
  const [showSubscriptionModal, setShowSubscriptionModal] = reactExports.useState(false);
  const [showCourseModal, setShowCourseModal] = reactExports.useState(null);
  const [selectedCategory, setSelectedCategory] = reactExports.useState("All");
  const [isSubscribed, setIsSubscribed] = reactExports.useState(false);
  const [selectedPlan, setSelectedPlan] = reactExports.useState(
    "yearly"
  );
  const [payoutRequested, setPayoutRequested] = reactExports.useState(false);
  const [subPromoCode, setSubPromoCode] = reactExports.useState("");
  const [subPromoApplied, setSubPromoApplied] = reactExports.useState(false);
  const [subPromoError, setSubPromoError] = reactExports.useState("");
  const filteredCourses = COURSES.filter(
    (c) => selectedCategory === "All" || c.category === selectedCategory
  );
  const myCourses = COURSES.filter((c) => c.enrolled);
  const monthlyPrice = subPromoApplied ? MONTHLY_DISCOUNTED : MONTHLY_PRICE;
  const yearlyPrice = subPromoApplied ? YEARLY_DISCOUNTED : YEARLY_PRICE;
  const currentPrice = selectedPlan === "monthly" ? monthlyPrice : yearlyPrice;
  const handleApplySubPromo = () => {
    const code = subPromoCode.trim().toUpperCase();
    if (code === "ACADEMY") {
      setSubPromoApplied(true);
      setSubPromoError("");
    } else {
      setSubPromoError("Invalid promo code");
      setSubPromoApplied(false);
    }
  };
  const handleCloseSubscriptionModal = () => {
    setShowSubscriptionModal(false);
    setSubPromoCode("");
    setSubPromoApplied(false);
    setSubPromoError("");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto px-4 py-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "rounded-2xl p-5 mb-5 relative overflow-hidden",
        style: { background: "linear-gradient(135deg, #7C3AED, #2563EB)" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { size: 22, className: "text-white" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-bold text-lg", children: "KomoAcademy" }),
              isSubscribed && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "bg-yellow-400 text-black text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Crown, { size: 10 }),
                " PRO"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/80 text-sm", children: "Unlimited learning, one subscription" }),
            !isSubscribed && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setShowSubscriptionModal(true),
                className: "mt-3 bg-white text-purple-700 font-bold text-sm px-4 py-2 rounded-full",
                children: "Subscribe ₹199/month"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-4 top-4 text-6xl opacity-20", children: "🎓" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 mb-5", children: ["browse", "mylearning", "teach"].map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        "data-ocid": `academy.${tab}.tab`,
        onClick: () => setActiveTab(tab),
        className: `flex-1 py-2 rounded-xl text-sm font-semibold transition-all ${activeTab === tab ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white" : "bg-white/5 text-gray-400"}`,
        children: tab === "browse" ? "Browse" : tab === "mylearning" ? "My Learning" : "Teach"
      },
      tab
    )) }),
    activeTab === "browse" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 overflow-x-auto pb-2 mb-4 scrollbar-hide", children: CATEGORIES.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => setSelectedCategory(cat),
          className: `shrink-0 px-3 py-1 rounded-full text-xs font-medium transition-all ${selectedCategory === cat ? "bg-purple-600 text-white" : "bg-white/10 text-gray-300"}`,
          children: cat
        },
        cat
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3", children: filteredCourses.map((course) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: () => setShowCourseModal(course),
          className: "bg-white/5 rounded-2xl p-3 text-left hover:bg-white/10 transition-all border border-white/10",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl mb-2", children: course.thumbnail }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white text-sm font-semibold leading-tight mb-1", children: course.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-gray-400 text-xs mb-2", children: course.teacher }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 10, className: "text-yellow-400 fill-yellow-400" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-yellow-400 text-xs font-medium", children: course.rating }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-gray-500 text-xs", children: [
                "(",
                (course.students / 1e3).toFixed(1),
                "k)"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              isSubscribed ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-400 text-xs font-bold", children: "FREE" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-purple-400 text-sm font-bold", children: [
                "₹",
                course.price
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-gray-500 text-[10px] flex items-center gap-0.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 9 }),
                " ",
                course.duration
              ] })
            ] }),
            course.enrolled && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full bg-gray-700 rounded-full h-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "bg-gradient-to-r from-purple-500 to-blue-500 h-1 rounded-full",
                  style: { width: `${course.progress}%` }
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-gray-400", children: [
                course.progress,
                "% done"
              ] })
            ] })
          ]
        },
        course.id
      )) })
    ] }),
    activeTab === "mylearning" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: myCourses.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-16 text-gray-500", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { size: 40, className: "mx-auto mb-3 opacity-30" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "No courses enrolled yet" })
    ] }) : myCourses.map((course) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "bg-white/5 rounded-2xl p-4 border border-white/10",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl", children: course.thumbnail }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white font-semibold text-sm", children: course.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-gray-400 text-xs", children: course.teacher }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-gray-400", children: [
                  course.progress,
                  "% complete"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-gray-400", children: course.duration })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full bg-gray-700 rounded-full h-1.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "bg-gradient-to-r from-purple-500 to-blue-500 h-1.5 rounded-full",
                  style: { width: `${course.progress}%` }
                }
              ) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              className: "w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { size: 16, className: "text-white ml-0.5" })
            }
          )
        ] })
      },
      course.id
    )) }),
    activeTab === "teach" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/5 rounded-2xl p-4 mb-4 border border-white/10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { size: 16, className: "text-green-400" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-semibold", children: "Teacher Earnings" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-green-400 font-bold text-lg", children: "₹12,450" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-gray-400 text-[11px]", children: "This Month" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-blue-400 font-bold text-lg", children: "₹89,200" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-gray-400 text-[11px]", children: "Total Earned" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-purple-400 font-bold text-lg", children: "70%" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-gray-400 text-[11px]", children: "Your Share" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/5 rounded-2xl p-4 mb-4 border border-white/10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white font-semibold text-sm mb-3", children: "Revenue Split" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-400 text-sm", children: "Teacher Share" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-400 font-bold", children: "70%" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-400 text-sm", children: "Platform Commission" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-400 font-bold", children: "30%" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px bg-white/10 my-2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-400 text-sm", children: "Ads Bonus" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-yellow-400 font-bold", children: "+5%" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-400 text-sm", children: "Subscription Royalty" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-400 font-bold", children: "Pro-Rated" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/5 rounded-2xl p-4 mb-4 border border-white/10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white font-semibold text-sm", children: "Available Balance" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-green-400 font-bold text-xl", children: "₹12,450" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setPayoutRequested(true),
              className: `px-4 py-2 rounded-xl text-sm font-bold transition-all ${payoutRequested ? "bg-green-600/20 text-green-400 border border-green-600" : "bg-gradient-to-r from-purple-600 to-blue-600 text-white"}`,
              children: payoutRequested ? "✓ Requested" : "Request Payout"
            }
          )
        ] }),
        payoutRequested && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-green-400 text-xs bg-green-400/10 rounded-lg p-2", children: "Payout request submitted! Will be processed within 3-5 business days." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/5 rounded-2xl p-4 border border-white/10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white font-semibold text-sm mb-3", children: "My Published Courses" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: COURSES.filter((_, i) => i < 2).map((course) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl", children: course.thumbnail }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white text-sm font-medium", children: course.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-gray-400 text-xs", children: [
              course.students.toLocaleString(),
              " students"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-green-400 text-sm font-bold", children: [
            "₹",
            (course.price * course.students * 1e-4).toFixed(0),
            "k"
          ] })
        ] }, course.id)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            className: "mt-3 w-full py-2 rounded-xl bg-purple-600/20 text-purple-400 text-sm font-semibold border border-purple-600/30",
            children: "+ Create New Course"
          }
        )
      ] })
    ] }),
    showSubscriptionModal && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 bg-black/80 z-50 flex items-end justify-center p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        "data-ocid": "academy.subscription.modal",
        className: "bg-[#1A1F2B] rounded-3xl w-full max-w-md p-6",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Crown, { size: 20, className: "text-yellow-400" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-bold text-lg", children: "KomoAcademy Pro" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                "data-ocid": "academy.subscription.close_button",
                onClick: handleCloseSubscriptionModal,
                className: "text-gray-400",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 20 })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-sm mb-5", children: "Unlimited access to all courses, like Netflix for education!" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3 mb-4", children: ["monthly", "yearly"].map((plan) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              "data-ocid": `academy.subscription.${plan}.toggle`,
              onClick: () => setSelectedPlan(plan),
              className: `w-full p-4 rounded-2xl border-2 text-left transition-all ${selectedPlan === plan ? "border-purple-500 bg-purple-500/10" : "border-white/10 bg-white/5"}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white font-bold", children: plan === "monthly" ? "Monthly" : "Yearly" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: subPromoApplied ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-gray-500 text-sm line-through", children: [
                      "₹",
                      plan === "monthly" ? MONTHLY_PRICE : YEARLY_PRICE
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-green-400 text-sm font-bold", children: [
                      "₹",
                      plan === "monthly" ? MONTHLY_DISCOUNTED : YEARLY_DISCOUNTED,
                      plan === "monthly" ? " / month" : " / year"
                    ] })
                  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-400 text-sm", children: plan === "monthly" ? `₹${MONTHLY_PRICE} / month` : `₹${YEARLY_PRICE} / year (Save 58%!)` }) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  plan === "yearly" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full", children: "BEST VALUE" }),
                  selectedPlan === plan && /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 18, className: "text-purple-400" })
                ] })
              ] })
            },
            plan
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "label",
              {
                htmlFor: "sub-promo-input",
                className: "text-gray-400 text-xs mb-2 block flex items-center gap-1",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { size: 11 }),
                  " Promo Code"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  id: "sub-promo-input",
                  "data-ocid": "academy.subscription.promo.input",
                  value: subPromoCode,
                  onChange: (e) => {
                    setSubPromoCode(e.target.value.toUpperCase());
                    setSubPromoError("");
                    if (subPromoApplied) setSubPromoApplied(false);
                  },
                  onKeyDown: (e) => e.key === "Enter" && handleApplySubPromo(),
                  placeholder: "Enter promo code",
                  className: "flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 text-sm uppercase font-mono tracking-wider"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  "data-ocid": "academy.subscription.promo.submit_button",
                  onClick: handleApplySubPromo,
                  disabled: !subPromoCode.trim() || subPromoApplied,
                  className: `px-4 py-2.5 rounded-xl text-sm font-bold transition-all disabled:opacity-50 ${subPromoApplied ? "bg-green-500/20 text-green-400 border border-green-500/40" : "bg-purple-600 text-white hover:bg-purple-700"}`,
                  children: subPromoApplied ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 16 }) : "Apply"
                }
              )
            ] }),
            subPromoApplied && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                "data-ocid": "academy.subscription.promo.success_state",
                className: "flex items-center gap-1.5 text-green-400 text-xs mt-2",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 12 }),
                  " 20% off applied!"
                ]
              }
            ),
            subPromoError && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                "data-ocid": "academy.subscription.promo.error_state",
                className: "text-red-400 text-xs mt-2",
                children: subPromoError
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2 mb-5", children: [
            "All courses unlimited",
            "No ads while learning",
            "Download for offline",
            "Certificate on completion"
          ].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex items-center gap-2 text-gray-300 text-sm",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 14, className: "text-green-400" }),
                " ",
                f
              ]
            },
            f
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              "data-ocid": "academy.subscription.submit_button",
              onClick: () => {
                setIsSubscribed(true);
                handleCloseSubscriptionModal();
              },
              className: "w-full py-3 rounded-2xl font-bold text-white",
              style: {
                background: "linear-gradient(135deg, #7C3AED, #2563EB)"
              },
              children: [
                "Subscribe ₹",
                currentPrice,
                "/",
                selectedPlan === "monthly" ? "month" : "year",
                subPromoApplied && " ✓ 20% OFF"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-gray-500 text-xs mt-3", children: "Cancel anytime" })
        ]
      }
    ) }),
    showCourseModal && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 bg-black/80 z-50 flex items-end justify-center p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#1A1F2B] rounded-3xl w-full max-w-md p-6 max-h-[80vh] overflow-y-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl", children: showCourseModal.thumbnail }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setShowCourseModal(null),
            className: "text-gray-400",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 20 })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-white font-bold text-lg mb-1", children: showCourseModal.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-400 text-sm mb-3", children: [
        "by ",
        showCourseModal.teacher
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 14, className: "text-yellow-400 fill-yellow-400" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-yellow-400 font-medium", children: showCourseModal.rating })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-gray-400 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { size: 14 }),
          " ",
          showCourseModal.students.toLocaleString(),
          " ",
          "students"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-gray-400 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 14 }),
          " ",
          showCourseModal.duration
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white/5 rounded-xl p-3 mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-gray-400 text-sm", children: "This course covers everything from basics to advanced level. Includes hands-on projects, quizzes, and a completion certificate." }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: isSubscribed ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-400 font-bold text-lg", children: "FREE with Pro" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-purple-400 font-bold text-2xl", children: [
          "₹",
          showCourseModal.price
        ] }) }),
        !isSubscribed && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => {
              setShowCourseModal(null);
              setShowSubscriptionModal(true);
            },
            className: "text-purple-400 text-sm underline",
            children: "Get Pro instead"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => setShowCourseModal(null),
          className: "w-full py-3 rounded-2xl font-bold text-white",
          style: {
            background: "linear-gradient(135deg, #7C3AED, #2563EB)"
          },
          children: isSubscribed ? "Start Learning" : `Buy for ₹${showCourseModal.price}`
        }
      )
    ] }) })
  ] });
}
export {
  Academy as default
};
