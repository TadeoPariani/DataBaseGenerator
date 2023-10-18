import { useRouter } from 'next/router'
import Tabla from '../../components/Tabla'
import React, { useState, useEffect } from 'react';

function index() {
    const router = useRouter()
    const [listaModelos, setListaModelos] = useState([]);

    // if (!router.query.lista) {
    //     return null;
    // }

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

    // const lista = JSON.parse(router.query.lista)

    return(
        <div>
            <h1>Tablas Creadas</h1>
            
            <Tabla listaModelos={listaModelos}></Tabla>
            {/* <ul>
                {listaModelos.map((modelo, index) => (
                <li key={index}>{modelo.camposTabla}</li>
                ))}
            </ul> */}
      </div>
    )
}

export default index