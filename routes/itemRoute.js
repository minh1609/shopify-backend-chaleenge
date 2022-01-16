const express = require("express");

const Item = require("../models/Item");

module.exports = (app = express()) => {
    app.get("/test/api/item", async (req, res) => {
        const data = await Item.find();
        res.send(data);
    });

    //Get specific question List
    app.get("/test/api", async (req, res) => {
        res.send("work");
    });
};
