const express = require("express");

const Item = require("../models/Item");

module.exports = (app = express()) => {
    app.get("/api/item", async (req, res) => {
        let id = req.params.id;

        const data = await Item.find();
        res.send(data);
    });

    app.get("/api/item/:id", async (req, res) => {
        let id = req.params.id;

        const data = await Item.findById(id);
        res.send(data);
    });

    app.post("/api/item", async (req, res) => {
        let { name, description, quantity } = req.body;

        let newItem = new Item({
            name,
            description,
            quantity,
        });

        try {
            let data = await newItem.save();
            res.send(data);
        } catch (error) {
            res.send(error);
        }
    });

    app.patch("/api/item/:id", async (req, res) => {
        let id = req.params.id;

        try {
            let data = await Item.findByIdAndUpdate(id, {
                $set: req.body,
            });
            res.send(data);
        } catch (error) {
            res.send(error);
        }
    });

    app.delete("/api/item/:id", async (req, res) => {
        let id = req.params.id;

        try {
            let data = await Item.findByIdAndDelete(id);
            res.send(data);
        } catch (error) {
            res.send(error);
        }
    });

    //Testttt
    app.get("/test/api", async (req, res) => {
        res.send("Server is running");
    });
};
