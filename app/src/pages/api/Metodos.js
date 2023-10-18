import { Model, DataTypes } from 'sequelize';
import Sequelize from 'sequelize'; 
import { definirModelo } from './definirModelo';

let lista = null 

export default function handler(req, res) {
  if (req.method === 'POST') {
    lista = req.body
    const Modelo = definirModelo(req.body)
    res.status(200).json({ message: 'Modelo creado exitosamente'});
  } else if (req.method === 'GET') {
    res.json({ message: "xs", data: lista.listaModelos });
  } else {
    res.status(405).json({ message: "ERROR EN EL SERVIDOR"});
  }
} 