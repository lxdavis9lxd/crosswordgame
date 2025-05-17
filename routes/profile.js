const express = require('express');
const router = express.Router();
const multer = require('multer');
const { body, validationResult } = require('express-validator');
const { UserProfile, User } = require('../models');

// Set up multer for profile picture uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

// View user profile
router.get('/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    const userProfile = await UserProfile.findOne({ where: { userId }, include: [User] });
    if (!userProfile) {
      return res.status(404).json({ message: 'User profile not found' });
    }
    res.status(200).json({ userProfile });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving user profile', error });
  }
});

// Update user profile
router.put('/:userId', upload.single('avatar'), [
  body('firstName').optional().isString(),
  body('lastName').optional().isString(),
  body('bio').optional().isString(),
], async (req, res) => {
  const { userId } = req.params;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { firstName, lastName, bio } = req.body;
  const avatarUrl = req.file ? `/uploads/${req.file.filename}` : undefined;

  try {
    const userProfile = await UserProfile.findOne({ where: { userId } });
    if (!userProfile) {
      return res.status(404).json({ message: 'User profile not found' });
    }

    await userProfile.update({ firstName, lastName, bio, avatarUrl });
    res.status(200).json({ message: 'User profile updated successfully', userProfile });
  } catch (error) {
    res.status(500).json({ message: 'Error updating user profile', error });
  }
});

// Delete user profile
router.delete('/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    const userProfile = await UserProfile.findOne({ where: { userId } });
    if (!userProfile) {
      return res.status(404).json({ message: 'User profile not found' });
    }

    await userProfile.destroy();
    res.status(200).json({ message: 'User profile deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user profile', error });
  }
});

module.exports = router;
