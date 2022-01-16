const mongoose = require("mongoose");

const itemScheme = new mongoose.Schema({
    question: { type: String, required: true },
    option: { type: Array, required: true },
    answer: { type: Number, required: true },
});
const Item = mongoose.model("items", itemScheme);
module.exports = Item;
