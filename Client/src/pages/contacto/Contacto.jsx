import './Contacto.css';
import Formulario from './Formulario';

const Contacto = () => (
  <div>
    <h3 className='h3-contacto'>Contacta con nosotros 3DPrint</h3>
    <div className='container-contacto'>
      <div className='c1'>
        <Formulario/>
      </div>
      <div className='c2'>
        <img src="images/imagecontacto.jpeg" alt="imagencontacto" 
          className='image-contact'/>
      </div>
    </div>
  </div>
);

export default Contacto;
