import Link from "next/link";
import { ArrowRight, Award, BookOpen, Building2, Flame, HardHat, Shield, Star } from "lucide-react";

const expertise = [
  { icon: BookOpen, label: "Civil Engineering", desc: "Bachelor of Civil Engineering" },
  { icon: Shield, label: "Building Surveying", desc: "Registered Building Surveyor" },
  { icon: HardHat, label: "Building Design", desc: "Across residential & commercial" },
  { icon: Building2, label: "Council Compliance", desc: "Extensive council experience" },
  { icon: Flame, label: "Fire Safety", desc: "NCC fire safety compliance" },
  { icon: Award, label: "Private Certification", desc: "15+ years in NSW" },
];

export default function AboutFadiSection() {
  return (
    <section className="py-20 lg:py-24 bg-[#0C2D5A] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.04]" aria-hidden="true">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#185FA5]/20 -skew-x-6 translate-x-12" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: content */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-blue-400" />
              <span className="text-blue-300 text-xs font-semibold tracking-widest uppercase">
                About Fadi
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              More Than Certification.
              <span className="block text-blue-200">Real Building Expertise.</span>
            </h2>
            <p className="text-blue-100 text-lg leading-relaxed mb-6">
              Fadi Habbouche is the principal certifier and director of Certify Right. With a Bachelor of Civil Engineering and over 15 years of hands-on experience across the NSW built environment, Fadi brings a depth of expertise that goes far beyond paperwork.
            </p>
            <p className="text-blue-200 leading-relaxed mb-8">
              His background spans civil engineering, building design, council compliance, fire safety and private certification — an unusual combination that means he genuinely understands your project, not just the approval process.
            </p>

            {/* Accreditation callout */}
            <div className="bg-white/8 border border-white/15 rounded-xl p-5 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-[#185FA5]/40 rounded-lg flex items-center justify-center flex-shrink-0 border border-white/20">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold mb-1">
                    NSW Fair Trading — Registered Building Surveyor
                  </div>
                  <div className="text-blue-200 text-sm">
                    Class A3 · Accreditation Number BDC2868
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-white text-[#0C2D5A] hover:bg-blue-50 font-semibold px-7 py-3.5 rounded-lg transition-colors"
            >
              Meet Fadi
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right: expertise grid */}
          <div>
            <div className="text-blue-200 text-sm font-medium mb-5 uppercase tracking-wider">
              Areas of Expertise
            </div>
            <div className="grid grid-cols-2 gap-3">
              {expertise.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="bg-white/8 border border-white/10 rounded-xl p-5 hover:bg-white/12 transition-colors"
                  >
                    <div className="w-10 h-10 bg-[#185FA5]/40 rounded-lg flex items-center justify-center mb-3 border border-white/15">
                      <Icon className="w-5 h-5 text-blue-200" />
                    </div>
                    <div className="text-white font-semibold text-sm mb-1">
                      {item.label}
                    </div>
                    <div className="text-blue-300 text-xs">{item.desc}</div>
                  </div>
                );
              })}
            </div>

            {/* Memberships */}
            <div className="mt-6 pt-5 border-t border-white/10">
              <div className="text-blue-300 text-xs uppercase tracking-wider mb-3">
                Professional Memberships
              </div>
              <div className="flex flex-wrap gap-2">
                {["AIBS Member", "AAC Member", "NSW Fair Trading Registered"].map((m) => (
                  <span
                    key={m}
                    className="bg-white/8 border border-white/15 text-blue-100 text-xs px-3 py-1.5 rounded-full"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
