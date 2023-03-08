import { render, screen } from '@testing-library/react';

import {
  calculateFretboard,
  processGuitarString,
  createNoteObjects,
  reorderByStartingNote,
  removeNotesNotInFormula,
  rotateFretBoard
} from '../utils/fretboardUtils';

import {
  blank,
  root,
  maj_second,
  maj_third,
  per_forth,
  per_fifth,
  maj_sixth,
  maj_seventh,
  degrees,
} from '../utils/reference_data/app';


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

    const expectedOutput =
        [
      [ { name: 'E', degree: maj_third }, { name: 'B', degree: maj_seventh } ],
      [ { name: 'F', degree: per_forth }, { name: 'C', degree: root } ],
      [ { name: '|', degree: blank }, { name: '|', degree: blank } ],
      [ { name: 'G', degree: per_fifth }, { name: 'D', degree: maj_second } ],
      [ { name: '|', degree: blank }, { name: '|', degree: blank } ],
      [ { name: 'A', degree: maj_sixth }, { name: 'E', degree: maj_third } ],
      [ { name: '|', degree: blank }, { name: 'F', degree: per_forth} ],
      [ { name: 'B', degree: maj_seventh }, { name: '|', degree: blank } ],
      [ { name: 'C', degree: root }, { name: 'G', degree: per_fifth } ],
      [ { name: '|', degree: blank }, { name: '|', degree: blank } ],
      [ { name: 'D', degree: maj_second }, { name: 'A', degree: maj_sixth } ],
      [ { name: '|', degree: blank }, { name: '|', degree: blank } ]
    ]

    const degree = degrees['major']

    const result = calculateFretboard(fretboard, startingNote, scaleFormula, degree);

    expect(result).toEqual(expectedOutput);
  });

  test('processes a guitar string correctly', () => {
    // Arrange
    const string = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
    const startingNote = 'C';
    const scaleFormula = [
      true, false, true, false, true, true,
      false, true, false, true, false, true
    ];

    const degree = degrees['major']

    const expectedOutput = [
      {
        name: 'C',
        degree: root
      },
      { name: '|', degree: blank },
      {
        name: 'D',
        degree: maj_second
      },
      { name: '|', degree: blank },
      {
        name: 'E',
        degree: maj_third
      },
      {
        name: 'F',
        degree: per_forth
      },
      { name: '|', degree: blank },
      {
        name: 'G',
        degree: per_fifth
      },
      { name: '|', degree: blank },
      {
        name: 'A',
        degree: maj_sixth
      },
      { name: '|', degree: blank },
      {
        name: 'B',
        degree: maj_seventh
      }
    ]

    const result = processGuitarString(string, startingNote, scaleFormula, degree);

    expect(result).toEqual(expectedOutput);
  });

  test('.createNoteObjects creates an array of note objects', () => {
    const inputArray = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
    const expectedOutput = [
      {
        name: 'C',
        degree: root
      },
      { name: 'D', degree: blank },
      {
        name: 'E',
        degree: maj_second
      },
      { name: 'F', degree: blank },
      {
        name: 'G',
        degree: maj_third
      },
      {
        name: 'A',
        degree: per_forth
      },
      { name: 'B', degree: blank }
    ]

    const degree = degrees['major']

    const actualOutput = createNoteObjects(inputArray, degree);

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
