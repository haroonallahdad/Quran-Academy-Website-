export const WHATSAPP_NUMBER = "+923001234567"; // Replace with actual number
export const WHATSAPP_MESSAGE = encodeURIComponent(
  "Assalamu Alaikum! I'm interested in enrolling in Al-Huda Online Quran Academy. Could you please provide more information?"
);
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}?text=${WHATSAPP_MESSAGE}`;

export const ACADEMY_NAME = "Al-Huda Online Quran Academy";
export const ACADEMY_SHORT = "Al-Huda Academy";
export const ACADEMY_EMAIL = "info@alhudaacademy.com";
export const ACADEMY_PHONE = "+92 300 123 4567";

export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export const courseList = [
  "Noorani Qaida",
  "Basic Quran Reading",
  "Tajweed Course",
  "Hifz (Memorization)",
  "Tafseer",
  "Translation Course",
  "Arabic Language",
  "Islamic Studies (Kids)",
  "Islamic Studies (Adults)",
  "Duas & Prayer Course",
];
