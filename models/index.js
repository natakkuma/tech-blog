//REQUIRE
const Post = require('./Post');
const User = require('./User');
const Comment = require('./Comment');

//USER POST ASSOCIATIONS
User.hasMany(Post, {
  foreignKey: 'user_id'
});

Post.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

User.belongsToMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Post.belongsToMany(User, {
  foreignKey: 'post_id',
  onDelete: 'SET NULL'
});

//COMMENT USER POST ASSOCIATIONS
Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id',
  onDelete: 'SET NULL'
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Post.hasMany(Comment, {
  foreignKey: 'post_id'
});

//EXPORT
module.exports = { User, Post, Comment };
