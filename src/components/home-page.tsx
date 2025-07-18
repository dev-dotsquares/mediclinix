'use client';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HomeSection from '@/components/sections/home';
import AboutSection from '@/components/sections/about';
import ServicesSection from '@/components/sections/services';
import FaqSection from '@/components/sections/faq';
import ContactSection from '@/components/sections/contact';

interface HomePageProps {
  onBookAppointment: () => void;
}

export default function HomePage({ onBookAppointment }: HomePageProps) {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header onBookAppointment={onBookAppointment} />
      <main className="flex-grow">
        <HomeSection onBookAppointment={onBookAppointment} />
        <AboutSection />
        <ServicesSection onBookAppointment={onBookAppointment} />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
