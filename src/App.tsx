import './styles/App.css';
import Note from './components/Note';

function App() {
  return (
    <div className="App">
      <Note noteName={"Eb"} visible={true} active={true} />
      <Note noteName={"G#"} visible={true} active={false} />
      <Note noteName={"A"} visible={true} active={true} />
      <Note noteName={"b"} visible={false} active={true} />
    </div>
  );
}

export default App;
