import { render, screen } from '@testing-library/react';
import Board from '../components/Board';
import calculateFretboard from '../utils/fretboardUtils'
import { degrees } from '../utils/reference_data/app';

const degree = degrees['major'];

const testMajor = [true, false, true, false, true, true, false, true, false, true, false, true];

const testFretboard: string[][] = [
  ['E', 'F', 'F#/b', 'G', 'G#/b', 'A', 'A#/b', 'B', 'C', 'C#/b', 'D', 'D#/b'],
  ['A', 'A#/b', 'B', 'C', 'C#/b', 'D', 'D#/b', 'E', 'F', 'F#/b', 'G', 'G#/b']
];

const shouldContain: string[] = ['E', 'F#/b', 'G',  'A', 'B', 'C', 'D']
const shouldNotContain: string[] = ['F', 'G#/b',  'A#/b',  'C#/b',  'D#/b']

const startingNote:string = 'G'

test('Board should have 12 frets', () => {
  const {container} = render(
    <Board fretboard={testFretboard}
           startingNote={startingNote}
           scaleFormula={testMajor}
           degree={degree} />
  );

  expect(container.getElementsByClassName('fret').length).toBe(12);
});

test('Board should have the correct notes', () => {
  render(
    <Board fretboard={testFretboard}
           startingNote={startingNote}
           scaleFormula={testMajor}
           degree={degree} />
  );

  const noteElements = screen.getAllByTestId('note-elem');
  const noteTexts = noteElements.map(el => el.textContent);

  expect(noteTexts).toEqual(expect.arrayContaining(shouldContain));
  expect(noteTexts).toEqual(expect.not.arrayContaining(shouldNotContain));
});



