const systems = [
  { name: "Oracle", abbr: "ORC" },
  { name: "SAP", abbr: "SAP" },
  { name: "QuickBooks", abbr: "QB" },
  { name: "Odoo", abbr: "ODO" },
  { name: "Xero", abbr: "XER" },
  { name: "Sage", abbr: "SGE" },
  { name: "Zoho Books", abbr: "ZHO" },
  { name: "Microsoft Dynamics", abbr: "MSD" },
  { name: "Customized Solutions", abbr: "CST" },
];

export default function SystemsSection() {
  return (
    <section className="py-16 lg:py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-[#185FA5] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Systems We Work With
          </div>
          <h2 className="text-2xl lg:text-3xl font-bold text-[#0C2D5A] mb-3">
            We Work With Your Existing Systems
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            We work with leading accounting and ERP platforms — and can adapt to
            the tools and processes your business already uses.
          </p>
        </div>

        {/* Systems grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8">
          {systems.slice(0, 8).map((sys) => (
            <div
              key={sys.name}
              className="bg-white border border-slate-100 rounded-xl p-4 flex flex-col items-center gap-2.5 hover:border-[#185FA5]/30 hover:shadow-sm transition-all"
            >
              <div className="w-12 h-12 bg-[#0C2D5A]/5 rounded-xl flex items-center justify-center">
                <span className="text-[#0C2D5A] font-bold text-sm">{sys.abbr}</span>
              </div>
              <span className="text-slate-700 text-sm font-medium text-center leading-tight">
                {sys.name}
              </span>
            </div>
          ))}

          {/* Customized Solutions */}
          <div className="bg-[#0C2D5A] border border-[#0C2D5A] rounded-xl p-4 flex flex-col items-center gap-2.5 col-span-2 sm:col-span-1">
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-sm">CST</span>
            </div>
            <span className="text-white text-sm font-medium text-center leading-tight">
              Customized Solutions
            </span>
          </div>
        </div>

        {/* Custom note */}
        <div className="bg-white border border-slate-100 rounded-2xl p-6 max-w-2xl mx-auto text-center">
          <p className="text-slate-600 text-sm leading-relaxed">
            <span className="font-semibold text-[#0C2D5A]">Need something beyond the standard? </span>
            Where your requirements extend beyond standard accounting systems, we can also
            support customized development and solutions designed around your specific business processes.
          </p>
        </div>
      </div>
    </section>
  );
}
