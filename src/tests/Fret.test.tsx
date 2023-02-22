import React from 'react';
import { render, screen } from '@testing-library/react';
import Fret from '../components/Fret';
import { NoteProps } from '../components/Note';
import Note from '../components/Note';

const notePropsArray: NoteProps[] = [
  {
    name: "E",
    active: true,
    visible: true
  },
  {
    name: "A",
    active: true,
    visible: true
  },
  {
    name: "D",
    active: true,
    visible: true
  },
  {
    name: "G",
    active: true,
    visible: true
  },
  {
    name: "B",
    active: true,
    visible: true
  },
  {
    name: "E",
    active: true,
    visible: true
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

