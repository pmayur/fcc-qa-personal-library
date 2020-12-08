/*
 *
 *
 *       FILL IN EACH FUNCTIONAL TEST BELOW COMPLETELY
 *       -----[Keep the tests in the same order!]-----
 *
 */

const chaiHttp = require("chai-http");
const chai = require("chai");
const assert = chai.assert;
const server = require("../server");
const TestUtils = require("../utils/TestUtils");

let util = new TestUtils();

chai.use(chaiHttp);

suite("Functional Tests", function () {
    /*
     * ----[EXAMPLE TEST]----
     * Each test should completely test the response of the API end-point including response status code!
     */

    // UNCOMMENT UPON IMPLEMENTATION
    /* test("#example Test GET /api/books", function (done) {
        chai.request(server)
            .get("/api/books")
            .end(function (err, res) {
                assert.equal(res.status, 200);
                assert.isArray(res.body, "response should be an array");
                assert.property(
                    res.body[0],
                    "commentcount",
                    "Books in array should contain commentcount"
                );
                assert.property(
                    res.body[0],
                    "title",
                    "Books in array should contain title"
                );
                assert.property(
                    res.body[0],
                    "_id",
                    "Books in array should contain _id"
                );
                done();
            });
    }); */
    /*
     * ----[END of EXAMPLE TEST]----
     */

    suite("Routing tests", function () {
        suite(
            "POST /api/books with title => create book object/expect book object",
            function () {
                let title = util.randomName;

                test("Test POST /api/books with title", function (done) {
                    chai.request(server)
                        .post("/api/books/")
                        .send({
                            title,
                        })
                        .end(function (err, res) {
                            assert.equal(res.status, 200);
                            assert.equal(res.body.title, title);
                            assert.exists(res.body._id);
                            assert.notExists(err);
                            done();
                        });
                });

                test("Test POST /api/books with no title given", function (done) {
                    chai.request(server)
                        .post("/api/books/")
                        .send({
                            title: ""
                        })
                        .end(function (err, res) {
                            assert.equal(res.status, 200);
                            assert.equal(res.text, "missing required field title");
                            assert.notExists(err);
                            done();
                        });
                });

                test("Test POST /api/books with undefined title given", function (done) {
                  chai.request(server)
                      .post("/api/books/")
                      .send({
                          title: undefined
                      })
                      .end(function (err, res) {
                          assert.equal(res.status, 200);
                          assert.equal(res.text, "missing required field title");
                          assert.notExists(err);
                          done();
                      });
              });
            }
        );

        // UNCOMMENT UPON IMPLEMENTATION
        /* suite("GET /api/books => array of books", function () {
            test("Test GET /api/books", function (done) {
                //done();
            });
        });

        suite("GET /api/books/[id] => book object with [id]", function () {
            test("Test GET /api/books/[id] with id not in db", function (done) {
                //done();
            });

            test("Test GET /api/books/[id] with valid id in db", function (done) {
                //done();
            });
        }); */

        suite(
            "POST /api/books/[id] => add comment/expect book object with id",
            function () {
                test("Test POST /api/books/[id] with comment", async function (done) {

                    let id      = await util.getBookIdFromDatabase();
                    let comment = util.randomComment;

                    chai.request(server)
                        .post(`/api/books/${id}`)
                        .send({
                            comment
                        })
                        .end(function (err, res) {
                            assert.equal(res.status, 200);
                            assert.isArray(res.body.comments);
                            assert.equal(res.body._id, id);
                            assert.exists(req.body.title);
                            assert.exists(req.body.commentCount);
                            assert.notExists(err);
                            done();
                        });
                });

                test("Test POST /api/books/[id] without comment field", async function (done) {

                    let id      =  await util.getBookIdFromDatabase();
                    let comment = undefined;

                    chai.request(server)
                        .post(`/api/books/${id}`)
                        .send({
                            comment
                        })
                        .end(function (err, res) {
                            assert.equal(res.status, 200);
                            assert.equal(res.text, "missing required field comment");
                            assert.notExists(err);
                            done();
                        });
                });

                test("Test POST /api/books/[id] with comment, id not in db", function (done) {

                    let id      = util.randomString;
                    let comment = util.randomComment;

                    chai.request(server)
                        .post(`/api/books/${id}`)
                        .send({
                            comment
                        })
                        .end(function (err, res) {
                            assert.equal(res.status, 200);
                            assert.equal(res.text, "no book exists");
                            assert.notExists(err);
                            done();
                        });
                });
            }
        );

        /* suite("DELETE /api/books/[id] => delete book object id", function () {
            test("Test DELETE /api/books/[id] with valid id in db", function (done) {
                //done();
            });

            test("Test DELETE /api/books/[id] with  id not in db", function (done) {
                //done();
            });
        }); */
    });
});
