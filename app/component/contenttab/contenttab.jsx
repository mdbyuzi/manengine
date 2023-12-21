import Slidermain from "../slideritm/slideritm.jsx"
import { faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
function Contenttab() {
    return <>
        <div className=" font-vazir my-40 w-full flex flex-col justify-center itmes-center text-center "> 5?
            <h1 className="font-vazir text-gray-600 text-2xl md:text-3xl lg:text-5xl px-10 my-10 lg:w-70">یک حسابرس تغییر مبتنی بر UBA</h1>
            <p className="text-lg px-3">ADAudit Plus به حفظ امنیت و سازگاری اکوسیستم ویندوز سرور شما کمک می کند

                با ایجاد دید کامل در تمام فعالیت ها.</p>
            <p className="text-xl">by providing full visibility into all activities.</p>
            <div className="hidden md:flex mt-10 flex flex-row justify-center ltr">
                <div className=" h-12 flex flex-row items-center justify-center outline outline-1 outline-lightgray border-lightgray h-10  rounded-xs" >
                    <FontAwesomeIcon className="text-gray font-thin m-3" width={20} icon={faEnvelopeOpen} />
                    <input placeholder="Business E-Mail ID*" className=" border-s-2
                    border-lightgray h-9 outline-none px-2 text-[85%] w-80 " type="text" />
                    <div className="w-20">
                        <select name="" id="">
                            <option value="IR">IR</option>
                            <option value="IR">US</option>
                            <option value="IR">CA</option>
                        </select>
                    </div>
                </div>
                <button className=" text-lg text-white bg-orange w-52 rounded-r-[5px] ">schedule demo</button>
            </div>
            <p className="hidden md:flex justify-center text-[80%] mt-3">با کلیک کردن
                برنامه نمایشی را برنامه ریزی کنید
                ، شما با پردازش داده های شخصی مطابق با
                سیاست حفظ حریم خصوصی.<Link className="text-blue" href="#">Privacy Policy.</Link></p>
            <div className="mt-10"><button className=" md:hidden  h-12 z-20 text-md text-white bg-orange w-56 font-bold">Email download link</button></div>
        </div>

    </>
}
export default Contenttab
