var DataTypes = require("sequelize").DataTypes;
var _P1s = require("./P1s");
var _P2s = require("./P2s");

function initModels(sequelize) {
  var P1s = _P1s(sequelize, DataTypes);
  var P2s = _P2s(sequelize, DataTypes);


  return {
    P1s,
    P2s,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
