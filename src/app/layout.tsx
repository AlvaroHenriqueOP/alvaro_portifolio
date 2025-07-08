import type { Metadata } from "next";
import { Poppins, Montserrat } from 'next/font/google';
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
    icon: "/icon.png",
  },
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
        {children}
      </body>
    </html>
  );
}
