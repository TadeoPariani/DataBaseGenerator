import Head from 'next/head'
import { authMiddleware } from '../utils/authMiddleware';
import GestorCamposModelo from '../components/GestorCamposModelo';

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
  return (
    <div className="flex items-center justify-center h-screen bg-zinc-950 text-white">
    <Head>
      <title>Home</title>
      <meta name="Home" content="Home" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className>
      <div>
        <GestorCamposModelo/>
        <button type="button"
        onClick={agregarCampo}
        className="bg-teal-950 hover:bg-indigo-700 text-white p-3 rounded my-3 mx-3">Agregar Campo al Modelo</button>

        <button type="button" 
        onClick={agregarModelo}
        className="bg-teal-950 hover:bg-indigo-700 text-white p-3 rounded my-3 mx-3">Crear Modelo</button>

        <button type="submit"
        onClick={handleSubmit}
        className="bg-teal-950 hover:bg-indigo-700 text-white p-3 rounded my-3 mx-3">Ver Tablas</button>
      </div>

    </main>
    <footer>
    </footer>
  </div>
);}


