import logo from './Aboulaye.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           My name is Aboulaye Tchakoura and I'm going to master React!
        </p>
        <a
          className="App-link"
          href="Aboulaye.jpeg"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
