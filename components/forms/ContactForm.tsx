"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { User, Mail, MessageSquare, FileText, Loader2, CheckCircle } from "lucide-react";
import { contactSchema, ContactFormData } from "@/lib/schema";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1000));
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    toast.success("Message sent! We'll get back to you within 24 hours.", {
      duration: 5000,
      icon: "✅",
    });
    setTimeout(() => setIsSuccess(false), 4000);
  };

  const inputClass = `w-full px-4 py-3 rounded-xl border bg-white text-gray-800 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0E7A5F]/40 focus:border-[#0E7A5F] transition-all duration-200`;
  const labelClass = `block text-sm font-semibold text-gray-700 mb-1.5`;
  const errorClass = `text-red-500 text-xs mt-1`;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Name */}
        <div>
          <label className={labelClass}>Your Name</label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              id="contact-name"
              type="text"
              placeholder="John Smith"
              className={`${inputClass} pl-10 ${errors.name ? "border-red-300" : "border-gray-200"}`}
              {...register("name")}
            />
          </div>
          {errors.name && <p className={errorClass}>{errors.name.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label className={labelClass}>Email Address</label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              id="contact-email"
              type="email"
              placeholder="your@email.com"
              className={`${inputClass} pl-10 ${errors.email ? "border-red-300" : "border-gray-200"}`}
              {...register("email")}
            />
          </div>
          {errors.email && <p className={errorClass}>{errors.email.message}</p>}
        </div>
      </div>

      {/* Subject */}
      <div>
        <label className={labelClass}>Subject</label>
        <div className="relative">
          <FileText className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            id="contact-subject"
            type="text"
            placeholder="How can we help?"
            className={`${inputClass} pl-10 ${errors.subject ? "border-red-300" : "border-gray-200"}`}
            {...register("subject")}
          />
        </div>
        {errors.subject && <p className={errorClass}>{errors.subject.message}</p>}
      </div>

      {/* Message */}
      <div>
        <label className={labelClass}>Message</label>
        <div className="relative">
          <MessageSquare className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />
          <textarea
            id="contact-message"
            rows={5}
            placeholder="Tell us about your learning goals, preferred schedule, or any questions..."
            className={`${inputClass} pl-10 resize-none ${errors.message ? "border-red-300" : "border-gray-200"}`}
            {...register("message")}
          />
        </div>
        {errors.message && <p className={errorClass}>{errors.message.message}</p>}
      </div>

      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`w-full py-3.5 font-bold rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center gap-2 ${
          isSuccess
            ? "bg-green-500 text-white shadow-green-500/30"
            : "bg-gradient-to-r from-[#0E7A5F] to-[#0a5c47] text-white shadow-[#0E7A5F]/25 hover:shadow-[#0E7A5F]/40"
        } disabled:opacity-70 disabled:cursor-not-allowed`}
      >
        {isSubmitting ? (
          <><Loader2 className="w-5 h-5 animate-spin" /> Sending...</>
        ) : isSuccess ? (
          <><CheckCircle className="w-5 h-5" /> Message Sent!</>
        ) : (
          "Send Message"
        )}
      </motion.button>
    </form>
  );
}
