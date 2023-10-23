import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import LoginForm from '../components/LoginForm';

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
    <div>
      <Head>
        <title>Iniciar sesión</title>
        <meta name="description" content="Inicia sesión" />
      </Head>

      {isLoggedIn ? (
        <div>
          <h2>Bienvenido, {loggedInUsername}.</h2>
          <p>
            <button onClick={() => router.push('/home')}>Home</button>
            <button onClick={handleLogout}>Cerrar Sesión</button>
          </p>
        </div>
      ) : (
        <div>
          <h2>Inicio de sesión</h2>
          <LoginForm onLogin={handleLogin} />
        </div>
      )}
    </div>
  );
}
