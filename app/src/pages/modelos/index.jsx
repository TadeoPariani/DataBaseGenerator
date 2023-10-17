import { useState } from 'react';
import { useRouter } from 'next/router'

function index() {
    const router = useRouter()
    const lista = JSON.parse(router.query.lista)

    return(
        <div>
            <ul>
                {lista.map((elemento, index) => (
                <li key={index}>
                    <div>Nombre de la Tabla: {elemento.nombreTabla}</div>
                    <div>Campos de la Tabla: {JSON.stringify(elemento.camposTabla)}</div>
                </li>
                ))}
            </ul>
            <h1>Componente Index</h1>
      </div>
    )
}

export default index