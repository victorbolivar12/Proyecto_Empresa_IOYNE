import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';
import { useState } from 'react';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

export default function Bars({y,x, max}) {
    


    var misoptions = {
        responsive: true,
        animation: true,
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            y: {
                min: 0,
                max: max
            },
            x: {
                ticks: { color: 'black' }
            }
        }
    };

    var midata = {
        labels: x,
        datasets: [
            {
                label: 'Ventas',
                data: y,
                backgroundColor: 'rgb(158, 196, 222)'
            }
        ]
    };


    return <Bar data={midata} options={misoptions} />
}