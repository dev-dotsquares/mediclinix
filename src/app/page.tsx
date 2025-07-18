'use client';
import { useState } from 'react';
import HomePage from '@/components/home-page';
import BookingModal from '@/components/booking-modal';


export default function Page() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const openBookingModal = () => setIsBookingModalOpen(true);

  return (
    <>
      <HomePage onBookAppointment={openBookingModal} />
      <BookingModal isOpen={isBookingModalOpen} onOpenChange={setIsBookingModalOpen} />
    </>
  );
}
