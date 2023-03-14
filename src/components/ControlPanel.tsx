import React, { useState } from 'react';
import {
  all_notes,
  scales,
  tunings
} from '../utils/reference_data/control_panel'
import '../styles/control_panel.css';

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
      <h2>Control panel</h2>
      <label htmlFor="note-select">Select a starting note:</label>
      <select
        className="select"
        id="note-select"
        value={selectedNote}
        onChange={handleNoteChange}>

        {all_notes.map((note) => (
          <option key={note} value={note}>
            {note}
          </option>
        ))}
      </select>

      <label htmlFor="scale-select">Select a scale:</label>
      <select
        className="select"
        id="scale-select"
        value={selectedScale}
        onChange={handleScaleChange}>
        {scales.map((scale) => (
          <option key={scale.name} value={scale.value}>
            {scale.name}
          </option>
        ))}
      </select>

      <label htmlFor="select">Select a tuning:</label>
      <select
        className="selector"
        id="tuning-select"
        value={selectedTuning}
        onChange={handleTuningChange}>

        {tunings.map((tuning) => (
          <option key={tuning.name} value={tuning.value}>
            {tuning.name}
          </option>
        ))}
      </select>
    </div>
  )
}


export default ControlPanel;
