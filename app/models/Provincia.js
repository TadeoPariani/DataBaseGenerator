const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Provincia', {
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
    },
    LocalidadId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Localidads',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'Provincia',
    timestamps: true,
    indexes: [
      {
        name: "sqlite_autoindex_Provincia_1",
        unique: true,
        fields: [
          { name: "Name" },
        ]
      },
    ]
  });
};
