import React, { useState } from 'react';

interface ControlPanelProps {
  onNoteChange:   (note: string) => void;
  onScaleChange:  (scale: string) => void;
  onTuningChange: (scale: string) => void;
}

function ControlPanel({ onNoteChange, onScaleChange, onTuningChange}: ControlPanelProps): JSX.Element {
  const [selectedNote, setSelectedNote] = useState('C');
  const [selectedScale, setSelectedScale] = useState('All');
  const [selectedTuning, setSelectedTuning] = useState('standard_tuning');


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

  function handleTuningChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const tuning = event.target.value;
    setSelectedTuning(tuning);
    onTuningChange(tuning);
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

      <label htmlFor="scale-select">Select a scale:</label>
      <select id="scale-select" value={selectedScale} onChange={handleScaleChange}>
        {scales.map((scale) => (
          <option key={scale.name} value={scale.value}>
            {scale.name}
          </option>
        ))}
      </select>

      <br></br>
      <br></br>

      <label htmlFor="tuning-select">Select a tuning:</label>
      <select id="tuning-select" value={selectedTuning} onChange={handleTuningChange}>
        {tunings.map((tuning) => (
          <option key={tuning.name} value={tuning.value}>
            {tuning.name}
          </option>
        ))}
      </select>
    </div>
  )
}

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

const tunings = [
  {
    name: 'Standard tuning',
    value: 'standard_tuning'
  },
  {
    name: 'DADGAD Tuning',
    value: 'dadgad_tuning'
  },
  {
    name: 'Drop D Tuning',
    value: 'drop_d_tuning'
  }
]

export default ControlPanel;
