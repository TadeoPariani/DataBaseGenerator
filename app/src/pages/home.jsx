import Head from 'next/head'
import { useState } from 'react';
import CrearCampo from '../components/CrearCampo';
import Tabla from '../components/Tabla';
import { useRouter } from 'next/router'
import Link from 'next/link';

export default function CrearModelo() {
  const router = useRouter()
  const [nombreModelo, setNombre] = useState();
  const [camposModelo, setCampos] = useState([]);
  const [listaModelos, setListaModelos] = useState([])

  const agregarCampo = () => {
    setCampos([...camposModelo, { nombre: '', tipo: '', esUnico: false, NotNull: false}]);
  };

  const agregarModelo = () => {
    setListaModelos([...listaModelos, {nombreTabla:nombreModelo, camposTabla:camposModelo}])
  }

  const eliminarPropiedad = (index) => {
    const nuevasPropiedades = [...camposModelo];
    nuevasPropiedades.splice(index, 1);
    setCampos(nuevasPropiedades);
  };

  const handleNombreChange = (valor, index) => {
    const nuevosCampos = [...camposModelo];
    nuevosCampos[index].nombre = valor;
    setCampos(nuevosCampos);
  };

  const handleUnicoChange = (valor, index) => {
    const nuevosCampos = [...camposModelo];
    nuevosCampos[index].esUnico = valor;
    setCampos(nuevosCampos);
  };

  const handleTipoChange = (valor, index) => {
    const nuevosCampos = [...camposModelo];
    nuevosCampos[index].tipo = valor;
    setCampos(nuevosCampos);
  };

  const handleNotNullChange = (valor, index) => {
    const nuevosCampos = [...camposModelo];
    nuevosCampos[index].NotNull = valor;
    setCampos(nuevosCampos);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert(JSON.stringify(listaModelos))
    const response = await fetch('/api/Metodos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({listaModelos: listaModelos})
    });

    router.push({
      pathname: '/modelos',
      //query: { lista: JSON.stringify(listaModelos) } // Convertimos la lista a una cadena JSON
    })

    if (response.ok) {
      alert("Se creo Correctamente");
    } else {
      alert('Error al crear el modelo');
    }
  };

  return (
    <div>
    <Head>
      <title>Create Next App</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className>
      <form onSubmit={handleSubmit}>
        <div>        
          <label>
            Nombre del Modelo:
            <input
              type="text"
              value={nombreModelo}
              onChange={(e) => setNombre(e.target.value)}
            />
          </label>
        </div>

        {camposModelo.map((campo, index) => (
          <CrearCampo
            key={index}
            nombreCampo={campo.nombre}
            onNombreChange={(valor) => handleNombreChange(valor, index)}
            onTipoChange={(valor) => handleTipoChange(valor, index)}
            onUnicoChange={(valor) => handleUnicoChange(valor, index)}
            onNotNullChange={(valor) => handleNotNullChange(valor, index)}
            onEliminar={() => eliminarPropiedad(index)}
          />
        ))}

        

        <button type="button" onClick={agregarCampo}>Agregar Campo al Modelo</button>
        <button type="button" onClick={agregarModelo}>Crear Modelo</button>
        <button type="submit" onClick={handleSubmit}>Crear Tablas</button>
      </form>
      <Link href={`/modelos?lista=${JSON.stringify(listaModelos)}`}>eeee</Link>
    </main>
    <footer>
    </footer>
  </div>
);
}
