var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var CommentSchema = new Schema(
    {
        book: {
            type: Schema.Types.ObjectId,
            ref: 'Book',
        },
        text: {
            type: String,
            required: true,
            minlength: 1,
        },
    },
    { timestamps: true }
);

// Create a model from the schema
const Comment = mongoose.model("Comments", CommentSchema);

module.exports = Comment;
