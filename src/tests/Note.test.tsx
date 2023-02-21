import React from 'react';
import { render, screen } from '@testing-library/react';
import Note from '../components/Note';
import { debug } from 'console';

test('When visible renders an note with a note value', () => {
  render(<Note noteName={"Eb"} visible={true} active={false}/>);
  const element = screen.getByText(/Eb/i);
  expect(element).toBeInTheDocument();
});

test('When invisible it does not render a note with a note value', () => {
  render(<Note noteName={"Eb"} visible={false} active={false}/>);
  const element = screen.queryByTestId('note-elem');
  expect(element).toHaveTextContent('');
});

test('When active it does have the ".active-note" class', () => {
  render(<Note noteName={"Eb"} visible={true} active={true}/>);
  const element = screen.queryByTestId('note-elem');
  expect(element).toHaveClass('active-note');
});

test('When in-active it does not have the ".active-note" class', () => {
  render(<Note noteName={"Eb"} visible={true} active={false}/>);
  const element = screen.queryByTestId('note-elem');
  expect(element).not.toHaveClass('active-note');
});
