import mongoose from "mongoose";
import Address from "./Address";

const orderSchema = new mongoose.Schema({
    id: Number,
    name: String,
    email: String,
    phoneNumber: Number,
    address: Address.schema,
    date: Date,
    status: Number, // pending=0, approved=1, on-the-way=2, delivered=3  
})

export default mongoose.model("Order", orderSchema);