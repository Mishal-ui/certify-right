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

export default function ServicesSection() {
  const featured = services[0];
  const rest = services.slice(1, 7);

  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-px w-8 bg-[#185FA5]" />
            <span className="text-[#185FA5] text-xs font-semibold tracking-widest uppercase">
              Our Services
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0C2D5A] leading-tight mb-4">
            Building Certification Services
          </h2>
          <p className="text-slate-600 text-lg">
            From approvals and inspections to compliance advice — all under one roof.
          </p>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Featured CDC card */}
          <div className="lg:col-span-1 lg:row-span-2">
            <Link
              href={`/services/${featured.slug}`}
              className="group h-full flex flex-col bg-gradient-to-br from-[#0C2D5A] to-[#185FA5] rounded-2xl p-8 text-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-white/15 rounded-xl flex items-center justify-center mb-6 border border-white/20">
                <FileCheck className="w-7 h-7 text-white" />
              </div>
              <div className="mb-2">
                <span className="text-blue-200 text-xs font-semibold uppercase tracking-wider">
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white leading-tight mb-4">
                {featured.title}
              </h3>
              <p className="text-blue-100 text-sm leading-relaxed mb-6 flex-1">
                {featured.description}
              </p>
              <ul className="space-y-2.5 mb-8">
                {featured.features.slice(0, 4).map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-blue-100">
                    <CheckCircle2 className="w-4 h-4 text-blue-300 flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-2 text-white font-semibold text-sm group-hover:gap-3 transition-all mt-auto">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </div>

          {/* Other service cards */}
          {rest.map((service) => {
            const Icon = iconMap[service.icon] || FileCheck;
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-[#F8FAFC] hover:bg-white border border-slate-100 hover:border-blue-100 rounded-2xl p-6 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-[#EEF4FC] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5.5 h-5.5 text-[#185FA5]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-bold text-[#0C2D5A] leading-tight mb-2 group-hover:text-[#185FA5] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
                      {service.tagline}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-[#185FA5] flex-shrink-0 mt-1 transition-colors group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* View all */}
        <div className="text-center mt-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-[#0C2D5A] hover:bg-[#185FA5] text-white font-semibold px-7 py-3.5 rounded-lg transition-colors"
          >
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
