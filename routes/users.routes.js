const express = require('express');

const { 
  getAllUsers, 
  createUser, 
  getUserById, 
  updateUserById,
  deleteUser
} = require('../controllers/user.controllers');

const usersRouter = express.Router();

usersRouter.route('/')
  .get(getAllUsers)
  .post(createUser);

usersRouter.route('/:id')
  .get(getUserById)
  .patch(updateUserById)
  .delete(deleteUser);

module.exports = { usersRouter };