import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    id: Number,
    userName: Number,
    email: String,
    paswword: Number,
})

export default mongoose.model("Admin", adminSchema);