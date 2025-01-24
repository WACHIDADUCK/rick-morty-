import { useCallback, useEffect, useState,useContext } from "react";
import {useFetch} from '../hooks/useFetch';
import { Link, useParams } from 'react-router-dom';
import { StorageContext } from "../App"

export default function Personaje() {

  
    const params = useParams();


    const {storage} = useContext(StorageContext);

    console.log(storage.results[params.id]);
    return (
      <div className="card">
            <img src={storage.results[params.id].image} className="card-img-top" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">{storage.results[params.id].name}</h5>
                <p className="card-text">{storage.results[params.id].species}</p>
                <Link to={`/`} className="btn btn-primary">Volver</Link>
            </div>
      </div>
    )
}