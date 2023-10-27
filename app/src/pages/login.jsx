import React, { useState, Suspense } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

// Dynamic HTML Streaming (DHS)
const LoginForm = React.lazy(() => import('../components/LoginForm'));

export default function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUsername, setLoggedInUsername] = useState('');
  const router = useRouter();

  const handleLogin = (username) => {
    setIsLoggedIn(true);
    setLoggedInUsername(username);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setLoggedInUsername('');
    router.push('/login'); 
  };

  return (
    <div className="flex items-center justify-center h-screen bg-zinc-950 text-white">
      <Head>
        <title>DBG</title>
        <meta name="Login" content="Inicia sesión" />
      </Head>

      {isLoggedIn ? (
        <div>
          <h1 className="text-4xl font-bold mt-4 mb-3">Bienvenido, {loggedInUsername}.</h1>
          <p>
            <button onClick={() => router.push('/home')} className="bg-cyan-850 hover:bg-blue-700 text-white p-4 rounded mx-3 mr-8">
              Home
            </button>
            <button onClick={handleLogout} className="bg-amber-850 hover:bg-red-700 text-white p-4 rounded mx-3">
              Cerrar Sesión
            </button>
          </p>
        </div>
      ) : (
        <div>
        <Suspense fallback={<div>Cargando...</div>}>
          <LoginForm onLogin={handleLogin} />
        </Suspense>
        </div>
      )}
    </div>
  );
}
