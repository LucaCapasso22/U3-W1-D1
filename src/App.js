import logo from './logo.svg';
import './App.css';
import ButtonComponent from './Button';
import ImageComponent from './Image';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ButtonComponent textToShow="Questo è un bottone"/>
        <ImageComponent source="https://placekitten.com/300" alt="Foto gatti" />
        <a
          className="App-link"
          href="https://reactjs.org"
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
