import React from 'react';

const CrearCampo = ({
  nombreCampo, 
  defaultValue, 
  type,
  lenght,
  onNombreChange, 
  onUnicoChange,
  onTipoChange, 
  onNotNullChange,
  onDefaultValueChange, 
  onLenghtChange,
  onIndexChange,
  onEliminar,
  }) => {
  return (
    <div>
      <label>Nombre del Campo: </label>
      <input
        type="text"
        placeholder="Nombre del campo"
        value={nombreCampo}
        onChange={(e) => onNombreChange(e.target.value)}
      />

      <label>
        Tipo 
        <select 
          onChange={(e) => onTipoChange(e.target.value)}>
          <option value=""></option>
          <option value="STRING">STRING</option>
          <option value="CHAR">CHAR</option>
          <option value="INTEGER">INTEGER</option>
          <option value="REAL">REAL</option>
          <option value="DECIMAL">DECIMAL</option>
          <option value="BOOLEAN">BOOLEAN</option>
          <option value="DATE">DATE</option>
          <option value="ENUM">ENUM</option>
        </select>
      </label>

      <label>
        Es Unico: 
        <input 
        type="checkbox"
        onChange={(e) => onUnicoChange(e.target.checked)}
        />
      </label>

      <label>
        Not Null: 
        <input 
        type="checkbox"
        onChange={(e) => onNotNullChange(e.target.checked)}
        />
      </label>

      <label>
        Es un Indice: 
        <input 
        type="checkbox"
        onChange={(e) => onIndexChange(e.target.checked)}
        />
      </label>

      <label>
        <input 
        type="text"
        placeholder="Default Value"
        value={defaultValue}
        onChange={(e) => onDefaultValueChange(e.target.value)}
        />
      </label>

      {type !== "DATE" && type !== "BOOLEAN" &&
        <label>
          <input 
            type="text"
            placeholder="Longitud"
            value={lenght}
            onChange={(e) => onLenghtChange(e.target.value)}
          />
        </label>
      }
      <button type="button" onClick={onEliminar}>Eliminar Campo</button>
    </div>
  );
};
export default CrearCampo;