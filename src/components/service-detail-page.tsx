'use client';

import { SERVICES, type Service } from '@/lib/constants';
import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, CalendarPlus } from 'lucide-react';
import BookingModal from '@/components/booking-modal';
import { notFound } from 'next/navigation';

interface ServiceDetailPageClientProps {
  slug: string;
}

export default function ServiceDetailPageClient({ slug }: ServiceDetailPageClientProps) {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  
  const service = SERVICES.find(s => s.slug === slug);

  if (!service) {
    // This will show the 404 page if the service is not found on the client side.
    notFound();
  }
  
  // Helper to render sections which can be a string or an object with title and content
  const renderSection = (section: any, index: number) => {
    if (typeof section === 'string') {
      return <p key={index} className="text-foreground/80 leading-relaxed">{section}</p>;
    }
    if (section.title && section.content) {
      return (
        <div key={index} className="mt-6">
          <h3 className="text-xl font-bold font-headline text-primary mb-2">{section.title}</h3>
          <p className="text-foreground/80 leading-relaxed">{section.content}</p>
        </div>
      );
    }
    return null;
  };
  
  // Helper to render lists
  const renderList = (items: string[] | undefined) => {
    if (!items || items.length === 0) return null;
    return (
      <ul className="space-y-3 mt-4">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <CheckCircle2 className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
            <span className="text-foreground/90">{item}</span>
          </li>
        ))}
      </ul>
    );
  };

  const openBookingModal = () => setIsBookingModalOpen(true);

  return (
    <>
      <div className="bg-background min-h-screen animate-fade-in-up">
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="mb-8">
            <Button asChild variant="outline">
              <Link href="/#services">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Services
              </Link>
            </Button>
          </div>

          <Card className="shadow-lg max-w-4xl mx-auto">
            <CardHeader className="text-center">
              <div className="flex justify-center items-center mb-4">
                  <div className="p-4 bg-primary/10 rounded-full text-primary">
                      <service.icon className="h-10 w-10" />
                  </div>
              </div>
              <CardTitle className="text-3xl md:text-4xl font-bold font-headline text-primary">
                {service.name}
              </CardTitle>
              {service.tagline && <p className="text-muted-foreground text-lg">{service.tagline}</p>}
            </CardHeader>
            <CardContent className="px-6 md:px-8 py-8">
              <div className="prose prose-lg max-w-none">
                <div className="mb-8">
                  <Image
                    src={service.image}
                    alt={service.name}
                    width={1200}
                    height={600}
                    className="rounded-lg object-cover aspect-[2/1] shadow-lg w-full"
                    data-ai-hint={service.dataAiHint}
                  />
                </div>

                {service.details?.map(renderSection)}

                {service.keyServices && (
                  <div className="mt-8">
                    <h3 className="text-2xl font-bold font-headline text-primary mb-4">Key Services</h3>
                    {renderList(service.keyServices)}
                  </div>
                )}
                 {service.clinicServices && (
                  <div className="mt-8">
                    <h3 className="text-2xl font-bold font-headline text-primary mb-4">Clinic Services</h3>
                    {renderList(service.clinicServices)}
                  </div>
                )}
              </div>
            </CardContent>
            <CardFooter className="bg-secondary/50 p-6 flex-col sm:flex-row justify-center items-center gap-4">
               <p className="text-center sm:text-left text-muted-foreground font-semibold">Ready to get started?</p>
               <Button size="lg" onClick={openBookingModal} className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg animate-fade-in-up delay-500">
                <CalendarPlus className="mr-2 h-5 w-5" />
                Book an Appointment
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onOpenChange={setIsBookingModalOpen} 
        defaultService={service.name} 
      />
    </>
  );
}
