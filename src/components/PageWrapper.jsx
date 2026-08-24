import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const routeNames = {
  '/': 'HOME',
  '/training': 'TRAINING',
  '/facilities': 'FACILITIES',
  '/membership': 'MEMBERSHIP',
  '/about': 'ABOUT',
};

// Track initial load to prevent showing route loader alongside the global initial loader
let isInitialRender = true;

export default function PageWrapper({ children }) {
  const location = useLocation();
  const pageName = routeNames[location.pathname] || 'ALPHAONE';
  
  const [isFirst] = useState(isInitialRender);
  const [showOverlay, setShowOverlay] = useState(!isFirst);

  useEffect(() => {
    if (isInitialRender) {
      isInitialRender = false;
    }
  }, []);

  useEffect(() => {
    if (!showOverlay) return;
    const timer = setTimeout(() => {
      setShowOverlay(false);
    }, 700); // Overlay duration before sliding out
    return () => clearTimeout(timer);
  }, [showOverlay]);

  return (
    <>
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            key="route-overlay"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: "-10%" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[#0a0a0a] flex flex-col items-center justify-center pointer-events-none"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="flex flex-col items-center gap-2"
            >
              <h2 className="font-syne text-[20px] md:text-[24px] font-extrabold tracking-[0.3em] uppercase text-white m-0">
                {pageName}
              </h2>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.15 }}
                style={{ transformOrigin: "center" }}
                className="w-12 md:w-16 h-[2px] bg-accent mt-2"
              ></motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {!showOverlay && (
        <motion.div
          initial={{ opacity: 0, filter: 'blur(10px)', scale: 0.98 }}
          animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
          exit={{ opacity: 0, filter: 'blur(10px)', scale: 1.02 }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="w-full h-full"
        >
          {children}
        </motion.div>
      )}
    </>
  );
}
