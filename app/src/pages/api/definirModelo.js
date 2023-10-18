import { Sequelize, DataTypes, Model } from 'sequelize'

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
});

export function definirModelo(lista) {
    let { listaModelos } = lista;
    console.log("ESTO ES DEFINIR MODELO ", listaModelos);
    const listaModelosDefinidos = []

    // for (let i = 0; i < listaModelos.length; i++) {
    //     const tabla = listaModelos[i];
    //     tabla.camposTabla = tabla.camposTabla.map(obj => JSON.stringify(obj));
    // }

    const modelDefinition = {};


    listaModelos.forEach(model => {
        console.log(model.nombreTabla);
        model.camposTabla.forEach(campo => {
            console.log("ESTO ES EL CAMPO: ", campo);
            modelDefinition[campo.nombre] = {
                type: DataTypes[campo.tipo],
                unique: campo.esUnico,
                allowNull: campo.NotNull
            }
        })
        console.log("ESTA ES LA DEFINICON DEL MODELO: ", modelDefinition)
        const Modelo = sequelize.define(model.nombreTabla, modelDefinition);
        listaModelosDefinidos.push(Modelo);
        // Modelo.sync({ alter: true });
    })

    console.log("estos la lista de modelos: ", listaModelos[1])

    // campos.forEach(campo => {
    //     const { nombre: nombreCampo, tipo, esUnico, NotNull } = campo;
    //     modelDefinition[nombreCampo] = {
    //         type: DataTypes[tipo], 
    //         unique: esUnico,
    //         allowNull: true, 
    //     };
    // });

    // const Modelo = sequelize.define(nombre, modelDefinition);

    // Modelo.hasMany(Personas)
    // Modelo.sync({ alter: true });
}