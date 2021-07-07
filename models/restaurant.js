module.exports = function (sequelize, DataTypes) {
  const restaurants = sequelize.define('restaurant', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    restaurant_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price_level: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    hours: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    timestamps: false
  });

  restaurants.associate = function (models) {
    restaurants.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return restaurants;
};
