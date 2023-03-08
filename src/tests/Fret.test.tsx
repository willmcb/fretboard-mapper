import { render, screen } from '@testing-library/react';
import Fret from '../components/Fret';
import { NoteProps } from '../components/Note';
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

const notePropsArray: NoteProps[] = [
  {
    name: "E",
    degree: maj_third
  },
  {
    name: "A",
    degree: maj_sixth
  },
  {
    name: "D",
    degree: maj_second
  },
  {
    name: "G",
    degree: per_fifth
  },
  {
    name: "B",
    degree: per_forth
  },
  {
    name: "E",
    degree: maj_third
  }
]

test('A fret can renter a list of notes', () => {
  render(<Fret notes={notePropsArray} />);
  const noteElements = screen.getAllByTestId('note-elem');
  expect(noteElements.length).toEqual(notePropsArray.length);
});

test('The frets should have the right values', () => {
  render(<Fret notes={notePropsArray} />);

  const noteElements = screen.getAllByTestId('note-elem');

  noteElements.forEach((note, index) => {
    expect(note).toHaveTextContent(notePropsArray[index].name);
  });
});

