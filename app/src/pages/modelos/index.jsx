import Tabla from '../../components/Tabla'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

function index() {
  const router = useRouter();
  const { lista } = router.query;
  const listaModelos2 = JSON.parse(decodeURIComponent(lista))
  // const [listaModelos, setListaModelos] = useState([]);

  // useEffect(() => {
  //     async function obtenerLista() {
  //       try {
  //         const response = await fetch('/api/definirModelos', {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert(JSON.stringify(listaModelos2))
    const response = await fetch('/api/definirModelos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({listaModelos: listaModelos2})
    });

    // router.push({
    //   pathname: '/modelos',
    // })

    if (response.ok) {
      alert("Se creo Correctamente");
      await response.json();
      router.push(`/modelos?lista=${JSON.stringify(listaModelos)}`)
    } else {
      alert('Error al crear el modelo');
    }
  };



  return(
      <div>
        {listaModelos2.length === 0 ? (
          <div>NO HAY TABLAS CREADAS</div>
        ) : (
          <>
            <h1>Tablas Creadas</h1>
            {/* <button type="submit" onClick={handleSubmit}>Crear Tablas</button> */}
            {console.log(listaModelos2)}
            <Tabla listaModelos2={listaModelos2}></Tabla>
          </>
        )}
    </div>
  )
}

export default index