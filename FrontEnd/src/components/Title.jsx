import React from 'react'

// Aquest simplement es un fitxer on el cridan varios arxius per poder ficar un titol amb un estil ja assignat

export default function Title({title}) {
    return (
        <div className="section-title">
            <h1>{title}</h1>
            <div/>
        </div>
    )
}
