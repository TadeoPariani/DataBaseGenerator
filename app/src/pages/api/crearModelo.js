import { Model, DataTypes } from 'sequelize';
import Sequelize from 'sequelize'; // Asegúrate de importar tu instancia de sequelize correctamente
import { definirModelo } from '../api/definirModelo';

export default function handler(req, res) {
    if (req.method === 'POST') {
      const { nombre, campos } = req.body;
      console.log(nombre, campos)
      const Modelo = definirModelo(nombre, campos)
      

      
  
      res.status(200).json({ message: 'Modelo creado exitosamente'});
    } else {
      res.status(405).json({ message: 'Método no permitido' });
    }
  }
  