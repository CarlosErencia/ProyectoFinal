import React from 'react';

import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`http://localhost:4000/api/todos`)
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
        { this.state.persons.map(person => <li>{person.name}</li>)}
        { this.state.persons.map(person => <li>{person.slug}</li>)}
        { this.state.persons.map(person => <li>{person.type}</li>)}
        { this.state.persons.map(person => <li>{person.price}</li>)}
        { this.state.persons.map(person => <li>{person.size}</li>)}
        { this.state.persons.map(person => <li>{person.capacity}</li>)}
        { this.state.persons.map(person => <li>{person.pets}</li>)}
        { this.state.persons.map(person => <li>{person.breakfast}</li>)}
        { this.state.persons.map(person => <li>{person.featured}</li>)}
        { this.state.persons.map(person => <li>{person.description}</li>)}
        { this.state.persons.map(person => <li>{person.extras}</li>)}
      </ul>
    )
  }
}