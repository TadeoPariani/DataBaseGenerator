import { Model, DataTypes } from 'sequelize';
import Sequelize from 'sequelize'; 
import { definirModelo } from './definirModelo';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { listaModelos } = req.body;
    const Modelo = definirModelo(listaModelos)
    res.status(200).json({ message: 'Modelo creado exitosamente'});
  } else {
    res.status(405).json({ message: "ERROR EN EL SERVIDOR"});
  }
}



// export function enviarLista(req, res) {

// }


  