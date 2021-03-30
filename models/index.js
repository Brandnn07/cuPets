// index models
const Post = require ('./Post');
const Profile = require('./Profile');
const Message = require('./Message')

Post.belongsTo(Profile, {
    foreignKey: 'profile_id'
});

Profile.hasMany(Post, {
    foreignKey: 'profile_id'
});


module.exports = { Post, Profile, Message };