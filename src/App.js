import React, { useState } from 'react';
import './App.css';
import calculateIrpp from './irpp/irpp'; // Assurez-vous que le chemin est correct
import SumChart from './chart/SumChart';
import calculateIs from "./irpp/is";


function App() {
    const [CA, setCA] = useState(100000);

    // Range of R values
    const R_values = Array.from({ length: 50 }, (_, i) => i * 2000);
    // Compute the sum for each R value
    const irpp = R_values.map(R => calculateIrpp(R));
    const urssaf = R_values.map(R => R * 0.45);

    const is = R_values.map(R => {
        let resultatNet = CA - R - urssaf[R_values.indexOf(R)] - irpp[R_values.indexOf(R)];
        let u =  calculateIs(resultatNet);
        console.log(CA + " - " + R + " - " +  urssaf[R_values.indexOf(R)] + " - " +  irpp[R_values.indexOf(R)] + " = " +  resultatNet + " => " + u)

        return u;
    });

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

          <SumChart max={CA} abscissa={R_values} irppValues={irpp} urssaf={urssaf} is={is}/>

        </div>
      </header>

    </div>
  );
}

export default App;
