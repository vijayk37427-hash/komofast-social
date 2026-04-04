import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Heart, Star, Users, Zap } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { useApp } from "../context/AppContext";

const TIERS = [
  {
    id: "fan",
    name: "Fan",
    nameHindi: "प्रशंसक",
    price: 49,
    icon: "❤️",
    color: "from-pink-600 to-rose-600",
    border: "border-pink-500/30",
    members: 1240,
    benefits: [
      "Exclusive Fan posts",
      "Fan badge on profile",
      "Monthly newsletter",
      "Early video access",
    ],
  },
  {
    id: "supporter",
    name: "Supporter",
    nameHindi: "समर्थक",
    price: 99,
    icon: "⭐",
    color: "from-blue-600 to-purple-600",
    border: "border-purple-500/30",
    members: 580,
    recommended: true,
    benefits: [
      "All Fan benefits",
      "Supporter badge ⭐",
      "Direct DM access",
      "Exclusive Reels",
      "Monthly live Q&A",
    ],
  },
  {
    id: "superfan",
    name: "Super Fan",
    nameHindi: "सुपर फैन",
    price: 199,
    icon: "👑",
    color: "from-yellow-500 to-orange-500",
    border: "border-yellow-500/30",
    members: 142,
    benefits: [
      "All Supporter benefits",
      "Super Fan crown 👑",
      "Private group chat",
      "BTS content access",
      "Creator shoutout",
      "Free merch discount",
    ],
  },
];

const MY_MEMBERS = [
  {
    name: "Priya Sharma",
    tier: "superfan",
    avatar: "PS",
    joinedDays: 32,
    emoji: "👑",
  },
  {
    name: "Rahul Verma",
    tier: "supporter",
    avatar: "RV",
    joinedDays: 45,
    emoji: "⭐",
  },
  {
    name: "Anjali Mishra",
    tier: "fan",
    avatar: "AM",
    joinedDays: 60,
    emoji: "❤️",
  },
  {
    name: "Deepak Singh",
    tier: "supporter",
    avatar: "DS",
    joinedDays: 12,
    emoji: "⭐",
  },
  {
    name: "Meera Patel",
    tier: "superfan",
    avatar: "MP",
    joinedDays: 5,
    emoji: "👑",
  },
  { name: "Ravi Kumar", tier: "fan", avatar: "RK", joinedDays: 90, emoji: "❤️" },
];

export default function Memberships() {
  const { navigate } = useApp();
  const [joinedTiers, setJoinedTiers] = useState<string[]>([]);

  const handleJoin = (tierId: string, price: number) => {
    if (joinedTiers.includes(tierId)) return;
    setJoinedTiers((prev) => [...prev, tierId]);
    toast.success(`Membership joined! ₹${price}/माह charge होगा 🎉`);
  };

  return (
    <div
      className="min-h-screen px-4 py-6"
      style={{ background: "linear-gradient(180deg,#0B0F14 0%,#11161D 100%)" }}
    >
      <div className="flex items-center gap-3 mb-6">
        <button
          type="button"
          onClick={() => navigate("/")}
          className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center"
          data-ocid="memberships.back_button"
        >
          <ArrowLeft size={18} className="text-white" />
        </button>
        <div>
          <h1 className="text-white text-xl font-bold">क्रिएटर मेंबरशिप</h1>
          <p className="text-white/50 text-xs">Creator Memberships</p>
        </div>
      </div>

      <Tabs defaultValue="join" className="w-full">
        <TabsList
          className="w-full bg-white/5 border border-white/10 rounded-xl mb-6 p-1"
          data-ocid="memberships.tab"
        >
          <TabsTrigger
            value="join"
            className="flex-1 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white rounded-lg text-white/60 text-sm"
            data-ocid="memberships.join.tab"
          >
            <Heart size={14} className="mr-1.5" /> Join
          </TabsTrigger>
          <TabsTrigger
            value="members"
            className="flex-1 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white rounded-lg text-white/60 text-sm"
            data-ocid="memberships.members.tab"
          >
            <Users size={14} className="mr-1.5" /> My Members
          </TabsTrigger>
        </TabsList>

        <TabsContent value="join" className="space-y-4">
          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            {[
              { label: "Total Members", value: "1,962", icon: "👥" },
              { label: "Monthly Earning", value: "₹6,450", icon: "💰" },
              { label: "Active Tiers", value: "3", icon: "⭐" },
            ].map((s) => (
              <div
                key={s.label}
                className="bg-white/5 rounded-2xl p-3 border border-white/10 text-center"
              >
                <div className="text-xl mb-1">{s.icon}</div>
                <div className="text-white font-bold text-sm">{s.value}</div>
                <div className="text-white/40 text-[10px]">{s.label}</div>
              </div>
            ))}
          </div>

          {TIERS.map((tier, i) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-2xl border p-5 bg-white/5 ${tier.border} relative`}
              data-ocid={`memberships.${tier.id}.card`}
            >
              {tier.recommended && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 text-[10px]">
                  ✨ POPULAR
                </Badge>
              )}

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${tier.color} flex items-center justify-center text-xl`}
                  >
                    {tier.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-bold">{tier.name}</h3>
                    <p className="text-white/50 text-xs">{tier.nameHindi}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-white font-bold text-lg">
                    ₹{tier.price}
                  </span>
                  <span className="text-white/50 text-xs">/माह</span>
                  <div className="flex items-center gap-1 mt-0.5 justify-end">
                    <Users size={10} className="text-white/40" />
                    <span className="text-white/40 text-[10px]">
                      {tier.members.toLocaleString()} members
                    </span>
                  </div>
                </div>
              </div>

              <ul className="space-y-1.5 mb-4">
                {tier.benefits.map((b) => (
                  <li
                    key={b}
                    className="flex items-center gap-2 text-xs text-white/70"
                  >
                    <Zap size={10} className="text-purple-400 flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>

              <button
                type="button"
                data-ocid={`memberships.${tier.id}.primary_button`}
                onClick={() => handleJoin(tier.id, tier.price)}
                className={`w-full py-3 rounded-xl text-white font-bold text-sm transition-all ${
                  joinedTiers.includes(tier.id)
                    ? "bg-green-600/30 text-green-400 border border-green-500/30"
                    : `bg-gradient-to-r ${tier.color}`
                }`}
              >
                {joinedTiers.includes(tier.id)
                  ? `✓ Joined — ₹${tier.price}/माह`
                  : `Join ₹${tier.price}/माह`}
              </button>
            </motion.div>
          ))}
        </TabsContent>

        <TabsContent value="members">
          <div className="space-y-2">
            <p className="text-white/50 text-xs mb-4">
              {MY_MEMBERS.length} active members this month
            </p>
            {MY_MEMBERS.map((m, i) => (
              <motion.div
                key={`${m.name}-${i}`}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-3 bg-white/5 rounded-xl p-3 border border-white/10"
                data-ocid={`memberships.member.item.${i + 1}`}
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                  {m.avatar}
                </div>
                <div className="flex-1">
                  <p className="text-white text-sm font-semibold">{m.name}</p>
                  <p className="text-white/40 text-[10px]">
                    {m.joinedDays} days ago
                  </p>
                </div>
                <Badge
                  className={`text-[10px] border-0 ${
                    m.tier === "superfan"
                      ? "bg-yellow-500/20 text-yellow-400"
                      : m.tier === "supporter"
                        ? "bg-purple-500/20 text-purple-400"
                        : "bg-pink-500/20 text-pink-400"
                  }`}
                >
                  {m.emoji} {m.tier}
                </Badge>
              </motion.div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
