import {
  type ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import type { UserProfile, UserRole } from "../backend.d";
import { useActor } from "../hooks/useActor";

export type ReportedItem = {
  id: string;
  type: "post" | "user";
  targetId: string;
  targetUsername: string;
  category: "fake_news" | "adult_content" | "hate_speech" | "spam" | "other";
  description?: string;
  reportedBy: string;
  timestamp: Date;
  status: "pending" | "removed" | "dismissed";
};

interface AppContextValue {
  currentUser: UserProfile | null;
  setCurrentUser: (u: UserProfile | null) => void;
  userRole: UserRole | null;
  isAdmin: boolean;
  cartCount: number;
  setCartCount: (n: number | ((prev: number) => number)) => void;
  unreadNotifs: number;
  setUnreadNotifs: (n: number | ((prev: number) => number)) => void;
  navigate: (to: string, params?: Record<string, string>) => void;
  currentPath: string;
  currentParams: Record<string, string>;
  createPostOpen: boolean;
  setCreatePostOpen: (v: boolean) => void;
  createStoryOpen: boolean;
  setCreateStoryOpen: (v: boolean) => void;
  createPostInitialType: "post" | "reel";
  cameraReelOpen: boolean;
  setCameraReelOpen: (v: boolean) => void;
  setCreatePostInitialType: (v: "post" | "reel") => void;
  isLoggedIn: boolean;
  login: (phone: string, name?: string) => void;
  logout: () => void;
  // Moderation
  blockedUsers: string[];
  reportedItems: ReportedItem[];
  bannedUsers: string[];
  blockUser: (username: string) => void;
  unblockUser: (username: string) => void;
  reportItem: (item: ReportedItem) => void;
  banUser: (username: string) => void;
  unbanUser: (username: string) => void;
  updateReportStatus: (
    id: string,
    status: "pending" | "removed" | "dismissed",
  ) => void;
}

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(null);
  const [userRole, setUserRole] = useState<UserRole | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [unreadNotifs, setUnreadNotifs] = useState(3);
  const [createPostOpen, setCreatePostOpen] = useState(false);
  const [createStoryOpen, setCreateStoryOpen] = useState(false);
  const [cameraReelOpen, setCameraReelOpen] = useState(false);
  const [createPostInitialType, setCreatePostInitialType] = useState<
    "post" | "reel"
  >("post");
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [currentParams, setCurrentParams] = useState<Record<string, string>>(
    {},
  );
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("komo_logged_in") === "true";
  });
  const [mockPhone, setMockPhone] = useState(() => {
    return localStorage.getItem("komo_phone") || "";
  });

  // Moderation state
  const [blockedUsers, setBlockedUsers] = useState<string[]>([]);
  const [bannedUsers, setBannedUsers] = useState<string[]>([]);
  const [reportedItems, setReportedItems] = useState<ReportedItem[]>([
    {
      id: "r1",
      type: "post",
      targetId: "post_123",
      targetUsername: "fake_news_spreader",
      category: "fake_news",
      description: "This post contains misinformation about health topics.",
      reportedBy: "komofast_user",
      timestamp: new Date(Date.now() - 1000 * 60 * 30),
      status: "pending",
    },
    {
      id: "r2",
      type: "post",
      targetId: "post_456",
      targetUsername: "spammer99",
      category: "adult_content",
      description: "Post contains inappropriate adult content.",
      reportedBy: "travel_riya",
      timestamp: new Date(Date.now() - 1000 * 60 * 90),
      status: "pending",
    },
    {
      id: "r3",
      type: "user",
      targetId: "hateful_user",
      targetUsername: "hateful_user",
      category: "hate_speech",
      description:
        "User consistently posts hateful comments targeting communities.",
      reportedBy: "alex_creates",
      timestamp: new Date(Date.now() - 1000 * 60 * 180),
      status: "pending",
    },
    {
      id: "r4",
      type: "post",
      targetId: "post_789",
      targetUsername: "spambot_01",
      category: "spam",
      description: "Repeated promotional spam posts.",
      reportedBy: "nova_beats",
      timestamp: new Date(Date.now() - 1000 * 60 * 300),
      status: "pending",
    },
  ]);

  const { actor, isFetching } = useActor();

  // Force dark mode
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  // Listen for popstate
  useEffect(() => {
    const handler = () => {
      setCurrentPath(window.location.pathname);
      const url = new URL(window.location.href);
      const params: Record<string, string> = {};
      url.searchParams.forEach((v, k) => {
        params[k] = v;
      });
      setCurrentParams(params);
    };
    window.addEventListener("popstate", handler);
    return () => window.removeEventListener("popstate", handler);
  }, []);

  // Load user profile
  useEffect(() => {
    if (!actor || isFetching) return;
    Promise.all([
      actor.getCallerUserProfile(),
      actor.isCallerAdmin(),
      actor.getCallerUserRole(),
      actor.getUnreadNotificationCount(),
      actor.getCart(),
    ])
      .then(([profile, adminStatus, role, notifCount, cart]) => {
        setCurrentUser(profile);
        setIsAdmin(adminStatus);
        setUserRole(role);
        setUnreadNotifs(Number(notifCount));
        setCartCount(cart.length);
      })
      .catch(() => {});
  }, [actor, isFetching]);

  // Set mock user when logged in via phone
  useEffect(() => {
    if (isLoggedIn && mockPhone && !currentUser) {
      const username = mockPhone.replace("+91", "");
      const storedName = localStorage.getItem("komo_name");
      setCurrentUser({
        id: "mock_user",
        username: `user_${username.slice(-4)}`,
        displayName: storedName || `User ${username.slice(-4)}`,
        bio: "New to Komofast Social!",
        isCreator: false,
        profilePicture: [],
        followerCount: BigInt(0),
        followingCount: BigInt(0),
        postCount: BigInt(0),
        createdAt: BigInt(Date.now()),
      } as any);
    }
  }, [isLoggedIn, mockPhone, currentUser]);

  const login = (phone: string, name?: string) => {
    if (name) {
      localStorage.setItem("komo_name", name);
    }
    localStorage.setItem("komo_logged_in", "true");
    localStorage.setItem("komo_phone", phone);
    setMockPhone(phone);
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem("komo_logged_in");
    localStorage.removeItem("komo_phone");
    localStorage.removeItem("komo_name");
    setIsLoggedIn(false);
    setMockPhone("");
    setCurrentUser(null);
  };

  const navigate = (to: string, params?: Record<string, string>) => {
    let url = to;
    if (params && Object.keys(params).length > 0) {
      const searchParams = new URLSearchParams(params);
      url = `${to}?${searchParams.toString()}`;
    }
    window.history.pushState({}, "", url);
    setCurrentPath(to);
    setCurrentParams(params || {});
    window.scrollTo(0, 0);
  };

  const blockUser = (username: string) => {
    setBlockedUsers((prev) =>
      prev.includes(username) ? prev : [...prev, username],
    );
  };

  const unblockUser = (username: string) => {
    setBlockedUsers((prev) => prev.filter((u) => u !== username));
  };

  const reportItem = (item: ReportedItem) => {
    setReportedItems((prev) => [...prev, item]);
  };

  const banUser = (username: string) => {
    setBannedUsers((prev) =>
      prev.includes(username) ? prev : [...prev, username],
    );
  };

  const unbanUser = (username: string) => {
    setBannedUsers((prev) => prev.filter((u) => u !== username));
  };

  const updateReportStatus = (
    id: string,
    status: "pending" | "removed" | "dismissed",
  ) => {
    setReportedItems((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status } : r)),
    );
  };

  return (
    <AppContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        userRole,
        isAdmin,
        cartCount,
        setCartCount,
        unreadNotifs,
        setUnreadNotifs,
        navigate,
        currentPath,
        currentParams,
        createPostOpen,
        setCreatePostOpen,
        createStoryOpen,
        setCreateStoryOpen,
        createPostInitialType,
        setCreatePostInitialType,
        cameraReelOpen,
        setCameraReelOpen,
        isLoggedIn,
        login,
        logout,
        blockedUsers,
        reportedItems,
        bannedUsers,
        blockUser,
        unblockUser,
        reportItem,
        banUser,
        unbanUser,
        updateReportStatus,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
