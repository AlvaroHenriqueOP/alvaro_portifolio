import type { Metadata } from "next";
import "./globals.css";

// Substituir os placeholders
const siteConfig = {
  title: "Portfólio | Álvaro Henrique",
  description: "Desenvolvedor front-end, especialista em IA e criador de chatbots com foco em experiências interativas e soluções inovadoras.",
  url: "https://SEU_DOMINIO_AQUI.com",
  author: "Álvaro Henrique",
  github: "https://github.com/AlvaroHenriqueOP",
  linkedin: "https://www.linkedin.com/in/alvaro-henrique-dev/",
  ogImage: "/profile/foto_perfil.jpg",
};

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: ["desenvolvedor front-end", "portifolio", "react", "next.js", "IA", "chatbots", "experiência interativa", "soluções inovadoras", "typescript", "javascript", "criação de sites", "salvador", "bahia", "programador"],
  authors: [{ name: siteConfig.author, url: siteConfig.url }],
  creator: siteConfig.author,
  publisher: siteConfig.author,
  robots: { index: true, follow: true },
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: "Álvaro.Dev",
    images: [
      {
        url: siteConfig.ogImage,
        width: 800,
        height: 800,
        alt: `Foto de perfil de ${siteConfig.author}`,
      },
    ],
  },
  icons: {
    icon: "/profile/favicon.ico",
  },
  other: {
    'theme-color': '#0086A8',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Font Awesome para ícones */}
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" 
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" 
          crossOrigin="anonymous" 
          referrerPolicy="no-referrer" 
        />
        {/* Estilos para o efeito de gradiente em texto */}
        <style dangerouslySetInnerHTML={{ __html: `
          .bg-clip-text {
            -webkit-background-clip: text !important;
            background-clip: text !important;
          }
          .text-transparent {
            -webkit-text-fill-color: transparent !important;
            color: transparent !important;
          }
        `}} />
        {/* Schema.org para SEO estruturado */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": siteConfig.author,
            "url": siteConfig.url,
            "image": siteConfig.ogImage,
            "jobTitle": "Desenvolvedor Front-End",
            "sameAs": [
              siteConfig.github,
              siteConfig.linkedin
            ]
          }) }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
