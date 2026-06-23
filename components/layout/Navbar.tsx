"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, BookOpen } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/#about-section", label: "About" },
  { href: "/#testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

// Pages whose hero is a dark background — navbar should render white text when not scrolled
const DARK_HERO_PAGES = ["/", "/courses", "/enroll", "/contact", "/thank-you"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const hasDarkHero = DARK_HERO_PAGES.includes(pathname) || pathname.startsWith("/courses/");

  useEffect(() => {
    // Run once on mount to handle page reload at a scrolled position
    setScrolled(window.scrollY > 60);
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Determine visual mode:
  // - atTop + darkHero → "dark" mode: transparent bg, white text
  // - scrolled OR non-dark page → "light" mode: white bg, dark text
  const isDarkMode = !scrolled && hasDarkHero;

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/96 backdrop-blur-2xl shadow-sm border-b border-gray-100/80"
          : hasDarkHero
          ? "bg-transparent"
          : "bg-white/96 backdrop-blur-2xl border-b border-gray-100/50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* ── Logo ── */}
          <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#0E7A5F] to-[#D4AF37] flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-200">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <div className="leading-tight">
              <span className={`block font-heading font-bold text-base md:text-lg transition-colors duration-300 ${
                isDarkMode ? "text-white" : "text-[#0E7A5F]"
              }`}>
                Al-Huda
              </span>
              <span className={`block text-[10px] font-medium -mt-0.5 transition-colors duration-300 ${
                isDarkMode ? "text-white/60" : "text-gray-400"
              }`}>
                Online Quran Academy
              </span>
            </div>
          </Link>

          {/* ── Desktop Nav ── */}
          <nav className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => {
              const isActive = link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href.split("#")[0]) && link.href.split("#")[0] !== "/";
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? isDarkMode
                        ? "text-white bg-white/15"
                        : "text-[#0E7A5F] bg-[#0E7A5F]/8"
                      : isDarkMode
                      ? "text-white/80 hover:text-white hover:bg-white/10"
                      : "text-gray-600 hover:text-[#0E7A5F] hover:bg-[#0E7A5F]/5"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* ── Desktop CTA ── */}
          <div className="hidden md:flex items-center gap-3 flex-shrink-0">
            {isDarkMode ? (
              <Link
                href="/enroll"
                className="px-5 py-2.5 bg-white text-[#0E7A5F] text-sm font-bold rounded-xl hover:bg-[#D4AF37] hover:text-white shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                Free Trial Class
              </Link>
            ) : (
              <Link
                href="/enroll"
                className="px-5 py-2.5 bg-gradient-to-r from-[#0E7A5F] to-[#0a5c47] text-white text-sm font-bold rounded-xl shadow-md hover:shadow-[#0E7A5F]/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                Free Trial Class
              </Link>
            )}
          </div>

          {/* ── Mobile Toggle ── */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isDarkMode
                ? "text-white/80 hover:text-white hover:bg-white/10"
                : "text-gray-600 hover:text-[#0E7A5F] hover:bg-[#0E7A5F]/5"
            }`}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-white/98 backdrop-blur-2xl border-t border-gray-100 shadow-2xl"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="flex items-center px-4 py-3 rounded-xl text-gray-700 hover:text-[#0E7A5F] hover:bg-[#0E7A5F]/5 font-medium transition-all text-sm"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="pt-2"
              >
                <Link
                  href="/enroll"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-gradient-to-r from-[#0E7A5F] to-[#0a5c47] text-white font-bold rounded-xl shadow-md"
                >
                  🎓 Start Free Trial Class
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
