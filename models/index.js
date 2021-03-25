const User = require('./User');
const Post = require ('./Post');

Post.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Post };