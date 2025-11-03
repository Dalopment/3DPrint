import { useState } from "react";
import "../../../styles/materiales-style/MaterialCard.css";

export const MaterialCard = ({ imagen, titulo, descripcion, info }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="container-materialcard">
        <img src={imagen} alt={titulo} className="image-card" />

        <div className="text-card">
          <h3>{titulo}</h3>
          <p>{descripcion}</p>
        </div>

        <div className="mas-info" onClick={() => setShowModal(true)}>
          <span>+info</span>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{titulo}</h2>
            <p>{info}</p>
            <button className="close-btn" onClick={() => setShowModal(false)}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </>
  );
};
