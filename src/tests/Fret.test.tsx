import { render, screen } from '@testing-library/react';
import Fret from '../components/Fret';
import { NoteProps } from '../components/Note';

const notePropsArray: NoteProps[] = [
  {
    name: "E",
  },
  {
    name: "A",
  },
  {
    name: "D",
  },
  {
    name: "G",
  },
  {
    name: "B",
  },
  {
    name: "E",
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

