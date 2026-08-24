import React from 'react';
import Reveal from '../components/Reveal';
import { motion } from 'framer-motion';

// Import local images from assets folder
import wolfWireframe from '../assets/images/wolf-wireframe.png';
import aboutHero2 from '../assets/images/about-hero-2.png';
import abt3 from '../assets/images/abt-3.png';
import shareSuffering from '../assets/images/share suffering.png';
import wolfTransparent from '../assets/images/Wolf_transparent.png';
import abtPower from '../assets/images/abt-power.png';
import logoTransparent from '../assets/images/Logo_transparent.png';
import aboutHero from '../assets/images/About-hero.png';

export default function About() {
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
      <section className="relative hero-full-height flex items-center justify-center brutalist-border-bottom overflow-hidden bg-background">
        <div className="absolute inset-0 z-0">
          <motion.div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${aboutHero})` }}
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
          <div className="absolute inset-0 brutalist-grid-overlay z-15 pointer-events-none"></div>
        </div>
        <div className="relative z-10 text-center px-4 md:px-6 max-w-4xl mx-auto w-full mt-12">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h1 className="font-syne text-[36px] md:text-[64px] lg:text-[70px] xl:text-[80px] 2xl:text-[90px] uppercase text-on-background leading-none font-extrabold tracking-tighter" style={{ perspective: '1000px' }}>
              <span className="block text-accent">
                {"THIS IS".split(" ").map((w,i) => <motion.span key={i} variants={lineRevealVariants} className="inline-block mr-[0.25em] origin-bottom">{w}</motion.span>)}
              </span>
              <span className="block mt-1 md:mt-2">
                {"ALPHAONE.".split(" ").map((w,i) => <motion.span key={i} variants={lineRevealVariants} className="inline-block mr-[0.25em] origin-bottom">{w}</motion.span>)}
              </span>
            </h1>
            <motion.p variants={itemVariants} className="font-geist text-base md:text-lg text-accent mt-8 max-w-2xl mx-auto uppercase tracking-widest font-semibold">
              Forging Elite Performance
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* The Philosophy */}
      <section className="py-24 md:py-32 px-4 md:px-6 brutalist-border-bottom relative bg-background w-full overflow-hidden">
        <div className="max-w-container-max mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
            <Reveal variant="left" className="md:col-span-4 lg:col-span-4">
              <span className="inline-flex items-center font-geist text-sm md:text-base text-accent uppercase font-bold tracking-widest border-l-2 border-accent pl-4 h-fit">
                PHILOSOPHY
              </span>
            </Reveal>
            
            <div className="md:col-span-8 lg:col-span-8 flex flex-col gap-6">
              <Reveal variant="right">
                <h2 className="font-syne text-[36px] md:text-[48px] lg:text-[56px] text-on-background uppercase leading-tight font-extrabold tracking-tight">
                  <span style={{ WebkitTextStroke: '1px var(--color-accent, #F05236)', color: 'transparent' }}>NO</span> SHORTCUTS.<br />
                  <span style={{ WebkitTextStroke: '1px var(--color-accent, #F05236)', color: 'transparent' }}>ONLY</span> DISCIPLINE.
                </h2>
              </Reveal>
              
              <Reveal variant="right" delay={150}>
                <p className="font-geist text-base md:text-lg text-on-surface-variant leading-relaxed max-w-2xl">
                  The Alphaone Method is forged in the fires of raw discipline and unyielding strength. It is a
                  calculated, systematic approach to human performance, designed for those who view fitness not as a
                  leisure activity, but as a mandatory pursuit of excellence.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* The Alphaone Method (Feature Grid) */}
      <section className="py-24 px-4 md:px-6 brutalist-border-bottom bg-surface-container-lowest relative">
        <div className="max-w-container-max mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Reveal variant="up" delay={0}>
              <div className="brutalist-border p-8 bg-background/50 hover:bg-surface-variant transition-colors group h-full">
                <span className="material-symbols-outlined text-[48px] text-accent mb-6 block group-hover:scale-110 transition-transform">
                  fitness_center
                </span>
                <h3 className="font-syne text-xl text-on-background uppercase mb-4 font-bold">Brutal High-Intensity</h3>
                <p className="font-geist text-sm text-on-surface-variant leading-relaxed">
                  Functional training pushed to its absolute limit.
                </p>
              </div>
            </Reveal>

            <Reveal variant="up" delay={150} className="mt-0 lg:mt-12">
              <div className="brutalist-border p-8 bg-background/50 hover:bg-surface-variant transition-colors group h-full">
                <span className="material-symbols-outlined text-[48px] text-accent mb-6 block group-hover:scale-110 transition-transform">
                  workspace_premium
                </span>
                <h3 className="font-syne text-xl text-on-background uppercase mb-4 font-bold">Elite Protocols</h3>
                <p className="font-geist text-sm text-on-surface-variant leading-relaxed">
                  Calculated, tested programming to forge unbreakable humans.
                </p>
              </div>
            </Reveal>

            <Reveal variant="up" delay={300} className="mt-0 lg:mt-24">
              <div className="brutalist-border p-8 bg-background/50 hover:bg-surface-variant transition-colors group h-full">
                <span className="material-symbols-outlined text-[48px] text-accent mb-6 block group-hover:scale-110 transition-transform">
                  local_fire_department
                </span>
                <h3 className="font-syne text-xl text-on-background uppercase mb-4 font-bold">Unrelenting Will</h3>
                <p className="font-geist text-sm text-on-surface-variant leading-relaxed">
                  We provide the tools. You bring the raw discipline.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Brand Origin (Textured Backdrop) */}
      <section className="relative py-32 brutalist-border-bottom bg-background overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img
            className="w-full h-full object-cover opacity-20 grayscale"
            alt="AlphaOne Gym Background"
            src={aboutHero2}
          />
          <div className="absolute inset-0 editorial-overlay"></div>
        </div>
        
        {/* Absolute positioned wolf image at bottom left */}
        <div className="absolute bottom-0 left-0 md:left-10 w-[70%] md:w-[40%] lg:w-[30%] max-w-[450px] z-10 pointer-events-none flex items-end">
          <Reveal variant="left" className="w-full">
            <img 
              src={wolfTransparent} 
              alt="AlphaOne Wolf Logo" 
              className="w-full h-auto object-contain drop-shadow-2xl opacity-90" 
            />
          </Reveal>
        </div>

        <div className="relative z-20 max-w-container-max mx-auto px-4 md:px-6">
          <Reveal variant="right" className="bg-surface-container-lowest/90 backdrop-blur-md brutalist-border p-10 md:p-20 max-w-4xl md:ml-auto w-full">
            <span className="font-geist text-xs text-accent uppercase mb-6 block border-l-2 border-accent pl-4 font-bold tracking-widest">
              WHY ALPHAONE
            </span>
            <h2 className="font-syne text-[32px] md:text-[56px] text-on-background mb-6 uppercase leading-tight font-extrabold tracking-tight">
              FORGED BY<br />
              THE ELITE.
            </h2>
            <p className="font-geist text-sm md:text-base text-on-surface-variant leading-relaxed">
              Founded by industry veterans who demanded more from a training environment. Alphaone was built as a
              sanctuary for the dedicated. No distractions. No compromises. Just premium equipment, elite coaching, and
              an atmosphere that demands your absolute best the moment you step through the doors.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 px-4 md:px-6 brutalist-border-bottom max-w-container-max mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
          <Reveal variant="left" className="md:col-span-5 md:col-start-2">
            <h2 className="font-syne text-[32px] md:text-[56px] text-on-background mb-6 uppercase leading-tight font-extrabold tracking-tight">
              Serious Training<br />
              For Serious People.
            </h2>
            <p className="font-geist text-sm md:text-base text-on-surface-variant mb-10 max-w-lg leading-relaxed">
              We are not a social club. We are a performance facility. Our environment is curated to filter out the
              noise and amplify focus. From Hyrox-inspired conditioning to heavy barbell mechanics, everything here
              serves a singular purpose: progression.
            </p>
          </Reveal>
          <Reveal variant="right" className="md:col-span-6 relative h-[600px] brutalist-border">
            <img
              className="w-full h-full object-cover grayscale contrast-125 brightness-75 brutalist-border"
              alt="Training"
              src={abt3}
            />
          </Reveal>
        </div>
      </section>

      {/* The Community (Asymmetrical Gallery) */}
      <section className="py-24 brutalist-border-bottom bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto px-4 md:px-6 mb-16">
          <Reveal variant="left">
            <span className="font-geist text-xs text-accent uppercase mb-6 block border-l-2 border-accent pl-4 font-bold tracking-widest">
              COMMUNITY
            </span>
            <h2 className="font-syne text-[32px] md:text-[56px] text-on-background uppercase font-extrabold tracking-tight">
              THE PACK
            </h2>
          </Reveal>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 px-4 md:px-6 max-w-container-max mx-auto">
          <Reveal variant="left" className="md:col-span-7 relative group overflow-hidden h-[500px] brutalist-border">
            <img
              tabIndex={0}
              className="w-full h-full object-cover grayscale group-hover:scale-105 group-hover:grayscale-0 active:scale-105 active:grayscale-0 focus:scale-105 focus:grayscale-0 transition-all duration-700 cursor-pointer"
              alt="Shared Suffering"
              src={shareSuffering}
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-background to-transparent">
              <p className="font-syne text-2xl text-on-background uppercase font-bold">Shared Suffering.</p>
            </div>
          </Reveal>
          <Reveal variant="right" className="md:col-span-5 relative group overflow-hidden h-[400px] mt-0 md:mt-24 brutalist-border">
            <img
              tabIndex={0}
              className="w-full h-full object-cover grayscale group-hover:scale-105 group-hover:grayscale-0 active:scale-105 active:grayscale-0 focus:scale-105 focus:grayscale-0 transition-all duration-700 cursor-pointer"
              alt="Absolute Power"
              src={abtPower}
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-background to-transparent">
              <p className="font-syne text-2xl text-on-background uppercase font-bold">Absolute Power.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* The Promise & CTA */}
      <section className="py-32 px-4 md:px-6 bg-background text-center relative overflow-hidden flex flex-col items-center justify-center">
        <div className="absolute inset-0 w-full h-full opacity-5 pointer-events-none flex justify-center items-center">
          <span className="material-symbols-outlined text-[300px] text-accent">electric_bolt</span>
        </div>
        <Reveal variant="scale" className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
          <h2 className="font-syne text-[32px] md:text-[56px] text-on-background mb-6 uppercase leading-tight font-extrabold tracking-tight">
            YOUR GOALS.<br />
            EXPERTLY GUIDED.
          </h2>
          <p className="font-geist text-base md:text-lg text-on-surface-variant mb-10 max-w-xl leading-relaxed">
            We provide the blueprint, the tools, and the environment. You bring the unrelenting will to execute.
          </p>
          <a
            href="/membership#trial"
            className="inline-flex btn-primary font-geist text-[12px] tracking-widest px-10 py-5 items-center gap-4 group font-bold"
          >
            JOIN THE PACK
            <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">
              arrow_forward
            </span>
          </a>
        </Reveal>
      </section>
    </div>
  );
}
