'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SERVICES } from '@/lib/constants';
import { ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

interface ServicesSectionProps {
  onBookAppointment: () => void;
}

export default function ServicesSection({ onBookAppointment }: ServicesSectionProps) {
  return (
    <>
      <section id="services" className="py-20 md:py-28 bg-secondary/50 animate-fade-in-up">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">
              Our Medical Services
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Located in the heart of Jagatpura, Jaipur, our facility combines advanced diagnostic tools, compassionate consultation, and holistic lifestyle guidance — making it a one-stop solution for long-term diabetic care.
            </p>
          </div>
          
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-sm sm:max-w-xl md:max-w-3xl lg:max-w-5xl mx-auto"
          >
            <CarouselContent className="-ml-4">
              {SERVICES.map((service, index) => (
                <CarouselItem key={service.slug} className="pl-4 sm:basis-1/2 lg:basis-1/4">
                  <div className="p-1 h-full">
                    <Link href={`/services/${service.slug}`} className="flex h-full">
                      <Card 
                        className="text-center shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col w-full cursor-pointer"
                      >
                        <CardHeader className="items-center">
                          <div className="p-4 bg-primary/10 rounded-full text-primary mb-4">
                            <service.icon className="h-8 w-8" />
                          </div>
                          <CardTitle className="font-headline text-lg leading-tight">{service.name}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                          <p className="text-muted-foreground text-sm">{service.description}</p>
                        </CardContent>
                      </Card>
                    </Link>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

          <div className="text-center max-w-3xl mx-auto mt-16">
            <Card className="bg-card shadow-lg inline-block">
              <CardContent className="p-6 flex flex-col sm:flex-row items-center gap-4">
                <ShieldCheck className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="font-bold text-left">Modern Diagnostic Support</h3>
                  <p className="text-muted-foreground text-sm text-left">Blood sugar profiling, HbA1c, lipid monitoring, kidney function tests – all under one roof.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
