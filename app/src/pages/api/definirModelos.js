import { crearModelo } from '../../models/crearModelo';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const Modelo = crearModelo(req.body);
    res.status(200).json({ message: 'Modelo creado exitosamente'});
  } else {
    res.status(405).json({ message: "ERROR EN EL SERVIDOR"});
  }
} 