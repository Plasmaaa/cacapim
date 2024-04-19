import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Compte from './pages/compte.jsx';
import Scan from './pages/scan.jsx';
import Jardin from './pages/jardin.jsx';
import Decouvrir from './pages/decouvrir.jsx'
import MonJardin from './pages/monjardin.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Router>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/scan" element={<Scan/>} />
        <Route path="/compte" element={<Compte/>} />
        <Route path="/jardin" element={<Jardin/>} />
        <Route path="/decouvrir" element={<Decouvrir/>} />
        <Route path="/monjardin" element={<MonJardin/>} />


      </Routes>
   </Router>
  </React.StrictMode>,
)