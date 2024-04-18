import React, { useRef } from 'react';
import './App.css';
import footer from './Prouter.svg';
import logotitre from './logotitre.svg';
import actu from './Icon Actu.svg'
import compte from './Icon compte.svg'
import pokedex from './Icon pokedex.svg'
import quizz from './Icon quiz.svg'
import scan from './Icon scan.svg'

function App() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const circleRef = useRef(null);


  const startCamera = () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      });
    }
  };


  const captureImage = () => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext('2d');
      context.drawImage(videoRef.current, 0, 0, 640, 480);
      const imageDataUrl = canvasRef.current.toDataURL('image/png');


    }
  };


  const onCircleClick = () => {
    startCamera();
    circleRef.current.addEventListener('click', captureImage);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logotitre} className="header" alt="header" />
        <div ref={circleRef} className="circle-container" onClick={onCircleClick}>
          <div className="circle">
            <div className="circle-text">
              Clique ici pour scanner
            </div>
          </div>
        </div>
        <video ref={videoRef} className="video-feed" style={{ display: 'none' }} autoPlay></video>
        <canvas ref={canvasRef} className="image-canvas" style={{ display: 'none' }}></canvas>
      

      <body>
        <div>
          <img src={actu} className="icon1" alt="icone1" />
          <img src={quizz} className="icon1" alt="icone2" />
          <img src={scan} className="icon1" alt="icone3" />
          <img src={pokedex} className="icon1" alt="icone4" />
          <img src={compte} className="icon1" alt="icone5" />
        </div>
      </body>
      </header>
    </div>

  );
}

export default App;
