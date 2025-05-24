const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const authMiddleware = require('../middleware/authentication');
const AppError = require('../utils/errors');

// Profile routes
router.route('/profile')
  .get(authMiddleware, async (req, res, next) => {
    try {
      const user = await prisma.user.findUnique({
        where: { id: req.user.id },
        select: {
          id: true,
          username: true,
          email: true,
          phone: true,
          created_at: true
        }
      });

      if (!user) {
        throw new AppError('User not found', 404);
      }

      res.json(user);
    } catch (error) {
      next(error);
    }
  })
  .put(authMiddleware, async (req, res, next) => {
    try {
      const { username, phone } = req.body;

      if (!username && !phone) {
        throw new AppError('No data provided for update', 400);
      }

      const updatedUser = await prisma.user.update({
        where: { id: req.user.id },
        data: { username, phone },
        select: {
          id: true,
          username: true,
          email: true,
          phone: true,
          updated_at: true
        }
      });
      res.json(updatedUser);
    } catch (error) {
      if (error.code === 'P2025') {
        next(new AppError('User not found', 404));
      } else {
        next(error);
      }
    }
  })
  .delete(authMiddleware, async (req, res, next) => {
    try {
      const deletedUser = await prisma.user.delete({
        where: { id: req.user.id }
      });

      if (!deletedUser) {
        throw new AppError('User not found', 404);
      }

      res.json({ message: 'Profile deleted successfully' });
    } catch (error) {
      if (error.code === 'P2025') {
        next(new AppError('User not found', 404));
      } else {
        next(error);
      }
    }
  });

module.exports = router; 