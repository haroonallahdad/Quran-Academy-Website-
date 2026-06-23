"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, Home, MessageCircle, ArrowRight } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/utils";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0E7A5F] to-[#063d31] flex items-center justify-center relative overflow-hidden px-4">
      {/* Background patterns */}
      <div className="absolute inset-0 pattern-dots opacity-15" />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#D4AF37]/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#0E7A5F]/20 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative glass rounded-3xl p-10 md:p-14 max-w-lg w-full text-center shadow-2xl"
      >
        {/* Animated check */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200, damping: 14 }}
          className="w-20 h-20 bg-gradient-to-br from-[#0E7A5F] to-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl"
        >
          <CheckCircle className="w-10 h-10 text-white" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="text-3xl mb-3">🎉</div>
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            You&apos;re All Set!
          </h1>
          <p className="text-gray-600 text-lg mb-2 font-medium">
            Enrollment received successfully.
          </p>
          <p className="text-gray-500 text-sm leading-relaxed mb-8">
            Our team will contact you via WhatsApp or email{" "}
            <strong className="text-[#0E7A5F]">within 2 hours</strong> to confirm your 
            free trial class and match you with a teacher. Check your email and WhatsApp 
            for our message!
          </p>

          {/* Next steps */}
          <div className="bg-[#0E7A5F]/5 border border-[#0E7A5F]/15 rounded-2xl p-4 mb-8 text-left">
            <p className="text-xs font-bold text-[#0E7A5F] uppercase tracking-wide mb-3">What happens next?</p>
            <ul className="space-y-2">
              {[
                "We review your enrollment within 2 hours",
                "We match you with a certified teacher",
                "You receive your trial class link",
                "Attend your free class — no payment needed!",
              ].map((step, i) => (
                <li key={i} className="flex items-center gap-2.5 text-sm text-gray-700">
                  <span className="w-5 h-5 rounded-full bg-[#0E7A5F] text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ul>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/"
              className="flex-1 flex items-center justify-center gap-2 py-3.5 border-2 border-gray-200 text-gray-700 font-semibold rounded-xl hover:border-[#0E7A5F] hover:text-[#0E7A5F] transition-all duration-200"
            >
              <Home className="w-4 h-4" />
              Back to Home
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-[#25D366] text-white font-bold rounded-xl hover:bg-[#1da851] transition-all duration-300 shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
