"use client"
import { faCaretRight, faCaretLeft } from "@fortawesome/free-solid-svg-icons"
import SliderItm from "../slideritm/slideritm"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
function Slidermain() {
    let [data, setdata] = useState(true)
    function make_change() {
        setdata(false)
    }
    function make_change2() {
        setdata(true)
    }
    return <>
        <div className="hidden lg:flex flex-row justify-center relative flex justify-center my-40 items-center cursor-pointer">
            <button onClick={() => { make_change2() }} className=" z-10 bg-white h-[40rem] w-[8rem] absolute left-0 transition ease-in-out delay-300 duration-300 w-12 p-3"><FontAwesomeIcon width={20}
                className="text-4xl transition ease-in-out delay-100 text-lightblue hover:text-btnblue" icon={faCaretLeft} /></button>
            <div className={`absolute left-[6rem] flex flex-row  w-[85rem] transition
            transition-all delay-300 duration-300  ${data ? " lg:translate-x-[6.5rem]  lg:translate-x-[6.5rem]" : "  lg:translate-x-[-20.5rem]"
                }`}>

                <SliderItm secondimage={"/assets/logo/activedirectory_color.png"} imagecontent={"/assets/logo/activedirectory.png"} subject="Active Directory (AD)" discription={"Monitor logons; analyze lockouts; detect changes to users, groups, OUs, GPOs, and other AD objects; audit Azure AD; and more."} />
                <SliderItm secondimage={"/assets/logo/AzureAD_color.png"} imagecontent={"/assets/logo/AzureAD.png"} subject="Azure AD" discription={"Track Azure sign-ins; investigate account lockouts; isolate risky logons; identify changes to group memberships, roles, devices, applications, and more."} />
                <SliderItm secondimage={"/assets/logo/Fileservers_color.png"} imagecontent={"/assets/logo/Fileservers.png"} subject="File Servers" discription={"Track file accesses and permission changes across Windows, NetApp, EMC, Synology, Hitachi, Huawei, and Amazon FSx for Windows file servers."} />
                <SliderItm secondimage={"/assets/logo/WindowsServer_color.png"} imagecontent={"/assets/logo/WindowsServer.png"} subject="Windows Server" discription="Monitor local logons; changes to users, groups, and security policies; file integrity; federation server activity; and more." />
                <SliderItm secondimage={"/assets/logo/WindowsWorkstation_color.png"} imagecontent={"/assets/logo/WindowsWorkstation.png"} subject="Windows workstation" discription="Monitor local logons; changes to users, groups, and security policies; file integrity; federation server activity; and more." />
            </div>
            <button onClick={() => {
                make_change()
            }} className="bg-white h-[40rem] w-[8rem] absolute right-0 transition ease-in-out delay-300 duration-300 w-12 p-3"><FontAwesomeIcon width={20}
                className="transition ease-in-out delay-100 text-lightblue hover:text-btnblue text-4xl" icon={faCaretRight} /></button>
        </div>
        <div className="hidden lg:flex">
            <ul className="flex flex-row">
                <li className="bg-gray w-[50px] h-[20px]" onClick={() => {make_change()}}>_</li>
                <li className="bg-gray w-[50px] h-[20px]" onClick={() => {make_change2()}}>_</li>
            </ul>
        </div>
    </>
}
export default Slidermain