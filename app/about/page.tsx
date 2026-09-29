import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  BookOpen,
  Building2,
  CheckCircle2,
  Flame,
  HardHat,
  MapPin,
  Phone,
  Shield,
  Star,
} from "lucide-react";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "About Us — Fadi Habbouche & Certify Right",
  description:
    "Learn about Certify Right and principal certifier Fadi Habbouche. Registered Building Surveyor (Class A3, BDC2868) with 15+ years across NSW. Civil engineering, building surveying and fire safety expertise.",
  alternates: { canonical: "https://certifyright.com.au/about" },
};

const qualifications = [
  { label: "Bachelor of Civil Engineering", institution: "Formal tertiary qualification" },
  { label: "Registered Building Surveyor — Class A3", institution: "NSW Fair Trading · BDC2868" },
  {
    label: "Australian Institute of Building Surveyors",
    institution: "Professional member — AIBS",
  },
  {
    label: "Association of Accredited Certifiers",
    institution: "Professional member — AAC",
  },
];

const expertise = [
  { icon: BookOpen, label: "Civil Engineering", desc: "Structural understanding and construction methodology across residential, commercial and civil projects." },
  { icon: Shield, label: "Building Surveying", desc: "NSW Fair Trading Registered Building Surveyor, Class A3. Assessment and certification under NSW planning legislation." },
  { icon: HardHat, label: "Building Design", desc: "Design experience across residential and commercial projects, providing practical compliance insight." },
  { icon: Building2, label: "Council Compliance", desc: "Extensive experience navigating council requirements and development application processes." },
  { icon: Flame, label: "Fire Safety", desc: "NCC/BCA fire safety compliance, Annual Fire Safety Statements and fire safety upgrade advice." },
  { icon: Award, label: "Private Certification", desc: "15+ years as a registered certifier across metropolitan and regional NSW." },
];

export default function AboutPage() {
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
              <span className="text-blue-300 text-xs font-semibold tracking-widest uppercase">About Us</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              About Certify Right
            </h1>
            <p className="text-blue-100 text-xl leading-relaxed max-w-2xl">
              A NSW building certification practice built on real engineering expertise, professional integrity, and a commitment to keeping your project moving.
            </p>
          </div>
        </div>
      </section>

      {/* Company overview */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="h-px w-8 bg-[#185FA5]" />
                <span className="text-[#185FA5] text-xs font-semibold tracking-widest uppercase">Our Story</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0C2D5A] leading-tight mb-6">
                Certification Made Clear.
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Certify Right was established to offer builders, developers and homeowners direct access to an experienced, qualified certifier — without the bureaucracy and delays that often come with the certification process.
                </p>
                <p>
                  Based in Merrylands in Western Sydney, we operate across all of NSW. We work with a wide range of clients — from homeowners building granny flats to developers managing large residential projects.
                </p>
                <p>
                  What sets Certify Right apart is simple: when you contact us, you deal directly with Fadi. No front-of-house staff, no delays waiting for information to be passed along — just direct, professional service from the certifier himself.
                </p>
              </div>

              <div className="mt-8 bg-[#F8FAFC] rounded-xl p-6 border border-slate-100">
                <div className="text-sm font-semibold text-[#0C2D5A] mb-4">Business Details</div>
                <div className="space-y-2 text-sm text-slate-600">
                  <div className="flex gap-2"><span className="text-slate-400 w-28 flex-shrink-0">Company:</span><span>Certify Right Pty Ltd</span></div>
                  <div className="flex gap-2"><span className="text-slate-400 w-28 flex-shrink-0">ABN:</span><span>34 681 512 443</span></div>
                  <div className="flex gap-2"><span className="text-slate-400 w-28 flex-shrink-0">ACN:</span><span>681 512 443</span></div>
                  <div className="flex gap-2"><span className="text-slate-400 w-28 flex-shrink-0">Location:</span><span>Merrylands NSW 2160</span></div>
                  <div className="flex gap-2"><span className="text-slate-400 w-28 flex-shrink-0">Phone:</span><a href="tel:0423925514" className="text-[#185FA5] hover:underline">0423 925 514</a></div>
                  <div className="flex gap-2"><span className="text-slate-400 w-28 flex-shrink-0">Email:</span><a href="mailto:info@certifyright.com.au" className="text-[#185FA5] hover:underline">info@certifyright.com.au</a></div>
                </div>
              </div>
            </div>

            {/* Fadi profile */}
            <div>
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                {/* Profile header */}
                <div className="bg-[#0C2D5A] p-8">
                  <div className="flex items-start gap-5">
                    <div className="w-20 h-20 bg-white/15 rounded-2xl flex items-center justify-center flex-shrink-0 border border-white/20">
                      <span className="text-white font-bold text-2xl">FH</span>
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-2xl mb-1">Fadi Habbouche</h3>
                      <p className="text-blue-200 text-sm">Principal Certifier / Registered Building Surveyor</p>
                      <div className="flex items-center gap-2 mt-3">
                        <span className="bg-white/10 text-blue-100 text-xs px-3 py-1 rounded-full border border-white/15">BDC2868</span>
                        <span className="bg-white/10 text-blue-100 text-xs px-3 py-1 rounded-full border border-white/15">Class A3</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <div className="space-y-4 text-slate-600 text-sm leading-relaxed mb-6">
                    <p>
                      Fadi Habbouche is the director and principal certifier of Certify Right. With a Bachelor of Civil Engineering and extensive experience across the NSW built environment, Fadi has developed expertise across building certification, design compliance, council processes and fire safety.
                    </p>
                    <p>
                      His engineering background means he genuinely understands construction — not just the approval paperwork. This translates to practical, clear advice and faster resolutions when issues arise during the certification process.
                    </p>
                  </div>

                  <div className="space-y-3">
                    {qualifications.map((q) => (
                      <div key={q.label} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4.5 h-4.5 text-[#185FA5] flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="text-[#0C2D5A] font-semibold text-sm">{q.label}</div>
                          <div className="text-slate-400 text-xs">{q.institution}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-5 border-t border-slate-100">
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <MapPin className="w-3.5 h-3.5 text-[#185FA5]" />
                      Based in Merrylands, Western Sydney. Servicing all of NSW.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-20 lg:py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="h-px w-8 bg-[#185FA5]" />
              <span className="text-[#185FA5] text-xs font-semibold tracking-widest uppercase">Expertise</span>
              <span className="h-px w-8 bg-[#185FA5]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0C2D5A] leading-tight mb-4">
              More Than Certification.
              Real Building Expertise.
            </h2>
            <p className="text-slate-600 text-lg">
              Fadi's background spans multiple disciplines of the built environment — a rare combination that benefits every client.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertise.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-7">
                  <div className="w-12 h-12 bg-[#EEF4FC] rounded-xl flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-[#185FA5]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0C2D5A] mb-2">{item.label}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="h-px w-8 bg-[#185FA5]" />
              <span className="text-[#185FA5] text-xs font-semibold tracking-widest uppercase">Credentials</span>
              <span className="h-px w-8 bg-[#185FA5]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0C2D5A] leading-tight mb-4">
              Accreditations & Memberships
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-[#F8FAFC] rounded-2xl border border-slate-100 p-7 text-center">
              <div className="w-14 h-14 bg-[#EEF4FC] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-7 h-7 text-[#185FA5]" />
              </div>
              <div className="text-[#0C2D5A] font-bold text-sm mb-1">NSW Fair Trading</div>
              <div className="text-slate-600 text-sm mb-2">Registered Building Surveyor</div>
              <div className="text-[#185FA5] text-xs font-semibold">Class A3 · BDC2868</div>
            </div>
            <div className="bg-[#F8FAFC] rounded-2xl border border-slate-100 p-7 text-center">
              <div className="w-14 h-14 bg-[#EEF4FC] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-7 h-7 text-[#185FA5]" />
              </div>
              <div className="text-[#0C2D5A] font-bold text-sm mb-1">AIBS</div>
              <div className="text-slate-600 text-sm">Australian Institute of Building Surveyors</div>
            </div>
            <div className="bg-[#F8FAFC] rounded-2xl border border-slate-100 p-7 text-center">
              <div className="w-14 h-14 bg-[#EEF4FC] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-7 h-7 text-[#185FA5]" />
              </div>
              <div className="text-[#0C2D5A] font-bold text-sm mb-1">AAC</div>
              <div className="text-slate-600 text-sm">Association of Accredited Certifiers</div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
