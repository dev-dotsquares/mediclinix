import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Clock } from "lucide-react"
import content from '@/lib/content.json';

export default function ContactSection() {
  const contactContent = content.contactSection;
  const mapUrl = "https://maps.google.com/maps?q=26.807712385871,75.87077347040909&z=15&output=embed";

  return (
    <section id="contact" className="py-20 md:py-28 bg-background animate-fade-in-up">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            {contactContent.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {contactContent.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Card className="shadow-lg animate-fade-in-up delay-200">
              <CardHeader>
                <CardTitle className="font-headline">{contactContent.infoCard.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-foreground/80">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">{contactContent.infoCard.address.label}</h3>
                    <p>{contactContent.infoCard.address.value}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">{contactContent.infoCard.phone.label}</h3>
                    <a href={`tel:${contactContent.infoCard.phone.value}`} className="hover:text-primary">{contactContent.infoCard.phone.value}</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">{contactContent.infoCard.email.label}</h3>
                    <a href={`mailto:${contactContent.infoCard.email.value}`} className="hover:text-primary">{contactContent.infoCard.email.value}</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">{contactContent.infoCard.hours.label}</h3>
                    {contactContent.infoCard.hours.value.map((line, index) => (
                      <p key={index}>{line}</p>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

             <Card className="shadow-lg animate-fade-in-up delay-400">
              <CardHeader>
                <CardTitle className="font-headline">{contactContent.locationCard.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video rounded-lg overflow-hidden">
                   <iframe
                      src={mapUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Clinic Location"
                    ></iframe>
                </div>
              </CardContent>
            </Card>

          </div>

          <div>
            <Card className="shadow-lg animate-fade-in-up delay-600">
              <CardHeader>
                <CardTitle className="font-headline">{contactContent.formCard.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">{contactContent.formCard.fields.name.label}</Label>
                    <Input id="name" placeholder={contactContent.formCard.fields.name.placeholder} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">{contactContent.formCard.fields.email.label}</Label>
                    <Input id="email" type="email" placeholder={contactContent.formCard.fields.email.placeholder} />
                  </div>
                   <div className="space-y-2">
                    <Label htmlFor="phone">{contactContent.formCard.fields.phone.label}</Label>
                    <Input id="phone" type="tel" placeholder={contactContent.formCard.fields.phone.placeholder} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">{contactContent.formCard.fields.message.label}</Label>
                    <Textarea id="message" placeholder={contactContent.formCard.fields.message.placeholder} />
                  </div>
                  <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">{contactContent.formCard.submitButtonText}</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
