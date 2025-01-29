import { Button } from "../components/button";
import { Editor } from "../components/editor";
import { Input } from "../components/input";
import { RenderDOM } from "../hooks/render";
import { memoryState } from "../hooks/state";
import { NoteManager } from "../manager/NotesManager";

const [isOpen, setIsOpen] = memoryState(false);
const [searchQuery, setSearchQuery] = memoryState("");
const [selectedNote, setSelectedNote] = memoryState(null);

export function HomePage() {
    
    const [notes] = memoryState(NoteManager.getNotes());

    const filteredNotes = notes().filter(note => 
        note.title.toLowerCase().includes(searchQuery().toLowerCase()) || 
        note.content.toLowerCase().includes(searchQuery().toLowerCase())
    );
    
    return (
        <div className="relative h-full w-full text-white">
            {isOpen() && (
                <Editor note={selectedNote()} closeFunc={() => {
                    setIsOpen(false);
                    setSelectedNote(null);
                }} />
            )}

            <div className="flex flex-col items-center justify-start h-full p-8 space-y-8">
                <div className="w-full max-w-lg mb-8">
                    <Input 
                        placeholder="Pesquisar notas..."
                        value={searchQuery()}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full p-4 text-[#d4d4d4] bg-[#2c2c52] border border-transparent rounded-lg text-sm font-mono focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                    {filteredNotes.length === 0 ? (
                        <div className="text-center text-lg text-gray-400 col-span-full">Nenhuma nota encontrada.</div>
                    ) : (
                        filteredNotes.map((note) => (
                            <div 
                                key={note.id} 
                                className="bg-[#2c2c52] hover:bg-[#3d3d69] rounded-lg shadow-xl overflow-hidden transform transition-all hover:scale-105 cursor-pointer"
                                onClick={() => {
                                    setSelectedNote(note);
                                    setIsOpen(true);
                                }}
                            >
                                <div className="p-6">
                                    <h3 className="text-2xl font-semibold mb-2 text-gray-200">{note.title}</h3>
                                    <p className="text-sm text-gray-400">{note.description.slice(0, 100)}...</p>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>

            <div className="absolute bottom-8 right-8">
                <Button
                    onClick={() => {
                        setIsOpen(true);
                    }}
                    className="px-6 py-4 font-bold text-3xl text-white rounded-full bg-[#2a2a50] hover:bg-[#30305e] transition-colors duration-300 shadow-lg"
                >
                    +
                </Button>
            </div>
        </div>
    );
}
