import { render, fireEvent, screen } from '@testing-library/react';
import ControlPanel from '../components/ControlPanel';

// TODO: Add tests for each rendered input?
//       Add checks for the drop downs values?

describe('ControlPanel', () => {
  const onNoteChangeMock   = jest.fn();
  const onScaleChangeMock  = jest.fn();
  const onTuningChangeMock = jest.fn();

  const notes: string[]    = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

  beforeEach(() => {
    render(
      <ControlPanel
        onNoteChange={onNoteChangeMock}
        onScaleChange={onScaleChangeMock}
        onTuningChange={onTuningChangeMock}
        />
    );
  });

  it('renders the note select element with options', () => {
    const noteSelect = screen.getByLabelText(/Select a starting note/i);

    expect(noteSelect).toBeInTheDocument();
    expect(noteSelect).toHaveAttribute('id', 'note-select');
    expect(noteSelect).toHaveValue('C');
    expect(noteSelect.children).toHaveLength(12);

    notes.forEach((note, index) => {
      expect(noteSelect.children[index]).toHaveTextContent(note);
    });
  });

  it('calls the onNoteChange prop with the new note value', () => {
    const noteSelect = screen.getByLabelText(/Select a starting note/i);

    fireEvent.change(noteSelect, { target: { value: 'D' } });

    expect(onNoteChangeMock).toHaveBeenCalledTimes(1);
    expect(onNoteChangeMock).toHaveBeenCalledWith('D');
  });

  it('calls the onScaleChange prop with the new scale value', () => {
    const scaleSelect = screen.getByLabelText(/Select a scale/i);

    fireEvent.change(scaleSelect, { target: { value: 'minor' } });

    expect(onScaleChangeMock).toHaveBeenCalledTimes(1);
    expect(onScaleChangeMock).toHaveBeenCalledWith('minor');
  });
});

