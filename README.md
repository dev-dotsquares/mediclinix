# MEDICLINIX - Clinic Website

This is the official website for Dr. Anurag Srivastava's clinic, MEDICLINIX, located in Jagatpura, Jaipur. It is a modern, single-page application built with Next.js, designed to be professional, informative, and easy for patients to navigate.

The live application is a showcase of a professional medical website, complete with dynamic content, appointment booking, and detailed service information.

## Core Features

-   **Dynamic Content**: All website content, including service details, testimonials, and FAQs, is managed dynamically from a single `src/lib/content.json` file, making updates easy and centralized.
-   **Service Discovery**: A horizontally scrolling carousel on the homepage provides an overview of medical services. Each service has a dedicated, dynamically generated detail page.
-   **Appointment Booking**: A user-friendly modal allows patients to book appointments from any page. The form uses EmailJS to send notifications to both the clinic and the user.
-   **Doctor's Profile**: A comprehensive page showcasing Dr. Anurag Srivastava's qualifications, experience, and professional philosophy, complete with a gallery of his credentials.
-   **Patient Testimonials**: An auto-playing carousel displays patient reviews to build trust and credibility.
-   **SEO Optimized**: The site leverages Next.js for server-side rendering and dynamic metadata to ensure excellent search engine visibility.
-   **Modern UI/UX**: The website features a clean, professional design with smooth scrolling and subtle animations to enhance the user experience.

## Technology Stack

-   **Framework**: [Next.js](https://nextjs.org/) (v15) with App Router
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **UI Library**: [React](https://react.dev/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **UI Components**: [ShadCN UI](https://ui.shadcn.com/)
-   **Animations & Carousels**: `tailwindcss-animate`, `embla-carousel-react`, and `embla-carousel-autoplay`
-   **Email Service**: `@emailjs/browser` for form submissions
-   **Icons**: [Lucide React](https://lucide.dev/)

## Getting Started

To run the project locally, follow these steps:

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Run the development server:**
    ```bash
    npm run dev
    ```

    The application will be available at [http://localhost:9002](http://localhost:9002).

## Available Scripts

-   `npm run dev`: Starts the development server with Turbopack.
-   `npm run build`: Builds the application for production.
-   `npm run start`: Starts a production server.
-   `npm run lint`: Lints the codebase for errors.
