import React from 'react';
import Link from 'next/link';

const Tabla = (props) => {
    const {listaModelos2} = props;

    // const onTablaRelacionChange = (valor, index) => {
    //     alert(valor)
    // };

    return (
        <div>
            {listaModelos2.map((modelo, index) => (
                <div key={index} className='card'>
                <h2>{modelo.nombreTabla}</h2>
                <Link href={`/modelos/${modelo.nombreTabla}?lista=${encodeURIComponent(JSON.stringify(listaModelos2))}`}>Ver Tabla</Link>
                {/* <label>
                    RELACION
                    <select
                        onChange={(e) => onTablaRelacionChange(e.target.value)}>
                        {listaModelos2.map((modelo) => (
                            <option value={modelo.nombreTabla}> {modelo.nombreTabla}</option>
                        ))} 
                    </select>
                </label>
                <label>
                    TIPO RELACION
                    <select>
                    <option value="1-1">1-1</option>
                    <option value="1-n">1-n</option>
                    <option value="n-n"></option>
                    </select>
                </label> */}
                </div>
            ))}
        </div>
    );
};

export default Tabla;