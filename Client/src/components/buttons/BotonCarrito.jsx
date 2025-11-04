import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaShoppingBag } from 'react-icons/fa';
import '../../styles/components/buttons-style/BotonCarrito.css';

export const BotonCarrito = ({ruta, texto}) => {
  return (
    <NavLink to={ruta} className="botoncarritocss">
      <FaShoppingBag className='icono-carrito' size={22}/>
        {texto}
    </NavLink>
  );
};
