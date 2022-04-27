const { Sequelize } = require('sequelize');

const db = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'Pvera#280295',
  database: 'challenge1',
  logging: false
});

module.exports = { db };