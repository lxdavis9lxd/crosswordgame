module.exports = (sequelize, DataTypes) => {
  const Level = sequelize.define('Level', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    difficulty: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Level.associate = (models) => {
    Level.hasMany(models.Puzzle, { foreignKey: 'levelId' });
    Level.hasMany(models.Game, { foreignKey: 'levelId' });
  };

  return Level;
};
