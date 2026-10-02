import { Shield, Clock, Award, Heart, DollarSign, Cpu } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Commitment to Quality",
    description:
      "We maintain high standards in bookkeeping and accounting, with careful attention to accuracy, completeness, and consistency. Our focus is on keeping your financial records reliable and well organized.",
  },
  {
    icon: Clock,
    title: "Timely & Reliable Service",
    description:
      "We understand the importance of having financial information available when you need it. We work to keep your bookkeeping and reporting current, ensuring you can rely on timely and dependable support.",
  },
  {
    icon: Award,
    title: "Professional Expertise",
    description:
      "Our team combines practical accounting knowledge with professional experience to handle a wide range of bookkeeping and financial requirements. We provide support appropriate to the complexity and needs of your business.",
  },
  {
    icon: Heart,
    title: "Dedicated Attention",
    description:
      "We give your accounting requirements the attention they deserve, whether you need support for specific tasks or ongoing assistance. Our approach ensures continuity and familiarity with your business and its financial processes.",
  },
  {
    icon: DollarSign,
    title: "Cost-Effective Support",
    description:
      "Our efficient approach helps reduce the cost of maintaining your accounting function while providing access to professional expertise. This allows businesses to manage their financial records effectively without unnecessary overhead.",
  },
  {
    icon: Cpu,
    title: "Technology-Driven Approach",
    description:
      "We work with leading accounting and ERP systems and use modern tools and techniques to improve efficiency, organization, and accessibility of financial information. We can also adapt to the systems and processes already used by your business.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-[#185FA5] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Why Businesses Choose Us
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0C2D5A] mb-4">
            The Certify Right Difference
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            We combine professional expertise, reliable service, and modern technology
            to deliver accounting support that businesses can depend on.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="group flex flex-col gap-4 p-6 rounded-2xl border border-slate-100 hover:border-[#185FA5]/30 hover:bg-blue-50/40 transition-all duration-200"
              >
                <div className="w-12 h-12 bg-blue-50 group-hover:bg-[#185FA5] rounded-xl flex items-center justify-center transition-colors duration-200 flex-shrink-0">
                  <Icon className="w-6 h-6 text-[#185FA5] group-hover:text-white transition-colors duration-200" />
                </div>
                <div>
                  <h3 className="text-[#0C2D5A] font-semibold text-lg mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
