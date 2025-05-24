const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const validator = require('validator');
const prisma = require('../utils/prisma');
const AppError = require('../utils/errors');

router.route('/signup')
  .post(async (req, res, next) => {
    try {
      const { first_name, last_name, email, phone, password, date_of_birth, gender } = req.body;
      
      if (!email || !phone || !password || !first_name || 
          !last_name) {
          throw new AppError('All fields are required', 400);
      }

      
      if (!validator.isEmail(email)) {
          throw new AppError('Invalid email address', 400);
      }

   
      if (!validator.isMobilePhone(phone)) {
          throw new AppError('Invalid phone number', 400);
      }

    
      const validatePassword = (password) => {
        if (password.length < 8) {
          throw new AppError('Password must be at least 8 characters long', 400);
        }
        
        if (!/[A-Z]/.test(password)) {
          throw new AppError('Password must contain at least one uppercase letter', 400);
        }
      
        if (!/[a-z]/.test(password)) {
          throw new AppError('Password must contain at least one lowercase letter', 400);
        }

        if (!/[0-9]/.test(password)) {
          throw new AppError('Password must contain at least one number', 400);
        }

        if (!/[!@#$%^&*]/.test(password)) {
          throw new AppError('Password must contain at least one special character', 400);
        }
      };
      validatePassword(password);

      // if (!['MALE', 'FEMALE'].includes(gender)) {
      //     throw new AppError('Invalid gender value', 400);
      // }

      const hashedPassword = await bcrypt.hash(password, 10);


      const existingUser = await prisma.user.findFirst({
        where: {email}
      });

      if (existingUser) {
        throw new AppError('User already exists', 400);
      }


      const user = await prisma.user.create({
        data: {
          first_name,
          last_name,
          email,
          phone,
          date_of_birth,
          gender,
          password: hashedPassword,
          authMethods: {
            create: {
              provider: 'EMAIL',
              providerId: email
            }
          }
        }
      });


      const token = jwt.sign(
        { userId: user.id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: '24h' }
      );

      const refresh_token = jwt.sign(
        {userId: user.id, email: user.email},
        process.env.JWT_REFRESH_SECRET,
        {expiresIn: '7d'}
      );
      

      const new_user = await prisma.userAuth.findFirst({
        where: {userId : user.id}
      })

      if (new_user){
        await prisma.userAuth.update({
          where: { id: new_user.id },
          data: {
            refreshToken: refresh_token
          }
        })
      }

      res.status(201).json({
        token,
        refresh_token,
        user: {
          id: user.id,
          first_name: user.first_name,
          last_name: user.last_name,
          email: user.email,
          phone: user.phone,
          date_of_birth: user.date_of_birth,
          gender: user.gender
        }
      });
      res.json(dummyData);
    } catch (error) {
      next(error);
    }
  });

router.route('/login')
  .post(async (req, res, next) => {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        throw new AppError('Email and password are required', 400);
      }

      const user = await prisma.user.findUnique({
        where: { email }
      });

      if (!user || !user.password) {
        throw new AppError('Invalid credentials', 401);
      }

      const isValidPassword = await bcrypt.compare(password, user.password);

      if (!isValidPassword) {
        throw new AppError('Invalid credentials', 401);
      }

      const token = jwt.sign(
        { userId: user.id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: '24h' }
      );

      res.json({
        token,
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
          phone: user.phone
        }
      });
    } catch (error) {
      next(error);
    }
  });

module.exports = router; 