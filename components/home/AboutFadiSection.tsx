import Link from "next/link";
import { ArrowRight, Award } from "lucide-react";

const expertise = [
  { label: "Civil Engineering", desc: "Bachelor of Civil Engineering — structural and technical foundation." },
  { label: "Building Surveying", desc: "Registered Building Surveyor Class A3 (BDC2868) — NSW Fair Trading." },
  { label: "Building Design", desc: "Qualified building design professional with hands-on project experience." },
  { label: "Council Compliance", desc: "Former council compliance officer — knows the process from both sides." },
  { label: "Fire Safety", desc: "Qualified fire safety officer — Annual Fire Safety Statements and assessments." },
  { label: "Private Certification", desc: "15+ years as a private certifier across residential and commercial projects." },
];

const credentials = [
  { label: "NSW Fair Trading Registered Building Surveyor" },
  { label: "Class A3 · Registration BDC2868" },
  { label: "AIBS Member (Australian Institute of Building Surveyors)" },
  { label: "AAC Member (Association of Accredited Certifiers)" },
  { label: "Professional Indemnity Insurance" },
];

export default function AboutFadiSection() {
  return (
    <section className="py-20 lg:py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-[#185FA5]" />
              <span className="text-[#185FA5] text-xs font-semibold tracking-widest uppercase">
                About Fadi
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0C2D5A] mb-4 leading-tight">
              More Than Certification. Real Building Expertise.
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed mb-8">
              <p>
                Fadi Habbouche is not just a certifier — he is a Civil Engineer, Registered
                Building Surveyor, former council compliance officer, building design professional,
                and qualified fire safety officer. That range of experience means he understands
                your project from multiple angles.
              </p>
              <p>
                With over 15 years of experience, Fadi combines technical knowledge with
                practical, on-the-ground building expertise. He communicates in plain English,
                responds promptly, and focuses on moving your project forward rather than
                creating unnecessary hurdles.
              </p>
            </div>

            {/* Credentials */}
            <div className="bg-[#0C2D5A] rounded-2xl p-6 mb-6">
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-5 h-5 text-blue-300" />
                <span className="text-white font-semibold text-sm">Credentials & Registrations</span>
              </div>
              <ul className="space-y-2">
                {credentials.map((c) => (
                  <li key={c.label} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0 mt-1.5" />
                    <span className="text-blue-100 text-sm">{c.label}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-[#185FA5] hover:bg-[#0C2D5A] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Full Profile
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right: expertise grid */}
          <div>
            <div className="grid grid-cols-2 gap-4">
              {expertise.map((item) => (
                <div
                  key={item.label}
                  className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm"
                >
                  <div className="w-2 h-2 rounded-full bg-[#185FA5] mb-3" />
                  <h3 className="text-[#0C2D5A] font-bold text-sm mb-1.5">{item.label}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
