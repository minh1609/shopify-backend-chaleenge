const express = require("express");

const Question = require("../models/Question");

module.exports = (app = express()) => {
    app.put("/api/question/:questionId", async (req, res) => {
        let questionId = req.params.questionId;

        let { question, option, answer } = req.body;
        option = option.split("||");

        try {
            let data = await Question.findByIdAndUpdate(questionId, {
                $set: { question, option, answer },
            });
            res.send(data);
        } catch (error) {
            res.send(error);
        }
    });

    app.get("/api/question/:questionId", async (req, res) => {
        let questionId = req.params.questionId;

        try {
            let data = await Question.findById(questionId);
            res.send(data);
        } catch (error) {
            res.status(400).send(error);
        }
    });
};
