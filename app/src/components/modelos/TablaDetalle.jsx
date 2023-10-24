import React from 'react';

const TablaDetalle = (props) => {
    const {nombreTabla, listaTablas} = props;
    return (
        <div>
            {listaTablas.map((modelo, index) => {
                if (modelo.nombreTabla === nombreTabla) {
                    return(
                        <div key={index}>
                            {modelo.camposTabla.map((campo, index) => 
                                <div key={index}>
                                    <h3>Nombre del campo: {campo.nombre}</h3>
                                    <h3>Type: {campo.tipo}</h3>
                                    <h3>Unique: {campo.esUnico.toString()}</h3>
                                    <h3>Null: {campo.NotNull.toString()}</h3>
                                    <h3>Default Value: {campo.defaultValue}</h3>
                                    <h3>Lenght: {campo.lenght}</h3>
                                    <h3>Indice: {campo.index.toString()}</h3>
                                    <p>-------------------------------------------------</p>
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