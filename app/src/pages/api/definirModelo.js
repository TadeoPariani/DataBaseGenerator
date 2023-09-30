import { Sequelize, DataTypes, Model } from 'sequelize'

export function definirModelo(nombre, campos) {

    console.log("ESTO ES DEFINIR MODELO ", nombre, campos);
    const modelDefinition = {};

    campos.forEach(campo => {
        const { nombre: nombreCampo, tipo, esUnico } = campo;
        modelDefinition[nombreCampo] = {
            type: DataTypes[tipo], 
            unique: esUnico,
            allowNull: true, 
        };
    });

    console.log("ESTA ES LA DEFINICON DEL MODELO: ", modelDefinition)

    const Modelo = sequelize.define(nombre, modelDefinition);

    //   return Modelo;
}
