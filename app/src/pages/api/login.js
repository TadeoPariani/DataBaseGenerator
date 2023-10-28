import jwt from 'jsonwebtoken';
import { serialize } from 'cookie';
const secretKey = 'tu_clave_secreta';

export default async (req, res) => {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    // Verifica las credenciales 
    if (username === 'Todler' && password === '1234') {
      const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });
      const cookie = serialize('token', token, {
        httpOnly: true,
        maxAge: 3600, 
        sameSite: 'strict',
        path: '/',
      });
      res.setHeader('Set-Cookie', cookie);
      res.status(200).json({ message: 'Inicio de sesión exitoso', username });
    } else {
      res.status(401).json({ message: 'Credenciales incorrectas' });
    }
  } else {
    res.status(405).json({ message: 'Método no permitido' });
  }
};
