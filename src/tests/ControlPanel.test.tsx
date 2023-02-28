import { render, fireEvent } from '@testing-library/react';
import ControlPanel from '../components/ControlPanel';

const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

test('ControlPanel should render the select element with options', () => {
  const { getByLabelText } = render(<ControlPanel onNoteChange={() => {}} />);
  const selectElement = getByLabelText(/select a starting note/i);

  expect(selectElement).toBeInTheDocument();
  expect(selectElement).toHaveAttribute('id', 'note-select');
  expect(selectElement).toHaveValue('C');
  expect(selectElement.children).toHaveLength(12);

  notes.forEach((note, index) => {
    expect(selectElement.children[index]).toHaveTextContent(note);
  });
});

test('ControlPanel should call the onStartingNoteChange prop with the new note value', () => {
  const onStartingNoteChangeMock = jest.fn();
  const { getByLabelText } = render(<ControlPanel onNoteChange={onNoteChangeMock} />);
  const selectElement = getByLabelText(/select a starting note/i);

  fireEvent.change(selectElement, { target: { value: 'D' } });

  expect(onStartingNoteChangeMock).toHaveBeenCalledTimes(1);
  expect(onStartingNoteChangeMock).toHaveBeenCalledWith('D');
});
