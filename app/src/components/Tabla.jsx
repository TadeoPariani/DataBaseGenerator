import React from 'react';
import Link from 'next/link';

const Tabla = (props) => {
    const {listaModelos2} = props;

    return (
        <div>
            {listaModelos2.map((modelo, index) => (
                <div key={index} className='card'>
                <h2>{modelo.nombreTabla}</h2>
                <Link href={`/modelos/${modelo.nombreTabla}?lista=${encodeURIComponent(JSON.stringify(listaModelos2))}`}>Ver Tabla</Link>
                </div>
            ))}
        </div>
    );
};

export default Tabla;