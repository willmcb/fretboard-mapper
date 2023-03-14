import Nut from './Nut';
import Fret from './Fret';
import { NoteProps } from './Note';
import calculateFretboard from '../utils/fretboardUtils'
import { Degree } from '../utils/reference_data/app'
import '../styles/board.css';


export interface BoardProps {
  fretboard: string[][],
  startingNote: string,
  scaleFormula: boolean[],
  degree: Degree[]
}

function Board({fretboard, startingNote, scaleFormula, degree}:BoardProps): JSX.Element {

    const currentFretboardData = calculateFretboard(
      fretboard,
      startingNote,
      scaleFormula,
      degree
    );

    return (
      <div className="board">
        {currentFretboardData.map((notes:NoteProps[], index) => [
            <Fret key={`fret-${index}`} notes={notes} />,
            index === 0 && <Nut key={`nut-${index}`} />
        ])}
      </div>
    );

}

export default Board;
