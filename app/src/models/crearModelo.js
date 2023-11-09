import { Sequelize, DataTypes, Model } from 'sequelize'
const shell = require('shelljs');


const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
});

// const modeloTemplate = (modelName, fields) => `
// const { DataTypes } = require('sequelize');

// module.exports = (sequelize) => {
//   const ${modelName} = sequelize.define('${modelName}', {
//     ${fields}
//   });

//   return ${modelName};
// };
// `;

//npx sequelize-auto -o "./models" -d database.sqlite -h localhost -u root -p 3306 -x '' -e sqlite



export function crearModelo(lista) {
    let { listaModelos } = lista;
    console.log("ANTES DE DEFINIR", listaModelos);
    const listaModelosDefinidos = []
    let modelDefinition = {};
    let indexDefinition = {}
    let indexObject = {
        indexes: []
    }
    
    listaModelos.forEach(model => {
        console.log(model.nombreTabla);
        model.camposTabla.forEach(campo => {
            if (campo.index === true) {
                indexDefinition = {
                    unique: campo.esUnico,
                    fields: [campo.nombre]
                }
                indexObject.indexes.push(indexDefinition)
            }

            modelDefinition[campo.nombre] = {
                type: DataTypes[campo.tipo](campo.lenght),
                unique: campo.esUnico,
                allowNull: campo.NotNull,
                defaultValue: campo.defaultValue
            }
        })
        const Modelo = sequelize.define(model.nombreTabla, modelDefinition, indexObject);
        listaModelosDefinidos.push(Modelo);
        Modelo.sync({ alter : true });

        const resultado = shell.exec('npx sequelize-auto -o "./models" -d database.sqlite -h localhost -u root -p 3306 -x \'\' -e sqlite');

        // Verificar si el comando se ejecutó correctamente
        if (resultado.code === 0) {
            console.log('El comando se ejecutó correctamente');
        } else {
            console.error('Error al ejecutar el comando', resultado.stderr);
        }

        modelDefinition = {}
    })
}