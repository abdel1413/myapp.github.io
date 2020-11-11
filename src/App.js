import logo from './Aboulaye.jpeg';
import './App.css';
import 'tachyons'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className ='name'>
           My name is Aboulaye Tchakoura and I'm going to master React!
        </p>
        <a
          className="App-link grow"
          href="https://github.com/abdel1413/myapp.github.io.git"
          target="_blank"
          rel="noopener noreferrer"
          >
          Check Me Out!
        </a>
      </header>
    </div>
  );
}

export default App;
