const prisma = require('../utils/prisma');
const AppError = require('../utils/errors');

const getProfile = async (req, res, next) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
      select: {
        id: true,
        first_name: true,
        last_name: true,
        email: true,
        phone: true,
        date_of_birth: true,
        gender: true,
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
};

const updateProfile = async (req, res, next) => {
  try {
    const { first_name, last_name, phone } = req.body;

    if (!first_name && !last_name && !phone) {
      throw new AppError('No data provided for update', 400);
    }

    const updatedUser = await prisma.user.update({
      where: { id: req.user.id },
      data: { 
        first_name, 
        last_name, 
        phone 
      },
      select: {
        id: true,
        first_name: true,
        last_name: true,
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
};

const deleteProfile = async (req, res, next) => {
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
};

module.exports = {
  getProfile,
  updateProfile,
  deleteProfile
}; 