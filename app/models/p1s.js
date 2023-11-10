const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('p1s', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    p1: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "p1",
      unique: true
    }
  }, {
    sequelize,
    tableName: 'p1s',
    timestamps: true,
    indexes: [
      {
        name: "sqlite_autoindex_p1s_1",
        unique: true,
        fields: [
          { name: "p1" },
        ]
      },
    ]
  });
};
