import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import HomePage from './pages/home/home-page.js';
import EventsPage from './pages/events/events-page.js';
import KickingGamesPage from "./pages/footbag-games/kicking-games/kicking-games-page.js";
import FreestylePage from "./pages/footbag-games/freestyle/freestyle-page.js";
import NetPage from "./pages/footbag-games/net/net-page.js";
import AboutPage from "./pages/about/about-page.js";
import NotFoundPage from "./pages/404/404-page.js";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/events" element={<EventsPage />} />
      <Route path="/games/kicking" element={<KickingGamesPage />} />
      <Route path="/games/freestyle" element={<FreestylePage />} />
      <Route path="/games/net" element={<NetPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

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

export { AppRoutes, ScrollToTop };
