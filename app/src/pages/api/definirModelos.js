import { crearModelo } from '../../models/crearModelo';
const shell = require('shelljs');

export default function handler(req, res) {
  if (req.method === 'POST') {
    const Modelo = crearModelo(req.body);
    res.status(200).json({ message: 'Modelo creado exitosamente'});
    
  } else if (req.method === 'GET') {
    //const resultado = shell.exec('npx sequelize-auto -o "./models" -d database.sqlite -h localhost -u root -p 3306 -x \'\' -e sqlite');
    if (resultado.code === 0) {
      console.log('El comando se ejecutó correctamente');
    } else {
      console.error('Error al ejecutar el comando', resultado.stderr);
    }
    res.status(200).json({ message: 'Modelos Generados Exitosamente'})
  } else{
    res.status(405).json({ message: "ERROR EN EL SERVIDOR"});
  }
} 

