var mongoose = require("mongoose");
var Comment = require("./Comment");

var Schema = mongoose.Schema;

var BookSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        comments: [
            {
                type: Schema.Types.ObjectId,
                ref: Comment,
            },
        ],
    },
    { timestamps: true }
);

// Create a model from the schema
const Book = mongoose.model("Books", BookSchema);

module.exports = Book;
