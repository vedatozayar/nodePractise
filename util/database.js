const Sequelize = require('sequelize');

const sequelize = new Sequelize('practise', 'root', 'Vedatedip94@', {
  dialect: 'mysql',
  host: 'localhost',
});

module.exports = sequelize;
