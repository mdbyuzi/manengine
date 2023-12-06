import Image from "next/image"
import gif from "./Wedges-3s-200px.gif"
function Loading() {
    return <>
        <div className="w-screen h-screen bg-opacity-100 flex justify-center items-center">
            <Image alt="loading..." src={gif} width={500} height={500}></Image>
        </div>
    </>
}
export default Loading