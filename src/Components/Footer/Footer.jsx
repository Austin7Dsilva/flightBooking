import React from 'react';
import logo from '../../assets/logo.jpeg';
import { TiSocialFacebook } from "react-icons/ti";
import { AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";
import { FaPinterestP } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='footer'>
            <div className="sectionContainer container grid">
                <div className="gridOne">
                    <div className="logoDiv">
                        <img src={logo} className="logo" />
                    </div>
                    <p>Your mind should be stronger than your feelings, fly!</p>
                    
                    <div className="socialIcon flex">
                        <TiSocialFacebook className='icon'/>
                        <AiOutlineTwitter className='icon'/>
                        <AiFillYoutube className='icon'/>
                        <FaPinterestP className='icon'/>
                    </div>
                </div>

                <div className="footerLinks">
                    <span className="linkTitle">Information</span>
                    <li>
                        <a href="javascript:void(0)">Home</a>
                    </li>
                    <li>
                        <a href="javascript:void(0)">Explore</a>
                    </li>
                    <li>
                        <a href="javascript:void(0)">Flight Status</a>
                    </li>
                    <li>
                        <a href="javascript:void(0)">Travel</a>
                    </li>
                    <li>
                        <a href="javascript:void(0)">Check-In</a>
                    </li>
                    <li>
                        <a href="javascript:void(0)">Manage Your Booking</a>
                    </li>
                </div>

                <div className="footerLinks">
                    <span className="linkTitle">Quick Guide</span>
                    <li>
                        <a href="javascript:void(0)">FAQ</a>
                    </li>
                    <li>
                        <a href="javascript:void(0)">How to</a>
                    </li>
                    <li>
                        <a href="javascript:void(0)">Features</a>
                    </li>
                    <li>
                        <a href="javascript:void(0)">Baggage</a>
                    </li>
                    <li>
                        <a href="javascript:void(0)">Route-Map</a>
                    </li>
                    <li>
                        <a href="javascript:void(0)">Our Communities</a>
                    </li>
                </div>

                <div className="footerLinks">
                    <span className="linkTitle">Information</span>
                    <li>
                        <a href="javascript:void(0)">Chauffuer</a>
                    </li>
                    <li>
                        <a href="javascript:void(0)">Our partners</a>
                    </li>
                    <li>
                        <a href="javascript:void(0)">Destination</a>
                    </li>
                    <li>
                        <a href="javascript:void(0)">Careers</a>
                    </li>
                    <li>
                        <a href="javascript:void(0)">Transportation</a>
                    </li>
                    <li>
                        <a href="javascript:void(0)">Program rules</a>
                    </li>
                </div>

            </div>

            <div className="copyRightDiv flex">
                <p>Courtesy Design | Developed by 
                    <a href="https://austin7dsilva.github.io/Austin7Dsilva/dev"
                        target='_blank'
                    > Austin Dsilva </a>
                </p>
            </div>
        </div>  
    )
}

export default Footer
