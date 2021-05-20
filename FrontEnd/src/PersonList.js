import React from 'react';
import {Link} from 'react-router-dom';
//import defaultImg from 'src/images/room-1.jpeg';

import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`http://localhost:4000/api/rooms`)
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
      <ul>
        { this.state.persons.map(person => 
                  <div>
                  <div className="col-md-4 col-12 mx-auto p-2">
                  <div className="card shadow-lg border-0 room">
                  {/* <img src={person.images[0] || defaultImg} alt="single room" className="img-fluid"/> */}
                      <div className="price-top">
                          <h6>{person.price}€</h6>
                          <p>la noche</p>
                      </div>
                      <Link to={`/rooms/${person.slug}`} className="btn-warning room-link text-center" >Features</Link>
                    <p className="room-info">{person.name}</p>
                  </div>
              </div>
              </div>

        )}
       
      </ul>
    )
  }
}

