import '../styles/note.css';

export interface NoteProps {
  name: string
}

function Note({name}:NoteProps): JSX.Element {
  if (name === '-') {
    return (
      <span data-testid="note-elem" className="note blank-note" >
       {name}
      </span>
    );
  } else {
    return (
      <span data-testid="note-elem" className="note" >
       {name}
      </span>
    );
  }
}

export default Note;
