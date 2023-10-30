import React, { useState, Suspense } from 'react';
import { useRouter } from 'next/router'

// Dynamic HTML Streaming (DHS)
const CrearCampo = React.lazy(() => import('../components/CrearCampo'));

const GestorCamposModelo = () => {
  const router = useRouter()
  const [nombreModelo, setNombre] = useState("");
  const [camposModelo, setCampos] = useState([]);
  const [listaModelos, setListaModelos] = useState([]);

  const agregarCampo = () => {
    setCampos([...camposModelo,
      {
        nombre: '',
        tipo: '',
        esUnico: false,
        NotNull: false,
        defaultValue: '',
        lenght: null,
        index: false,
        relacion: null,
        tipoRelacion: null
      }]);
  };

  const eliminarCampo = (index) => {
    const nuevosCampos = [...camposModelo];
    nuevosCampos.splice(index, 1);
    setCampos(nuevosCampos);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    router.push(`/modelos?lista=${encodeURIComponent(JSON.stringify(listaModelos))}`)
  };

  const agregarModelo = () => {
    camposModelo.map((campo, index) => {
      if (nombreModelo === "" || campo.tipo === "" || campo.nombre === ""){
        alert('Revise los Campos');
      } else {
        const copiaCampos = JSON.parse(JSON.stringify(camposModelo));
        setListaModelos([...listaModelos, {nombreTabla: nombreModelo, camposTabla: copiaCampos}]);
        setCampos([])
        setNombre("")
      }})
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

  const handleRelacionChange = (valor, index) => {
    handleCamposChange(index, 'relacion', valor);
  };

  const handleTipoRelacionChange = (valor, index) => {
    handleCamposChange(index, 'tipoRelacion', valor);
  };

  return (
    <div>
    <main className>
      <form>
        <div className='mt-4 ml-4'>        
          <label>
            Nombre del Modelo:
            <input
              type="text"
              value={nombreModelo}
              className="text-black p-1 rounded border mb-1 mx-2"
              onChange={(e) => setNombre(e.target.value)}
            />
          </label>
        </div>

        {camposModelo.map((campo, index) => ( 
          <Suspense fallback={<div>Cargando...</div>}>
            <CrearCampo
              key={index}
              listaModelos={listaModelos}
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
              onRelacionChange={(valor) => handleRelacionChange(valor, index)}
              onTipoRelacionChange={(valor) => handleTipoRelacionChange(valor, index)}
              onEliminar={() => eliminarCampo(index)}
            />
          </Suspense>
        ))}
        <button type="button"
        onClick={agregarCampo}
        className="bg-teal-950 hover:bg-indigo-700 text-white p-3 rounded my-3 mx-3">Agregar Campo al Modelo</button>

        <button type="button" 
        onClick={agregarModelo}
        className="bg-teal-950 hover:bg-indigo-700 text-white p-3 rounded my-3 mx-3">Crear Modelo</button>

        <button type="submit"
        onClick={handleSubmit}
        className="bg-teal-950 hover:bg-indigo-700 text-white p-3 rounded my-3 mx-3">Ver Tablas</button>
      </form>
    </main>
    <footer>
    </footer>
  </div>
  );
};
export default GestorCamposModelo;