import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import "./Nav.css";

function Nav() {
  const [trans, setTrans] = useState(false);
  const history = useHistory();

  const navChange = () => {
    if (window.scrollY > 100) {
      setTrans(true);
    } else {
      setTrans(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", navChange);
    return () => window.removeEventListener("scroll", navChange);
  }, []);

  return (
    <div className={`nav ${trans === true && "nav__color"}`}>
      <img
        onClick={() => history.push("/")}
        className="nav__logo"
        src="https://www.jamesdodkins.com/uploads/6/4/7/0/6470224/published/prime-video_1.png?1552987507"
        alt="amazon-logo"
      />
      <ul className="nav__link">
        <li>Home</li>
        <li>Movies</li>
        <li>TV</li>
        <li>Kids</li>
      </ul>
      <input className="search__bar" type="text" placeholder="Search" />
      <img
        onClick={() => history.push("/profile")}
        className="nav__avatar"
        src="https://m.media-amazon.com/images/G/02/CerberusPrimeVideo-FN38FSBD/adult-1.png"
        alt="avatar-logo"
      />
    </div>
  );
}

export default Nav;
