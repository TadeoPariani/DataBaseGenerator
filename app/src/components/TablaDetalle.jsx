import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const TablaDetalle = (props) => {
    const router = useRouter();
    const {nombreTabla, listaTablas} = props;

    return (
        <div>
            {listaTablas.map((modelo, index) => {
                if (modelo.nombreTabla === nombreTabla) {
                    return(
                        <div key={index}>
                            <h1>{nombreTabla}</h1>
                            {modelo.camposTabla.map((campo, index) => 
                                <div key={index}>
                                    <h3>{campo.nombre}</h3>
                                    <h3>{campo.tipo}</h3>
                                    <h3>{campo.esUnico}</h3>
                                </div>
                            )}
                        </div>
                    )} else {
                    return null; // Si no coincide, no se renderiza nada
                    }
            })}



            {/* {listaTablas.map((modelo, index) => (
                <div className="card" key={index}>
                    <h3>{modelo.nombreTabla}</h3>
                    {modelo.camposTabla.map((campo, index) =>
                        <div key={index}> 
                            <h3>{campo.nombre}</h3>
                            <h3>{campo.tipo}</h3>
                            <h3>{campo.esUnico}</h3>
                        </div>
                    )}
                </div>
            ))} */}
        </div>
    );
};

export default TablaDetalle;