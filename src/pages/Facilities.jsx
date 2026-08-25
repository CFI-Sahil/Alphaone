import React from 'react';
import Reveal from '../components/Reveal';
import { motion } from 'framer-motion';

// Import local images from assets folder
import facilityHero from '../assets/images/facility-hero.png';
import receptionImage from '../assets/images/reception.png';
import cardioImage from '../assets/images/cardio.png';
import strengthArsenal from '../assets/images/strength-arsenal.jpg';
import functionalTraining from '../assets/images/functional-training.jpg';
import steamImage from '../assets/images/steam.png';
import loungeAreaImage from '../assets/images/Lounge area.png';
import nutritionImage from '../assets/images/Nutrition.png';
import logoTransparent from '../assets/images/Logo_transparent.png';

export default function Facilities() {
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.6 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };
  const lineRevealVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -20 },
    visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } }
  };
  return (
    <div className="flex-grow w-full">
      {/* Hero Section */}
      <section className="relative w-full hero-full-height flex items-center justify-center border-b border-outline-variant overflow-hidden">
        <div className="absolute inset-0 z-0 bg-surface-container-highest">
          <motion.img
            className="w-full h-full object-cover"
            alt="Gym Interior"
            src={facilityHero}
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-95"></div>
          <div className="absolute inset-0 brutalist-grid-overlay z-15 pointer-events-none"></div>
        </div>
        <div className="relative z-10 text-center px-4 md:px-6 flex flex-col items-center">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h1 className="font-syne text-[36px] md:text-[64px] lg:text-[70px] xl:text-[80px] 2xl:text-[90px] text-on-background uppercase mb-4 drop-shadow-2xl font-extrabold tracking-tight" style={{ perspective: '1000px' }}>
              <span className="block">
                {"Step Inside.".split(" ").map((w,i) => <motion.span key={i} variants={lineRevealVariants} className="inline-block mr-[0.25em] origin-bottom">{w}</motion.span>)}
              </span>
            </h1>
            <motion.p variants={itemVariants} className="font-geist text-base md:text-lg text-on-surface-variant max-w-2xl mx-auto uppercase tracking-widest leading-relaxed">
              Premium Equipment &amp; Environments Built for Serious Performance.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Train Section - Editorial Equipment Grid */}
      <section className="w-full bg-ivory text-background py-24 border-b border-outline-variant">
        <div className="max-w-container-max mx-auto px-4 md:px-6">
          <Reveal variant="up" className="mb-16">
            <p className="font-geist text-xs text-background/60 uppercase tracking-widest mb-4 font-bold">
              The Arsenal
            </p>
            <h2 className="font-syne text-[32px] md:text-[80px] lg:text-[96px] text-background uppercase leading-none font-extrabold tracking-tight">
              Train.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Strength */}
            <Reveal variant="up" delay={0}>
              <div className="group relative aspect-[3/4] overflow-hidden brutalist-border border-background/20 bg-background/5">
                <img
                  alt="Strength equipment close up"
                  tabIndex={0}
                  className="w-full h-full object-cover filter grayscale contrast-125 hover:contrast-100 hover:scale-105 hover:grayscale-0 active:contrast-100 active:scale-105 active:grayscale-0 focus:contrast-100 focus:scale-105 focus:grayscale-0 transition-all duration-700 mix-blend-multiply hover:mix-blend-normal active:mix-blend-normal focus:mix-blend-normal cursor-pointer"
                  src={strengthArsenal}
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-background/90 to-transparent text-on-background">
                  <h3 className="font-syne text-2xl uppercase font-bold text-white">Strength</h3>
                </div>
              </div>
            </Reveal>

            {/* Cardio */}
            <Reveal variant="up" delay={100}>
              <div className="group relative aspect-[3/4] overflow-hidden brutalist-border border-background/20 bg-background/5">
                <img
                  alt="Cardio environment"
                  tabIndex={0}
                  className="w-full h-full object-cover filter grayscale contrast-125 hover:contrast-100 hover:scale-105 hover:grayscale-0 active:contrast-100 active:scale-105 active:grayscale-0 focus:contrast-100 focus:scale-105 focus:grayscale-0 transition-all duration-700 mix-blend-multiply hover:mix-blend-normal active:mix-blend-normal focus:mix-blend-normal cursor-pointer"
                  src={cardioImage}
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-background/90 to-transparent text-on-background">
                  <h3 className="font-syne text-2xl uppercase font-bold text-white">Cardio</h3>
                </div>
              </div>
            </Reveal>

            {/* Functional */}
            <Reveal variant="up" delay={200}>
              <div className="group relative aspect-[3/4] overflow-hidden brutalist-border border-background/20 bg-background/5">
                <img
                  alt="Functional training equipment"
                  tabIndex={0}
                  className="w-full h-full object-cover filter grayscale contrast-125 hover:contrast-100 hover:scale-105 hover:grayscale-0 active:contrast-100 active:scale-105 active:grayscale-0 focus:contrast-100 focus:scale-105 focus:grayscale-0 transition-all duration-700 mix-blend-multiply hover:mix-blend-normal active:mix-blend-normal focus:mix-blend-normal cursor-pointer"
                  src={functionalTraining}
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-background/90 to-transparent text-on-background">
                  <h3 className="font-syne text-2xl uppercase font-bold text-white">Functional</h3>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Recover Section - Editorial Visuals */}
      <section className="w-full bg-background text-on-background py-24 border-b border-outline-variant">
        <div className="max-w-container-max mx-auto px-4 md:px-6">
          <Reveal variant="up" className="mb-16">
            <p className="font-geist text-xs text-on-background/60 uppercase tracking-widest mb-4 font-bold">
              Regeneration
            </p>
            <h2 className="font-syne text-[32px] md:text-[80px] lg:text-[96px] text-on-background uppercase leading-none font-extrabold tracking-tight">
              Recover.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Steam & Showers */}
            <Reveal variant="left">
              <div className="group relative aspect-square md:aspect-[4/3] overflow-hidden brutalist-border border-on-background/20">
                <img
                  alt="Steam and Showers facility"
                  tabIndex={0}
                  className="w-full h-full object-cover filter grayscale contrast-125 hover:contrast-100 hover:scale-105 hover:grayscale-0 active:contrast-100 active:scale-105 active:grayscale-0 focus:contrast-100 focus:scale-105 focus:grayscale-0 transition-all duration-700 cursor-pointer"
                  src={steamImage}
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-background/90 to-transparent">
                  <h3 className="font-syne text-2xl uppercase font-bold text-white">Steam & Showers</h3>
                </div>
              </div>
            </Reveal>

            {/* Nutrition Protocol */}
            <Reveal variant="right">
              <div className="group relative aspect-square md:aspect-[4/3] overflow-hidden brutalist-border border-on-background/20">
                <img
                  alt="Nutrition counseling protocol"
                  tabIndex={0}
                  className="w-full h-full object-cover filter grayscale contrast-125 hover:contrast-100 hover:scale-105 hover:grayscale-0 active:contrast-100 active:scale-105 active:grayscale-0 focus:contrast-100 focus:scale-105 focus:grayscale-0 transition-all duration-700 cursor-pointer"
                  src={nutritionImage}
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-background/90 to-transparent">
                  <h3 className="font-syne text-2xl uppercase font-bold text-white">Nutrition Protocol</h3>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Experience Section - Editorial Visuals */}
      <section className="w-full bg-ivory text-background py-24 border-b border-outline-variant">
        <div className="max-w-container-max mx-auto px-4 md:px-6">
          <Reveal variant="up" className="mb-16">
            <p className="font-geist text-xs text-background/60 uppercase tracking-widest mb-4 font-bold">
              The Space
            </p>
            <h2 className="font-syne text-[32px] md:text-[80px] lg:text-[96px] text-background uppercase leading-none font-extrabold tracking-tight">
              Experience.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Reception */}
            <Reveal variant="left">
              <div className="group relative aspect-square md:aspect-[4/3] overflow-hidden brutalist-border border-background/20 bg-background/5">
                <img
                  alt="Reception area"
                  tabIndex={0}
                  className="w-full h-full object-cover filter grayscale contrast-125 hover:contrast-100 hover:scale-105 hover:grayscale-0 active:contrast-100 active:scale-105 active:grayscale-0 focus:contrast-100 focus:scale-105 focus:grayscale-0 transition-all duration-700 mix-blend-multiply hover:mix-blend-normal active:mix-blend-normal focus:mix-blend-normal cursor-pointer"
                  src={receptionImage}
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-background/90 to-transparent text-on-background">
                  <h3 className="font-syne text-2xl uppercase font-bold text-white">Reception</h3>
                </div>
              </div>
            </Reveal>

            {/* Lounge Area */}
            <Reveal variant="right">
              <div className="group relative aspect-square md:aspect-[4/3] overflow-hidden brutalist-border border-background/20 bg-background/5">
                <img
                  alt="Lounge Area"
                  tabIndex={0}
                  className="w-full h-full object-cover filter grayscale contrast-125 hover:contrast-100 hover:scale-105 hover:grayscale-0 active:contrast-100 active:scale-105 active:grayscale-0 focus:contrast-100 focus:scale-105 focus:grayscale-0 transition-all duration-700 mix-blend-multiply hover:mix-blend-normal active:mix-blend-normal focus:mix-blend-normal cursor-pointer"
                  src={loungeAreaImage}
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-background/90 to-transparent text-on-background">
                  <h3 className="font-syne text-2xl uppercase font-bold text-white">Lounge Area</h3>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="w-full bg-surface-container-lowest border-t border-outline-variant py-24 md:py-32 text-center px-4 md:px-6">
        <Reveal variant="scale">
          <h2 className="font-syne text-[32px] md:text-[56px] text-on-background uppercase mb-8 max-w-4xl mx-auto leading-none font-extrabold tracking-tight">
            Experience AlphaOne In Person.
          </h2>
          <p className="font-geist text-base md:text-lg text-on-surface-variant mb-12 max-w-xl mx-auto uppercase tracking-wider font-semibold">
            Step onto the floor. Feel the environment.
          </p>
          <a
            className="inline-flex btn-primary font-geist text-[12px] tracking-widest px-12 py-5 items-center justify-center font-bold"
            href="/membership#trial"
          >
            BOOK FREE TRIAL
          </a>
        </Reveal>
      </section>
    </div>
  );
}
