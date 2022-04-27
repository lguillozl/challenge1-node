const express = require('express');

const { 
  getAllRepairs, 
  createRepair, 
  getRepairById, 
  updateRepairById,
  deleteRepair
} = require('../controllers/repair.controllers');

const RepairsRouter = express.Router();

RepairsRouter.route('/')
  .get(getAllRepairs)
  .post(createRepair);

RepairsRouter.route('/:id')
  .get(getRepairById)
  .patch(updateRepairById)
  .delete(deleteRepair);

module.exports = { RepairsRouter };