import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import PageLayout from "./pages/page-layout/page-layout.js";

import HomePage from './pages/home/home-page.js';
import EventsPage from './pages/events/events-page.js';
import KickingGamesPage from "./pages/games/kicking-games/kicking-games-page.js";
import FreestylePage from "./pages/games/freestyle/freestyle-page.js";
import NetPage from "./pages/games/net/net-page.js";
import NotFoundPage from "./pages/404/404-page.js";

function ScrollToTop({ children }) {
  const { pathname } = useLocation();
  
  useEffect(() => {
    const canControlScrollRestoration = 'scrollRestoration' in window.history
    if (canControlScrollRestoration) {
      window.history.scrollRestoration = 'manual';
    }

    window.scrollTo(0, 0);
  }, [pathname]);
  
  return children;
}

function AppRoutes() {
  return (
    <Routes>
      <Route element={<PageLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/games/kicking" element={<KickingGamesPage />} />
        <Route path="/games/freestyle" element={<FreestylePage />} />
        <Route path="/games/net" element={<NetPage />} />
        {/* remove About page until the design is finalized */}
        {/* <Route path="/about" element={<AboutPage />} /> */}
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

function AppRouter() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default AppRouter;
