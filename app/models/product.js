import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({ type:String,DISCRIPTION: String, PRICE: String  },{
    timestamps: true
});
const Product = mongoose.models.Product||mongoose.model("Product", userSchema);

export default Product;



