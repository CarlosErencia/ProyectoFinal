import React, { Component } from 'react'
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import { RoomContext } from '../context';
import StyledHero from '../components/StyledHero';
import axios from 'axios'

export default class SingleRoom extends Component {
    constructor (props){
        super(props);
        this.state = {
            _id: this.props.match.params._id,
            persons: []
        };
       
    }

  componentDidMount() {
    axios.get(`http://34.226.202.240:4000/api/rooms/`+ this.state._id)
      .then(res => {
        this.state.persons = res.data;
        this.setState(this.state.persons);
        console.log(this.state.persons)

      }).catch(function (){
          console.error("NO se ha podido cargar la habitacion")
      })
  }
    static contextType = RoomContext;
    render() {
        return (
            <>
            <StyledHero img={this.state.persons.images}>
           
            <Banner title={`${this.state.persons.name}`}>
                    <Link to="/rooms" className="btn btn-primary">Volver a Habitaciones</Link>
            </Banner>
            </StyledHero>
            <section className="single-room container">
               <div className="row">
               </div>
               <div className="single-room-info">
                   <article className="desc">
                      <h3>Detalles</h3>
                      <p>{this.state.persons.description}</p>
                   </article>
                   <article className="info">
                      <h3>Informacion</h3>
                      <h6>Precio : {this.state.persons.price}€</h6>
                      <h6>Tamaño  : {this.state.persons.size} M2</h6>
                      <h6>
                          Max: {" "}
                              {this.state.persons.capacity > 1 ? `${this.state.persons.capacity} personas`: `${this.state.persons.capacity} persona`}
                      </h6>
                      <h6>{this.state.persons.pets? 'Se permiten animales': 'No se permiten animales'}</h6>
                      <h6>{this.state.persons.breakfast && "Desayuno Incluido"}</h6>
                   </article>
               </div>
            </section>
            <section className="room-extras">
                <h3>Extras</h3>
                <ul className="extras">
                    <p>- {this.state.persons.extras}</p>
                </ul>
                <div className="p-4 clearfix">
                    <div className="row">
                       <div className="col-md-3 col-12 ml-auto">
                          <Link to={`/booknow/${this.state._id}`} className="btn btn-outline-primary btn-block btn-lg float-right ">Reserva Ahora</Link>
                       </div>
                    </div>
                </div>
            </section>
            </>
        )
    }
}
