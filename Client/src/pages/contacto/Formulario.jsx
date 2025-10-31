import Form from 'react-bootstrap/Form';
import { BotonGenerico } from '../../components/buttons/BotonGenerico';

function Formulario() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Correo Electrónico </Form.Label>
        <Form.Control type="email" placeholder="nombre@ejemplo.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" rows={3} 
        placeholder='¿Cómo podemos ayudarle?'/>
      </Form.Group>
      <BotonGenerico texto="Enviar" type="submit"/>
    </Form>
  );
}

export default Formulario;