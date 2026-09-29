import { Star, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating ? "text-yellow-400 fill-yellow-400" : "text-slate-200"
          }`}
        />
      ))}
    </div>
  );
}

function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-7 flex flex-col">
      {/* Quote icon */}
      <div className="w-10 h-10 bg-[#EEF4FC] rounded-xl flex items-center justify-center mb-5 flex-shrink-0">
        <Quote className="w-5 h-5 text-[#185FA5]" />
      </div>

      {/* Stars */}
      <StarRating rating={t.rating} />

      {/* Text */}
      <blockquote className="text-slate-700 text-[15px] leading-relaxed mt-4 mb-6 flex-1">
        &ldquo;{t.text}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-3 pt-5 border-t border-slate-100">
        <div className="w-10 h-10 bg-[#0C2D5A] rounded-full flex items-center justify-center flex-shrink-0">
          <span className="text-white font-semibold text-sm">{t.initials}</span>
        </div>
        <div>
          <div className="text-[#0C2D5A] font-semibold text-sm">{t.name}</div>
          {t.source === "google" && (
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="text-slate-400 text-xs">Google Review</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="h-px w-8 bg-[#185FA5]" />
            <span className="text-[#185FA5] text-xs font-semibold tracking-widest uppercase">
              Client Feedback
            </span>
            <span className="h-px w-8 bg-[#185FA5]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0C2D5A] leading-tight mb-4">
            What Our Clients Say
          </h2>
          <p className="text-slate-600 text-lg">
            Real feedback from builders, developers and homeowners across NSW.
          </p>
        </div>

        {/* Google rating summary */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="flex items-center gap-2 bg-white border border-slate-100 rounded-xl px-5 py-3 shadow-sm">
            <div className="text-2xl font-bold text-[#0C2D5A]">5.0</div>
            <div>
              <StarRating rating={5} />
              <div className="text-xs text-slate-400 mt-0.5">Google Reviews</div>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} t={t} />
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-slate-400 text-sm mt-8">
          More reviews on Google. Certify Right is registered on the NSW Planning Portal.
        </p>
      </div>
    </section>
  );
}
