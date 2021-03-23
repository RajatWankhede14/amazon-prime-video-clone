import React, { useEffect, useState } from 'react';
import './Nav.css'

function Nav() {
    const [trans, setTrans] = useState(false);

    const navChange = () => {
        if (window.scrollY > 100) {
            setTrans(true);
        } else {
            setTrans(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', navChange);
        return () => window.removeEventListener('scroll', navChange);
    }, []);

    return (
        <div className={`nav ${trans === true && "nav__color" }`}>
            <img className="nav__logo" src="https://www.jamesdodkins.com/uploads/6/4/7/0/6470224/published/prime-video_1.png?1552987507" alt="amazon-logo"/>
            <ul className="nav__links">
                <li>Home</li>
                <li>TV</li>
                <li>Movies</li>
                <li>Kids</li>
            </ul>
            <input className="search__bar" type="text" placeholder="Search" />
            <img className="nav__avatar" src="https://m.media-amazon.com/images/G/02/CerberusPrimeVideo-FN38FSBD/adult-1.png" alt="avatar-logo"/>
        </div>
    )
};


export default Nav;
