import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import { useState } from 'react';
import CrearCampo from '../components/CrearCampo';

export default function CrearModelo() {
  const [nombre, setNombre] = useState('');
  const [Campos, setCampos] = useState([{ nombre: ''}]);

  const agregarCampo = () => {
    setCampos([...Campos, { nombre: '', tipo: '', esUnico : false }]);
  };

  const eliminarPropiedad = (index) => {
    const nuevasPropiedades = [...Campos];
    nuevasPropiedades.splice(index, 1);
    setCampos(nuevasPropiedades);
  };

  const handleNombreChange = (valor, index) => {
    const nuevosCampos = [...Campos];
    nuevosCampos[index].nombre = valor;
    setCampos(nuevosCampos);
  };

  const handleUnicoChange = (valor, index) => {
    const nuevosCampos = [...Campos];
    nuevosCampos[index].esUnico = valor;
    setCampos(nuevosCampos);
  };

  const handleTipoChange = (valor, index) => {
    const nuevosCampos = [...Campos];
    nuevosCampos[index].tipo = valor;
    setCampos(nuevosCampos);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/crearModelo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nombre, campos: Campos }),
    });

    if (response.ok) {
      alert("Se creo Correctamente");
    } else {
      alert('Error al crear el modelo');
    }
    // setCampos([{ nombre: '', esUnico: '' },]);
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
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </label>
        </div>

        {Campos.map((campo, index) => (
          <CrearCampo
            key={index}
            nombreCampo={campo.nombre}
            onNombreChange={(valor) => handleNombreChange(valor, index)}
            onTipoChange={(valor) => handleTipoChange(valor, index)}
            onUnicoChange={(valor) => handleUnicoChange(valor, index)}
            onEliminar={() => eliminarPropiedad(index)}
          />
        ))}
        <button type="button" onClick={agregarCampo}>Agregar Campo al Modelo</button>
        <button type="submit" onClick={handleSubmit}>Crear Modelo</button>
      </form>
    </main>

    <footer>

    </footer>
  </div>
);
}
