import React from 'react';
import './jardin.css'; // N'oubliez pas de créer ce fichier CSS.
import logotitre from '../logotitre.svg';
import actu from '../Icon Actu.svg';
import compte from '../Icon compte.svg';
import pokedex from '../Icon pokedex.svg';
import quizz from '../Icon quiz.svg';
import scan from '../Icon scan.svg';
import MyResponsiveWaffle from './grilleJardin'
import grille from './grille.svg'

function GardenGrid() {


    return (
        <div className="garden-grid">
            <div className="garden-header">
                <img src={logotitre} className="logotitre" alt="Logotitre" />
            </div>
            <div className="grid-container">
                <div className='waffle'>
                    <img src={grille} className='grille' alt='jardin' />
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

export default GardenGrid;
