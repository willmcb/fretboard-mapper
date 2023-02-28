import React, { useState } from 'react';

interface ControlPanelProps {
  onNoteChange: (note: string) => void;
  onScaleChange: (scale: string) => void;
}

function ControlPanel({ onNoteChange, onScaleChange }: ControlPanelProps): JSX.Element {
  const [selectedNote, setSelectedNote] = useState('C');
  const [selectedScale, setSelectedScale] = useState('All');

  const all_notes  = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
  const scales = [
    {
      name: 'All notes',
      value: 'all'
    },
    {
      name: 'One note',
      value: 'one_note'
    },
    {
      name: 'Major',
      value: 'major'
    },
    {
      name: 'Minor',
      value: 'minor'
    },
    {
      name: 'Major Pentatonic',
      value: 'major_pent'
    },
    {
      name: 'Minor pentatonic',
      value: 'minor_pent'
    },
    {
      name: 'Major triads',
      value: 'major_triads'
    },
    {
      name: 'Minor triads',
      value: 'minor_triads'
    },
    {
      name: 'Whole tone scale',
      value: 'whole_tone'
    },
    {
      name: 'Ionian',
      value: 'ionian'
    },
    {
      name: 'Dorian',
      value: 'dorian'
    },
    {
      name: 'Phrygian',
      value: 'phrygian'
    },
    {
      name: 'Lydian',
      value: 'lydian'
    },
    {
      name: 'Mixolydian',
      value: 'mixolydian'
    },
    {
      name: 'Aeolian',
      value: 'aeolian'
    },
    {
      name: 'Locrian',
      value: 'locrian'
    }

  ]

  function handleNoteChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const note = event.target.value;
    setSelectedNote(note);
    onNoteChange(note);
  };

  function handleScaleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const scale = event.target.value;
    setSelectedScale(scale);
    onScaleChange(scale);
  };


  return (
    <div className="control-panel">
      <label htmlFor="note-select">Select a starting note:</label>
      <select id="note-select" value={selectedNote} onChange={handleNoteChange}>
        {all_notes.map((note) => (
          <option key={note} value={note}>
            {note}
          </option>
        ))}
      </select>
      <br></br>
      <br></br>
      <label htmlFor="note-select">Select a scale note:</label>
      <select id="note-select" value={selectedScale} onChange={handleScaleChange}>
        {scales.map((scale) => (
          <option key={scale.name} value={scale.value}>
            {scale.name}
          </option>
        ))}
      </select>
    </div>
  )
}


export default ControlPanel;
