import React, {useEffect, useState} from "react";
import axios from 'axios';
import "./stylemain.css";

export default function Main(){
    const [data, setData] = useState([])

    useEffect(()=>{
        axios.get('https://backend-api-protalento.onrender.com/api/movies')
        .then(response => {
            setData(response.data)
        })
        .catch(error=>{
            console.log("error al obtener los datos", error)
        })
    },[])

    return(
        <div className="contenedor">
            <h1>Peliculas</h1>
            <ul className="pelicula">
                {data.map(item => (
                    <div  key={item._id}>
                        <img className="poster" src={item.poster_path} alt={item.original_title} />
                        <h3 className="titulo">{item.original_title}</h3>
                        {/* <p className="parrafo">{item.overview}</p> */}
                    </div>
                ))}
            </ul>
        </div>
    )
}