import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Tabla = (props) => {
    const router = useRouter();
    const {listaModelos} = props;

    return (
        <div>
            {listaModelos.map((modelo, index) => (
                <div className="card" key={index}>
                    <h3>{modelo.nombreTabla}</h3>
                    <Link href={`/modelos/${modelo.nombreTabla}`}>Ver Tabla</Link>
                </div>
            ))}
        </div>
    );
};


export default Tabla;