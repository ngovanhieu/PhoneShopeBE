const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CommentSchema = new Schema(
    {
    nameUser: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    rating: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      required: true,
    },
    datetime: {
      type: String,
      required: true,
    },
    ProductID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Products",
    },
  });

  const comment = mongoose.model('comments', CommentSchema)
  module.exports = comment