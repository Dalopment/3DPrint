import { MdEmail } from 'react-icons/md';
import { FaPhoneSquareAlt } from 'react-icons/fa';
import { FaLocationArrow } from 'react-icons/fa';
import { BotonBordes } from '../buttons/BotonBordes';
import { NavLink } from 'react-router-dom';
import { LinkNavegacionFooter } from './LinkNavegacionFooter';
import '../../styles/footer-style/Footer.css';




export const Footer = () => {
  return (
    <footer>
        <div className='footer-container'>
            <div className='columna-uno'>
                <a href="mailto:info@3dprint.com">
                    <MdEmail className='icono'/>
                    info@3dprint.com
                </a>
                <a href="tel:000111222">
                    <FaPhoneSquareAlt className='icono'/>
                    680559528
                </a>
                <a href="https://www.google.com/maps?q=Carrer+Font+Baixa+2,+Alfafar,+Valencia" 
                    target='_blank'
                    className='a-location'>
                    <FaLocationArrow className='icono'/>
                    <span>
                            Carrer Font Baixa, 2, <br/>
                            Alfafar, 46910 Valencia                        
                    </span>
                </a>

                <BotonBordes ruta="/contacto" texto="CONTACTAR"/>


            </div>
            <div className='columna-dos'>
                <NavLink to="/">
                    <img className="footer-img" src="/images/logo3dprint.jpg" alt="Logo" />
                </NavLink>
                <p className='texto'>
                    Imprimakers nació de mi pasión por la tecnología 3D.
                    Lo que comenzó como mi proyecto de fin de curso de Desarrollo de Aplicaciones Web (DAW)
                    se convirtió en una tienda de productos relacionados con la impresión 3D,
                    que ahora comparto con clientes de todo el mundo.
                </p>

            </div>


            <div className='columna-tres'>
                <LinkNavegacionFooter ruta='./enviosydevoluciones' texto="Envios"/>
                <LinkNavegacionFooter ruta='./materiales' texto="Materiales Disponibles"/>                
                <LinkNavegacionFooter ruta='./tienda' texto="Tienda"/>
                <LinkNavegacionFooter ruta='./contacto' texto="contacto"/>
                <LinkNavegacionFooter ruta='./micuenta' texto="Mi cuenta"/>
                <div className='logospagos'>
                    <img src="images/logopagos.png" alt="logovisa" />
                </div> 
            </div>
        </div>
    </footer>
  )
}
