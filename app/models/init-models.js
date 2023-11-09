var DataTypes = require("sequelize").DataTypes;
var _Perros = require("./Perros");

function initModels(sequelize) {
  var Perros = _Perros(sequelize, DataTypes);


  return {
    Perros,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
