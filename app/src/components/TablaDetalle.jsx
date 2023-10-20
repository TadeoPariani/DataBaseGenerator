import React from 'react';
import { useRouter } from 'next/router';

const TablaDetalle = (props) => {
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
                    return null;
                }
            })}
        </div>
    );
};

export default TablaDetalle;