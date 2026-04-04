import {
  Award,
  BookOpen,
  Check,
  ChevronRight,
  Clock,
  Crown,
  DollarSign,
  GraduationCap,
  Lock,
  Play,
  Star,
  Tag,
  TrendingUp,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";

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
    thumbnail: "🐍",
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
    thumbnail: "📈",
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
    thumbnail: "📊",
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
    thumbnail: "🎨",
  },
  {
    id: 5,
    title: "English Speaking Course",
    teacher: "Anjali Gupta",
    price: 499,
    rating: 4.5,
    students: 22000,
    duration: "15 hrs",
    category: "Language",
    enrolled: false,
    progress: 0,
    thumbnail: "🗣️",
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
    thumbnail: "📷",
  },
];

const CATEGORIES = [
  "All",
  "Tech",
  "Marketing",
  "Finance",
  "Design",
  "Language",
  "Creative",
];

const MONTHLY_PRICE = 199;
const YEARLY_PRICE = 999;
const MONTHLY_DISCOUNTED = 159;
const YEARLY_DISCOUNTED = 799;

export default function Academy() {
  const [activeTab, setActiveTab] = useState<"browse" | "mylearning" | "teach">(
    "browse",
  );
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);
  const [showCourseModal, setShowCourseModal] = useState<
    (typeof COURSES)[0] | null
  >(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<"monthly" | "yearly">(
    "yearly",
  );
  const [payoutRequested, setPayoutRequested] = useState(false);

  // Subscription promo code state
  const [subPromoCode, setSubPromoCode] = useState("");
  const [subPromoApplied, setSubPromoApplied] = useState(false);
  const [subPromoError, setSubPromoError] = useState("");

  const filteredCourses = COURSES.filter(
    (c) => selectedCategory === "All" || c.category === selectedCategory,
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

  return (
    <div className="max-w-2xl mx-auto px-4 py-4">
      {/* Header */}
      <div
        className="rounded-2xl p-5 mb-5 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #7C3AED, #2563EB)" }}
      >
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-1">
            <GraduationCap size={22} className="text-white" />
            <span className="text-white font-bold text-lg">KomoAcademy</span>
            {isSubscribed && (
              <span className="bg-yellow-400 text-black text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                <Crown size={10} /> PRO
              </span>
            )}
          </div>
          <p className="text-white/80 text-sm">
            Unlimited learning, one subscription
          </p>
          {!isSubscribed && (
            <button
              type="button"
              onClick={() => setShowSubscriptionModal(true)}
              className="mt-3 bg-white text-purple-700 font-bold text-sm px-4 py-2 rounded-full"
            >
              Subscribe ₹199/month
            </button>
          )}
        </div>
        <div className="absolute right-4 top-4 text-6xl opacity-20">🎓</div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-5">
        {(["browse", "mylearning", "teach"] as const).map((tab) => (
          <button
            type="button"
            key={tab}
            data-ocid={`academy.${tab}.tab`}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-2 rounded-xl text-sm font-semibold transition-all ${
              activeTab === tab
                ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                : "bg-white/5 text-gray-400"
            }`}
          >
            {tab === "browse"
              ? "Browse"
              : tab === "mylearning"
                ? "My Learning"
                : "Teach"}
          </button>
        ))}
      </div>

      {/* Browse Tab */}
      {activeTab === "browse" && (
        <div>
          <div className="flex gap-2 overflow-x-auto pb-2 mb-4 scrollbar-hide">
            {CATEGORIES.map((cat) => (
              <button
                type="button"
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`shrink-0 px-3 py-1 rounded-full text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? "bg-purple-600 text-white"
                    : "bg-white/10 text-gray-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-3">
            {filteredCourses.map((course) => (
              <button
                type="button"
                key={course.id}
                onClick={() => setShowCourseModal(course)}
                className="bg-white/5 rounded-2xl p-3 text-left hover:bg-white/10 transition-all border border-white/10"
              >
                <div className="text-4xl mb-2">{course.thumbnail}</div>
                <div className="text-white text-sm font-semibold leading-tight mb-1">
                  {course.title}
                </div>
                <div className="text-gray-400 text-xs mb-2">
                  {course.teacher}
                </div>
                <div className="flex items-center gap-1 mb-2">
                  <Star size={10} className="text-yellow-400 fill-yellow-400" />
                  <span className="text-yellow-400 text-xs font-medium">
                    {course.rating}
                  </span>
                  <span className="text-gray-500 text-xs">
                    ({(course.students / 1000).toFixed(1)}k)
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  {isSubscribed ? (
                    <span className="text-green-400 text-xs font-bold">
                      FREE
                    </span>
                  ) : (
                    <span className="text-purple-400 text-sm font-bold">
                      ₹{course.price}
                    </span>
                  )}
                  <span className="text-gray-500 text-[10px] flex items-center gap-0.5">
                    <Clock size={9} /> {course.duration}
                  </span>
                </div>
                {course.enrolled && (
                  <div className="mt-2">
                    <div className="w-full bg-gray-700 rounded-full h-1">
                      <div
                        className="bg-gradient-to-r from-purple-500 to-blue-500 h-1 rounded-full"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                    <span className="text-[10px] text-gray-400">
                      {course.progress}% done
                    </span>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* My Learning Tab */}
      {activeTab === "mylearning" && (
        <div className="space-y-3">
          {myCourses.length === 0 ? (
            <div className="text-center py-16 text-gray-500">
              <BookOpen size={40} className="mx-auto mb-3 opacity-30" />
              <p>No courses enrolled yet</p>
            </div>
          ) : (
            myCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white/5 rounded-2xl p-4 border border-white/10"
              >
                <div className="flex items-center gap-3">
                  <div className="text-3xl">{course.thumbnail}</div>
                  <div className="flex-1">
                    <div className="text-white font-semibold text-sm">
                      {course.title}
                    </div>
                    <div className="text-gray-400 text-xs">
                      {course.teacher}
                    </div>
                    <div className="mt-2">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-gray-400">
                          {course.progress}% complete
                        </span>
                        <span className="text-xs text-gray-400">
                          {course.duration}
                        </span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-1.5">
                        <div
                          className="bg-gradient-to-r from-purple-500 to-blue-500 h-1.5 rounded-full"
                          style={{ width: `${course.progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center"
                  >
                    <Play size={16} className="text-white ml-0.5" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {/* Teach Tab */}
      {activeTab === "teach" && (
        <div>
          <div className="bg-white/5 rounded-2xl p-4 mb-4 border border-white/10">
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp size={16} className="text-green-400" />
              <span className="text-white font-semibold">Teacher Earnings</span>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="text-center">
                <div className="text-green-400 font-bold text-lg">₹12,450</div>
                <div className="text-gray-400 text-[11px]">This Month</div>
              </div>
              <div className="text-center">
                <div className="text-blue-400 font-bold text-lg">₹89,200</div>
                <div className="text-gray-400 text-[11px]">Total Earned</div>
              </div>
              <div className="text-center">
                <div className="text-purple-400 font-bold text-lg">70%</div>
                <div className="text-gray-400 text-[11px]">Your Share</div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 rounded-2xl p-4 mb-4 border border-white/10">
            <div className="text-white font-semibold text-sm mb-3">
              Revenue Split
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-sm">Teacher Share</span>
                <span className="text-green-400 font-bold">70%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-sm">
                  Platform Commission
                </span>
                <span className="text-red-400 font-bold">30%</span>
              </div>
              <div className="h-px bg-white/10 my-2" />
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-sm">Ads Bonus</span>
                <span className="text-yellow-400 font-bold">+5%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-sm">
                  Subscription Royalty
                </span>
                <span className="text-blue-400 font-bold">Pro-Rated</span>
              </div>
            </div>
          </div>

          <div className="bg-white/5 rounded-2xl p-4 mb-4 border border-white/10">
            <div className="flex items-center justify-between mb-3">
              <div>
                <div className="text-white font-semibold text-sm">
                  Available Balance
                </div>
                <div className="text-green-400 font-bold text-xl">₹12,450</div>
              </div>
              <button
                type="button"
                onClick={() => setPayoutRequested(true)}
                className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                  payoutRequested
                    ? "bg-green-600/20 text-green-400 border border-green-600"
                    : "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                }`}
              >
                {payoutRequested ? "✓ Requested" : "Request Payout"}
              </button>
            </div>
            {payoutRequested && (
              <div className="text-green-400 text-xs bg-green-400/10 rounded-lg p-2">
                Payout request submitted! Will be processed within 3-5 business
                days.
              </div>
            )}
          </div>

          <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
            <div className="text-white font-semibold text-sm mb-3">
              My Published Courses
            </div>
            <div className="space-y-2">
              {COURSES.filter((_, i) => i < 2).map((course) => (
                <div key={course.id} className="flex items-center gap-3">
                  <div className="text-2xl">{course.thumbnail}</div>
                  <div className="flex-1">
                    <div className="text-white text-sm font-medium">
                      {course.title}
                    </div>
                    <div className="text-gray-400 text-xs">
                      {course.students.toLocaleString()} students
                    </div>
                  </div>
                  <div className="text-green-400 text-sm font-bold">
                    ₹{(course.price * course.students * 0.0001).toFixed(0)}k
                  </div>
                </div>
              ))}
            </div>
            <button
              type="button"
              className="mt-3 w-full py-2 rounded-xl bg-purple-600/20 text-purple-400 text-sm font-semibold border border-purple-600/30"
            >
              + Create New Course
            </button>
          </div>
        </div>
      )}

      {/* Subscription Modal */}
      {showSubscriptionModal && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-end justify-center p-4">
          <div
            data-ocid="academy.subscription.modal"
            className="bg-[#1A1F2B] rounded-3xl w-full max-w-md p-6"
          >
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <Crown size={20} className="text-yellow-400" />
                <span className="text-white font-bold text-lg">
                  KomoAcademy Pro
                </span>
              </div>
              <button
                type="button"
                data-ocid="academy.subscription.close_button"
                onClick={handleCloseSubscriptionModal}
                className="text-gray-400"
              >
                <X size={20} />
              </button>
            </div>
            <p className="text-gray-400 text-sm mb-5">
              Unlimited access to all courses, like Netflix for education!
            </p>

            {/* Plan Selection */}
            <div className="space-y-3 mb-4">
              {(["monthly", "yearly"] as const).map((plan) => (
                <button
                  type="button"
                  key={plan}
                  data-ocid={`academy.subscription.${plan}.toggle`}
                  onClick={() => setSelectedPlan(plan)}
                  className={`w-full p-4 rounded-2xl border-2 text-left transition-all ${
                    selectedPlan === plan
                      ? "border-purple-500 bg-purple-500/10"
                      : "border-white/10 bg-white/5"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-white font-bold">
                        {plan === "monthly" ? "Monthly" : "Yearly"}
                      </div>
                      <div className="flex items-center gap-2">
                        {subPromoApplied ? (
                          <>
                            <span className="text-gray-500 text-sm line-through">
                              ₹
                              {plan === "monthly"
                                ? MONTHLY_PRICE
                                : YEARLY_PRICE}
                            </span>
                            <span className="text-green-400 text-sm font-bold">
                              ₹
                              {plan === "monthly"
                                ? MONTHLY_DISCOUNTED
                                : YEARLY_DISCOUNTED}
                              {plan === "monthly" ? " / month" : " / year"}
                            </span>
                          </>
                        ) : (
                          <span className="text-gray-400 text-sm">
                            {plan === "monthly"
                              ? `₹${MONTHLY_PRICE} / month`
                              : `₹${YEARLY_PRICE} / year (Save 58%!)`}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {plan === "yearly" && (
                        <span className="bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                          BEST VALUE
                        </span>
                      )}
                      {selectedPlan === plan && (
                        <Check size={18} className="text-purple-400" />
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Promo Code Section */}
            <div className="mb-4">
              <label
                htmlFor="sub-promo-input"
                className="text-gray-400 text-xs mb-2 block flex items-center gap-1"
              >
                <Tag size={11} /> Promo Code
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  id="sub-promo-input"
                  data-ocid="academy.subscription.promo.input"
                  value={subPromoCode}
                  onChange={(e) => {
                    setSubPromoCode(e.target.value.toUpperCase());
                    setSubPromoError("");
                    if (subPromoApplied) setSubPromoApplied(false);
                  }}
                  onKeyDown={(e) => e.key === "Enter" && handleApplySubPromo()}
                  placeholder="Enter promo code"
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 text-sm uppercase font-mono tracking-wider"
                />
                <button
                  type="button"
                  data-ocid="academy.subscription.promo.submit_button"
                  onClick={handleApplySubPromo}
                  disabled={!subPromoCode.trim() || subPromoApplied}
                  className={`px-4 py-2.5 rounded-xl text-sm font-bold transition-all disabled:opacity-50 ${
                    subPromoApplied
                      ? "bg-green-500/20 text-green-400 border border-green-500/40"
                      : "bg-purple-600 text-white hover:bg-purple-700"
                  }`}
                >
                  {subPromoApplied ? <Check size={16} /> : "Apply"}
                </button>
              </div>
              {subPromoApplied && (
                <div
                  data-ocid="academy.subscription.promo.success_state"
                  className="flex items-center gap-1.5 text-green-400 text-xs mt-2"
                >
                  <Check size={12} /> 20% off applied!
                </div>
              )}
              {subPromoError && (
                <div
                  data-ocid="academy.subscription.promo.error_state"
                  className="text-red-400 text-xs mt-2"
                >
                  {subPromoError}
                </div>
              )}
            </div>

            {/* Features */}
            <div className="space-y-2 mb-5">
              {[
                "All courses unlimited",
                "No ads while learning",
                "Download for offline",
                "Certificate on completion",
              ].map((f) => (
                <div
                  key={f}
                  className="flex items-center gap-2 text-gray-300 text-sm"
                >
                  <Check size={14} className="text-green-400" /> {f}
                </div>
              ))}
            </div>

            <button
              type="button"
              data-ocid="academy.subscription.submit_button"
              onClick={() => {
                setIsSubscribed(true);
                handleCloseSubscriptionModal();
              }}
              className="w-full py-3 rounded-2xl font-bold text-white"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #2563EB)",
              }}
            >
              Subscribe ₹{currentPrice}/
              {selectedPlan === "monthly" ? "month" : "year"}
              {subPromoApplied && " ✓ 20% OFF"}
            </button>
            <p className="text-center text-gray-500 text-xs mt-3">
              Cancel anytime
            </p>
          </div>
        </div>
      )}

      {/* Course Detail Modal */}
      {showCourseModal && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-end justify-center p-4">
          <div className="bg-[#1A1F2B] rounded-3xl w-full max-w-md p-6 max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <div className="text-5xl">{showCourseModal.thumbnail}</div>
              <button
                type="button"
                onClick={() => setShowCourseModal(null)}
                className="text-gray-400"
              >
                <X size={20} />
              </button>
            </div>
            <h2 className="text-white font-bold text-lg mb-1">
              {showCourseModal.title}
            </h2>
            <p className="text-gray-400 text-sm mb-3">
              by {showCourseModal.teacher}
            </p>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-1">
                <Star size={14} className="text-yellow-400 fill-yellow-400" />
                <span className="text-yellow-400 font-medium">
                  {showCourseModal.rating}
                </span>
              </div>
              <div className="flex items-center gap-1 text-gray-400 text-sm">
                <Users size={14} /> {showCourseModal.students.toLocaleString()}{" "}
                students
              </div>
              <div className="flex items-center gap-1 text-gray-400 text-sm">
                <Clock size={14} /> {showCourseModal.duration}
              </div>
            </div>
            <div className="bg-white/5 rounded-xl p-3 mb-4">
              <div className="text-gray-400 text-sm">
                This course covers everything from basics to advanced level.
                Includes hands-on projects, quizzes, and a completion
                certificate.
              </div>
            </div>
            <div className="flex items-center justify-between mb-4">
              <div>
                {isSubscribed ? (
                  <span className="text-green-400 font-bold text-lg">
                    FREE with Pro
                  </span>
                ) : (
                  <span className="text-purple-400 font-bold text-2xl">
                    ₹{showCourseModal.price}
                  </span>
                )}
              </div>
              {!isSubscribed && (
                <button
                  type="button"
                  onClick={() => {
                    setShowCourseModal(null);
                    setShowSubscriptionModal(true);
                  }}
                  className="text-purple-400 text-sm underline"
                >
                  Get Pro instead
                </button>
              )}
            </div>
            <button
              type="button"
              onClick={() => setShowCourseModal(null)}
              className="w-full py-3 rounded-2xl font-bold text-white"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #2563EB)",
              }}
            >
              {isSubscribed
                ? "Start Learning"
                : `Buy for ₹${showCourseModal.price}`}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
