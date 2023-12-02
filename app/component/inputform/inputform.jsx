"use client"
import { useEffect, useState } from "react";

export default function Inputform({ name, set, pos, formid, setfalseerror ,valset }) {
    let [inpuval, setinpuval] = useState();
    let [theme, settheme] = useState(false);
    //in hear im make pos and you can use for strick feild
    useEffect(() => {
        setinpuval(valset)
        console.log(valset);
    }, [valset])
    function validation(e) {
        switch (pos) {
            case "emi":
                let patrn = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                let mat = patrn.test(e)
                console.log(mat, " ", patrn, " ", e);
                if (mat) {
                    settheme(false)
                    setinpuval(e)
                    set(e)
                } else {
                    settheme(true)
                }
                break
            case "num":
                console.log(e.length, e);
                if (e.length == 11) {
                    if (+e) {
                        settheme(false)
                        set(e)
                    } else {
                        settheme(true)

                    }
                    console.log(Number(e));

                } else {
                    settheme(true);

                }

                break
            case "nam":

                if (e.length > 3) {
                    setinpuval(e)
                    set(e)

                    settheme(false)
                } else {
                    settheme(true)
                }
                break
            case "cor":

                console.log(e.length);
                if (e.length > 3) {
                    setinpuval(e)
                    set(e)

                    settheme(false)
                    console.log(e);
                } else {
                    settheme(true)
                }
                break
            case "tex":
                setinpuval(e)
                set(e)
                break
        }
    }
    return <>
        <div className={`m-10 ${pos === "tex" ? "w-[100%]" : ""}`}>
            <div className={`flex flex-col mx-[15px]   `}>
                <div>
                    <span>{name}</span>
                </div>
                <div>
                    {pos === "tex" ? <textarea onBlur={(e) => validation(e.currentTarget.value)} onChange={(e) => {
                        setinpuval(e.currentTarget.value);
                    }} value={inpuval} name={formid} className={` ${pos === "tex" ? "w-full h-[26rem] text-start" : ""} w-full h-[40px] bg-lightgray rounded-xs  border-bluewindows outline-1 outline-bluewindows`} type="text" /> : <input onBlur={(e) => { validation(e.currentTarget.value); }
                    } onChange={(e) => {
                        validation(e.currentTarget.value);
                        setinpuval(e.currentTarget.value)
                    }} value={inpuval} name={formid} className={` ${pos === "tex" ? "w-full h-[26rem] text-start" : ""} w-full h-[40px] bg-lightgray rounded-xs  border-bluewindows outline-1 outline-bluewindows`} type="text" />}
                    <div className={`text-red ${theme ? " flex" : "hidden"}`}><p>{name}</p><span> صحیح نیست!</span></div>
                </div>
            </div>
        </div>
    </>
}