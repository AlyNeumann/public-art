import React, {useEffect} from 'react';
import * as artData from "./data/art.json";


function List() {


    return(
    <div>
        <h3>List</h3>
        <ul>
            {artData.features.map(art =>(
            <li key={art.NoInterne} >Pièce D'art: {art.Titre}   |   Nom D'artist : {art.Artistes[0].Prenom} {art.Artistes[0].Nom}</li>
            ))}
        </ul>
    </div>
    );
}

export default List; 