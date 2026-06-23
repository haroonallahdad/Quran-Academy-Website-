import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { courses, getCourseBySlug } from "@/data/courses";
import { Clock, Users, ArrowLeft, CheckCircle, ArrowRight } from "lucide-react";
import EnrollForm from "@/components/forms/EnrollForm";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) return { title: "Course Not Found" };
  return {
    title: `${course.title} | Al-Huda Online Quran Academy`,
    description: course.fullDescription,
  };
}

export default async function CourseDetailPage({ params }: Props) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) notFound();

  return (
    <div className="min-h-screen bg-beige">
      {/* Hero */}
      <div
        className="pt-28 pb-14 relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${course.color}dd, ${course.color}99)` }}
      >
        <div className="absolute inset-0 pattern-dots opacity-15" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/courses" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to All Courses
          </Link>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="text-5xl mb-5">{course.emoji}</div>
              {course.popular && (
                <span className="inline-block bg-[#D4AF37] text-white text-xs font-bold px-3 py-1.5 rounded-full mb-4">
                  ⭐ Most Popular
                </span>
              )}
              <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4">
                {course.title}
              </h1>
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                {course.fullDescription}
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-lg px-3 py-2 text-white text-sm">
                  <Clock className="w-4 h-4" />
                  {course.duration}
                </div>
                <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-lg px-3 py-2 text-white text-sm">
                  <Users className="w-4 h-4" />
                  Ages {course.ageGroup}
                </div>
                <div className="bg-white/15 backdrop-blur-sm rounded-lg px-3 py-2 text-white text-sm capitalize">
                  {course.level}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Features */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <h2 className="font-heading font-bold text-gray-900 text-2xl mb-6">What You&apos;ll Learn</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {course.features.map((f) => (
                  <div key={f} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: course.color }} />
                    <span className="text-gray-700 text-sm">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Curriculum */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <h2 className="font-heading font-bold text-gray-900 text-2xl mb-6">Course Curriculum</h2>
              <div className="space-y-3">
                {course.curriculum.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl" style={{ backgroundColor: course.bgColor }}>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-lg text-white flex-shrink-0" style={{ backgroundColor: course.color }}>
                      {item.week}
                    </span>
                    <span className="text-gray-700 text-sm font-medium">{item.topic}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar: Enroll Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white rounded-2xl p-6 border border-gray-100 shadow-lg">
              <h3 className="font-heading font-bold text-gray-900 text-lg mb-1">
                Enroll in This Course
              </h3>
              <p className="text-gray-500 text-sm mb-5">
                Start with a free trial — no payment required.
              </p>
              <EnrollForm defaultCourse={course.title} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
