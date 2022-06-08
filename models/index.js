//REQUIRE
const Post = require('./Post');
const User = require('./User');
const Comment = require('./Comment');

//USER POST ASSOCIATIONS
User.hasMany(Post, {
  foreignKey: 'user_id'
});

Post.belongsTo(User, {
  foreignKey: 'user_id'
});

// User.belongsToMany(Post, {
//   foreignKey: 'user_id'
// });

// Post.belongsToMany(User, {
//   foreignKey: 'post_id'
// });

//COMMENT USER POST ASSOCIATIONS
Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id'
});

User.hasMany(Comment, {
  foreignKey: 'user_id'
});

Post.hasMany(Comment, {
  foreignKey: 'post_id'
});

//EXPORT
module.exports = { User, Post, Comment };
