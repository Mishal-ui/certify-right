import Link from "next/link";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Tell Us About Your Business",
    description:
      "Share your bookkeeping and accounting requirements with us. We will discuss your business, its current processes, and what level of support you are looking for.",
  },
  {
    step: "02",
    title: "Choose Your Support Model",
    description:
      "Select flexible hourly support for as-needed assistance, or a dedicated monthly accounting professional for ongoing, structured support.",
  },
  {
    step: "03",
    title: "Choose Your Expertise Level",
    description:
      "Select a Bookkeeper, Accounting Supervisor, or Accounting Manager based on the complexity and requirements of your business.",
  },
  {
    step: "04",
    title: "Get Started",
    description:
      "We agree on the scope of work, assign the appropriate professional, and begin supporting your business — keeping your financial records accurate and up to date.",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-16 lg:py-24 bg-[#0C2D5A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 text-blue-200 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            How It Works
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Getting Started Is Simple
          </h2>
          <p className="text-blue-100 text-lg max-w-xl mx-auto">
            Four simple steps to get professional accounting support for your business.
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, idx) => (
            <div key={step.step} className="relative">
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-white/10 z-0" style={{ width: "calc(100% - 2rem)", left: "calc(50% + 1.5rem)" }} />
              )}
              <div className="relative z-10 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors rounded-2xl p-6">
                <div className="w-14 h-14 bg-[#185FA5]/40 rounded-xl flex items-center justify-center mb-5">
                  <span className="text-white font-bold text-xl">{step.step}</span>
                </div>
                <h3 className="text-white font-semibold text-lg mb-3">{step.title}</h3>
                <p className="text-blue-100 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#185FA5] hover:bg-white hover:text-[#0C2D5A] text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
          >
            Start Today
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
