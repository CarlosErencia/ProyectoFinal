import React from 'react'
import loadingGif from '../images/gif/loading-arrow.gif';

// Simplement un gif de carga, aquest fitxer el crida el RoomContainer.jsx

export default function Loading() {
    return (
        <div className="loading">
           <h4>Rooms data loading...</h4>  
           <img  src={loadingGif} alt="loading please wait"/>  
        </div>
    )
}
