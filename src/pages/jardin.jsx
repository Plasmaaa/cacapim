import React from 'react';
import './jardin.css'; // N'oubliez pas de créer ce fichier CSS.
import logotitre from '../logotitre.svg';
import actu from '../Icon Actu.svg';
import compte from '../Icon compte.svg';
import pokedex from '../Icon pokedex.svg';
import quizz from '../Icon quiz.svg';
import scan from '../Icon scan.svg';

function GardenGrid() {
  // Simuler une grille de jardin
  const grid = Array.from({ length: 5 }, () =>
    Array.from({ length: 3 }, () => 'empty')
  );

  return (
    <div className="garden-grid">
      <div className="garden-header">
      <img src={logotitre} className="logotitre" alt="Logotitre" />
      </div>
      <div className="grid-container">
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="grid-row">
            {row.map((cell, cellIndex) => (
              <div key={cellIndex} className={`grid-cell ${cell}`}>
                {/* Ici, vous pouvez ajouter une logique pour afficher '+' ou l'icône de la plante */}
                {cell === 'empty' ? '+' : '🌱'}
              </div>
            ))}
          </div>
        ))}
        <div className='footer'>
        <img src={actu} className="icon" alt="Actualités" />
        <img src={quizz} className="icon" alt="Quiz" />
        <img src={scan} className="icon" alt="Scan" />
        <img src={pokedex} className="icon" alt="Pokedex" />
        <img src={compte} className="icon" alt="Compte" />
      </div>
      </div>
      
    </div>
  );
}

export default GardenGrid;
