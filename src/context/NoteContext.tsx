'use client'
import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { Note } from '@/model/Note';
import { addNote, getNotes } from "@/service/NoteService";

interface NoteContextType {
  notes: Note[];
  addNote: (note: Note) => void;
  getNotes: () => void;
  filterNotes: (query: string) => void;
}

const NoteContext = createContext<NoteContextType | undefined>(undefined);

export const useNoteContext = (): NoteContextType => {
  const context = useContext(NoteContext);
  if (!context) {
    throw new Error("useNoteContext must be used within a NoteProvider");
  }
  return context;
};

export function NoteProvider({ children }: {children: React.ReactNode}) {
  const [notes, setNotes] = useState<Note[]>([]);
  const [filteredNotes, setFilteredNotes] = useState<Note[]>([]);

  const fetchNotes = async () => {
    const notesFromDB = await getNotes();
    setNotes(notesFromDB);
  };


  const addNewNote = async (newNote: Note) => {
    await addNote(newNote);
    fetchNotes();
  };

  const filterNotesByQuery = async (query: string) => {
    const filtered = notes.filter(e => {
        const matcher = e.content.toLowerCase().includes(query) ||
        e.title.toLowerCase().includes(query) || e.description.toLowerCase().includes(query);
        return matcher
    })
    setFilteredNotes(filtered);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const value = useMemo(
    () => ({
      notes: filteredNotes.length > 0 ? filteredNotes : notes,
      addNote: addNewNote,
      getNotes: fetchNotes,
      filterNotes: filterNotesByQuery,
    }),
    [notes, filteredNotes]
  );

  return <NoteContext.Provider value={value}>{children}</NoteContext.Provider>;
};
