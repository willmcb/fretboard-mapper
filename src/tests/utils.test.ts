import { render, screen } from '@testing-library/react';

import {
  calculateFretboard,
  processGuitarString,
  createNoteObjects,
  reorderByStartingNote,
  removeNotesNotInFormula,
  rotateFretBoard
} from '../utils/fretboardUtils';

describe('Util functions', () => {
  test('.calculateFretboard a fretboard correctly', () => {
    const fretboard = [
      ['E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#'],
      ['B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#']
    ];

    const startingNote = 'C';
    const scaleFormula = [
      true, false, true, false, true, true,
      false, true, false, true, false, true
    ];

    const expectedOutput = [
      [ { name: 'E', degree: 100 }, { name: 'B', degree: 100 } ],
      [ { name: 'F', degree: 100 }, { name: 'C', degree: 1 } ],
      [ { name: '|', degree: 100 }, { name: '|', degree: 100 } ],
      [ { name: 'G', degree: 100 }, { name: 'D', degree: 100 } ],
      [ { name: '|', degree: 100 }, { name: '|', degree: 100 } ],
      [ { name: 'A', degree: 100 }, { name: 'E', degree: 100 } ],
      [ { name: '|', degree: 100 }, { name: 'F', degree: 100 } ],
      [ { name: 'B', degree: 100 }, { name: '|', degree: 100 } ],
      [ { name: 'C', degree: 1 }, { name: 'G', degree: 100 } ],
      [ { name: '|', degree: 100 }, { name: '|', degree: 100 } ],
      [ { name: 'D', degree: 100 }, { name: 'A', degree: 100 } ],
      [ { name: '|', degree: 100 }, { name: '|', degree: 100 } ]
    ]

    const result = calculateFretboard(fretboard, startingNote, scaleFormula);

    expect(result).toEqual(expectedOutput);
  });

  test('processes a guitar string correctly', () => {
    // Arrange
    const string = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
    const startingNote = 'C';
    const scaleFormula = [
      true, false, true, false, true,
      true, false, true, false, true, false, true
    ];

    const expectedOutput = [
      { name: 'C', degree: 1 },
      { name: '|', degree: 100 },
      { name: 'D', degree: 100 },
      { name: '|', degree: 100 },
      { name: 'E', degree: 100 },
      { name: 'F', degree: 100 },
      { name: '|', degree: 100 },
      { name: 'G', degree: 100 },
      { name: '|', degree: 100 },
      { name: 'A', degree: 100 },
      { name: '|', degree: 100 },
      { name: 'B', degree: 100 }
    ]

    const result = processGuitarString(string, startingNote, scaleFormula);

    expect(result).toEqual(expectedOutput);
  });

  test('.createNoteObjects creates an array of note objects', () => {
    const inputArray = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
    const expectedOutput = [
      { name: 'C', degree: 1 },
      { name: 'D', degree: 100 },
      { name: 'E', degree: 100 },
      { name: 'F', degree: 100 },
      { name: 'G', degree: 100 },
      { name: 'A', degree: 100 },
      { name: 'B', degree: 100 }
    ];

    const actualOutput = createNoteObjects(inputArray);

    expect(actualOutput).toEqual(expectedOutput);
  });

  describe('reorderByStartingNote', () => {
    let inputNotes: string[];
    let expectedOutput: string[];

    beforeEach(() => {
      inputNotes = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
      expectedOutput = ['F', 'G', 'A', 'B', 'C', 'D', 'E'];
    });

    test('reorders an array of notes by starting index', () => {
      // Arrange
      const inputIndex = 3;

      // Act
      const actualOutput = reorderByStartingNote(inputIndex, inputNotes);

      // Assert
      expect(actualOutput).toEqual(expectedOutput);
    });

    test('handles zero index', () => {
      // Arrange
      const inputIndex = 0;
      expectedOutput = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];

      // Act
      const actualOutput = reorderByStartingNote(inputIndex, inputNotes);

      // Assert
      expect(actualOutput).toEqual(expectedOutput);
    });
  });

  test('.removesNotesNotInFormula', () => {
    const inputNotes = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
    const inputScale = [true, false, true, false, true, true, false];
    const expectedOutput = ['C', '|', 'E', '|', 'G', 'A', '|'];

    const actualOutput = removeNotesNotInFormula(
      inputNotes, inputScale
    );

    expect(actualOutput).toEqual(expectedOutput);
  })

  test('.rotateFretboard rotates a 2D array correctly', () => {
    let input = [
      [1, 2, 3, 4, 5],
      [1, 2, 3, 4, 5],
      [1, 2, 3, 4, 5]
    ]

    let expectedOutput = [
      [1, 1, 1],
      [2, 2, 2],
      [3, 3, 3],
      [4, 4, 4],
      [5, 5, 5]
    ]

    expect(rotateFretBoard(input)).toEqual(expectedOutput);
  });
});
