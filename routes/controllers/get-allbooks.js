const { response } = require("express");
var Book = require("../../models/Book");
var Comment = require("../../models/Comment");

module.exports = function (req, res) {

    Book.find({}, async (err, allBooks) => {
        if (err) return res.send("database error");
        else {
            let promiseArray = allBooks.map(async (book) => {
                return book.populate("comments").execPopulate();
            });

            Promise.all(promiseArray).then((books) => {
                let responseArray = books.map((book) => {
                    return {
                        comments: filterComments(book.comments),
                        _id: book._id,
                        title: book.title,
                        commentcount: countComments(book.comments),
                        __v: book.__v,
                    };
                });

                return res.send(responseArray);
            });

            // ALTERNATE IMPLEMENTATION:
            // populate books one by one in a while loop
            // takes thrice the time of below implementation

            // let respArray = [];
            //  let length = allBooks.length;
            //  let counter = allBooks.length;

            //  while(counter) {
            //      let book = allBooks[length - counter]

            //      await book.populate('comments').execPopulate();

            //      respArray.push({
            //          comments        : filterComments(book.comments),
            //          _id             : book._id,
            //          title           : book.title,
            //          commentcount    : countComments(book.comments),
            //          __v             : book.__v,
            //      })

            //      counter --;
            //  }

            //  return res.send(respArray);
        }
    });
};

function filterComments(comments) {
    return comments.map((comment) => {
        return comment.text;
    });
}

function countComments(comments) {
    return comments.length;
}
