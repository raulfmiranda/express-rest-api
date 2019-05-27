'use strict';

var express = require('express');
var router = express.Router();

// GET /questions
// Route for questions collections
router.get("/", function(req, res) {
    res.json({response: "You sent me a GET response"});
});

// POST /questions
// Route for creating questions
router.post("/", function(req, res) {
    res.json({
        response: "You sent me a POST response",
        body: req.body
    });
});

// GET /questions/:qID
// Route for a specific question
router.get("/:qID", function(req, res) {
    res.json({
        response: "You sent me a GET response for ID " + req.params.qID
    });
});

// POST /questions/:qID/answers
// Route for creating an answer
router.post("/:qID/answers", function(req, res) {
    res.json({
        response: "You sent me a POST response to /answers",
        questionId: req.params.qID,
        body: req.body
    });
});

// PUT /questions/:qID/answers/:aID
// Route for update a specific answer
router.put("/:qID/answers/:aID", function(req, res) {
    res.json({
        response: "You sent me a PUT response to /answers",
        questionId: req.params.qID,
        answerId: req.params.aID,
        body: req.body
    });
});

// DELETE /questions/:qID/answers/:aID
// Route for delete a specific answer
router.delete("/:qID/answers/:aID", function(req, res) {
    res.json({
        response: "You sent me a DELETE response to /answers",
        questionId: req.params.qID,
        answerId: req.params.aID
    });
});

// POST /questions/:qID/answers/:aID/vote-up
// POST /questions/:qID/answers/:aID/vote-down
// Vote on a specific answer
router.post("/:qID/answers/:aID/vote-:dir", function(req, res) {
    res.json({
        response: "You sent me a POST response to /vote-" + req.params.dir,
        questionId: req.params.qID,
        answerId: req.params.aID,
        vote: req.params.dir
    });
});

module.exports = router;