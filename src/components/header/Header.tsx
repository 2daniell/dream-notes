export function Header() {
    return (
        <header className="flex justify-between items-center py-8">
            <h1 className="text-3xl font-bold -skew-x-12 cursor-pointer">
                <span>Dream</span>
                <span className="text-[--color-primary]">Notes</span>
            </h1>
            <nav className="flex justify-center items-center gap-8 text-[--text-segundary] font-semibold cursor-pointer">
                <span>Diferenciais</span>
                <span>Vantagens</span>
                <span>Como Usar</span>
            </nav>
            <button className="bg-[--color-primary] text-[--text-primary] font-semibold py-2 px-4 rounded">
                Começar Agora
            </button>
        </header>
    )
}