import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const trustPoints = [
  "NSW Fair Trading Registered Building Surveyor",
  "15+ years across civil engineering and building surveying",
  "Class A3 certification (BDC2868)",
  "AIBS and AAC member",
  "Plain-English communication — no jargon",
  "24-hour quote turnaround",
];

export default function AboutSection() {
  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-[#185FA5]" />
              <span className="text-[#185FA5] text-xs font-semibold tracking-widest uppercase">
                About Certify Right
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0C2D5A] mb-6 leading-tight">
              Certification Made Clear
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed mb-8">
              <p>
                Certify Right provides NSW building certification services for homeowners, builders,
                developers, and granny flat companies across Greater Sydney and NSW.
              </p>
              <p>
                We are operated by Fadi Habbouche — a Civil Engineer and NSW Fair Trading
                Registered Building Surveyor with over 15 years of experience across building
                surveying, council compliance, building design, and fire safety. Fadi holds
                Class A3 registration (BDC2868) and is a member of AIBS and AAC.
              </p>
              <p>
                Our approach is straightforward: we give you clear answers, respond promptly,
                and focus on keeping your project moving rather than creating unnecessary
                delays or complications.
              </p>
            </div>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-[#185FA5] hover:bg-[#0C2D5A] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              About Fadi
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right */}
          <div className="space-y-4">
            <div className="bg-[#F8FAFC] rounded-2xl p-7 border border-slate-100">
              <h3 className="text-[#0C2D5A] font-bold text-base mb-4">Why Certify Right</h3>
              <ul className="space-y-3">
                {trustPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4.5 h-4.5 text-[#185FA5] flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#0C2D5A] rounded-2xl p-6 text-white text-center">
                <div className="text-4xl font-bold mb-1">15+</div>
                <div className="text-blue-200 text-xs font-medium">Years Experience</div>
              </div>
              <div className="bg-[#185FA5] rounded-2xl p-6 text-white text-center">
                <div className="text-4xl font-bold mb-1">10</div>
                <div className="text-blue-100 text-xs font-medium">Certification Services</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
