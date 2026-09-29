import Link from "next/link";
import { ArrowRight, Award, Clock, MapPin, Shield, CheckCircle2 } from "lucide-react";

const trustIndicators = [
  { icon: Award, label: "15+ Years Experience", desc: "Across the NSW built environment" },
  { icon: Shield, label: "Registered Building Surveyor", desc: "NSW Fair Trading Class A3" },
  { icon: Clock, label: "24-Hour Quote Turnaround", desc: "Clear, obligation-free quotes" },
  { icon: MapPin, label: "NSW-Wide Service", desc: "Based in Western Sydney" },
];

const highlights = [
  "Deal directly with the certifier — no intermediaries",
  "Fast, clear responses throughout your project",
  "CDC, CC and OC under one roof",
  "Experience across residential, commercial and industrial",
];

export default function AboutSection() {
  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left visual */}
          <div className="relative">
            <div className="aspect-[4/5] max-w-md mx-auto lg:mx-0 bg-gradient-to-br from-[#EEF4FC] to-[#DAEAF8] rounded-2xl overflow-hidden border border-blue-100 shadow-lg">
              {/* Placeholder visual for Fadi image */}
              <div className="absolute inset-0 flex flex-col items-center justify-end p-8 bg-gradient-to-t from-[#0C2D5A]/90 via-[#0C2D5A]/20 to-transparent">
                <div className="text-center">
                  <div className="text-white font-bold text-2xl mb-1">
                    Fadi Habbouche
                  </div>
                  <div className="text-blue-200 text-sm mb-3">
                    Principal Certifier / Registered Building Surveyor
                  </div>
                  <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white text-xs px-4 py-2 rounded-full border border-white/20">
                    <Shield className="w-3.5 h-3.5 text-blue-300" />
                    NSW Fair Trading · BDC2868
                  </div>
                </div>
              </div>

              {/* Decorative badge */}
              <div className="absolute top-6 left-6 bg-white rounded-xl shadow-md px-4 py-3 border border-slate-100">
                <div className="text-3xl font-bold text-[#0C2D5A] leading-none">
                  15+
                </div>
                <div className="text-xs text-slate-500 font-medium mt-0.5">
                  Years Experience
                </div>
              </div>
            </div>
          </div>

          {/* Right content */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-[#185FA5]" />
              <span className="text-[#185FA5] text-xs font-semibold tracking-widest uppercase">
                About Certify Right
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0C2D5A] leading-tight mb-6">
              Certification Made Clear.
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Certify Right is a Sydney-based building certification practice run by Fadi Habbouche — a Registered Building Surveyor with a background in civil engineering, building design and fire safety.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              We work with builders, developers, homeowners and granny flat companies across NSW to make the certification process as clear and straightforward as possible. No unnecessary delays, no confusing jargon — just professional, responsive service from someone who actually understands construction.
            </p>

            {/* Highlights */}
            <ul className="space-y-3 mb-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#185FA5] flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>

            {/* Trust indicators grid */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {trustIndicators.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="bg-[#F8FAFC] rounded-xl p-4 border border-slate-100"
                  >
                    <div className="w-9 h-9 bg-[#EEF4FC] rounded-lg flex items-center justify-center mb-2.5">
                      <Icon className="w-4.5 h-4.5 text-[#185FA5]" />
                    </div>
                    <div className="text-sm font-semibold text-[#0C2D5A] leading-tight mb-0.5">
                      {item.label}
                    </div>
                    <div className="text-xs text-slate-500">{item.desc}</div>
                  </div>
                );
              })}
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#185FA5] hover:bg-[#0C2D5A] text-white font-semibold px-7 py-3.5 rounded-lg transition-colors"
            >
              Get a Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
