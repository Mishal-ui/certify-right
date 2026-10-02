import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, CheckCircle2 } from "lucide-react";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Service Areas — NSW Building Certification",
  description:
    "Certify Right provides NSW building certification services across Greater Sydney and regional NSW. Based in Merrylands, we cover Parramatta, Blacktown, Liverpool, Campbelltown, Hills District, Inner West, Eastern Suburbs and more.",
  alternates: { canonical: "https://certifyright.com.au/service-areas" },
};

const sydneyZones = [
  { zone: "Parramatta & Auburn", suburbs: ["Parramatta", "Auburn", "Merrylands", "Granville", "Harris Park", "Woodville"] },
  { zone: "Blacktown & Hills", suburbs: ["Blacktown", "Seven Hills", "Pendle Hill", "Toongabbie", "Kings Langley", "Lalor Park"] },
  { zone: "Hills District", suburbs: ["Castle Hill", "Baulkham Hills", "Kellyville", "Rouse Hill", "Norwest", "Bella Vista"] },
  { zone: "Liverpool & Fairfield", suburbs: ["Liverpool", "Fairfield", "Cabramatta", "Canley Vale", "Wetherill Park", "Green Valley"] },
  { zone: "Campbelltown & Macarthur", suburbs: ["Campbelltown", "Camden", "Narellan", "Leppington", "Oran Park"] },
  { zone: "Penrith & Western Sydney", suburbs: ["Penrith", "St Marys", "Kingswood", "Glenmore Park", "Emu Plains"] },
  { zone: "Sutherland & St George", suburbs: ["Sutherland", "Miranda", "Cronulla", "Hurstville", "Kogarah", "Rockdale"] },
  { zone: "Bankstown & Canterbury", suburbs: ["Bankstown", "Lakemba", "Campsie", "Canterbury", "Belmore"] },
  { zone: "Ryde & Meadowbank", suburbs: ["Ryde", "Meadowbank", "Shepherd's Bay", "Macquarie Park", "West Ryde"] },
  { zone: "North Shore", suburbs: ["Chatswood", "Lane Cove", "Willoughby", "Hornsby", "Gordon", "Lindfield"] },
  { zone: "Inner West", suburbs: ["Strathfield", "Burwood", "Ashfield", "Homebush", "Concord", "Drummoyne"] },
  { zone: "Eastern Suburbs", suburbs: ["Randwick", "Maroubra", "Coogee", "Bondi", "Surry Hills", "Newtown"] },
];

const regionalAreas = [
  { area: "Central Coast", examples: "Gosford, Wyong, Terrigal, The Entrance" },
  { area: "Wollongong & Illawarra", examples: "Wollongong, Shellharbour, Kiama, Port Kembla" },
  { area: "Blue Mountains", examples: "Katoomba, Springwood, Penrith foothills" },
  { area: "Southern Highlands", examples: "Bowral, Moss Vale, Mittagong" },
  { area: "Surrounding NSW Regions", examples: "Contact us for coverage confirmation" },
];

export default function ServiceAreasPage() {
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
              <span className="text-blue-300 text-xs font-semibold tracking-widest uppercase">Service Areas</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              NSW Building Certification — Greater Sydney & Beyond
            </h1>
            <p className="text-blue-100 text-xl leading-relaxed max-w-2xl">
              Based in Merrylands, Certify Right provides building certification across
              Greater Sydney and regional NSW. Contact us to confirm coverage for your location.
            </p>
            <div className="flex items-center gap-2 mt-6 text-blue-200">
              <MapPin className="w-4 h-4 flex-shrink-0" />
              <span className="text-sm">Head office: Merrylands NSW 2160</span>
            </div>
          </div>
        </div>
      </section>

      {/* Sydney zones */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <span className="h-px w-8 bg-[#185FA5]" />
                <span className="text-[#185FA5] text-xs font-semibold tracking-widest uppercase">Coverage</span>
              </div>
              <h2 className="text-3xl font-bold text-[#0C2D5A] mb-4 leading-tight">
                Greater Sydney
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                We provide CDC, Construction Certificate, Occupation Certificate, Principal
                Certifier, and inspection services across all major Greater Sydney areas.
              </p>
              <div className="bg-[#F8FAFC] rounded-xl p-5 border border-slate-100">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#185FA5] flex-shrink-0 mt-0.5" />
                  <p className="text-slate-700 text-sm leading-relaxed">
                    All 10 building certification services available across Greater Sydney.
                    Contact us for a same-business-day response.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="grid sm:grid-cols-2 gap-4">
                {sydneyZones.map((z) => (
                  <div key={z.zone} className="bg-[#F8FAFC] rounded-xl p-4 border border-slate-100">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="w-3.5 h-3.5 text-[#185FA5] flex-shrink-0" />
                      <span className="text-[#0C2D5A] font-semibold text-sm">{z.zone}</span>
                    </div>
                    <p className="text-slate-500 text-xs leading-relaxed pl-5">
                      {z.suburbs.join(", ")}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Regional */}
          <div className="bg-[#0C2D5A] rounded-2xl p-10 text-white">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">Regional NSW</h2>
              <p className="text-blue-100 max-w-2xl">
                In addition to Greater Sydney, we extend coverage to regional NSW areas
                on a project basis. Contact us with your location to confirm.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {regionalAreas.map((r) => (
                <div
                  key={r.area}
                  className="bg-white/10 border border-white/10 rounded-xl p-4"
                >
                  <div className="text-white font-semibold text-sm mb-1">{r.area}</div>
                  <div className="text-blue-200 text-xs">{r.examples}</div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA row */}
          <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6 bg-[#F8FAFC] rounded-2xl p-8 border border-slate-100">
            <div className="flex-1">
              <h3 className="text-[#0C2D5A] font-bold text-lg mb-1">
                Not sure if we cover your area?
              </h3>
              <p className="text-slate-600 text-sm">
                Contact Fadi directly — we confirm coverage and provide a quote same business day.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#185FA5] hover:bg-[#0C2D5A] text-white font-semibold px-6 py-3 rounded-lg transition-colors whitespace-nowrap"
            >
              Get a Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
