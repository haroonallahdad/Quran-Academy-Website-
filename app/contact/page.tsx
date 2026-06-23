import type { Metadata } from "next";
import ContactForm from "@/components/forms/ContactForm";
import { Mail, Phone, MessageCircle, Clock } from "lucide-react";
import { ACADEMY_EMAIL, ACADEMY_PHONE, WHATSAPP_URL } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact Us | Al-Huda Online Quran Academy",
  description: "Get in touch with Al-Huda Online Quran Academy. We're available 24/7 via WhatsApp, email, and phone. Ask us anything about our courses.",
};

const contactInfo = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+92 300 123 4567",
    href: WHATSAPP_URL,
    color: "#25D366",
    description: "Available 24/7 — fastest response",
  },
  {
    icon: Mail,
    label: "Email",
    value: ACADEMY_EMAIL,
    href: `mailto:${ACADEMY_EMAIL}`,
    color: "#0E7A5F",
    description: "We reply within 12 hours",
  },
  {
    icon: Phone,
    label: "Phone",
    value: ACADEMY_PHONE,
    href: `tel:${ACADEMY_PHONE}`,
    color: "#7c3aed",
    description: "Mon–Sat, 9am–9pm PKT",
  },
  {
    icon: Clock,
    label: "Office Hours",
    value: "24/7 Online",
    href: "#",
    color: "#D4AF37",
    description: "Students in every timezone",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-beige">
      {/* Page Header */}
      <div className="bg-gradient-to-br from-[#0E7A5F] to-[#063d31] pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-15" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-[#D4AF37] font-semibold text-sm uppercase tracking-widest mb-3">
            Get in Touch
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Have a question? Want to enroll? We&apos;re here to help 24/7.
            Reach out on WhatsApp for the fastest response.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="font-heading font-bold text-gray-900 text-2xl mb-2">
              We&apos;re Here for You
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Whether you want to ask about a course, schedule a free trial, or need help
              choosing the right program — our team is ready to assist you.
            </p>

            <div className="space-y-4 mb-8">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-200 group"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${info.color}15` }}
                  >
                    <info.icon className="w-5 h-5" style={{ color: info.color }} />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-0.5">
                      {info.label}
                    </div>
                    <div className="font-semibold text-gray-900 text-sm">{info.value}</div>
                    <div className="text-gray-400 text-xs mt-0.5">{info.description}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Quick WhatsApp CTA */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 bg-[#25D366] text-white font-bold rounded-2xl hover:bg-[#1da851] transition-all duration-300 shadow-lg shadow-[#25D366]/25 hover:shadow-[#25D366]/40"
            >
              <MessageCircle className="w-5 h-5" />
              Chat with Us on WhatsApp Now
            </a>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg">
            <h2 className="font-heading font-bold text-gray-900 text-2xl mb-2">
              Send Us a Message
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              Fill the form and we&apos;ll get back to you within 12 hours.
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
