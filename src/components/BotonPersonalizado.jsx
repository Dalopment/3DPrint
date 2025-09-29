import React from 'react';
import { NavLink } from 'react-router-dom';
import './BotonPersonalizado.css';

export const BotonPersonalizado = ({ texto, ruta, icono: Icono, gap = '0.3rem' }) => {
  return (
    <NavLink to={ruta} className="boton-personalizado" style={{ gap }}>
      {Icono && <Icono className="boton-icono" />}
      {texto}
    </NavLink>
  );
};
