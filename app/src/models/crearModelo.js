import { Sequelize, DataTypes, Model } from 'sequelize'
const shell = require('shelljs');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
});

export function crearModelo(lista) {
    let { listaModelos } = lista;
    console.log("ANTES DE DEFINIR", listaModelos);
    const listaModelosDefinidos = []
    const listaModelosDefinidosParaRelacionar = []
    let modelDefinition = {};
    let indexDefinition = {}
    let indexObject = {
        indexes: []
    }

    let modelosRelacionados = {
        modeloBase: undefined, 
        modeloParaRelacionar: undefined, 
        tipoRelacion: undefined,
    }
    let modelDefinitionBase = {};
    let modelDefinitionParaRelacionar = {}
    
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

            if (model.relacion ){
                listaModelos.forEach(modeloRelacionar => {
                    if (model.relacion === modeloRelacionar.nombreTabla) {
                        model.camposTabla.forEach(campo => {
                            modelDefinitionBase[campo.nombre] = {
                                type: DataTypes[campo.tipo](campo.lenght),
                                unique: campo.esUnico,
                                allowNull: campo.NotNull,
                                defaultValue: campo.defaultValue
                            }
                        })

                        modeloRelacionar.camposTabla.forEach(campo => {
                            modelDefinitionParaRelacionar[campo.nombre] = {
                                type: DataTypes[campo.tipo](campo.lenght),
                                unique: campo.esUnico,
                                allowNull: campo.NotNull,
                                defaultValue: campo.defaultValue
                            }
                        })

                        modelosRelacionados = {
                            modeloBase: sequelize.define(model.nombreTabla, modelDefinitionBase), 
                            modeloParaRelacionar: sequelize.define(modeloRelacionar.nombreTabla, modelDefinitionParaRelacionar), 
                            tipoRelacion: model.tipoRelacion,
                        }
                        console.log("ESTO ES EL MODELOS RELACIONADOS", modelosRelacionados)
                    }
                })
                listaModelosDefinidosParaRelacionar.push(modelosRelacionados)
                console.log("ESTO ES LISTA DE MODELOS DEFINIDOS PARA RELACIONAR: ", listaModelosDefinidosParaRelacionar)
            }

        })
        const Modelo = sequelize.define(model.nombreTabla, modelDefinition, indexObject);
        listaModelosDefinidos.push(Modelo);
        Modelo.sync({ alter : true });
        modelDefinition = {}
    })

    if (listaModelosDefinidosParaRelacionar.length > 0) {
        listaModelosDefinidosParaRelacionar.forEach( modelo => {
            switch (modelo.tipoRelacion) {
                case "1-1":
                    modelo.modeloBase.hasOne(modelo.modeloParaRelacionar);

                    sequelize.sync({ alter: true })
                    .then((user) => {
                        console.log('Modelo creado en la base de datos:', user);
                    })
                    .catch((error) => {
                        console.error('Error al crear el modelo en la base de datos:', error);
                    });
                    break;
    }})}
}