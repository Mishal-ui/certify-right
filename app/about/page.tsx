import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "About Fadi Habbouche — NSW Registered Building Surveyor",
  description:
    "Fadi Habbouche is a Civil Engineer, Registered Building Surveyor (Class A3, BDC2868), and the director of Certify Right. 15+ years across building surveying, council compliance, fire safety, and building design.",
  alternates: { canonical: "https://certifyright.com.au/about" },
};

const expertise = [
  {
    label: "Civil Engineering",
    desc: "Bachelor of Civil Engineering. Structural, geotechnical, and technical building knowledge that informs every assessment.",
  },
  {
    label: "Building Surveying",
    desc: "NSW Fair Trading Registered Building Surveyor, Class A3 (BDC2868). Authorised to issue CDCs, Construction Certificates, and Occupation Certificates.",
  },
  {
    label: "Building Design",
    desc: "Qualified building design professional with hands-on experience across residential and commercial project design.",
  },
  {
    label: "Council Compliance",
    desc: "Former council compliance officer. Fadi understands how council assesses development from the inside — giving clients a genuine advantage.",
  },
  {
    label: "Fire Safety",
    desc: "Qualified fire safety officer. Annual Fire Safety Statements, essential fire safety measures, and compliance assessments.",
  },
  {
    label: "Private Certification",
    desc: "15+ years as a private certifier, Principal Certifier, and building inspector across Greater Sydney and NSW.",
  },
];

const memberships = [
  {
    name: "NSW Fair Trading",
    detail: "Registered Building Surveyor · Class A3 · BDC2868",
    desc: "All NSW building certifiers must be registered with NSW Fair Trading. Class A3 is the highest residential certification class.",
  },
  {
    name: "AIBS",
    detail: "Australian Institute of Building Surveyors",
    desc: "Professional membership of the peak body for building surveyors in Australia.",
  },
  {
    name: "AAC",
    detail: "Association of Accredited Certifiers",
    desc: "Industry association for private certifiers in NSW — committed to professional standards and best practice.",
  },
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
              <span className="text-blue-300 text-xs font-semibold tracking-widest uppercase">About</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Fadi Habbouche
            </h1>
            <p className="text-blue-100 text-xl leading-relaxed max-w-2xl">
              Civil Engineer. Registered Building Surveyor. Council Compliance Officer.
              Fire Safety Officer. 15+ years of building expertise — and the person you
              speak to directly.
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Bio + credentials sidebar */}
          <div className="grid lg:grid-cols-[1fr_340px] gap-12 lg:gap-16 items-start mb-20">

            {/* Text */}
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-50 text-[#185FA5] text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
                Director, Certify Right
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0C2D5A] mb-6 leading-tight">
                More Than a Certifier. A Real Building Expert.
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Fadi Habbouche founded Certify Right to provide NSW homeowners, builders,
                  developers, and granny flat companies with a better certification experience —
                  one built on real expertise, clear communication, and genuine responsiveness.
                </p>
                <p>
                  Unlike certifiers who came only through the surveying pathway, Fadi brings a
                  broader depth of building knowledge. He holds a Bachelor of Civil Engineering,
                  is a qualified building design professional, served as a council compliance
                  officer, and is a qualified fire safety officer — in addition to holding Class A3
                  registration as a NSW Building Surveyor.
                </p>
                <p>
                  That combination means Fadi understands your project from multiple angles:
                  the structural, the design, the compliance, and the process. He gives straight
                  answers, identifies issues early, and works to keep your project on track.
                </p>
                <p>
                  When you contact Certify Right, you speak directly with Fadi. There is no
                  junior staff member in the middle, no automated holding queue. You get the
                  person with 15+ years of experience engaged with your project from the outset.
                </p>
              </div>
            </div>

            {/* Credentials sidebar */}
            <div className="space-y-4">
              <div className="bg-[#0C2D5A] rounded-2xl p-7 text-white">
                <div className="flex items-center gap-3 mb-5">
                  <Award className="w-6 h-6 text-blue-300" />
                  <h3 className="text-white font-bold text-lg">Registration & Credentials</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "NSW Fair Trading Registered Building Surveyor",
                    "Class A3 · Registration No. BDC2868",
                    "AIBS Member (Australian Institute of Building Surveyors)",
                    "AAC Member (Association of Accredited Certifiers)",
                    "Professional Indemnity Insurance held",
                    "15+ years professional experience",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-300 flex-shrink-0 mt-0.5" />
                      <span className="text-blue-100 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#F8FAFC] rounded-2xl p-6 border border-slate-100">
                <h3 className="text-[#0C2D5A] font-bold text-base mb-3">Company Details</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Company</span>
                    <span className="text-[#0C2D5A] font-semibold">Certify Right</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">ABN</span>
                    <span className="text-[#0C2D5A] font-medium">34 681 512 443</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">ACN</span>
                    <span className="text-[#0C2D5A] font-medium">681 512 443</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Location</span>
                    <span className="text-[#0C2D5A] font-medium">Merrylands NSW 2160</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Phone</span>
                    <a href="tel:0423925514" className="text-[#185FA5] font-semibold hover:underline">
                      0423 925 514
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Expertise grid */}
          <div className="mb-16">
            <h2 className="text-2xl lg:text-3xl font-bold text-[#0C2D5A] mb-8">
              Areas of Expertise
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {expertise.map((item) => (
                <div key={item.label} className="bg-[#F8FAFC] rounded-2xl p-6 border border-slate-100">
                  <div className="w-2 h-2 rounded-full bg-[#185FA5] mb-4" />
                  <h3 className="text-[#0C2D5A] font-bold text-base mb-2">{item.label}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Memberships */}
          <div className="bg-[#F8FAFC] rounded-2xl p-8 border border-slate-100 mb-16">
            <div className="flex items-center gap-3 mb-6">
              <ShieldCheck className="w-6 h-6 text-[#185FA5]" />
              <h2 className="text-2xl font-bold text-[#0C2D5A]">
                Registrations & Memberships
              </h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              {memberships.map((m) => (
                <div key={m.name}>
                  <div className="text-[#0C2D5A] font-bold text-base mb-0.5">{m.name}</div>
                  <div className="text-[#185FA5] text-xs font-semibold mb-2">{m.detail}</div>
                  <p className="text-slate-600 text-sm leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Certify Right */}
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-[#0C2D5A] mb-8">
              Why Certify Right?
            </h2>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    There are many private certifiers in NSW. What distinguishes Certify Right is
                    the combination of Fadi&apos;s qualifications across multiple disciplines, his
                    direct involvement in every project, and his commitment to responsive,
                    plain-English communication.
                  </p>
                  <p>
                    Certification delays are almost always caused by one of three things: waiting
                    for information, unclear communication, or slow responses. We address all three.
                    You know where your project stands at every stage.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#185FA5] hover:bg-[#0C2D5A] text-white font-semibold px-6 py-3 rounded-lg transition-colors mt-8"
                >
                  Speak with Fadi
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { stat: "15+", label: "Years Experience" },
                  { stat: "A3", label: "Registration Class" },
                  { stat: "10", label: "Certification Services" },
                  { stat: "NSW", label: "Wide Coverage" },
                ].map((item) => (
                  <div key={item.label} className="bg-[#0C2D5A] rounded-2xl p-6 text-white text-center">
                    <div className="text-3xl font-bold mb-1">{item.stat}</div>
                    <div className="text-blue-200 text-xs font-medium">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
