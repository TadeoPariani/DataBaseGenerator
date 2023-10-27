import Tabla from '../../components/Tabla'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

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
    alert(JSON.stringify(listaModelos))
    const response = await fetch('/api/definirModelos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({listaModelos: listaModelos})
    });

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
      {listaModelos.length === 0 ? (
        <div>NO HAY TABLAS CREADAS</div>
      ) : (
        <>
          <h1>Tablas Creadas</h1>
          <button type="submit" onClick={handleSubmit}>Crear Tablas</button>
          {console.log(listaModelos)}
          <Tabla listaModelos2={listaModelos}></Tabla>
        </>
      )}
    </div>
  )
}

export default index