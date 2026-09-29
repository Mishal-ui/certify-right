import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, Phone } from "lucide-react";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Service Areas — NSW Building Certification",
  description:
    "Certify Right provides building certification across NSW — Greater Sydney, Western Sydney, Central Coast, Illawarra and regional NSW. Based in Merrylands.",
  alternates: { canonical: "https://certifyright.com.au/service-areas" },
};

const sydneyAreas = [
  { name: "Inner West", suburbs: "Leichhardt, Burwood, Strathfield, Ashfield" },
  { name: "Eastern Suburbs", suburbs: "Bondi, Randwick, Coogee, Waverley" },
  { name: "North Shore", suburbs: "Chatswood, Lane Cove, Willoughby, Ku-ring-gai" },
  { name: "Northern Beaches", suburbs: "Manly, Dee Why, Narrabeen, Mona Vale" },
  { name: "Hills District", suburbs: "Castle Hill, Baulkham Hills, Kellyville, Rouse Hill" },
  { name: "Western Sydney", suburbs: "Parramatta, Blacktown, Merrylands, Penrith, Liverpool" },
  { name: "South Sydney", suburbs: "Rockdale, Kogarah, Hurstville, Bankstown" },
  { name: "Sutherland Shire", suburbs: "Cronulla, Miranda, Caringbah, Sutherland" },
  { name: "Parramatta", suburbs: "Parramatta CBD, Westmead, Granville, Auburn" },
  { name: "Blacktown", suburbs: "Blacktown, Seven Hills, Quakers Hill, Rooty Hill" },
  { name: "Penrith", suburbs: "Penrith, St Marys, Kingswood, Glenmore Park" },
  { name: "Liverpool", suburbs: "Liverpool, Moorebank, Casula, Prestons" },
  { name: "Campbelltown", suburbs: "Campbelltown, Macquarie Fields, Ingleburn" },
  { name: "Camden", suburbs: "Camden, Narellan, Oran Park, Gregory Hills" },
  { name: "Merrylands", suburbs: "Merrylands, Guildford, Granville, Harris Park" },
];

const regionalAreas = [
  { name: "Central Coast", suburbs: "Gosford, Wyong, Terrigal, Erina" },
  { name: "Wollongong / Illawarra", suburbs: "Wollongong, Shellharbour, Kiama, Dapto" },
  { name: "Blue Mountains", suburbs: "Katoomba, Springwood, Penrith foothills" },
  { name: "Hawkesbury", suburbs: "Windsor, Richmond, Wilberforce" },
  { name: "Southern Highlands", suburbs: "Bowral, Moss Vale, Mittagong" },
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
              Building Certification Across NSW
            </h1>
            <p className="text-blue-100 text-xl leading-relaxed max-w-2xl">
              Based in Merrylands, Certify Right provides certification services across Greater Sydney and throughout NSW.
            </p>
            <div className="flex items-center gap-3 mt-6 text-blue-200 text-sm">
              <MapPin className="w-4 h-4 flex-shrink-0" />
              Based in Merrylands, Western Sydney · Serving all of NSW
            </div>
          </div>
        </div>
      </section>

      {/* Coverage note */}
      <section className="bg-[#EEF4FC] border-b border-blue-100 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-[#0C2D5A] font-semibold">
              Not sure if we cover your area?{" "}
              <span className="text-slate-600 font-normal">
                Contact us — in most cases we can assist anywhere in NSW.
              </span>
            </p>
            <div className="flex gap-4">
              <a
                href="tel:0423925514"
                className="inline-flex items-center gap-2 text-[#185FA5] font-semibold text-sm hover:text-[#0C2D5A] transition-colors"
              >
                <Phone className="w-4 h-4" />
                0423 925 514
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#185FA5] text-white font-semibold text-sm px-4 py-2 rounded-lg hover:bg-[#0C2D5A] transition-colors"
              >
                Enquire Now
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Greater Sydney */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-px w-8 bg-[#185FA5]" />
            <span className="text-[#185FA5] text-xs font-semibold tracking-widest uppercase">
              Greater Sydney
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0C2D5A] leading-tight mb-4">
            Sydney Metropolitan Areas
          </h2>
          <p className="text-slate-600 text-lg mb-10 max-w-2xl">
            Certify Right regularly works across all Sydney metropolitan areas, from the Eastern Suburbs to the Western suburbs and beyond.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {sydneyAreas.map((area) => (
              <div
                key={area.name}
                className="bg-[#F8FAFC] rounded-xl border border-slate-100 p-5"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-[#EEF4FC] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-[#185FA5]" />
                  </div>
                  <span className="font-bold text-[#0C2D5A] text-sm">{area.name}</span>
                </div>
                <p className="text-slate-500 text-xs ml-11">{area.suburbs}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional */}
      <section className="py-20 lg:py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-px w-8 bg-[#185FA5]" />
            <span className="text-[#185FA5] text-xs font-semibold tracking-widest uppercase">
              Regional NSW
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0C2D5A] leading-tight mb-4">
            Regional & Surrounding Areas
          </h2>
          <p className="text-slate-600 text-lg mb-10 max-w-2xl">
            We regularly assist with projects on the Central Coast, Illawarra, Blue Mountains and surrounding regions.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {regionalAreas.map((area) => (
              <div
                key={area.name}
                className="bg-white rounded-xl border border-slate-100 p-5"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-[#EEF4FC] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-[#185FA5]" />
                  </div>
                  <span className="font-bold text-[#0C2D5A] text-sm">{area.name}</span>
                </div>
                <p className="text-slate-500 text-xs ml-11">{area.suburbs}</p>
              </div>
            ))}
          </div>

          {/* NSW-wide note */}
          <div className="mt-10 bg-[#0C2D5A] rounded-2xl p-8 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold mb-2">
                Project Somewhere Else in NSW?
              </h3>
              <p className="text-blue-100 text-sm leading-relaxed max-w-xl">
                Certify Right can assist with projects anywhere in NSW. If your area is not listed above, contact us to discuss your project — we can advise on the best approach.
              </p>
            </div>
            <Link
              href="/contact"
              className="flex-shrink-0 inline-flex items-center gap-2 bg-white text-[#0C2D5A] hover:bg-blue-50 font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Check Your Area
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
