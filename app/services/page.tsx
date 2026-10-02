import type { Metadata } from "next";
import Image from "next/image";
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
  title: "Building Certification Services — NSW",
  description:
    "All NSW building certification services: CDC, Construction Certificate, Occupation Certificate, Principal Certifier, BCA/NCC Compliance, DA Support, Demolition, Swimming Pool, Building Inspections, Fire Safety.",
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

const inActionImages = [
  {
    src: "/images/fadi-inspection-action.jpg",
    pos: "object-top",
    service: "Building Inspections",
    caption: "Critical stage inspections, on site and on time",
  },
  {
    src: "/images/fadi-slab-check.jpg",
    pos: "object-top",
    service: "Principal Certifier",
    caption: "From foundation to final certificate",
  },
  {
    src: "/images/project-roof-truss.jpg",
    pos: "object-center",
    service: "Construction Certificate",
    caption: "Every construction stage covered",
  },
];

export default function ServicesPage() {
  const featured = services.find((s) => s.featured);
  const rest = services.filter((s) => !s.featured);

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
              From Complying Development Certificates to fire safety compliance — Certify Right
              handles every stage of the NSW building certification process.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Featured: CDC — with real image */}
          {featured && (
            <div className="mb-10">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-[#185FA5] text-xs font-semibold px-3 py-1.5 rounded-full mb-6 uppercase tracking-wide">
                Lead Service
              </div>
              <Link href={`/services/${featured.slug}`} className="group block">
                <div className="bg-[#0C2D5A] rounded-2xl p-8 lg:p-12 hover:bg-[#0a2449] transition-colors relative overflow-hidden">
                  <div className="absolute top-5 right-5 z-10">
                    <span className="bg-[#185FA5] text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
                      Most Popular
                    </span>
                  </div>
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-5">
                        <FileCheck className="w-7 h-7 text-white" />
                      </div>
                      <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                        {featured.title}
                      </h2>
                      <p className="text-blue-100 leading-relaxed mb-6">
                        {featured.description}
                      </p>
                      <span className="inline-flex items-center gap-2 bg-white text-[#0C2D5A] font-bold px-5 py-2.5 rounded-lg text-sm group-hover:bg-blue-50 transition-colors">
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>

                    {/* Real photo on right */}
                    <div className="hidden lg:block relative h-64 rounded-xl overflow-hidden shadow-lg">
                      <Image
                        src="/images/fadi-slab-check.jpg"
                        alt="Fadi Habbouche conducting complying development slab inspection"
                        fill
                        className="object-cover object-top"
                        sizes="(min-width: 1024px) 50vw, 0vw"
                      />
                      <div className="absolute inset-0 bg-[#0C2D5A]/25" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* Fadi in Action — editorial image strip */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-[#185FA5]" />
              <span className="text-[#185FA5] text-xs font-semibold uppercase tracking-widest">Fadi in Action</span>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {inActionImages.map(({ src, pos, service, caption }) => (
                <div key={service} className="relative h-56 rounded-2xl overflow-hidden group">
                  <Image
                    src={src}
                    alt={`${service} — Certify Right`}
                    fill
                    className={`object-cover ${pos} group-hover:scale-105 transition-transform duration-700`}
                    sizes="(min-width: 640px) 33vw, 100vw"
                  />
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: "linear-gradient(to top, rgba(12,45,90,0.85) 0%, rgba(12,45,90,0.3) 55%, transparent 100%)" }}
                  />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-blue-200 text-xs font-semibold uppercase tracking-wider mb-1">{service}</p>
                    <p className="text-white font-bold text-sm leading-snug">{caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Other services grid */}
          <h2 className="text-xl font-bold text-[#0C2D5A] mb-6">All Certification Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((service) => {
              const Icon = iconMap[service.icon] || FileText;
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group bg-[#F8FAFC] hover:bg-white border border-slate-100 hover:border-[#185FA5]/20 hover:shadow-md rounded-2xl p-7 transition-all flex flex-col"
                >
                  <div className="w-12 h-12 bg-[#EEF4FC] group-hover:bg-[#185FA5] rounded-xl flex items-center justify-center mb-5 transition-colors">
                    <Icon className="w-6 h-6 text-[#185FA5] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-[#0C2D5A] font-bold text-lg mb-2 group-hover:text-[#185FA5] transition-colors">
                    {service.shortTitle}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-1">
                    {service.tagline}
                  </p>
                  <div className="flex items-center gap-1.5 text-[#185FA5] text-sm font-semibold mt-auto">
                    Learn more
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
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
