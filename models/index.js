const Sequelize = require('sequelize');
const config = require('../config/config.json')[process.env.NODE_ENV || 'development'];

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require('./user')(sequelize, Sequelize);
db.UserProfile = require('./userProfile')(sequelize, Sequelize);
db.Level = require('./level')(sequelize, Sequelize);
db.Puzzle = require('./puzzle')(sequelize, Sequelize);
db.Game = require('./game')(sequelize, Sequelize);

db.User.hasOne(db.UserProfile, { foreignKey: 'userId' });
db.UserProfile.belongsTo(db.User, { foreignKey: 'userId' });

db.User.hasMany(db.Game, { foreignKey: 'userId' });
db.Game.belongsTo(db.User, { foreignKey: 'userId' });

db.Level.hasMany(db.Puzzle, { foreignKey: 'levelId' });
db.Puzzle.belongsTo(db.Level, { foreignKey: 'levelId' });

db.Level.hasMany(db.Game, { foreignKey: 'levelId' });
db.Game.belongsTo(db.Level, { foreignKey: 'levelId' });

module.exports = db;
