import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-16 lg:py-20 bg-[#185FA5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left: Schedule a meeting */}
          <div className="bg-white/10 border border-white/20 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-white font-bold text-lg">Schedule a Meeting</div>
                <div className="text-blue-200 text-sm">Book a free consultation</div>
              </div>
            </div>
            <p className="text-blue-100 leading-relaxed mb-6">
              Not sure which option is right for you? No problem. Tell us about your
              business and your accounting requirements, and we can discuss the
              appropriate level of support with you.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-[#185FA5] hover:bg-[#0C2D5A] hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Book a Meeting
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right: Contact */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Not Sure Which Option Is Right for You?
            </h2>
            <p className="text-blue-100 text-lg leading-relaxed mb-6">
              Get in touch with us to discuss your bookkeeping and accounting requirements.
              We will help you choose the right plan and expertise level for your business.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:info@certifyright.com.au"
                className="inline-flex items-center gap-2 bg-[#0C2D5A] hover:bg-white hover:text-[#185FA5] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Email Us
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/40 hover:bg-white/10 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
