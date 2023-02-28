import './styles/App.css';
import Board from './components/Board';
import ControlPanel from './components/ControlPanel';
import { useState } from 'react';

function App() {
  const [currentNote, setCurrentNote] = useState(startingNote);
  const [currentScale, setCurrentScale] = useState(scales['all']);

  function handleNoteChange(note: string) {
    setCurrentNote(note);
  }

  function handleScaleChange(scale: string) {
    const selectedScale = scales[scale as keyof typeof scales];
    setCurrentScale(selectedScale);
  }

  return (
    <div className="App">
      <h2>Control Panel</h2>
      <ControlPanel
        onNoteChange={handleNoteChange}
        onScaleChange={handleScaleChange}
      />
      <Board
        fretboard={standardTuning}
        startingNote={currentNote}
        scaleFormula={currentScale}
      />
    </div>
  );
}


const startingNote:string = 'C';

interface ScaleMap {
  [key: string]: boolean[];
}

const scales: ScaleMap = {
// for reference  'C', 'C#',  'D',   'D#',  'E',   'F',   'F#',  'G',  'G#',  'A',   'A#',  'B'
  all:          [true, true,  true,  true,  true,  true,  true,  true,  true,  true,  true,  true],
  one_note:     [true, false, false, false, false, false, false, false, false, false, false, false],
  major:        [true, false, true,  false, true,  true,  false, true,  false, true,  false, true],
  minor:        [true, false, true,  true,  false, true,  false, true,  true,  false, true,  false],
  minor_pent:   [true, false, false, true,  false, true,  false, true,  false, false, true,  false],
  major_pent:   [true, false, true,  false, true,  false, false, true,  false, true,  false, true],
  major_triads: [true, false, false, false, true,  false, false, true,  false, false, false, false],
  minor_triads: [true, false, false, true,  false, false, false, true,  false, false, false, false],
  whole_tone:   [true, false, true,  false, true,  false, true,  false, true,  false, true,  false],
  ionian:       [true, false, true,  false, true,  true,  false, true,  false, true,  false, true],
  dorian:       [true, false, true,  true,  false, true,  false, true,  false, true,  true,  false],
  phrygian:     [true, true,  false, true,  false, true,  false, true,  true,  false, true,  false],
  lydian:       [true, false, true,  false, true,  false, true,  true,  false, true,  false, true],
  mixolydian:   [true, false, true,  false, true,  true,  false, true,  false, true,  true,  false],
  aeolian:      [true, false, true,  true,  false, true,  false, true,  true,  false, true,  false],
  locrian:      [true, true,  false, true,  false, true,  true,  false, true,  false, true,  false]
}

const standardTuning: string[][] = [
  ['E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#'],
  ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'],
  ['D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#'],
  ['G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#'],
  ['B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#'],
  ['E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#'],
];

const dropDTuning: string[][]= [
  ['D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#'],
  ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'],
  ['F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E'],
  ['D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#'],
  ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'],
  ['D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#'],
];

const dadgadTuning: string[][] = [
  ['D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#'],
  ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'],
  ['D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#'],
  ['G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#'],
  ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'],
  ['D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#'],
];


export default App;
