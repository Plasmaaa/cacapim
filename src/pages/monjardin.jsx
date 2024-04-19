import React, { useRef, useEffect, useState } from 'react';
import './monjardin.css';
import logotitre from '../logotitre.svg';
import actu from '../Icon Actu.svg';
import compte from '../Icon compte.svg';
import pokedex from '../Icon pokedex.svg';
import quizz from '../Icon quiz.svg';
import scan from '../Icon scan.svg';
import image1 from './image1.jpg'
import image2 from './image2.jpg'
import image3 from './image3.jpg'
import image4 from './image4.jpg'
import image5 from './image5.jpg'
import image6 from './image6.jpg'

function App() {
  const canvasRef = useRef(null);
  return (
    <div className="App">
      <div className="rectangle-container">
        <div className="rectangle">
          <header className="App-header">
          <img src={logotitre} className="logotitre" alt="Logotitre" />
          <p className="text_1">
          La plante à bien été ajoutée
            </p>
          </header>
          <div className="bouton">
            <button className="monJardinWrapper">Mon jardin</button>
            <button className="monHerbierWrapper">Mon herbier</button>
            
            <div className="marron-background">
              <p className="text_2">
                 Ma collection
              </p>
              <img src={image1} className="Palmier" alt="Palmier" />
              <p className="text_3">Palmier Ajouter <br /> Ajouter le 04/02/2024  </p>
              <img src={image2} className="vigne_vierge" alt="vigne_vierge" />
              <p className="text_3"> vigne vierge <br /> Ajouter le 20/04/2024  </p>
              <img src={image3} className="platane" alt="platane" />
              <p className="text_4"> La platan <br /> Ajouter le   </p>
              <img src={image4} className="Pissenlit" alt="Pissenlit" />
              <p className="text_4"> Le Pissenlit <br /> ça manque de plantes </p>
              <img src={image5} className="Lerable" alt="Lerable" />
              <p className="text_5"> L'érable <br /> ça manque de plantes </p>
              <img src={image6} className="paquerette" alt="paquerette" />
              <p className="text_5"> L'érable <br /> ça manque de plantes </p>


            </div>
            
        </div>

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