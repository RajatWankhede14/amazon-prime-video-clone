import React from 'react';
import './Nav.css'

function Nav() {
    return (
        <div className="nav">
            <img className="nav__logo" src="https://www.jamesdodkins.com/uploads/6/4/7/0/6470224/published/prime-video_1.png?1552987507" alt="amazon-logo"/>
            <li className="bb">Home</li>
            <li className="bb">TV</li>
            <li className="bb">Movies</li>
            <li className="bb">Kids</li>
            <input className="search__bar" type="text" placeholder="Search" />
            <img className="nav__avatar" src="https://m.media-amazon.com/images/G/02/CerberusPrimeVideo-FN38FSBD/adult-1.png" alt="avatar-logo"/>
        </div>
    )
};


export default Nav
