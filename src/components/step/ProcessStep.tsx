import { Edit, LockOpen, Person } from "@mui/icons-material";

export function ProcessStep() {
    return (
        <div className="flex flex-col items-center py-10 mb-32">
            <h3 className="text-sm uppercase tracking-wider text-[--text-secundary]">Passo a Passo</h3>
            <h2 className="text-3xl font-bold mb-8">Veja Como é Facil Usar</h2>
            <div className="flex items-center space-x-6">
                <div className="flex flex-col items-center text-center">
                    <div className="bg-[--color-primary] p-4 rounded-full">
                        <Person />
                    </div>
                    <h4 className="font-semibold mt-4">Cadastre-se</h4>
                    <p className="text-[--text-secundary] font-semibold">Crie uma conta gratuita</p>
                </div>
                <div className="flex items-center">
                    <div className="w-10 h-1 bg-[--color-primary]"></div>
                    <div className="w-2 h-2 bg-[--color-primary] rounded-full mx-1"></div>
                    <div className="w-10 h-1 bg-[--color-primary]"></div>
                </div>
                <div className="flex flex-col items-center text-center">
                    <div className="bg-[--color-primary] p-4 rounded-full">
                        <Edit />
                    </div>
                    <h4 className="font-semibold mt-4">Crie Anotações</h4>
                    <p className="text-[--text-secundary] font-semibold">Crie suas anotações de forma simples</p>
                </div>
                <div className="flex items-center">
                    <div className="w-10 h-1 bg-[--color-primary]"></div>
                    <div className="w-2 h-2 bg-[--color-primary] rounded-full mx-1"></div>
                    <div className="w-10 h-1 bg-[--color-primary]"></div>
                </div>
                <div className="flex flex-col items-center text-center">
                    <div className="bg-[--color-primary] p-4 rounded-full">
                        <LockOpen />
                    </div>
                    <h4 className="font-semibold mt-4">Acessivel</h4>
                    <p className="text-[--text-secundary] font-semibold">Acesse de 24h por dia</p>
                </div>
            </div>
      </div>
    )
}