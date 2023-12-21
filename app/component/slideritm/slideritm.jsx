"use client"
import Image from "next/image"
import "./slideritm.css"
import { useState } from "react"
function SliderItm({ subject, discription, imagecontent,secondimage}) {
    let [hover,sethover]=useState(true)
    return <><div onMouseEnter={()=>{
        sethover(!hover)
    }} onMouseLeave={()=>{
        sethover(!hover)
    }} className="absolute transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-200 duration-300 hover:shadow-gray relative my-20 m-4 flex flex-col items-center rounded-2xl w-[300px] h-[340px] outline outline-1 outline-lightblue">
        <div className=" flex flex-row justify-center anim-title absolute bg-white w-[120px] h-[100px]"><Image alt="not loading" className="" width={110} height={100} src={hover?imagecontent:secondimage}></Image></div>
        <div className="flex flex-col items-center my-16 text-center w-full">
            <p className="font-bold">{subject}</p>
            <p className="w-[80%] text-[13px] my-4">{discription}</p>
            <button className="absolute bottom-8 transition ease-in-out delay-150 bg-blue-500 hover:text-white outline outline-lightblue outline-1 rounded-lg hover:bg-btnblue hover:text-gray p-3 my-[-1px]">Learn more</button>
        </div>
    </div>
    </>
}
export default SliderItm
