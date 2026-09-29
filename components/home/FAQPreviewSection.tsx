"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";
import { faqs } from "@/data/faqs";

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
    <div className="border border-slate-100 rounded-xl overflow-hidden bg-white">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-slate-50 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="text-[#0C2D5A] font-semibold text-sm leading-snug">
          {faq.question}
        </span>
        <div
          className={`w-8 h-8 flex-shrink-0 rounded-full bg-[#EEF4FC] flex items-center justify-center transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <ChevronDown className="w-4 h-4 text-[#185FA5]" />
        </div>
      </button>
      {isOpen && (
        <div className="px-6 pb-5 border-t border-slate-50">
          <p className="text-slate-600 text-sm leading-relaxed pt-4">
            {faq.answer}
          </p>
        </div>
      )}
    </div>
  );
}

export default function FAQPreviewSection() {
  const previewFaqs = faqs.slice(0, 6);
  const [openId, setOpenId] = useState<string | null>(previewFaqs[0]?.id ?? null);

  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: header */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-[#185FA5]" />
              <span className="text-[#185FA5] text-xs font-semibold tracking-widest uppercase">
                FAQs
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0C2D5A] leading-tight mb-6">
              Common Questions
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Have a question about building certification, CDCs or what to expect? Find answers to the most common questions below.
            </p>
            <p className="text-slate-500 leading-relaxed mb-10">
              Can't find what you're looking for? Call Fadi directly on{" "}
              <a
                href="tel:0423925514"
                className="text-[#185FA5] font-semibold hover:underline"
              >
                0423 925 514
              </a>{" "}
              or send us an enquiry.
            </p>
            <Link
              href="/faqs"
              className="inline-flex items-center gap-2 text-[#185FA5] font-semibold hover:text-[#0C2D5A] transition-colors border-b-2 border-[#185FA5]/30 hover:border-[#0C2D5A] pb-0.5"
            >
              View All FAQs
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right: accordion */}
          <div className="space-y-3">
            {previewFaqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                faq={faq}
                isOpen={openId === faq.id}
                onToggle={() => setOpenId(openId === faq.id ? null : faq.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
