import { Sequelize, DataTypes, Model } from 'sequelize'
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
});

export function definirModelo(lista) {
    let { listaModelos } = lista;
    console.log("ANTES DE DEFINIR", listaModelos);
    const listaModelosDefinidos = []
    const modelDefinition = {};
    let indexObject = {
        indexes: []
    }
    let indexDefinition = {}
    
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

        console.log("ESTA ES LA DEFINICON DEL MODELO: ", modelDefinition)
        console.log("INDEX OBJECT: ", indexObject.indexes)
        const Modelo = sequelize.define(model.nombreTabla, modelDefinition, indexObject);
        listaModelosDefinidos.push(Modelo);
        //Modelo.sync({ alter : true });
    })
}