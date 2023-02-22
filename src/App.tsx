import './styles/App.css';
import { NoteProps } from './components/Note';
import Fret from './components/Fret';
import Nut from './components/Nut';


function App() {
  return (
    <div className="App">
      <Nut/>
      <Fret notes={firstFret} />
      <Fret notes={secondFret} />
    </div>
  );
}

const firstFret: NoteProps[] = [
  {
    name: "E",
    active: false,
    visible: true
  },
  {
    name: "A",
    active: false,
    visible: true
  },
  {
    name: "D",
    active: false,
    visible: false
  },
  {
    name: "G",
    active: false,
    visible: true
  },
  {
    name: "B",
    active: false,
    visible: true
  },
  {
    name: "E",
    active: false,
    visible: true
  }
]
const secondFret: NoteProps[] = [
  {
    name: "F",
    active: false,
    visible: true
  },
  {
    name: "Bb",
    active: false,
    visible: true
  },
  {
    name: "Db",
    active: false,
    visible: true
  },
  {
    name: "Eb",
    active: false,
    visible: true
  },
  {
    name: "C",
    active: false,
    visible: true
  },
  {
    name: "F",
    active: false,
    visible: true
  }
]

export default App;
