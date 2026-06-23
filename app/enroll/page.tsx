import type { Metadata } from "next";
import EnrollForm from "@/components/forms/EnrollForm";
import { CheckCircle, Shield, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Enroll Now | Al-Huda Online Quran Academy",
  description: "Enroll in Al-Huda Online Quran Academy. Choose your course, request a free trial class, and start your Quran learning journey today.",
};

const benefits = [
  "Free trial class — no credit card required",
  "Certified Ijazah teachers",
  "Flexible scheduling, any timezone",
  "One-on-one personalized sessions",
  "30-day satisfaction guarantee",
];

export default function EnrollPage() {
  return (
    <div className="min-h-screen bg-beige">
      {/* Page Header */}
      <div className="bg-gradient-to-br from-[#0E7A5F] to-[#063d31] pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-15" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-[#D4AF37] font-semibold text-sm uppercase tracking-widest mb-3">
            Get Started
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4">
            Enroll Today
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Your first class is completely free. No commitment required.
            We&apos;ll match you with the perfect teacher within 2 hours.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Benefits */}
          <div className="lg:col-span-2">
            <h2 className="font-heading font-bold text-gray-900 text-2xl mb-6">
              Why Enroll with Us?
            </h2>
            <ul className="space-y-4 mb-8">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#0E7A5F] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm font-medium">{b}</span>
                </li>
              ))}
            </ul>

            <div className="bg-[#0E7A5F]/5 border border-[#0E7A5F]/15 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-4 h-4 text-[#0E7A5F]" />
                <span className="font-semibold text-gray-900 text-sm">100% Risk-Free</span>
              </div>
              <p className="text-gray-500 text-xs leading-relaxed">
                Not satisfied? Get a full refund within your first month. 
                We&apos;re confident you&apos;ll love learning with us.
              </p>
            </div>

            <div className="flex items-center gap-2 mt-4 text-gray-400 text-xs">
              <Clock className="w-4 h-4" />
              We contact you within 2 hours of enrollment
            </div>
          </div>

          {/* Enroll Form */}
          <div className="lg:col-span-3 bg-white rounded-3xl p-8 border border-gray-100 shadow-xl">
            <h2 className="font-heading font-bold text-gray-900 text-xl mb-1">
              🎓 Start Your Free Trial
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              Takes less than 60 seconds to complete.
            </p>
            <EnrollForm />
          </div>
        </div>
      </div>
    </div>
  );
}
