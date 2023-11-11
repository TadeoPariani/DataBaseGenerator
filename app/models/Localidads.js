const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Localidads', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    Name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "Name",
      unique: true
    }
  }, {
    sequelize,
    tableName: 'Localidads',
    timestamps: true,
    indexes: [
      {
        name: "sqlite_autoindex_Localidads_1",
        unique: true,
        fields: [
          { name: "Name" },
        ]
      },
    ]
  });
};
