// index models
const User = require('./User');
const Post = require ('./Post');
const Profile = require('./Profile');

Post.belongsTo(User, {
    foreignKey: 'user_id'
});

Profile.belongsTo(User, {
    foreignKey: 'user_id'
})

module.exports = { User, Post, Profile };