export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  emoji: string;
  bgColor: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "importance-of-tajweed",
    title: "Why Tajweed Matters: The Art of Beautiful Quran Recitation",
    excerpt: "Discover why proper Tajweed isn't just about beauty — it's about preserving the exact words of Allah as they were revealed. Learn the key rules every Muslim should know.",
    category: "Quran Learning",
    readTime: "5 min read",
    date: "June 15, 2025",
    emoji: "🎙️",
    bgColor: "rgba(14,122,95,0.08)",
  },
  {
    id: "2",
    slug: "tips-for-quran-memorization",
    title: "7 Proven Tips to Accelerate Your Quran Memorization Journey",
    excerpt: "Whether you're starting Hifz for the first time or looking to improve, these science-backed memorization techniques from our expert Huffaz will transform your progress.",
    category: "Hifz Tips",
    readTime: "7 min read",
    date: "June 8, 2025",
    emoji: "🧠",
    bgColor: "rgba(212,175,55,0.08)",
  },
  {
    id: "3",
    slug: "online-quran-learning-for-kids",
    title: "How to Make Online Quran Learning Fun for Kids (Ages 4–12)",
    excerpt: "Keeping young children engaged during online Quran classes requires creativity. Our experienced teachers share their top strategies for making Islamic education exciting and memorable for little ones.",
    category: "Kids Learning",
    readTime: "6 min read",
    date: "May 30, 2025",
    emoji: "⭐",
    bgColor: "rgba(225,29,72,0.08)",
  },
];
