const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Pais', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    Name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "name",
      unique: true
    },
    ProvinciumId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Provincia',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'Pais',
    timestamps: true,
    indexes: [
      {
        name: "sqlite_autoindex_Pais_1",
        unique: true,
        fields: [
          { name: "Name" },
        ]
      },
    ]
  });
};
