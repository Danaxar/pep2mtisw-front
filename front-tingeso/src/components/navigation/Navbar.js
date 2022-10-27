import React from 'react';
import {Link, Outlet} from 'react-router-dom';
import {Navbar} from 'react-bootstrap';

const NavbarEjemplo = prompt => {
    return (
        <div className="navbar1">
            <Navbar className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid ">
                    <a className="navbar-brand " href="#"></a>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/uploadfile">Cargar datos</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/sueldo/planilla">Sueldos</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </Navbar>
            <section>
                <Outlet></Outlet>
            </section>
        </div>
    );
}

export default NavbarEjemplo;