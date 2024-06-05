import React, { useState } from 'react';
import './App.css';
import calculateIrpp from './irpp/irpp'; // Assurez-vous que le chemin est correct
import SumChart from './chart/SumChart';


function App() {
    const [CA, setCA] = useState(0);

// Range of R values
    const R_values = Array.from({ length: 50 }, (_, i) => i * 2000);

// Compute the sum for each R value
    const sum_values_max = R_values.map(R => calculateIrpp(R));
    const urssaf = R_values.map(R => R*0.45);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Synthèse des Impôts du Dirigeant SARL</h1>
            <input
                type="number"
                value={CA}
                onChange={(e) => setCA(Number(e.target.value))}
                placeholder="Enter CA value"
            />

          <SumChart abscissa={R_values} irppValues={sum_values_max}/>

        </div>
      </header>

    </div>
  );
}

export default App;
