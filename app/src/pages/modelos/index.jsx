import Tabla from '../../components/Tabla'
import React, { useState, useEffect } from 'react';

function index() {
    const [listaModelos, setListaModelos] = useState([]);

    useEffect(() => {
        async function obtenerLista() {
          try {
            const response = await fetch('/api/Metodos', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            });
            const data = await response.json();
            const listaModelos = data.data
            setListaModelos(listaModelos)
          } catch (error) {
            console.error('Error al obtener la lista:', error);
          }
        }
        obtenerLista();
    });

    return(
        <div>
            <h1>Tablas Creadas</h1>
            {console.log(listaModelos)}
            <Tabla listaModelos={listaModelos}></Tabla>
      </div>
    )
}

export default index