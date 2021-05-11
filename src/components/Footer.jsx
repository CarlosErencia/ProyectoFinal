import React from 'react'
import { FaFacebookSquare,FaLinkedin } from 'react-icons/fa';
import {IoLogoYoutube} from 'react-icons/io';
import { AiFillInstagram } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer id="sticky-footer" className="bg-light text-dark-50 footer">
            <div className="container py-1">
                <div className="row">
                    <div className="col-md-6 col-12 my-auto">
                        <small>CopyRight &copy; BoatKing</small>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className="d-flex float-right">
                            <a href="http://labs.iam.cat/">
                                <FaFacebookSquare className="connect text-dark" /></a>
                            <a href="http://labs.iam.cat/">
                                <FaLinkedin className="connect text-dark" /></a>
                            <a href="http://labs.iam.cat/">
                                <AiFillInstagram className="connect text-dark" /></a>
                            <a href="http://labs.iam.cat/">
                                <IoLogoYoutube className="connect text-dark" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer