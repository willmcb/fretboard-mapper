import Nut from './Nut';
import Fret from './Fret';
import { NoteProps } from './Note';
import calculateFretboard from '../utils/fretboardUtils'

function Board(): JSX.Element {

    const currentFretboardData = calculateFretboard(standardTuning, 'A', minor_pent);

    return (
      <div className="board">
        <Nut/>
        {currentFretboardData.map((notes:NoteProps[], _) => (
          <Fret notes={notes} />
        ))}
      </div>
    );
}

const major = [true, false, true, false, true, true, false, true, false, true, false, true];
const all = [true, true, true, true, true, true, true, true, true, true, true, true];
const minor_pent = [true, false, false, true, false, true, false, true, false, false, true, false];

const standardTuning: string[][] = [
  ['E', 'F', 'F#/b', 'G', 'G#/b', 'A', 'A#/b', 'B', 'C', 'C#/b', 'D', 'D#/b'],
  ['A', 'A#/b', 'B', 'C', 'C#/b', 'D', 'D#/b', 'E', 'F', 'F#/b', 'G', 'G#/b'],
  ['D', 'D#/b', 'E', 'F', 'F#/b', 'G', 'G#/b', 'A', 'A#/b', 'B', 'C', 'C#/b'],
  ['G', 'G#/b', 'A', 'A#/b', 'B', 'C', 'C#/b', 'D', 'D#/b', 'E', 'F', 'F#/b'],
  ['B', 'C', 'C#/b', 'D', 'D#/b', 'E', 'F', 'F#/b', 'G', 'G#/b', 'A', 'A#/b'],
  ['E', 'F', 'F#/b', 'G', 'G#/b', 'A', 'A#/b', 'B', 'C', 'C#/b', 'D', 'D#/b'],
];

const dropDTuning: string[][]= [
  ['D', 'D#/b', 'E', 'F', 'F#/b', 'G', 'G#/b', 'A', 'A#/b', 'B', 'C', 'C#/b'],
  ['A', 'A#/b', 'B', 'C', 'C#/b', 'D', 'D#/b', 'E', 'F', 'F#/b', 'G', 'G#/b'],
  ['F', 'F#/b', 'G', 'G#/b', 'A', 'A#/b', 'B', 'C', 'C#/b', 'D', 'D#/b', 'E'],
  ['D', 'D#/b', 'E', 'F', 'F#/b', 'G', 'G#/b', 'A', 'A#/b', 'B', 'C', 'C#/b'],
  ['A', 'A#/b', 'B', 'C', 'C#/b', 'D', 'D#/b', 'E', 'F', 'F#/b', 'G', 'G#/b'],
  ['D', 'D#/b', 'E', 'F', 'F#/b', 'G', 'G#/b', 'A', 'A#/b', 'B', 'C', 'C#/b'],
];

const dadgadTuning: string[][] = [
  ['D', 'D#/b', 'E', 'F', 'F#/b', 'G', 'G#/b', 'A', 'A#/b', 'B', 'C', 'C#/b'],
  ['A', 'A#/b', 'B', 'C', 'C#/b', 'D', 'D#/b', 'E', 'F', 'F#/b', 'G', 'G#/b'],
  ['D', 'D#/b', 'E', 'F', 'F#/b', 'G', 'G#/b', 'A', 'A#/b', 'B', 'C', 'C#/b'],
  ['G', 'G#/b', 'A', 'A#/b', 'B', 'C', 'C#/b', 'D', 'D#/b', 'E', 'F', 'F#/b'],
  ['A', 'A#/b', 'B', 'C', 'C#/b', 'D', 'D#/b', 'E', 'F', 'F#/b', 'G', 'G#/b'],
  ['D', 'D#/b', 'E', 'F', 'F#/b', 'G', 'G#/b', 'A', 'A#/b', 'B', 'C', 'C#/b'],
];


export default Board;
