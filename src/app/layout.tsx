import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'MEDICLINIX - Dr. Anurag Srivastava | Best Doctor in Jagatpura, Jaipur',
  description: 'MEDICLINIX offers expert care for diabetes, cardiology, endocrinology, and more in Jagatpura, Jaipur. Led by Dr. Anurag Srivastava, a trusted internal medicine specialist.',
  keywords: [
    'doctor in jagatpura jaipur',
    'physician in jaipur',
    'diabetes specialist jaipur',
    'cardiologist jaipur',
    'endocrinologist jaipur',
    'rheumatologist jaipur',
    'mediclinix jaipur',
    'dr anurag srivastava'
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
