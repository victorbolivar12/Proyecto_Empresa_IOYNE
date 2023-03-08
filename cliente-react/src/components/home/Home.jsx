import {
    Chart as Chartjs,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'
import { Bar } from 'react-chartjs-2';
import React,{useState,useEffect} from 'react';


export const Home = () => {
    
    const [chartData, setChartData] = useState({})
    const [chartOptions, setChartOptions] = useState({})

    useEffect(()=>{
        setChartData({
            labels: ['columna1', 'columna1','columna1','columna1','columna1',],
            datasets:[
                {
                    label: "whon let the dogs out",
                    data:[12,55,34,45,78,56],
                    borderColor: "rgb(53,162,235)",
                    backgroundcolor:"rgb(53, 162, 235, 0.4)",
                }
            ]
        })

        setChartOptions({
            resposive:true,
            plugins:{
                legend:{
                    position:"top"
                },
                title:{
                    display:true,
                    text:"this is the title"
                }
            }
        })
    },[])


    return (
        <div>
            hello
            {/* <Bar options={chartOptions} data ={chartData}/> */}
        </div>
    );
}