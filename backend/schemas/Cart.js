import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    id: Number,
    orderID: Number,
    productID: Number,
})

export default mongoose.model("Cart", cartSchema);