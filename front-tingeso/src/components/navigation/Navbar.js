import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';

const Navbar = prompt => {
    return (
        <div className="navbar1">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid ">
                    <a className="navbar-brand " href="#"></a>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/uploadfile">Cargar datos</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/justificativo/formulario">Ingresar justificativos</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/autorizacion/formulario">Ingresar autorizaciones</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/sueldo/planilla">Sueldos</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;