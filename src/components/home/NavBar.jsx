import React from 'react'
import '../../styles/nav.css'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../actions/auth';
import { LimpiarSesion } from '../../actions/perfil';

export const NavBar = () => {
    const dispatch = useDispatch();
    const { name, rol } = useSelector(state => state.auth);

    const handleLogout = () => {
        dispatch(startLogout());
        dispatch(LimpiarSesion())
    }
    return (
        <div><nav className="navbar navbar-expand-lg navbar-dark bg-danger">
            <div className="container-fluid">
                <NavLink to="/" className="navbar-brand">
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

                        {rol === 'admin' &&
                            <li className="nav-item">
                                <NavLink to="/admin/inicio" className="nav-link" aria-current="page">Administración</NavLink>
                            </li>
                        }
                        <li className="nav-item">
                            <NavLink to="/user" className="nav-link ">{name}</NavLink>
                        </li>
                    </ul>
                    <div className="navDerecha">

                        <button
                            className="btn btn-outline-danger text-start fs-5"
                            style={{ 'color': 'white' }}
                            type="button"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasRight"
                            aria-controls="offcanvasRight">
                            <i className="fa-solid fa-cart-shopping"></i>
                        </button>

                        <div className="row">
                            <div className="col">
                                <button className='btn btn-cerrar-sesion'
                                    onClick={handleLogout}>Cerrar Sesión</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav></div>
    )
}
