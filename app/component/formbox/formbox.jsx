"use client"
import React, { useEffect, useState } from "react";
import $ from "jquery"
import Inputform from "../inputform/inputform";
import axios from "axios"
const Formbox = ({ price, itmes }) => {
    const [email, setEmail] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [name, setName] = useState();
    const [text, setText] = useState();
    const [corp, setCorp] = useState();
    const [result, setResult] = useState();
    const [errori, seterror] = useState(false);
    const [getresult, setgetresult] = useState();
    const [emailverify, setemailverify] = useState();
    const [succses, setsuccses] = useState(false);
    useEffect(() => {
        axios.get("http://localhost:3000/testbackend/views/getlogininfo").then((res) => {
            return res.data;
        }).then((data) => {
            if (data) {
                setgetresult([...data]);
                console.log(getresult);
            }
        })
    }, [succses])
    function clearhandler() {
        setEmail("")
        setName("")
        setPhoneNumber("")
        setCorp("")
        setText("")

    }
    function handleSubmit(e) {
        e.preventDefault()
        setsuccses(false)
        if (email && phoneNumber && name && text && corp) {
            seterror(false)
            if (getresult.length !== 0) {
                let resulting = getresult.find((itm) => {
                    return itm.email === email
                })
                console.log(resulting);
                console.log(getresult);
                if (resulting) {
                    setemailverify(true);
                    console.log("true");
                    clearhandler()
                } else {
                    setemailverify(false);
                    let form = $(e.currentTarget)
                    $.ajax({
                        type: "POST",
                        url: "http://localhost:3000/testbackend/views/post",
                        data: form.serialize(),
                        success: function (data) {
                            setResult(data)
                        }
                    })
                    setsuccses(true)
                    clearhandler()
                    console.log("succsess");


                }

            } else {

                $.ajax({
                    type: "POST",
                    url: "http://localhost:3000/testbackend/views/post",
                    data: from.serialize(),
                    success: function (data) {
                        setsuccses(true)
                        form.reset()
                    }
                })

                console.log("else");


            }
        } else {
            seterror(true)

        }
    }
    return (
        <form className="flex flex-wrap flex-row  justify-center items-center" onSubmit={(e) => { handleSubmit(e) }} action="http://localhost/testbackend/views/post" method="post">
            <Inputform valset={name} formid="namefamily" name="نام نام خانوادگی" pos="nam" set={setName} />
            <Inputform valset={phoneNumber} formid="numberphone" name="تلفن" pos="num" set={setPhoneNumber} />
            <Inputform valset={email} formid="email" name="ایمیل" pos="emi" set={setEmail} />
            <Inputform valset={corp} formid="corp" name="نام شرکت/سازمان" pos="cor" set={setCorp} />
            <Inputform valset={text} formid="text" name="ارسال پیام" pos="tex" set={setText} />
            <input className="hidden" type="text" value={price} />
            <div className="w-full flex my-3 flex-col">
                <div>
                    <p className={`mt-8 ${errori ? "flex" : 'hidden'} text-red`}>اطلاعات کامل نیست!!</p>
                    <p className={`mt-8 ${succses ? "flex" : 'hidden'} text-red`}>کاربر گرامی درخواست شما ثبت شد</p>
                    <p className={`mt-8 ${emailverify ? "flex" : "hidden"} text-red`}>ایمیل قبلا استفاده شده!!!</p>
                </div>
            </div>
            {/* <input placeholder="email" name="email"  type="text" />
            <input placeholder="numberphone" name="numberphone"  type="text" />
            <input placeholder="namefamily" name="namefamily"  type="text" />
            <input placeholder="corp" name="corp"  type="text" />
            <input placeholder="text" name="text"  type="text" />
            <input placeholder="submit" type="submit" /> */}
        </form>
    );
};

export default Formbox;