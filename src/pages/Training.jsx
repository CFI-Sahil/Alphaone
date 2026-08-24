import React from 'react';
import Reveal from '../components/Reveal';
import { motion } from 'framer-motion';

// Import local images from assets folder
import trainingHero from '../assets/images/Training-hero.png';
import logoTransparent from '../assets/images/Logo_transparent.png';
import wolfLogo from '../assets/images/Wolf.png';
import strengthTrainingBento from '../assets/images/strength-training-bento.jpg';
import ptSession from '../assets/images/pt-session.jpg';
import goalsImg from '../assets/images/Goals.png';
import personalTraining from '../assets/images/personal training.png';
import hyroxTraining from '../assets/images/hyrox-training.jpg';
import hyroxColor from '../assets/images/hyrox-color.png';
import conditioning from '../assets/images/conditioning.png';
import groupClasses from '../assets/images/group.png';
import functionalTraining from '../assets/images/functional-training.jpg';

export default function Training() {
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
  const arsenalItems = [
    {
      img: strengthTrainingBento,
      title: 'STRENGTH',
      desc: 'Progressive overload protocols focused on foundational compound lifts.',
      tags: ['Muscle', 'Power']
    },
    {
      img: personalTraining,
      title: 'PERSONAL TRAINING',
      desc: 'Bespoke programming tailored to your specific biomechanics.',
      tags: ['Custom Goals', 'Accountability']
    },
    {
      img: hyroxColor,
      title: 'HYROX',
      desc: 'Official HYROX affiliate training center for the ultimate fitness race.',
      tags: ['Competition', 'Endurance']
    },
    {
      img: functionalTraining,
      title: 'FUNCTIONAL',
      desc: 'Multi-planar movement mastery, agility, and core stabilization.',
      tags: ['Mobility', 'Agility']
    },
    {
      img: conditioning,
      title: 'CONDITIONING',
      desc: 'High-intensity energy system development to push the cardiovascular threshold.',
      tags: ['Fat Loss', 'Stamina']
    },
    {
      img: groupClasses,
      title: 'GROUP CLASSES',
      desc: 'High-energy collective training sessions led by elite coaches.',
      tags: ['Community', 'Motivation']
    }
  ];

  return (
    <div className="flex-grow">
      {/* Hero Section */}
      <section className="relative w-full hero-full-height flex items-center justify-center brutalist-border-bottom overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.div
            className="w-full h-full bg-surface-container-highest bg-cover bg-center"
            style={{ backgroundImage: `url(${trainingHero})` }}
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
          <div className="absolute inset-0 brutalist-grid-overlay z-15 pointer-events-none"></div>
        </div>


        <div className="relative z-10 text-center px-4 md:px-6 max-w-container-max w-full">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <h1 className="font-syne text-[36px] md:text-[64px] lg:text-[70px] xl:text-[80px] 2xl:text-[90px] text-ivory uppercase leading-none mb-6 font-extrabold tracking-tight" style={{ perspective: '1000px' }}>
              <span className="block">
                {"TRAIN LIKE".split(" ").map((w,i) => <motion.span key={i} variants={lineRevealVariants} className="inline-block mr-[0.25em] origin-bottom">{w}</motion.span>)}
              </span>
              <span className="block text-accent mt-1 md:mt-2">
                {"AN ATHLETE.".split(" ").map((w,i) => <motion.span key={i} variants={lineRevealVariants} className="inline-block mr-[0.25em] origin-bottom">{w}</motion.span>)}
              </span>
            </h1>
            <motion.p variants={itemVariants} className="font-geist text-base md:text-lg text-tertiary max-w-2xl mx-auto mb-10 leading-relaxed">
              Uncompromising methodology. Elite equipment. Measurable results. Step into the arena.
            </motion.p>
            <motion.a
              variants={itemVariants}
              href="#arsenal"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('arsenal').scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-slide-fill inline-block bg-ivory text-black font-geist text-[12px] tracking-widest px-8 py-4 transition-colors duration-300 font-bold uppercase cursor-pointer"
            >
              DISCOVER PROGRAMS
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Program Overview (Bento Grid) */}
      <section className="py-24 px-4 md:px-6 max-w-container-max mx-auto brutalist-border-bottom" id="arsenal">
        <div className="mb-16 flex justify-between items-end border-b border-outline-variant/30 pb-6">
          <Reveal variant="left">
            <h2 className="font-syne text-[32px] md:text-[56px] text-ivory uppercase font-extrabold tracking-tight">
              THE ARSENAL
            </h2>
            <p className="font-geist text-sm md:text-base text-tertiary max-w-md mt-2">
              Our core training pillars designed for complete athletic development.
            </p>
          </Reveal>
          <Reveal variant="right" className="hidden md:block">
            <span className="material-symbols-outlined text-4xl text-accent">fitness_center</span>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {arsenalItems.map((item, idx) => (
            <Reveal key={idx} variant="up" delay={idx * 100}>
              <div className="brutalist-border bg-surface flex flex-col group hover:bg-[#262626] transition-colors duration-300 h-full">
                <div className="h-48 w-full bg-surface-container-highest overflow-hidden border-b border-[#262626]">
                  <img
                    alt={item.title}
                    tabIndex={0}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 active:grayscale-0 focus:grayscale-0 transition-all duration-500 cursor-pointer"
                    src={item.img}
                  />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="font-syne text-xl text-ivory uppercase mb-2 font-bold">{item.title}</h3>
                  <p className="font-geist text-sm text-tertiary mb-6 line-clamp-2 leading-relaxed">{item.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-8 items-center lg:items-start xl:items-center mt-auto">
                    <span className="text-accent font-geist text-[10px] tracking-widest uppercase mr-2 lg:w-full xl:w-auto lg:mb-1 xl:mb-0 font-bold shrink-0">
                      BEST FOR:
                    </span>
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-[#353535] text-ivory font-geist text-[10px] tracking-widest uppercase px-3 py-1 font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="border-t border-outline-variant pt-4 flex justify-between items-center text-accent font-geist text-[12px] tracking-widest uppercase group-hover:text-ivory transition-colors font-bold">
                    <span>Explore Protocol</span>
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Detail Section */}
      <section className="py-24 px-4 md:px-6 max-w-container-max mx-auto brutalist-border-bottom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <Reveal variant="left" className="order-2 lg:order-1">
            <h2 className="font-syne text-[32px] md:text-[56px] text-ivory uppercase mb-10 font-extrabold leading-[0.9] tracking-tight">
              PERSONAL<br />
              TRAINING
            </h2>
            <div className="mb-8">
              <h3 className="font-geist text-xs text-accent uppercase mb-2 tracking-widest font-bold">WHAT IT IS</h3>
              <p className="font-geist text-base text-tertiary leading-relaxed">
                Bespoke programming tailored to your specific biomechanics and performance objectives. Our elite coaches
                are technicians of the human body, providing uncompromising 1-on-1 guidance.
              </p>
            </div>
            <div className="mb-8">
              <h3 className="font-geist text-xs text-accent uppercase mb-2 tracking-widest font-bold">WHO IT'S FOR</h3>
              <p className="font-geist text-base text-tertiary leading-relaxed">
                Athletes, beginners, and individuals seeking maximum results, specialized attention, injury
                rehabilitation, or complete accountability in their fitness journey.
              </p>
            </div>
            <div className="mb-10">
              <h3 className="font-geist text-xs text-accent uppercase mb-4 tracking-widest font-bold">BENEFITS</h3>
              <ul className="space-y-3 font-geist text-sm text-tertiary">
                <li className="flex items-start">
                  <span className="material-symbols-outlined text-accent mr-3 mt-0.5">check_circle</span>
                  <span>Comprehensive Biomechanical Assessment</span>
                </li>
                <li className="flex items-start">
                  <span className="material-symbols-outlined text-accent mr-3 mt-0.5">check_circle</span>
                  <span>Data-Driven Progress Tracking</span>
                </li>
                <li className="flex items-start">
                  <span className="material-symbols-outlined text-accent mr-3 mt-0.5">check_circle</span>
                  <span>Nutritional Optimization Strategies</span>
                </li>
                <li className="flex items-start">
                  <span className="material-symbols-outlined text-accent mr-3 mt-0.5">check_circle</span>
                  <span>Injury Prevention & Corrective Exercise</span>
                </li>
              </ul>
            </div>
            <a
              href="#coaches"
              onClick={(e) => e.preventDefault()}
              className="btn-slide-fill inline-block bg-ivory text-black font-geist text-[12px] tracking-widest px-8 py-4 transition-colors duration-300 font-bold uppercase cursor-pointer"
            >
              MEET THE COACHES
            </a>
          </Reveal>

          <Reveal variant="right" className="order-1 lg:order-2 relative">
            <div className="brutalist-border p-2 w-full aspect-[3/4]">
              <img
                alt="Personal Training Session"
                className="w-full h-full object-cover transition-all duration-500"
                src={goalsImg}
              />
            </div>
            {/* Decorative geometric element */}
            <div className="absolute -z-10 top-6 -right-6 w-full h-full border border-accent/30 hidden lg:block"></div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
