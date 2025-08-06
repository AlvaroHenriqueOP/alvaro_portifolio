import type { Metadata } from "next";
import { Poppins, Montserrat } from 'next/font/google';
import "./globals.css";
import StructuredData from '../components/StructuredData';

const siteConfig = {
  title: "Álvaro Henrique | Desenvolvedor Front-End & Especialista em IA",
  description: "Desenvolvedor front-end especializado em React, Next.js e IA conversacional. Criador de interfaces interativas, chatbots inteligentes e soluções web inovadoras em Salvador, Bahia.",
  url: "https://alvaro-portifolio-ten.vercel.app/",
  author: "Álvaro Henrique",
  github: "https://github.com/AlvaroHenriqueOP",
  linkedin: "https://www.linkedin.com/in/alvaro-henrique-dev/",
  ogImage: "/profile/foto_perfil.jpg",
  email: "alvaro.hop.ah@gmail.com",
  location: "Salvador, Bahia, Brasil",
  skills: ["React", "Next.js", "TypeScript", "Inteligência Artificial", "Chatbots", "UI/UX Design"]
};

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: [
    // Principais competências
    "desenvolvedor front-end", "frontend developer", "desenvolvedor react", "especialista react",
    "desenvolvedor next.js", "typescript developer", "javascript developer",
    // IA e Chatbots
    "especialista em IA", "inteligência artificial", "chatbot developer", "criador de chatbots",
    "automação conversacional", "chatbots inteligentes",
    // UI/UX
    "ui/ux designer", "designer de interfaces", "experiência do usuário", "interfaces interativas",
    // Tecnologias
    "react", "next.js", "typescript", "tailwind css", "framer motion", "node.js",
    // Localização e profissão
    "programador salvador", "desenvolvedor bahia", "freelancer salvador", "tech salvador",
    "portfólio desenvolvedor", "criação de sites", "desenvolvimento web",
    // Serviços
    "desenvolvimento responsivo", "seo otimização", "performance web", "landing pages"
  ],
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
    siteName: "Álvaro Henrique - Desenvolvedor",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.author} - Desenvolvedor Front-End especialista em React, Next.js e IA`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@AlvaroHenriqueOP",
  },
  verification: {
    google: "google-site-verification-code", // Adicionar código real quando configurar
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  manifest: "/manifest.json",
  other: {
    'theme-color': '#0086A8',
  }
};

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${poppins.variable} ${montserrat.variable}`}>
      <body className="antialiased">
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
