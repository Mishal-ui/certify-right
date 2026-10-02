"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { pricingTiers } from "@/data/pricing";

export default function PricingSection() {
  const [plan, setPlan] = useState<"hourly" | "monthly">("hourly");

  return (
    <section id="pricing" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-[#185FA5] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Get a Quote
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0C2D5A] mb-4">
            Choose the Plan That Fits Your Business
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Every business has different accounting and financial management requirements.
            We offer two simple engagement options so you only pay for the level of
            support you need.
          </p>
        </div>

        {/* Toggle */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-slate-100 rounded-xl p-1">
            <button
              onClick={() => setPlan("hourly")}
              className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                plan === "hourly"
                  ? "bg-white text-[#0C2D5A] shadow-sm"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              Hourly-Based Plan
            </button>
            <button
              onClick={() => setPlan("monthly")}
              className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                plan === "monthly"
                  ? "bg-white text-[#0C2D5A] shadow-sm"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              Monthly Fixed Plan
            </button>
          </div>
        </div>

        {/* Plan description */}
        <div className="bg-slate-50 rounded-2xl p-6 max-w-3xl mx-auto mb-10 text-center">
          {plan === "hourly" ? (
            <p className="text-slate-700 leading-relaxed">
              <span className="font-semibold text-[#0C2D5A]">Flexible Support When You Need It — </span>
              Our hourly-based plan is designed for businesses that require accounting and
              financial support on a flexible or as-needed basis. You are billed based on the
              actual hours worked. This plan is particularly suitable for businesses with minimal,
              occasional, or fluctuating accounting workloads.
            </p>
          ) : (
            <p className="text-slate-700 leading-relaxed">
              <span className="font-semibold text-[#0C2D5A]">Dedicated Ongoing Support — </span>
              Our monthly fixed plan is designed for businesses that require ongoing and dedicated
              accounting and financial support. A dedicated professional is fully deployed to manage
              the agreed scope of work, working{" "}
              <span className="font-semibold">5 days a week, 8 hours a day</span> — providing a
              cost-effective solution with predictable monthly costs.
            </p>
          )}
        </div>

        {/* Pricing cards */}
        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
          {pricingTiers.map((tier, idx) => {
            const isHighlighted = idx === 1;
            return (
              <div
                key={tier.id}
                className={`rounded-2xl p-6 flex flex-col ${
                  isHighlighted
                    ? "bg-[#0C2D5A] text-white border-2 border-[#185FA5] shadow-xl"
                    : "bg-white border border-slate-200 shadow-sm"
                }`}
              >
                {isHighlighted && (
                  <div className="inline-flex items-center gap-1 bg-[#185FA5]/50 text-blue-200 text-xs font-bold px-3 py-1 rounded-full mb-4 self-start">
                    Popular
                  </div>
                )}
                <h3 className={`text-xl font-bold mb-1 ${isHighlighted ? "text-white" : "text-[#0C2D5A]"}`}>
                  {tier.title}
                </h3>
                <div className="flex items-end gap-1 mb-4">
                  <span className={`text-4xl font-bold ${isHighlighted ? "text-white" : "text-[#0C2D5A]"}`}>
                    ${plan === "hourly" ? tier.hourlyRate.toLocaleString() : tier.monthlyRate.toLocaleString()}
                  </span>
                  <span className={`text-sm mb-1.5 ${isHighlighted ? "text-blue-200" : "text-slate-500"}`}>
                    / {plan === "hourly" ? "hour" : "month"}
                  </span>
                </div>
                <p className={`text-sm leading-relaxed mb-6 flex-1 ${isHighlighted ? "text-blue-100" : "text-slate-600"}`}>
                  {plan === "hourly" ? tier.hourlyDescription : tier.monthlyDescription}
                </p>
                <Link
                  href="/contact"
                  className={`inline-flex items-center justify-center gap-2 font-semibold px-5 py-3 rounded-lg transition-colors ${
                    isHighlighted
                      ? "bg-[#185FA5] hover:bg-white hover:text-[#0C2D5A] text-white"
                      : "bg-blue-50 hover:bg-[#185FA5] hover:text-white text-[#185FA5]"
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <div className="text-center">
          <p className="text-slate-500 text-sm">
            Not sure which option is right for you?{" "}
            <Link href="/contact" className="text-[#185FA5] hover:underline font-medium">
              Contact us to discuss your requirements.
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
