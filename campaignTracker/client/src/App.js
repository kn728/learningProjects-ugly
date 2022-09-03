import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import CampaignMap from './Pages/CampaignMap';
import CreateCharacter from './Pages/createCharacter';
import Home from './Pages/home';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/CharacterCreator" element={<CreateCharacter />}></Route>

      </Routes>
      
      
    </Router>
  );
}

export default App;
