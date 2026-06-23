"use client";

import { motion } from "framer-motion";
import { UserPlus, CalendarCheck, BookOpen } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: UserPlus,
    title: "Sign Up & Book Free Trial",
    description: "Fill our quick enrollment form. Pick your course, tell us your goals, and we'll match you with the perfect teacher within 2 hours.",
    color: "#0E7A5F",
    bgColor: "rgba(14,122,95,0.08)",
  },
  {
    step: "02",
    icon: CalendarCheck,
    title: "Attend Your Free Class",
    description: "Meet your teacher via Zoom for your free 30-minute trial class. Experience our teaching quality with zero commitment required.",
    color: "#D4AF37",
    bgColor: "rgba(212,175,55,0.08)",
  },
  {
    step: "03",
    icon: BookOpen,
    title: "Start Your Learning Journey",
    description: "Choose your plan, lock in your schedule, and begin your personalized learning journey. Progress tracked every step of the way.",
    color: "#7c3aed",
    bgColor: "rgba(124,58,237,0.08)",
  },
];

export default function HowItWorks() {
  return (
    <section className="section-pad bg-gradient-to-br from-[#0E7A5F] to-[#063d31] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pattern-dots opacity-10" />
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-[#D4AF37]/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-[#D4AF37] font-semibold text-sm uppercase tracking-widest mb-3">
            Simple Process
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            From zero to Quran recitation in 3 simple steps. Getting started has never been easier.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-16 left-[23%] right-[23%] h-0.5 bg-gradient-to-r from-[#0E7A5F] via-[#D4AF37] to-[#7c3aed] opacity-30 z-0" />

          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative z-10 bg-white/10 backdrop-blur-sm border border-white/15 rounded-3xl p-8 text-center hover:bg-white/15 transition-all duration-300"
            >
              {/* Step number */}
              <div className="text-white/20 font-heading font-bold text-6xl absolute top-4 right-6">
                {step.step}
              </div>

              {/* Icon */}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: step.bgColor }}
              >
                <step.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="font-heading font-bold text-white text-xl mb-3">
                {step.title}
              </h3>
              <p className="text-white/65 text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
