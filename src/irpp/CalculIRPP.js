import React, { useState } from 'react';
import { tranches } from './../config';

const CalculIRPP = () => {
    const [revenu, setRevenu] = useState('');
    const [irpp, setIrpp] = useState(null);

    // Fonction pour calculer l'IRPP en fonction des tranches et des taux
    const calculerIRPP = (R) => {
        let totalIRPP = 0;

        for (let i = 0; i < tranches.length - 1; i++) {
            const trancheActuelle = tranches[i];
            const trancheSuivante = tranches[i + 1];

            if (R > trancheActuelle.limite) {
                const revenuTranche = Math.min(R, trancheSuivante.limite) - trancheActuelle.limite;
                console.log(trancheSuivante.limite)
                console.log(revenuTranche * trancheActuelle.taux)
                totalIRPP += revenuTranche * trancheActuelle.taux;
            } else {
                break;
            }
        }

        return totalIRPP;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const resultat = calculerIRPP(parseFloat(revenu));
        setIrpp(resultat);
    };

    return (
        <div>
            <h2>Calcul de l'IRPP</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Revenu du dirigeant :</label>
                    <input
                        type="number"
                        value={revenu}
                        onChange={(e) => setRevenu(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Calculer</button>
            </form>
            {irpp !== null && (
                <div>
                    <h3>IRPP Calculé : {irpp.toFixed(2)} €</h3>
                </div>
            )}
        </div>
    );
};

export default CalculIRPP;
