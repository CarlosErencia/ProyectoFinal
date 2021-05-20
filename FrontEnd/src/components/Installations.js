import React, { Component } from 'react'
//import defaultImg from 'src/images/room-1.jpeg';
import axios from 'axios';
import Title from './Title'

export default class Servicios extends Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`http://192.168.210.150:4000/api/installations`)
      .then(res => {
        const persons = res.data;
        console.log(res.data);
        this.setState({ persons });

      }).catch(function (){
          console.error("tdfghkkjg")
      })
  }

  render() {
    return (
        <div className="container-fluid services">
         <Title title="Instalaciones" />
            <div className="row">
               {this.state.persons.map((person, index) => {
                  return(
                    <div className="col-md-4 col-lg-3 col-12 mx-auto my-3" key={index}>
                        <div className="card shadow-lg border-0 p-4">
                            <article className="service">
                            <span>{person.imagen}</span>
                            <h6>{person.name}</h6>
                            <p>{person.description}</p>
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

