import React, { useState } from 'react';
import Head from 'next/head';
import LoginForm from '../components/LoginForm';

export default function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUsername, setLoggedInUsername] = useState('');

  const handleLogin = (username) => {
    setIsLoggedIn(true);
    setLoggedInUsername(username);
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
          <p>Aquí puedes poner el contenido que se mostrará después del inicio de sesión.</p>
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
