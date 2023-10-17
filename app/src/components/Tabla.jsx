import React from 'react';

const Tabla = (props) => {
    const {listaModelos} = props;
    return (
        <div>
            {listaModelos.map((modelo, index) => (
                <div className="card" key={index}>
                    <h3>{modelo.nombreTabla}</h3>
                </div>
            ))}
        </div>
    );
};


export default Tabla;