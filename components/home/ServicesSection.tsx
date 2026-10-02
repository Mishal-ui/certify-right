import Link from "next/link";
import { ArrowRight, BookOpen, BarChart2, TrendingUp, Target, PiggyBank, Calculator } from "lucide-react";
import { services } from "@/data/services";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  BookOpen,
  BarChart2,
  TrendingUp,
  Target,
  PiggyBank,
  Calculator,
};

export default function ServicesSection() {
  const featured = services.find((s) => s.featured);
  const rest = services.filter((s) => !s.featured);

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-[#185FA5] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Our Accounting & Financial Services
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0C2D5A] mb-4">
            Services Designed for Your Business
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            We provide practical accounting and financial solutions designed to meet the
            day-to-day and ongoing requirements of your business.
          </p>
        </div>

        {/* Featured + grid */}
        <div className="grid lg:grid-cols-5 gap-6 mb-8">
          {/* Featured: Bookkeeping */}
          {featured && (
            <div className="lg:col-span-2 bg-[#0C2D5A] rounded-2xl p-8 flex flex-col justify-between text-white">
              <div>
                <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                  {(() => {
                    const Icon = iconMap[featured.icon] || BookOpen;
                    return <Icon className="w-7 h-7 text-white" />;
                  })()}
                </div>
                <div className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-blue-200 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  Core Service
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{featured.title}</h3>
                <p className="text-blue-100 text-sm leading-relaxed mb-6">
                  {featured.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {featured.features.slice(0, 3).map((f) => (
                    <li key={f} className="flex items-start gap-2 text-blue-100 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#185FA5] mt-1.5 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href={`/services/${featured.slug}`}
                className="inline-flex items-center gap-2 bg-[#185FA5] hover:bg-white hover:text-[#0C2D5A] text-white font-semibold px-5 py-3 rounded-lg transition-colors self-start"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}

          {/* Rest: 5 services in a 3-col grid */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 content-start">
            {rest.slice(0, 5).map((service) => {
              const Icon = iconMap[service.icon] || BookOpen;
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group bg-slate-50 hover:bg-blue-50 border border-slate-100 hover:border-[#185FA5]/30 rounded-xl p-5 flex flex-col gap-3 transition-all duration-200"
                >
                  <div className="w-10 h-10 bg-white group-hover:bg-[#185FA5] border border-slate-200 group-hover:border-transparent rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200">
                    <Icon className="w-5 h-5 text-[#185FA5] group-hover:text-white transition-colors duration-200" />
                  </div>
                  <div>
                    <h3 className="text-[#0C2D5A] font-semibold text-sm mb-1 group-hover:text-[#185FA5] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-500 text-xs leading-relaxed line-clamp-2">
                      {service.tagline}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-[#185FA5] text-xs font-medium mt-auto">
                    Learn more
                    <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-[#0C2D5A] hover:bg-[#185FA5] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
