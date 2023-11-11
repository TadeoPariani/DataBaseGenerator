const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('as', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    a: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "a",
      unique: true
    }
  }, {
    sequelize,
    tableName: 'as',
    timestamps: true,
    indexes: [
      {
        name: "sqlite_autoindex_as_1",
        unique: true,
        fields: [
          { name: "a" },
        ]
      },
    ]
  });
};
