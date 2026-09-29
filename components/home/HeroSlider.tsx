"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Phone,
  Award,
  Clock,
  MapPin,
  Shield,
} from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const slides = [
  {
    id: 0,
    eyebrow: "NSW BUILDING CERTIFICATION",
    headline: ["Fast. Clear.", "Responsive. Done Right."],
    body: "Builders, developers and homeowners across NSW can deal directly with an experienced Registered Building Surveyor.",
    cta: { label: "Get a Quote", href: "/contact" },
    ctaSecondary: { label: "Call Fadi  0423 925 514", href: "tel:0423925514" },
    accentColor: "#185FA5",
    trust: [
      { icon: Award, label: "15+ Years Experience" },
      { icon: Shield, label: "NSW Registered Building Surveyor" },
      { icon: Clock, label: "24-Hour Quote Turnaround" },
      { icon: MapPin, label: "NSW-Wide Service" },
    ],
  },
  {
    id: 1,
    eyebrow: "COMPLYING DEVELOPMENT CERTIFICATES",
    headline: ["Certification", "Made Clear."],
    body: "We assess your project against NSW planning standards and guide you through every step — from your first enquiry to your occupation certificate.",
    cta: { label: "Explore Our Services", href: "/services" },
    ctaSecondary: { label: "Learn About CDCs", href: "/services/complying-development-certificate" },
    accentColor: "#185FA5",
    trust: [
      { icon: Award, label: "CDC Specialists" },
      { icon: Shield, label: "Class A3 Registered" },
      { icon: Clock, label: "Fast Turnaround" },
      { icon: MapPin, label: "No Council Required" },
    ],
  },
  {
    id: 2,
    eyebrow: "PRINCIPAL CERTIFIER SERVICES",
    headline: ["Keeping Your", "Project Moving."],
    body: "From the first critical stage inspection to your final occupation certificate — Certify Right keeps your project on track with responsive, reliable service.",
    cta: { label: "Appoint Us as Your Certifier", href: "/contact" },
    ctaSecondary: { label: "View All Services", href: "/services" },
    accentColor: "#185FA5",
    trust: [
      { icon: Award, label: "Civil Engineering Background" },
      { icon: Shield, label: "Accredited BDC2868" },
      { icon: Clock, label: "Prompt Inspections" },
      { icon: MapPin, label: "Greater Sydney & Beyond" },
    ],
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const prefersReduced = useReducedMotion();
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const INTERVAL = 5500;

  const goTo = useCallback((index: number) => {
    setCurrent(index);
  }, []);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  }, []);

  const pauseAutoPlay = useCallback(() => {
    setIsAutoPlaying(false);
    if (timerRef.current) clearInterval(timerRef.current);
  }, []);

  const resumeAutoPlay = useCallback(() => {
    setIsAutoPlaying(true);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying || prefersReduced) return;
    timerRef.current = setInterval(next, INTERVAL);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isAutoPlaying, next, prefersReduced]);

  // Touch/swipe support
  const touchStartX = useRef<number | null>(null);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    pauseAutoPlay();
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? next() : prev();
    }
    touchStartX.current = null;
  };

  // Keyboard
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowLeft") { prev(); pauseAutoPlay(); }
      if (e.key === "ArrowRight") { next(); pauseAutoPlay(); }
    },
    [prev, next, pauseAutoPlay]
  );

  const slideVariants = {
    enter: { opacity: 0, x: prefersReduced ? 0 : 40 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: prefersReduced ? 0 : -40 },
  };

  const slide = slides[current];

  return (
    <section
      className="relative min-h-[600px] lg:min-h-[680px] bg-[#0C2D5A] overflow-hidden"
      aria-label="Hero slider"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.04]" aria-hidden="true">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="white"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Accent shape */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full bg-[#185FA5] opacity-10 -skew-x-6 translate-x-20"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center min-h-[520px] lg:min-h-[580px]">
          {/* Left: content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: prefersReduced ? 0 : 0.4, ease: "easeInOut" }}
              className="text-white z-10"
            >
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 mb-5">
                <span className="h-px w-8 bg-blue-400" />
                <span className="text-blue-300 text-xs font-semibold tracking-widest uppercase">
                  {slide.eyebrow}
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                {slide.headline.map((line, i) => (
                  <span key={i} className="block">
                    {line}
                  </span>
                ))}
              </h1>

              {/* Body */}
              <p className="text-blue-100 text-lg leading-relaxed mb-8 max-w-lg">
                {slide.body}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 mb-10">
                <Link
                  href={slide.cta.href}
                  className="inline-flex items-center gap-2 bg-[#185FA5] hover:bg-blue-600 text-white font-semibold px-6 py-3.5 rounded-lg transition-colors text-sm"
                >
                  {slide.cta.label}
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={slide.ctaSecondary.href}
                  className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-white/60 text-white font-semibold px-6 py-3.5 rounded-lg transition-colors text-sm backdrop-blur-sm"
                >
                  {slide.ctaSecondary.href.startsWith("tel") && (
                    <Phone className="w-4 h-4" />
                  )}
                  {slide.ctaSecondary.label}
                </a>
              </div>

              {/* Trust indicators */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {slide.trust.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="flex items-center gap-2 bg-white/8 rounded-lg px-3 py-2.5 border border-white/10"
                    >
                      <Icon className="w-4 h-4 text-blue-300 flex-shrink-0" />
                      <span className="text-blue-100 text-xs font-medium leading-tight">
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Right: visual */}
          <div className="hidden lg:flex items-center justify-center relative">
            <div className="relative">
              {/* Profile card */}
              <div className="w-72 h-80 bg-white/8 rounded-2xl border border-white/15 flex items-end overflow-hidden">
                {/* Placeholder for Fadi image */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C2D5A] via-transparent to-transparent" />
                <div className="relative w-full p-6">
                  <div className="text-white font-bold text-xl">
                    Fadi Habbouche
                  </div>
                  <div className="text-blue-200 text-sm">
                    Principal Certifier
                  </div>
                  <div className="text-blue-300 text-xs mt-1">
                    Registered Building Surveyor — Class A3
                  </div>
                  <div className="mt-3 flex gap-2 flex-wrap">
                    <span className="bg-[#185FA5]/60 text-blue-100 text-xs px-2.5 py-1 rounded-full border border-white/15">
                      BDC2868
                    </span>
                    <span className="bg-[#185FA5]/60 text-blue-100 text-xs px-2.5 py-1 rounded-full border border-white/15">
                      Civil Engineer
                    </span>
                    <span className="bg-[#185FA5]/60 text-blue-100 text-xs px-2.5 py-1 rounded-full border border-white/15">
                      NSW Licensed
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating stat cards */}
              <div className="absolute -top-4 -right-8 bg-white rounded-xl shadow-xl px-4 py-3 border border-slate-100">
                <div className="text-2xl font-bold text-[#0C2D5A]">15+</div>
                <div className="text-xs text-slate-500">Years Experience</div>
              </div>
              <div className="absolute -bottom-4 -left-8 bg-white rounded-xl shadow-xl px-4 py-3 border border-slate-100">
                <div className="text-2xl font-bold text-[#185FA5]">24hr</div>
                <div className="text-xs text-slate-500">Quote Turnaround</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-6 left-0 right-0 flex items-center justify-center gap-6">
        {/* Prev */}
        <button
          onClick={() => { prev(); pauseAutoPlay(); }}
          aria-label="Previous slide"
          className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white border border-white/20 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Pagination dots */}
        <div
          className="flex items-center gap-2"
          role="tablist"
          aria-label="Slide indicators"
        >
          {slides.map((s, i) => (
            <button
              key={s.id}
              role="tab"
              aria-selected={i === current}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => { goTo(i); pauseAutoPlay(); }}
              onMouseEnter={pauseAutoPlay}
              onMouseLeave={resumeAutoPlay}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-8 h-2.5 bg-white"
                  : "w-2.5 h-2.5 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>

        {/* Next */}
        <button
          onClick={() => { next(); pauseAutoPlay(); }}
          aria-label="Next slide"
          className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white border border-white/20 transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
