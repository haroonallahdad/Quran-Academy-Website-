"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Clock, Heart } from "lucide-react";

// AI-generated image:
// "Split composition: Muslim teacher in Middle East study room + glowing digital globe 
// + diverse students in Europe/USA homes — connected via emerald & gold network lines.
// Premium SaaS editorial, cinematic, 16:9"

const highlights = [
  { icon: Award, value: "Certified Ijazah", label: "All teachers hold chain of authorization" },
  { icon: Clock, value: "Since 2014", label: "10+ years of online Quran education" },
  { icon: Heart, value: "Students First", label: "Personalized attention every session" },
];

export default function AboutSection() {
  return (
    <section id="about-section" className="section-pad bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              {/* AI image: Global Islamic learning concept */}
              <Image
                src="/images/about-global.png"
                alt="Al-Huda Academy connects teachers and students worldwide via live online Quran classes"
                width={640}
                height={430}
                className="w-full object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a14]/30 to-transparent pointer-events-none" />
            </div>

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -bottom-5 right-2 sm:-right-4 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 flex items-center gap-3"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#0E7A5F] to-[#D4AF37] flex items-center justify-center text-white text-lg">
                🌍
              </div>
              <div>
                <div className="font-heading font-bold text-gray-900 text-xl leading-none">50+</div>
                <div className="text-gray-400 text-xs mt-0.5">Countries reached</div>
              </div>
            </motion.div>

            {/* Floating teacher badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -top-4 -left-4 bg-[#0E7A5F] text-white rounded-2xl p-3 shadow-xl flex items-center gap-2.5"
            >
              <div className="text-xl">👨‍🏫</div>
              <div>
                <div className="font-bold text-sm leading-none">100+ Teachers</div>
                <div className="text-white/70 text-[10px] mt-0.5">Ijazah certified</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-[#0E7A5F] font-semibold text-sm uppercase tracking-widest mb-3">
              About Al-Huda Academy
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5 leading-tight">
              Connecting Hearts to the{" "}
              <span className="gradient-text">Holy Quran</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-6">
              Founded in 2014, Al-Huda Online Quran Academy has grown into a global platform 
              serving over 5,000 students in 50+ countries. We believe that access to quality 
              Quran education should know no borders.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              Our certified teachers — all holding Ijazah (chain of authorization) — deliver 
              personalized, one-on-one lessons that adapt to your pace, schedule, and learning style. 
              Whether you&apos;re a beginner child or an adult seeking deeper Islamic knowledge, 
              we have the right program for you.
            </p>

            {/* Highlights */}
            <div className="space-y-4 mb-8">
              {highlights.map(({ icon: Icon, value, label }) => (
                <div key={value} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0E7A5F]/8 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-[#0E7A5F]" />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-gray-900">{value}</div>
                    <div className="text-gray-500 text-sm">{label}</div>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/enroll"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-gradient-to-r from-[#0E7A5F] to-[#0a5c47] text-white font-bold rounded-2xl shadow-lg shadow-[#0E7A5F]/25 hover:shadow-[#0E7A5F]/40 transition-all duration-300 hover:-translate-y-0.5 group"
            >
              Start Your Free Trial
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
