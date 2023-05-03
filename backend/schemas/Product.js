import mongoose from "mongoose";
import Category from "./Category";

const productSchema = new mongoose.Schema({
    id: Number,
    name: String,
    description: String,
    image: Buffer,
    inStock: Boolean,
    allergies: String,
    changes: String,
    amount: Number,
    Category: Category.schema,
})

export default mongoose.model("Product", productSchema);