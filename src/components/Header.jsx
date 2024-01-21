// import { a } from "react-router-dom";
import "./styles/Header.css";

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <div className="name navbar-brand ">Oussama El Mabrouki</div>
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
              <a href="#home" className="nav-link">
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
