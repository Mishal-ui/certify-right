import type { Metadata } from "next";
import ContactForm from "@/components/ui/ContactForm";
import { Mail, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us — Get a Quote",
  description:
    "Contact Certify Right to discuss your bookkeeping and accounting requirements. Email or WhatsApp us today.",
  alternates: { canonical: "https://certifyright.com.au/contact" },
};

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "info@certifyright.com.au",
    sub: "We respond promptly to all enquiries",
    href: "mailto:info@certifyright.com.au",
  },
  {
    label: "WhatsApp",
    value: "Chat with us on WhatsApp",
    sub: "Quick responses via WhatsApp",
    href: "https://wa.me/",
    isWhatsApp: true,
  },
  {
    icon: Clock,
    label: "Availability",
    value: "Mon–Fri 9:00am–5:00pm",
    sub: "We work with businesses across time zones",
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
              Get in Touch
            </h1>
            <p className="text-blue-100 text-xl leading-relaxed max-w-2xl">
              Tell us about your business and your accounting requirements. We will discuss
              the appropriate level of support with you.
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
                Contact Us
              </h2>
              <div className="space-y-5 mb-10">
                {contactDetails.map((d) => {
                  const Icon = "icon" in d && d.icon ? d.icon : null;
                  return (
                    <div key={d.label} className="flex items-start gap-4">
                      <div className="w-11 h-11 bg-[#EEF4FC] rounded-xl flex items-center justify-center flex-shrink-0">
                        {Icon ? (
                          <Icon className="w-5 h-5 text-[#185FA5]" />
                        ) : (
                          <svg className="w-5 h-5 text-[#185FA5]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                          </svg>
                        )}
                      </div>
                      <div>
                        <div className="text-xs text-slate-400 mb-0.5 uppercase tracking-wider">
                          {d.label}
                        </div>
                        {d.href ? (
                          <a
                            href={d.href}
                            target={"isWhatsApp" in d && d.isWhatsApp ? "_blank" : undefined}
                            rel={"isWhatsApp" in d && d.isWhatsApp ? "noopener noreferrer" : undefined}
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

              {/* Engagement options box */}
              <div className="bg-[#F8FAFC] rounded-2xl border border-slate-100 p-6">
                <div className="text-xs text-[#185FA5] font-semibold uppercase tracking-wider mb-4">
                  Pricing Guide
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="text-[#0C2D5A] font-semibold text-sm">Hourly-Based Plan</div>
                    <div className="text-slate-500 text-xs">Bookkeeper $10/hr · Supervisor $15/hr · Manager $20/hr</div>
                  </div>
                  <div>
                    <div className="text-[#0C2D5A] font-semibold text-sm">Monthly Fixed Plan</div>
                    <div className="text-slate-500 text-xs">Bookkeeper $1,000/mo · Supervisor $1,500/mo · Manager $2,000/mo</div>
                  </div>
                  <div>
                    <div className="text-[#0C2D5A] font-semibold text-sm">20+ Years Experience</div>
                    <div className="text-slate-500 text-xs">Professional expertise across all accounting functions</div>
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
