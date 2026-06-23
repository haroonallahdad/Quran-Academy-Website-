export interface Testimonial {
  id: string;
  name: string;
  location: string;
  country: string;
  countryFlag: string;
  rating: number;
  text: string;
  course: string;
  avatar: string;
  initials: string;
  avatarColor: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Fatima Al-Hassan",
    location: "London, UK",
    country: "United Kingdom",
    countryFlag: "🇬🇧",
    rating: 5,
    text: "My daughter started Noorani Qaida six months ago and she's already reading the Quran fluently. The one-on-one sessions with her teacher are incredible — patient, encouraging, and professional. Best decision we ever made!",
    course: "Noorani Qaida",
    avatar: "",
    initials: "FA",
    avatarColor: "#0E7A5F",
  },
  {
    id: "2",
    name: "Ahmed Siddiqui",
    location: "Toronto, Canada",
    country: "Canada",
    countryFlag: "🇨🇦",
    rating: 5,
    text: "I've tried other online Quran platforms but Al-Huda is on a different level. The Tajweed course is exceptional — my teacher knows every rule and explains it so clearly. I can feel my recitation improving every single week.",
    course: "Tajweed Course",
    avatar: "",
    initials: "AS",
    avatarColor: "#D4AF37",
  },
  {
    id: "3",
    name: "Zainab Omar",
    location: "Dubai, UAE",
    country: "UAE",
    countryFlag: "🇦🇪",
    rating: 5,
    text: "As a working professional, the flexible scheduling is a lifesaver. I take Arabic classes at 6am before work and my teacher is always punctual and prepared. The quality is truly world-class.",
    course: "Arabic Language",
    avatar: "",
    initials: "ZO",
    avatarColor: "#7c3aed",
  },
  {
    id: "4",
    name: "Muhammad Ibrahim",
    location: "Houston, USA",
    country: "United States",
    countryFlag: "🇺🇸",
    rating: 5,
    text: "My son has been in the Hifz program for 8 months and has memorized 5 Juzz already. The teacher is amazing with children — keeps him motivated and makes learning fun. We get weekly progress reports too!",
    course: "Hifz Program",
    avatar: "",
    initials: "MI",
    avatarColor: "#0a5c47",
  },
  {
    id: "5",
    name: "Aisha Rahman",
    location: "Melbourne, Australia",
    country: "Australia",
    countryFlag: "🇦🇺",
    rating: 5,
    text: "The Islamic Studies kids program has been transformational for my children. They now know all their daily duas, understand the pillars of Islam, and are excited to learn more. Highly recommend for any Muslim family.",
    course: "Islamic Studies (Kids)",
    avatar: "",
    initials: "AR",
    avatarColor: "#e11d48",
  },
  {
    id: "6",
    name: "Yusuf Malik",
    location: "Berlin, Germany",
    country: "Germany",
    countryFlag: "🇩🇪",
    rating: 5,
    text: "I enrolled in the Tafseer course and it has genuinely changed how I relate to the Quran. Understanding what I recite has deepened my connection to Allah. The teacher's knowledge of classical scholarship is outstanding.",
    course: "Tafseer Course",
    avatar: "",
    initials: "YM",
    avatarColor: "#b45309",
  },
];
