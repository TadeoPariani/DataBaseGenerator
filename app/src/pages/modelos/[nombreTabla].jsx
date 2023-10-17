import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Tabla  from '../../components/Tabla';


const ModeloDetalle = () => {
  const router = useRouter();
  const { nombreTabla } = router.query;

  return (
    <div>
      <h1>{nombreTabla}</h1>
      <Tabla></Tabla>
    </div>
  );
};

export default ModeloDetalle;
