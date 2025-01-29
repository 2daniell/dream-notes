import { memoryState } from "../hooks/state";
import { NoteManager } from "../manager/NotesManager";

const [typedText, setTypedText] = memoryState("");
const [showConfirm, setShowConfirm] = memoryState(false);
const [showSaveModal, setShowSaveModal] = memoryState(false);
const [noteTitle, setNoteTitle] = memoryState("");
const [noteDescription, setNoteDescription] = memoryState("");

export function Editor({ closeFunc, note }) {
    
    if (note && !typedText()) {
        setTypedText(note.content);
        setNoteTitle(note.title);
        setNoteDescription(note.description);
    }

    const handleClose = () => {
        if (!note && typedText().trim()) {
            console.log("TfsdfdfA")
            setShowConfirm(true);
            return
        }
        closeFunc();
    };

    const closeAndReset = () => {
        setTypedText("");
        setNoteTitle("");
        setNoteDescription("");
        closeFunc();
    };

    const handleSave = () => {
        setShowSaveModal(true);
    };

    const confirmSave = () => {
        const newNote = {
            id: Date.now(),
            title: noteTitle(),
            description: noteDescription(),
            content: typedText(),
            createdAt: new Date().toISOString()
        };
        NoteManager.addNote(newNote);
        setShowSaveModal(false);
        closeAndReset();
    };

    return (
        <div className="fixed inset-0 backdrop-blur-sm z-30 flex items-center justify-center h-full">
            <div className="min-w-[80%] min-h-[80%] rounded-lg bg-[#2c2c52] text-white shadow-xl flex flex-col overflow-hidden">
                <div className="relative flex items-center justify-center bg-[#3d3d69] px-6 py-3">
                    <div className="absolute left-[10px] flex gap-2">
                        <div 
                            className="w-3 h-3 rounded-full bg-red-500 cursor-pointer hover:bg-red-600"
                            onClick={() => handleClose()}
                        ></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div 
                            className="w-3 h-3 rounded-full bg-green-500 cursor-pointer hover:bg-green-600"
                            onClick={() => {
                                if (!note) handleSave();
                            }}
                        ></div>
                    </div>
                    <h1 className="text-lg font-semibold">{note ? "Visualizar Nota" : "Bloco de Notas"}</h1>
                </div>
                
                <textarea
                    className="flex-1 bg-[#2c2c52] text-[#d4d4d4] p-6 text-sm font-mono resize-none focus:outline-none focus:ring-0 caret-white overflow-auto"
                    placeholder="// Escreva aqui..."
                    value={typedText()}
                    onChange={(e) => setTypedText(e.target.value)}
                    readOnly={!!note} 
                    style={{ lineHeight: "1.5", tabSize: 4 }}
                ></textarea>
            </div>

            {showConfirm() && (
                <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm">
                    <div className="bg-[#3d3d69] text-white p-6 rounded-lg shadow-lg">
                        <p className="mb-4">Tem certeza que deseja fechar? Suas alterações serão perdidas.</p>
                        <div className="flex justify-center gap-8 mt-6">
                            <button className="px-4 py-2 bg-gray-500 rounded hover:bg-gray-600 transition-colors" onClick={() => setShowConfirm(false)}>Cancelar</button>
                            <button className="px-4 py-2 bg-red-500 rounded hover:bg-red-600 transition-colors" onClick={() => { setShowConfirm(false); closeAndReset(); }}>Fechar</button>
                        </div>
                    </div>
                </div>
            )}

            {showSaveModal() && !note && (
                <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm">
                    <div className="bg-[#3d3d69] text-white p-6 rounded-lg shadow-lg w-[400px]">
                        <h2 className="text-lg font-semibold mb-4">Salvar Nota</h2>
                        <input
                            className="w-full p-2 mb-3 rounded bg-[#2c2c52] text-white border border-gray-500 focus:outline-none"
                            placeholder="Título"
                            value={noteTitle()}
                            onChange={(e) => setNoteTitle(e.target.value)}
                        />
                        <input
                            className="w-full p-2 mb-3 rounded bg-[#2c2c52] text-white border border-gray-500 focus:outline-none"
                            placeholder="Descrição"
                            value={noteDescription()}
                            onChange={(e) => setNoteDescription(e.target.value)}
                        />
                        <div className="flex justify-center gap-6 mt-4">
                            <button className="px-4 py-2 bg-gray-500 rounded hover:bg-gray-600 transition-colors" onClick={() => setShowSaveModal(false)}>Cancelar</button>
                            <button className="px-4 py-2 bg-green-500 rounded hover:bg-green-600 transition-colors" onClick={confirmSave}>Salvar</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
