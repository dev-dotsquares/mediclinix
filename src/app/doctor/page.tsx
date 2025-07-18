import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, Award, BookUser, Medal, Star } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { TEAM_MEMBERS } from '@/lib/constants';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dr. Anurag Srivastava - Internal Medicine Specialist in Jaipur',
  description: 'Learn more about Dr. Anurag Srivastava, an experienced internal medicine specialist at MEDICLINIX, Jagatpura, Jaipur. View his qualifications, expertise, and gallery.',
};

export default function DoctorProfilePage() {
  const doctor = TEAM_MEMBERS[0];

  const keywords = [
    'CMC Vellore Convocation',
    'Dr Anurag Experienced Physician',
    'Best Physician Jagatpura',
    'Family Physician Jagatpura',
    'MRCGP UK Internal Medicine Jagatpura',
    'General Physician Jagatpura',
  ];

  const galleryImages = [
    { src: 'https://static.wixstatic.com/media/b2f219_23e13647a7ca4d7fb58922cb187f16e7~mv2.png/v1/fill/w_600,h_415,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/CMC%20Vellore%20Convocation%20Low%20Resolution.png', alt: 'CMC Vellore Convocation', dataAiHint: 'convocation ceremony' },
    { src: 'https://static.wixstatic.com/media/b2f219_8b43036dce7a407b9528b278b47ca7de~mv2.png/v1/fill/w_591,h_556,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Anurag%20Physician.png', alt: 'Dr. Anurag as a Physician', dataAiHint: 'doctor portrait' },
    { src: 'https://static.wixstatic.com/media/b2f219_17b4c6c286b44111a1c1c1d451534c28~mv2.png/v1/fill/w_311,h_429,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/RMC.png', alt: 'RMC Certificate', dataAiHint: 'medical certificate' },
    { src: 'https://static.wixstatic.com/media/b2f219_fac3ff61596c4673a53301cec8a6ef82~mv2.jpg/v1/crop/x_0,y_0,w_2262,h_3235/fill/w_300,h_429,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/CMC%20Vellore%20PGDFM%20Degree.jpg', alt: 'CMC Vellore PGDFM Degree', dataAiHint: 'degree certificate' },
    { src: 'https://static.wixstatic.com/media/b2f219_1bd628e7dab54d0bbe102b3fb6e09d21~mv2.png/v1/fill/w_300,h_417,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ACUMEN%20Photo.png', alt: 'ACUMEN Certificate', dataAiHint: 'training certificate' },
    { src: 'https://static.wixstatic.com/media/b2f219_056ac74e93a1443aaebfed5e85687ba1~mv2.png/v1/crop/x_0,y_0,w_6000,h_8177/fill/w_451,h_615,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Slide2_PNG.png', alt: 'Certificate slide', dataAiHint: 'presentation slide' },
  ];
  
  const qualifications = doctor.bio.split('\n').filter(q => q.trim() !== '');

  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="mb-8">
          <Button asChild variant="outline">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
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
              Dr. Anurag Srivastava
            </CardTitle>
            <CardDescription className="text-lg text-muted-foreground mt-2">
              Internal Medicine Specialist | Jagatpura, Jaipur
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold font-headline text-primary mb-4 flex items-center gap-3"><BookUser/> My Work Showcase</h3>
                  <p className="text-foreground/80 leading-relaxed">
                    Welcome to MEDICLINIX Jagatpura, Jaipur! With over 15 years of experience as a Family and Occupational Health Physician, I specialize in preventive health strategies to combat Diabetes, Hypertension, and other chronic illnesses. Holding a MRCP (UK) and post-graduation in Family Medicine from the prestigious Christian Medical College, Vellore, I am committed to providing expert care and sharing health insights with the community. Let's work together towards a healthier future!
                  </p>
                </div>
                 <div>
                  <h3 className="text-2xl font-bold font-headline text-primary mb-4 flex items-center gap-3"><Star/> Specializations & Expertise</h3>
                  <div className="flex flex-wrap gap-2">
                    {keywords.map(keyword => (
                      <span key={keyword} className="bg-secondary text-secondary-foreground text-sm font-medium px-3 py-1 rounded-full">
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold font-headline text-primary mb-4 flex items-center gap-3"><Award/> Qualifications & Credentials</h3>
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
              <h3 className="text-2xl font-bold font-headline text-primary mb-6 text-center">Gallery</h3>
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full max-w-4xl mx-auto"
              >
                <CarouselContent>
                  {galleryImages.map((image, index) => (
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
