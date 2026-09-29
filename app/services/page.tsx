import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  FileCheck,
  HardHat,
  CheckCircle2,
  ClipboardCheck,
  BookOpen,
  FileText,
  Building2,
  Waves,
  Search,
  Flame,
} from "lucide-react";
import { services } from "@/data/services";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Building Certification Services NSW",
  description:
    "Certify Right provides CDC, construction certificates, occupation certificates, principal certification, BCA compliance, building inspections and more across NSW.",
  alternates: { canonical: "https://certifyright.com.au/services" },
};

const iconMap: Record<string, React.ElementType> = {
  FileCheck,
  HardHat,
  CheckCircle2,
  ClipboardCheck,
  BookOpen,
  FileText,
  Building2,
  Waves,
  Search,
  Flame,
};

export default function ServicesPage() {
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
              <span className="text-blue-300 text-xs font-semibold tracking-widest uppercase">Services</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Building Certification Services
            </h1>
            <p className="text-blue-100 text-xl leading-relaxed max-w-2xl">
              From CDCs and construction certificates to inspections and compliance reports — all under one roof with a single experienced certifier.
            </p>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured CDC */}
          <div className="mb-10">
            <Link
              href={`/services/${services[0].slug}`}
              className="group block bg-gradient-to-br from-[#0C2D5A] to-[#185FA5] rounded-2xl p-10 text-white hover:shadow-xl transition-all duration-300"
            >
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-white/15 text-blue-100 text-xs font-semibold px-3 py-1 rounded-full border border-white/20">
                      Most Popular
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight mb-4">
                    {services[0].title}
                  </h2>
                  <p className="text-blue-100 leading-relaxed mb-6">
                    {services[0].description}
                  </p>
                  <div className="flex items-center gap-2 text-white font-semibold group-hover:gap-3 transition-all">
                    Learn More
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {services[0].features.slice(0, 4).map((f) => (
                    <div key={f} className="bg-white/10 rounded-xl p-4 border border-white/15">
                      <CheckCircle2 className="w-5 h-5 text-blue-300 mb-2" />
                      <span className="text-blue-100 text-sm">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          </div>

          {/* Other services */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(1).map((service) => {
              const Icon = iconMap[service.icon] || FileCheck;
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group bg-[#F8FAFC] hover:bg-white border border-slate-100 hover:border-blue-100 rounded-2xl p-7 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className="w-12 h-12 bg-[#EEF4FC] rounded-xl flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-[#185FA5]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0C2D5A] leading-tight mb-3 group-hover:text-[#185FA5] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-5">
                    {service.tagline}
                  </p>
                  <div className="flex items-center gap-1.5 text-[#185FA5] text-sm font-semibold group-hover:gap-2.5 transition-all">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
