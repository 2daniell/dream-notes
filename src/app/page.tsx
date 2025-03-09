'use client'
import { Comparison } from "@/components/comparison/Comparison";
import { Header } from "@/components/header/Header";
import { HeroSection } from "@/components/hero/HeroSection";
import { ProcessStep } from "@/components/step/ProcessStep";
import { Check } from "@mui/icons-material";

export default function Home() {

  return (
    <div className="flex flex-col container mx-auto">
      <Header />
      <HeroSection />

      <div className="flex flex-col items-center justify-center pb-10">
        <h3 className="text-sm uppercase tracking-wider text-[--text-secundary] text-center">Vantagens</h3>
        <h2 className="text-3xl text-center font-bold mb-8">Nossos Numeros Satisfatórios</h2>
        <div className="flex md:flex-row flex-col items-center md:space-x-8 space-y-6 md:space-y-0">
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <Check className="bg-[--color-primary] rounded-full" fontSize="large"/>
            <h2 className="font-bold text-4xl">+90%</h2>
            <p className="text-[--text-secundary] font-semibold">Taxa de satisfação dos usuários <br/> que encontraram praticidade ao <br /> criar suas anotações</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <Check className="bg-[--color-primary] rounded-full" fontSize="large"/>
            <h2 className="font-bold text-4xl">+50%</h2>
            <p className="text-[--text-secundary] font-semibold">Usuários que acessam suas anotações <br /> regularmente e com frequência</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <Check className="bg-[--color-primary] rounded-full" fontSize="large"/>
            <h2 className="font-bold text-4xl">+80%</h2>
            <p className="text-[--text-secundary] font-semibold">Taxa de aumento na produtividade <br /> dos usuários ao organizar suas tarefas <br /> e anotações na aplicação</p>
          </div>
        </div>
      </div>

      <Comparison />
      <ProcessStep />
    </div>  
  );
}
