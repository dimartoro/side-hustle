const { User } = require('../models');

const userData =
  [
    {
      username: "Virginia",
      email: "virginia@hotmail.com",
      password: "password12345",
      zipcode: "28806"
    },
    {
      username: "Diana",
      email: "diana@gmail.com",
      password: "password12345",
      zipcode: "28806"
    },
    {
      username: "Spencer",
      email: "spencer@aol.com",
      password: "password12345",
      zipcode: "28806"
    },
    {
      username: "Kevin",
      email: "kevin@yahoo.com",
      password: "password12345",
      zipcode: "28806"
    },
    {
      username: "PJ",
      email: "pj@someplace.com",
      password: "password12345",
      zipcode: "28806"
    },
    {
      username: "Christian",
      email: "christian@fbi.gov",
      password: "password12345",
      zipcode: "28806"
    }
  ]

const clearUsers = () => User.destroy({  where: {} });
const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});


module.exports = { clearUsers, seedUsers };
