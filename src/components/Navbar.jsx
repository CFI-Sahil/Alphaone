import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import logoTransparent from '../assets/images/Logo_transparent.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    
    // Always revert to normal at the very top
    if (latest <= 50) {
      setIsScrolled(false);
      return;
    }

    if (latest < previous) {
      // Scrolling UP -> Expand back to normal
      setIsScrolled(false);
    } else if (latest > 50 && latest > previous) {
      // Scrolling DOWN past 50px -> Shrink to compact
      setIsScrolled(true);
    }
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'TRAINING', path: '/training' },
    { name: 'FACILITIES', path: '/facilities' },
    { name: 'MEMBERSHIP', path: '/membership' },
    { name: 'ABOUT', path: '/about' }, // About page is last!
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: { 
        duration: 0.5, ease: [0.22, 1, 0.36, 1], 
        when: "afterChildren", staggerChildren: 0.05, staggerDirection: -1 
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], when: "beforeChildren", staggerChildren: 0.05 }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
  };
  
  const logoVariants = {
    closed: { opacity: 0 },
    open: { opacity: 0.2, transition: { duration: 1, ease: "easeOut" } }
  };

  return (
    <>
      <header className={`sticky top-0 z-50 border-b transition-all duration-300 ${isOpen ? 'bg-[#0a0a0a] border-white/10 backdrop-blur-md' : 'bg-[rgba(10,10,10,0.92)] border-outline-variant/30 backdrop-blur-md shadow-lg'}`}>
        <div className={`flex justify-between items-center w-full px-4 md:px-6 max-w-container-max mx-auto transition-all duration-300 ${isScrolled ? 'py-2' : 'py-5'}`}>
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <motion.img
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              alt="ALPHAONE Logo"
              className={`w-auto transition-all duration-500 ${isScrolled ? 'h-9 md:h-11' : 'h-12 md:h-14'}`}
              whileHover={{ scale: 0.95 }}
              src={logoTransparent}
            />

            <div className="overflow-hidden py-1">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={`block font-syne text-[20px] md:text-[24px] font-extrabold tracking-tighter uppercase transition-colors ${isOpen ? 'text-white' : 'text-on-surface'}`}
              >
                ALPHAONE
              </motion.span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <div key={item.name} className="overflow-hidden py-1 -my-1">
                <motion.div
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 + (index * 0.08), ease: [0.22, 1, 0.36, 1] }}
                >
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `block font-geist text-[12px] tracking-widest font-semibold uppercase hover:text-accent transition-colors nav-link ${isActive ? 'active text-accent' : 'text-white'
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </motion.div>
              </div>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="hidden sm:block"
            >
              <Link
                to="/membership#trial"
                className="btn-slide-fill inline-flex items-center justify-center bg-ivory text-surface font-geist text-[12px] tracking-widest font-bold uppercase px-4 md:px-6 py-3 transition-all duration-300 active:scale-95"
              >
                BOOK FREE TRIAL
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden"
            >
              <button
                aria-label="Toggle Menu"
                className={`relative w-12 h-12 flex items-center justify-center hover:text-accent transition-colors focus:outline-none ${isOpen ? 'text-white' : 'text-on-surface'}`}
                onClick={() => setIsOpen(!isOpen)}
              >
                <div className="flex flex-col items-end gap-1.5 w-6">
                  <motion.span
                    animate={isOpen ? { rotate: 45, y: 8, backgroundColor: "#ffffff" } : { rotate: 0, y: 0, backgroundColor: "currentColor" }}
                    className="block h-[2px] w-full bg-current transition-colors"
                  />
                  <motion.span
                    animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                    className="block h-[2px] w-4/5 bg-current transition-colors"
                  />
                  <motion.span
                    animate={isOpen ? { rotate: -45, y: -8, width: "100%", backgroundColor: "#ffffff" } : { rotate: 0, y: 0, width: "100%", backgroundColor: "currentColor" }}
                    className="block h-[2px] bg-current transition-colors"
                  />
                </div>
              </button>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-40 bg-[#0a0a0a] pt-20 text-white flex flex-col md:hidden overflow-hidden"
          >
            {/* Subtle Background Logo */}
            <motion.div variants={logoVariants} className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden mix-blend-screen pt-20">
              <img
                src={logoTransparent}
                alt=""
                className="w-48 md:w-64 object-contain grayscale"
              />
            </motion.div>

            {/* Overlay Navigation Links */}
            <div className="flex-1 flex flex-col justify-center px-8 relative z-10 mt-8">
              <nav className="flex flex-col gap-10">
                {navItems.map((item, index) => {
                  const num = String(index + 1).padStart(2, '0');
                  const isActive = location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path));
                  return (
                    <motion.div key={item.name} variants={itemVariants}>
                      <Link
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className={`group flex items-center gap-6 font-syne text-[24px] font-extrabold uppercase transition-all duration-300 ${isActive ? 'text-accent' : 'text-white hover:text-white/80'
                          }`}
                      >
                        <span className="font-geist text-[14px] font-bold tracking-widest text-white/30">
                          {num}
                        </span>
                        <span className="relative flex items-center">
                          {item.name}
                          <span
                            className={`absolute -right-10 material-symbols-outlined transition-all duration-300 text-[28px] ${isActive
                                ? 'opacity-100 translate-x-0 text-accent'
                                : 'opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-white/60'
                              }`}
                          >
                            arrow_forward
                          </span>
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>
            </div>

            {/* Overlay Footer / CTA */}
            <motion.div variants={itemVariants} className="p-8 pb-12 relative z-10 flex flex-col items-center mt-auto">
              <p className="font-geist text-[10px] uppercase tracking-[0.2em] text-white/40 mb-10 font-bold text-center">
                Train Hard. Become More.
              </p>
              <Link
                to="/membership#trial"
                onClick={() => setIsOpen(false)}
                className="w-full bg-accent text-white flex items-center justify-center gap-3 font-geist text-[12px] tracking-widest font-bold uppercase px-8 py-5 hover:bg-white hover:text-accent transition-all duration-300"
              >
                BOOK YOUR FREE TRIAL
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
