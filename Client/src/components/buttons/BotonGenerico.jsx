import './BotonGenerico.css';


export const BotonGenerico = ({texto, onClick, type="button"}) => {
  return (
    <button
        className='boton-generico'
        type={type}
        onClick={onClick}
    >
        {texto}
    </button>
  )
}
