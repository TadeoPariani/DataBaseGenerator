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
      router.push(`/modelos?lista=${JSON.stringify(listaModelos2)}`)
    } else {
      alert('Error al crear el modelo');
    }
  };



  return(
    <div className='fixed inset-0 bg-zinc-950 text-white p-4'>
    {listaModelos2.length === 0 ? (
      <div className="text-2xl font-bold text-center mt-4">NO HAY TABLAS CREADAS</div>
    ) : (
      <>
        <h1 className="text-3xl font-bold text-center mb-4">Tablas Creadas</h1>
        <button 
          type="submit"
          onClick={handleSubmit}
          className="block mx-auto bg-teal-950 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
        >
          Crear Tablas
        </button>
        {console.log(listaModelos2)}
        <Tabla listaModelos2={listaModelos2} />
      </>
    )}
  </div>  
  )
}

export default index