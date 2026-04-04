import { Button } from "@/components/ui/button";
import {
  Bell,
  Globe,
  MessageCircle,
  Search,
  ShoppingCart,
  X,
} from "lucide-react";
import { useState } from "react";
import { useApp } from "../../context/AppContext";
import { useLanguage } from "../../context/LanguageContext";
import { LANGUAGES } from "../../i18n/translations";

export default function TopBar() {
  const { navigate, unreadNotifs, cartCount, currentUser } = useApp();
  const { lang } = useLanguage();
  const [searchVal, setSearchVal] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);

  const initials = currentUser
    ? (currentUser.displayName || currentUser.username || "U")
        .slice(0, 2)
        .toUpperCase()
    : "U";

  const currentLang = LANGUAGES.find((l) => l.code === lang);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 glass-effect">
      <div className="max-w-6xl mx-auto h-full flex items-center gap-3 px-4">
        {/* Logo */}
        <button
          type="button"
          data-ocid="nav.home.link"
          onClick={() => navigate("/")}
          className="flex items-center gap-2 flex-shrink-0 group"
        >
          <div className="w-9 h-9 rounded-xl komo-gradient flex items-center justify-center shadow-glow">
            <img
              src="/assets/generated/komofast-logo-transparent.dim_80x80.png"
              alt="K"
              className="w-6 h-6 object-contain"
            />
          </div>
          <span className="hidden sm:block font-bold text-[15px] komo-gradient-text whitespace-nowrap">
            Komofast Social
          </span>
        </button>

        {/* Search */}
        <div className="flex-1 max-w-md mx-auto relative">
          <div
            className={`flex items-center gap-2 px-4 py-2 rounded-full bg-[#202632] border transition-all ${
              searchFocused
                ? "border-komo-blue shadow-glow"
                : "border-[#2A313C]"
            }`}
          >
            <Search size={15} className="text-komo-text-muted flex-shrink-0" />
            <input
              data-ocid="topbar.search_input"
              type="text"
              placeholder="Search people, posts, topics..."
              value={searchVal}
              onChange={(e) => setSearchVal(e.target.value)}
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
              className="flex-1 bg-transparent text-sm text-foreground placeholder:text-komo-text-muted outline-none min-w-0"
            />
            {searchVal && (
              <button
                type="button"
                onClick={() => setSearchVal("")}
                className="text-komo-text-muted hover:text-foreground"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>

        {/* Right icons */}
        <div className="flex items-center gap-1 flex-shrink-0">
          {/* Language shortcut */}
          <Button
            data-ocid="topbar.language.button"
            variant="ghost"
            size="icon"
            title={`Language: ${currentLang?.native ?? lang}`}
            className="w-9 h-9 rounded-full hover:bg-accent text-komo-text-secondary hover:text-komo-blue transition-colors"
            onClick={() => navigate("/language")}
          >
            <Globe size={17} />
          </Button>

          <Button
            data-ocid="topbar.notifications.button"
            variant="ghost"
            size="icon"
            className="relative w-9 h-9 rounded-full hover:bg-accent text-komo-text-secondary hover:text-foreground"
            onClick={() => navigate("/notifications")}
          >
            <Bell size={19} />
            {unreadNotifs > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-4.5 h-4.5 text-[10px] font-bold bg-komo-blue rounded-full flex items-center justify-center text-white min-w-[18px] min-h-[18px]">
                {unreadNotifs > 9 ? "9+" : unreadNotifs}
              </span>
            )}
          </Button>

          <Button
            data-ocid="topbar.messages.button"
            variant="ghost"
            size="icon"
            onClick={() => navigate("/chat")}
            className="relative w-9 h-9 rounded-full hover:bg-accent text-komo-text-secondary hover:text-foreground"
          >
            <MessageCircle size={19} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
          </Button>

          <Button
            data-ocid="topbar.cart.button"
            variant="ghost"
            size="icon"
            className="relative w-9 h-9 rounded-full hover:bg-accent text-komo-text-secondary hover:text-foreground"
            onClick={() => navigate("/cart")}
          >
            <ShoppingCart size={19} />
            {cartCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-4.5 h-4.5 text-[10px] font-bold bg-komo-purple rounded-full flex items-center justify-center text-white min-w-[18px] min-h-[18px]">
                {cartCount}
              </span>
            )}
          </Button>

          {/* User avatar */}
          <button
            type="button"
            data-ocid="topbar.profile.button"
            onClick={() => navigate("/profile")}
            className="w-8 h-8 rounded-full flex items-center justify-center text-[12px] font-bold text-white flex-shrink-0 ml-1 ring-2 ring-komo-blue/50 hover:ring-komo-blue transition-all"
            style={{ background: "linear-gradient(135deg, #2FA8FF, #A855F7)" }}
          >
            {initials}
          </button>
        </div>
      </div>
    </header>
  );
}
