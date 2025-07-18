# Project Documentation: MEDICLINIX Website

## 1. Project Overview

This document outlines the product and technical details for the MEDICLINIX website, the official online presence for Dr. Anurag Srivastava's clinic in Jagatpura, Jaipur.

The primary goal of this website is to provide a professional, informative, and accessible platform for current and potential patients. It serves as a digital front door to the clinic, showcasing the range of specialized medical services offered, providing detailed information about Dr. Anurag Srivastava's expertise, and streamlining the appointment booking process.

## 2. Target Audience

The website is designed for:
-   **Potential Patients**: Individuals in and around Jaipur seeking specialized medical care for conditions related to endocrinology, cardiology, dermatology, and other services offered.
-   **Current Patients**: Existing patients looking for clinic information, contact details, operating hours, or to book follow-up appointments.
-   **Referring Professionals**: Other doctors or healthcare providers who may wish to learn more about Dr. Srivastava's practice before referring patients.

## 3. Core Features

### 3.1. Homepage
-   A welcoming landing page with a clear value proposition.
-   Navigation to all major sections of the site.
-   Direct call-to-action (CTA) buttons for booking appointments.
-   Sections for About, Services, FAQ, and Contact information.

### 3.2. Service Discovery
-   **Services Section**: A carousel on the homepage provides a high-level overview of all medical services offered.
-   **Detailed Service Pages**: Each service has a dedicated, dynamically-generated page (`/services/[slug]`) containing comprehensive information, including:
    -   Detailed descriptions and taglines.
    -   Key services and conditions treated.
    -   Relevant imagery and icons.
-   Each service page includes a "Book an Appointment" CTA.

### 3.3. Doctor's Profile
-   A dedicated page (`/doctor`) to showcase Dr. Anurag Srivastava's qualifications, experience, and professional philosophy.
-   Includes a photo gallery of credentials and certificates.

### 3.4. Appointment Booking
-   A user-friendly **Booking Modal** allows users to request an appointment from any page.
-   The form collects the user's name, email, preferred service, date, and reason for the visit.
-   The modal uses **EmailJS** to send booking notifications to both the clinic and the user.
-   The calendar prevents booking dates in the past.

### 3.5. Patient Testimonials & FAQ
-   **Testimonials Carousel**: An auto-playing carousel on the "About" section displays positive reviews from patients to build trust.
-   **FAQ Section**: An accordion-style FAQ section provides quick answers to common questions about clinic hours, location, and services.

## 4. Technology Stack

-   **Framework**: [Next.js](https://nextjs.org/) (v15) with App Router.
-   **Language**: [TypeScript](https://www.typescriptlang.org/).
-   **UI Library**: [React](https://react.dev/).
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/) for utility-first styling.
-   **UI Components**: [ShadCN UI](https://ui.shadcn.com/) for a pre-built, accessible, and customizable component library.
-   **Animations**: `tailwindcss-animate` and `embla-carousel` for smooth transitions and carousels.
-   **Forms**: `react-hook-form` is available but the booking modal uses a standard form with EmailJS.
-   **Email Service**: `@emailjs/browser` for handling appointment form submissions.
-   **Icons**: [Lucide React](https://lucide.dev/) for a consistent icon set.

## 5. Project Structure

The project follows a standard Next.js App Router structure.

```
/
├── src/
│   ├── app/                    # Main application routes (pages)
│   │   ├── (default)/
│   │   │   ├── page.tsx        # Homepage
│   │   │   ├── doctor/page.tsx # Doctor's profile page
│   │   │   └── services/[slug]/page.tsx # Dynamic service detail pages
│   │   ├── globals.css         # Global styles and ShadCN theme variables
│   │   └── layout.tsx          # Root layout
│   │
│   ├── components/
│   │   ├── ui/                 # Core ShadCN UI components (Button, Card, etc.)
│   │   ├── layout/             # Structural components (Header, Footer)
│   │   ├── sections/           # Homepage sections (Home, About, Services, etc.)
│   │   ├── booking-modal.tsx   # Appointment booking form
│   │   ├── home-page.tsx       # Main page component orchestrator
│   │   └── service-detail-page.tsx # Client component for service details
│   │
│   ├── hooks/
│   │   ├── use-toast.ts        # Custom hook for toast notifications
│   │   └── use-mobile.ts       # Custom hook to detect mobile viewports
│   │
│   ├── lib/
│   │   ├── constants.ts        # Centralized static data (services, testimonials, FAQs)
│   │   └── utils.ts            # Utility functions (e.g., `cn` for classnames)
│   │
│   └── ai/
│       └── genkit.ts           # Genkit AI configuration (not currently used)
│
├── public/                     # Static assets (images, fonts - if any)
├── tailwind.config.ts          # Tailwind CSS configuration
├── next.config.ts              # Next.js configuration
└── package.json                # Project dependencies and scripts
```

## 6. Content Management

All static content for the website is managed centrally in `src/lib/constants.ts`. This includes:
-   **`NAV_LINKS`**: Navigation links for the header.
-   **`TEAM_MEMBERS`**: Information about Dr. Anurag Srivastava.
-   **`SERVICES`**: A detailed array of all medical services. This is the single source of truth for the services section and the dynamic service pages.
-   **`TESTIMONIALS`**: A list of patient quotes.
-   **`FAQS`**: An array of frequently asked questions and their answers.

This centralized approach makes it easy to update content without searching through multiple component files.

## 7. Future Development Opportunities

-   **AI-Powered FAQ**: Implement a Genkit-powered chatbot to answer patient questions in real-time based on the `FAQS` and `SERVICES` data.
-   **Blog/Health Articles**: Add a blog section where Dr. Srivastava can post health tips and articles, improving SEO and patient engagement.
-   **Online Payments**: Integrate a payment gateway for consultation fees.
-   **Patient Portal**: A secure area for patients to view their appointment history or medical records.
