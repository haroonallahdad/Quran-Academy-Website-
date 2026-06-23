"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { MessageCircle, Phone, GraduationCap, X, Sparkles } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/utils";
import Link from "next/link";

interface FABAction {
  id: string;
  label: string;
  sublabel: string;
  icon: React.ElementType;
  color: string;
  bg: string;
  action: "link" | "href" | "scroll";
  target: string;
}

const fabActions: FABAction[] = [
  {
    id: "enroll",
    label: "Enroll Now",
    sublabel: "Free trial included",
    icon: GraduationCap,
    color: "#fff",
    bg: "linear-gradient(135deg, #0E7A5F, #0a5c47)",
    action: "link",
    target: "/enroll",
  },
  {
    id: "whatsapp",
    label: "WhatsApp Chat",
    sublabel: "Reply in minutes",
    icon: MessageCircle,
    color: "#fff",
    bg: "linear-gradient(135deg, #25D366, #1da851)",
    action: "href",
    target: WHATSAPP_URL,
  },
  {
    id: "call",
    label: "Schedule a Call",
    sublabel: "Pick your time slot",
    icon: Phone,
    color: "#fff",
    bg: "linear-gradient(135deg, #D4AF37, #b8962e)",
    action: "scroll",
    target: "enroll-section",
  },
];

export default function FloatingButtons() {
  const [isOpen, setIsOpen] = useState(false);
  const [pulseActive, setPulseActive] = useState(false);

  // Trigger pulse every 5 seconds when closed
  useEffect(() => {
    if (isOpen) return;
    const interval = setInterval(() => {
      setPulseActive(true);
      setTimeout(() => setPulseActive(false), 1200);
    }, 5000);
    // Initial pulse after 2 seconds
    const initial = setTimeout(() => {
      setPulseActive(true);
      setTimeout(() => setPulseActive(false), 1200);
    }, 2000);
    return () => {
      clearInterval(interval);
      clearTimeout(initial);
    };
  }, [isOpen]);

  const handleAction = (action: FABAction) => {
    setIsOpen(false);
    if (action.action === "scroll") {
      const el = document.getElementById(action.target);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.08, staggerDirection: -1 },
    },
    exit: {
      transition: { staggerChildren: 0.05, staggerDirection: 1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 16, scale: 0.85 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: 16, scale: 0.85 },
  };

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-40"
          />
        )}
      </AnimatePresence>

      <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-3">
        {/* Action Buttons Stack */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex flex-col items-end gap-2.5 mb-1"
            >
              {fabActions.map((action) => {
                const Icon = action.icon;
                const content = (
                  <motion.div
                    key={action.id}
                    variants={itemVariants}
                    whileHover={{ scale: 1.04, x: -2 }}
                    whileTap={{ scale: 0.96 }}
                    className="flex items-center gap-3 group cursor-pointer"
                    onClick={() => handleAction(action)}
                  >
                    {/* Label */}
                    <div className="bg-white/95 backdrop-blur-sm shadow-lg rounded-2xl px-3.5 py-2 border border-gray-100 opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-2 group-hover:translate-x-0 pointer-events-none">
                      <p className="text-gray-900 text-xs font-bold whitespace-nowrap leading-none">
                        {action.label}
                      </p>
                      <p className="text-gray-400 text-[10px] mt-0.5 whitespace-nowrap">
                        {action.sublabel}
                      </p>
                    </div>

                    {/* Button Circle */}
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-xl transition-shadow duration-200 group-hover:shadow-2xl"
                      style={{ background: action.bg }}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  </motion.div>
                );

                if (action.action === "link") {
                  return (
                    <Link key={action.id} href={action.target} onClick={() => setIsOpen(false)}>
                      {content}
                    </Link>
                  );
                }
                if (action.action === "href") {
                  return (
                    <a
                      key={action.id}
                      href={action.target}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                    >
                      {content}
                    </a>
                  );
                }
                return <div key={action.id}>{content}</div>;
              })}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main FAB Button */}
        <div className="relative">
          {/* Pulse rings (when closed) */}
          <AnimatePresence>
            {!isOpen && pulseActive && (
              <>
                <motion.span
                  key="ring1"
                  initial={{ scale: 1, opacity: 0.6 }}
                  animate={{ scale: 2.2, opacity: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.0, ease: "easeOut" }}
                  className="absolute inset-0 rounded-2xl"
                  style={{ background: "rgba(14,122,95,0.35)" }}
                />
                <motion.span
                  key="ring2"
                  initial={{ scale: 1, opacity: 0.4 }}
                  animate={{ scale: 2.8, opacity: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.2, ease: "easeOut", delay: 0.15 }}
                  className="absolute inset-0 rounded-2xl"
                  style={{ background: "rgba(212,175,55,0.25)" }}
                />
              </>
            )}
          </AnimatePresence>

          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
            animate={isOpen ? { rotate: 0 } : { rotate: 0 }}
            className="relative w-14 h-14 rounded-2xl flex items-center justify-center shadow-2xl overflow-hidden"
            aria-label={isOpen ? "Close contact menu" : "Open contact menu"}
            style={{
              background: isOpen
                ? "#1f2937"
                : "linear-gradient(135deg, #0E7A5F 0%, #0a5c47 50%, #D4AF37 100%)",
              boxShadow: isOpen
                ? "0 8px 30px rgba(0,0,0,0.4)"
                : "0 8px 30px rgba(14,122,95,0.45), 0 0 0 1px rgba(212,175,55,0.3)",
            }}
          >
            {/* Shimmer overlay */}
            {!isOpen && (
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-white/5 to-transparent pointer-events-none" />
            )}

            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, scale: 0.5, opacity: 0 }}
                  animate={{ rotate: 0, scale: 1, opacity: 1 }}
                  exit={{ rotate: 90, scale: 0.5, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6 text-white" />
                </motion.div>
              ) : (
                <motion.div
                  key="open"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.5, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Sparkles className="w-6 h-6 text-white" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Tooltip when closed */}
          {!isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute -top-9 right-0 bg-gray-900/90 text-white text-[10px] font-semibold px-2.5 py-1.5 rounded-lg whitespace-nowrap shadow-lg pointer-events-none backdrop-blur-sm"
            >
              Get in Touch
              <div className="absolute -bottom-1.5 right-5 w-3 h-3 bg-gray-900/90 rotate-45" />
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
}
