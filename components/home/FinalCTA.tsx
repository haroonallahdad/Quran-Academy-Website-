"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/utils";

export default function FinalCTA() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0E7A5F] via-[#0a5c47] to-[#063d31]" />
      <div className="absolute inset-0 pattern-dots opacity-15" />

      {/* Gold accent orbs */}
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[#D4AF37]/15 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#D4AF37]/10 blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Arabic calligraphy-inspired decoration */}
          <div className="text-4xl mb-6 opacity-60">﷽</div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
            Begin Your Quran Journey{" "}
            <span className="text-[#D4AF37]">Today</span>
          </h2>
          <p className="text-white/75 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Join 5,000+ students from 50+ countries who chose Al-Huda for premium,
            personalized online Quran education. Your first class is completely free.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <Link
                href="/enroll"
                className="flex items-center gap-2.5 px-8 py-4 bg-[#D4AF37] text-white font-bold rounded-2xl shadow-xl shadow-[#D4AF37]/30 hover:bg-[#b8962e] transition-all duration-300"
              >
                🎓 Claim Free Trial Class
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold rounded-2xl hover:bg-white/20 transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 text-[#25D366]" />
                Chat on WhatsApp
              </a>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-white/45 text-sm mt-8"
          >
            No credit card required · Cancel anytime · Available 24/7
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
