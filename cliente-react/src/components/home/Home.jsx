import BarsChart from "../graphics/BarsChart";
import LinesChart from "../graphics/LinesChart";
import { useState, useEffect } from "react";
import { URL_QUOTE } from "../../endpoint/EndPoint";
import axios from 'axios'

export const Home = () => {

    const [salesQuote, setSalesQuote] = useState()
    const [sales, setSales] = useState()
    const [days, setDays] = useState()
    const [max, setMax] = useState()
     
    const weekDays = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

    useEffect(() => {
        getQuotes()
    }, [])

    const getQuotes = async () => {
        const response = await axios.get(URL_QUOTE);
    
        const salesQuote = response.data.map((objeto) => ({
            fecha: objeto.fecha,
            total: objeto.total,
        }));
    
        const orderSales = salesQuote.sort((a, b) => new Date(a.fecha) - new Date(b.fecha));
    
        const maxTotal = Math.max(...orderSales.map(item => parseFloat(item.total)));
    
        const sales = orderSales.map(item => parseFloat(item.total));
    
        setMax((maxTotal + 10).toFixed(2));
        setSales(sales);
    }

    return (
        <>
            <h1 className="text-center lh-base" style={{ background: "rgba(18, 108, 139,.88)", color: "white" }}>Gráficas de Cotizaciones</h1>
            <div class="container text-center">
                <div class="row align-items-start">
                    <div class="col ">
                        <p className="m-2"><b>Ejemplo #1: </b>Gráfico de líneas básico</p>
                        <div className="mx-auto px-2 border border-2" style={{ width: "535px", height: "250px" }}>
                           <LinesChart x={weekDays} y={sales} max={max}/>
                        </div>
                    </div>
                    <div class="col">
                        <p className="m-2"><b>Ejemplo #2: </b>Gráfico de barras</p>
                        <div className="mx-auto px-2 border border-2" style={{ width: "535px", height: "250px" }}>
                           <BarsChart x={weekDays} y={sales} max={max}/>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}