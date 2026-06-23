import HeroSection from "@/components/home/HeroSection";
import TrustBadges from "@/components/home/TrustBadges";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import AboutSection from "@/components/home/AboutSection";
import CoursesPreview from "@/components/home/CoursesPreview";
import HowItWorks from "@/components/home/HowItWorks";
import Testimonials from "@/components/home/Testimonials";
import PricingSection from "@/components/home/PricingSection";
import FAQSection from "@/components/home/FAQSection";
import BlogPreview from "@/components/home/BlogPreview";
import FinalCTA from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBadges />
      <WhyChooseUs />
      <AboutSection />
      <CoursesPreview />
      <HowItWorks />
      <Testimonials />
      <PricingSection />
      <FAQSection />
      <BlogPreview />
      <FinalCTA />
    </>
  );
}
