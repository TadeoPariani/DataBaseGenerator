import { Model, DataTypes } from 'sequelize';
import Sequelize from 'sequelize'; 
import { definirModelo } from '../api/definirModelo';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { listaModelos } = req.body;
    console.log( listaModelos )
    const Modelo = definirModelo(listaModelos)

    res.status(200).json({ message: 'Modelo creado exitosamente'});
  } else {
    res.status(405).json({ message: 'Método no permitido' });
  }
  }
  