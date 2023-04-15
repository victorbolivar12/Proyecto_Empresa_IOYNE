import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);




export default function LinesChart({x,y,max}) {

    var midata = {
        labels: x,
        datasets: [ // Cada una de las líneas del gráfico
            {
                label: 'Ventas',
                data: y,
                tension: 0.5,
                fill : true,
                borderColor: '#0f6a89',
                backgroundColor: '#9ec4de',
                pointRadius: 5,
                pointBorderColor: '#0f6a89',
                pointBackgroundColor: '#e9eaec',
            },
            
        ],
    };
    
    var misoptions = {
        scales : {
            y : {
                min : 0,
                max : max
            },
            x: {
                ticks: { color: 'black'}
            }
        }
    };

    return <Line data={midata} options={misoptions}/>
}