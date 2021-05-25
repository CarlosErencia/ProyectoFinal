import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`http://34.226.202.240:4000/api/rooms`)
      .then(res => {
        const persons = res.data;
        console.log(res.data);
        this.setState({ persons });

      }).catch(function (){
          console.error("NO se ha podido cargar la habitacion")
      })
  }

  render() {
    return (
      <section class="container">
        <div class="row my-5">
        { this.state.persons.map(person => 
       
          <div className="col-md-4 col-12 mx-auto p-2">
            <div className="card shadow-lg border-0 room">
              <img src={person.images} alt="single room" className="img-fluid foto"/>
              <div className="price-top">
                  <h6>{person.price}€</h6>
                  <p>la noche</p>
              </div>
              <Link to={`/rooms/${person._id}`} className="btn-warning room-link text-center" >Mas Informacion</Link>
              <p className="room-info">{person.name}</p>
            </div>
          </div>
        )}
        </div>       
      </section>
    )
  }
}

