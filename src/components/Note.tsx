import '../styles/note.css';

export type NoteProps = {
  name: string,
}

function Note({name}:NoteProps): JSX.Element {
  return (
    <span data-testid="note-elem" className="note" >
     {name}
    </span>
  );
}

export default Note;
