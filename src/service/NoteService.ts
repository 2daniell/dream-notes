import { Note } from '@/model/Note';
import supabase from "../lib/SupabaseClient";

export const getNotes = async (): Promise<Note[]> => {
  const { data, error } = await supabase.from('notes').select('*');
  
  if (error) {
    console.error("Erro ao pegar as notas:", error.message);
    return [];
  }

  return data as Note[];
};


export const addNote = async (note: Note): Promise<void> => {
  const { error } = await supabase.from('notes').insert([note]);
  
  if (error) {
    console.error("Erro ao adicionar a nota:", error.message);
  }
};
