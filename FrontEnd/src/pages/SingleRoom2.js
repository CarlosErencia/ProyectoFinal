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
        // const { getRoom } = this.context;
        // const room = getRoom(this.state._id);
        // if(!room){
        //     return (<div className="container roomerror">
        //             <div className="row my-5">
        //                 <div className="col-md-6 col-12 mx-auto">
        //                     <div className="card shadow-lg border-0 p-4 error">
        //                         <h1 className="text-center display-4">SORRY</h1>
        //                         <h3>No such room could be found...</h3>
        //                         <Link to="/rooms" className="btn btn-warning mt-4 ">Back to Rooms</Link>
        //                     </div> 
        //                 </div>
        //             </div>
        //         </div>);
        // }
        // const {name,description,capacity,size,price,extras,breakfast,pets,images} = room;
        // const [mainImg, ...defaultBcg] = images;
        return (
            <>
            <StyledHero img={this.state.persons.images}>
           
            <Banner title={`${this.state.persons.name} room`}>
                    <Link to="/rooms" className="btn btn-primary">Back To Rooms</Link>
            </Banner>
            </StyledHero>
            <section className="single-room container">
               <div className="row">
                    {/* {defaultBcg.map((item,index) => {
                        return (
                        <div className="col-md-4 col-12 mx-auto" key={index}>
                            <div className="card border-0 shadow-lg">
                               <img key={index} src={item} alt={this.state.persons.name} className="img-fluid" />
                            </div>
                        </div>)
                    })} */}
               </div>
               <div className="single-room-info">
                   <article className="desc">
                      <h3>Details</h3>
                      <p>{this.state.persons.description}</p>
                   </article>
                   <article className="info">
                      <h3>Info</h3>
                      <h6>price : € {this.state.persons.price}</h6>
                      <h6>size  : {this.state.persons.size} M2</h6>
                      <h6>
                          max capacity : {" "}
                              {this.state.persons.capacity > 1 ? `${this.state.persons.capacity} people`: `${this.state.persons.capacity} person`}
                      </h6>
                      <h6>{this.state.persons.pets? 'pets allowed': 'no pets allowed'}</h6>
                      <h6>{this.state.persons.breakfast && "free breakfast included"}</h6>
                   </article>
               </div>
            </section>
            <section className="room-extras">
                <h3>Extras</h3>
                <ul className="extras">
                    <p>{this.state.persons.extras}</p>
                    {/* {this.state.persons.extras.map((item,index) => {
                          return <li key={index}>{item}</li>
                    })} */}
                </ul>
                <div className="p-4 clearfix">
                    <div className="row">
                       <div className="col-md-3 col-12 ml-auto">
                          <Link to={`/booknow/${this.state._id}`} className="btn btn-outline-primary btn-block btn-lg float-right ">Book Now</Link>
                       </div>
                    </div>
                </div>
            </section>
            </>
        )
    }
}
