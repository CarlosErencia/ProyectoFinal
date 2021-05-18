import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail, FaHiking , FaShuttleVan,FaBeer} from 'react-icons/fa'

export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title: "Coctels especiales",
                info: "Los coctels mas esquisitos a manos de nuestros mejores cocteleros"
            },
            {
                icon:<FaHiking/>,
                title: "Actividades",
                info: "Packs y ofertas para los amantes de las actividades al aire libre"
            },
            {
                icon:<FaShuttleVan/>,
                title: "Transporte",
                info: "Ubicado en una buena zona para el transporte publico y disponemos de parquing para clientes"
            },
            {
                icon:<FaBeer/>,
                title: "Barra libre",
                info: "Acceso a barra libre para todos nuestros huespedes mayores de 18 años"
            },

        ]
    }
    render() {
        return (
            <div className="container-fluid services">
             <Title title="Servicios" />
                <div className="row">
                   {this.state.services.map((item, index) => {
                      return(
                        <div className="col-md-4 col-lg-3 col-12 mx-auto my-3" key={index}>
                            <div className="card shadow-lg border-0 p-4">
                                <article className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                                </article>              
                           </div>
                        </div>
                      )
                   })}
                </div>
            </div>
        )
    }
}