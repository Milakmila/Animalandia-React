import './Navbar.css';
import {
    BrowserRouter as Router,
    
    Link,
    NavLink
  } from "react-router-dom";



function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="index.html"></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/home" className="nav-link" activeClassName="active"> Home</NavLink>
              </li>
              <li className="nav-item">
              <NavLink to="/equipo" className="nav-link" activeClassName="active"> Equipo</NavLink>
              </li>
              <li className="nav-item">
              <NavLink to="/servicios" className="nav-link" activeClassName="active"> Servicios</NavLink>
              </li>
              <li className="nav-item">
              <NavLink to="/perros" className="nav-link" activeClassName="active"> Perros</NavLink>
              </li>
              <li className="nav-item">
              <Link to="/contacto" className="nav-link"> Contacto</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
        );
      }

      export default Navbar