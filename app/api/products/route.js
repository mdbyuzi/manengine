import connectMongoDB from "../../../libs/mongodb";
import { NextResponse} from "next/server"
import Product from "../../../models/product";
// export async function POST(request){
//     const {type,DISCRIPTION,PRICE} =await request.json();
//     console.log("helloworld",type,DISCRIPTION,PRICE);
//     await mongoose.connect(process.env.MONGODB_URL);
//     await Product.create({type,DISCRIPTION,PRICE});
//     return NextResponse.json({message:"Topic Create"}) 
// }
export async function GET(){
    await connectMongoDB();
    const topics = await Product.find();
    return NextResponse.json({topics});
}
