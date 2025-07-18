'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CalendarPlus, Stethoscope, Users } from 'lucide-react';
import Image from 'next/image';

interface HomeSectionProps {
  onBookAppointment: () => void;
}

export default function HomeSection({ onBookAppointment }: HomeSectionProps) {
  return (
    <section id="home" className="py-20 md:py-32 bg-secondary/50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tight text-primary">
              MEDICLINIX
            </h1>
            <p className="text-xl text-muted-foreground font-headline">
              Diabetes Care at Jagatpura, with Dr. Anurag Srivastava
            </p>
            <p className="text-lg text-foreground">
             Welcome to Jaipur’s trusted center for comprehensive diabetes management. With a focus on personalized care, patient education, and evidence-based treatment, our center is committed to improving the lives of people living with diabetes. Whether you’re newly diagnosed or need help managing long-term complications, we offer the support, treatment, and hope you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={onBookAppointment} className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg">
                <CalendarPlus className="mr-2 h-5 w-5" />
                Book an Appointment
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#services">Our Services</a>
              </Button>
            </div>
          </div>
          <div className="relative animate-fade-in-up delay-200">
            <Image 
              src="https://i.imghippo.com/files/tjp8409cqo.png"
              alt="Dr. Anurag Srivastava"
              width={600}
              height={400}
              className="rounded-xl shadow-2xl"
              data-ai-hint="clinic interior"
            />
            <Card className="absolute -bottom-8 -left-8 w-64 shadow-xl hidden lg:block animate-fade-in-up delay-400">
              <CardContent className="p-4">
                <p className="text-sm font-semibold italic text-primary">
                  &quot;Dr.Anurag Srivastava is an exceptional physician whose proficiency and dedication stand out...&quot;
                </p>
                <p className="text-xs text-right mt-2 text-muted-foreground">- Monita R.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
