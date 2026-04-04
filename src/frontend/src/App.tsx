import { Toaster } from "@/components/ui/sonner";
import { Suspense, lazy, useEffect, useRef } from "react";
import BottomNav from "./components/layout/BottomNav";
import FAB from "./components/layout/FAB";
import TopBar from "./components/layout/TopBar";
import CameraReelModal from "./components/modals/CameraReelModal";
import CreatePostModal from "./components/modals/CreatePostModal";
import CreateStoryModal from "./components/modals/CreateStoryModal";
import FullMusicPlayer from "./components/music/FullMusicPlayer";
import MiniMusicPlayer from "./components/music/MiniMusicPlayer";
import { AppProvider, useApp } from "./context/AppContext";
import { LanguageProvider } from "./context/LanguageContext";
import { MusicPlayerProvider } from "./context/MusicPlayerContext";
import Login from "./pages/Login";

const Home = lazy(() => import("./pages/Home"));
const Explore = lazy(() => import("./pages/Explore"));
const Notifications = lazy(() => import("./pages/Notifications"));
const Profile = lazy(() => import("./pages/Profile"));
const Marketplace = lazy(() => import("./pages/Marketplace"));
const Cart = lazy(() => import("./pages/Cart"));
const Admin = lazy(() => import("./pages/Admin"));
const Reels = lazy(() => import("./pages/Reels"));
const Academy = lazy(() => import("./pages/Academy"));
const WalletPage = lazy(() => import("./pages/Wallet"));
const CreatorDashboard = lazy(() => import("./pages/CreatorDashboard"));
const EarningAccount = lazy(() => import("./pages/EarningAccount"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsConditions = lazy(() => import("./pages/TermsConditions"));
const DataProtection = lazy(() => import("./pages/DataProtection"));
const Groups = lazy(() => import("./pages/Groups"));
const Watch = lazy(() => import("./pages/Watch"));
const HelpCenter = lazy(() => import("./pages/HelpCenter"));
const LanguageSettings = lazy(() => import("./pages/LanguageSettings"));
const FriendsPage = lazy(() => import("./pages/Friends"));
const ChatPage = lazy(() => import("./pages/Chat"));
const CommunityGuidelines = lazy(() => import("./pages/CommunityGuidelines"));
const Settings = lazy(() => import("./pages/Settings"));
const PrivacyCenter = lazy(() => import("./pages/PrivacyCenter"));
const CreatorStudio = lazy(() => import("./pages/CreatorStudio"));
const DigitalMarket = lazy(() => import("./pages/DigitalMarket"));
const GroupVideoCall = lazy(() => import("./pages/GroupVideoCall"));
const LiveStream = lazy(() => import("./pages/LiveStream"));
const Events = lazy(() => import("./pages/Events"));
const VideoEditor = lazy(() => import("./pages/VideoEditor"));
const DonatePage = lazy(() => import("./pages/DonatePage"));
const CreatorPrivacy = lazy(() => import("./pages/CreatorPrivacy"));
const CountryDetect = lazy(() => import("./pages/CountryDetect"));
const ReelEditor = lazy(() => import("./pages/ReelEditor"));
const BusinessAccount = lazy(() => import("./pages/BusinessAccount"));
const PremiumSubscription = lazy(() => import("./pages/PremiumSubscription"));
const Memberships = lazy(() => import("./pages/Memberships"));
const MerchStore = lazy(() => import("./pages/MerchStore"));
const AdsTargeting = lazy(() => import("./pages/AdsTargeting"));
const MonetizationHub = lazy(() => import("./pages/MonetizationHub"));
const AIMusicStudio = lazy(() => import("./pages/AIMusicStudio"));

function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="w-10 h-10 rounded-full border-2 border-transparent border-t-komo-blue animate-spin" />
    </div>
  );
}

function Router() {
  const { currentPath, isLoggedIn, cameraReelOpen, setCameraReelOpen } =
    useApp();

  if (currentPath === "/privacy-policy") {
    return (
      <Suspense fallback={<PageLoader />}>
        <PrivacyPolicy />
      </Suspense>
    );
  }
  if (currentPath === "/terms") {
    return (
      <Suspense fallback={<PageLoader />}>
        <TermsConditions />
      </Suspense>
    );
  }
  if (currentPath === "/data-protection") {
    return (
      <Suspense fallback={<PageLoader />}>
        <DataProtection />
      </Suspense>
    );
  }
  if (currentPath === "/help") {
    return (
      <Suspense fallback={<PageLoader />}>
        <HelpCenter />
      </Suspense>
    );
  }
  if (currentPath === "/language") {
    return (
      <Suspense fallback={<PageLoader />}>
        <LanguageSettings />
      </Suspense>
    );
  }
  if (currentPath === "/community-guidelines") {
    return (
      <Suspense fallback={<PageLoader />}>
        <CommunityGuidelines />
      </Suspense>
    );
  }
  if (currentPath === "/privacy-center") {
    return (
      <Suspense fallback={<PageLoader />}>
        <PrivacyCenter />
      </Suspense>
    );
  }
  if (currentPath === "/donate") {
    return (
      <Suspense fallback={<PageLoader />}>
        <DonatePage />
      </Suspense>
    );
  }

  if (!isLoggedIn) {
    return <Login />;
  }

  const renderPage = () => {
    if (currentPath === "/" || currentPath === "") return <Home />;
    if (currentPath === "/explore") return <Explore />;
    if (currentPath === "/notifications") return <Notifications />;
    if (currentPath.startsWith("/profile")) return <Profile />;
    if (currentPath === "/marketplace") return <Marketplace />;
    if (currentPath === "/cart") return <Cart />;
    if (currentPath === "/admin") return <Admin />;
    if (currentPath === "/reels") return <Reels />;
    if (currentPath === "/academy") return <Academy />;
    if (currentPath === "/wallet") return <WalletPage />;
    if (currentPath === "/creator") return <CreatorDashboard />;
    if (currentPath === "/earning-account") return <EarningAccount />;
    if (currentPath === "/business-account") return <BusinessAccount />;
    if (currentPath === "/groups") return <Groups />;
    if (currentPath === "/watch") return <Watch />;
    if (currentPath === "/friends") return <FriendsPage />;
    if (currentPath === "/chat") return <ChatPage />;
    if (currentPath === "/settings") return <Settings />;
    if (currentPath === "/creator-studio") return <CreatorStudio />;
    if (currentPath === "/digital-market") return <DigitalMarket />;
    if (currentPath === "/group-call") return <GroupVideoCall />;
    if (currentPath === "/live") return <LiveStream />;
    if (currentPath === "/video-editor") return <VideoEditor />;
    if (currentPath === "/events") return <Events />;
    if (currentPath === "/donate") return <DonatePage />;
    if (currentPath === "/creator-privacy") return <CreatorPrivacy />;
    if (currentPath === "/country-detect") return <CountryDetect />;
    if (currentPath === "/reel-editor") return <ReelEditor />;
    if (currentPath === "/premium") return <PremiumSubscription />;
    if (currentPath === "/memberships") return <Memberships />;
    if (currentPath === "/merch") return <MerchStore />;
    if (currentPath === "/ads-targeting") return <AdsTargeting />;
    if (currentPath === "/monetization") return <MonetizationHub />;
    if (currentPath === "/ai-music-studio") return <AIMusicStudio />;
    return <Home />;
  };

  return (
    <div
      className="min-h-screen bg-[#0B0F14]"
      style={{
        background: "linear-gradient(180deg, #0B0F14 0%, #11161D 100%)",
      }}
    >
      <TopBar />
      <main className="pt-16 pb-20">
        <Suspense fallback={<PageLoader />}>{renderPage()}</Suspense>
      </main>
      <BottomNav />
      <FAB />
      <CreatePostModal />
      <CreateStoryModal />
      <CameraReelModal
        open={cameraReelOpen}
        onClose={() => setCameraReelOpen(false)}
      />
      {/* Global Music Player */}
      <MiniMusicPlayer />
      <FullMusicPlayer />
    </div>
  );
}

export default function App() {
  const wakeLockRef = useRef<WakeLockSentinel | null>(null);

  useEffect(() => {
    const requestWakeLock = async () => {
      try {
        if ("wakeLock" in navigator) {
          wakeLockRef.current = await (
            navigator as Navigator & {
              wakeLock: {
                request: (type: string) => Promise<WakeLockSentinel>;
              };
            }
          ).wakeLock.request("screen");
        }
      } catch {
        // Wake Lock not supported or denied
      }
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        requestWakeLock();
      }
    };

    requestWakeLock();
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      wakeLockRef.current?.release();
    };
  }, []);

  return (
    <LanguageProvider>
      <AppProvider>
        <MusicPlayerProvider>
          <Router />
          <Toaster position="top-center" theme="dark" />
        </MusicPlayerProvider>
      </AppProvider>
    </LanguageProvider>
  );
}
