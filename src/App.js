import logo from './logo.svg';
import './App.css';
import CalculIRPP from './irpp/CalculIRPP'; // Assurez-vous que le chemin est correct
import SumChart from './chart/SumChart';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Synthèse des Impôts du Dirigeant SARL</h1>
          <CalculIRPP/>
          <SumChart/>

        </div>
      </header>

    </div>
  );
}

export default App;
