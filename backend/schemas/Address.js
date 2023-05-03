import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    city: String,
    street: String,
    apartment: Number,
    floor: Number
})

export default mongoose.model("Address", addressSchema);