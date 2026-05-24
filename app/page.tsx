import SiteHeader from "@/components/site-header"
import Hero from "@/components/hero"
import Features from "@/components/features"
import LogoMarquee from "@/components/logo-marquee"
import Pricing from "@/components/pricing"
import AppverseFooter from "@/components/appverse-footer"
import Script from "next/script"

// Force static generation for low TTFB
export const dynamic = "force-static"

export default function Page() {
  // Structured data for main page
  const pageStructuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://craniotattoo.com.br/",
    name: "Crânio Tattoo | Arte Autoral & Piercing de Elite",
    description:
      "Estúdio de tatuagem autoral e piercing profissional. Arte exclusiva, joias de titânio e técnicas avançadas para quem busca excelência.",
    url: "https://craniotattoo.com.br/",
    image: "https://craniotattoo.com.br/logo.png",
    priceRange: "\(\)",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Brasil",
      addressCountry: "BR",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "100",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serviços de Tatuagem e Piercing",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Tatuagem Autoral",
            description: "Criação de arte exclusiva e personalizada",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Body Piercing",
            description: "Perfurações profissionais com máxima segurança",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Joias de Titânio",
            description: "Peças premium hipoalergênicas",
          },
        },
      ],
    },
  }

  return (
    <>
      <main className="min-h-[100dvh] text-white">
        <SiteHeader />
        <Hero />
        <Features />
        <LogoMarquee />
        <Pricing />
        <AppverseFooter />
      </main>

      {/* JSON-LD structured data */}
      <Script
        id="page-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageStructuredData),
        }}
      />
    </>
  )
}
