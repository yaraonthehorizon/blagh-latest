import { createContext, useEffect, useState } from "react";

type Mode = "light" | "dark" | "system";
type Accent = "green" | "gold";

type ThemeState = {
  mode: Mode;
  accent: Accent;
};

type ThemeProviderState = {
  theme: ThemeState;
  setTheme: (theme: ThemeState) => void;
};

export const ThemeProviderContext = createContext<ThemeProviderState | null>(
  null,
);

const STORAGE_KEY = "vite-ui-theme";

export function ThemeProvider({
  children,
  defaultTheme = {
    mode: "light",
    accent: "green",
  },
}: {
  children: React.ReactNode;
  defaultTheme?: ThemeState;
}) {
  const [theme, setThemeState] = useState<ThemeState>(() => {
    if (typeof window === "undefined") return defaultTheme;

    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : defaultTheme;
    } catch {
      return defaultTheme;
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const apply = () => {
      const mode =
        theme.mode === "system"
          ? media.matches
            ? "dark"
            : "light"
          : theme.mode;

      root.dataset.mode = mode;
      root.dataset.accent = theme.accent;
    };

    apply();

    const handler = () => {
      if (theme.mode === "system") apply();
    };

    media.addEventListener("change", handler);

    return () => media.removeEventListener("change", handler);
  }, [theme]);
  const setTheme = (newTheme: ThemeState) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newTheme));
    setThemeState(newTheme);
  };

  return (
    <ThemeProviderContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeProviderContext.Provider>
  );
}
