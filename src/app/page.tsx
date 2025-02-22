import { Header } from "@/components/header/Header";
import { HeroSection } from "@/components/hero/HeroSection";

export default function Home() {

  return (
    <div className="flex flex-col container h-screen mx-auto">
      <Header />
      <HeroSection />
    </div>  
  );
}
