import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  BookOpen,
  BarChart2,
  CheckCircle2,
  Clock,
  Shield,
  Star,
  Cpu,
} from "lucide-react";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Certify Right — professional bookkeeping, accounting and financial support with over 20 years of experience.",
  alternates: { canonical: "https://certifyright.com.au/about" },
};

const expertise = [
  { icon: BookOpen, label: "Bookkeeping", desc: "Accurate, organized day-to-day financial record keeping — the foundation of sound financial management." },
  { icon: BarChart2, label: "Financial Reporting", desc: "Clear, timely financial reports including profit and loss, balance sheets, and management accounts." },
  { icon: Shield, label: "Management Accounts", desc: "Practical financial and management support to help businesses understand their performance and make informed decisions." },
  { icon: Award, label: "Budgeting & Forecasting", desc: "Financial planning, budgeting, forecasting, and monitoring actual performance against expectations." },
  { icon: Star, label: "Cost Control", desc: "Analysis and monitoring of business costs to improve visibility over expenditure and support effective cost management." },
  { icon: Cpu, label: "Accounting Systems", desc: "Experienced across Oracle, SAP, QuickBooks, Xero, Sage, Odoo, Zoho Books, Microsoft Dynamics, and customized solutions." },
];

const values = [
  {
    title: "Accuracy & Quality",
    description: "We maintain high standards in everything we do, with careful attention to accuracy, completeness, and consistency across all bookkeeping and accounting work.",
  },
  {
    title: "Reliability",
    description: "We deliver on our commitments. Our clients rely on us to keep their financial records current and to provide reports and support when they need it.",
  },
  {
    title: "Professional Expertise",
    description: "Our team combines practical accounting knowledge with professional experience to handle a wide range of bookkeeping and financial requirements.",
  },
  {
    title: "Value for Money",
    description: "Our efficient approach helps reduce the cost of maintaining your accounting function while providing access to professional expertise and quality.",
  },
];

export default function AboutPage() {
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
              <span className="text-blue-300 text-xs font-semibold tracking-widest uppercase">About Us</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Professional Bookkeeping & Accounting Support
            </h1>
            <p className="text-blue-100 text-xl leading-relaxed max-w-2xl">
              With over 20 years of professional experience, we provide reliable, practical,
              and cost-effective accounting solutions tailored to your business.
            </p>
          </div>
        </div>
      </section>

      {/* About intro */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-50 text-[#185FA5] text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
                Who We Are
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0C2D5A] mb-6 leading-tight">
                Accurate Numbers. Clear Insights. Smarter Decisions.
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  We are a professional bookkeeping and accounting firm providing reliable,
                  practical, and cost-effective financial support for businesses.
                </p>
                <p>
                  With over 20 years of professional experience in bookkeeping, accounting,
                  and financial management, we bring extensive knowledge and practical expertise
                  to every client engagement. We provide accurate, reliable solutions tailored
                  to each client&apos;s unique needs and business requirements.
                </p>
                <p>
                  From maintaining accurate financial records and delivering timely reports to
                  providing flexible ongoing support, we help you stay financially organized,
                  gain better visibility into your business, and focus on running and growing
                  what matters most.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#0C2D5A] rounded-2xl p-7 text-white">
                <div className="text-5xl font-bold text-white mb-2">20+</div>
                <div className="text-blue-200 text-sm font-medium">Years of Professional Experience</div>
              </div>
              <div className="bg-blue-50 rounded-2xl p-7">
                <div className="text-5xl font-bold text-[#0C2D5A] mb-2">9+</div>
                <div className="text-slate-600 text-sm font-medium">Accounting Systems Supported</div>
              </div>
              <div className="bg-blue-50 rounded-2xl p-7">
                <div className="text-5xl font-bold text-[#0C2D5A] mb-2">6</div>
                <div className="text-slate-600 text-sm font-medium">Core Service Areas</div>
              </div>
              <div className="bg-[#185FA5] rounded-2xl p-7 text-white">
                <div className="text-5xl font-bold text-white mb-2">2</div>
                <div className="text-blue-100 text-sm font-medium">Flexible Engagement Plans</div>
              </div>
            </div>
          </div>

          {/* Expertise grid */}
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-[#0C2D5A] mb-8">
              Our Areas of Expertise
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {expertise.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="bg-[#F8FAFC] rounded-2xl p-6 border border-slate-100">
                    <div className="w-12 h-12 bg-[#EEF4FC] rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-[#185FA5]" />
                    </div>
                    <h3 className="text-[#0C2D5A] font-bold text-base mb-2">{item.label}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0C2D5A] mb-3">
              What We Stand For
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              Our values guide how we approach every client relationship and engagement.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm text-center">
                <div className="w-10 h-10 bg-[#EEF4FC] rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <CheckCircle2 className="w-5 h-5 text-[#185FA5]" />
                </div>
                <h3 className="text-[#0C2D5A] font-bold text-base mb-2">{v.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-16 lg:py-20 bg-[#0C2D5A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 text-blue-200 text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
                Our Approach
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                Professional, Flexible & Technology-Driven
              </h2>
              <p className="text-blue-100 leading-relaxed mb-6">
                We combine professional expertise with modern accounting systems and technology
                to keep financial records accurate and up to date. Our approach adapts to your
                processes, systems, and business requirements.
              </p>
              <p className="text-blue-100 leading-relaxed mb-8">
                We work with leading accounting and ERP systems — Oracle, SAP, QuickBooks, Xero,
                Sage, Odoo, Zoho Books, Microsoft Dynamics, and customized solutions — and can
                adapt to the tools and workflows your business already uses.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#185FA5] hover:bg-white hover:text-[#0C2D5A] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Clock, title: "Timely Delivery", desc: "Reports and bookkeeping delivered on schedule, every time." },
                { icon: Shield, title: "Accuracy First", desc: "Every transaction handled with care and precision." },
                { icon: Cpu, title: "Tech-Enabled", desc: "We use modern tools to improve efficiency and accessibility." },
                { icon: BookOpen, title: "Flexible Support", desc: "Hourly or monthly plans to match your business needs." },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="bg-white/10 border border-white/10 rounded-xl p-5">
                    <Icon className="w-6 h-6 text-[#185FA5] mb-3" />
                    <div className="text-white font-semibold text-sm mb-1">{item.title}</div>
                    <div className="text-blue-200 text-xs leading-relaxed">{item.desc}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
