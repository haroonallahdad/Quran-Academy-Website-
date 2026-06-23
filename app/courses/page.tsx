import type { Metadata } from "next";
import { courses } from "@/data/courses";
import CourseCard from "@/components/courses/CourseCard";

export const metadata: Metadata = {
  title: "All Courses | Al-Huda Online Quran Academy",
  description: "Browse all 10 Quran and Islamic studies courses. Noorani Qaida, Tajweed, Hifz, Arabic Language, Tafseer, and more. Start with a free trial class.",
};

const categories = [
  { id: "all", label: "All Courses" },
  { id: "quran", label: "Quran" },
  { id: "arabic", label: "Arabic" },
  { id: "islamic", label: "Islamic Studies" },
  { id: "kids", label: "For Kids" },
];

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-beige">
      {/* Page Header */}
      <div className="bg-gradient-to-br from-[#0E7A5F] to-[#063d31] pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-15" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-[#D4AF37] font-semibold text-sm uppercase tracking-widest mb-3">
            Our Curriculum
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4">
            All Courses
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            10 expertly designed courses for every age, level, and learning goal.
            Every course includes a free trial class.
          </p>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {courses.map((course, i) => (
            <CourseCard key={course.id} course={course} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
