// import { a } from "react-router-dom";
import { useState, useEffect } from "react";
import "./styles/Header.css";

export default function Header() {
    const [scrollPosition, setScrollPosition] = useState(0);

    // const changeBackground = () => {
    //     window.scrollY >= 0 ? setNavbar(true) : setNavbar(false);
    // }
    // window.addEventListener('scroll', changeBackground);

    useEffect(() => {
      const handleScroll = () => {
        setScrollPosition(window.scrollY);
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

  return (
    <header>
      <nav
        className={`navbar navbar-expand-lg ${
          scrollPosition > 0 && "onScroll"
        }`}
      >
        <div className="container-fluid">
          <div className={`name navbar-brand ${scrollPosition > 0 && "titleScroll"} `}>Oussama El Mabrouki</div>
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
              <a href="/" className="nav-link">
                Home
              </a>
              <a href="#about" className="nav-link">
                About
              </a>
              <a href="#skills" className="nav-link">
                Skills
              </a>
              <a href="#projects" className="nav-link">
                Projects
              </a>
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
