import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  FileCheck,
  HardHat,
  ClipboardCheck,
  BookOpen,
  FileText,
  Building2,
  Waves,
  Search,
  Flame,
  ArrowLeft,
  Phone,
} from "lucide-react";
import { services, getServiceBySlug } from "@/data/services";
import CTASection from "@/components/home/CTASection";

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

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: `${service.title} NSW`,
    description: service.description,
    alternates: {
      canonical: `https://certifyright.com.au/services/${service.slug}`,
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const Icon = iconMap[service.icon] || FileCheck;
  const relatedServices = services.filter((s) => s.id !== service.id).slice(0, 3);

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
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-blue-300 hover:text-white text-sm mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            All Services
          </Link>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-6 border border-white/15">
                <Icon className="w-7 h-7 text-white" />
              </div>
              {service.featured && (
                <div className="mb-3">
                  <span className="bg-[#185FA5] text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular Service
                  </span>
                </div>
              )}
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
                {service.title}
              </h1>
              <p className="text-blue-100 text-lg leading-relaxed mb-8 max-w-lg">
                {service.tagline}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white text-[#0C2D5A] hover:bg-blue-50 font-semibold px-6 py-3.5 rounded-lg transition-colors"
                >
                  Get a Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="tel:0423925514"
                  className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-white/60 text-white font-semibold px-6 py-3.5 rounded-lg transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  0423 925 514
                </a>
              </div>
            </div>
            {/* Features highlight */}
            <div className="bg-white/5 rounded-2xl border border-white/10 p-7">
              <div className="text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4">
                Key Features
              </div>
              <ul className="space-y-3">
                {service.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4.5 h-4.5 text-blue-300 flex-shrink-0 mt-0.5" />
                    <span className="text-blue-100 text-sm">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-16">
            {/* Main content */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0C2D5A] mb-6">
                Overview
              </h2>
              <div className="space-y-4">
                {service.longDescription.split("\n\n").map((para, i) => (
                  <p key={i} className="text-slate-600 leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>

              {/* Who is it for */}
              <div className="mt-10">
                <h3 className="text-xl font-bold text-[#0C2D5A] mb-5">
                  Who Is This Service For?
                </h3>
                <ul className="space-y-3">
                  {service.whoIsItFor.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-[#EEF4FC] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#185FA5]" />
                      </div>
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Process */}
              <div className="mt-10">
                <h3 className="text-xl font-bold text-[#0C2D5A] mb-6">
                  How It Works
                </h3>
                <div className="space-y-4">
                  {service.process.map((step, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-[#0C2D5A] text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <div className="bg-[#F8FAFC] rounded-xl p-4 border border-slate-100 flex-1">
                        <span className="text-slate-700 text-sm">{step}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-[#0C2D5A] rounded-2xl p-7 text-white sticky top-28">
                <h3 className="text-lg font-bold mb-4">Ready to Get Started?</h3>
                <p className="text-blue-100 text-sm leading-relaxed mb-6">
                  Get an obligation-free quote within 24 hours. Call Fadi directly or submit an enquiry.
                </p>
                <div className="space-y-3">
                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 bg-white text-[#0C2D5A] hover:bg-blue-50 font-semibold px-5 py-3 rounded-lg transition-colors text-sm w-full"
                  >
                    Get a Quote
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="tel:0423925514"
                    className="flex items-center justify-center gap-2 border border-white/30 hover:border-white/60 text-white text-sm font-semibold px-5 py-3 rounded-lg transition-colors w-full"
                  >
                    <Phone className="w-4 h-4" />
                    0423 925 514
                  </a>
                </div>
                <div className="mt-6 pt-5 border-t border-white/10 text-xs text-blue-300">
                  NSW Fair Trading Registered Building Surveyor · Class A3 · BDC2868
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="py-16 bg-[#F8FAFC] border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#0C2D5A] mb-8">
            Related Services
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {relatedServices.map((s) => {
              const SIcon = iconMap[s.icon] || FileCheck;
              return (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group bg-white rounded-2xl border border-slate-100 p-6 hover:shadow-md hover:border-blue-100 transition-all"
                >
                  <div className="w-10 h-10 bg-[#EEF4FC] rounded-xl flex items-center justify-center mb-4">
                    <SIcon className="w-5 h-5 text-[#185FA5]" />
                  </div>
                  <h3 className="text-base font-bold text-[#0C2D5A] mb-2 group-hover:text-[#185FA5] transition-colors">
                    {s.shortTitle}
                  </h3>
                  <p className="text-slate-500 text-sm line-clamp-2 mb-3">
                    {s.tagline}
                  </p>
                  <span className="text-[#185FA5] text-sm font-medium flex items-center gap-1">
                    Learn more <ArrowRight className="w-3.5 h-3.5" />
                  </span>
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
