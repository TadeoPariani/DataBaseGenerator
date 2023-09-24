import React from 'react';

const CrearCampo = ({ nombreCampo, onNombreChange, onUnicoChange, onEliminar }) => {
  return (
    <div>
      {/* <input
        type="text"
        placeholder="Nombre de la propiedad"
        value={nombreCampo}
        onChange={(e) => onNombreChange(e.target.value)}
      /> */}


      <label>
        Es unico:
        <input 
        type="checkbox"
        onChange={(e) => onUnicoChange(e.target.checked)}
        />
      </label>


      <button type="button" onClick={onEliminar}>Eliminar Propiedad</button>
    </div>
  );
};

export default CrearCampo;