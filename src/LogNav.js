import React from 'react';
import './LogNav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

function LogNav() {
    return (
        <div className="logNav">
            <img className="lognav__logo" src="https://www.jamesdodkins.com/uploads/6/4/7/0/6470224/published/prime-video_1.png?1552987507" alt="amazon-logo"/>
            <ul className="nav__links">
                <li><FontAwesomeIcon icon={faGlobe} /><span>EN</span></li>
                <li>Sign In</li>
            </ul>
        </div>
    )
}

export default LogNav;
