import Nut from './Nut';
import Fret from './Fret';
import { NoteProps } from './Note';
import calculateFretboard from '../utils/fretboardUtils'

export interface BoardProps {
  fretboard: string[][],
  startingNote: string,
  scaleFormula: boolean[]
}

function Board({fretboard, startingNote, scaleFormula}:BoardProps): JSX.Element {

    const currentFretboardData = calculateFretboard(fretboard, startingNote, scaleFormula);

    return (
      <div className="board">
        <Nut/>
        {currentFretboardData.map((notes:NoteProps[], index) => (
          <Fret key={`fret-${index}`} notes={notes} />
        ))}
      </div>
    );
}

export default Board;
