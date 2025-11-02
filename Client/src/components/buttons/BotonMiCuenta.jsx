import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../styles/buttons-style/BotonMiCuenta.css';

export const BotonMiCuenta = ({ruta, texto}) => {
  return (
    <NavLink to={ruta} className="botonmicuentacss">
        {texto}
    </NavLink>
  );
};
