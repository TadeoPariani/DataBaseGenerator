import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import TablaDetalle  from '../../components/TablaDetalle';


const ModeloDetalle = () => {
 const router = useRouter();
 const [listaModelos, setListaModelos] = useState([]);

  // if (!router.query.lista) {
  //   return null;
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

  const {nombreTabla} = router.query

  return (
    <div>
      <TablaDetalle nombreTabla={nombreTabla} listaTablas={listaModelos} ></TablaDetalle>
      {/* <Tabla listaModelos={lista}></Tabla> */}
    </div>
  );
};

export default ModeloDetalle;
