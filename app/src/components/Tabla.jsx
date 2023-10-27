import React from 'react';
import Link from 'next/link';

const Tabla = (props) => {
    const {listaModelos2} = props;

    // const onTablaRelacionChange = (valor, index) => {
    //     alert(valor)
    // };

    {/* <label>
      RELACION
      <select
          onChange={(e) => onTablaRelacionChange(e.target.value)}>
          {listaModelos2.map((modelo) => (
              <option value={modelo.nombreTabla}> {modelo.nombreTabla}</option>
          ))} 
      </select>
  </label>
  <label>
      TIPO RELACION
      <select>
      <option value="1-1">1-1</option>
      <option value="1-n">1-n</option>
      <option value="n-n"></option>
      </select>
  </label> */}

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5 mb-5 mx-3">
        {listaModelos2.map((modelo, index) => (
          <div key={index} className="bg-gray-200 p-4 rounded shadow-md">
            <h2 className="text-black xl font-semibold mb-2">{modelo.nombreTabla}</h2>
            <Link
              href={`/modelos/${modelo.nombreTabla}?lista=${encodeURIComponent(JSON.stringify(listaModelos2))}`}
              className="text-blue-600 hover:underline"
            >
              Ver Tabla
            </Link>
          </div>
        ))}
      </div>
    );
};

export default Tabla;

