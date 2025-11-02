import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaLink } from 'react-icons/fa';
import '../../styles/footer-style/LinkNavegacionFooter.css';

export const LinkNavegacionFooter = ({ruta, texto}) => {
  return (
    <NavLink to={ruta} className='linknavegacionfootercss'>
        <FaLink className='iconolinknavegacionfooter'/>
        {texto}
    </NavLink>
  )
}
