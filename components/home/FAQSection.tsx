"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { faqs } from "@/data/faqs";

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>("1");

  return (
    <section id="faq" className="section-pad bg-beige">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-[#0E7A5F] font-semibold text-sm uppercase tracking-widest mb-3">
            Common Questions
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked{" "}
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-gray-500 text-lg">
            Everything you need to know about learning with Al-Huda Academy.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`rounded-2xl border overflow-hidden transition-all duration-200 ${
                openId === faq.id
                  ? "border-[#0E7A5F]/30 shadow-md shadow-[#0E7A5F]/8 bg-white"
                  : "border-gray-100 bg-white hover:border-gray-200"
              }`}
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full px-6 py-5 flex items-start justify-between gap-4 text-left"
                aria-expanded={openId === faq.id}
              >
                <span className={`font-heading font-semibold text-base leading-snug transition-colors ${openId === faq.id ? "text-[#0E7A5F]" : "text-gray-900"}`}>
                  {faq.question}
                </span>
                <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 transition-all ${openId === faq.id ? "bg-[#0E7A5F] text-white" : "bg-gray-100 text-gray-400"}`}>
                  {openId === faq.id ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </div>
              </button>

              <AnimatePresence initial={false}>
                {openId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-3">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <p className="text-gray-500 text-sm">
            Still have questions?{" "}
            <a
              href="/contact"
              className="text-[#0E7A5F] font-semibold hover:underline underline-offset-2"
            >
              Contact our team →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
