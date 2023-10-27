// GestorCamposModelo.js
import React, { useState } from 'react';
import Head from 'next/head'
import CrearCampo from '../components/CrearCampo';
import { useRouter } from 'next/router'

const GestorCamposModelo = () => {
  const router = useRouter()
  const [nombreModelo, setNombre] = useState("");
  const [camposModelo, setCampos] = useState([]);
  const [listaModelos, setListaModelos] = useState([]);

  const agregarCampo = () => {
    setCampos([...camposModelo,
      {
        nombre: '',
        tipo: 'STRING',
        esUnico: false,
        NotNull: false,
        defaultValue: '',
        lenght: null,
        index: false,
        relacion: '',
        tipoRelacion: ''
      }
    ]);
  };

  const eliminarCampo = (index) => {
    const nuevosCampos = [...camposModelo];
    nuevosCampos.splice(index, 1);
    setCampos(nuevosCampos);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert(JSON.stringify(listaModelos))
    router.push(`/modelos?lista=${encodeURIComponent(JSON.stringify(listaModelos))}`)
  };

  const agregarModelo = () => {
    camposModelo.map((campo, index) => {
      if (nombreModelo === ""){
        alert('Revise los Campos');
      } else {
        const copiaCampos = JSON.parse(JSON.stringify(camposModelo));
        setListaModelos([...listaModelos, {nombreTabla: nombreModelo, camposTabla: copiaCampos}]);
        setCampos([])
        setNombre("")
      }
    })
  };

  const handleCamposChange = (index, field, valor) => {
    const nuevosCampos = [...camposModelo];
    nuevosCampos[index][field] = valor;
    setCampos(nuevosCampos);
  };

  const handleNombreChange = (valor, index) => {
    handleCamposChange(index, 'nombre', valor);
  };
  
  const handleUnicoChange = (valor, index) => {
    handleCamposChange(index, 'esUnico', valor);
  };
  
  const handleIndexChange = (valor, index) => {
    handleCamposChange(index, 'index', valor);
  };

  const handleTipoChange = (valor, index) => {
    handleCamposChange(index, 'tipo', valor);
  };

  const handleNotNullChange = (valor, index) => {
    handleCamposChange(index, 'NotNull', valor);
  };

  const handleDefaultValueChange = (valor, index) => {
    handleCamposChange(index, 'defaultValue', valor);
  };

  const handleLenghtChange = (valor, index) => {
    handleCamposChange(index, 'lenght', valor);
  };

  return (
    <div>
    <Head>
      <title>Home</title>
      <meta name="Home" content="Home" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className>
      <form>
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
            defaultValue={campo.defaultValue}
            type={campo.tipo}
            lenght = {campo.lenght}
            onNombreChange={(valor) => handleNombreChange(valor, index)}
            onTipoChange={(valor) => handleTipoChange(valor, index)}
            onUnicoChange={(valor) => handleUnicoChange(valor, index)}
            onNotNullChange={(valor) => handleNotNullChange(valor, index)}
            onDefaultValueChange={(valor) => handleDefaultValueChange(valor, index)}
            onLenghtChange={(valor) => handleLenghtChange(valor, index)}
            onIndexChange={(valor) => handleIndexChange(valor, index)}
            onEliminar={() => eliminarCampo(index)}
          />
        ))}
        <button type="button" onClick={agregarCampo}>Agregar Campo al Modelo</button>
        <button type="button" onClick={agregarModelo}>Crear Modelo</button>
        <button type="submit" onClick={handleSubmit}>Enviar Tablas</button>
      </form>
    </main>
    <footer>
    </footer>
  </div>
  );
};
export default GestorCamposModelo;