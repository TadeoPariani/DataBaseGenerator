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
    
    listaModelos.forEach(model => {
        console.log(model.nombreTabla);
        model.camposTabla.forEach(campo => {
            console.log("ESTO ES EL CAMPO: ", campo);
            modelDefinition[campo.nombre] = {
                type: DataTypes[campo.tipo](campo.lenght),
                unique: campo.esUnico,
                allowNull: campo.NotNull,
                defaultValue: campo.defaultValue
            }
        })

        // if (model.campo.tipo === 'STRING' && campo.lenght) {
        //     modelDefinition.type = DataTypes.STRING(campo.lenght);
        // }

        console.log("ESTA ES LA DEFINICON DEL MODELO: ", modelDefinition)
        const Modelo = sequelize.define(model.nombreTabla, modelDefinition);
        listaModelosDefinidos.push(Modelo);
        Modelo.sync({});
    })
}