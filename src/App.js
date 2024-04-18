import React, { useRef, useEffect, useState } from 'react';
import './App.css';
import footer from './Prouter.svg';
import logotitre from './logotitre.svg';
import actu from './Icon Actu.svg';
import compte from './Icon compte.svg';
import pokedex from './Icon pokedex.svg';
import quizz from './Icon quiz.svg';
import scan from './Icon scan.svg';

function App() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [isCameraOn, setIsCameraOn] = useState(false);

  // Start the camera as soon as the component mounts
  useEffect(() => {
    startCamera();
  }, []);

  const startCamera = () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      }).catch(error => {
        console.error('Error accessing the camera', error);
      });
    }
  };

  const captureImage = () => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext('2d');
      context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
      const imageDataUrl = canvasRef.current.toDataURL('image/png');
      // Here you could handle the captured image, e.g., send to server or display somewhere
      console.log(imageDataUrl); // For debugging purposes
    }
  };

  const onCircleClick = () => {
    if (!isCameraOn) {
      startCamera();
      setIsCameraOn(true); // Set the camera state as on
    } else {
      captureImage();
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logotitre} className="logotitre" alt="Logotitre" />
        <p>
          Scan ta plante pour l’identifier<br />
          et ajoute là à ton jardin
        </p>
        <div className="circle-container" onClick={onCircleClick}>
          <div className="circle">
            <div className="circle-text">
              Clique ici pour scanner
            </div>
            {/* Only show video when camera is on */}
            <video ref={videoRef} className={`video-feed ${isCameraOn ? '' : 'hidden'}`} autoPlay playsInline></video>
          </div>
        </div>
        <canvas ref={canvasRef} className="hidden"></canvas>
      </header>
      <div className='footer'>
        <img src={actu} className="icon" alt="Actualités" />
        <img src={quizz} className="icon" alt="Quiz" />
        <img src={scan} className="icon" alt="Scan" />
        <img src={pokedex} className="icon" alt="Pokedex" />
        <img src={compte} className="icon" alt="Compte" />
      </div>
    </div>
  );
}

export default App;
