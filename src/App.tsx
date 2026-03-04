import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { ThemeProvider } from "@/providers/ThemeProvider";
import BottomNav from "@/components/BottomNav";
import Index from "./pages/Index";
import Knowledge from "./pages/Knowledge";
import Baligh from "./pages/Baligh";
import NotFound from "./pages/NotFound";
import { Athkar } from "./pages/Athkar";
import Hadith from "./pages/Hadith";
import { useState } from "react";
import { SplashScreen } from "@/components/SplashScreen";
import { Profile } from "./pages/Profile";
import { FloatingActionButton } from "@/components/FloatingActionButton";
import { Children, ChildrenCategory } from "./pages/Children/index";
import { Quran, SurahDetail } from "./pages/Quran/";
import { Login, SignUp, OTP } from "./pages/auth/index";
import "@/lib/i18n/init";
import {
  SendGift,
  SendGreetingCard,
  SendQuranCard,
  Companionship,
} from "./pages/Profile/Services/index";

const queryClient = new QueryClient();

const MainLayout = () => {
  return (
    <>
      <Outlet />
      <FloatingActionButton />
      <BottomNav />
    </>
  );
};

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
          {showSplash ? (
            <SplashScreen onComplete={() => setShowSplash(false)} />
          ) : (
            <>
              <Toaster />
              <Sonner />
              <AuthProvider>
                <BrowserRouter basename={import.meta.env.VITE_BASE_PATH}>
                  <Routes>
                    <Route element={<MainLayout />}>
                      <Route path="/" element={<Index />} />
                      <Route path="/quran" element={<Quran />} />
                      <Route
                        path="/quran/:surahNumber"
                        element={<SurahDetail />}
                      />
                      <Route path="/hadith" element={<Hadith />} />
                      <Route path="/athkar" element={<Athkar />} />
                      <Route path="/knowledge" element={<Knowledge />} />
                      <Route path="/baligh" element={<Baligh />} />
                      <Route path="/children" element={<Children />} />
                      <Route
                        path="/children/:categoryId"
                        element={<ChildrenCategory />}
                      />
                      <Route path="/profile" element={<Profile />} />
                      <Route path="/send-gift" element={<SendGift />} />
                      <Route
                        path="/send-greeting"
                        element={<SendGreetingCard />}
                      />
                      <Route
                        path="/send-quran-card"
                        element={<SendQuranCard />}
                      />
                      <Route
                        path="/companionship"
                        element={<Companionship />}
                      />
                    </Route>
                    <Route path="/auth/login" element={<Login />} />
                    <Route path="/auth/signup" element={<SignUp />} />
                    <Route path="/auth/otp" element={<OTP />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </BrowserRouter>
              </AuthProvider>
            </>
          )}
        </ThemeProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
