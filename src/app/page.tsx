import Hero from '@/components/home/Hero';
import Stats from '@/components/home/Stats';
import Services from '@/components/home/Services';
import TechStack from '@/components/home/TechStack';
import Process from '@/components/home/Process';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import CTABanner from '@/components/home/CTABanner';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <TechStack />
       <Services />
      <WhyChooseUs />
      
      <Process />
     
      <CTABanner />
    </>
  );
}

