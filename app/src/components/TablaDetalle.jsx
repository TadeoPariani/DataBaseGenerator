import React from 'react';

const TablaDetalle = (props) => {
    const {nombreTabla, listaTablas} = props;
    return (
        <div className="bg-teal-950 text-white p-4 rounded-lg shadow-md w-96 mx-auto mt-4">
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
                                    <h3>Modelo Relacionado: {campo.relacion}</h3>
                                    <h3>TipoRelacion: {campo.tipoRelacion}</h3>
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