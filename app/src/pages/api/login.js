import jwt from 'jsonwebtoken';
import { serialize } from 'cookie';
const secretKey = 'tu_clave_secreta';

export default async (req, res) => {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    // Verifica las credenciales 
    if (username === 'Todler' && password === '1234') {
      // si las credenciales son válidas, genera el token 
      const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });

      // cookie de respuesta
      const cookie = serialize('token', token, {
        httpOnly: true,
        maxAge: 3600, // segundos de duracion de la cookie
        sameSite: 'strict',
        path: '/',
      });
      res.setHeader('Set-Cookie', cookie);

      // 200
      res.status(200).json({ message: 'Inicio de sesión exitoso', username });
    } else {
      // 401 
      res.status(401).json({ message: 'Credenciales incorrectas' });
    }
  } else {
    // 405 
    res.status(405).json({ message: 'Método no permitido' });
  }
};
