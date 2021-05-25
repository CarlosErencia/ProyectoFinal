import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom2';
import Error from './pages/Error';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Booknow from './pages/Booknow2';
import Restaurant from './pages/Restaurant';

function App() {
    return ( 
        <div className = "App" >
            <BrowserRouter >
            <Navbar/>
            <Switch >
            <Route exact path = "/"
            component = { Home }/> 
            <Route exact path = "/contact"
            component = { Contact }/> 
            <Route exact path = "/login"
            component = { Login }/>
            <Route exact path = "/logout"
            component = { Login }/>
            <Route exact path = "/rooms/"
            component = { Rooms }/>
            <Route exact path = "/rooms/:_id"
            component = { SingleRoom }/>
            <Route exact path = "/booknow/:_id"
            component = { Booknow }/>
            <Route exact path = "/restaurant/:_id"
            component = { Restaurant }/>
            <Route component = { Error }/>
            </Switch>
            <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;