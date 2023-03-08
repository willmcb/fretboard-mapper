import { NoteProps } from '../components/Note';
import { degrees } from './reference_data/app';
import { Degree } from './reference_data/app';
import { blank } from './reference_data/app';

function calculateFretboard(fretboard:string[][], startingNote: string, scaleFormula: boolean[], degree: Degree[]): NoteProps[][] {
  const scale:boolean[] = [...scaleFormula].flatMap(() => scaleFormula).slice(0, 12);

  const processedBoard   = fretboard.map((string) => processGuitarString(string, startingNote, scale, degree));
  const rotatedFretboard = rotateFretBoard(processedBoard);

  return rotatedFretboard;
}

function processGuitarString(string: string[], startingNote: string, scale:boolean[], degree: Degree[]) {
  const startIndex = string.indexOf(startingNote);

  string = reorderByStartingNote(startIndex, string);
  string = removeNotesNotInFormula(string, scale);

  let noteObjects = createNoteObjects(string, degree);

  let frontPart = noteObjects.slice(string.length - startIndex);
  let backPart  = noteObjects.slice(0, string.length - startIndex);

  return frontPart.concat(backPart);
};

// add more info to notes in this function
function createNoteObjects(string: string[], degree: Degree[]) {
  return string.map((note, index) => {
    if (note == '|') {
      return {
        name: note,
        degree: blank
      }
    } else {
      return {
        name: note,
        degree: degree[index]
      }
    }
  });
}

function reorderByStartingNote(startIndex:number, tempString:any[]) {
  if (startIndex !== 0) {
    return tempString.slice(startIndex).concat(tempString.slice(0, startIndex));
  } else {
    return tempString
  }
}

function removeNotesNotInFormula(tempString:any[], scale:boolean[]) {
  const zipped = tempString.map((note, index) => [note, scale[index]]);
  return zipped.map((pair) => (pair[1] ? pair[0] : '|'));
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

export {
  calculateFretboard,
  processGuitarString,
  createNoteObjects,
  reorderByStartingNote,
  removeNotesNotInFormula,
  rotateFretBoard
}

export default calculateFretboard
