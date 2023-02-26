import React, { useState } from 'react';

interface ControlPanelProps {
  onStartingNoteChange: (note: string) => void;
}

function ControlPanel({ onStartingNoteChange }: ControlPanelProps): JSX.Element {
  const [selectedNote, setSelectedNote] = useState('C');

  const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

  function handleNoteChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const note = event.target.value;
    setSelectedNote(note);
    onStartingNoteChange(note);
  };

  return (
    <div className="control-panel">
      <label htmlFor="note-select">Select a starting note:</label>
      <select id="note-select" value={selectedNote} onChange={handleNoteChange}>
        {notes.map((note) => (
          <option key={note} value={note}>
            {note}
          </option>
        ))}
      </select>
    </div>
  )
}


export default ControlPanel;
