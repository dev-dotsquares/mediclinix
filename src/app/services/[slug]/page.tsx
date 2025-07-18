import { SERVICES } from "@/lib/constants";
import { notFound } from "next/navigation";
import ServiceDetailPageClient from "@/components/service-detail-page";
import type { Metadata } from "next";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = SERVICES.find((s) => s.slug === params.slug);

  if (!service) {
    return {
      title: "Service Not Found",
      description: "The requested service is not available.",
    };
  }

  return {
    title: `${service.name} | MEDICLINIX | Dr. Anurag Srivastava`,
    description: service.tagline || service.description,
  };
}

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const service = SERVICES.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  // We pass only the slug (a string) to the client component.
  // The client component will use this slug to find the full service object.
  return <ServiceDetailPageClient slug={params.slug} />;
}

// This function is needed for Next.js to know which service pages to generate at build time.
export function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}
