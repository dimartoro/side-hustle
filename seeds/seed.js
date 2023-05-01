const sequelize = require('../config/connection');
const seedUsers = require('./userData');
const seedGigs = require('./gigData');
const seedBids = require('./bidData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();

  await seedGigs();

  await seedBids();

  process.exit(0);
};

seedAll();
