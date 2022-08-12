const { Schema } = require('mongoose');
const shortId=require('./types/short-id');
const PostSchema = new Schema({
  shortId,
  write__title: {
    type: String,
    required: true,
  },
  write_content: {
    type: String,
    required: true,
  },
  write__like: {
    type: String,
    required:true,
  }
}, {
  timestamps: true,
});

module.exports = PostSchema;

