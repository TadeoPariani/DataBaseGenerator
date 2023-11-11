var DataTypes = require("sequelize").DataTypes;
var _as = require("./as");
var _es = require("./es");

function initModels(sequelize) {
  var as = _as(sequelize, DataTypes);
  var es = _es(sequelize, DataTypes);

  es.belongsTo(as, { as: "aId_a", foreignKey: "aId"});
  as.hasMany(es, { as: "es", foreignKey: "aId"});

  return {
    as,
    es,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
