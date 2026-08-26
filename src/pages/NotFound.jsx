import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <div className="min-h-screen pt-24 pb-12 flex items-center justify-center relative overflow-hidden bg-background">
      <SEO 
        title="Page Not Found"
        description="The page you are looking for does not exist at Alphaone Fitness Club."
        path="/404"
      />
      
      {/* Background element */}
      <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
        <span className="font-syne text-[40vw] font-black tracking-tighter text-white">
          404
        </span>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center"
        >
          <h1 className="font-syne text-5xl md:text-7xl font-extrabold uppercase tracking-tighter mb-4 text-on-surface">
            PAGE NOT FOUND
          </h1>
          <p className="font-geist text-on-surface-variant max-w-md mx-auto mb-10 text-lg">
            Looks like you took a wrong turn. The page you're looking for doesn't exist or has been moved.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Link
              to="/"
              className="btn-slide-fill inline-flex items-center justify-center bg-ivory text-surface font-geist text-sm tracking-widest font-bold uppercase px-8 py-4 transition-all duration-300 w-full sm:w-auto"
            >
              BACK TO HOME
            </Link>
            <Link
              to="/training"
              className="brutalist-border inline-flex items-center justify-center bg-surface text-on-surface font-geist text-sm tracking-widest font-bold uppercase px-8 py-4 hover:bg-[#262626] transition-colors w-full sm:w-auto"
            >
              VIEW TRAINING
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
