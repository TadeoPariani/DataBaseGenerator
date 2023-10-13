import { Sequelize, DataTypes, Model } from 'sequelize'
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
  });

export function definirModelo(nombre, campos) {

    console.log("ESTO ES DEFINIR MODELO ", nombre, campos);
    const modelDefinition = {};

    // try {
    //     sequelize.authenticate();
    //     console.log('Connection has been established successfully.');
    //   } catch (error) {
    //     console.error('Unable to connect to the database:', error);
    // }

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
    Modelo.sync({ alter: true });

    //   return Modelo;
}