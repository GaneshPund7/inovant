const { Sequelize } = require('sequelize');
 
const sequelize = new Sequelize('inovant_store', 'postgres','Ganesh', {
  host: 'localhost', 
  dialect: 'postgres',
});
sequelize.authenticate()
  .then(() => console.log('Database connected successfully.'))
  .catch(err => console.error('Connection failed:', err));

  module.exports = sequelize