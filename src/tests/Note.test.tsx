import { render, screen } from '@testing-library/react';
import Note from '../components/Note';
import { per_fifth } from '../utils/reference_data/app';

test('When visible renders an note with a note value', () => {
  render(<Note name={"G"} degree={per_fifth} />);
  const element = screen.getByText(/G/i);
  expect(element).toBeInTheDocument();
});

