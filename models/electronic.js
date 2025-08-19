const mongoose = require("mongoose");

const electronicSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    url: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        min: 0
    }
});

const Electronics = mongoose.model("Electronics",electronicSchema);

module.exports = Electronics;