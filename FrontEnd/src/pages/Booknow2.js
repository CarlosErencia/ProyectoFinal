import React, { Component } from 'react'
import { RoomContext } from '../context';
import { Link } from 'react-router-dom';
import moment from 'moment';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import defaultBcg from '../images/room-3.jpeg';
import axios from 'axios'

export default class Booknow extends Component {
    constructor (props){
        super(props);
        this.state = {
        _id: this.props.match.params._id,
        defaultBcg,
        persons: [],
        startDate: new Date(),
        endDate: new Date(),
    };
    this.handleChangeEnd = this.handleChangeEnd.bind(this);
    this.handleChangeStart = this.handleChangeStart.bind(this);
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

    handleChangeStart(date) {
        this.setState({
        startDate: date
        });
    }
    handleChangeEnd(date) {
        this.setState({
        endDate: date
        });
    }
    calculateDaysLeft(startDate, endDate) {
        if (!moment.isMoment(startDate)) startDate = moment(startDate);
        if (!moment.isMoment(endDate)) endDate = moment(endDate);
        return endDate.diff(startDate, "days");
    }
    static contextType = RoomContext;
    render() {
      
        const { startDate, endDate } = this.state;
        const daysLeft = this.calculateDaysLeft(startDate, endDate);
        return (
        <div className="container my-5">
            <div className="row espacioTop">
                <div className="col-md-10 mx-auto col-12 card shadow-lg border-0 p-4">
                    <div>
                        <h1 className="display-4">Booking</h1>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-12 my-auto">
                            <img src={this.state.persons.images} className="img-fluid" alt="selected room" />
                        </div>
                        <div className="col-md-6 col-12 my-auto">
                            <h1>Rooms Details</h1>
                            <table className="table">
                                <thead className="thead-light">
                                    <tr>
                                        <th>Room Type</th>
                                        <td>{this.state.persons.name}</td>
                                    </tr>
                                    <tr>
                                        <th>Capacity</th>
                                        <td>{this.state.persons.capacity}</td>
                                    </tr>
                                    <tr>
                                        <th>Size</th>
                                        <td>{this.state.persons.size} M2.</td>
                                    </tr>
                                    <tr>
                                        <th>Breakfast</th>
                                        <td>{this.state.persons.breakfast === true ? `Included`: `Not Included`}</td>
                                    </tr>
                                    <tr>
                                        <th>Pets</th>
                                        <td>{this.state.persons.pets ===true ? `Allowed` : `Not Allowed`}</td>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                    <div className="row my-3">
                        <div className="col-md-6 col-12">
                            <div className="form-group">
                                <label htmlFor="Fromdate" className="font-weight-bolder mr-3">From Date </label>
                                <DatePicker selected={this.state.startDate} onChange={this.handleChangeStart} className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="form-group">
                                <label htmlFor="Todate" className="font-weight-bolder mr-3">To Date </label>
                                <DatePicker selected={this.state.endDate} onChange={this.handleChangeEnd} className="form-control" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <h6 className="font-weight-bolder">Number of days : {daysLeft}</h6>
                            <mark>Please make sure Checkin time is from 9 am to 12 pm</mark>
                        </div>
                        <div className="col-md-6 col-12">
                            <h6 className="font-weight-bold">Price per day : <span className="badge badge-info">{this.state.persons.price} €</span></h6>
                            <h6 className="font-weight-bold">Total Price to be paid : <span className="text-primary">{daysLeft*this.state.persons.price} €</span></h6>
                        </div>
                    </div>
                    <div className="row my-4">
                        <div className="col-md-6 col-12">
                            <div className="form-group">
                                <label htmlFor="payment" className="font-weight-bolder">Payment Options</label>
                                <select className="form-control">
                                    <option disabled>Select payment option</option>
                                    <option value="Credit">Credit Card</option>
                                    <option value="Debit">Debit Card</option>
                                    <option value="checkin">Pay during Checkin</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-6 col-12 my-auto">
                            <div className="col-md-6 col-12 float-right">
                                <button className="btn btn-block btn-outline-primary" data-toggle="modal" data-target="#thanks">Confirm Booking</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="thanks">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body p-4">
                            <h3>Thank you </h3>
                            <p className="lead">Your room is booked successfully....</p>
                        </div>
                        <div className="modal-footer">
                            <Link to="/" className="btn btn-dark">Goto Home</Link>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}