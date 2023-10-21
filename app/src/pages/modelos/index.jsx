import Tabla from '../../components/Tabla'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';


function index() {
    const router = useRouter();
    const [listaModelos, setListaModelos] = useState([]);
    const { lista } = router.query;
    const listaModelos2 = JSON.parse(lista)

    // useEffect(() => {
    //     async function obtenerLista() {
    //       try {
    //         const response = await fetch('/api/Metodos', {
    //             method: 'GET',
    //             headers: { 'Content-Type': 'application/json' },
    //         });
    //         const data = await response.json();
    //         const listaModelos = data.data
    //         setListaModelos(listaModelos)
    //       } catch (error) {
    //         console.error('Error al obtener la lista:', error);
    //       }
    //     }
    //     obtenerLista();
    // });

    return(
        <div>

          {/* {listaModelos2.length === 0 ? (
            <div>Cargando...</div>
          ) : ( */}
            <>
              <h1>Tablas Creadas</h1>
              {console.log(listaModelos2)}
              <Tabla listaModelos2={listaModelos2}></Tabla>
            </>
          
           {/* {listaModelos2.map((modelo, index) => (
            <div key={index}>
              <h2>{modelo.nombreTabla}</h2>
              <ul>
                {modelo.camposTabla.map((campo, campoIndex) => (
                  <li key={campoIndex}>{campo.nombre}</li>
                ))}
              </ul>
            </div>
          ))} */}
      </div>
    )
}

export default index