"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Phone,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
} from "lucide-react";

interface SlideData {
  id: number;
  chip: string;
  headline: string;
  accent: string;
  body: string;
  cta1: { label: string; href: string };
  cta2: { label: string; href: string; phone?: boolean };
  img: string;
  imgAlt: string;
  showCredential?: boolean;
}

const SLIDES: SlideData[] = [
  {
    id: 0,
    chip: "NSW Building Certification",
    headline: "Fast. Clear. Responsive.",
    accent: "Done Right.",
    body: "Fadi Habbouche is a NSW Registered Building Surveyor (Class A3 · BDC2868) and Civil Engineer with 15+ years experience — handling your certification from start to finish.",
    cta1: { label: "Get a Quote Within 24 Hours", href: "/contact" },
    cta2: { label: "0423 925 514", href: "tel:0423925514", phone: true },
    img: "/images/fadi-headshot.jpg",
    imgAlt: "Fadi Habbouche — NSW Registered Building Surveyor, Class A3",
    showCredential: true,
  },
  {
    id: 1,
    chip: "Complying Development Certificate",
    headline: "Skip Council.",
    accent: "Get Your CDC Faster.",
    body: "A CDC is the fastest path to building approval for eligible residential projects — no DA, no council queue. We assess your project against SEPP codes and give you a straight answer upfront.",
    cta1: { label: "Learn About CDC", href: "/services/complying-development-certificate" },
    cta2: { label: "Call Fadi", href: "tel:0423925514", phone: true },
    img: "/images/fadi-onsite.jpg",
    imgAlt: "Fadi Habbouche conducting on-site building certification assessment",
  },
  {
    id: 2,
    chip: "NSW-Wide Coverage",
    headline: "Certification You Can",
    accent: "Actually Rely On.",
    body: "From Greater Sydney to regional NSW — Certify Right manages every stage of your building certification with clear communication, thorough inspections, and no surprises.",
    cta1: { label: "Our Services", href: "/services" },
    cta2: { label: "Service Areas", href: "/service-areas" },
    img: "/images/project-slab.jpg",
    imgAlt: "NSW building project — concrete slab foundation inspection, Blue Mountains backdrop",
  },
];

const TRUST_BADGES = [
  { Icon: ShieldCheck, label: "NSW Fair Trading Registered" },
  { Icon: CheckCircle2, label: "Class A3 · BDC2868" },
  { Icon: Clock, label: "24-Hr Quote Turnaround" },
];

const AUTO_MS = 6000;

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [paused, setPaused] = useState(false);
  const reduced = useReducedMotion();

  const goNext = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % SLIDES.length);
  }, []);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  const goTo = useCallback(
    (n: number) => {
      setDirection(n > current ? 1 : -1);
      setCurrent(n);
    },
    [current]
  );

  useEffect(() => {
    if (paused) return;
    const id = setInterval(goNext, AUTO_MS);
    return () => clearInterval(id);
  }, [goNext, paused]);

  const slide = SLIDES[current];
  const dy = reduced ? 0 : 18;

  const textVariants = {
    enter: (d: number) => ({ opacity: 0, y: d * dy }),
    center: { opacity: 1, y: 0 },
    exit: (d: number) => ({ opacity: 0, y: d * -dy }),
  };

  return (
    <section
      className="relative bg-[#0C2D5A] min-h-[90vh] overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
      aria-label="Hero"
    >
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" aria-hidden="true">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hg" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hg)" />
        </svg>
      </div>

      {/* Desktop image panel — bleeds to right edge */}
      <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[46%] z-0">
        {/* Left-edge gradient fade into navy */}
        <div
          className="absolute left-0 top-0 bottom-0 w-40 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #0C2D5A 0%, transparent 100%)" }}
          aria-hidden="true"
        />
        {/* Bottom gradient */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to top, #0C2D5A 0%, transparent 100%)" }}
          aria-hidden="true"
        />

        <AnimatePresence>
          <motion.div
            key={`desktop-img-${current}`}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.65 }}
          >
            <Image
              src={slide.img}
              alt={slide.imgAlt}
              fill
              className="object-cover object-top"
              sizes="(min-width: 1024px) 46vw, 0vw"
              priority={current === 0}
            />
            <div className="absolute inset-0 bg-[#0C2D5A]/20" />
          </motion.div>
        </AnimatePresence>

        {/* Credential card — slide 0 only */}
        <AnimatePresence>
          {slide.showCredential && (
            <motion.div
              key="credential-card"
              className="absolute bottom-10 right-8 z-20"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              <div className="bg-[#0A2448]/90 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-4 shadow-2xl">
                <p className="text-white font-bold text-sm leading-snug">Fadi Habbouche</p>
                <p className="text-blue-300 text-xs mt-0.5">NSW Registered Building Surveyor</p>
                <p className="text-white/70 text-xs mt-0.5">Class A3 · BDC2868 · Civil Engineer</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile: image as background overlay */}
      <div className="lg:hidden absolute inset-0 z-0" aria-hidden="true">
        <AnimatePresence>
          <motion.div
            key={`mobile-bg-${current}`}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.65 }}
          >
            <Image
              src={slide.img}
              alt=""
              fill
              className="object-cover object-top"
              sizes="100vw"
              priority={current === 0}
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-[#0C2D5A]/80" />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center min-h-[90vh]">
        <div className="w-full lg:w-[54%] py-20 lg:py-28">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={`text-${current}`}
              custom={direction}
              variants={textVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              {/* Chip label */}
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-8 bg-blue-400 flex-shrink-0" />
                <span className="text-blue-300 text-xs font-semibold tracking-widest uppercase">
                  {slide.chip}
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-6xl font-bold text-white leading-[1.1] mb-5">
                {slide.headline}
                <br />
                <span className="text-blue-300">{slide.accent}</span>
              </h1>

              {/* Body */}
              <p className="text-blue-100/90 text-lg leading-relaxed mb-8 max-w-[500px]">
                {slide.body}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3 mb-10">
                <Link
                  href={slide.cta1.href}
                  className="inline-flex items-center gap-2 bg-white text-[#0C2D5A] hover:bg-blue-50 font-bold px-6 py-3.5 rounded-xl transition-colors text-sm shadow-lg shadow-black/20"
                >
                  {slide.cta1.label}
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={slide.cta2.href}
                  className="inline-flex items-center gap-2 border-2 border-white/25 hover:border-white/60 hover:bg-white/5 text-white font-semibold px-6 py-3.5 rounded-xl transition-all text-sm"
                >
                  {slide.cta2.phone && <Phone className="w-4 h-4 flex-shrink-0" />}
                  {slide.cta2.label}
                </a>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-2">
                {TRUST_BADGES.map(({ Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 bg-white/10 border border-white/15 rounded-lg px-3 py-2"
                  >
                    <Icon className="w-3.5 h-3.5 text-blue-300 flex-shrink-0" />
                    <span className="text-white/90 text-xs font-medium whitespace-nowrap">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slide controls */}
          <div className="flex items-center gap-4 mt-12">
            {/* Dot indicators */}
            <div className="flex items-center gap-2">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-7 h-2 bg-white"
                      : "w-2 h-2 bg-white/35 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
            {/* Prev / Next */}
            <div className="flex gap-2 ml-auto">
              <button
                onClick={goPrev}
                aria-label="Previous slide"
                className="w-9 h-9 rounded-full border border-white/20 hover:border-white/50 flex items-center justify-center text-white/60 hover:text-white transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={goNext}
                aria-label="Next slide"
                className="w-9 h-9 rounded-full border border-white/20 hover:border-white/50 flex items-center justify-center text-white/60 hover:text-white transition-all"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Auto-advance progress bar */}
      {!paused && (
        <motion.div
          key={`progress-${current}`}
          className="absolute bottom-0 left-0 h-[3px] bg-white/25 z-20"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: AUTO_MS / 1000, ease: "linear" }}
          aria-hidden="true"
        />
      )}
    </section>
  );
}
