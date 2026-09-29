import Link from "next/link";
import { ArrowRight, MapPin, CheckCircle2 } from "lucide-react";

const mainAreas = [
  { name: "Greater Sydney", description: "All metropolitan Sydney councils" },
  { name: "Western Sydney", description: "Parramatta, Blacktown, Penrith, Liverpool" },
  { name: "Central Coast", description: "Gosford, Wyong and surrounds" },
  { name: "Illawarra", description: "Wollongong, Shellharbour, Kiama" },
];

const areaList = [
  "Inner West", "Eastern Suburbs", "North Shore", "Northern Beaches",
  "Hills District", "South Sydney", "Sutherland Shire", "Camden",
  "Campbelltown", "Merrylands", "Blue Mountains", "Hawkesbury",
  "Southern Highlands", "Wollongong", "Central Coast",
];

export default function ServiceAreasSection() {
  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: visual */}
          <div className="relative">
            {/* NSW map placeholder */}
            <div className="aspect-square max-w-md mx-auto lg:mx-0 bg-[#EEF4FC] rounded-2xl border border-blue-100 flex items-center justify-center overflow-hidden">
              {/* Stylised NSW map SVG */}
              <svg viewBox="0 0 400 400" className="w-4/5 h-4/5 opacity-60" fill="none">
                <path
                  d="M 320 50 L 360 80 L 380 130 L 370 190 L 350 230 L 310 280 L 270 330 L 230 360 L 180 370 L 130 350 L 90 310 L 60 270 L 40 220 L 50 160 L 80 110 L 120 70 L 170 50 L 220 40 Z"
                  stroke="#185FA5"
                  strokeWidth="3"
                  fill="#DAEAF8"
                />
                <circle cx="220" cy="200" r="8" fill="#185FA5" />
                <circle cx="190" cy="230" r="6" fill="#185FA5" opacity="0.7" />
                <circle cx="250" cy="170" r="6" fill="#185FA5" opacity="0.7" />
                <circle cx="170" cy="190" r="6" fill="#185FA5" opacity="0.6" />
                <circle cx="240" cy="250" r="5" fill="#185FA5" opacity="0.5" />
                <circle cx="200" cy="150" r="5" fill="#185FA5" opacity="0.5" />
                <text x="180" y="280" fill="#0C2D5A" fontSize="14" fontWeight="bold" opacity="0.8">NSW</text>
              </svg>
              {/* Floating badges */}
              <div className="absolute top-8 right-8 bg-white rounded-xl shadow-md px-4 py-3 border border-slate-100">
                <div className="text-xs text-slate-500 mb-0.5">Service Area</div>
                <div className="text-sm font-bold text-[#0C2D5A]">All of NSW</div>
              </div>
              <div className="absolute bottom-8 left-8 bg-white rounded-xl shadow-md px-4 py-3 border border-slate-100">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#185FA5]" />
                  <div className="text-sm font-bold text-[#0C2D5A]">Based in Merrylands</div>
                </div>
                <div className="text-xs text-slate-500 mt-0.5">Western Sydney</div>
              </div>
            </div>
          </div>

          {/* Right: content */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-[#185FA5]" />
              <span className="text-[#185FA5] text-xs font-semibold tracking-widest uppercase">
                Service Areas
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0C2D5A] leading-tight mb-6">
              Building Certification Across NSW
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              Certify Right provides building certification services throughout NSW, with a strong focus on Greater Sydney and surrounding regions. Wherever your project is located, we can assist.
            </p>

            {/* Main areas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {mainAreas.map((area) => (
                <div
                  key={area.name}
                  className="bg-[#F8FAFC] rounded-xl p-4 border border-slate-100"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-2 h-2 rounded-full bg-[#185FA5] flex-shrink-0" />
                    <span className="font-semibold text-[#0C2D5A] text-sm">
                      {area.name}
                    </span>
                  </div>
                  <p className="text-slate-500 text-xs ml-4">
                    {area.description}
                  </p>
                </div>
              ))}
            </div>

            {/* More suburbs */}
            <div className="mb-8">
              <div className="text-xs text-slate-400 uppercase tracking-wider mb-3">
                Also serving
              </div>
              <div className="flex flex-wrap gap-2">
                {areaList.map((area) => (
                  <span
                    key={area}
                    className="flex items-center gap-1.5 text-xs text-slate-600 bg-slate-50 border border-slate-100 px-2.5 py-1 rounded-full"
                  >
                    <CheckCircle2 className="w-3 h-3 text-[#185FA5] flex-shrink-0" />
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <Link
              href="/service-areas"
              className="inline-flex items-center gap-2 bg-[#185FA5] hover:bg-[#0C2D5A] text-white font-semibold px-7 py-3.5 rounded-lg transition-colors"
            >
              Check Your Area
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
