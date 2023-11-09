import { Sequelize, DataTypes, Model } from 'sequelize'
import fs from 'fs';

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
        //const modeloCode = modeloTemplate(model.nombreTabla, JSON.stringify(modelDefinition, null, 2));
        //fs.writeFileSync(`./modelos/${model.nombreTabla}.js`, modeloCode);
        modelDefinition = {}
    })
}