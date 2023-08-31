const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const order = new Schema({
    items: [{
        productId: { type: Schema.Types.ObjectId, required: true, ref: "Product" },
        title: { type: String, required: true },
        price: { type: Number, required: true },
        description: { type: String, required: true },
        quantity: { type: Number, required: true }
    }],
    userId: { type: Schema.Types.ObjectId, required: true, ref: "User" }
});

module.exports = mongoose.model("Order", order);