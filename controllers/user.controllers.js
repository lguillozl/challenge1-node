const { User } = require('../models/user.model');

// Controller route /api/v1/
const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
  
    res.status(200).json({
      users
    });

  } catch (error) {
    console.log(error);
  };
};

const createUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const newUser = await User.create({ name, email, password, role });

    res.status(201).json({ newUser });
  } catch (error) {
    console.log(error);
  };
};


// Controller route /api/v1/:id
const getUserById = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findOne({ where: { id } });

    if(!user) {
      return res.status(404).json({
        status: 'error',
        message: `User not found with that id: ${id}`
      });
    };

    res.status(200).json({
      user
    });
  } catch (error) {
    console.log(error);
  };
};

const updateUserById = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findOne({ where: { id } });
    
    if(!user) {
      return res.status(404).json({
        status: 'error',
        message: `User not found with that id: ${id}`
      });
    };

    const { name, email } = req.body;
    
    await user.update({ name, email });

    res.status(200).json({
      user
    });
    
  } catch (error) {
    console.log(error);
  };
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findOne({ where: { id } });
    
    if(!user) {
      return res.status(404).json({
        status: 'error',
        message: `User not found with that id: ${id}`
      });
    };

    await user.update({ status: 'deleted' });

    res.status(200).json({
      message: 'User deleted successfully'
    });

  } catch (error) {
    console.log(error);
  };
};

module.exports = {
  getAllUsers,
  createUser,
  getUserById,
  updateUserById,
  deleteUser
};