import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoTransparent from '../assets/images/Logo_transparent.png';

export default function Loader({ isLoading }) {

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-20%" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] bg-[#0a0a0a] flex flex-col items-center justify-center"
        >
          <div className="flex flex-col items-center gap-4">
            <motion.img 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              src={logoTransparent} 
              alt="ALPHAONE" 
              className="h-24 md:h-32 w-auto opacity-90" 
            />
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
              className="font-syne text-[36px] md:text-[48px] font-extrabold tracking-tighter uppercase text-white m-0 leading-none"
            >
              ALPHAONE
            </motion.h1>
            <motion.div 
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 1.0 }}
              style={{ transformOrigin: "center" }}
              className="w-24 md:w-32 h-[3px] bg-accent mt-2"
            ></motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
