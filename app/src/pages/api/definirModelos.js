import { definirModelo } from '../../models/definirModelo';

let lista = undefined;

export default function handler(req, res) {
  if (req.method === 'POST') {
    lista = req.body;
    const Modelo = definirModelo(req.body);
    res.status(200).json({ message: 'Modelo creado exitosamente'});
    console.log("ESTO ES LA LISTA EN POST: ----- ", lista)
  } else if (req.method === 'GET') {
    // console.log("ESTO ES LA LISTA EN GET: ----- ", lista)
    res.json({ message: "ok", data: lista.listaModelos });
  } else {
    res.status(405).json({ message: "ERROR EN EL SERVIDOR"});
  }
} 