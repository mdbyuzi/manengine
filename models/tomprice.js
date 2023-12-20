import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({ type:String,DISCRIPTION: String, PRICE: String  },{
    timestamps: true
});
const Tomprice = mongoose.models.Tomprice||mongoose.model("Tomprice", userSchema);

export default Tomprice;



