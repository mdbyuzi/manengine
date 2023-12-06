"use client"
import { useState } from "react";
export default function PostInputaction({ method }) {
    let [type, settype] = useState();
    let [price, setprice] = useState();
    let [discription, setdiscription] = useState();
    let [result, setResult] = useState();
    let [error, seterror] = useState();
    function cleaning(){
        settype()
        setprice()
        setdiscription()
    }
    async function submithandler() {
        console.log(type, price, discription);
        let obj = {
            type: type,
            DISCRIPTION: discription,
            PRICE: price
        }
        if (method === "post") {

            console.log(JSON.stringify(obj));
            fetch("https://adaudit.ir/api/topics", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify(obj)
            }).then((e) => {
                console.log(type);
                seterror("محصول اضافه شد")
            }).catch(() => {
                seterror("خطا")
            })
        } else if (method === "delete") {
            await fetch("https://adaudit.ir/api/topics").then((data) => {
                return data.json()
            }).then((data) => {
                setResult(data)
                console.log(data);
            })
            console.log(result);
            let res = result.topics.find((itm) => {
                return itm.DISCRIPTION === discription && itm.PRICE === price
            })
            console.log(res);
            fetch(`https://adaudit.ir/api/topics?id=${res._id}`, {
                method: "DELETE"
            }).then((e) => {
                cleaning()
                seterror("موفقیت امیز")
                console.log(e);
            })
            console.log(result);
        }
        else {
            return "null"
        }
    }

    return <>
        <div className="my-20 text-2xl flex flex-row-reverse justify-end ltr:mr-3 p-4">
            <button onClick={submithandler} className={`mx-4 px-2 ${method === "post" ? "bg-bluewindows" : "bg-red"} rounded`}>{method === "post" ? "اضافه کردن محصول" : "حذف کردن محصول"}</button>
            <div className="flex itmes-center">
                <input value={discription} onChange={(e) => {
                    setdiscription(e.currentTarget.value)
                }} placeholder="discription:" className="broder border-2 p-2 m-2" type=" text " />
                <input value={price} onChange={(e) => {
                    setprice(e.currentTarget.value)
                }} placeholder="price:" className="broder border-2 p-2 m-2" type=" text " />
                {method === "post" ? <select onChange={(e) => { settype(e.currentTarget.value) }} name="" id="">
                    <option value="Domain">Domain</option>
                    <option value="User Objects">User Objects</option>
                    <option value="Domain pro">Domain pro</option>
                </select> : ""}
            </div>
        </div >
        <p className="text-2xl">{error}</p>
    </>
}
