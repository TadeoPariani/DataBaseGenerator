import React, { useState } from 'react';

export default function LoginForm({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

// envío de solicitud a la API
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        onLogin(data.username);
      } else {
        const errorData = await response.json();
        alert(errorData.message);
      }
    } catch (error) {
      console.error('Error de autenticación:', error);
      alert('Ocurrió un error durante la autenticación.');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-zinc-950">
    <form onSubmit={handleSubmit} className="bg-teal-950 text-white p-6 rounded-lg shadow-md w-96">
      <div className="mb-4">
        <label className="block text">Nombre de usuario:</label>
        <input type="text" value={username} onChange={handleUsernameChange} className="w-full p-3 rounded border text-white bg-zinc-950" />
      </div>
      <div className="mb-4">
        <label className="block text">Contraseña:</label>
        <input type="password" value={password} onChange={handlePasswordChange} className="w-full p-3 rounded border text-white bg-zinc-950" />
      </div>
      <div>
        <button type="submit" className="w-full bg-indigo-500 hover:bg-indigo-700 text-black p-3 rounded bg-stone-400">
          Iniciar sesión
        </button>
      </div>
    </form>
  </div>
  );
}

