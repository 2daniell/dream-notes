const STORAGE_KEY = "dream_notes";

export const NoteManager = {

    getNotes: () => {
        const notes = localStorage.getItem(STORAGE_KEY);
        return notes ? JSON.parse(notes) : [];
    },

    addNote: (note) => {
        const notes = NoteManager.getNotes();
        const newNotes = [...notes, note];
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newNotes));
    },

    deleteNote(noteID) {
        const notes = NoteManager.getNotes().filter((note) => note.id !== noteID);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
    }

}