const { Post } = require('../models');

const postData = [
    {
        title: "Welcome to my blog!"
        post:"This is my new blog page where I will post about everything that I'm interested in!"
        user_id: 1
    }
    {
        title: "This is one cool blog"
        post:"I love sharing the details of my day with all my fans!"
        user_id: 2
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;