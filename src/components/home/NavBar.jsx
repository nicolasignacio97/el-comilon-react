import React from 'react'
import '../../styles/nav.css'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
    return (
        <div><nav className="navbar navbar-expand-lg navbar-dark bg-danger">
            <div className="container-fluid">
                <NavLink to="#" className="navbar-brand">
                    <img className='img' src="/assets/img/logo-admin.png" alt='img-login' />
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link" aria-current="page">Inicio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/perfil" className="nav-link" aria-current="page">Perfil</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/auth/login" className="nav-link" aria-current="page">registro</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to="/auth/login" className="nav-link" aria-current="page">Login</NavLink>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Buscar" />
                        <button className="btn btn-outline-light" type="submit">Buscar</button>
                    </form>
                </div>
            </div>
        </nav></div>
    )
}
