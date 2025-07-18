'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { Calendar as CalendarIcon, Loader2 } from 'lucide-react';
import { SERVICES } from '@/lib/constants';
import { useToast } from '@/hooks/use-toast';

interface BookingModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  defaultService?: string;
}

export default function BookingModal({ isOpen, onOpenChange, defaultService }: BookingModalProps) {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [selectedService, setSelectedService] = useState(defaultService);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const reason = formData.get('reason') as string;
    
    const serviceId = 'service_e5cq6qy';
    const templateId = 'template_yhbt06c';
    const publicKey = 'EBG_d7QT59JOSkKGI';
    
    const commonDetails = {
      user_name: name,
      user_email: email,
      service: selectedService || 'Not specified',
      date: date ? format(date, 'PPP') : 'Not specified',
      reason: reason,
    };

    const doctorEmailDetails = {
      ...commonDetails,
      to_doctor: true,
      to_email: 'devmail.dotsquares@gmail.com',
    };
    
    const userEmailDetails = {
      ...commonDetails,
      to_doctor: false,
      to_email: email,
    };

    try {
      // Use Promise.all to send both emails concurrently
      await Promise.all([
        emailjs.send(serviceId, templateId, doctorEmailDetails, publicKey),
        emailjs.send(serviceId, templateId, userEmailDetails, publicKey)
      ]);

      toast({
        title: "Appointment Requested Successfully",
        description: "We've received your request and sent a confirmation to your email. We will be in touch shortly.",
      });
      onOpenChange(false);

    } catch (error) {
      console.error('Email sending failed:', error);
      toast({
        variant: "destructive",
        title: "Oh no! Something went wrong.",
        description: "There was a problem sending your appointment request. Please try again or contact us directly.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[480px]">
        <DialogHeader>
          <DialogTitle className="font-headline text-2xl">Book an Appointment</DialogTitle>
          <DialogDescription>
            Fill out the form below to request an appointment. We will contact you to confirm.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" name="name" placeholder="John Doe" className="col-span-3" required />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Input id="email" name="email" type="email" placeholder="john.doe@example.com" className="col-span-3" required />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="service" className="text-right">
                Service
              </Label>
              <Select name="service" value={selectedService} onValueChange={setSelectedService}>
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  {SERVICES.map((service) => (
                    <SelectItem key={service.name} value={service.name}>
                      {service.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="date" className="text-right">
                Date
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={'outline'}
                    className={cn(
                      'w-full col-span-3 justify-start text-left font-normal',
                      !date && 'text-muted-foreground'
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, 'PPP') : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                    disabled={(date) => date < new Date(new Date().setHours(0,0,0,0)) }
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="grid grid-cols-4 items-start gap-4">
              <Label htmlFor="reason" className="text-right pt-2">
                Reason
              </Label>
              <Textarea
                id="reason"
                name="reason"
                placeholder="Briefly describe the reason for your visit"
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" disabled={isLoading}>
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Request Appointment
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
