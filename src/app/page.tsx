'use client'
import { AdvantageSection } from "@/components/advantage/AdvantageSection";
import { Comparison } from "@/components/comparison/Comparison";
import { Header } from "@/components/header/Header";
import { HeroSection } from "@/components/hero/HeroSection";
import { ProcessStep } from "@/components/step/ProcessStep";

export default function Home() {

  return (
    <div className="flex flex-col container mx-auto">
      <Header />
      <HeroSection />
      <AdvantageSection />
      <Comparison />
      <ProcessStep />
    </div>  
  );
}
