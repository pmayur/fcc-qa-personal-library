var Comment = require("../../models/Comment");
var Book = require("../../models/Book");

module.exports = function (req, res) {
    let id = req.params.id;
    let text = req.body.comment;


        Book
            .findById(id)
            .exec( async (err, foundBook) => {

                if(err || !foundBook) return res.send("no book exists")

                try {

                    // get the book id
                    let bookId = foundBook._id;

                    // create a new instance of comment
                    let comment = await new Comment({ bookId, text }).save();

                    // add the new comment instance to the book
                    foundBook.comments.push(comment);

                    // save the book with comment added
                    let savedBook = await foundBook.save();

                    // populate the book object with comments
                    await savedBook.populate('comments').execPopulate();

                    // response upon successfully adding comment
                    return res.json({
                        comments        : filterComments(savedBook.comments),
                        _id             : savedBook._id,
                        title           : savedBook.title,
                        commentcount    : countComments(savedBook.comments),
                        __v             : savedBook.__v
                    })

                } catch (error) {
                    return res.send("missing required field comment")
                }
            })

};

function filterComments(comments) {
    return comments.map( (comment) => {
        return comment.text;
    })
}

function countComments(comments) {
    return comments.length;
}
