import Note from './Note';
import { NoteProps } from './Note';

import '../styles/fret.css';

interface FretProps {
  notes: NoteProps[];
}

function Fret({ notes }: FretProps): JSX.Element {
    return (
      <div className="fret">
        {notes.map((note, index) => (
          <Note key={index} {...note} />
        ))}
      </div>
    );
}

export default Fret;
