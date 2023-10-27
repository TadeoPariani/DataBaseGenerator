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
      </div>
    </main>
    <footer>
    </footer>
  </div>
);}


