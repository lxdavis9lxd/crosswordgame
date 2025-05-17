const express = require('express');
const router = express.Router();
const { Game } = require('../models');

// Save game state route
router.post('/save', async (req, res) => {
  const { userId, levelId, state } = req.body;

  try {
    const game = await Game.create({ userId, levelId, state });
    res.status(201).json({ message: 'Game saved successfully', game });
  } catch (error) {
    res.status(500).json({ message: 'Error saving game', error });
  }
});

// Load game state route
router.get('/load/:userId/:levelId', async (req, res) => {
  const { userId, levelId } = req.params;

  try {
    const game = await Game.findOne({ where: { userId, levelId } });
    if (!game) {
      return res.status(404).json({ message: 'Game not found' });
    }
    res.status(200).json({ message: 'Game loaded successfully', game });
  } catch (error) {
    res.status(500).json({ message: 'Error loading game', error });
  }
});

module.exports = router;
