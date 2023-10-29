import Head from 'next/head'
import { authMiddleware } from '../utils/authMiddleware';
import GestorCamposModelo from '../components/GestorCamposModelo';
import Footer from '../components/Footer'; 

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

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-white">
    <Head>
      <title>DBG</title>
      <meta name="Home" content="Home" />
    </Head>
    <main className="flex-grow">
      <div className='flex items-center justify-center min-h-screen bg-zinc-950 text-white'>
        <GestorCamposModelo />
      </div>
    </main>
    <footer className='mt-4'>
      <Footer />
    </footer>
  </div>
);}