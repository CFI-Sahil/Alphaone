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
import membershipHero from '../assets/images/Membership-hero.png';
import logoTransparent from '../assets/images/Logo_transparent.png';

function FaqItem({ question, answer, delay }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: delay / 1000, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="bg-surface-container border border-outline-variant">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex justify-between items-center cursor-pointer p-6 font-syne text-base md:text-lg text-on-background list-none font-bold text-left transition-colors hover:text-accent focus:outline-none"
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
    </motion.div>
  );
}

export default function Membership() {
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
  const tableSectionVariants = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.2 } }
  };
  const tableWrapperVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, y: 0, 
      transition: { 
        duration: 0.5, ease: "easeOut",
        staggerChildren: 0.2, delayChildren: 0.2
      } 
    }
  };
  const tableRowVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };
  const tiers = [
    {
      name: 'Essential',
      price: '₹9,999',
      desc: 'Perfect for those who want independent access to our elite facilities.',
      features: [
        '24/7 Gym Access',
        'Standard Locker Access',
        '1 Fitness Assessment'
      ],
      isPopular: false
    },
    {
      name: 'Performance',
      price: '₹14,999',
      desc: 'The complete package for dedicated athletes looking to optimize.',
      features: [
        '24/7 Gym Access',
        'Premium Locker & Towel Service',
        'Unlimited Group Classes',
        'Monthly Fitness Assessment'
      ],
      isPopular: true
    },
    {
      name: 'Elite',
      price: '₹29,999',
      desc: 'Bespoke training and nutrition for peak performance.',
      features: [
        'All Performance Benefits',
        '4x 1-on-1 PT Sessions/mo',
        'Personalized Nutrition Plan',
        'Priority Class Booking'
      ],
      isPopular: false
    }
  ];

  return (
    <div className="flex-grow w-full">
      {/* Hero Section */}
      <section className="relative w-full hero-full-height flex items-center justify-center overflow-hidden border-b border-outline-variant">
        <div className="absolute inset-0 z-0">
          <motion.div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${membershipHero})` }}
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
          <div className="absolute inset-0 brutalist-grid-overlay z-15 pointer-events-none"></div>
        </div>

        <div className="relative z-10 w-full max-w-container-max mx-auto px-4 md:px-6 flex flex-col items-center text-center mt-12">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h1 className="font-syne text-[30px] md:text-[60px] lg:text-[70px] xl:text-[80px] 2xl:text-[90px] text-on-background uppercase mb-4 tracking-tighter font-extrabold leading-none" style={{ perspective: '1000px' }}>
              <span className="block">
                {"Membership".split(" ").map((w,i) => <motion.span key={i} variants={lineRevealVariants} className="inline-block mr-[0.25em] origin-bottom">{w}</motion.span>)}
              </span>
              <span className="block text-accent">
                {"Plans".split(" ").map((w,i) => <motion.span key={i} variants={lineRevealVariants} className="inline-block mr-[0.25em] origin-bottom">{w}</motion.span>)}
              </span>
            </h1>
            <motion.p variants={itemVariants} className="font-geist text-[15px] md:text-base text-on-surface-variant max-w-2xl mx-auto uppercase tracking-widest border-t border-b border-outline-variant/30 py-4">
              Elite performance. Uncompromising discipline.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Membership Cards */}
      <section className="py-16 md:py-24 px-4 md:px-6 max-w-container-max mx-auto w-full" id="trial">
        <div className="overflow-hidden pb-2 mb-16 text-center">
          <motion.h2 
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-syne text-[32px] md:text-[52px] uppercase tracking-tight text-on-background font-extrabold m-0"
          >
            Choose Your Tier
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {tiers.map((tier, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="h-full"
            >
              <div
                className={`p-8 flex flex-col h-full transition-all duration-300 border ${
                  tier.isPopular
                    ? 'bg-surface-container border-accent relative transform md:-translate-y-4 shadow-2xl py-12'
                    : 'bg-surface-container border-outline-variant hover:border-accent'
                }`}
              >
                {tier.isPopular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-white px-4 py-1 font-geist text-[10px] tracking-widest uppercase font-bold">
                    Most Popular
                  </div>
                )}
                <h3 className="font-syne text-2xl text-on-background mb-2 font-bold">{tier.name}</h3>
                <p className="text-on-surface-variant font-geist text-sm mb-6 h-12 leading-relaxed">{tier.desc}</p>
                <div className="text-4xl font-syne text-accent mb-8 font-extrabold">
                  <PriceCounter value={tier.price} />
                  <span className="text-lg text-on-surface-variant font-geist font-normal">/mo</span>
                </div>
                <ul className="flex-grow space-y-4 mb-8">
                  {tier.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3 text-on-background font-geist text-sm">
                      <span className="material-symbols-outlined text-accent text-lg">check_circle</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full font-geist text-[12px] tracking-widest py-4 uppercase font-bold transition-all border cursor-pointer ${
                    tier.isPopular
                      ? 'bg-accent text-white hover:bg-background hover:text-accent border-accent'
                      : 'bg-secondary-fixed text-on-secondary-fixed hover:bg-surface-bright hover:text-on-background border-transparent'
                  }`}
                >
                  View Plan
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <motion.section 
        className="py-16 md:py-24 px-4 md:px-6 max-w-container-max mx-auto w-full border-t border-outline-variant/30"
        variants={tableSectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.div variants={tableRowVariants} className="overflow-hidden pb-2 mb-12 text-center">
          <motion.h2 
            variants={{ hidden: { y: "100%" }, visible: { y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } }}
            className="font-syne text-[32px] md:text-[52px] uppercase tracking-tight text-on-background font-extrabold m-0"
          >
            Compare Benefits
          </motion.h2>
        </motion.div>

        <motion.div variants={tableWrapperVariants} className="overflow-x-auto border border-outline-variant bg-surface-container p-8">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <motion.thead variants={tableRowVariants}>
              <tr className="border-b border-outline-variant">
                <th className="py-4 px-4 md:px-6 font-syne text-on-background w-1/4 font-bold uppercase text-sm">Feature</th>
                <th className="py-4 px-4 md:px-6 font-syne text-center text-on-background w-1/4 font-bold uppercase text-sm">
                  Essential
                </th>
                <th className="py-4 px-4 md:px-6 font-syne text-center text-accent w-1/4 font-bold uppercase text-sm">
                  Performance
                </th>
                <th className="py-4 px-4 md:px-6 font-syne text-center text-on-background w-1/4 font-bold uppercase text-sm">
                  Elite
                </th>
              </tr>
            </motion.thead>
            <tbody className="font-geist text-sm text-on-surface-variant">
              <motion.tr variants={tableRowVariants} className="border-b border-outline-variant/30 hover:bg-surface/50">
                <td className="py-4 px-4 md:px-6">24/7 Gym Access</td>
                <td className="py-4 px-4 md:px-6 text-center">
                  <span className="material-symbols-outlined text-accent">check</span>
                </td>
                <td className="py-4 px-4 md:px-6 text-center">
                  <span className="material-symbols-outlined text-accent">check</span>
                </td>
                <td className="py-4 px-4 md:px-6 text-center">
                  <span className="material-symbols-outlined text-accent">check</span>
                </td>
              </motion.tr>
              <motion.tr variants={tableRowVariants} className="border-b border-outline-variant/30 hover:bg-surface/50">
                <td className="py-4 px-4 md:px-6">Locker & Towel Service</td>
                <td className="py-4 px-4 md:px-6 text-center">Standard</td>
                <td className="py-4 px-4 md:px-6 text-center">Premium</td>
                <td className="py-4 px-4 md:px-6 text-center">Premium</td>
              </motion.tr>
              <motion.tr variants={tableRowVariants} className="border-b border-outline-variant/30 hover:bg-surface/50">
                <td className="py-4 px-4 md:px-6">Group Classes</td>
                <td className="py-4 px-4 md:px-6 text-center">
                  <span className="material-symbols-outlined text-on-surface-variant/50">close</span>
                </td>
                <td className="py-4 px-4 md:px-6 text-center">Unlimited</td>
                <td className="py-4 px-4 md:px-6 text-center">Priority Booking</td>
              </motion.tr>
              <motion.tr variants={tableRowVariants} className="border-b border-outline-variant/30 hover:bg-surface/50">
                <td className="py-4 px-4 md:px-6">1-on-1 PT Sessions</td>
                <td className="py-4 px-4 md:px-6 text-center">
                  <span className="material-symbols-outlined text-on-surface-variant/50">close</span>
                </td>
                <td className="py-4 px-4 md:px-6 text-center">Add-on available</td>
                <td className="py-4 px-4 md:px-6 text-center">4x Monthly</td>
              </motion.tr>
              <motion.tr variants={tableRowVariants} className="border-b border-outline-variant/30 hover:bg-surface/50">
                <td className="py-4 px-4 md:px-6">Nutrition Plan</td>
                <td className="py-4 px-4 md:px-6 text-center">
                  <span className="material-symbols-outlined text-on-surface-variant/50">close</span>
                </td>
                <td className="py-4 px-4 md:px-6 text-center">
                  <span className="material-symbols-outlined text-on-surface-variant/50">close</span>
                </td>
                <td className="py-4 px-4 md:px-6 text-center">Personalized</td>
              </motion.tr>
            </tbody>
          </table>
        </motion.div>
      </motion.section>

      {/* FAQ Accordion */}
      <section className="py-16 md:py-24 px-4 md:px-6 max-w-3xl mx-auto w-full border-t border-outline-variant/30">
        <div className="overflow-hidden pb-2 mb-12 text-center">
          <motion.h2 
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-syne text-[32px] md:text-[52px] uppercase tracking-tight text-on-background font-extrabold m-0"
          >
            FAQ
          </motion.h2>
        </div>
        <div className="space-y-4">
          <FaqItem
            question="What is the cancellation policy?"
            answer="We require a 30-day notice for all membership cancellations. You can submit a request at the front desk or via your online portal."
            delay={0}
          />
          <FaqItem
            question="Can I freeze my membership?"
            answer="Yes, memberships can be frozen for up to 3 months per calendar year with a ₹1,500/month holding fee."
            delay={100}
          />
          <FaqItem
            question="Are classes included in the basic plan?"
            answer="No, group classes are only included in the Performance and Elite tiers. Essential members can purchase drop-in class passes."
            delay={200}
          />
        </div>
      </section>

      {/* Pre-Sale Announcement / Conversion Block */}
      <section className="w-full bg-accent text-white py-16 border-t border-outline-variant/30">
        <div className="w-full max-w-container-max mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.15 } }
            }}
            className="flex flex-col items-center md:items-start gap-2"
          >
            <div className="overflow-hidden">
              <motion.div 
                variants={{
                  hidden: { y: "100%" },
                  visible: { y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
                }}
                className="flex items-center gap-4 mb-2"
              >
                <span className="hidden md:inline-block">
                  <span className="material-symbols-outlined text-4xl text-white">campaign</span>
                </span>
                <h2 className="font-syne text-2xl lg:text-3xl uppercase tracking-tight font-extrabold">Ready to Start?</h2>
              </motion.div>
            </div>
            <div className="overflow-hidden">
              <motion.p 
                variants={{
                  hidden: { y: "100%" },
                  visible: { y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
                }}
                className="font-geist text-sm text-white/80 m-0"
              >
                Book a trial or chat with our team today.
              </motion.p>
            </div>
          </motion.div>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
            }}
            className="flex flex-col sm:flex-row gap-4 w-full md:w-auto"
          >
            <motion.div
              variants={{
                hidden: { scale: 0.5, opacity: 0 },
                visible: { scale: 1, opacity: 1, transition: { duration: 0.8, ease: [0.34, 1.56, 0.64, 1] } }
              }}
            >
              <button className="btn-slide-fill-surface bg-white text-accent font-geist text-[10px] lg:text-[12px] tracking-widest px-4 lg:px-8 py-4 transition-colors font-bold uppercase w-full sm:w-auto cursor-pointer h-full">
                BOOK FREE TRIAL
              </button>
            </motion.div>
            <motion.div
              variants={{
                hidden: { scale: 0.5, opacity: 0 },
                visible: { scale: 1, opacity: 1, transition: { duration: 0.8, ease: [0.34, 1.56, 0.64, 1] } }
              }}
            >
              <a
                href="https://wa.me/918692020755?text=Hi%20AlphaOne%20Team%2C%20I'm%20interested%20in%20joining%20the%20club%21"
                target="_blank"
                rel="noreferrer"
                className="btn-slide-fill-white bg-transparent text-white font-geist text-[10px] lg:text-[12px] tracking-widest px-4 lg:px-8 py-4 transition-colors duration-300 uppercase border border-white w-full sm:w-auto flex items-center justify-center gap-2 font-bold h-full"
              >
                <i className="ri-whatsapp-fill text-lg"></i> WHATSAPP US
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
