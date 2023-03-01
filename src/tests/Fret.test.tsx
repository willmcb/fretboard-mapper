import { render, screen } from '@testing-library/react';
import Fret from '../components/Fret';
import { NoteProps } from '../components/Note';

const notePropsArray: NoteProps[] = [
  {
    name: "E",
    degree: 0
  },
  {
    name: "A",
    degree: 1
  },
  {
    name: "D",
    degree: 2
  },
  {
    name: "G",
    degree: 3
  },
  {
    name: "B",
    degree: 4
  },
  {
    name: "E",
    degree: 5
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

