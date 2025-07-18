'use client';
import { useRef } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TEAM_MEMBERS, TESTIMONIALS } from '@/lib/constants';
import { BadgeCheck, HeartHandshake, Lightbulb, Users } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Link from 'next/link';
import Autoplay from "embla-carousel-autoplay";
import Script from 'next/script';

export default function AboutSection() {
  const plugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  const values = [
    { name: 'Expert Guidance', icon: BadgeCheck },
    { name: 'Patient-Centered Approach', icon: HeartHandshake },
    { name: 'Lifestyle & Diet Counseling', icon: Lightbulb },
  ];

  const doctor = TEAM_MEMBERS[0];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "MEDICLINIX",
    "image": doctor.image,
    "description": "MEDICLINIX offers expert care for diabetes, cardiology, endocrinology, and more in Jagatpura, Jaipur. Led by Dr. Anurag Srivastava, a trusted internal medicine specialist.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shop No. 17, Jagatpura",
      "addressLocality": "Jaipur",
      "addressRegion": "RJ",
      "postalCode": "302017",
      "addressCountry": "IN"
    },
    "telephone": "+91-8505000755",
    "openingHours": [
      "Mo-Sa 18:00-20:00",
      "Sa-Su 10:00-12:00"
    ],
    "employee": {
      "@type": "Physician",
      "name": doctor.name,
      "image": doctor.image,
      "jobTitle": "Internal Medicine Specialist",
      "medicalSpecialty": ["Endocrinology", "Cardiology", "Rheumatology", "Gastroenterology", "Internal Medicine"],
      "alumniOf": "Christian Medical College, Vellore"
    }
  };

  return (
    <>
      <Script
        id="structured-data-physician"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section id="about" className="py-20 md:py-28 bg-background animate-fade-in-up">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">
              About Dr. Anurag Srivastava
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              With a focus on personalized care, patient education, and evidence-based treatment, our center is committed to improving the lives of people living with diabetes.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12 mb-20 items-center">
            <div className="lg:col-span-2 space-y-4">
              <h3 className="text-2xl font-bold font-headline text-primary">Our Philosophy</h3>
              <p className="text-foreground/80">
                Dr. Anurag Srivastava, an experienced internal medicine specialist, brings years of clinical expertise in managing Type 1, Type 2, and gestational diabetes, as well as diabetic complications such as neuropathy, retinopathy, and kidney issues.
              </p>
              <h3 className="text-2xl font-bold font-headline text-primary pt-4">Why Choose Us?</h3>
              <div className="space-y-3">
                {values.map((value) => (
                  <div key={value.name} className="flex items-center gap-3">
                    <div className="bg-accent/20 text-accent p-2 rounded-full">
                      <value.icon className="h-5 w-5" />
                    </div>
                    <span className="font-semibold text-foreground">{value.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-3">
              <Link href="/doctor">
                <Card className="shadow-lg hover:shadow-xl transition-shadow cursor-pointer animate-fade-in-up delay-200">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold font-headline text-center">Meet Our Doctor</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-8">
                    {TEAM_MEMBERS.map((member, index) => (
                      <div key={index} className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                        <Image
                          src={member.image}
                          alt={`Photo of ${member.name}`}
                          width={100}
                          height={100}
                          className="rounded-full aspect-square object-cover shadow-md"
                          data-ai-hint={member.dataAiHint}
                        />
                        <div className="text-center sm:text-left">
                          <h4 className="font-bold text-lg text-primary">{member.name}</h4>
                          <p className="font-semibold text-sm text-accent">{member.title}</p>
                          <p className="mt-2 text-sm text-muted-foreground whitespace-pre-wrap">{member.bio}</p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
          
          <div className="text-center max-w-3xl mx-auto animate-fade-in-up delay-400">
            <h3 className="text-2xl font-bold font-headline mb-8">What Our Patients Say</h3>
              <Carousel
                plugins={[plugin.current]}
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
              >
                <CarouselContent>
                  {TESTIMONIALS.map((testimonial, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                            <p className="text-muted-foreground italic">&quot;{testimonial.quote}&quot;</p>
                            <p className="font-bold mt-4">{testimonial.name}</p>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
          </div>
        </div>
      </section>
    </>
  );
}
