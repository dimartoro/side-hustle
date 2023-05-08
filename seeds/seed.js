const sequelize = require('../config/connection');
const { clearUsers, seedUsers }= require('./userData');
const { clearGigs, seedGigs } = require('./gigData');
const { clearBids, seedBids } = require('./bidData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await clearBids();

  await clearGigs();

  await clearUsers(); 
  
  await seedUsers();

  await seedGigs();

  await seedBids();

  process.exit(0);
};

seedAll();
