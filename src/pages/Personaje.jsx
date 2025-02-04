import { useCallback, useEffect, useState,useContext } from "react";
import {useFetch} from '../hooks/useFetch';
import { Link, useParams } from 'react-router-dom';
import { StorageContext } from "../App"

export default function Personaje() {

    const params = useParams();
    const {storage} = useContext(StorageContext); 

    const personaje = storage.results.find(personaje => personaje.id == params.id);

    return (
      <div className="card">
            <img src={personaje.image} className="card-img-top" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">{personaje.name}</h5>
                <p className="card-text">{personaje.species}</p>
                <Link to={`/`} className="btn btn-primary">Volver</Link>
            </div>
      </div>
    )
}