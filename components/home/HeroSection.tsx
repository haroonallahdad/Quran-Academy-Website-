"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import EnrollForm from "@/components/forms/EnrollForm";
import { Star, ShieldCheck, Users, Globe } from "lucide-react";

// AI-generated hero image:
// Prompt: "Muslim teacher conducting online Quran class via laptop in modern bright home office,
// warm golden sunlight, subtle Islamic geometric decor, premium monitor showing Arabic text,
// cinematic wide angle, ultra realistic 4K, SaaS landing page hero style"

const stats = [
  { value: "5,000+", label: "Students Enrolled" },
  { value: "50+", label: "Countries Served" },
  { value: "4.9★", label: "Average Rating" },
  { value: "100+", label: "Qualified Teachers" },
];

const trustPoints = [
  { icon: ShieldCheck, label: "Certified Ijazah Teachers" },
  { icon: Users, label: "1-on-1 Live Sessions" },
  { icon: Globe, label: "Students in 50+ Countries" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#0E7A5F] via-[#0a5c47] to-[#063d31]">
      {/* Islamic pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "url('/images/islamic-pattern.png')",
          backgroundSize: "400px 400px",
          backgroundRepeat: "repeat",
        }}
      />

      {/* Gold gradient accent */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-[#D4AF37]/10 to-transparent pointer-events-none" />

      {/* Floating orbs */}
      <div className="absolute top-32 left-6 w-72 h-72 rounded-full bg-[#D4AF37]/10 blur-3xl animate-float" />
      <div className="absolute bottom-16 right-4 w-96 h-96 rounded-full bg-[#0E7A5F]/15 blur-3xl animate-float" style={{ animationDelay: "3s" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-start">

          {/* Left: Content (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-8">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 self-start"
            >
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
              <span className="text-white/90 text-sm font-medium">🌟 #1 Rated Online Quran Academy</span>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.12] mb-5">
                Learn the Quran{" "}
                <span className="relative inline-block">
                  <span className="text-[#D4AF37]">Beautifully</span>
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                    <path d="M2 9C60 3 120 1 160 3C200 5 240 8 298 6" stroke="#D4AF37" strokeWidth="2.5" strokeLinecap="round" opacity="0.6"/>
                  </svg>
                </span>
                <br />
                <span className="text-white/90">from Anywhere</span>
              </h1>
              <p className="text-white/75 text-lg leading-relaxed max-w-lg">
                One-on-one live classes with certified Ijazah teachers. Flexible scheduling for all ages and levels. 
                Start with a <strong className="text-[#D4AF37]">free trial class</strong> — no commitment required.
              </p>
            </motion.div>

            {/* Trust points */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-wrap gap-3"
            >
              {trustPoints.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 bg-white/8 backdrop-blur-sm rounded-full px-3.5 py-2 border border-white/10">
                  <Icon className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span className="text-white/80 text-xs font-medium">{label}</span>
                </div>
              ))}
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-4"
            >
              <div className="flex -space-x-2">
                {["FA", "AS", "ZO", "MI", "AR"].map((init, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full border-2 border-[#0E7A5F] flex items-center justify-center text-xs font-bold text-white shadow-sm"
                    style={{ backgroundColor: ["#0E7A5F", "#D4AF37", "#7c3aed", "#0a5c47", "#e11d48"][i] }}
                  >
                    {init}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-3.5 h-3.5 text-[#D4AF37] fill-[#D4AF37]" />)}
                </div>
                <p className="text-white/70 text-xs mt-0.5">Trusted by 5,000+ students worldwide</p>
              </div>
            </motion.div>

            {/* Hero Image (mobile: below form; desktop: below stats) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/15 hidden lg:block"
            >
              {/* AI-generated image: Muslim teacher teaching Quran online */}
              <Image
                src="/images/hero-teacher.png"
                alt="Muslim teacher conducting an online Quran class via laptop in a bright home office"
                width={700}
                height={420}
                className="w-full h-56 object-cover"
                priority
              />
              {/* Glass overlay badge */}
              <div className="absolute bottom-4 left-4 glass rounded-xl px-4 py-2.5 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#0E7A5F] flex items-center justify-center text-sm">🎓</div>
                <div>
                  <p className="text-gray-900 text-xs font-bold leading-none">Live Class in Session</p>
                  <p className="text-gray-500 text-[10px] mt-0.5">3 students connected now</p>
                </div>
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse ml-1" />
              </div>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center bg-white/8 backdrop-blur-sm rounded-2xl p-3 border border-white/10">
                  <div className="font-heading font-bold text-[#D4AF37] text-xl">{stat.value}</div>
                  <div className="text-white/60 text-[11px] mt-0.5 leading-tight">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Enroll Form (2 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 glass rounded-3xl p-6 md:p-7 shadow-2xl"
          >
            <div className="mb-5">
              <h2 className="font-heading font-bold text-gray-900 text-xl mb-1">
                🎓 Start Your Free Trial
              </h2>
              <p className="text-gray-500 text-sm">
                We&apos;ll contact you within 2 hours to schedule your class
              </p>
            </div>
            <EnrollForm />
          </motion.div>
        </div>

        {/* Mobile hero image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 relative rounded-3xl overflow-hidden shadow-2xl border border-white/15 lg:hidden"
        >
          <Image
            src="/images/hero-teacher.png"
            alt="Muslim teacher conducting an online Quran class"
            width={700}
            height={400}
            className="w-full h-48 object-cover"
          />
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80L1440 80L1440 20C1200 60 960 70 720 50C480 30 240 10 0 40L0 80Z" fill="#FAFAF8"/>
        </svg>
      </div>
    </section>
  );
}
