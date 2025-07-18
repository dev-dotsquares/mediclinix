import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Clock } from "lucide-react"

export default function ContactSection() {
  const mapUrl = "https://maps.google.com/maps?q=26.807712385871,75.87077347040909&z=15&output=embed";

  return (
    <section id="contact" className="py-20 md:py-28 bg-background animate-fade-in-up">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            Get In Touch
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We&apos;re here to help. Reach out to us with any questions or to schedule an appointment.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Card className="shadow-lg animate-fade-in-up delay-200">
              <CardHeader>
                <CardTitle className="font-headline">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-foreground/80">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <p>MEDICLINIX – Diabetes & Lifestyle Clinic, Shop No. 17, Jagatpura, Jaipur</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <a href="tel:8505000755" className="hover:text-primary">8505000755</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <a href="mailto:contact@healthhub.com" className="hover:text-primary">contact@mediclinix.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Operating Hours</h3>
                    <p>Mon - Sat: 6:00 PM - 8:00 PM</p>
                    <p>Sat - Sun: 10:00 AM - 12:00 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>

             <Card className="shadow-lg animate-fade-in-up delay-400">
              <CardHeader>
                <CardTitle className="font-headline">Location</CardTitle>
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
                <CardTitle className="font-headline">Contact Form</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your Name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                   <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="Your Phone Number" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Your message..." />
                  </div>
                  <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
