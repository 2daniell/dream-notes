'use client'
import { useState, useEffect } from 'react';
import { Button } from "../button/Button";
import { Input } from "../input/Input";
import { useNoteContext } from "@/context/NoteContext";
import { Note } from "@/model/Note";

export function Editor({ closeFunc, note }) {

  const { addNote } = useNoteContext();
  const [typedText, setTypedText] = useState('');
  const [showConfirm, setShowConfirm] = useState(false);
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [noteTitle, setNoteTitle] = useState('');
  const [noteDescription, setNoteDescription] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (note && !typedText) {
      setTypedText(note.content);
      setNoteTitle(note.title);
      setNoteDescription(note.description);
    }
  }, [note, typedText]);

  const handleClose = () => {
    if (!note && typedText.trim()) {
      setShowConfirm(true);
      return;
    }
    closeFunc();
  };

  const closeAndReset = () => {
    setTypedText('');
    setNoteTitle('');
    setNoteDescription('');
    setErrorMessage(''); 
    closeFunc();
  };

  const handleSave = () => {
    if (validateContent(typedText)) {
      setShowSaveModal(true);
    }
  };

  const validateContent = (content: string) => {
    const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/;
    const urlPattern = /(https?:\/\/[^\s]+)/g;
    const cpfPattern = /\b\d{3}\.\d{3}\.\d{3}-\d{2}\b/;
    if (emailPattern.test(content)) {
      setErrorMessage('Não é permitido adicionar e-mails nas anotações, pois elas são compartilhadas.');
      return false;
    }
    if (urlPattern.test(content)) {
      setErrorMessage('Não é permitido adicionar links nas anotações, pois elas são compartilhadas.');
      return false;
    }
    if (cpfPattern.test(content)) {
      setErrorMessage('Não é permitido adicionar CPF nas anotações, pois elas são compartilhadas.');
      return false;
    }

    setErrorMessage(''); 
    return true;
  };

  const confirmSave = () => {
    const newNote: Note = {
      id: Date.now(),
      title: noteTitle,
      description: noteDescription,
      content: typedText,
      created_at: new Date().toISOString(),
    };
    addNote(newNote);
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
              onClick={handleClose}
            ></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div
              className="w-3 h-3 rounded-full bg-green-500 cursor-pointer hover:bg-green-600"
              onClick={() => !note && handleSave()}
            ></div>
          </div>
          <h1 className="text-lg font-semibold">{note ? 'Visualizar Nota' : 'Bloco de Notas'}</h1>
        </div>

        <textarea
          className="flex-1 bg-[#2c2c52] text-[#d4d4d4] p-6 text-sm font-mono resize-none focus:outline-none focus:ring-0 caret-white overflow-auto"
          placeholder="// Escreva aqui..."
          value={typedText}
          onChange={(e) => setTypedText(e.target.value)}
          readOnly={!!note}
          style={{ lineHeight: '1.5', tabSize: 4 }}
        ></textarea>

        {errorMessage && (
          <div className="text-red-500 text-sm mt-2 px-6">
            {errorMessage}
          </div>
        )}
      </div>

      {showConfirm && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm">
          <div className="bg-[#3d3d69] text-white p-6 rounded-lg shadow-lg">
            <p className="mb-4">Tem certeza que deseja fechar? Suas alterações serão perdidas.</p>
            <div className="flex justify-center gap-8 mt-6">
              <button
                className="px-4 py-2 bg-gray-500 rounded hover:bg-gray-600 transition-colors"
                onClick={() => setShowConfirm(false)}
              >
                Cancelar
              </button>
              <button
                className="px-4 py-2 bg-red-500 rounded hover:bg-red-600 transition-colors"
                onClick={() => {
                  setShowConfirm(false);
                  closeAndReset();
                }}
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}

      {showSaveModal && !note && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm">
          <div className="bg-[#3d3d69] text-white p-6 rounded-lg shadow-lg w-[400px]">
            <h2 className="text-lg font-semibold mb-4">Salvar Nota</h2>
            <Input
              className="w-full p-2 mb-3 rounded bg-[#2c2c52] text-white border border-gray-500 focus:outline-none"
              placeholder="Título"
              value={noteTitle}
              onChange={(e) => setNoteTitle(e.target.value)}
            />
            <Input
              className="w-full p-2 mb-3 rounded bg-[#2c2c52] text-white border border-gray-500 focus:outline-none"
              placeholder="Descrição"
              value={noteDescription}
              onChange={(e) => setNoteDescription(e.target.value)}
            />
            <div className="flex justify-center gap-6 mt-4">
              <Button className="px-4 py-2 bg-gray-500 rounded hover:bg-gray-600" onClick={() => setShowSaveModal(false)}>
                Cancelar
              </Button>
              <Button className="px-4 py-2 bg-green-500 rounded hover:bg-green-600" onClick={confirmSave}>
                Salvar
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
