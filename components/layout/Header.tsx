"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Phone,
  Menu,
  X,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { services } from "@/data/services";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "@/components/ui/SocialIcons";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: services.map((s) => ({
      label: s.shortTitle,
      href: `/services/${s.slug}`,
    })),
  },
  { label: "Service Areas", href: "/service-areas" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${
          scrolled ? "shadow-md" : ""
        }`}
      >
        {/* Top bar */}
        <div className="bg-[#0C2D5A] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-9 text-xs">
              <div className="flex items-center gap-4">
                <span className="font-semibold text-blue-100 hidden sm:block">
                  NSW Building Certification
                </span>
                <span className="text-blue-200 hidden md:block">·</span>
                <span className="text-blue-100 hidden md:block italic">
                  Fast, Clear, Responsive and Done Right.
                </span>
              </div>
              <div className="flex items-center gap-4">
                <div className="hidden lg:flex items-center gap-3 text-blue-200 text-xs">
                  <span>ABN: 34 681 512 443</span>
                  <span>·</span>
                  <span>ACN: 681 512 443</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    <FacebookIcon className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    <InstagramIcon className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main nav */}
        <div className="bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 lg:h-20">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-3 flex-shrink-0">
                <div className="flex items-center">
                  {/* Logo mark */}
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#0C2D5A] rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg lg:text-xl leading-none">
                      CR
                    </span>
                  </div>
                  <div className="ml-3">
                    <div className="text-[#0C2D5A] font-bold text-base lg:text-lg leading-tight tracking-tight">
                      Certify Right
                    </div>
                    <div className="text-slate-500 text-xs leading-tight">
                      NSW Building Certification
                    </div>
                  </div>
                </div>
              </Link>

              {/* Desktop nav */}
              <nav
                className="hidden lg:flex items-center gap-1"
                aria-label="Main navigation"
              >
                {navLinks.map((link) => {
                  if (link.children) {
                    return (
                      <div
                        key={link.label}
                        className="relative"
                        ref={dropdownRef}
                      >
                        <button
                          onClick={() => setServicesOpen(!servicesOpen)}
                          onKeyDown={(e) => {
                            if (e.key === "Escape") setServicesOpen(false);
                          }}
                          className={`flex items-center gap-1 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                            isActive(link.href)
                              ? "text-[#185FA5] bg-blue-50"
                              : "text-slate-700 hover:text-[#0C2D5A] hover:bg-slate-50"
                          }`}
                          aria-expanded={servicesOpen}
                          aria-haspopup="true"
                        >
                          {link.label}
                          <ChevronDown
                            className={`w-4 h-4 transition-transform ${
                              servicesOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {servicesOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: 6 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 6 }}
                              transition={{ duration: 0.15 }}
                              className="absolute top-full left-0 mt-1 w-72 bg-white rounded-xl shadow-xl border border-slate-100 py-2 z-50"
                            >
                              {link.children.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  className="flex items-center gap-2 px-4 py-2.5 text-sm text-slate-700 hover:bg-blue-50 hover:text-[#185FA5] transition-colors"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#185FA5] flex-shrink-0" />
                                  {child.label}
                                </Link>
                              ))}
                              <div className="mt-2 pt-2 border-t border-slate-100 px-4 pb-1">
                                <Link
                                  href="/services"
                                  className="text-[#185FA5] text-sm font-medium hover:underline flex items-center gap-1"
                                >
                                  View All Services
                                  <ArrowRight className="w-3.5 h-3.5" />
                                </Link>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }
                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                        isActive(link.href)
                          ? "text-[#185FA5] bg-blue-50"
                          : "text-slate-700 hover:text-[#0C2D5A] hover:bg-slate-50"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>

              {/* Right: phone + CTA */}
              <div className="hidden lg:flex items-center gap-4">
                <a
                  href="tel:0423925514"
                  className="flex items-center gap-2 text-slate-700 hover:text-[#0C2D5A] transition-colors"
                >
                  <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-3.5 h-3.5 text-[#185FA5]" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 leading-none mb-0.5">
                      Speak with Fadi
                    </div>
                    <div className="text-sm font-semibold text-[#0C2D5A] leading-none">
                      0423 925 514
                    </div>
                  </div>
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#185FA5] hover:bg-[#0C2D5A] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
                >
                  Get a Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded-md text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 z-40 lg:hidden"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.25 }}
              className="fixed right-0 top-0 bottom-0 w-80 max-w-[90vw] bg-white z-50 lg:hidden overflow-y-auto"
            >
              <div className="flex items-center justify-between p-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 bg-[#0C2D5A] rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">CR</span>
                  </div>
                  <div>
                    <div className="text-[#0C2D5A] font-bold text-sm leading-tight">
                      Certify Right
                    </div>
                    <div className="text-slate-400 text-xs leading-tight">
                      NSW Building Certification
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-1.5 rounded-md text-slate-500 hover:bg-slate-100"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="p-4 space-y-1" aria-label="Mobile navigation">
                {navLinks.map((link) => {
                  if (link.children) {
                    return (
                      <div key={link.label}>
                        <button
                          onClick={() =>
                            setMobileServicesOpen(!mobileServicesOpen)
                          }
                          className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                            isActive(link.href)
                              ? "text-[#185FA5] bg-blue-50"
                              : "text-slate-700 hover:bg-slate-50"
                          }`}
                        >
                          {link.label}
                          <ChevronDown
                            className={`w-4 h-4 transition-transform ${
                              mobileServicesOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {mobileServicesOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-4 pt-1 pb-2 space-y-1">
                                {link.children.map((child) => (
                                  <Link
                                    key={child.href}
                                    href={child.href}
                                    className="flex items-center gap-2 px-4 py-2 text-sm text-slate-600 hover:text-[#185FA5] hover:bg-blue-50 rounded-lg transition-colors"
                                  >
                                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0" />
                                    {child.label}
                                  </Link>
                                ))}
                                <Link
                                  href="/services"
                                  className="flex items-center gap-2 px-4 py-2 text-sm text-[#185FA5] font-medium"
                                >
                                  View All Services
                                  <ArrowRight className="w-3.5 h-3.5" />
                                </Link>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }
                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                        isActive(link.href)
                          ? "text-[#185FA5] bg-blue-50"
                          : "text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>

              <div className="p-4 border-t border-slate-100 space-y-3">
                <a
                  href="tel:0423925514"
                  className="flex items-center gap-3 px-4 py-3 rounded-lg bg-slate-50 text-slate-700"
                >
                  <Phone className="w-4 h-4 text-[#185FA5]" />
                  <div>
                    <div className="text-xs text-slate-500">Speak with Fadi</div>
                    <div className="text-sm font-semibold text-[#0C2D5A]">
                      0423 925 514
                    </div>
                  </div>
                </a>
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 bg-[#185FA5] hover:bg-[#0C2D5A] text-white text-sm font-semibold px-5 py-3 rounded-lg transition-colors w-full"
                >
                  Get a Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer to push content below fixed header */}
      <div className="h-[97px] lg:h-[117px]" aria-hidden="true" />
    </>
  );
}
