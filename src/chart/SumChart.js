import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend);

const SumChart = ({ abscissa, irppValues }) => {

    const data = {
        labels: abscissa,
        datasets: [
            {
                fill: true,
                label: 'Sum function with max(0, min(R, T[i+1]) - T[i])',
                data: irppValues,
                borderColor: 'rgba(75,192,192,1)',
                backgroundColor: 'rgba(0,192,192,0.2)',
            },
            {
                fill: true,
                label: 'Revenue du dirigeant',
                data: abscissa,
                borderColor: 'rgba(75,192,192,1)',
                backgroundColor: 'rgba(192,0,192,0.2)',
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
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Month'
                }
            },
            y: {
                stacked: true,
                title: {
                    display: true,
                    text: 'Value'
                }
            }
        }
    };

    return <Line data={data} options={options} />;
};

export default SumChart;
