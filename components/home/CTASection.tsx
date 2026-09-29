import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 lg:py-24 bg-[#0C2D5A] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-[0.04]" aria-hidden="true">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="ctaGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#ctaGrid)" />
        </svg>
      </div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#185FA5] rounded-full opacity-10 -translate-y-1/2 translate-x-1/4" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#185FA5] rounded-full opacity-10 translate-y-1/2 -translate-x-1/4" aria-hidden="true" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center gap-2 mb-5">
          <span className="h-px w-8 bg-blue-400" />
          <span className="text-blue-300 text-xs font-semibold tracking-widest uppercase">
            Get Started
          </span>
          <span className="h-px w-8 bg-blue-400" />
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
          Ready to Keep Your
          <span className="block text-blue-200">Project Moving?</span>
        </h2>

        <p className="text-blue-100 text-xl leading-relaxed mb-10 max-w-xl mx-auto">
          Get a clear, obligation-free quote within 24 hours. No pressure, no jargon — just straight answers from an experienced certifier.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#0C2D5A] hover:bg-blue-50 font-bold px-8 py-4 rounded-xl transition-colors text-base shadow-lg"
          >
            Get a Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
          <a
            href="tel:0423925514"
            className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-white/70 text-white font-bold px-8 py-4 rounded-xl transition-colors text-base"
          >
            <Phone className="w-5 h-5" />
            Call 0423 925 514
          </a>
        </div>

        {/* Trust bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-blue-200 text-sm">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-300" />
            Obligation-free quote
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-300" />
            24-hour turnaround
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-300" />
            NSW-wide service
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-300" />
            Registered Building Surveyor
          </span>
        </div>
      </div>
    </section>
  );
}
