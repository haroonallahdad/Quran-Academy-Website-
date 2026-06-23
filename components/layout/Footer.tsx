"use client";

import Link from "next/link";
import { BookOpen, Mail, Phone, MapPin, Globe2, Camera, Play, X } from "lucide-react";
import { ACADEMY_EMAIL, ACADEMY_PHONE, WHATSAPP_URL } from "@/lib/utils";

const footerLinks = {
  courses: [
    { label: "Noorani Qaida", href: "/courses/noorani-qaida" },
    { label: "Tajweed Course", href: "/courses/tajweed-course" },
    { label: "Hifz Program", href: "/courses/hifz-memorization" },
    { label: "Arabic Language", href: "/courses/arabic-language" },
    { label: "Islamic Studies", href: "/courses/islamic-studies-adults" },
  ],
  company: [
    { label: "About Us", href: "/#about" },
    { label: "Our Teachers", href: "/#about" },
    { label: "Testimonials", href: "/#testimonials" },
    { label: "Blog", href: "/#blog" },
    { label: "Contact", href: "/contact" },
  ],
  support: [
    { label: "FAQ", href: "/#faq" },
    { label: "Pricing", href: "/#pricing" },
    { label: "Free Trial", href: "/enroll" },
    { label: "Enroll Now", href: "/enroll" },
    { label: "WhatsApp Us", href: WHATSAPP_URL },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0a1a14] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-5 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0E7A5F] to-[#D4AF37] flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="block font-heading font-bold text-white text-lg">Al-Huda</span>
                <span className="block text-[11px] text-gray-400 font-medium">Online Quran Academy</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Connecting hearts to the Quran through premium online education. 
              Expert teachers, flexible scheduling, students in 50+ countries.
            </p>
            {/* Contact */}
            <div className="space-y-2.5">
              <a href={`mailto:${ACADEMY_EMAIL}`} className="flex items-center gap-2.5 text-gray-400 hover:text-[#D4AF37] transition-colors text-sm group">
                <Mail className="w-4 h-4 text-[#0E7A5F] group-hover:text-[#D4AF37] transition-colors" />
                {ACADEMY_EMAIL}
              </a>
              <a href={`tel:${ACADEMY_PHONE}`} className="flex items-center gap-2.5 text-gray-400 hover:text-[#D4AF37] transition-colors text-sm group">
                <Phone className="w-4 h-4 text-[#0E7A5F] group-hover:text-[#D4AF37] transition-colors" />
                {ACADEMY_PHONE}
              </a>
              <div className="flex items-center gap-2.5 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-[#0E7A5F]" />
                Available Worldwide (Online Only)
              </div>
            </div>
            {/* Social */}
            <div className="flex items-center gap-3 mt-6">
              {[
                { Icon: Globe2, href: "#", label: "Facebook" },
                { Icon: Camera, href: "#", label: "Instagram" },
                { Icon: Play, href: "#", label: "YouTube" },
                { Icon: X, href: "#", label: "Twitter/X" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#0E7A5F] flex items-center justify-center transition-all duration-200 hover:scale-110"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Courses</h3>
            <ul className="space-y-2.5">
              {footerLinks.courses.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-[#D4AF37] text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-[#D4AF37] text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2.5">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-400 hover:text-[#D4AF37] text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Al-Huda Online Quran Academy. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <Link href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <span>·</span>
            <Link href="#" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
