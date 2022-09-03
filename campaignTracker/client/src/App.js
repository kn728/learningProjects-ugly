import './App.css';
import Navbar from './Components/Navbar';
import CampaignMap from './Pages/CampaignMap';
import CreateCharacter from './Pages/createCharacter';
function App() {
  return (
    <div className="App">
      <Navbar />
      <CreateCharacter />
    </div>
  );
}

export default App;
