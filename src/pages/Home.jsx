import React, { useState, useEffect, useRef } from 'react';
import Reveal from '../components/Reveal';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';

function PriceCounter({ value }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  
  const numberValue = parseInt(value.replace(/[^0-9]/g, ''), 10);
  const rounded = useTransform(count, (latest) => {
    return '₹' + Math.round(latest).toLocaleString('en-IN');
  });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, numberValue, { duration: 2, ease: "easeOut" });
      return () => controls.stop();
    }
  }, [isInView, count, numberValue]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

// Import local images from assets folder
import heroBg from '../assets/images/Hero-bg.png';
import scBg from '../assets/images/sc-bg.jpg';
import hyroxBg from '../assets/images/hyrox-training.jpg';
import olympicBg from '../assets/images/olympic-bg.jpg';
import functionalBg from '../assets/images/functional-training.jpg';
import coachAlex from '../assets/images/coach-alex.jpg';
import coachSarah from '../assets/images/coach-sarah.jpg';
import coachMarcus from '../assets/images/coach-marcus.jpg';
import coachElena from '../assets/images/coach-elena.jpg';
import mapPlaceholder from '../assets/images/map-placeholder.jpg';
import brandLogo from '../assets/images/Wolf_transparent.png';

function FaqItem({ question, answer, delay }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Reveal variant="up" delay={delay}>
      <div className="bg-surface-container-high border border-outline-variant">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex justify-between items-center cursor-pointer p-6 font-syne text-sm md:text-base text-ivory uppercase font-bold text-left transition-colors hover:text-accent focus:outline-none"
        >
          {question}
          <span className={`material-symbols-outlined transition-transform duration-300 text-accent ${isOpen ? 'rotate-180' : ''}`}>
            expand_more
          </span>
        </button>
        <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
          <div className="overflow-hidden">
            <div className="px-4 md:px-6 pb-6 text-on-surface-variant font-geist text-sm leading-relaxed border-t border-outline-variant/30 pt-4">
              {answer}
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.6,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const lineRevealVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0,
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] }
    }
  };
  const diffs = [
    {
      icon: 'analytics',
      title: 'Science-Backed',
      desc: 'Programs built on proven sports science. No fads, just results.'
    },
    {
      icon: 'groups',
      title: 'Community',
      desc: 'Train alongside driven individuals who push you to be your best.'
    },
    {
      icon: 'monitor_heart',
      title: 'Holistic Approach',
      desc: 'Integrating training, nutrition, and recovery for full development.'
    },
    {
      icon: 'workspace_premium',
      title: 'Top-Tier Facility',
      desc: 'Equipped with industry-leading gear from Rogue, Concept2, etc.'
    },
    {
      icon: 'speed',
      title: 'Performance Tracking',
      desc: 'Regular assessments to ensure you are always progressing.'
    },
    {
      icon: 'spa',
      title: 'Premium Recovery',
      desc: 'Access luxury steam rooms and showers post-workout.'
    }
  ];

  const programs = [
    {
      img: scBg,
      tag: 'BEST FOR: POWER & STAMINA',
      title: 'Strength & Conditioning',
      desc: 'Build raw power and unyielding stamina through functional movements.'
    },
    {
      img: olympicBg,
      tag: 'BEST FOR: TECHNIQUE & EXPLOSIVENESS',
      title: 'Olympic Weightlifting',
      desc: 'Master the snatch and clean & jerk with elite technical coaching.'
    },
    {
      img: functionalBg,
      title: 'Functional Fitness',
      tag: 'BEST FOR: ALL-AROUND FITNESS',
      desc: 'Constantly varied, high-intensity functional movements.'
    }
  ];

  const coaches = [
    {
      img: coachAlex,
      name: 'Alex Mercer',
      role: 'Head of S&C'
    },
    {
      img: coachSarah,
      name: 'Sarah Chen',
      role: 'HYROX Master Trainer'
    },
    {
      img: coachMarcus,
      name: 'Marcus Johnson',
      role: 'Weightlifting Coach'
    },
    {
      img: coachElena,
      name: 'Elena Rostova',
      role: 'Mobility Specialist'
    }
  ];

  return (
    <div className="flex-grow">
      {/* 1. Cinematic Hero Section */}
      <section className="relative w-full hero-full-height flex flex-col justify-start pt-24 md:justify-end md:pt-0 overflow-hidden bg-surface">
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <img
            alt="Gym Hero"
            className="w-full h-full object-cover object-center opacity-60"
            src={heroBg}
          />
          <div className="absolute inset-0 cinematic-gradient z-10"></div>
          <div className="absolute inset-0 brutalist-grid-overlay z-15 pointer-events-none"></div>
        </motion.div>

        <div className="relative z-20 w-full max-w-container-max mx-auto px-4 md:px-6 pb-12">
          {/* Scroll Down Indicator */}
          <motion.div 
            className="absolute bottom-16 right-6 z-20 hidden md:flex flex-col items-center gap-2 text-on-surface-variant/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
          >
            <span className="font-geist text-[10px] tracking-[0.2em] font-bold uppercase rotate-90 translate-y-6 origin-center">
              SCROLL
            </span>
            <span className="material-symbols-outlined text-accent animate-scroll-bounce text-xl mt-12">
              arrow_downward
            </span>
          </motion.div>

          <motion.div 
            className="max-w-4xl 2xl:max-w-5xl flex flex-col gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.span variants={itemVariants} className="font-geist text-[10px] sm:text-[12px] tracking-widest font-semibold text-accent uppercase flex items-center gap-3 bg-surface-container/60 backdrop-blur-md px-3 py-1.5 md:px-4 md:py-2 w-fit border border-outline-variant/20 whitespace-nowrap">
              <span className="w-4 h-[2px] bg-accent block shrink-0"></span>
              <span>ANDHERI WEST, MUMBAI <span className="mx-2 text-on-surface-variant">•</span> 4000 SQFT AREA</span>
            </motion.span>
            <h1 className="font-syne text-[36px] md:text-[64px] lg:text-[70px] xl:text-[80px] 2xl:text-[90px] text-ivory uppercase leading-[0.9] tracking-tighter font-extrabold" style={{ perspective: '1000px' }}>
              {/* Mobile View */}
              <span className="md:hidden flex flex-col gap-4">
                <motion.span variants={lineRevealVariants} className="block origin-bottom">TRAIN HARD.</motion.span>
                <motion.span variants={lineRevealVariants} className="block origin-bottom">MOVE</motion.span>
                <motion.span variants={lineRevealVariants} className="block origin-bottom">BETTER.</motion.span>
                <motion.span variants={lineRevealVariants} className="stroke-text block origin-bottom">BECOME</motion.span>
                <motion.span variants={lineRevealVariants} className="stroke-text block origin-bottom">MORE.</motion.span>
              </span>
              
              {/* Desktop View */}
              <span className="hidden md:flex flex-col">
                <motion.span variants={lineRevealVariants} className="block origin-bottom">TRAIN HARD.</motion.span>
                <motion.span variants={lineRevealVariants} className="block origin-bottom">MOVE BETTER.</motion.span>
                <motion.span variants={lineRevealVariants} className="stroke-text block origin-bottom">BECOME MORE.</motion.span>
              </span>
            </h1>
            <motion.p variants={itemVariants} className="font-geist text-sm md:text-lg text-on-surface-variant max-w-xl border-l-2 border-accent pl-4 pr-6 py-3 bg-[#131313]/60 backdrop-blur-sm rounded-r-md">
              Premium strength, conditioning and performance training built for people who are serious about their goals.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mt-2 md:mt-4 w-full md:w-fit">
              <a
                className="btn-slide-fill inline-flex items-center justify-center gap-4 md:gap-6 bg-ivory text-surface font-geist text-[12px] tracking-widest px-4 md:px-6 py-3 md:px-8 md:py-4 transition-all duration-300 font-bold uppercase group w-full md:w-fit"
                href="/membership#trial"
              >
                BOOK A FREE TRIAL
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Trust Strip */}
        <div className="relative z-20 w-full pb-8 pt-4">
          <div className="max-w-container-max mx-auto px-0 md:px-6">
            <div className="max-w-5xl mx-auto bg-[#131313]/90 backdrop-blur-md border-y border-outline-variant/30 md:border md:border-outline-variant/30 p-0 md:py-5 md:px-6 shadow-2xl">
              
              {/* Desktop View */}
              <div className="hidden md:flex flex-nowrap justify-between items-center gap-2 text-center font-geist text-on-surface-variant text-sm tracking-widest font-semibold uppercase">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-accent text-lg">fitness_center</span>
                  <span>PREMIUM EQUIPMENT</span>
                </div>
                <div className="w-px h-4 bg-outline-variant/30"></div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-accent text-lg">timer</span>
                  <span>HYROX-INSPIRED</span>
                </div>
                <div className="w-px h-4 bg-outline-variant/30"></div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-accent text-lg">verified</span>
                  <span>ELITE COACHING</span>
                </div>
                <div className="w-px h-4 bg-outline-variant/30"></div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-accent text-lg">restaurant</span>
                  <span>NUTRITION COUNSELLING</span>
                </div>
              </div>

              {/* Mobile View (2x2 Grid) */}
              <div className="grid grid-cols-2 md:hidden font-geist text-on-surface-variant text-[10px] sm:text-xs tracking-widest font-semibold uppercase text-center">
                <div className="flex flex-col items-center justify-center py-3 px-2 border-b border-r border-outline-variant/30">
                  <span className="material-symbols-outlined text-accent text-2xl mb-2">fitness_center</span>
                  <span>PREMIUM EQUIPMENT</span>
                </div>
                <div className="flex flex-col items-center justify-center py-3 px-2 border-b border-outline-variant/30">
                  <span className="material-symbols-outlined text-accent text-2xl mb-2">timer</span>
                  <span>HYROX-INSPIRED</span>
                </div>
                <div className="flex flex-col items-center justify-center py-3 px-2 border-r border-outline-variant/30">
                  <span className="material-symbols-outlined text-accent text-2xl mb-2">verified</span>
                  <span>ELITE COACHING</span>
                </div>
                <div className="flex flex-col items-center justify-center py-3 px-2">
                  <span className="material-symbols-outlined text-accent text-2xl mb-2">restaurant</span>
                  <span>NUTRITION COUNSELLING</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 3. Why Alphaone */}
      <section className="py-24 bg-surface" id="why-alphaone">
        <div className="max-w-container-max mx-auto px-4 md:px-6">
          <Reveal variant="up" className="mb-16 text-center flex flex-col items-center">
            <span className="font-geist text-xs text-accent uppercase tracking-widest mb-4 block font-semibold">
              THE ALPHAONE DIFFERENCE
            </span>
            <h2 className="font-syne text-[32px] md:text-[56px] text-ivory uppercase font-extrabold tracking-tight">
              WHY TRAIN WITH US
            </h2>
            <p className="font-geist text-base md:text-lg text-on-surface-variant mt-4 max-w-2xl">
              We provide the environment, expertise, and equipment for you to excel.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {diffs.map((item, idx) => (
              <Reveal key={idx} variant="up" delay={idx * 100}>
                <div className="relative overflow-hidden bg-surface-container-high p-8 border border-outline-variant hover:border-accent/40 hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between h-full shadow-lg hover:shadow-black/50">
                  <div>
                    {/* Header: Icon & Title Side-by-Side */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center justify-center w-10 h-10 bg-accent/10 border border-accent/20 text-accent rounded-sm shrink-0">
                        <span className="material-symbols-outlined text-xl">{item.icon}</span>
                      </div>
                      <h3 className="font-syne text-lg text-ivory uppercase tracking-wider font-extrabold leading-tight">
                        {item.title}
                      </h3>
                    </div>
                    {/* Description */}
                    <p className="text-on-surface-variant font-geist text-sm leading-relaxed relative z-10 max-w-[260px]">
                      {item.desc}
                    </p>
                  </div>
                  {/* Watermark Index Number */}
                  <span className="absolute bottom-2 right-4 font-syne text-[56px] leading-none font-black text-white/[0.03] select-none transition-colors group-hover:text-accent/[0.05]">
                    {`0${idx + 1}`}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Training Programs (Cream Editorial) */}
      <section className="py-24 bg-ivory text-surface" id="programs">
        <div className="max-w-container-max mx-auto px-4 md:px-6">
          <Reveal variant="up" className="mb-16 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <span className="font-geist text-xs text-accent uppercase tracking-widest mb-2 block font-semibold">
                OUR DISCIPLINES
              </span>
              <h2 className="font-syne text-[32px] md:text-[56px] text-surface uppercase font-extrabold tracking-tight">
                TRAINING PROGRAMS
              </h2>
            </div>
            <button
              onClick={() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-slide-fill font-geist text-[12px] tracking-[0.2em] text-accent border border-accent/40 px-4 py-3.5 transition-all flex items-center gap-2 font-bold uppercase w-fit whitespace-nowrap shrink-0"
            >
              VIEW ALL PROGRAMS <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((item, idx) => (
              <Reveal key={idx} variant="up" delay={idx * 100}>
                <div className="bg-white p-4 border border-surface/5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between h-full">
                  <div>
                    <div className="aspect-[4/3] overflow-hidden bg-surface-container flex items-center justify-center border border-outline-variant/10 mb-5">
                      <img
                        alt={item.title}
                        tabIndex={0}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 active:grayscale-0 active:scale-105 focus:grayscale-0 focus:scale-105 transition-all duration-700 cursor-pointer"
                        src={item.img}
                      />
                    </div>
                    <div className="px-2">
                      <span className="font-geist text-[10px] tracking-widest text-accent uppercase mb-1 block font-bold">
                        {item.tag}
                      </span>
                      <h3 className="font-syne text-2xl uppercase mb-2 font-bold text-surface">{item.title}</h3>
                      <p className="font-geist text-sm text-surface-variant/90 leading-relaxed mb-6">{item.desc}</p>
                    </div>
                  </div>
                  <div className="px-2 pb-2">
                    <a
                      className="text-xs font-geist tracking-widest font-bold text-accent hover:text-surface border-b border-accent hover:border-surface pb-1 transition-all inline-block uppercase w-fit cursor-pointer"
                      onClick={(e) => e.preventDefault()}
                    >
                      EXPLORE
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. HYROX Section (Orange Action) */}
      <section className="py-24 bg-accent text-white">
        <div className="max-w-container-max mx-auto px-4 md:px-6 flex flex-col lg:flex-row gap-16 items-center">
          <Reveal variant="left" className="w-full lg:w-1/2">
            <span className="font-geist text-xs text-surface uppercase tracking-widest mb-4 block font-bold">
              OFFICIAL PARTNER
            </span>
            <h2 className="font-syne text-[32px] md:text-[56px] text-white uppercase mb-6 font-extrabold leading-none tracking-tight">
              HYROX TRAINING CENTER
            </h2>
            <p className="font-geist text-base md:text-lg text-white/90 mb-8 max-w-lg leading-relaxed">
              Prepare for the ultimate fitness race. Fully equipped to train you for HYROX, combining functional exercises
              with endurance running.
            </p>
            <ul className="space-y-4 font-geist text-sm mb-10">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-surface">check_circle</span>
                Dedicated HYROX equipment
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-surface">check_circle</span>
                Specialized simulation classes
              </li>
            </ul>
            <a
              className="inline-block bg-surface text-ivory px-8 py-4 font-geist text-[12px] tracking-widest uppercase hover:bg-white hover:text-surface transition-colors font-bold cursor-pointer"
              onClick={(e) => e.preventDefault()}
            >
              EXPLORE HYROX
            </a>
          </Reveal>

          <Reveal variant="right" className="w-full lg:w-1/2 aspect-square lg:aspect-[4/3] bg-surface relative overflow-hidden brutalist-border group">
            <img
              alt="Hyrox Training"
              tabIndex={0}
              className="w-full h-full object-cover mix-blend-luminosity opacity-80 group-hover:mix-blend-normal group-hover:opacity-100 active:mix-blend-normal active:opacity-100 focus:mix-blend-normal focus:opacity-100 transition-all duration-500 cursor-pointer"
              src={hyroxBg}
            />
          </Reveal>
        </div>
      </section>

      {/* 7. Coaches */}
      <section className="py-24 bg-surface" id="coaches">
        <div className="max-w-container-max mx-auto px-4 md:px-6">
          <Reveal variant="up" className="text-center mb-16 flex flex-col items-center">
            <span className="font-geist text-xs text-accent uppercase tracking-widest mb-4 block font-semibold">
              OUR EXPERTS
            </span>
            <h2 className="font-syne text-[32px] md:text-[56px] text-ivory uppercase font-extrabold tracking-tight">
              MEET THE COACHES
            </h2>
            <p className="font-geist text-base md:text-lg text-on-surface-variant mt-4 max-w-2xl">
              Learn from professionals who have mastered their craft.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coaches.map((coach, idx) => (
              <Reveal key={idx} variant="scale" delay={idx * 100}>
                <div className="bg-surface-container-high p-6 border border-outline-variant flex flex-col items-center text-center group h-full">
                  <div className="w-32 h-32 rounded-full bg-surface-variant mb-6 overflow-hidden brutalist-border">
                    <img
                      alt={coach.name}
                      tabIndex={0}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 active:grayscale-0 focus:grayscale-0 transition-all duration-300 cursor-pointer"
                      src={coach.img}
                    />
                  </div>
                  <h4 className="font-syne text-xl text-ivory uppercase font-bold">{coach.name}</h4>
                  <span className="text-accent font-geist text-xs uppercase tracking-widest mt-1 mb-6 block font-semibold">
                    {coach.role}
                  </span>
                  <a
                    className="w-full text-center border border-outline-variant text-ivory py-2 font-geist text-[10px] tracking-widest hover:bg-ivory hover:text-surface transition-colors font-bold uppercase mt-auto cursor-pointer"
                    onClick={(e) => e.preventDefault()}
                  >
                    VIEW PROFILE
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Pricing */}
      <section className="py-24 bg-surface-container-lowest" id="membership">
        <div className="max-w-container-max mx-auto px-4 md:px-6">
          <Reveal variant="up" className="text-center mb-16 flex flex-col items-center">
            <span className="font-geist text-xs text-accent uppercase tracking-widest mb-4 block font-semibold">
              JOIN THE CLUB
            </span>
            <h2 className="font-syne text-[32px] md:text-[56px] text-ivory uppercase font-extrabold tracking-tight">
              MEMBERSHIP
            </h2>
            <p className="font-geist text-base md:text-lg text-on-surface-variant mt-4 max-w-2xl">
              No hidden fees. Just results.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 items-center">
            {/* Tier 1 */}
            <Reveal variant="up" delay={0}>
              <div className="bg-surface-container-high p-8 border border-outline-variant flex flex-col h-full brutalist-border">
                <h3 className="font-syne text-2xl text-ivory uppercase mb-2 font-bold">Open Gym</h3>
                <p className="font-geist text-on-surface-variant mb-6 text-sm">Full access to facility and equipment.</p>
                <div className="text-4xl font-syne text-ivory mb-8 font-extrabold">
                  <PriceCounter value="₹5,000" /><span className="text-sm text-on-surface-variant font-geist font-normal">/mo</span>
                </div>
                <a
                  className="w-full text-center border border-outline-variant text-ivory py-3 font-geist text-[12px] tracking-widest hover:bg-ivory hover:text-surface transition-colors font-bold uppercase mt-auto cursor-pointer"
                  onClick={(e) => e.preventDefault()}
                >
                  JOIN NOW
                </a>
              </div>
            </Reveal>

            {/* Tier 2 */}
            <Reveal variant="scale" delay={100}>
              <div className="bg-surface p-8 border-2 border-accent flex flex-col h-full relative shadow-2xl py-12">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white px-4 py-1 font-geist text-[10px] tracking-widest uppercase font-bold">
                  Most Popular
                </div>
                <h3 className="font-syne text-2xl text-ivory uppercase mb-2 font-bold">All Access</h3>
                <p className="font-geist text-on-surface-variant mb-6 text-sm">Unlimited classes + Open Gym.</p>
                <div className="text-4xl font-syne text-ivory mb-8 font-extrabold">
                  <PriceCounter value="₹8,500" /><span className="text-sm text-on-surface-variant font-geist font-normal">/mo</span>
                </div>
                <a
                  className="w-full text-center bg-accent text-white py-3 font-geist text-[12px] tracking-widest hover:bg-white hover:text-surface transition-colors font-bold uppercase mt-auto cursor-pointer"
                  onClick={(e) => e.preventDefault()}
                >
                  JOIN NOW
                </a>
              </div>
            </Reveal>

            {/* Tier 3 */}
            <Reveal variant="up" delay={200}>
              <div className="bg-surface-container-high p-8 border border-outline-variant flex flex-col h-full brutalist-border">
                <h3 className="font-syne text-2xl text-ivory uppercase mb-2 font-bold">Personal Training</h3>
                <p className="font-geist text-on-surface-variant mb-6 text-sm">1-on-1 dedicated coaching.</p>
                <div className="text-4xl font-syne text-ivory mb-8 font-extrabold">Custom</div>
                <a
                  className="w-full text-center border border-outline-variant text-ivory py-3 font-geist text-[12px] tracking-widest hover:bg-ivory hover:text-surface transition-colors font-bold uppercase mt-auto cursor-pointer"
                  onClick={(e) => e.preventDefault()}
                >
                  ENQUIRE
                </a>
              </div>
            </Reveal>
          </div>

          {/* Feature Comparison Table */}
          <Reveal variant="up" className="max-w-4xl mx-auto overflow-x-auto border border-outline-variant bg-surface-container-high p-4 md:p-8 custom-scrollbar">
            <table className="w-full text-left border-collapse min-w-[500px] md:min-w-[600px]">
              <thead>
                <tr className="border-b border-outline-variant">
                  <th className="py-4 px-4 w-[40%] font-syne text-on-surface-variant uppercase text-sm font-bold whitespace-nowrap">
                    Features
                  </th>
                  <th className="py-4 px-4 w-[20%] font-syne text-ivory uppercase text-sm text-center font-bold whitespace-nowrap">
                    Open Gym
                  </th>
                  <th className="py-4 px-4 w-[20%] font-syne text-accent uppercase text-sm text-center font-bold whitespace-nowrap">
                    All Access
                  </th>
                  <th className="py-4 px-4 w-[20%] font-syne text-ivory uppercase text-sm text-center font-bold whitespace-nowrap">
                    PT
                  </th>
                </tr>
              </thead>
              <tbody className="font-geist text-sm text-ivory">
                <tr className="border-b border-outline-variant/30 hover:bg-surface-container/50">
                  <td className="py-4 px-4">Open Gym Access</td>
                  <td className="text-center">
                    <span className="material-symbols-outlined text-accent text-sm">check</span>
                  </td>
                  <td className="text-center">
                    <span className="material-symbols-outlined text-accent text-sm">check</span>
                  </td>
                  <td className="text-center">
                    <span className="material-symbols-outlined text-accent text-sm">check</span>
                  </td>
                </tr>
                <tr className="border-b border-outline-variant/30 hover:bg-surface-container/50">
                  <td className="py-4 px-4">Locker Room & Showers</td>
                  <td className="text-center">
                    <span className="material-symbols-outlined text-accent text-sm">check</span>
                  </td>
                  <td className="text-center">
                    <span className="material-symbols-outlined text-accent text-sm">check</span>
                  </td>
                  <td className="text-center">
                    <span className="material-symbols-outlined text-accent text-sm">check</span>
                  </td>
                </tr>
                <tr className="border-b border-outline-variant/30 hover:bg-surface-container/50">
                  <td className="py-4 px-4">Unlimited Group Classes</td>
                  <td className="text-center text-outline-variant">-</td>
                  <td className="text-center">
                    <span className="material-symbols-outlined text-accent text-sm">check</span>
                  </td>
                  <td className="text-center">
                    <span className="material-symbols-outlined text-accent text-sm">check</span>
                  </td>
                </tr>
                <tr className="border-b border-outline-variant/30 hover:bg-surface-container/50">
                  <td className="py-4 px-4">HYROX Simulation Sessions</td>
                  <td className="text-center text-outline-variant">-</td>
                  <td className="text-center">
                    <span className="material-symbols-outlined text-accent text-sm">check</span>
                  </td>
                  <td className="text-center">
                    <span className="material-symbols-outlined text-accent text-sm">check</span>
                  </td>
                </tr>
                <tr className="border-b border-outline-variant/30 hover:bg-surface-container/50">
                  <td className="py-4 px-4">Tailored Programming</td>
                  <td className="text-center text-outline-variant">-</td>
                  <td className="text-center text-outline-variant">-</td>
                  <td className="text-center">
                    <span className="material-symbols-outlined text-accent text-sm">check</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-surface">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <Reveal variant="up" className="text-center mb-12">
            <span className="font-geist text-xs text-accent uppercase tracking-widest mb-4 block font-semibold">
              HAVE QUESTIONS?
            </span>
            <h2 className="font-syne text-[32px] md:text-[56px] text-ivory uppercase font-extrabold tracking-tight">
              FAQ
            </h2>
          </Reveal>

          <div className="space-y-4">
            <FaqItem
              question="Do I need to be fit to join?"
              answer="Absolutely not. Our programs are scalable to all fitness levels. Our coaches will modify workouts to match your current abilities while safely progressing you."
              delay={0}
            />
            <FaqItem
              question="Do you offer drop-ins?"
              answer="Yes, we welcome experienced athletes for drop-ins at ₹1,000 per session. Please contact us in advance to reserve a spot in a class."
              delay={100}
            />
            <FaqItem
              question="Is parking available?"
              answer="Valet parking is available at the building premises for members during their training sessions."
              delay={200}
            />
          </div>
        </div>
      </section>

      {/* Split Location Section */}
      <section className="bg-surface-container border-t border-outline-variant flex flex-col md:flex-row" id="contact">
        <Reveal variant="left" className="w-full md:w-1/2 px-4 py-16 md:p-12 lg:p-24 flex flex-col justify-center relative overflow-hidden">
          {/* Brand Logo Watermark */}
          <img 
            src={brandLogo} 
            alt="AlphaOne Watermark" 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 opacity-5 pointer-events-none grayscale mix-blend-luminosity"
          />
          
          <div className="relative z-10">
            <span className="font-geist text-xs text-accent uppercase tracking-widest mb-4 block font-semibold">
              VISIT US
            </span>
            <div className="overflow-hidden mb-8 py-2">
              <motion.h2 
                className="font-syne text-[32px] md:text-[56px] text-ivory uppercase font-extrabold tracking-tight leading-none"
                initial={{ y: "110%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              >
                LOCATION
              </motion.h2>
            </div>
            <div className="flex items-start gap-4 mb-6">
              <span className="material-symbols-outlined text-accent text-2xl mt-1">location_on</span>
              <div>
                <h4 className="font-geist text-xs text-ivory uppercase tracking-widest mb-1 font-bold">Address</h4>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=LG1%2C+Maplle+Morya+Classic+building%2C+Opposite+Infinity+mall%2C+beside+What%27s+your+Bahana%2C+Andheri+West%2C+Mumbai"
                  target="_blank"
                  rel="noreferrer"
                  className="font-geist text-sm text-on-surface-variant hover:text-accent leading-relaxed transition-colors block max-w-sm"
                >
                  LG1, Maplle Morya Classic building, Opposite Infinity mall, beside What's your Bahana, Andheri West, Mumbai
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4 mb-10">
              <span className="material-symbols-outlined text-accent text-2xl mt-1">phone</span>
              <div>
                <h4 className="font-geist text-xs text-ivory uppercase tracking-widest mb-1 font-bold">Phone</h4>
                <p className="font-geist text-sm text-ivory font-bold">+91 86920 20755</p>
              </div>
            </div>
            <a
              className="inline-block bg-accent text-white px-8 py-4 font-geist text-[12px] tracking-widest uppercase hover:bg-white hover:text-surface transition-colors font-bold text-center w-fit"
              href="https://www.google.com/maps/search/?api=1&query=LG1%2C+Maplle+Morya+Classic+building%2C+Opposite+Infinity+mall%2C+beside+What%27s+your+Bahana%2C+Andheri+West%2C+Mumbai"
              target="_blank"
              rel="noreferrer"
            >
              OPEN IN MAP
            </a>
          </div>
        </Reveal>

        <Reveal variant="right" className="w-full md:w-1/2 min-h-[400px] bg-surface relative brutalist-border group overflow-hidden">
          <a
            href="https://www.google.com/maps/search/?api=1&query=LG1%2C+Maplle+Morya+Classic+building%2C+Opposite+Infinity+mall%2C+beside+What%27s+your+Bahana%2C+Andheri+West%2C+Mumbai"
            target="_blank"
            rel="noreferrer"
            className="absolute inset-0 z-20 cursor-pointer"
            aria-label="Open in Google Maps for directions"
          ></a>
          <iframe 
            src="https://maps.google.com/maps?q=Maplle+Morya+Classic,+Andheri+West,+Mumbai&t=&z=15&ie=UTF8&iwloc=near&output=embed" 
            className="absolute -top-[140px] left-0 w-full h-[calc(100%+140px)] border-0 opacity-70 group-hover:opacity-90 transition-opacity duration-700 pointer-events-none"
            style={{ filter: 'grayscale(0.8) invert(1) contrast(1.2) hue-rotate(180deg)' }}
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="AlphaOne Fitness Club Location"
          ></iframe>
          <div className="absolute inset-0 bg-surface/20 pointer-events-none z-10"></div>
          
          {/* Hover Overlay Button */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none z-30 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105">
             <div className="bg-accent text-white px-4 md:px-6 py-3 font-geist text-xs tracking-widest uppercase font-bold flex items-center gap-2 shadow-2xl">
                Open in map <span className="material-symbols-outlined text-sm">open_in_new</span>
             </div>
          </div>

          {/* Default Static Label (Fades out on hover) */}
          <div className="absolute bottom-6 left-6 flex flex-col items-start pointer-events-none z-30 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
            <span className="bg-surface/90 px-4 py-2 font-syne text-sm text-ivory uppercase font-bold backdrop-blur-md border border-outline-variant/30 shadow-lg">
              ANDHERI WEST
            </span>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
