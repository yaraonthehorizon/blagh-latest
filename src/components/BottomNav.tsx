import React from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";

export default function BottomNav() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };
  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-lg bg-nav-bg backdrop-blur-[22px] border-t border-nav-bdr py-3 pb-[26px] flex justify-around z-[200]">
      <NavItem
        icon={
          <>
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </>
        }
        label={t("bottom_nav.home")}
        active={isActive("/")}
        onClick={() => navigate("/")}
      />
      <NavItem
        icon={
          <>
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
          </>
        }
        label={t("bottom_nav.quran")}
        active={isActive("/quran")}
        onClick={() => navigate("/quran")}
      />
      <NavItem
        icon={
          <>
            <circle cx="12" cy="12" r="10" />
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </>
        }
        label={t("bottom_nav.explore")}
        active={isActive("/knowledge")}
        onClick={() => navigate("/knowledge")}
      />
      <NavItem
        icon={<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />}
        label={t("bottom_nav.bookmarks")}
        active={isActive("/bookmarks")}
        onClick={() => navigate("/bookmarks")}
      />
      <NavItem
        icon={
          <>
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </>
        }
        label={t("bottom_nav.profile")}
        active={isActive("/profile")}
        onClick={() => navigate("/profile")}
      />
    </nav>
  );
}

function NavItem({
  icon,
  label,
  active,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className={`flex flex-col items-center gap-1 cursor-pointer py-[2px] px-4 transition-transform active:scale-[0.88] ${active ? "text-nav-act" : "text-nav-muted"}`}
    >
      <svg
        width="22"
        height="22"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        {icon}
      </svg>
      {active && <div className="w-1 h-1 rounded-full bg-nav-act"></div>}
      <span
        className={`text-[10px] font-medium ${active ? "text-nav-act" : "text-nav-muted"}`}
      >
        {label}
      </span>
    </div>
  );
}
