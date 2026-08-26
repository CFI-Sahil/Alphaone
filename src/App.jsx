import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Training from './pages/Training';
import Facilities from './pages/Facilities';
import Membership from './pages/Membership';
import About from './pages/About';
import NotFound from './pages/NotFound';
import PageWrapper from './components/PageWrapper';
import Loader from './components/Loader';

// ScrollToTop component to handle hash scrolling
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const prevPathname = useRef(pathname);
  const isFirstRender = useRef(true);

  useEffect(() => {
    // StrictMode double-mount protection for initial load
    if (isFirstRender.current) {
      isFirstRender.current = false;
      if (hash) {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
      return;
    }

    if (prevPathname.current !== pathname) {
      prevPathname.current = pathname;
      // Normal scroll to top is handled by AnimatePresence onExitComplete
      if (hash) {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);

  return null;
}

// Extract routes to use useLocation
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence
      mode="wait"
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/training" element={<PageWrapper><Training /></PageWrapper>} />
        <Route path="/facilities" element={<PageWrapper><Facilities /></PageWrapper>} />
        <Route path="/membership" element={<PageWrapper><Membership /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const [isAppLoading, setIsAppLoading] = useState(true);

  useEffect(() => {
    // Hide loader after a very short delay
    const timer = setTimeout(() => {
      setIsAppLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <Router>
      <Loader isLoading={isAppLoading} />
      <div className="noise-overlay"></div>
      <ScrollToTop />
      
      {!isAppLoading && (
        <div className="min-h-screen flex flex-col bg-surface text-on-surface antialiased overflow-x-clip">
          {/* Navbar */}
          <Navbar />

          {/* Page Content */}
          <main className="flex-grow">
            <AnimatedRoutes />
          </main>

          {/* Footer */}
          <Footer />
        </div>
      )}
    </Router>
  );
}
