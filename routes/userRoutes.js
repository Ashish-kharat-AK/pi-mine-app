const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Get user info by ID
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.json({
      _id: user._id,
      username: user.username,
      email: user.email,
      balance: user.balance || 0, // optional: balance field if present in model
    });
  } catch (err) {
    console.error('User Fetch Error:', err.message);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
