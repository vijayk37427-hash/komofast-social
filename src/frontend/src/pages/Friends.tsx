import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  MessageCircle,
  UserCheck,
  UserMinus,
  UserPlus,
  Users,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { useApp } from "../context/AppContext";

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
  "from-yellow-500 to-amber-600",
];

const INITIAL_REQUESTS = [
  { id: "r1", name: "Rahul Sharma", mutual: 5, initials: "RS" },
  { id: "r2", name: "Priya Patel", mutual: 3, initials: "PP" },
  { id: "r3", name: "Amit Kumar", mutual: 8, initials: "AK" },
];

const INITIAL_FRIENDS = [
  { id: "f1", name: "Neha Singh", online: true, initials: "NS" },
  { id: "f2", name: "Ravi Verma", online: false, initials: "RV" },
  { id: "f3", name: "Sunita Devi", online: true, initials: "SD" },
  { id: "f4", name: "Arun Yadav", online: false, initials: "AY" },
  { id: "f5", name: "Meena Gupta", online: true, initials: "MG" },
];

const SUGGESTIONS = [
  { id: "s1", name: "Vikram Joshi", mutual: 12, initials: "VJ" },
  { id: "s2", name: "Pooja Mishra", mutual: 4, initials: "PM" },
  { id: "s3", name: "Suresh Tiwari", mutual: 7, initials: "ST" },
  { id: "s4", name: "Anita Rao", mutual: 2, initials: "AR" },
];

function getColor(idx: number) {
  return AVATAR_COLORS[idx % AVATAR_COLORS.length];
}

export default function FriendsPage() {
  const { navigate } = useApp();
  const [requests, setRequests] = useState(INITIAL_REQUESTS);
  const [friends, setFriends] = useState(INITIAL_FRIENDS);
  const [suggestions, _setSuggestions] = useState(SUGGESTIONS);
  const [addedSuggestions, setAddedSuggestions] = useState<Set<string>>(
    new Set(),
  );

  const acceptRequest = (id: string, name: string) => {
    const req = requests.find((r) => r.id === id);
    if (req) {
      setFriends((prev) => [
        ...prev,
        { id: req.id, name: req.name, online: true, initials: req.initials },
      ]);
      setRequests((prev) => prev.filter((r) => r.id !== id));
      toast.success(`${name} की friend request accept हो गई! ✓`);
    }
  };

  const declineRequest = (id: string, _name: string) => {
    setRequests((prev) => prev.filter((r) => r.id !== id));
    toast("Request decline हो गई");
  };

  const removeFriend = (id: string, name: string) => {
    setFriends((prev) => prev.filter((f) => f.id !== id));
    toast(`${name} को friend list से हटा दिया गया`);
  };

  const addSuggestion = (id: string, name: string) => {
    setAddedSuggestions((prev) => new Set([...prev, id]));
    toast.success(`${name} को friend request भेजी गई! 🤝`);
  };

  return (
    <div className="min-h-screen pb-24 pt-4">
      <div className="max-w-lg mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-5"
        >
          <div className="flex items-center gap-3 mb-1">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-komo-blue to-komo-purple flex items-center justify-center shadow-lg">
              <Users size={20} className="text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Friends</h1>
              <p className="text-xs text-muted-foreground">
                {friends.length} friends · {requests.length} requests
              </p>
            </div>
            {requests.length > 0 && (
              <Badge className="ml-auto bg-red-500 text-white border-0 px-2 py-0.5 text-xs">
                {requests.length}
              </Badge>
            )}
          </div>
        </motion.div>

        <Tabs defaultValue="requests" className="w-full">
          <TabsList className="w-full mb-4 bg-card/60 backdrop-blur-sm border border-border rounded-2xl p-1">
            <TabsTrigger
              value="requests"
              data-ocid="friends.requests.tab"
              className="flex-1 rounded-xl text-sm font-medium data-[state=active]:bg-gradient-to-r data-[state=active]:from-komo-blue data-[state=active]:to-komo-purple data-[state=active]:text-white"
            >
              Requests
              {requests.length > 0 && (
                <span className="ml-1.5 bg-red-500 text-white text-[10px] rounded-full w-4 h-4 inline-flex items-center justify-center">
                  {requests.length}
                </span>
              )}
            </TabsTrigger>
            <TabsTrigger
              value="friends"
              data-ocid="friends.friends.tab"
              className="flex-1 rounded-xl text-sm font-medium data-[state=active]:bg-gradient-to-r data-[state=active]:from-komo-blue data-[state=active]:to-komo-purple data-[state=active]:text-white"
            >
              Friends
            </TabsTrigger>
            <TabsTrigger
              value="suggestions"
              data-ocid="friends.suggestions.tab"
              className="flex-1 rounded-xl text-sm font-medium data-[state=active]:bg-gradient-to-r data-[state=active]:from-komo-blue data-[state=active]:to-komo-purple data-[state=active]:text-white"
            >
              Suggestions
            </TabsTrigger>
          </TabsList>

          {/* REQUESTS TAB */}
          <TabsContent value="requests" className="space-y-3">
            {requests.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                data-ocid="friends.requests.empty_state"
                className="text-center py-16 text-muted-foreground"
              >
                <UserPlus size={40} className="mx-auto mb-3 opacity-30" />
                <p className="font-medium">कोई pending request नहीं है</p>
                <p className="text-sm mt-1">नए लोगों से connect करें!</p>
              </motion.div>
            ) : (
              requests.map((req, idx) => (
                <motion.div
                  key={req.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: idx * 0.07 }}
                  data-ocid={`friends.requests.item.${idx + 1}`}
                >
                  <Card className="border border-border/50 bg-card/80 backdrop-blur-sm shadow-sm rounded-2xl overflow-hidden">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-12 h-12 rounded-full bg-gradient-to-br ${getColor(idx)} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                        >
                          {req.initials}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-foreground text-sm">
                            {req.name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {req.mutual} mutual friends
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            data-ocid={`friends.requests.accept.button.${idx + 1}`}
                            onClick={() => acceptRequest(req.id, req.name)}
                            className="h-8 px-3 text-xs bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white border-0 rounded-xl"
                          >
                            <UserCheck size={13} className="mr-1" />
                            Accept
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            data-ocid={`friends.requests.decline.button.${idx + 1}`}
                            onClick={() => declineRequest(req.id, req.name)}
                            className="h-8 px-3 text-xs border-red-400/60 text-red-400 hover:bg-red-500/10 rounded-xl"
                          >
                            Decline
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))
            )}
          </TabsContent>

          {/* FRIENDS TAB */}
          <TabsContent value="friends" className="space-y-3">
            {friends.length === 0 ? (
              <div
                data-ocid="friends.list.empty_state"
                className="text-center py-16 text-muted-foreground"
              >
                <Users size={40} className="mx-auto mb-3 opacity-30" />
                <p className="font-medium">अभी कोई friend नहीं है</p>
              </div>
            ) : (
              friends.map((friend, idx) => (
                <motion.div
                  key={friend.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.06 }}
                  data-ocid={`friends.list.item.${idx + 1}`}
                >
                  <Card className="border border-border/50 bg-card/80 backdrop-blur-sm shadow-sm rounded-2xl overflow-hidden">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="relative flex-shrink-0">
                          <div
                            className={`w-12 h-12 rounded-full bg-gradient-to-br ${getColor(idx + 3)} flex items-center justify-center text-white font-bold text-sm`}
                          >
                            {friend.initials}
                          </div>
                          {friend.online && (
                            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-background" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-foreground text-sm">
                            {friend.name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {friend.online ? "🟢 Online" : "⚫ Offline"}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            data-ocid={`friends.list.message.button.${idx + 1}`}
                            onClick={() => navigate("/chat")}
                            className="h-8 px-3 text-xs bg-gradient-to-r from-komo-blue to-komo-purple text-white border-0 rounded-xl"
                          >
                            <MessageCircle size={13} className="mr-1" />
                            Message
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            data-ocid={`friends.list.remove.button.${idx + 1}`}
                            onClick={() => removeFriend(friend.id, friend.name)}
                            className="h-8 w-8 p-0 text-muted-foreground hover:text-red-400 hover:bg-red-500/10 rounded-xl"
                          >
                            <UserMinus size={14} />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))
            )}
          </TabsContent>

          {/* SUGGESTIONS TAB */}
          <TabsContent value="suggestions" className="space-y-3">
            {suggestions.map((sug, idx) => (
              <motion.div
                key={sug.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.07 }}
                data-ocid={`friends.suggestions.item.${idx + 1}`}
              >
                <Card className="border border-border/50 bg-card/80 backdrop-blur-sm shadow-sm rounded-2xl overflow-hidden">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-12 h-12 rounded-full bg-gradient-to-br ${getColor(idx + 6)} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                      >
                        {sug.initials}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-foreground text-sm">
                          {sug.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {sug.mutual} mutual friends
                        </p>
                      </div>
                      <Button
                        size="sm"
                        disabled={addedSuggestions.has(sug.id)}
                        data-ocid={`friends.suggestions.add.button.${idx + 1}`}
                        onClick={() => addSuggestion(sug.id, sug.name)}
                        className={`h-8 px-3 text-xs rounded-xl border-0 ${
                          addedSuggestions.has(sug.id)
                            ? "bg-muted text-muted-foreground"
                            : "bg-gradient-to-r from-komo-blue to-komo-purple text-white"
                        }`}
                      >
                        {addedSuggestions.has(sug.id) ? (
                          <>
                            <UserCheck size={13} className="mr-1" />
                            Pending...
                          </>
                        ) : (
                          <>
                            <UserPlus size={13} className="mr-1" />
                            Add Friend
                          </>
                        )}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
