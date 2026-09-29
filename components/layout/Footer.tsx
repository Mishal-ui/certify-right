import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { services } from "@/data/services";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0C2D5A] text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1: Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 border border-white/20">
                <span className="text-white font-bold text-lg leading-none">
                  CR
                </span>
              </div>
              <div>
                <div className="text-white font-bold text-base leading-tight">
                  Certify Right
                </div>
                <div className="text-blue-200 text-xs leading-tight">
                  NSW Building Certification
                </div>
              </div>
            </Link>
            <p className="text-blue-100 text-sm leading-relaxed mb-6">
              Fast, Clear, Responsive and Done Right. NSW building certification
              you can rely on.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors border border-white/10"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors border border-white/10"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors border border-white/10"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-blue-100 hover:text-white text-sm transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 text-blue-300 group-hover:text-[#185FA5] transition-colors flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Our Services
            </h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-blue-100 hover:text-white text-sm transition-colors flex items-start gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 text-blue-300 group-hover:text-[#185FA5] transition-colors flex-shrink-0 mt-0.5" />
                    <span>{s.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:0423925514"
                  className="flex items-start gap-3 text-blue-100 hover:text-white transition-colors group"
                >
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-xs text-blue-300 mb-0.5">Phone</div>
                    <div className="text-sm font-medium">0423 925 514</div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@certifyright.com.au"
                  className="flex items-start gap-3 text-blue-100 hover:text-white transition-colors group"
                >
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-xs text-blue-300 mb-0.5">Email</div>
                    <div className="text-sm font-medium break-all">
                      info@certifyright.com.au
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-blue-100">
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-xs text-blue-300 mb-0.5">
                      Location
                    </div>
                    <div className="text-sm font-medium">
                      Merrylands NSW 2160
                    </div>
                  </div>
                </div>
              </li>
            </ul>

            <div className="mt-6 pt-5 border-t border-white/10">
              <div className="text-xs text-blue-300 space-y-1">
                <p className="font-medium text-blue-100">
                  Certify Right Pty Ltd
                </p>
                <p>ABN: 34 681 512 443</p>
                <p>ACN: 681 512 443</p>
              </div>
            </div>
          </div>

          {/* Column 5: Credentials */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Our Credentials
            </h3>
            <div className="space-y-3">
              {/* NSW Fair Trading */}
              <div className="bg-white/5 border border-white/10 rounded-lg p-3.5">
                <div className="text-xs text-blue-300 mb-1 uppercase tracking-wider">
                  NSW Fair Trading
                </div>
                <div className="text-sm font-semibold text-white">
                  Registered Building Surveyor
                </div>
                <div className="text-xs text-blue-200 mt-1">
                  Class A3 | BDC2868
                </div>
              </div>

              {/* AIBS */}
              <div className="bg-white/5 border border-white/10 rounded-lg p-3.5">
                <div className="text-xs text-blue-300 mb-1 uppercase tracking-wider">
                  AIBS Member
                </div>
                <div className="text-sm font-semibold text-white leading-tight">
                  Australian Institute of Building Surveyors
                </div>
              </div>

              {/* AAC */}
              <div className="bg-white/5 border border-white/10 rounded-lg p-3.5">
                <div className="text-xs text-blue-300 mb-1 uppercase tracking-wider">
                  AAC Member
                </div>
                <div className="text-sm font-semibold text-white leading-tight">
                  Association of Accredited Certifiers
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-blue-200 text-sm">
              © {currentYear} Certify Right Pty Ltd. All rights reserved.
            </p>
            <div className="flex items-center gap-5">
              <Link
                href="/privacy-policy"
                className="text-blue-200 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-blue-200 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
