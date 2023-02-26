import { NoteProps } from '../components/Note';

function calculateFretboard(fretboard:string[][], startingNote: string, scaleFormula: boolean[]): NoteProps[][] {
  const scale: boolean[] = [...scaleFormula].flatMap(() => scaleFormula).slice(0, 12);

  const processedBoard = fretboard.map((string) => processGuitarString(string, startingNote, scale)).reverse();
  const rotatedFretboard = rotateFretBoard(processedBoard);
  const withNoteObjs     = addNoteObjects(rotatedFretboard);

  return withNoteObjs;
}

function processGuitarString(string: string[], startingNote: string, scale:boolean[]) {
  const startIndex = string.indexOf(startingNote);

  string = reorderByStartingNote(startIndex, string);
  string = removeNotesNotInFormula(string, scale);

  let frontPart = string.slice(string.length - startIndex);
  let backPart  = string.slice(0, string.length - startIndex);

  return frontPart.concat(backPart);
};

function reorderByStartingNote(startIndex:number, tempString:any[]) {
  if (startIndex !== 0) {
    return tempString.slice(startIndex).concat(tempString.slice(0, startIndex));
  } else {
    return tempString
  }
}

function removeNotesNotInFormula(tempString:any[], scale:boolean[]) {
  const zipped = tempString.map((note, index) => [note, scale[index]]);
  return zipped.map((pair) => (pair[1] ? pair[0] : '-'));
}

function rotateFretBoard<T>(board: T[][]): T[][] {
  const numRows = board.length;
  const numCols = board[0].length;
  const result: T[][] = [];

  for (let i = 0; i < numCols; i++) {
    result[i] = [];
    for (let j = 0; j < numRows; j++) {
      result[i][j] = board[j][i];
    }
  }

  return result;
}

function addNoteObjects(fretBoard: string[][]): NoteProps[][] {
  return fretBoard.map((string) => {
    return string.map((note) => {
      return { name: note };
    });
  });
}
export default calculateFretboard