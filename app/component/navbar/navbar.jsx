"use client"
import "./navbar.css"
import Image from "next/image"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faDownload, faMapPin, faSearch } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
function Navbar() {
    let [inputColor, setInputColor] = useState(false)
    let [toggleSearch, setToggleSearch] = useState(false)
    let [searchValue, setSearchValue] = useState();
    let [barstoggle, setbartoggle] = useState(false);

    function search_toggle_open() {
        setToggleSearch(true)
    }
    function search_toggle_close() {
        setToggleSearch(false)
    }
    function openbar() {
        setbartoggle(!barstoggle)
    }
    return <> <div onClick={(e) => {
        e.stopPropagation()
        setSearchValue("")
        search_toggle_close()
    }} className={` z-40 h-[7rem] bg-white flex flex-row-reverse  justify-around items-center border-20 border-solid border-indigo-500 border-lightgray border-y-2 fixed  w-full`}>
        <div className="flex">
            <Image alt="not loading" className="mx-4" src="/assets/logo/manageengine-logo.svg" width={250} height={180}></Image><span className="self-end text-xl">fa</span><span></span>

        </div>
        <div className="flex flex-row justify-between w-90 m-10 mx-2">

            <div className="m-4 flex flex-row-reverse font-vazir items-center">
                <div className="flex jusfiy-center items-center px-1 pb-2">
                    <input value={searchValue} onClick={(e) => {
                        e.target.select()
                        setInputColor(false)
                        e.stopPropagation()
                        search_toggle_open()
                    }} onChange={(e) => {
                        setSearchValue(e.target.value)
                    }} placeholder="جستجو : " className={`${inputColor ? "text-red" : "text-black"} border-0 outline-0 outline-gray p-4 shadow-md h-[40px] rounded-xs hidden xl:flex text-md box-shadow-100 input-search border-2 border-gray ${toggleSearch ? "open" : "close"}`} type="text" />
                    <FontAwesomeIcon className="px-4 hidden xl:flex cursor-pointer " width={18} icon={faSearch} onClick={(e) => {
                        if (toggleSearch) {
                            if (searchValue) {
                                setInputColor(true)
                                setSearchValue("عبارت را تایپ کنید!")
                            } else {

                            }
                        } else {
                            search_toggle_open();
                        }
                        e.stopPropagation()
                    }} ></FontAwesomeIcon>
                </div>
                <ul className="nav_search hidden xl:flex items-center justify-center">
                    <li className="cursor-pointer hidden text-lg  lg:flex text-gray m-4 hover:text-green"><Link href="/"></Link></li>
                    <li className="cursor-pointer hidden text-lg  lg:flex text-gray p-4 hover:text-green">محصولات</li>
                    <li className="cursor-pointer hidden text-lg  lg:flex text-gray p-4 hover:text-green">تماس با ما</li>
                    <li className="cursor-pointer hidden text-lg  lg:flex text-gray p-4 hover:text-green">درباره ما</li>
                    <li className="cursor-pointer hidden text-lg  lg:flex text-gray p-4 hover:text-green">فروشگاه</li>
                    <Link href="/">
                        <li className="cursor-pointer hidden text-lg  lg:flex text-gray p-4 hover:text-green">صفحه اصلی</li>
                    </Link>
                </ul>

                <div className="self-center h-12 hidden lg:flex flex-row  bg-orange text-xl 
                text-white rounded-md">
                    <Link href="/prices">
                        <button className="flex flex-row text-lg px-5 py-[10px] justify-center" >لیست قیمت <FontAwesomeIcon className="ml-3" width={13} icon={faMapPin} /></button></Link>
                </div >
                <div className=" xl:hidden flex w-full ">
                    <FontAwesomeIcon onClick={() =>
                        openbar()
                    } className="z-50 text-[30px]" width={30} height={70} icon={faBars} />

                </div>

            </div>
        </div>

    </div>
        <div className={` trantition  duration-150 ease-in-out text-end font-vazir my-[120px] absolute z-40 xl:hidden ${barstoggle ? "w-full translate-x-[0px]" : "w-0"} transform translate-x-[-40px] translate-y-4`}>
            <ul className="flex flex-col z-40">
                <Link href="/">
                    <li className="p-4 border cursor-pointer bg-green border-bottom">صفحه اصلی</li>
                </Link>
                <li className="p-4 border cursor-pointer bg-green border-bottom">فروشگاه</li>
                <li className="p-4 border cursor-pointer bg-green border-bottom">درباره</li>
                <li className="p-4 border cursor-pointer bg-green border-bottom">تماس با ما</li>
                <li className="p-4 border cursor-pointer bg-green border-bottom">محصولات</li>
                <Link href="/prices">
                    <li className="p-4 border bg-green border-bottom">لیست قیمت</li>
                </Link>
            </ul>
        </div>
    </>
}
export default Navbar