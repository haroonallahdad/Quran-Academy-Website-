"use client";

import { motion } from "framer-motion";
import { Globe, ShieldCheck, Award, Clock, Users, Star } from "lucide-react";

const badges = [
  { icon: Users, value: "5,000+", label: "Active Students", color: "#0E7A5F" },
  { icon: Globe, value: "50+", label: "Countries", color: "#D4AF37" },
  { icon: Award, value: "100+", label: "Certified Teachers", color: "#7c3aed" },
  { icon: Clock, value: "10+", label: "Years Experience", color: "#0369a1" },
  { icon: Star, value: "4.9/5", label: "Average Rating", color: "#e11d48" },
  { icon: ShieldCheck, value: "100%", label: "Satisfaction Guaranteed", color: "#047857" },
];

export default function TrustBadges() {
  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <p className="text-gray-400 text-sm font-medium uppercase tracking-widest">
            Trusted by students worldwide
          </p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {badges.map((badge, i) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="flex flex-col items-center gap-2 p-4 rounded-2xl hover:bg-gray-50 transition-colors group"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: `${badge.color}15` }}
              >
                <badge.icon className="w-5 h-5" style={{ color: badge.color }} />
              </div>
              <div className="font-heading font-bold text-gray-900 text-xl leading-none">
                {badge.value}
              </div>
              <div className="text-gray-500 text-xs text-center leading-tight">
                {badge.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
