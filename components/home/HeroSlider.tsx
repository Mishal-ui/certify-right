"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight, CheckCircle } from "lucide-react";

const slides = [
  {
    id: 1,
    eyebrow: "Professional Accounting Support",
    headline: "Accurate Numbers.\nClear Insights.\nSmarter Decisions.",
    description:
      "With 20+ years of professional experience, we provide reliable, practical, and cost-effective bookkeeping and accounting solutions tailored to your business.",
    cta: { label: "Get a Quote", href: "/contact" },
    secondary: { label: "Our Services", href: "/services" },
    stats: [
      { value: "20+", label: "Years Experience" },
      { value: "9+", label: "Systems Supported" },
    ],
    highlights: [
      "Accurate financial records",
      "Flexible support options",
      "Cost-effective solutions",
    ],
  },
  {
    id: 2,
    eyebrow: "Bookkeeping & Financial Reporting",
    headline: "Your Books.\nIn Order.\nEvery Time.",
    description:
      "From day-to-day bookkeeping to management accounts and financial reporting — we keep your financial records accurate, organized, and up to date.",
    cta: { label: "View Pricing", href: "/contact#pricing" },
    secondary: { label: "How It Works", href: "/#how-it-works" },
    stats: [
      { value: "3", label: "Expertise Levels" },
      { value: "2", label: "Flexible Plans" },
    ],
    highlights: [
      "Bookkeeper from $10/hr",
      "Dedicated monthly professionals",
      "No lock-in contracts",
    ],
  },
  {
    id: 3,
    eyebrow: "Technology-Driven Approach",
    headline: "We Work With\nYour Systems\nAnd Processes.",
    description:
      "We work with leading accounting and ERP systems — Oracle, SAP, QuickBooks, Xero, and more. We adapt to the tools and workflows your business already uses.",
    cta: { label: "Start Today", href: "/contact" },
    secondary: { label: "Systems We Use", href: "/services" },
    stats: [
      { value: "9", label: "Platforms Supported" },
      { value: "5/7", label: "Days a Week" },
    ],
    highlights: [
      "Oracle, SAP, QuickBooks",
      "Xero, Sage, Odoo & more",
      "Custom ERP solutions",
    ],
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const shouldReduceMotion = useReducedMotion();

  const goTo = useCallback(
    (index: number, dir: number) => {
      setDirection(dir);
      setCurrent(index);
    },
    []
  );

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length, -1);
  }, [current, goTo]);

  const next = useCallback(() => {
    goTo((current + 1) % slides.length, 1);
  }, [current, goTo]);

  useEffect(() => {
    const id = setInterval(next, 5500);
    return () => clearInterval(id);
  }, [next]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  const variants = {
    enter: (dir: number) => ({
      x: shouldReduceMotion ? 0 : dir * 60,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({
      x: shouldReduceMotion ? 0 : dir * -60,
      opacity: 0,
    }),
  };

  const slide = slides[current];

  return (
    <section
      className="relative bg-[#0C2D5A] overflow-hidden min-h-[600px] lg:min-h-[680px]"
      aria-label="Hero slider"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 25%, #185FA5 0%, transparent 50%), radial-gradient(circle at 75% 75%, #185FA5 0%, transparent 50%)",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text content */}
          <div className="order-2 lg:order-1">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={slide.id}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="space-y-6"
              >
                {/* Eyebrow */}
                <div className="inline-flex items-center gap-2 bg-[#185FA5]/30 border border-[#185FA5]/40 rounded-full px-4 py-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#185FA5]" />
                  <span className="text-blue-200 text-sm font-medium">
                    {slide.eyebrow}
                  </span>
                </div>

                {/* Headline */}
                <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-white leading-tight whitespace-pre-line">
                  {slide.headline}
                </h1>

                {/* Description */}
                <p className="text-blue-100 text-lg leading-relaxed max-w-lg">
                  {slide.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2">
                  {slide.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2.5 text-blue-100 text-sm">
                      <CheckCircle className="w-4 h-4 text-[#185FA5] flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* CTAs */}
                <div className="flex flex-wrap gap-4 pt-2">
                  <Link
                    href={slide.cta.href}
                    className="inline-flex items-center gap-2 bg-[#185FA5] hover:bg-white hover:text-[#0C2D5A] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                  >
                    {slide.cta.label}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href={slide.secondary.href}
                    className="inline-flex items-center gap-2 border border-white/30 hover:border-white text-white hover:bg-white/10 font-medium px-6 py-3 rounded-lg transition-colors"
                  >
                    {slide.secondary.label}
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Stats card */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={`card-${slide.id}`}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut", delay: 0.1 }}
                className="w-full max-w-sm"
              >
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 space-y-6">
                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    {slide.stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="bg-white/10 rounded-xl p-4 text-center"
                      >
                        <div className="text-3xl font-bold text-white mb-1">
                          {stat.value}
                        </div>
                        <div className="text-blue-200 text-xs font-medium">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Plans preview */}
                  <div className="space-y-3">
                    <div className="text-blue-200 text-xs font-semibold uppercase tracking-wider">
                      Engagement Options
                    </div>
                    <div className="flex gap-2">
                      <div className="flex-1 bg-white/10 rounded-lg p-3 text-center">
                        <div className="text-white font-bold text-sm">Hourly</div>
                        <div className="text-blue-200 text-xs mt-1">from $10/hr</div>
                      </div>
                      <div className="flex-1 bg-[#185FA5]/50 rounded-lg p-3 text-center border border-[#185FA5]/60">
                        <div className="text-white font-bold text-sm">Monthly</div>
                        <div className="text-blue-200 text-xs mt-1">from $1,000/mo</div>
                      </div>
                    </div>
                  </div>

                  <div className="text-blue-200 text-xs text-center">
                    Professional bookkeeping & accounting support
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-8 left-0 right-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Dots */}
          <div className="flex items-center gap-2" role="tablist" aria-label="Slides">
            {slides.map((s, i) => (
              <button
                key={s.id}
                role="tab"
                aria-selected={i === current}
                aria-label={`Slide ${i + 1}`}
                onClick={() => goTo(i, i > current ? 1 : -1)}
                className={`transition-all duration-300 rounded-full ${
                  i === current ? "w-8 h-2 bg-white" : "w-2 h-2 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>

          {/* Prev / Next */}
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              aria-label="Previous slide"
              className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={next}
              aria-label="Next slide"
              className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
