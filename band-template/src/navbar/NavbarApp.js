import React from 'react';
import './NavbarApp.css'

const NavbarApp = () => {
    return (
        <div class="topnav">
            <a href="#">HOME</a>
            <a href="#">BAND</a>
            <a href="#">TOUR</a>
            <a href="#">CONTACT</a>
            <div class="dropdown">
                <button class="dropbtn">MORE</button>
                <div class="dropdown-content">
                    <a href="#">LINK1</a>
                    <a href="#">LINK2</a>
                    <a href="#">LINK3</a>
                </div>
            </div>
        </div>
    );


}

export default NavbarApp;