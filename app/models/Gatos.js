const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gatos', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    raza: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "raza"
    }
  }, {
    sequelize,
    tableName: 'Gatos',
    timestamps: true
  });
};
