import React from 'react';

const TablaDetalle = (props) => {
    const {nombreTabla, listaTablas} = props;
    return (
        <div className="bg-teal-950 text-white p-4 rounded-lg shadow-md w-96 mx-auto mt-4">
            {listaTablas.map((modelo, index) => {
                if (modelo.nombreTabla === nombreTabla) {
                    return(
                        <div key={index} className='p-4 rounded shadow-md text-center'>
                            {modelo.camposTabla.map((campo, index) => 
                                <div key={index} className="border p-4 my-4">
                                    <h3 className="text-xl font-bold mb-2">Nombre del campo: {campo.nombre}</h3>
                                    <p className="mb-1">Type: {campo.tipo}</p>
                                    <p className="mb-1">Unique: {campo.esUnico.toString()}</p>
                                    <p className="mb-1">Null: {campo.NotNull.toString()}</p>
                                    <p className="mb-1">Default Value: {campo.defaultValue}</p>
                                    <p className="mb-1">Length: {campo.lenght}</p>
                                    <p className="mb-1">Indice: {campo.index.toString()}</p>
                                    <p className="mb-1">Modelo Relacionado: {campo.relacion}</p>
                                    <p className="mb-1">Tipo Relacion: {campo.tipoRelacion}</p>
                                    <hr className="my-2 border-t" />
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