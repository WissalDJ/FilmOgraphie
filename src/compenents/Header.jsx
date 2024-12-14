// Header.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <header className="bg-warning text-white py-3">
      <div className="container d-flex justify-content-between align-items-center">
        <h1>Ma Liste de Films</h1>
        <nav>
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link text-white" href="#home">
                Accueil
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#favorites">
                Favoris
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#about">
                À propos
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
