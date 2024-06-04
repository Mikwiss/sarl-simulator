import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend);

const SumChart = () => {
    const CA = 100000;
    // Define the parameters with the new function
    const T = [0, 11295, 28787, 82342, 177106, Infinity];
    const tau = [0, 0.11, 0.30, 0.41, 0.45, 0.45];

    // Function to compute the sum from i=0 to i=5 with max(0, min(R, T[i+1]) - T[i])
    const sumFunctionMax = (R) => {
        let total_sum = 0;
        for (let i = 0; i < 5; i++) {
            total_sum += Math.max(0, Math.min(R, T[i+1]) - T[i]) * tau[i];
        }
        return total_sum;
    };

    const IS = (R, CA) => {
        let total_sum = 0;
        for (let i = 0; i < 5; i++) {
            total_sum += Math.max(0, Math.min(CA, T[i+1]) - T[i]) * tau[i];
        }
        return total_sum;
    };

    // Range of R values
    const R_values = Array.from({ length: 75 }, (_, i) => i * 2000);

    // Compute the sum for each R value
    const sum_values_max = R_values.map(R => sumFunctionMax(R));
    const urssaf = R_values.map(R => R*0.45);


    const data = {
        labels: R_values,
        datasets: [
            {
                fill: true,
                label: 'Sum function with max(0, min(R, T[i+1]) - T[i])',
                data: sum_values_max,
                borderColor: 'rgba(75,192,192,1)',
                backgroundColor: 'rgba(75,192,192,0.2)',
            },
            {
                fill: true,
                label: 'Sum function with max(0, min(R, T[i+1]) - T[i])',
                data: urssaf,
                borderColor: 'rgba(75,102,192,1)',
                backgroundColor: 'rgba(75,102,192,0.2)',
            }
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Plot of the sum function with max(0, min(R, T[i+1]) - T[i])',
            },
        },
    };

    return <Line data={data} options={options} />;
};

export default SumChart;
