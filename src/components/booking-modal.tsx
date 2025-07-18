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
import content from '@/lib/content.json';
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
  const bookingContent = content.bookingModal;

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
      await Promise.all([
        emailjs.send(serviceId, templateId, doctorEmailDetails, publicKey),
        emailjs.send(serviceId, templateId, userEmailDetails, publicKey)
      ]);

      toast({
        title: bookingContent.success.title,
        description: bookingContent.success.description,
      });
      onOpenChange(false);

    } catch (error) {
      console.error('Email sending failed:', error);
      toast({
        variant: "destructive",
        title: bookingContent.error.title,
        description: bookingContent.error.description,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[480px]">
        <DialogHeader>
          <DialogTitle className="font-headline text-2xl">{bookingContent.title}</DialogTitle>
          <DialogDescription>
            {bookingContent.description}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                {bookingContent.fields.name.label}
              </Label>
              <Input id="name" name="name" placeholder={bookingContent.fields.name.placeholder} className="col-span-3" required />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                {bookingContent.fields.email.label}
              </Label>
              <Input id="email" name="email" type="email" placeholder={bookingContent.fields.email.placeholder} className="col-span-3" required />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="service" className="text-right">
                {bookingContent.fields.service.label}
              </Label>
              <Select name="service" value={selectedService} onValueChange={setSelectedService}>
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder={bookingContent.fields.service.placeholder} />
                </SelectTrigger>
                <SelectContent>
                  {content.services.map((service) => (
                    <SelectItem key={service.name} value={service.name}>
                      {service.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="date" className="text-right">
                {bookingContent.fields.date.label}
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
                    {date ? format(date, 'PPP') : <span>{bookingContent.fields.date.placeholder}</span>}
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
                {bookingContent.fields.reason.label}
              </Label>
              <Textarea
                id="reason"
                name="reason"
                placeholder={bookingContent.fields.reason.placeholder}
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" disabled={isLoading}>
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {bookingContent.submitButtonText}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
