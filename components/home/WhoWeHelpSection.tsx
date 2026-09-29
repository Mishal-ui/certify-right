import Link from "next/link";
import { ArrowRight, Home, HardHat, Building2, Users } from "lucide-react";

const audiences = [
  {
    id: "homeowners",
    title: "Homeowners",
    icon: Home,
    description:
      "Building a new home, adding a granny flat or extending your existing property? We make the certification process straightforward.",
    color: "#EEF4FC",
    iconColor: "#185FA5",
  },
  {
    id: "builders",
    title: "Builders",
    icon: HardHat,
    description:
      "Reliable principal certifier services with prompt inspections. We understand that delays cost money — we prioritise your schedule.",
    color: "#EEF4FC",
    iconColor: "#185FA5",
  },
  {
    id: "developers",
    title: "Developers",
    icon: Building2,
    description:
      "From CDC assessments to complex multi-dwelling projects, we provide clear, professional certification for development projects of all sizes.",
    color: "#EEF4FC",
    iconColor: "#185FA5",
  },
  {
    id: "granny-flat",
    title: "Granny Flat Companies",
    icon: Users,
    description:
      "Experienced with granny flat CDCs across NSW. We work efficiently with granny flat builders and can turn assessments around quickly.",
    color: "#EEF4FC",
    iconColor: "#185FA5",
  },
];

export default function WhoWeHelpSection() {
  return (
    <section className="py-20 lg:py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 lg:mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="h-px w-8 bg-[#185FA5]" />
            <span className="text-[#185FA5] text-xs font-semibold tracking-widest uppercase">
              Who We Help
            </span>
            <span className="h-px w-8 bg-[#185FA5]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0C2D5A] leading-tight">
            Building Approval Shouldn't Slow
            <span className="block">Your Project Down.</span>
          </h2>
          <p className="text-slate-600 text-lg mt-4 leading-relaxed">
            Whether you're a first-time homeowner or an experienced developer, Certify Right provides the same responsive, professional service.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.id}
                href="/service-areas"
                className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <div className="p-6">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: item.color }}
                  >
                    <Icon
                      className="w-6 h-6"
                      style={{ color: item.iconColor }}
                    />
                  </div>
                  <h3 className="text-lg font-bold text-[#0C2D5A] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <div className="flex items-center gap-1.5 text-[#185FA5] text-sm font-medium group-hover:gap-2.5 transition-all">
                    Learn more
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10">
          <Link
            href="/service-areas"
            className="inline-flex items-center gap-2 text-[#185FA5] font-semibold hover:text-[#0C2D5A] transition-colors border-b-2 border-[#185FA5]/30 hover:border-[#0C2D5A] pb-0.5"
          >
            View All Service Areas
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
