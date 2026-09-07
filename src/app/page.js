import HeroSection from '@/components/pages/home/HeroSection';
import AboutSection from '@/components/pages/home/AboutSection';
import ServicesSection from '@/components/pages/home/ServicesSection';
import WhyChooseUsSection from '@/components/pages/home/WhyChooseUsSection';
import BlogSection from '@/components/pages/home/BlogSection';
import QuoteSection from '@/components/pages/home/QuoteSection';
import ContactSection from '@/components/pages/home/ContactSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <WhyChooseUsSection />
      <ServicesSection />
      <QuoteSection />
      <ContactSection />
      <BlogSection />
    </div>
  );
}
