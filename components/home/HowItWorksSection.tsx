import { ArrowRight, MessageSquare, Search, ClipboardCheck, CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Tell Us About Your Project",
    description:
      "Contact us by phone, email or through our enquiry form. Tell us about your project — what type of work, the location and where you're up to.",
    icon: MessageSquare,
  },
  {
    number: "02",
    title: "We Review Your Requirements",
    description:
      "We assess your project and provide a clear, obligation-free quote within 24 hours. We'll let you know exactly what's required and what to expect.",
    icon: Search,
  },
  {
    number: "03",
    title: "Certification & Inspections",
    description:
      "Once engaged, we issue your certificate and conduct all required critical stage inspections throughout your project — promptly and reliably.",
    icon: ClipboardCheck,
  },
  {
    number: "04",
    title: "Keep Your Project Moving",
    description:
      "From start to occupation certificate, we stay responsive and available. Clear communication means your project isn't held up by certification.",
    icon: CheckCircle2,
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-20 lg:py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="h-px w-8 bg-[#185FA5]" />
            <span className="text-[#185FA5] text-xs font-semibold tracking-widest uppercase">
              How It Works
            </span>
            <span className="h-px w-8 bg-[#185FA5]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0C2D5A] leading-tight mb-4">
            A Clearer Path to Certification
          </h2>
          <p className="text-slate-600 text-lg">
            Simple, transparent process from first enquiry to occupation certificate.
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative">
          {/* Connecting line on desktop */}
          <div
            className="absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-[#185FA5]/25 to-transparent hidden lg:block"
            aria-hidden="true"
          />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="relative flex flex-col">
                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-7 flex-1 relative z-10">
                  {/* Number */}
                  <div className="text-4xl font-black text-[#185FA5]/15 leading-none mb-4">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 bg-[#EEF4FC] rounded-xl flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-[#185FA5]" />
                  </div>

                  <h3 className="text-lg font-bold text-[#0C2D5A] leading-tight mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow between cards on desktop */}
                {idx < steps.length - 1 && (
                  <div
                    className="hidden lg:flex absolute top-10 -right-4 z-20 items-center justify-center w-8 h-8 bg-[#EEF4FC] rounded-full border border-blue-100"
                    aria-hidden="true"
                  >
                    <ArrowRight className="w-4 h-4 text-[#185FA5]" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
