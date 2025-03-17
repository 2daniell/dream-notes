import { Bolt } from "@mui/icons-material";
import Link from "next/link";

export function HeroSection() {
    return (
        <div className="flex gap-3 flex-col items-center justify-center min-h-[90vh]">
            <div className="flex justify-center items-center gap-4 font-bold">
                <Bolt className="text-[--color-primary]" fontSize="large" />
                <span className="tracking-[4px]">ELEVANDO SUAS ANOTAÇÕES</span>
            </div>
            <div className="flex flex-col gap-4 text-center">
                <div className="text-6xl">
                    <h1>A Forma Mais Fácil de Criar</h1>
                    <h1 className="text-[--color-primary] -skew-x-12 font-bold">Anotações!</h1>
                </div>
                <div>
                <p className="text-[--text-secundary] font-semibold">
                    Nunca mais perca um insight importante, deixe tudo salvo <br /> e bem estruturado em um só lugar. <br />
                    Transforme seus pensamentos em ação com <strong>facilidade e eficiência</strong>!
                </p>
                </div>
                <div className="flex items-center justify-center">
                    <div>
                        <Link href={"/app"} className="bg-[--color-primary] text-white font-semibold px-6 py-3 rounded-md">
                            Criar nova anotação
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}