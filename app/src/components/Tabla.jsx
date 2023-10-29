import React from 'react';
import Link from 'next/link';

const Tabla = (props) => {
    const {listaModelos: listaModelos} = props;
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5 mx-3">
        {listaModelos.map((modelo, index) => (
          <div key={index} className="bg-blue-500 p-4 rounded shadow-md text-center">
            <h1 className="text-black font-semibold mb-2 text-2xl">{modelo.nombreTabla}</h1>
            <Link
              href={`/modelos/${modelo.nombreTabla}?lista=${encodeURIComponent(JSON.stringify(listaModelos))}`}
              className="text-black hover:underline">
              Ver Tabla
            </Link>
          </div>
        ))}
      </div>
    );
};

export default Tabla;