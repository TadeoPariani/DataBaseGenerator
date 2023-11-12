var DataTypes = require("sequelize").DataTypes;
var _Pais = require("./Pais");
var _Provincia = require("./Provincia");

function initModels(sequelize) {
  var Pais = _Pais(sequelize, DataTypes);
  var Provincia = _Provincia(sequelize, DataTypes);

  Provincia.belongsTo(Pais, { as: "Pai", foreignKey: "PaiId"});
  Pais.hasMany(Provincia, { as: "Provincia", foreignKey: "PaiId"});

  return {
    Pais,
    Provincia,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
