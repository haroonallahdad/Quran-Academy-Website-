"use client";

import { motion } from "framer-motion";
import {
  Video, Clock, GraduationCap, Shield, Globe, Heart,
  Users, Award, Smartphone, Calendar
} from "lucide-react";

const features = [
  {
    icon: Video,
    title: "Live 1-on-1 Classes",
    description: "Personal attention from your dedicated teacher via Zoom or Skype. No group classes, no distractions.",
    color: "#0E7A5F",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Book classes at any time that suits your lifestyle. Morning, evening, or weekend — we adapt to you.",
    color: "#D4AF37",
  },
  {
    icon: GraduationCap,
    title: "Certified Ijazah Teachers",
    description: "All our teachers hold Ijazah in Quran recitation and have formal Islamic education qualifications.",
    color: "#7c3aed",
  },
  {
    icon: Globe,
    title: "Students in 50+ Countries",
    description: "We serve a global Muslim community from USA, UK, Canada, Australia, Europe, and beyond.",
    color: "#0369a1",
  },
  {
    icon: Heart,
    title: "Female Teachers Available",
    description: "Dedicated female tutors for sisters and girls, ensuring a comfortable and productive learning environment.",
    color: "#e11d48",
  },
  {
    icon: Shield,
    title: "Satisfaction Guarantee",
    description: "Not happy in your first month? Get a full refund. We're confident you'll love learning with us.",
    color: "#047857",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="section-pad bg-beige">
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
            Why Al-Huda?
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            The{" "}
            <span className="gradient-text">Smart Choice</span>{" "}
            for Online Quran Learning
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            We combine traditional Islamic scholarship with modern educational technology
            to give you the best learning experience possible.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-[#0E7A5F]/20 hover:shadow-lg hover:shadow-[#0E7A5F]/8 transition-all duration-300 group card-hover"
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${feature.color}15` }}
              >
                <feature.icon className="w-6 h-6" style={{ color: feature.color }} />
              </div>
              <h3 className="font-heading font-bold text-gray-900 text-lg mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
