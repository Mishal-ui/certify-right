import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Globe } from "lucide-react";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "How We Work — Remote Bookkeeping & Accounting",
  description:
    "We provide professional bookkeeping and accounting support remotely, working with businesses across different locations. We adapt to the systems and processes your business already uses.",
  alternates: { canonical: "https://certifyright.com.au/service-areas" },
};

const systems = [
  "Oracle", "SAP", "QuickBooks", "Odoo", "Xero",
  "Sage", "Zoho Books", "Microsoft Dynamics", "Customized Solutions",
];

const capabilities = [
  "Day-to-day bookkeeping and financial record keeping",
  "Financial reporting and management accounts",
  "Budgeting, forecasting and cost control",
  "Accounts payable and receivable support",
  "Bank reconciliations and ledger maintenance",
  "Management consultancy and financial analysis",
];

export default function ServiceAreasPage() {
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
              <span className="text-blue-300 text-xs font-semibold tracking-widest uppercase">How We Work</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Remote Bookkeeping & Accounting Support
            </h1>
            <p className="text-blue-100 text-xl leading-relaxed max-w-2xl">
              We provide professional bookkeeping and accounting support remotely, adapting to
              the systems and processes your business already uses.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-50 text-[#185FA5] text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
                <Globe className="w-4 h-4" />
                Flexible & Remote
              </div>
              <h2 className="text-3xl font-bold text-[#0C2D5A] mb-6">
                We Work With Your Business, Wherever You Are
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed mb-8">
                <p>
                  Our bookkeeping and accounting services are delivered remotely, allowing us to
                  work with businesses across different locations efficiently and cost-effectively.
                </p>
                <p>
                  We use modern tools and technology to access your accounting systems, communicate
                  with your team, and deliver timely reports and updates — without the need for
                  on-site presence.
                </p>
                <p>
                  Whether you use a cloud-based platform like Xero or QuickBooks, or an enterprise
                  system like Oracle or SAP, we adapt to your existing infrastructure so the
                  transition to working with us is seamless.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#185FA5] hover:bg-[#0C2D5A] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Discuss Your Requirements
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="space-y-6">
              {/* What we can do */}
              <div className="bg-[#F8FAFC] rounded-2xl p-6 border border-slate-100">
                <h3 className="text-[#0C2D5A] font-bold text-lg mb-4">What We Can Support</h3>
                <ul className="space-y-2.5">
                  {capabilities.map((cap) => (
                    <li key={cap} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4.5 h-4.5 text-[#185FA5] flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 text-sm">{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Systems */}
          <div className="bg-[#0C2D5A] rounded-2xl p-10 text-white">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">
                Systems We Work With
              </h2>
              <p className="text-blue-100 max-w-xl mx-auto">
                We work across all major accounting and ERP platforms.
              </p>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
              {systems.map((sys) => (
                <div
                  key={sys}
                  className="bg-white/10 border border-white/10 rounded-xl p-3 text-center"
                >
                  <span className="text-white text-sm font-medium">{sys}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
