let Book = require('../../models/Book')
let Comment = require('../../models/Comment')

module.exports = async function(req, res) {

    let bookId = req.params.id;

    try {

        let result = await Book.findByIdAndDelete(bookId);

        if ( !result ) throw new Error('result is null, book already deleted')

        await Comment.deleteMany({ bookId });

        return res.send("delete successful");

    } catch (err) {

        return res.send("no book exists");

    }
}