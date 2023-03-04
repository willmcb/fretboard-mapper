import './styles/App.css';
import Board from './components/Board';
import ControlPanel from './components/ControlPanel';
import { useState } from 'react';
import {
  startingNote,
  scales,
  tunings,
  ScaleMap,
  TuningMap
} from './utils/reference_data/app';

function App() {
  const [currentNote, setCurrentNote] = useState(startingNote);
  const [currentScale, setCurrentScale] = useState(scales['major']);
  const [currentTuning, setCurrentTuning] = useState(tunings['standard_tuning']);

  function handleNoteChange(note: string) {
    setCurrentNote(note);
  }

  function handleScaleChange(scale: string) {
    const selectedScale = scales[scale as keyof typeof scales];
    setCurrentScale(selectedScale);
  }

  function handleTuningChange(tuning: string) {
    const selectedTuning = tunings[tuning as keyof typeof tunings];
    setCurrentTuning(selectedTuning);
  }

  return (
    <div className="App">
      <h2>Control Panel</h2>
      <ControlPanel
        onNoteChange={handleNoteChange}
        onScaleChange={handleScaleChange}
        onTuningChange={handleTuningChange}
      />
      <Board
        fretboard={currentTuning}
        startingNote={currentNote}
        scaleFormula={currentScale}
      />
    </div>
  );
}

export default App;
