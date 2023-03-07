import '../styles/note.css';
import { Degree } from '../utils/reference_data/app'

export interface NoteProps {
  name: string
  degree: Degree
}

function Note({name, degree}:NoteProps): JSX.Element {
  if (name === '|') {
    return (
      <span data-testid="note-elem" className="note blank-note" >
       {name}
      </span>
    );
  } else {
    if (degree.class_name !== "") {
      return (
        <span data-testid="note-elem" className={`note ${degree.class_name}`} >
         {name}
        </span>
      );
    } else {
      return (
        <span data-testid="note-elem" className={"note"} >
         {name}
        </span>
      );
    }
  }
}

export default Note;
