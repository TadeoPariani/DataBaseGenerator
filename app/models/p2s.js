const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('p2s', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    p2: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: "p2"
    }
  }, {
    sequelize,
    tableName: 'p2s',
    timestamps: true
  });
};
