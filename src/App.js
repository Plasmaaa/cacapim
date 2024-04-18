import logo from './logo.svg';
import './App.css';
import footer from './Prouter.svg'
import header from './header.svg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={header} className="header" alt="header" />
        <div>
        <span class="dot"></span>

        </div>
      </header>
      <footer>
      <img src={footer} className='footer' alt="footer" />
      </footer>
    </div>
  );
}

export default App;
