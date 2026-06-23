"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { blogPosts } from "@/data/blog";

export default function BlogPreview() {
  return (
    <section id="blog" className="section-pad bg-white">
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
            Learning Resources
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            From Our{" "}
            <span className="gradient-text">Blog</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Tips, guides, and insights to help you and your family on your Quran learning journey.
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:shadow-[#0E7A5F]/8 transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Card header */}
              <div
                className="h-40 flex items-center justify-center text-5xl"
                style={{ backgroundColor: post.bgColor }}
              >
                {post.emoji}
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold text-[#0E7A5F] bg-[#0E7A5F]/8 px-2.5 py-1 rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1 text-gray-400 text-xs">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </div>
                </div>

                <h3 className="font-heading font-bold text-gray-900 text-base leading-snug mb-2 group-hover:text-[#0E7A5F] transition-colors flex-1">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                  <span className="text-gray-400 text-xs">{post.date}</span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-[#0E7A5F] text-xs font-semibold flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    Read More
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/blog" className="inline-flex items-center gap-2 text-[#0E7A5F] font-semibold hover:underline underline-offset-4">
            View all articles
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
