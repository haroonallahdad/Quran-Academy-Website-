export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const faqs: FAQ[] = [
  {
    id: "1",
    category: "Getting Started",
    question: "How do I start learning? Do I need any prior knowledge?",
    answer: "Getting started is simple! Book a free trial class through our website or WhatsApp. You don't need any prior knowledge — we assess your level during the trial session and place you in the most suitable course. Whether you're a complete beginner or want to improve existing skills, we have a program for you.",
  },
  {
    id: "2",
    category: "Getting Started",
    question: "What age groups do you teach?",
    answer: "We teach students of all ages — from young children aged 4–5 years (with parent assistance) through to adults of any age. Our teaching methods are adapted to suit different age groups, ensuring every student learns in the most effective way for them.",
  },
  {
    id: "3",
    category: "Classes",
    question: "How are the classes conducted? What platform do you use?",
    answer: "All classes are conducted live, one-on-one via Zoom or Skype. You'll have a dedicated teacher who schedules sessions at a time that suits you. Classes are interactive — your teacher can see your screen, and you can share your Quran or workbook in real time. All sessions can be recorded for revision.",
  },
  {
    id: "4",
    category: "Classes",
    question: "How long is each class and how many sessions per week?",
    answer: "Standard class duration is 30 minutes per session. Most students take 3 to 5 sessions per week, though we accommodate from 1 to 7 sessions per week based on your preference and schedule. More frequent sessions generally lead to faster progress.",
  },
  {
    id: "5",
    category: "Teachers",
    question: "Who are your teachers? Are they qualified?",
    answer: "All our teachers are certified and qualified Islamic scholars and Quran instructors. They hold Ijazah (chain of authorization) in Quran recitation, have completed formal Islamic education, and undergo regular quality assessments. Many of our teachers are also Huffaz with expertise in Tajweed and Islamic sciences.",
  },
  {
    id: "6",
    category: "Teachers",
    question: "Can I choose a female teacher for my daughter?",
    answer: "Absolutely. We have a large pool of qualified female teachers available for female students and children. Simply request a female teacher when booking your trial, and we'll make sure to assign one.",
  },
  {
    id: "7",
    category: "Pricing",
    question: "How much do classes cost? Is there a free trial?",
    answer: "Yes! We offer a completely free trial class with no commitment required. After the trial, our plans start from as low as $29/month depending on the number of sessions. See our pricing section for full details. We also offer family discounts for multiple students.",
  },
  {
    id: "8",
    category: "Pricing",
    question: "What payment methods do you accept?",
    answer: "We accept all major payment methods including credit/debit cards, PayPal, bank transfer, and for our international students we also support local payment methods. Billing is monthly and you can cancel anytime with no penalties.",
  },
  {
    id: "9",
    category: "Flexibility",
    question: "What if I need to reschedule or miss a class?",
    answer: "Life happens! You can reschedule a class up to 2 hours before its start time with no penalty. We also allow make-up classes for sessions missed due to unexpected circumstances. Our goal is to remove all barriers from your learning journey.",
  },
  {
    id: "10",
    category: "Flexibility",
    question: "Do you offer classes in languages other than English?",
    answer: "Yes! Our teachers can conduct classes in English, Urdu, Arabic, and several other languages. Let us know your preferred language when booking and we'll match you with a teacher who can teach in that language.",
  },
];
