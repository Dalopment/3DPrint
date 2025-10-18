import React from 'react'
import { NavLink } from 'react-router-dom'
import './BotonBordes.css';

export const BotonBordes = ({ruta, texto}) => {
  return (
    <NavLink to={ruta} className="botonbordescss">
        {texto}
    </NavLink>
  );
};
