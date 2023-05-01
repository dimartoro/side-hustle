const { User } = require('../models');

const userData =
  [
    {
      username: "Victoria",
      email: "victoria@hotmail.com",
      password: "$2b$10$OkG24Yt1CZkcNL7TP1c1subFBEhuK9atmjlAUdauPYswu4vo9jkPW",
      zipcode: "28806"
    },
    {
      username: "Diana",
      email: "diana@gmail.com",
      password: "$2b$10$OkG24Yt1CZkcNL7TP1c1subFBEhuK9atmjlAUdauPYswu4vo9jkPW",
      zipcode: "28806"
    },
    {
      username: "Spencer",
      email: "spencer@aol.com",
      password: "$2b$10$OkG24Yt1CZkcNL7TP1c1subFBEhuK9atmjlAUdauPYswu4vo9jkPW",
      zipcode: "28806"
    },
    {
      username: "Kevin",
      email: "kevin@yahoo.com",
      password: "$2b$10$OkG24Yt1CZkcNL7TP1c1subFBEhuK9atmjlAUdauPYswu4vo9jkPW",
      zipcode: "28806"
    },
    {
      username: "PJ",
      email: "pj@someplace.com",
      password: "$2b$10$OkG24Yt1CZkcNL7TP1c1subFBEhuK9atmjlAUdauPYswu4vo9jkPW",
      zipcode: "28806"
    },
    {
      username: "Christian",
      email: "christian@fbi.gov",
      password: "$2b$10$OkG24Yt1CZkcNL7TP1c1subFBEhuK9atmjlAUdauPYswu4vo9jkPW",
      zipcode: "28806"
    }
  ]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
