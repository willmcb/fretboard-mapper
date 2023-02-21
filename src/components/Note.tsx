import '../styles/note.css';

interface NoteValues {
  noteName: string,
  active: boolean,
  visible: boolean
}

function Note({noteName, active, visible}:NoteValues): JSX.Element {
  if (visible) {
    return (
      <span className={classes(active)} data-testid="note-elem">
       {noteName}
      </span>
    );
  } else {
    return (
      <span data-testid="note-elem"></span>
    );
  }
}

function classes(active:boolean){
  return `note ${active ? 'active-note' : ''}`
}

export default Note;
