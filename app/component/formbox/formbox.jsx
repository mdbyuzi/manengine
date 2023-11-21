import React, { useState } from "react";
import $ from "jquery"
import Inputform from "../inputform/inputform";

const Formbox = () => {
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [name, setName] = useState("");
    const [text, setText] = useState("");
    const [corp, setCorp] = useState("");

    function handleSubmit(e) {
        e.preventDefault()
        const form = $(e.target);
        $.ajax({
            type: "POST",
            url: form.attr("action"),
            data: form.serialize(),
            success(data) {
                setResult(data);
            },
        });
    }

    return (
        <form className="flex flex-wrap flex-row  justify-center items-center" onSubmit={(e) => { handleSubmit(e) }} action="http://localhost/testbackend/views/post" method="post">
            <Inputform name="نام نام خانوادگی" pos="nam" set={setName}/>
            <Inputform name="تلفن" pos="num" set={setPhoneNumber}  />
            <Inputform name="ایمیل" pos="ema" set={setEmail}  />
            <Inputform name="نام شرکت/سازمان"pos="cor" set={setCorp} />
            <Inputform name="ارسال پیام"pos="tex" set={setCorp} />
        </form>
    );
};

export default Formbox;