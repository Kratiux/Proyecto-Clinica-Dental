const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  imageUrl: String,
  blogTitle: String,
  blogDescription: String,
  comments: String
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;