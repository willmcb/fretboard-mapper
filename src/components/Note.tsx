import '../styles/note.css';

export type NoteProps = {
  name: string,
  active: boolean,
  visible: boolean
}

function Note({name, active, visible}:NoteProps): JSX.Element {
  if (visible) {

    return (
      <span className={classes(active)} data-testid="note-elem">
       {name}
      </span>
    );

  } else {

    return (
      <span className="blank-note" data-testid="note-elem"></span>
    );

  }
}

function classes(active:boolean){
  return `note ${active ? 'active-note' : ''}`
}

export default Note;
