import React from 'react'
import { NavLink } from 'react-router-dom'
import './LinkNavegacion.css';

export const LinkNavegacion = ({ruta, texto}) => {
  return (
    <NavLink to={ruta} className="linknavegacioncss">
        {texto}
    </NavLink>
  )
}
