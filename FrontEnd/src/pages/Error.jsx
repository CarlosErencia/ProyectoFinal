import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import {FaRegMeh} from 'react-icons/fa';

export default function Error() {
    return (
        <>
        <Hero hero="roomsError" />
        <Banner title="ERROR 404 NO ENCONTRADO" subtitle="Estás perdido !! Está oscuro en todas partes">
                <FaRegMeh className="lost"></FaRegMeh>
                <Link to="/" className="btn btn-warning">
                      VOLVER AL INICIO
                </Link>
        </Banner>
        </>
    )
}
