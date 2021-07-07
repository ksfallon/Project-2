module.exports = function (sequelize, DataTypes) {
  const Trails = sequelize.define('trails', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    trail_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    timestamps: false
  });

  Trails.associate = function (models) {
    Trails.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Trails;
};
