// Footer.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-3 mt-5">
      <div className="container text-center">
        <p>&copy; 2024 Ma Liste de Films. Tous droits réservés.</p>
        <div>
          <a href="#facebook" className="text-white mx-2">
            <i className="bi bi-facebook"></i> Facebook
          </a>
          <a href="#twitter" className="text-white mx-2">
            <i className="bi bi-twitter"></i> Twitter
          </a>
          <a href="#linkedin" className="text-white mx-2">
            <i className="bi bi-linkedin"></i> LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
