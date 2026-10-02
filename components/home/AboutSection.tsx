import Link from "next/link";
import { ArrowRight } from "lucide-react";

const pillars = [
  {
    badge: "Experience",
    title: "20+ Years of Professional Experience",
    description:
      "With over 20 years of experience, we bring extensive knowledge and practical expertise in bookkeeping, accounting, and financial management. We provide accurate, reliable solutions tailored to each client's needs.",
  },
  {
    badge: "Value",
    title: "Reliable Bookkeeping at a Lower Cost",
    description:
      "Our efficient approach helps businesses reduce bookkeeping costs while maintaining accuracy and quality. We handle essential accounting tasks so you can focus on your core business and growth.",
  },
  {
    badge: "Solutions",
    title: "Bookkeeping & Accounting Solutions That Fit Your Business",
    description:
      "We provide bookkeeping, financial reporting, management accounts, budgeting, forecasting, and cost control. Our services can be tailored to your needs and scaled as your business grows.",
  },
  {
    badge: "Approach",
    title: "Professional, Flexible & Technology-Driven",
    description:
      "We combine professional expertise with modern accounting systems and technology to keep financial records accurate and up to date. Our approach adapts to your processes, systems, and business requirements.",
  },
];

export default function AboutSection() {
  return (
    <section className="py-16 lg:py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left column: intro */}
          <div className="lg:sticky lg:top-32">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-[#185FA5] text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
              About Us
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0C2D5A] mb-6 leading-tight">
              Professional Bookkeeping, Accounting & Financial Support
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              With 20+ years of professional experience, we provide reliable, practical,
              and cost-effective bookkeeping and accounting solutions tailored to your business.
              From maintaining accurate financial records and delivering timely reports to
              providing flexible ongoing support, we help you stay financially organized,
              gain better visibility, and focus on running and growing your business.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-[#185FA5] hover:bg-[#0C2D5A] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Learn More About Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right column: pillars */}
          <div className="space-y-6">
            {pillars.map((pillar) => (
              <div
                key={pillar.badge}
                className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="inline-flex items-center gap-2 bg-blue-50 text-[#185FA5] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
                  {pillar.badge}
                </div>
                <h3 className="text-[#0C2D5A] font-semibold text-lg mb-2">
                  {pillar.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
