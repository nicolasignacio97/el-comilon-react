import React from 'react'
import { NavLink } from 'react-router-dom'

export const ProfileUser = () => {
  return (
    <div className="list-group">
      <NavLink to={'/perfil/mis_datos'} className="list-group-item list-group-item-action btn-link-perfil">Mis Datos</NavLink>
      <NavLink to={'/perfil/mis_pedios'} className="list-group-item list-group-item-action ">Mis Pedidos</NavLink>
    </div>
  )
}
