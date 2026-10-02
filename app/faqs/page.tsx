"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Mail, ArrowRight } from "lucide-react";
import { faqs } from "@/data/faqs";
import CTASection from "@/components/home/CTASection";

const categories = ["All", "General", "Plans"];

function AccordionItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border border-slate-100 rounded-xl overflow-hidden bg-white shadow-sm">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-slate-50 transition-colors"
        aria-expanded={isOpen}
      >
        <div className="flex items-start gap-4">
          <span className="text-[#185FA5] text-xs font-semibold bg-[#EEF4FC] px-2.5 py-1 rounded-full mt-0.5 flex-shrink-0">
            {faq.category}
          </span>
          <span className="text-[#0C2D5A] font-semibold text-sm leading-snug">
            {faq.question}
          </span>
        </div>
        <div
          className={`w-8 h-8 flex-shrink-0 rounded-full bg-[#EEF4FC] flex items-center justify-center transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <ChevronDown className="w-4 h-4 text-[#185FA5]" />
        </div>
      </button>
      {isOpen && (
        <div className="px-6 pb-6 border-t border-slate-50">
          <p className="text-slate-600 text-sm leading-relaxed pt-4">
            {faq.answer}
          </p>
        </div>
      )}
    </div>
  );
}

export default function FAQsPage() {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id ?? null);
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? faqs
      : faqs.filter((f) => f.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="bg-[#0C2D5A] py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" aria-hidden="true">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="g" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#g)" />
          </svg>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-blue-400" />
              <span className="text-blue-300 text-xs font-semibold tracking-widest uppercase">FAQs</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-blue-100 text-xl leading-relaxed max-w-2xl">
              Common questions about our bookkeeping, accounting services, and pricing plans. Can&apos;t find your answer? Get in touch.
            </p>
            <a
              href="mailto:info@certifyright.com.au"
              className="inline-flex items-center gap-2 mt-6 text-blue-200 hover:text-white transition-colors text-sm"
            >
              <Mail className="w-4 h-4" />
              info@certifyright.com.au
            </a>
          </div>
        </div>
      </section>

      {/* FAQ content */}
      <section className="py-20 lg:py-24 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                  activeCategory === cat
                    ? "bg-[#0C2D5A] text-white"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-[#185FA5] hover:text-[#185FA5]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="space-y-3">
            {filtered.map((faq) => (
              <AccordionItem
                key={faq.id}
                faq={faq}
                isOpen={openId === faq.id}
                onToggle={() => setOpenId(openId === faq.id ? null : faq.id)}
              />
            ))}
          </div>

          {/* Still have questions */}
          <div className="mt-14 bg-white rounded-2xl border border-slate-100 shadow-sm p-8 text-center">
            <h2 className="text-2xl font-bold text-[#0C2D5A] mb-3">
              Still Have Questions?
            </h2>
            <p className="text-slate-600 mb-6">
              Get in touch and we will help you find the right level of support for your business.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:info@certifyright.com.au"
                className="inline-flex items-center gap-2 bg-[#185FA5] hover:bg-[#0C2D5A] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                <Mail className="w-4 h-4" />
                Email Us
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border-2 border-[#0C2D5A] text-[#0C2D5A] hover:bg-[#0C2D5A] hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Send an Enquiry
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
