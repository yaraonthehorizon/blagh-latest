import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { ThemeProvider } from "@/providers/ThemeProvider";
import BottomNav from "@/components/BottomNav";
import Index from "./pages/Index";
import { Knowledge, KnowledgeCategory } from "./pages/Knowledge";
import Baligh from "./pages/Baligh";
import NotFound from "./pages/NotFound";
import { Athkar } from "./pages/Athkar";
import Hadith from "./pages/Hadith";
import { useState } from "react";
import { MoreApps } from "./pages/MoreApps";
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
  Services,
} from "./pages/Services/index";
import { AudioPlayerProvider } from "./providers/AudioPlayerProvider";
import { GlobalAudioPlayer } from "./components/global/GlobalAudioPlayer";
import { Recitations, RecitationsCategory } from "./pages/Recitations";
import { KnowledgeItemPage } from "./pages/Knowledge/KnowledgeItemPage";
import { KnowledgeSubcategory } from "./pages/Knowledge/KnowledgeSubcategory";
import { GlobalScrollToTop } from "./components/global/GlobalScrollToTop";

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
    <AudioPlayerProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <ThemeProvider
            defaultTheme={{
              mode: "system",
              accent: "green",
            }}
          >
            {showSplash ? (
              <SplashScreen onComplete={() => setShowSplash(false)} />
            ) : (
              <>
                <Toaster />
                <Sonner />
                <AuthProvider>
                  <BrowserRouter basename={import.meta.env.BASE_URL}>
                    <GlobalScrollToTop />
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
                        <Route
                          path="/knowledge/:categoryId"
                          element={<KnowledgeCategory />}
                        />
                        <Route
                          path="/knowledge/:categoryId/:subCategoryId"
                          element={<KnowledgeSubcategory />}
                        />

                        <Route
                          path="/knowledge/:categoryId/:subCategoryId/:itemId"
                          element={<KnowledgeItemPage />}
                        />
                        <Route path="/baligh" element={<Baligh />} />
                        <Route path="/children" element={<Children />} />
                        <Route
                          path="/children/:categoryId"
                          element={<ChildrenCategory />}
                        />
                        <Route path="/recitations" element={<Recitations />} />
                        <Route
                          path="/recitations/:categoryId"
                          element={<RecitationsCategory />}
                        />
                        <Route path="/profile" element={<Profile />} />
                        <Route
                          path="/services/send-gift"
                          element={<SendGift />}
                        />
                        <Route path="/services" element={<Services />} />
                        <Route
                          path="/services/send-greeting"
                          element={<SendGreetingCard />}
                        />
                        <Route
                          path="/services/send-quran-card"
                          element={<SendQuranCard />}
                        />
                        <Route
                          path="/services/companionship"
                          element={<Companionship />}
                        />
                        <Route path="/more-apps" element={<MoreApps />} />
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
      <GlobalAudioPlayer />
    </AudioPlayerProvider>
  );
};

export default App;
