import Tabla from '../../components/Tabla'
import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head'
import Menu from '../../components/Menu';

function index() {
  const router = useRouter();
  const { lista } = router.query;
  let listaModelos = [];

  try{
    listaModelos = JSON.parse(decodeURIComponent(lista));
  } catch (e){
    console.log("error")
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/definirModelos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({listaModelos: listaModelos})
    });

    if (response.ok) {
      alert("Tablas Creadas Correctamente");
      await response.json();
      router.push(`/modelos?lista=${JSON.stringify(listaModelos)}`)
    } else {
      alert('Error Al Crear Las Tablas');
    }
  };

  const generarModelos = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/definirModelos', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      alert("Modelos Generados Correctamente");
      await response.json();
    } else {
      alert('Error Al Generar Los Modelos');
    }
  };
  
  return(
    <div className='fixed inset-0 bg-zinc-950 text-white p-4'>
      <Head>
        <title>DBG</title>
        <meta name="Modelos" content="Modelos" />
      </Head>

      <Menu />
      {listaModelos.length === 0 ? (
        <div className="text-2xl font-bold text-center mt-4">NO HAY TABLAS CREADAS</div>
      ) : (
        <>
          <h1 className="text-3xl font-bold text-center mb-4 m-4">MODELOS CREADOS</h1>
          <button 
            type="submit"
            onClick={handleSubmit}
            className="block mx-auto bg-teal-950 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
          >
            Crear Tablas
          </button>

          <button 
            type="submit"
            onClick={generarModelos}
            className="block mx-auto bg-teal-950 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded m-4"
          >
            Generar Modelos
          </button>
          {console.log(listaModelos)}
          <Tabla listaModelos={listaModelos} />
        </>
      )}
  </div>  
  )
}

export default index