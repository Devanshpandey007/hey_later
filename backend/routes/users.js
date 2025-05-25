const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authentication');
const { getProfile, updateProfile, deleteProfile } = require('../controllers/userController');

// Profile routes
router.route('/profile')
  .get(authMiddleware, getProfile)
  .put(authMiddleware, updateProfile)
  .delete(authMiddleware, deleteProfile);

module.exports = router; 