const express = require('express');
const router = express.Router();
const { Puzzle, Level } = require('../models');

// Route to display a crossword puzzle
router.get('/:levelId', async (req, res) => {
  try {
    const levelId = req.params.levelId;
    const puzzle = await Puzzle.findOne({ where: { levelId } });

    if (!puzzle) {
      return res.status(404).send('Puzzle not found');
    }

    res.render('puzzle', { puzzle });
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong');
  }
});

// Route to handle user interactions with the puzzle
router.post('/:levelId', async (req, res) => {
  try {
    const levelId = req.params.levelId;
    const { answers } = req.body;

    const puzzle = await Puzzle.findOne({ where: { levelId } });

    if (!puzzle) {
      return res.status(404).send('Puzzle not found');
    }

    // Validate user answers
    const isCorrect = validateAnswers(puzzle, answers);

    res.json({ isCorrect });
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong');
  }
});

// Function to validate user answers
function validateAnswers(puzzle, answers) {
  // Implement validation logic here
  // Compare user answers with the correct answers in the puzzle
  // Return true if all answers are correct, otherwise return false
  return true; // Placeholder
}

module.exports = router;
