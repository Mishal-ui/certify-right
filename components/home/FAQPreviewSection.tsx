"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { homepageFAQs } from "@/data/faqs";

export default function FAQPreviewSection() {
  const [openId, setOpenId] = useState<string | null>(homepageFAQs[0]?.id ?? null);

  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: header + CTA */}
          <div className="lg:sticky lg:top-32 self-start">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-[#185FA5]" />
              <span className="text-[#185FA5] text-xs font-semibold tracking-widest uppercase">
                Common Questions
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0C2D5A] mb-4 leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              Questions about CDCs, building inspections, certification timelines, and more —
              answered clearly.
            </p>
            <Link
              href="/faqs"
              className="inline-flex items-center gap-2 bg-[#185FA5] hover:bg-[#0C2D5A] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              All FAQs
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right: accordion */}
          <div className="space-y-3">
            {homepageFAQs.map((faq) => (
              <div
                key={faq.id}
                className="bg-[#F8FAFC] border border-slate-100 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left"
                  aria-expanded={openId === faq.id}
                >
                  <span className="text-[#0C2D5A] font-semibold text-sm leading-snug">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4.5 h-4.5 text-slate-400 flex-shrink-0 transition-transform duration-200 ${
                      openId === faq.id ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openId === faq.id && (
                  <div className="px-6 pb-5">
                    <p className="text-slate-600 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
