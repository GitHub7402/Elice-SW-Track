const { Schema } = require('mongoose');
const shortId=require('./types/short-id');
const PostSchema = new Schema({
  shortId,
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  like: {
    type: String,
    default: '작성자',
  }
}, {
  timestamps: true,
});

module.exports = PostSchema;

