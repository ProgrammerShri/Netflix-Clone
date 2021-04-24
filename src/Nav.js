import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });

    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"} `}>
      <img
        className="netflix-logo"
        src="./netflix-logo.png"
        alt="Netflix Logo"
      />

      <img className="netflix-avator" src="./netflix-avator.png" alt="Avator" />
    </div>
  );
}

export default Nav;
