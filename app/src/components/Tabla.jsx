import React from 'react';
import Link from 'next/link';

const Tabla = (props) => {
    const {listaModelos2: listaModelos} = props;

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5 mb-5 mx-3">
        {listaModelos.map((modelo, index) => (
          <div key={index} className="bg-gray-200 p-4 rounded shadow-md">
            <h2 className="text-black xl font-semibold mb-2">{modelo.nombreTabla}</h2>
            <Link
              href={`/modelos/${modelo.nombreTabla}?lista=${encodeURIComponent(JSON.stringify(listaModelos))}`}
              className="text-blue-600 hover:underline">
              Ver Tabla
            </Link>
          </div>
        ))}
      </div>
    );
};

export default Tabla;