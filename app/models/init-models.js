var DataTypes = require("sequelize").DataTypes;
var _Gatos = require("./Gatos");
var _Perros = require("./Perros");

function initModels(sequelize) {
  var Gatos = _Gatos(sequelize, DataTypes);
  var Perros = _Perros(sequelize, DataTypes);


  return {
    Gatos,
    Perros,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
