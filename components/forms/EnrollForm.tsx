"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { User, Mail, Phone, BookOpen, Gift, ArrowRight, Loader2 } from "lucide-react";
import { enrollSchema, EnrollFormData } from "@/lib/schema";
import { courseList } from "@/lib/utils";
import { useState } from "react";

interface EnrollFormProps {
  compact?: boolean;
  defaultCourse?: string;
}

export default function EnrollForm({ compact = false, defaultCourse }: EnrollFormProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EnrollFormData>({
    resolver: zodResolver(enrollSchema),
    defaultValues: {
      course: defaultCourse || "",
      freeTrial: "yes",
    },
  });

  const onSubmit = async (data: EnrollFormData) => {
    setIsSubmitting(true);
    // Simulate a brief processing delay for UX
    await new Promise((r) => setTimeout(r, 800));
    router.push("/thank-you");
  };

  const inputClass = `w-full px-4 py-3 rounded-xl border bg-white text-gray-800 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0E7A5F]/40 focus:border-[#0E7A5F] transition-all duration-200`;
  const labelClass = `block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide`;
  const errorClass = `text-red-500 text-xs mt-1 flex items-center gap-1`;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      {/* Full Name */}
      <div>
        <label className={labelClass}>Full Name</label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            id="enroll-name"
            type="text"
            placeholder="e.g. Fatima Al-Hassan"
            className={`${inputClass} pl-10 ${errors.fullName ? "border-red-300 bg-red-50/30" : "border-gray-200"}`}
            {...register("fullName")}
          />
        </div>
        {errors.fullName && <p className={errorClass}>⚠ {errors.fullName.message}</p>}
      </div>

      {/* Email */}
      <div>
        <label className={labelClass}>Email Address</label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            id="enroll-email"
            type="email"
            placeholder="your@email.com"
            className={`${inputClass} pl-10 ${errors.email ? "border-red-300 bg-red-50/30" : "border-gray-200"}`}
            {...register("email")}
          />
        </div>
        {errors.email && <p className={errorClass}>⚠ {errors.email.message}</p>}
      </div>

      {/* WhatsApp */}
      <div>
        <label className={labelClass}>WhatsApp Number</label>
        <div className="relative">
          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            id="enroll-whatsapp"
            type="tel"
            placeholder="+1 234 567 8900"
            className={`${inputClass} pl-10 ${errors.whatsapp ? "border-red-300 bg-red-50/30" : "border-gray-200"}`}
            {...register("whatsapp")}
          />
        </div>
        {errors.whatsapp && <p className={errorClass}>⚠ {errors.whatsapp.message}</p>}
      </div>

      {/* Course Select */}
      <div>
        <label className={labelClass}>Select Course</label>
        <div className="relative">
          <BookOpen className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          <select
            id="enroll-course"
            className={`${inputClass} pl-10 appearance-none cursor-pointer ${errors.course ? "border-red-300 bg-red-50/30" : "border-gray-200"}`}
            {...register("course")}
          >
            <option value="">Choose a course...</option>
            {courseList.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
        {errors.course && <p className={errorClass}>⚠ {errors.course.message}</p>}
      </div>

      {/* Free Trial */}
      <div>
        <label className={labelClass}>Free Trial Class?</label>
        <div className="flex gap-3">
          {[
            { value: "yes", label: "✅ Yes, Free Trial" },
            { value: "no", label: "Enroll Directly" },
          ].map(({ value, label }) => (
            <label
              key={value}
              className="flex-1 cursor-pointer"
            >
              <input
                type="radio"
                value={value}
                className="sr-only peer"
                {...register("freeTrial")}
              />
              <div className="w-full text-center px-3 py-2.5 rounded-xl border-2 border-gray-200 text-sm font-medium text-gray-600 peer-checked:border-[#0E7A5F] peer-checked:text-[#0E7A5F] peer-checked:bg-[#0E7A5F]/5 transition-all duration-200 cursor-pointer hover:border-gray-300">
                {label}
              </div>
            </label>
          ))}
        </div>
        {errors.freeTrial && <p className={errorClass}>⚠ {errors.freeTrial.message}</p>}
      </div>

      {/* Submit */}
      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
        className="w-full py-3.5 bg-gradient-to-r from-[#0E7A5F] to-[#0a5c47] text-white font-bold rounded-xl shadow-lg shadow-[#0E7A5F]/25 hover:shadow-[#0E7A5F]/40 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed mt-2"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Processing...
          </>
        ) : (
          <>
            Start My Free Trial
            <ArrowRight className="w-5 h-5" />
          </>
        )}
      </motion.button>

      <p className="text-center text-xs text-gray-400 pt-1">
        🔒 No payment required · Cancel anytime
      </p>
    </form>
  );
}
