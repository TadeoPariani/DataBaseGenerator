import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import TablaDetalle  from '../../components/modelos/TablaDetalle';

const ModeloDetalle = () => {
  const router = useRouter();
  const { nombreTabla, lista } = router.query;
  const listaModelos = JSON.parse(decodeURIComponent(lista))

  //LO DE LA API
  //  const [listaModelos, setListaModelos] = useState([]);
  // useEffect(() => {
  //   async function obtenerLista() {
  //     try {
  //       const response = await fetch('/api/Metodos', {
  //           method: 'GET',
  //           headers: { 'Content-Type': 'application/json' },
  //       });
  //       const data = await response.json();
  //       const listaModelos = data.data
  //       setListaModelos(listaModelos)
  //     } catch (error) {
  //       console.error('Error al obtener la lista:', error);
  //     }
  //   }
  //   obtenerLista();
  // });

  return (
    <div>
      <h1>{nombreTabla}</h1>
      <TablaDetalle nombreTabla={nombreTabla} listaTablas={listaModelos} ></TablaDetalle>
    </div>
  );
};

export default ModeloDetalle;