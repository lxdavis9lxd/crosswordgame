const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const Sequelize = require('sequelize');
const multer = require('multer');
const path = require('path');
const { SequelizeStore } = require('connect-session-sequelize')(session.Store);

const app = express();
const port = 3000;

// Set up Sequelize
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});

// Set up session store
const sessionStore = new SequelizeStore({
  db: sequelize,
});

// Set up middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
  secret: 'secret',
  store: sessionStore,
  resave: false,
  saveUninitialized: false,
}));
app.use(express.static(path.join(__dirname, 'public')));

// Set up routes
const authRoutes = require('./routes/auth');
const profileRoutes = require('./routes/profile');
const puzzleRoutes = require('./routes/puzzle');
const gameRoutes = require('./routes/game');

app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);
app.use('/puzzle', puzzleRoutes);
app.use('/game', gameRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
