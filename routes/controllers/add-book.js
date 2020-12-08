var Book = require("../../models/Book");

module.exports = function (req, res) {
    let title = req.body.title;

    let book = new Book({ title });

    book.save({ title }, function (err, book) {
        if (err) {
            return res.send("missing required field title");
        }

        return res.json({
            _id: book._id,
            title: book.title,
        });
    });
};
