"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { courses } from "@/data/courses";
import CourseCard from "@/components/courses/CourseCard";

export default function CoursesPreview() {
  const featured = courses.filter((c) => c.popular).slice(0, 4);

  return (
    <section id="courses" className="section-pad bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-[#0E7A5F] font-semibold text-sm uppercase tracking-widest mb-3">
            Our Courses
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Popular{" "}
            <span className="gradient-text">Learning Paths</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Structured, expert-designed courses for every level and age group.
            From your first Arabic letter to advanced Tafseer.
          </p>
        </motion.div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {featured.map((course, i) => (
            <CourseCard key={course.id} course={course} index={i} />
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-[#0E7A5F] text-[#0E7A5F] font-semibold rounded-xl hover:bg-[#0E7A5F] hover:text-white transition-all duration-300 group"
          >
            View All 10 Courses
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
