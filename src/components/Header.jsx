import { Link } from "react-router-dom";
import "./styles/Header.css";

export default function Header() {
  return (
    <header>
        <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
                <div className="name navbar-brand ">
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
                        <Link to="/" className="nav-link">
                            Home    
                        </Link>
                        <Link to="/about" className="nav-link">
                            About   
                        </Link>
                        <Link to="/skills" className="nav-link">
                            Skills
                        </Link>
                        <Link to="/projects" className="nav-link">
                            Projects
                        </Link>
                        <Link to="/contact" className="nav-link">
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    </header>
  );
}
