import './styles/App.css';
import Board from './components/Board';

const testMajor = [true, false, true, false, true, true, false, true, false, true, false, true];

const testFretboard: string[][] = [
  ['E', 'F', 'F#/b', 'G', 'G#/b', 'A', 'A#/b', 'B', 'C', 'C#/b', 'D', 'D#/b'],
  ['A', 'A#/b', 'B', 'C', 'C#/b', 'D', 'D#/b', 'E', 'F', 'F#/b', 'G', 'G#/b'],
  ['D', 'D#/b', 'E', 'F', 'F#/b', 'G', 'G#/b', 'A', 'A#/b', 'B', 'C', 'C#/b'],
  ['G', 'G#/b', 'A', 'A#/b', 'B', 'C', 'C#/b', 'D', 'D#/b', 'E', 'F', 'F#/b'],
  ['B', 'C', 'C#/b', 'D', 'D#/b', 'E', 'F', 'F#/b', 'G', 'G#/b', 'A', 'A#/b'],
  ['E', 'F', 'F#/b', 'G', 'G#/b', 'A', 'A#/b', 'B', 'C', 'C#/b', 'D', 'D#/b'],
];

const startingNote:string = 'C';

function App() {
  return (
    <div className="App">
      <Board fretboard={testFretboard} startingNote={startingNote} scaleFormula={testMajor} />);
    </div>
  );
}

export default App;
