import React, { useRef } from 'react';
import './App.css';
import footer from './Prouter.svg';
import header from './header.svg';

function App() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const circleRef = useRef(null);

  // Fonction pour démarrer la caméra
  const startCamera = () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      });
    }
  };

  // Fonction pour capturer l'image
  const captureImage = () => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext('2d');
      context.drawImage(videoRef.current, 0, 0, 640, 480);
      const imageDataUrl = canvasRef.current.toDataURL('image/png');

      // Ici, vous enverriez l'image au serveur pour la stocker dans votre BDD
      // Utilisez l'API fetch ou axios pour envoyer l'image à votre serveur
    }
  };

  // Déclencheur pour démarrer la caméra et capturer l'image sur clic
  const onCircleClick = () => {
    startCamera();
    circleRef.current.addEventListener('click', captureImage);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={header} className="header" alt="header" />
        <div ref={circleRef} className="circle-container" onClick={onCircleClick}>
          <div className="circle">
            <div className="circle-text">
              Clique ici pour scanner
            </div>
          </div>
        </div>
        <video ref={videoRef} className="video-feed" style={{ display: 'none' }} autoPlay></video>
        <canvas ref={canvasRef} className="image-canvas" style={{ display: 'none' }}></canvas>
      </header>
      <footer>
        <img src={footer} className='footer' alt="footer" />
      </footer>
    </div>
  );
}

export default App;
