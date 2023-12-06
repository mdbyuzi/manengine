import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse} from "next/server"
export async function POST(request){
    const {type,DISCRIPTION,PRICE} =await request.json();
    console.log("helloworld",type,DISCRIPTION,PRICE);
    await connectMongoDB();
    await Topic.create({type,DISCRIPTION,PRICE});
    return NextResponse.json({message:"Topic Create"}) 
}
export async function GET(){
    await connectMongoDB();
    const topics = await Topic.find();
    return NextResponse.json({topics});
}
export async function DELETE(request){
    const id = request.nextUrl.searchParams.get("id")
    await Topic.findByIdAndDelete(id);
    return NextResponse.json({message:"topicdeleted"})
}