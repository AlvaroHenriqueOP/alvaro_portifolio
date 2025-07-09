import Image from 'next/image';
import Navbar from "../components/Navbar";
import ClientWrapper from "../components/ClientWrapper";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ClientWrapper 
        heroImage={
          <Image
            src="/profile/foto_perfil.jpg"
            alt="Álvaro Henrique"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 18rem, (max-width: 1280px) 24rem, 22rem"
          />
        }
      />
    </main>
  );
}
