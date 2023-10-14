import { Sequelize, DataTypes, Model } from 'sequelize'

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
});

export function definirModelo(nombre, campos) {
    console.log("ESTO ES DEFINIR MODELO ", nombre, campos);
    const modelDefinition = {};

    // let listaModelos = [
    //     {nombre: 'Persona', 
    //         campos:{
    //             nombre:"Autos",
    //             tipo:'CHAR',
    //             esUnico: true,
    //             NotNull: true,
    //             relacion: 'hasMany',
    //             tablaRelacion: 'Telefono'
    //         }
    //     },
    //     {nombre: 'Telefono', 
    //         campos:{
    //             nombre:"Autos",
    //             tipo:'CHAR',
    //             esUnico: true,
    //             NotNull: true,
    //         }
    //     }
    // ];
    // listaModelos.forEach(modelo => {
    //     const { nombre, campos } = modelo;
    //     const modelDefinition = {};
    //     console.log("campos: ", campos.tipo)
    //     modelDefinition[campos.nombre] = {
    //         type: campos.tipo, 
    //         unique: campos.esUnico,
    //         allowNull: campos.NotNull, 
    //     };
    //     console.log("modelo: ", modelDefinition)
    //     modelDefinitions[nombre] = modelDefinition;
    // });
    // console.log("DESPUES DEL MAP", modelDefinitions);

    

    campos.forEach(campo => {
        const { nombre: nombreCampo, tipo, esUnico, NotNull } = campo;
        modelDefinition[nombreCampo] = {
            type: DataTypes[tipo], 
            unique: esUnico,
            allowNull: true, 
        };
    });

    console.log("ESTA ES LA DEFINICON DEL MODELO: ", modelDefinition)

    const Modelo = sequelize.define(nombre, modelDefinition);

    Modelo.hasMany(Personas)
    Modelo.sync({ alter: true });
}