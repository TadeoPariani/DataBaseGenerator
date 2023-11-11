var DataTypes = require("sequelize").DataTypes;
var _Localidads = require("./Localidads");
var _Pais = require("./Pais");
var _Provincia = require("./Provincia");

function initModels(sequelize) {
  var Localidads = _Localidads(sequelize, DataTypes);
  var Pais = _Pais(sequelize, DataTypes);
  var Provincia = _Provincia(sequelize, DataTypes);

  Provincia.belongsTo(Localidads, { as: "Localidad", foreignKey: "LocalidadId"});
  Localidads.hasMany(Provincia, { as: "Provincia", foreignKey: "LocalidadId"});
  Pais.belongsTo(Provincia, { as: "Provincium", foreignKey: "ProvinciumId"});
  Provincia.hasMany(Pais, { as: "Pais", foreignKey: "ProvinciumId"});

  return {
    Localidads,
    Pais,
    Provincia,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
