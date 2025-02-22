export function Comparison() {
    return (
        <div className="flex flex-col justify-center items-center py-10 min-h-[80vh]">
            <h3 className="text-sm uppercase tracking-wider text-[--text-secundary] text-center">Diferenciais</h3>
            <h2 className="text-3xl text-center font-bold mb-8">Gerencie Melhor Suas Anotações</h2>
            <div className="flex flex-row max-w-4xl w-full">
                <div className="flex-1 p-6 bg-white rounded-xl">
                    <h3 className="text-[--text-tertiary] text-center text-2xl font-bold mb-2">DreamNotes</h3>
                    <p className="text-[--text-secundary] text-center font-semibold mb-4">Gerenciamento de anotações online</p>
                    <ul className="space-y-2 text-[--text-secundary]">
                    {[
                        "Acesse suas anotações de qualquer lugar.",
                        "Segurança e privacidade.",
                        "Multiplataforma.",
                        "Sem papel, sem bagunça.",
                        "Integrações poderosas."
                    ].map((item, index) => (
                        <li key={index} className="flex items-start">
                        <span className="text-green-500 mr-2">✔</span> {item}
                        </li>
                    ))}
                    </ul>
                </div>
                
                <div className="flex items-center justify-center mx-6">
                    <span className="bg-[--color-primary] px-4 py-2 rounded-full text-lg font-bold">VS</span>
                </div>
                
                <div className="flex-1 p-6 bg-white rounded-xl">
                    <h3 className="text-[--text-tertiary] text-center text-2xl font-bold mb-2">Métodos tradicionais</h3>
                    <p className="text-[--text-secundary] text-center font-semibold mb-4">Perda de tempo e dinheiro</p>
                    <ul className="space-y-2 text-[--text-secundary]">
                    {[
                        "Risco de perder anotações físicas.",
                        "Falta de organização eficiente.",
                        "Sem backup automático.",
                        "Dificuldade em compartilhar.",
                        "Sem sincronização."
                    ].map((item, index) => (
                        <li key={index} className="flex items-start">
                        <span className="text-red-500 mr-2">✘</span> {item}
                        </li>
                    ))}
                    </ul>
                </div>
            </div>
      </div>
    );
  }
  