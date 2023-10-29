import { useRouter } from 'next/router';
import TablaDetalle  from '../../components/TablaDetalle';
import Head from 'next/head'

const ModeloDetalle = () => {
  const router = useRouter();
  const { nombreTabla, lista } = router.query;
  let listaModelos = [];

  try{
    listaModelos = JSON.parse(decodeURIComponent(lista));
  } catch (e){
    console.log("error")
  }

  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-white">
    <Head>
      <title>DBG</title>
      <meta name="Modelos Creados" content="Modelos Creadas" />
    </Head>

    <h1 className="text-3xl font-bold text-center text-white pt-14">{nombreTabla}</h1>
    <TablaDetalle nombreTabla={nombreTabla} listaTablas={listaModelos} />
    <footer>
    </footer>
  </div>
  
  );
};

export default ModeloDetalle;