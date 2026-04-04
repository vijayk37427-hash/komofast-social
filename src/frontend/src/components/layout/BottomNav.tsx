import { Compass, Film, Home, User, UserPlus } from "lucide-react";
import { useApp } from "../../context/AppContext";

const PENDING_REQUESTS = 3;

const NAV_ITEMS = [
  { label: "Home", icon: Home, path: "/" },
  { label: "Explore", icon: Compass, path: "/explore" },
  { label: "Reels", icon: Film, path: "/reels" },
  { label: "Friends", icon: UserPlus, path: "/friends" },
  { label: "Profile", icon: User, path: "/profile" },
];

export default function BottomNav() {
  const { navigate, currentPath } = useApp();

  const isActive = (path: string) => {
    if (path === "/") return currentPath === "/" || currentPath === "";
    return currentPath.startsWith(path);
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 h-16 glass-nav">
      <div className="max-w-6xl mx-auto h-full flex items-center justify-around px-2">
        {NAV_ITEMS.map((item) => {
          const active = isActive(item.path);
          const isReels = item.label === "Reels";
          const isFriends = item.label === "Friends";

          return (
            <button
              type="button"
              key={item.path}
              data-ocid={`nav.${item.label.toLowerCase()}.link`}
              onClick={() => navigate(item.path)}
              className="flex flex-col items-center gap-0.5 px-3 py-1 relative"
            >
              <div
                className={`relative ${
                  isReels
                    ? active
                      ? "text-purple-400"
                      : "text-komo-text-secondary"
                    : active
                      ? "text-komo-blue"
                      : "text-komo-text-secondary"
                }`}
              >
                {isReels ? (
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      active ? "opacity-100" : "opacity-60"
                    }`}
                    style={{
                      background: active
                        ? "linear-gradient(135deg, #A855F7, #EC4899)"
                        : "transparent",
                    }}
                  >
                    <Film
                      size={20}
                      className="text-white"
                      strokeWidth={active ? 2.5 : 1.8}
                    />
                  </div>
                ) : (
                  <>
                    <item.icon size={22} strokeWidth={active ? 2.5 : 1.8} />
                    {isFriends && PENDING_REQUESTS > 0 && !active && (
                      <span className="absolute -top-1 -right-1.5 w-4 h-4 bg-red-500 rounded-full text-[9px] text-white flex items-center justify-center font-bold border border-background">
                        {PENDING_REQUESTS}
                      </span>
                    )}
                  </>
                )}
              </div>
              {!isReels && (
                <span
                  className={`text-[11px] font-medium ${
                    active ? "text-komo-blue" : "text-komo-text-muted"
                  }`}
                >
                  {item.label}
                </span>
              )}
              {active && !isReels && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-komo-blue" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
