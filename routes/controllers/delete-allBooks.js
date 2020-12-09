let Book = require('../../models/Book')
let Comment = require('../../models/Comment')

module.exports = async function (req, res) {

    try {

        await Book.deleteMany({});

        await Comment.deleteMany({});

        return res.send("complete delete successful");

    } catch (error) {

        return res.send("complete delete unsuccessful");
    }

};
