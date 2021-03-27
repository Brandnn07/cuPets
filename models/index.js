// index models
const Post = require ('./Post');
const Profile = require('./Profile');

Post.belongsTo(Profile, {
    foreignKey: 'profile_id'
});


module.exports = { Post, Profile };