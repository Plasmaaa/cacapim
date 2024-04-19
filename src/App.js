import React, { useRef, useEffect, useState } from 'react';
import './App.css';
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
      sendImageToServer(imageDataUrl);
    }
  };
  const sendImageToServer = (imageDataUrl) => {
    fetch('http://localhost:3001/scan', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': '1'
      },
      body: JSON.stringify({ imageData: imageDataUrl })
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };

  const onCircleClick = () => {
    if (!isCameraOn) {
      startCamera();
      setIsCameraOn(true); 
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
              
              
            </div>
            {}
            <video ref={videoRef} className={`video-feed ${isCameraOn ? '' : 'hidden'}`} autoPlay playsInline></video>
          </div>
        </div>
       
        <div className='footer'>
        <img src={actu} className="icon" alt="Actualités" />
        <img src={quizz} className="icon" alt="Quiz" />
        <img src={scan} className="icon" alt="Scan" />
        <a href="http://localhost:3000/jardin">
        <img src={pokedex} className="icon" alt="Pokedex" />
        <img src={compte} className="icon" alt="Compte" />
        </a>
      </div>
      </header>
      <a href='http://localhost:3000/decouvrir'>
      <canvas ref={canvasRef} className="hidden"></canvas>
      </a>
      
    </div>
  );
}

export default App;
