import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../styles/components/buttons-style/BotonMiCuenta.css';

export const BotonMiCuenta = ({ruta, texto}) => {
  return (
    <NavLink to={ruta} className="botonmicuentacss">
        {texto}
    </NavLink>
  );
};
