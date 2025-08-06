"use client"

export default function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Álvaro Henrique",
    "jobTitle": "Desenvolvedor Front-End & Especialista em IA",
    "description": "Desenvolvedor front-end especializado em React, Next.js e IA conversacional.",
    "url": "https://alvaro-portifolio-ten.vercel.app",
    "image": "https://alvaro-portifolio-ten.vercel.app/profile/foto_perfil.jpg",
    "email": "alvaro.hop.ah@gmail.com",
    "sameAs": [
      "https://github.com/AlvaroHenriqueOP",
      "https://www.linkedin.com/in/alvaro-henrique-dev/"
    ]
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Álvaro Henrique - Portfólio",
    "description": "Portfólio profissional de Álvaro Henrique, desenvolvedor front-end especializado em React, Next.js e IA conversacional",
    "url": "https://alvaro-portifolio-ten.vercel.app",
    "author": {
      "@type": "Person",
      "name": "Álvaro Henrique"
    },
    "inLanguage": "pt-BR",
    "copyrightYear": new Date().getFullYear(),
    "copyrightHolder": {
      "@type": "Person",
      "name": "Álvaro Henrique"
    }
  }

  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": "https://alvaro-portifolio-ten.vercel.app",
    "name": "Portfólio Álvaro Henrique",
    "description": "Portfólio profissional showcasing desenvolvimento front-end, projetos de IA e soluções web inovadoras",
    "creator": {
      "@type": "Person",
      "name": "Álvaro Henrique",
      "jobTitle": "Desenvolvedor Front-End & Especialista em IA"
    },
    "dateCreated": "2024",
    "dateModified": new Date().toISOString().split('T')[0],
    "genre": "Portfolio",
    "keywords": "React, Next.js, TypeScript, IA, Chatbots, UI/UX, Desenvolvimento Web",
    "workExample": [
      {
        "@type": "WebSite",
        "name": "Portfólio Social Media",
        "description": "Portfólio responsivo para uma Social Media",
        "url": "https://portifolio-natalia.vercel.app/"
      },
      {
        "@type": "WebSite", 
        "name": "Clínica Odontológica",
        "description": "Site para uma clínica odontológica",
        "url": "https://projeto-clinica-ten.vercel.app/"
      },
      {
        "@type": "SoftwareApplication",
        "name": "Chatbot de Atendimento",
        "description": "Chatbot de atendimento para empresa de energia solar",
        "url": "https://typebot.co/bot-solfacil-qodlez0"
      }
    ]
  }

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Álvaro Henrique - Serviços de Desenvolvimento",
    "description": "Serviços profissionais de desenvolvimento front-end, criação de chatbots e soluções em IA",
    "provider": {
      "@type": "Person",
      "name": "Álvaro Henrique"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Brasil"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Serviços de Desenvolvimento",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Desenvolvimento Front-End",
            "description": "Criação de websites e aplicações web com React, Next.js e TypeScript"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Desenvolvimento de Chatbots",
            "description": "Criação de chatbots inteligentes para atendimento e automação"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "UI/UX Design",
            "description": "Design de interfaces focadas na experiência do usuário"
          }
        }
      ]
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(portfolioSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceSchema),
        }}
      />
    </>
  )
}