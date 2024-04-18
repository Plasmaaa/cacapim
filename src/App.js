import logo from './logo.svg';
import './App.css';
import footer from './svg/Prouter.svg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <footer>
      <img src={footer} className='footer' alt="footer" />
      </footer>
    </div>
  );
}

export default App;
