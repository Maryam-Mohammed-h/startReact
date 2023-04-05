import React ,{useLayoutEffect, useRef,useState,useEffect} from "react";
import "bootstrap/js/src/collapse.js";

import { HashLink as Link } from "react-router-hash-link";
export default function Navbar(activeSection) {
	 activeSection=activeSection.activeSection;

	 
	
  return (
    <nav
      id="navbar"
      className="navbar navbar-expand-lg  bg-secondary text-uppercase position-fixed top-0 start-0 w-100 py-4"
    >
      <div className="container">
        <div className="row justify-content-between w-100">
          <div className="col-3">
            <Link className="navbar-brand" to="#pageTop">
              Start React
            </Link>
          </div>

          <div className="col-6 offset-2">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className={activeSection === 'portfolio' ? ' nav-item active activeStyle' : 'nav-item'} >
                  <Link className="nav-link py-3 " to="#portfolio">
                    Portfolio
                  </Link>
                </li>
                <li className={ activeSection === 'about' ? ' nav-item  active  activeStyle' : 'nav-item'}>
                  <Link className="nav-link py-3 " to="#about">
                    About
                  </Link>
                </li>
                <li className={activeSection === 'contact' ? 'active nav-item activeStyle' : ' nav-item'} >
                  <Link className="nav-link py-3 "  to="#contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
