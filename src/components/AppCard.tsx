import React from "react";
import { cn } from "@/lib/utils";

interface AppCardProps {
  id?: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

export function AppCard({ children, onClick, className, style }: AppCardProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "bg-surface border border-bdr-p rounded-[22px] p-5 shadow flex items-center gap-4 cursor-pointer transition-transform active:scale-95 animate-fade-up",
        className,
      )}
      style={style}
    >
      {children}
    </div>
  );
}
