// Will need to replace the associations

const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// Users have many posts
User.hasMany(Post, {
  foreignKey: 'user_id',
});

// Posts belong to many users
Post.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

// Comments belong to a user
Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

// Comments belong to a post
Comment.belongsTo(Post, {
  foreignKey: 'post_id',
  onDelete: 'SET NULL'
});

// Users have many comments
User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Post.hasMany(Comment, {
  foreignKey: 'post_id'
});

module.exports = { User, Comment, Post };