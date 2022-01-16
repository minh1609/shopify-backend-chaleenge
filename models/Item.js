const mongoose = require("mongoose");

const itemScheme = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    quantity: { type: Number, required: true },
});
const Item = mongoose.model("items", itemScheme);
module.exports = Item;
