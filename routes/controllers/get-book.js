const Book = require("../../models/Book");

module.exports = function (req, res) {

    let bookid = req.params.id;

    Book.findById(bookid).exec( async function(err, book) {
        if(err) return res.send("no book exists")

        await book.populate('comments').execPopulate();

        return res.json({
            comments        : filterComments(book.comments),
            _id             : book._id,
            title           : book.title,
            commentcount    : countComments(book.comments),
            __v             : book.__v,
        })

    })
};

function filterComments(comments) {
    return comments.map((comment) => {
        return comment.text;
    });
}

function countComments(comments) {
    return comments.length;
}
