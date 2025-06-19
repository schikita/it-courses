// app/page.tsx - Alternative version if path aliases don't work
import { HeroSection } from '@/components/Homepage/HeroSection';
import { StatsSection } from '@/components/Homepage/StatsSection';
import { PopularCourses } from '@/components/Homepage/PopularCourses';
import { FeaturesSection } from '@/components/Homepage/FeaturesSection';
import { TestimonialsSection } from '@/components/Homepage/TestimonialsSection';
import { CTASection } from '@/components/Homepage/CTASection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <StatsSection />
      <PopularCourses />
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}