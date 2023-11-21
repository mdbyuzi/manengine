import { useEffect, useState } from "react";

export default function Inputform({ name, set, flag,pos }) {
    let [inpuval, setinpuval] = useState();
    let [theme, settheme] = useState(false);
    useEffect(() => {

    }, [inpuval])
    function validation(e,c) {
        switch (flag) {
            case "emi":
                c.currentTarget.name="text"
                let patrn = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                let mat = patrn.test(e)
                console.log(mat, " ", patrn, " ");
                if (mat) {
                    settheme(false)
                    setinpuval(e)
                    set(e)
                } else {
                    settheme(true)
                }
                
            case "num":
                c.currentTarget.name="numberphone"

                if (e.length < 11) {
                    if (Number(e)) {
                        settheme(false)
                        set(e)

                    } else {
                        settheme(true);

                    }

                } else {
                    settheme(false)
                }
            case "nam":
                c.currentTarget.name="namefamily"

                if (Number(e).length > 3) {
                    setinpuval(e)
                    set(e)

                    settheme(false)
                } else {
                    settheme(true)
                }
            case "cor":
                c.currentTarget.name="corp"

                if (Number(e.length > 3)) {
                    setinpuval(e)
                    set(e)

                    settheme(false)
                    console.log(e);
                } else {
                    settheme(true)
                }
        }
    }
    return <>
        <div className={`m-10 ${pos==="tex"?"w-[100%]":""}`}>
            <div className={`flex flex-col mx-[15px]   `}>
                <div>
                    <span>{name}</span>
                    <span className={`text-red ${pos==="tex"?"hidden":""}`}>*</span>
                </div>
                <div>
                    {pos==="tex"?<textarea  onBlur={(e) => validation(e.currentTarget.value,e)} onChange={(e) => {
                        setinpuval(e.currentTarget.value)
                    }} value={inpuval} name={pos} className={` ${pos==="tex"?"w-full h-[26rem] text-start":""} w-full h-[40px] bg-lightgray rounded-xs  border-bluewindows outline-1 outline-bluewindows`} type="text" />:<input  onBlur={(e) => validation(e.currentTarget.value,e)} onChange={(e) => {
                        setinpuval(e.currentTarget.value)
                    }} value={inpuval} name={pos} className={` ${pos==="tex"?"w-full h-[26rem] text-start":""} w-full h-[40px] bg-lightgray rounded-xs  border-bluewindows outline-1 outline-bluewindows`} type="text" />}
                    <div className={`text-red ${theme ? " flex" : "hidden"}`}><p>{name}</p><span> صحیح نیست!</span></div>
                </div>
            </div>
        </div>
    </>
}