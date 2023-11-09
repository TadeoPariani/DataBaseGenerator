import React from 'react';

const CrearCampo = ({
  nombreCampo, 
  listaModelos,
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
  onRelacionChange,
  onTipoRelacionChange,
  onEliminar,
  }) => {
    
  return (
    <div className='bg-teal-900 text-white p-4 rounded-lg shadow-md w-200 mx-auto mt-4 ml-4'>
      <label>Nombre del Campo: </label>
      <input
        type="text"
        placeholder="Nombre del campo"
        value={nombreCampo}
        onChange={(e) => onNombreChange(e.target.value)}
        className="text-black p-1 rounded border mb-1 mx-2"
      />

      <label
      className="text-white mb-1 mx-3">
        Tipo:
      </label>  
      <select className='text-black mb-1 mx-3 rounded-lg'
        onChange={(e) => onTipoChange(e.target.value)}>
        <option value=""></option>
        <option value="STRING">STRING</option>
        <option value="CHAR">CHAR</option>
        <option value="TEXT">TEXT</option>
        <option value="INTEGER">INTEGER</option>
        <option value="FLOAT">FLOAT</option>
        <option value="REAL">REAL</option>
        <option value="DECIMAL">DECIMAL</option>
        <option value="BOOLEAN">BOOLEAN</option>
        <option value="DATE">DATE</option>
        <option value="TIME">TIME</option>
        <option value="ENUM">ENUM</option>
      </select>
      

      <label>
        Es Unico: 
        <input 
        type="checkbox"
        onChange={(e) => onUnicoChange(e.target.checked)}
        className="p-1 rounded border mb-1 mx-3"
        />
      </label>

      <label>
        Not Null: 
        <input 
        type="checkbox"
        onChange={(e) => onNotNullChange(e.target.checked)}
        className="p-1 rounded border mb-1 mx-3"
        />
      </label>

      <label>
        Es un Indice: 
        <input 
        type="checkbox"
        onChange={(e) => onIndexChange(e.target.checked)}
        className="p-1 rounded-border mb-1 mx-3"
        />
      </label>

      <div className='p-4 rounded-lg shadow-md w-200 mx-auto mt-4'>
        <label>
          <input 
          type="text"
          placeholder="Default Value"
          value={defaultValue}
          onChange={(e) => onDefaultValueChange(e.target.value)}
          className=" text-black p-1 rounded border mb-1 mx-3"
          />
        </label>

        {type !== "DATE" && type !== "BOOLEAN" &&
          <label>
            <input 
              type="text"
              placeholder="Longitud"
              value={lenght}
              onChange={(e) => onLenghtChange(e.target.value)}
              className="text-black p-1 rounded border mb-1 mx-3"
            />
          </label>
        }
        <button type="button" onClick={onEliminar}
        className="bg-red-500 p-1 rounded border mb-1 mx-3">Eliminar Campo</button>
      </div>

      <div>
        <label  >
          RELACION
          <select className='text-black mb-1 mx-3 mt-3 rounded-lg'
              onChange={(e) => onRelacionChange(e.target.value)} >
              <option value=""></option>
              {listaModelos.map((modelo) => (
                  <option className="text-blue-600 hover:underline" value={modelo.nombreTabla}> {modelo.nombreTabla}</option>
              ))} 
          </select>
        </label>

        <label>
          TIPO RELACION
            <select className='text-black mb-1 mx-3 mt-3 rounded-lg' 
            onChange={(e) => onTipoRelacionChange(e.target.value)}>
            <option value=""></option>
            <option value="1-1">1-1</option>
            <option value="1-n">1-n</option>
            <option value="n-n">n-n</option>
          </select>
        </label> 
      </div>
    </div>
  );
};
export default CrearCampo;