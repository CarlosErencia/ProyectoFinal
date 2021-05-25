import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Title from './Title'

export default class Servicios extends Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`http://34.226.202.240:4000/api/restaurants`)
      .then(res => {
        const persons = res.data;
        console.log(res.data);
        this.setState({ persons });

      }).catch(function (){
          console.error("NO se han podido cargar los restaurantes")
      })
  }

  render() {
    return (
      
        <div className="container-fluid restaurant">
         <Title title="Restaurantes" />
            <div className="row">
               {this.state.persons.map((person, index) => {
                  return(
                    <div className="col-md-4 col-lg-3 col-12 mx-auto my-3" key={index}>
                        <div className="card">
                          <img class="card-img-top foto" src={person.image} alt="Card image cap"></img>
                          <div class="card-body">
                            <strong class="card-text"><h4>{person.name}</h4></strong>
                            <p class="card-text">{person.description}</p>
                            <Link to={`/restaurant/${person._id}`} className="btn btn-block btn-outline-primary" >Mas Informacion</Link>
                          </div>              
                       </div>
                    </div>
                  )
               })}
            </div>
        </div>
    )
}
}

