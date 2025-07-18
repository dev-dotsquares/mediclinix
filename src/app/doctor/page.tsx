import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, Award, BookUser, Medal, Star } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import type { Metadata } from 'next';
import content from '@/lib/content.json';

export const metadata: Metadata = {
  title: 'Dr. Anurag Srivastava - Internal Medicine Specialist in Jaipur',
  description: 'Learn more about Dr. Anurag Srivastava, an experienced internal medicine specialist at MEDICLINIX, Jagatpura, Jaipur. View his qualifications, expertise, and gallery.',
};

export default function DoctorProfilePage() {
  const doctor = content.teamMembers[0];
  const doctorPageContent = content.doctorPage;
  const qualifications = doctor.bio.split('\n').filter(q => q.trim() !== '');

  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="mb-8">
          <Button asChild variant="outline">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {doctorPageContent.backButtonText}
            </Link>
          </Button>
        </div>

        <Card className="shadow-lg max-w-5xl mx-auto overflow-hidden">
          <CardHeader className="bg-secondary/50 p-8 text-center">
            <div className="flex justify-center mb-4">
              <Image
                src={doctor.image}
                alt={`Photo of ${doctor.name}`}
                width={150}
                height={150}
                className="rounded-full aspect-square object-cover shadow-2xl ring-4 ring-background"
                data-ai-hint={doctor.dataAiHint}
              />
            </div>
            <CardTitle className="text-3xl md:text-4xl font-bold font-headline text-primary">
              {doctor.name}
            </CardTitle>
            <CardDescription className="text-lg text-muted-foreground mt-2">
              {doctorPageContent.pageSubtitle}
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold font-headline text-primary mb-4 flex items-center gap-3"><BookUser/> {doctorPageContent.workShowcase.title}</h3>
                  <p className="text-foreground/80 leading-relaxed">
                    {doctorPageContent.workShowcase.description}
                  </p>
                </div>
                 <div>
                  <h3 className="text-2xl font-bold font-headline text-primary mb-4 flex items-center gap-3"><Star/> {doctorPageContent.specializations.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {doctorPageContent.specializations.keywords.map(keyword => (
                      <span key={keyword} className="bg-secondary text-secondary-foreground text-sm font-medium px-3 py-1 rounded-full">
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold font-headline text-primary mb-4 flex items-center gap-3"><Award/> {doctorPageContent.qualifications.title}</h3>
                  <ul className="space-y-3">
                    {qualifications.map((q, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Medal className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                        <span className="text-foreground/90">{q}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t">
              <h3 className="text-2xl font-bold font-headline text-primary mb-6 text-center">{doctorPageContent.gallery.title}</h3>
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full max-w-4xl mx-auto"
              >
                <CarouselContent>
                  {doctorPageContent.gallery.images.map((image, index) => (
                    <CarouselItem key={index} className="sm:basis-1/2 md:basis-1/3">
                      <div className="p-1">
                        <Card className="overflow-hidden group">
                          <CardContent className="p-0 flex aspect-[3/4] items-center justify-center">
                            <Image
                              src={image.src}
                              alt={image.alt}
                              width={400}
                              height={533}
                              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                              data-ai-hint={image.dataAiHint}
                            />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden sm:flex"/>
                <CarouselNext className="hidden sm:flex"/>
              </Carousel>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
