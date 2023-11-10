var DataTypes = require("sequelize").DataTypes;
var _Gatos = require("./Gatos");
var _Perros = require("./Perros");
var _p1s = require("./p1s");
var _p2s = require("./p2s");

function initModels(sequelize) {
  var Gatos = _Gatos(sequelize, DataTypes);
  var Perros = _Perros(sequelize, DataTypes);
  var p1s = _p1s(sequelize, DataTypes);
  var p2s = _p2s(sequelize, DataTypes);


  return {
    Gatos,
    Perros,
    p1s,
    p2s,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
