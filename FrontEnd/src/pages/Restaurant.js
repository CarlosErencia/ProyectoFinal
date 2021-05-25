import React, { Component } from 'react'
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import { RoomContext } from '../context';
import StyledHero from '../components/StyledHero';
import axios from 'axios'

export default class Restaurant extends Component {
    constructor (props){
        super(props);
        this.state = {
            _id: this.props.match.params._id,
            info: []
        };
       
    }

  componentDidMount() {
    axios.get(`http://34.226.202.240:4000/api/restaurants/`+ this.state._id)
      .then(res => {
        this.state.info = res.data;
        this.setState(this.state.info);
        console.log(this.state.info)

      }).catch(function (){
          console.error("NO se ha podido cargar la habitacion")
      })
  }
    static contextType = RoomContext;
    render() {
        return (
            <>
            <StyledHero img={this.state.info.image}>
            <Banner title={`${this.state.info.name}`}>
                    <Link to="/" className="btn btn-primary">Volver a Home</Link>
            </Banner>
            </StyledHero>
            <section className="single-room container">
               <div className="row">
               </div>
               <div className="single-room-info">
                   <article className="desc">
                      <h3>Descripcion</h3>
                      <p>{this.state.info.description}</p>
                   </article>
                   <article className="info">
                      <h3>Info</h3>
                      <h6>price : € {this.state.info.price}</h6>
                      <h6>Telf  : +34 {this.state.info.numberPhone}</h6>
                      <h6>Horario: {this.state.info.restauranthours}</h6>
                      <h6>Max Comensales: {this.state.info.persons}</h6>
                   </article>
               </div>
            </section>
            </>
        )
    }
}
