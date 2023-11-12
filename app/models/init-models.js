var DataTypes = require("sequelize").DataTypes;
var _As = require("./As");
var _Bs = require("./Bs");

function initModels(sequelize) {
  var As = _As(sequelize, DataTypes);
  var Bs = _Bs(sequelize, DataTypes);

  As.belongsTo(Bs, { as: "BId_B", foreignKey: "BId"});
  Bs.hasMany(As, { as: "As", foreignKey: "BId"});

  return {
    As,
    Bs,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
