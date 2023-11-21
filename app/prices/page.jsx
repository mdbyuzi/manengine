"use client"
import { useEffect, useState } from "react"
import Navbar from "../component/navbar/navbar"
import PriceBlock from "../component/priceblock/priceblock"
import FetchPrice from "../component/productfetch/productfetch"
import Productfetch from "../component/productfetch/productfetch"
import Footer from "../component/footer/footer"
import Inputform from "../component/inputform/inputform"
import Formbox from "../component/formbox/formbox"
let num = 0
export default function Page() {
    let [email, setemail] = useState();
    let [numberphone, setnumberphone] = useState();
    let [namefamily, setnamefamily] = useState();
    let [corp, setcorp] = useState();
    let [toggle, settoggle] = useState();
    let [pricepic, setpricepic] = useState(0);
    let [text, settext] = useState()


    function pricehandle(data, checkhand) {

        console.log(checkhand);
        if (checkhand) {
            let res = num += data
            setpricepic(res)
            console.log("succ")

        } else {
            let res = num -= data
            setpricepic(res)
            console.log(res)
        }


        console.log(pricepic);
    }
    return <>
        <div>
            <Navbar />
            <div dir='rtl' className=" py-40 w-screen 2xl:px-[8rem] xl:px-[6rem] lg:px-[4rem] md:px-[2rem] px-7 flex flex-col justify-start items-start  font-vazir">

                <p className=" w-full  mb-[20px] text-[34px] text-gray mx-[20px]">فروش لایسنس ManageEngine AdManager Plus</p>
                <p className=" mb-[20px] text-[20px] text-gray mx-[20px]">برای محاسبه قیمت لایسنس منیج انجین اد منیجر پلاس, گزینه های مورد نیاز خود را انتخاب کنید:</p>

                <div className="w-full flex my-5 flex-col">
                    <ul className="flex self-end absolute top-[3.5px] left-10 bg-white z-30 border-b-0 w-[332px] flex justify-center items-center relative ul-page">
                        <li onClick={() => settoggle(true)} className={`
                          p-4 ${toggle ? "border-4" : "border-b-4"} text-lightgray   border-orange border-b-0`}>Professional Edition</li>
                        <li onClick={() => settoggle(false)} className={`
                         p-4 ${toggle ? "border-b-4" : "border-4"} border-orange border-b-0`}>Standard Edition</li>
                    </ul>

                    <div className={`${toggle ? 'hidden' : ""} border-4 border-orange rounded-xl p-6 `}>
                        <p className=" text-2xl">ADManager Plus Standard Edition (اشتراک سالانه)</p>
                        <p className="p-2  mt-8 text-xlw ">مدت زمان لایسنس</p>
                        <div className="p-4"><input className="m-2" type="radio" checked /><span >یک ساله</span></div>
                        <div className="">
                            <p className=" p-[3px] my-4 bg-green text-white text-[20px]  ">ADManager Plus Standard Edition (Annual Subscription)</p>
                            {/* this name for component mean first header charecter */}
                            <Productfetch pricehandle={pricehandle} from="Domain (Unrestricted Objects" />
                        </div>
                        <div>
                            <p className="p-[3px] my-4 bg-green text-white text-[20px]">ADManager Plus Active Directory Backup and Recovery add-on</p>
                            <Productfetch pricehandle={pricehandle} from="User Objects" />

                        </div>

                        <div className="flex flex-col mt-10">
                            <p>جمع کل</p>
                            <input className=" border-dashed border-2 w-[20%] p-2 border-darkgreen  my-2 border-dashded" type="text" disabled value={pricepic} />
                            <span className="text-xs">تومان</span>
                        </div>
                        <div className="flex w-full font-vazir">
                            <div className="flex justify-center items-center w-full ">
                                <Formbox />
                            </div>
                        </div>
                        
                        <button onClick={() => { postuserinfo() }} className="bg-bluewindows p-4 rounded">درخواست</button>

                    </div>

                    <div className={`${toggle ? '' : "hidden"} border-4 border-orange rounded-xl p-6 `}>
                        <p className=" text-2xl">ADManager Plus Professional Edition (اشتراک سالانه)</p>
                        <p className="p-2  mt-8 text-xlw ">مدت زمان لایسنس</p>
                        <div className="p-4"><input className="m-2" type="radio" checked /><span >یک ساله</span></div>
                        <div className="">
                            <p className=" p-[3px] my-4 bg-green text-white text-[20px]  ">ADManager Plus Professional Edition (Annual Subscription)</p>
                            {/* this name for component mean first header charecter */}
                            <Productfetch pricehandle={pricehandle} from="Domain (Unrestricted Objects) pro" />
                        </div>
                        <div>
                            <p className="p-[3px] my-4 bg-green text-white text-[20px]">ADManager Plus Active Directory Backup and Recovery add-on</p>
                            <Productfetch pricehandle={pricehandle} from="User Objects pro" />

                        </div>

                    </div>

                </div>

            </div>
        </div >

        <Footer />
    </>
}