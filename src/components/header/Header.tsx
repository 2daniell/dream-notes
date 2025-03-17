import Link from "next/link";

export function Header() {
    return (
        <header className="flex justify-center md:justify-between items-center py-8">
            <h1 className="text-3xl font-bold -skew-x-12 cursor-pointer">
                <span>Dream</span>
                <span className="text-[--color-primary]">Notes</span>
            </h1>
            <nav className="hidden md:flex justify-center items-center gap-8 text-[--text-secundary] font-semibold cursor-pointer">
                <span>Vantagens</span>
                <span>Diferenciais</span>
                <span>Como Usar</span>
            </nav>
            <Link
                href={"/app"}
                className="hidden md:block bg-[--color-primary] text-[--text-primary] font-semibold py-2 px-4 rounded">
                Começar Agora
            </Link>
        </header>
    )
}