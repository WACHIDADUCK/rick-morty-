import { StorageContext } from "../App"
import { useContext, useState, useEffect } from "react"
import { Link } from "react-router-dom"

export default function BlogCharacter() {    

    const {storage, setStorage} = useContext(StorageContext);
    const [busquedaPersonaje, setBusquedaPersonaje] = useState('');
    const [mostrarPersonajes, setMostrarPersonajes] = useState([]);


    useEffect(() => {
        setMostrarPersonajes(storage.results)
    },[])


    useEffect(() => {

        setMostrarPersonajes(storage.results.filter((character) => character.name.toLowerCase().includes(busquedaPersonaje.toLowerCase())));

    },[busquedaPersonaje])

    
    return (    
        <div className="containerPersonajes">
            <input type="text" value={busquedaPersonaje} onChange={(e) => setBusquedaPersonaje(e.target.value)} placeholder="Busqueda tu personaje" />
            {
                mostrarPersonajes.map((character) => {return <Link key={character.id} to={`/personaje/${character.id}`} className="">{character.name}</Link>})
            }

        </div>    
    )    
}