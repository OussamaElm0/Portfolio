// import { a } from "react-router-dom";
import { useState, useEffect } from "react";
import "./styles/Header.css";

export default function Header() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [navLinksClass, setNavLinksClass] = useState("nav-link");

    useEffect(() => {
      const handleScroll = () => {
        setScrollPosition(window.scrollY);
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    useEffect(() => {
      scrollPosition > 0 ? setNavLinksClass("nav-link link-scroll") : setNavLinksClass("nav-link"); 
    }, [scrollPosition]);

  return (
    <header>
      <nav
        className={`navbar navbar-expand-lg ${
          scrollPosition > 0 && "onScroll"
        }`}
      >
        <div className="container-fluid">
          <div
            className={`name navbar-brand ${
              scrollPosition > 0 && "titleScroll"
            } `}
          >
            Oussama El Mabrouki
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse l-1" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a href="#home" className={navLinksClass}>
                Home
              </a>
              <a href="#about" className={navLinksClass}>
                About
              </a>
              <a href="#skills" className={navLinksClass}>
                Skills
              </a>
              <a href="#projects" className={navLinksClass}>
                Projects
              </a>
              <a href="#contact" className={navLinksClass}>
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
