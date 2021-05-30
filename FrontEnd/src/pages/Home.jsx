//pagina principal home que llama components
import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import FeaturedRooms from '../components/FeaturedRooms';
import Servicios from '../components/Servicios';
import Installations from '../components/Installations'
import Restaurants from '../components/Restaurants'

export default function Home() {
    return (
        <>
        <Hero hero="defaultHero">
        </Hero>
        <Banner title="Habitaciones Lujosas" subtitle="Nuestras habitaciones a partir de 100€">
                <Link to="/rooms" className="btn btn-primary">
                      Nuestras Habitaciones
                </Link>
        </Banner>
        <Servicios/>
        <FeaturedRooms/>
        <Installations/>
        <Restaurants/>
        </>

    )
}
