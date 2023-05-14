import mongoose from "mongoose";
import Address from "./Address";

const productInfo = new mongoose.Schema({
    productId: Number,
    changes: String,
    amount: Number,
})

const orderSchema = new mongoose.Schema({
    id: Number,
    name: String,
    email: String,
    productInfo: [productInfo],
    phoneNumber: Number,
    address: Address.schema,
    amount: Number,
    date: Date,
    status: Number, // pending=0, approved=1, on-the-way=2, delivered=3  
})

export default mongoose.model("Order", orderSchema);