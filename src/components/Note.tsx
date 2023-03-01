import '../styles/note.css';

export interface NoteProps {
  name: string
  degree: number
}

interface DegreeTranslations {
  [key: number]: string;
}

function Note({name, degree}:NoteProps): JSX.Element {
  let degree_translations: DegreeTranslations = {
    1: 'root',
    2: 'second',
    3: 'third',
    4: 'forth',
    5: 'fifth',
    6: 'sixth',
    7: 'seventh',
    8: 'octave'
  }

  if (name === '|') {
    return (
      <span data-testid="note-elem" className="note blank-note" >
       {name}
      </span>
    );
  } else {
    return (
      <span data-testid="note-elem" className={`note ${degree_translations[degree]}`} >
       {name}
      </span>
    );
  }
}

export default Note;
