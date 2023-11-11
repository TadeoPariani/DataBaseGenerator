const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('es', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    e: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "e"
    },
    aId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'as',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'es',
    timestamps: true
  });
};
