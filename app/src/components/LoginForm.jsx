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

  const handleSubmit = (e) => {
    e.preventDefault();

    // Credenciales
    if (username === 'Todler' && password === '1234') {
      onLogin(username);
    } else {
      alert('Credenciales incorrectas');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre de usuario:</label>
        <input type="text" value={username} onChange={handleUsernameChange} />
      </div>
      <div>
        <label>Contraseña:</label>
        <input type="password" value={password} onChange={handlePasswordChange} />
      </div>
      <div>
        <button type="submit">Iniciar sesión</button>
      </div>
    </form>
  );
}
