"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";
import { testimonials } from "@/data/testimonials";

// AI-generated testimonial photos:
// testimonial-family.png — Muslim family learning online (warm home, hijabi mom + son)
// student-laptop.png — Young Muslim male student at desk with Quran + laptop

const testimonialPhotos: Record<string, string> = {
  "1": "/images/testimonial-family.png",  // Fatima — family photo
  "4": "/images/student-laptop.png",       // Muhammad — student photo
};


export default function Testimonials() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1));
  const next = () => setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1));

  return (
    <section id="testimonials" className="section-pad bg-beige overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-[#0E7A5F] font-semibold text-sm uppercase tracking-widest mb-3">
            Student Stories
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our Students{" "}
            <span className="gradient-text">Say About Us</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Real reviews from real students — families from across the globe who
            transformed their Quran learning with Al-Huda.
          </p>
        </motion.div>

        {/* Featured testimonial carousel */}
        <div className="relative max-w-4xl mx-auto mb-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.35 }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 relative overflow-hidden"
            >
              {/* Quote decoration */}
              <Quote className="absolute top-8 right-8 w-16 h-16 text-[#0E7A5F]/8" />

              <div className="flex items-center gap-1 mb-6">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className="w-5 h-5 text-[#D4AF37] fill-[#D4AF37]" />
                ))}
              </div>

              <blockquote className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8 font-medium relative z-10">
                &ldquo;{testimonials[active].text}&rdquo;
              </blockquote>

              <div className="flex items-center gap-4">
                {testimonialPhotos[testimonials[active].id] ? (
                  <div className="w-14 h-14 rounded-2xl overflow-hidden flex-shrink-0 shadow-md">
                    <Image
                      src={testimonialPhotos[testimonials[active].id]}
                      alt={testimonials[active].name}
                      width={56}
                      height={56}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                    style={{ backgroundColor: testimonials[active].avatarColor }}
                  >
                    {testimonials[active].initials}
                  </div>
                )}
                <div>
                  <div className="font-heading font-bold text-gray-900">
                    {testimonials[active].name}
                  </div>
                  <div className="text-gray-500 text-sm">
                    {testimonials[active].countryFlag} {testimonials[active].location} · {testimonials[active].course}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button onClick={prev} className="w-10 h-10 rounded-full bg-white border border-gray-200 hover:border-[#0E7A5F] hover:text-[#0E7A5F] flex items-center justify-center transition-all shadow-sm hover:shadow-md">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === active ? "bg-[#0E7A5F] w-6" : "bg-gray-200 w-2 hover:bg-gray-300"
                  }`}
                />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 rounded-full bg-white border border-gray-200 hover:border-[#0E7A5F] hover:text-[#0E7A5F] flex items-center justify-center transition-all shadow-sm hover:shadow-md">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Mini cards grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <motion.button
              key={t.id}
              onClick={() => setActive(i)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`p-4 rounded-2xl border text-left transition-all duration-200 ${
                i === active
                  ? "border-[#0E7A5F] bg-[#0E7A5F]/5 shadow-md"
                  : "border-gray-100 bg-white hover:border-gray-200 shadow-sm"
              }`}
            >
              <div className="flex items-center gap-2.5 mb-2">
                {testimonialPhotos[t.id] ? (
                  <div className="w-9 h-9 rounded-xl overflow-hidden flex-shrink-0">
                    <Image src={testimonialPhotos[t.id]} alt={t.name} width={36} height={36} className="w-full h-full object-cover" />
                  </div>
                ) : (
                  <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                    style={{ backgroundColor: t.avatarColor }}
                  >
                    {t.initials}
                  </div>
                )}
                <div>
                  <div className="font-semibold text-gray-900 text-sm leading-none">{t.name}</div>
                  <div className="text-gray-400 text-xs mt-0.5">{t.countryFlag} {t.location}</div>
                </div>
              </div>
              <div className="flex items-center gap-0.5">
                {[1,2,3,4,5].map(j => <Star key={j} className="w-3 h-3 text-[#D4AF37] fill-[#D4AF37]" />)}
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
