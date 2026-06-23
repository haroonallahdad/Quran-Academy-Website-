"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, Star, Zap } from "lucide-react";

const plans = [
  {
    name: "Starter",
    emoji: "🌱",
    price: 29,
    period: "month",
    description: "Perfect for beginners taking their first steps",
    sessions: "8 sessions/month",
    features: [
      "1 session per week",
      "30 min per session",
      "1 course access",
      "Progress tracking",
      "Email support",
      "Free trial included",
    ],
    color: "#0369a1",
    popular: false,
    cta: "Start Free Trial",
  },
  {
    name: "Standard",
    emoji: "⭐",
    price: 59,
    period: "month",
    description: "Most popular — ideal for consistent learners",
    sessions: "16 sessions/month",
    features: [
      "4 sessions per week",
      "30 min per session",
      "2 course access",
      "Progress reports",
      "Priority support",
      "Recorded sessions",
      "Free trial included",
    ],
    color: "#0E7A5F",
    popular: true,
    cta: "Get Started",
  },
  {
    name: "Intensive",
    emoji: "🚀",
    price: 99,
    period: "month",
    description: "For dedicated students who want rapid progress",
    sessions: "30 sessions/month",
    features: [
      "Daily sessions (5/week)",
      "45 min per session",
      "Unlimited courses",
      "Weekly progress reports",
      "24/7 WhatsApp support",
      "Recorded sessions",
      "Parent progress portal",
      "Free trial included",
    ],
    color: "#D4AF37",
    popular: false,
    cta: "Start Free Trial",
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="section-pad bg-white">
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
            Simple Pricing
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Affordable Plans for{" "}
            <span className="gradient-text">Every Family</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            No hidden fees. Cancel anytime. All plans include a free trial class.
            Family discounts available — contact us!
          </p>
        </motion.div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-3xl border-2 flex flex-col transition-all duration-300 ${
                plan.popular
                  ? "border-[#0E7A5F] shadow-2xl shadow-[#0E7A5F]/15 scale-105"
                  : "border-gray-100 hover:border-gray-200 shadow-md hover:shadow-lg"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-[#0E7A5F] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                  <Star className="w-3.5 h-3.5 fill-white" />
                  Most Popular
                </div>
              )}

              <div className={`p-7 flex-1 ${plan.popular ? "bg-gradient-to-br from-[#0E7A5F]/3 to-transparent" : "bg-white"} rounded-3xl`}>
                <div className="text-3xl mb-3">{plan.emoji}</div>
                <h3 className="font-heading font-bold text-gray-900 text-xl mb-1">{plan.name}</h3>
                <p className="text-gray-500 text-sm mb-5">{plan.description}</p>

                {/* Price */}
                <div className="mb-2">
                  <span className="font-heading font-bold text-4xl text-gray-900">${plan.price}</span>
                  <span className="text-gray-400 text-sm">/{plan.period}</span>
                </div>
                <div
                  className="text-xs font-semibold mb-6 py-1 px-2.5 rounded-lg inline-block"
                  style={{ backgroundColor: `${plan.color}15`, color: plan.color }}
                >
                  {plan.sessions}
                </div>

                {/* Features */}
                <ul className="space-y-2.5 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <div className="w-4 h-4 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0" style={{ backgroundColor: `${plan.color}20` }}>
                        <Check className="w-2.5 h-2.5" style={{ color: plan.color }} />
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/enroll"
                  className={`block w-full text-center py-3.5 font-bold rounded-xl transition-all duration-300 ${
                    plan.popular
                      ? "bg-gradient-to-r from-[#0E7A5F] to-[#0a5c47] text-white shadow-lg shadow-[#0E7A5F]/25 hover:shadow-[#0E7A5F]/40"
                      : "border-2 hover:text-white hover:shadow-md"
                  }`}
                  style={
                    !plan.popular
                      ? { borderColor: plan.color, color: plan.color }
                      : undefined
                  }
                  onMouseEnter={(e) => {
                    if (!plan.popular) {
                      (e.currentTarget as HTMLElement).style.backgroundColor = plan.color;
                      (e.currentTarget as HTMLElement).style.color = "white";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!plan.popular) {
                      (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                      (e.currentTarget as HTMLElement).style.color = plan.color;
                    }
                  }}
                >
                  {plan.cta}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 text-sm mt-8"
        >
          💡 Family discount available for 2+ students · Need a custom plan?{" "}
          <Link href="/contact" className="text-[#0E7A5F] underline-offset-2 hover:underline">Contact us</Link>
        </motion.p>
      </div>
    </section>
  );
}
