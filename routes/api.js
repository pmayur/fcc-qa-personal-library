/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

module.exports = function (app) {

  app.route('/api/books')
    .get(require('./controllers/get-allbooks'))

    .post(require('./controllers/add-book'))

    .delete(require('./controllers/delete-allBooks'));



  app.route('/api/books/:id')
    .get(require('./controllers/get-book'))

    .post(require('./controllers/add-comment'))

    .delete(require('./controllers/delete-book'))

};
