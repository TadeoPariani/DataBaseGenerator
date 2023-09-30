import { Sequelize, DataTypes, Model } from 'sequelize'

export function definirModelo(nombre, campos) {

    console.log("ESTO ES DEFINIR MODELO ", nombre, campos[2]);
    const modelDefinition = {};

    campos.forEach(campo => {
        const { nombre: nombreCampo, esUnico } = campo;
        // Define las propiedades específicas de cada campo
        modelDefinition[nombreCampo] = {
            type: DataTypes.STRING, // Puedes ajustar el tipo según lo que necesites
            unique: esUnico,
            allowNull: true, // Ajusta según sea necesario
            // Otras propiedades como defaultValue, tamaño de string, etc.
        };
        
    });

    console.log("ESTA ES LA DEFINICON DEL MODELO: ", modelDefinition)

    //   const Modelo = sequelize.define(nombre, modelDefinition);

    //   return Modelo;
}
