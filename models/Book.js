var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var BookSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            minlength: 1,
        },
        comments: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Comment',
            },
        ],
    },
    { timestamps: true }
);

// Create a model from the schema
const Book = mongoose.model("Book", BookSchema);

module.exports = Book;
