import jwt from 'jsonwebtoken';
import { serialize, parse } from 'cookie';

const secretKey = 'tu_clave_secreta';

export async function authMiddleware(ctx) {
  const cookies = parse(ctx.req.headers.cookie || '');

  if (cookies.token) {
    try {
      const decoded = jwt.verify(cookies.token, secretKey);
      return { user: decoded.username };
    } catch (error) {
      return { error: 'Token no válido' };
    }
  } else {
    return { error: 'No estás autenticado' };
  }
}
