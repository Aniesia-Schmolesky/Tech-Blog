const { User } = require('../models');

const userData = [
    {
        username: "user1",
        email: "user1@gmail.com",
        password: "4567"
    },
    {
        username: "user2",
        email: "user2@gmail.com",
        password: "8910"
    }  
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;