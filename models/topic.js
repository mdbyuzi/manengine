import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({ type:String,DISCRIPTION: String, PRICE: String  },{
    timestamps: true
});
const Topic = mongoose.models.Topic||mongoose.model("Topic", userSchema);

export default Topic;



