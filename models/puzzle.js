module.exports = (sequelize, DataTypes) => {
  const Puzzle = sequelize.define('Puzzle', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    levelId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    grid: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    clues: {
      type: DataTypes.JSON,
      allowNull: false,
    },
  });

  Puzzle.associate = (models) => {
    Puzzle.belongsTo(models.Level, { foreignKey: 'levelId' });
  };

  return Puzzle;
};
