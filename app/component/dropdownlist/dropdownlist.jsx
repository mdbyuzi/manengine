"use client"
import { useState } from "react";
import Link from "next/link"
import "./dropdownlist.css"
function Dropdownlist({ data, open, seteropen, keylid ,pagehand,datamoduls}) {
    let [dataself, setdataself] = useState(false)
    let result = data.items.split(",")
    let [selectcolor,setselectcolor]=useState(false)
    console.log(result);
    return <>
        <li className="dropdownlist flex flex-col items-end  ">
            <span className=" text-lg p-3 " onClick={() => {
                console.log(keylid);
                seteropen(keylid)
            }}>{data.DISCRIPTION}</span>
            <ul className={`mx-10 flex flex-col drop-list transition ease-in-out delay-150 duration-300 ${open === keylid ? "h-[100%]" : "hidden"}  `}>
                {
                    result.map((itm,index) => {
                        return <li onClick={(e)=>{
                            console.log("datamoduls name",datamoduls);
                            console.log(itm);
                            setselectcolor(e.currentTarget.value)
                             pagehand(itm)}} className={`transition ease-in-out delay-150 duration-300 ${itm===datamoduls?"text-green":""}  ${open === keylid ? "h-[100%]" : "w-[0px] h-[0px]"} no-wrap p-4 cursor-pointer`} key={index} >{itm}</li>
                    })
                }

            </ul>
        </li>
    </>
}
export default Dropdownlist