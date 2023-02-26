import { render, screen } from '@testing-library/react';
import Note from '../components/Note';

test('When visible renders an note with a note value', () => {
  render(<Note name={"Eb"} />);
  const element = screen.getByText(/Eb/i);
  expect(element).toBeInTheDocument();
});

