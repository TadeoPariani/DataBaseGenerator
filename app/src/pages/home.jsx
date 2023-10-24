import Head from 'next/head'
import { useState } from 'react';
import CrearCampo from '../components/CrearCampo';
import Link from 'next/link';
import { authMiddleware } from '../utils/authMiddleware';
import { useRouter } from 'next/router'

export async function getServerSideProps(context) {
  const auth = await authMiddleware(context);
  
  if (auth.error) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: {
      user: auth.user,
    },
  };
}

export default function CrearModelo() {
  const router = useRouter()
  const [nombreModelo, setNombre] = useState("");
  const [camposModelo, setCampos] = useState([]);
  const [listaModelos, setListaModelos] = useState([])

  const agregarCampo = () => {
    setCampos([...camposModelo,
      {
        nombre: '',
        tipo: '',
        esUnico: false,
        NotNull: false,
        defaultValue: '',
        lenght: null,
        index: false
      }
    ]);
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

  const handleIndexChange = (valor, index) => {
    const nuevosCampos = [...camposModelo];
    nuevosCampos[index].index = valor;
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

  const handleDefaultValueChange = (valor, index) => {
    const nuevosCampos = [...camposModelo];
    nuevosCampos[index].defaultValue = valor;
    setCampos(nuevosCampos);
  };

  const handleLenghtChange = (valor, index) => {
    const nuevosCampos = [...camposModelo];
    nuevosCampos[index].lenght = valor;
    setCampos(nuevosCampos);
  };

  const handleSubmit = async (e) => {
    // e.preventDefault();
    // alert(JSON.stringify(listaModelos))
    // const response = await fetch('/api/definirModelos', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({listaModelos: listaModelos})
    // });

    router.push(`/modelos?lista=${encodeURIComponent(JSON.stringify(listaModelos))}`)

    // router.push({
    //   pathname: '/modelos',
    // })

    if (response.ok) {
      alert("Se creo Correctamente");
      await response.json();
      router.push(`/modelos?lista=${JSON.stringify(listaModelos)}`)
    } else {
      alert('Error al crear el modelo');
    }
  };

  return (
    <div>
    <Head>
      <title>Home</title>
      <meta name="Home" content="Home" />
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
            onEliminar={() => eliminarPropiedad(index)}
          />
        ))}

        <button type="button" onClick={agregarCampo}>Agregar Campo al Modelo</button>
        <button type="button" onClick={agregarModelo}>Crear Modelo</button>
        <button type="submit" onClick={handleSubmit}>Ver Tablas</button>
      </form>
      {/* <Link href={`/modelos?lista=${JSON.stringify(listaModelos)}`}>VER TABLAS</Link> */}
    </main>
    <footer>
    </footer>
  </div>
);}