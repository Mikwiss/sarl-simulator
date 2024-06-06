import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend);

const SumChart = ({ max, abscissa, irppValues, urssaf, is, compte }) => {

    const data = {
        labels: abscissa,
        datasets: [

            {
                fill: true,
                label: 'IRPP',
                data: irppValues,
                borderColor: 'rgba(75,192,192,1)',
                backgroundColor: 'rgba(0,192,192,0.2)',
            },
            {
                fill: true,
                label: 'Urssaf',
                data: urssaf,
                borderColor: 'rgba(75,192,192,1)',
                backgroundColor: 'rgba(192,192,0,0.2)',
            },
            {
                fill: true,
                label: 'IS',
                data: is,
                borderColor: 'rgba(75,192,192,1)',
                backgroundColor: 'rgba(192,192,192,0.2)',
            },
            {
                fill: true,
                label: 'compte',
                data: compte,
                borderColor: 'rgba(75,192,192,1)',
                backgroundColor: 'rgba(0,0,192,0.2)',
            },
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
                text: 'IRPP',
            },
            tooltip: {
                mode: 'index'
            },
        },
        interaction: {
            mode: 'nearest',
            axis: 'x',
            intersect: false
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Revenue du dirigeant'
                },
                max: max,
            },
            y: {
                stacked: true,
                title: {
                    display: true,
                    text: 'Euros'
                },
                min: 0,
                max: max,
            }
        }
    };

    return <Line data={data} options={options} />;
};

export default SumChart;
