import React, { useState } from "react";
import { SiConsul } from "react-icons/si";
import { BsPhoneVibrate } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";
import logo from '../../assets/logo.jpeg'

const Navbar = () => {

    const [active, setActive] = useState('navBar__Menu');
    const showNavBar = () => {
        setActive('navBar__Menu showNavBar')
    }

    const removeNavBar = () => {
        setActive('navBar__Menu')
    }

    const [noBg, addBg] = useState('navBar__Two');
    const addBgColor = () => {
        if(window.scrollY >= 10){
            addBg('navBar__Two navbarWithBg')
        }
        else{
            addBg('navBar__Two')
        }
    }
    window.addEventListener('scroll', addBgColor)

    return <div className="navBar flex">
        <div className="navBar__One flex">
            <div>
                <SiConsul />
            </div>

            <div className="flex utility">
                <li className="flex"> <BsPhoneVibrate className="icon"/> Support</li>
                <li className="flex"> <AiOutlineGlobal className="icon"/> Languages</li>
            </div>

            <div className="atb flex">
                <span>Sign In</span>
                <span>Sign Out</span>
            </div>
        </div>

        <div className={noBg}>

            <div className="logoDiv">
                <img src={logo} className="logo" />
            </div>

            <div className={active}>
                <ul className="menu flex">
                    <li onClick={removeNavBar} className="listItem">Offers</li>
                    <li onClick={removeNavBar} className="listItem">Home</li>
                    <li onClick={removeNavBar} className="listItem">Seats</li>
                    <li onClick={removeNavBar} className="listItem">Destinations</li>
                    <li onClick={removeNavBar} className="listItem">About</li>
                </ul>

                <button onClick={removeNavBar} className="btn flex btnOne">
                    Contact
                </button>
            </div>

            <div onClick={showNavBar} className="toggleIcon">
                <CgMenuGridO className="icon"/>
            </div>
        </div>

    </div>;
};

export default Navbar;
