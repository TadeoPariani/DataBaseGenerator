const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Perros', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    p: {
      type: DataTypes.CHAR(100),
      allowNull: false,
      defaultValue: "p",
      unique: true
    }
  }, {
    sequelize,
    tableName: 'Perros',
    timestamps: true,
    indexes: [
      {
        name: "sqlite_autoindex_Perros_1",
        unique: true,
        fields: [
          { name: "p" },
        ]
      },
    ]
  });
};
