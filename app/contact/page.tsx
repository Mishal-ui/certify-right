import type { Metadata } from "next";
import ContactForm from "@/components/ui/ContactForm";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us — Get a Free Quote",
  description:
    "Contact Certify Right for an obligation-free building certification quote. Phone, email or online enquiry form. 24-hour quote turnaround.",
  alternates: { canonical: "https://certifyright.com.au/contact" },
};

const contactDetails = [
  {
    icon: Phone,
    label: "Phone",
    value: "0423 925 514",
    sub: "Speak directly with Fadi",
    href: "tel:0423925514",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@certifyright.com.au",
    sub: "We respond within 24 hours",
    href: "mailto:info@certifyright.com.au",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Merrylands NSW 2160",
    sub: "Serving all of NSW",
    href: undefined,
  },
  {
    icon: Clock,
    label: "Office Hours",
    value: "Mon–Fri 9:00am–5:00pm",
    sub: "By appointment only",
    href: undefined,
  },
];

export default function ContactPage() {
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
              <span className="text-blue-300 text-xs font-semibold tracking-widest uppercase">Contact</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Get a Free Quote
            </h1>
            <p className="text-blue-100 text-xl leading-relaxed max-w-2xl">
              Tell us about your project and we'll get back to you with a clear, obligation-free quote within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Sidebar */}
            <div>
              <h2 className="text-2xl font-bold text-[#0C2D5A] mb-6">
                Get in Touch
              </h2>
              <div className="space-y-5 mb-10">
                {contactDetails.map((d) => {
                  const Icon = d.icon;
                  return (
                    <div key={d.label} className="flex items-start gap-4">
                      <div className="w-11 h-11 bg-[#EEF4FC] rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-[#185FA5]" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-400 mb-0.5 uppercase tracking-wider">
                          {d.label}
                        </div>
                        {d.href ? (
                          <a
                            href={d.href}
                            className="text-[#0C2D5A] font-semibold text-sm hover:text-[#185FA5] transition-colors"
                          >
                            {d.value}
                          </a>
                        ) : (
                          <div className="text-[#0C2D5A] font-semibold text-sm">
                            {d.value}
                          </div>
                        )}
                        <div className="text-slate-400 text-xs mt-0.5">{d.sub}</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Credentials box */}
              <div className="bg-[#F8FAFC] rounded-2xl border border-slate-100 p-6">
                <div className="text-xs text-[#185FA5] font-semibold uppercase tracking-wider mb-4">
                  Our Credentials
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="text-[#0C2D5A] font-semibold text-sm">NSW Fair Trading</div>
                    <div className="text-slate-500 text-xs">Registered Building Surveyor · Class A3 · BDC2868</div>
                  </div>
                  <div>
                    <div className="text-[#0C2D5A] font-semibold text-sm">AIBS Member</div>
                    <div className="text-slate-500 text-xs">Australian Institute of Building Surveyors</div>
                  </div>
                  <div>
                    <div className="text-[#0C2D5A] font-semibold text-sm">AAC Member</div>
                    <div className="text-slate-500 text-xs">Association of Accredited Certifiers</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
