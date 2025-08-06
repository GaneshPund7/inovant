const { Sequelize } = require('sequelize');
 
const sequelize = new Sequelize('postgresql://inovant_user:95fhYIox7X7nnjP3ByKYC1meQ75N7ztM@dpg-d29pueemcj7s73ckkfh0-a.oregon-postgres.render.com/inovant', {
  dialect: 'postgres',
  protocol: 'postgres',
  logging: false, 
});

sequelize.authenticate()
  .then(() => console.log('Database connected successfully to Render PostgreSQL.'))
  .catch(err => console.error('Connection failed:', err));

module.exports = sequelize;
