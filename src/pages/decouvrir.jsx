import React, { useRef, useEffect, useState } from 'react';
import './neuille.css';
import logotitre from '../logotitre.svg';
import actu from '../Icon Actu.svg';
import compte from '../Icon compte.svg';
import pokedex from '../Icon pokedex.svg';
import quizz from '../Icon quiz.svg';
import scan from '../Icon scan.svg';
import image from './palmier.png';
import Left from './arrow.png'; 
import Right from './plus.png';

function App() {
  const canvasRef = useRef(null);
  return (
    <div className="App">
      <div className="rectangle-container">
        <div className="rectangle">
          <header className="App-header">
            <div className="left">
              <img className="arrow-icon-left" alt="" src={Left} />
            </div>
            <img className="Palmier" alt="" src={image} />
            <div className="right">
              <img className="arrow-icon-right" alt="" src={Right} />
            </div>
            <canvas ref={canvasRef} className="hidden"></canvas>
            <p className="text_1">
              C'est un Palmier !
            </p><br />
            <p className="text_2">
              Le palmier est un grand arbre que l'on trouve souvent sur les plages ensoleillées.<br />
              Il a un tronc mince et de grandes feuilles qui ressemblent à des éventails verts.<br />
              Les palmiers sont très spéciaux car ils aiment beaucoup le soleil et ils peuvent résister au vent fort.
            </p>
          </header>
          <a href='http://localhost:3000/jardin'>
          <button className="button">Ajouter à mon jardin</button>
          </a>
          <div className='footer'>
            <img src={actu} className="icon" alt="Actualites" />
            <img src={quizz} className="icon" alt="quiz" />
            <img src={scan} className="icon" alt="Scan" />
            <img src={pokedex} className="icon" alt="pokedex" />
            <img src={compte} className="icon" alt="compte" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;