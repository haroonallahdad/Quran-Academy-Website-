"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, Users, ArrowRight, Star } from "lucide-react";
import { Course } from "@/data/courses";

interface CourseCardProps {
  course: Course;
  index?: number;
}

export default function CourseCard({ course, index = 0 }: CourseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-[#0E7A5F]/10 transition-all duration-400 overflow-hidden flex flex-col"
    >
      {/* Popular badge */}
      {course.popular && (
        <div className="absolute top-3 right-3 z-10 flex items-center gap-1 bg-[#D4AF37] text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-md">
          <Star className="w-3 h-3" />
          Popular
        </div>
      )}

      {/* Card Header */}
      <div
        className="p-6 pb-5"
        style={{ backgroundColor: course.bgColor }}
      >
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-4 shadow-sm"
          style={{ backgroundColor: `${course.color}20` }}
        >
          {course.emoji}
        </div>
        <h3 className="font-heading font-bold text-gray-900 text-lg leading-snug mb-1.5">
          {course.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
          {course.shortDescription}
        </p>
      </div>

      {/* Card Body */}
      <div className="px-6 py-4 flex-1">
        <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" style={{ color: course.color }} />
            {course.duration}
          </div>
          <div className="flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5" style={{ color: course.color }} />
            Ages {course.ageGroup}
          </div>
        </div>

        {/* Features */}
        <ul className="space-y-1.5">
          {course.features.slice(0, 3).map((f) => (
            <li key={f} className="flex items-center gap-2 text-xs text-gray-600">
              <span className="w-4 h-4 rounded-full flex items-center justify-center text-white text-[9px] font-bold flex-shrink-0" style={{ backgroundColor: course.color }}>✓</span>
              {f}
            </li>
          ))}
        </ul>
      </div>

      {/* Card Footer */}
      <div className="px-6 pb-6 pt-0 flex gap-2.5">
        <Link
          href={`/courses/${course.slug}`}
          className="flex-1 text-center py-2.5 border-2 text-sm font-semibold rounded-xl transition-all duration-200 hover:text-white"
          style={{ borderColor: course.color, color: course.color }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor = course.color;
            (e.currentTarget as HTMLElement).style.color = "white";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
            (e.currentTarget as HTMLElement).style.color = course.color;
          }}
        >
          Learn More
        </Link>
        <Link
          href={`/enroll?course=${encodeURIComponent(course.title)}`}
          className="flex-1 text-center py-2.5 text-white text-sm font-semibold rounded-xl transition-all duration-200 hover:opacity-90 hover:shadow-md flex items-center justify-center gap-1.5"
          style={{ backgroundColor: course.color }}
        >
          Enroll Now
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </motion.div>
  );
}
