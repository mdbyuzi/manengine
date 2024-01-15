"use client"
import { useEffect, useState } from "react"
import Dropdownlist from "../dropdownlist/dropdownlist"
export default function ActionList({ data }) {
    let [open, setopen] = useState();
    let [datamoduls, setdatamoduls] = useState(false);
    let [datasubmodules, setdatasubmodules] = useState([]);
    let [valuetype, setvaluetype] = useState();
    function settogglelist(titm) {
        setopen(titm)
        console.log(titm, "data id", data);
    }
    useEffect(() => {
        console.log(datamoduls);
    }, [datamoduls])
    function pagechangehandler(userevent) {
        // let res= data.map(() => {
        //    return data.modules.find((itm) => {
        //         return itm.name === userevent.name
        //     })
        // })
        // console.log(res);
        let arrres = []
        data.map((uii) => {
            arrres.push(...uii.modules)
        })
        let res = arrres.find((itm) => {
            return itm.name === userevent
        })
        setdatamoduls(res);
        console.log(res);
    }
    function makepricetotoman(price){
        let newprice =price.toString()
        return newprice.match(/\d/g).join("")*30
    }

    return <div className="flex w-full">
        <div className=" p-4 w-[50%] flex flex-col text-[15px] text-lightgray font-bold border-r-[1px] ">
            {data.map((itm,index) => {
                return <Dropdownlist key={index} datamoduls={datamoduls.name} pagehand={pagechangehandler} keylid={itm.id} open={open} seteropen={(data) => settogglelist(data)} data={itm} />
            })}
        </div>
        <div className="p-4 flex justify-center w-[100%]">
            {datamoduls ? <>
                <div className="flex flex-col w-full itmes-center">
                    <p className="bg-bluewindows glass text-white p-2 rounded-lg font-vazir text-start text-center">{datamoduls.name}</p>
                    <p className="my-10 font-vazir text-end flex flex-col justify-center">{datamoduls.title}</p>
                    <div className="flex color-lightgray flex-col justify-center items-center border-[1px]-lightgray rounded-md">
                        {datamoduls.submodules.map((itm) => {
                            return <>
                                <p className="text-3xl pt-20">{itm.type}</p>
                                <p className="flex mt-10 bg-lightgray w-[80%] text-graylight px-4 m-2 rounded-sm">
                                    <div className="w-full ">
                                        <p className="text-white">Products</p>
                                    </div>
                                    <div>
                                        <p>livePrice</p>
                                        <p></p>
                                    </div>
                                </p>
                                <ul className="">{
                                    itm.products.map((mti) => {
                                        console.log("itm type", itm.type)
                                        return <>{itm.type === "ManageEngine ADSelfService Plus - Annual Subscription Model" ? <div>

                                            <div className="flex p-2 justify-between w-[40rem]" >
                                                <p>choose Edition</p>
                                                <div className="flex flex-col">
                                                    <div>
                                                        <input type="radio" /> <span>Standard</span>
                                                    </div>
                                                    <div>
                                                        <input type="radio" />
                                                        <span> Professional</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-5 flex justify-between w-[40rem]">
                                                <p>Number of Domain Users</p>
                                                <input className="border border-lightgray" type="text" />ّ
                                            </div>
                                        </div> : itm.type === "Add-ons" ? <div className="">
                                            <div className="flex p-2 justify-between w-[40rem]" >
                                                <div className="flex flex-col">
                                                    <div>
                                                        <input type="checkbox" /> <span> Endpoint MFA </span>
                                                    </div>
                                                    <div>
                                                        <input type="checkbox" />
                                                        <span> Failover and Secure Gateway Services</span>
                                                    </div>
                                                    <div>
                                                        <input type="checkbox" />
                                                        <span> SMS Add-on</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> : itm.type === "ManageEngine RecoveryManager Plus - Subscription Model" ? <>
                                            <div>
                                                <div className="flex p-2 justify-between lg:w-[40rem]" >
                                                    <div className="flex flex-col w-full">
                                                        <div>
                                                            <div className="mt-5 flex w-full justify-between ">
                                                                <p>Choose AD environment</p>
                                                                <select className="border-[1px] border-lightgray  " name="" id="">
                                                                    <option value=""></option>
                                                                    <option value="On-prem AD">On-prem AD</option>
                                                                    <option value="Number of enabled AD User Objects">Azure AD</option>
                                                                    <option value="Number of Exchange Mailboxes">
                                                                        Hybrid AD
                                                                    </option>
                                                                </select>
                                                            </div>
                                                            <div className="flex mt-5 w-full justify-between">
                                                                <p>Number of enabled AD User Objects</p>
                                                                <input className="w-[100px] border-[1px] border-lightgray  " type="text" />
                                                            </div>
                                                            <div className="flex mt-5 justify-between">
                                                                <p>Number of Exchange Mailboxes</p>
                                                                <div>
                                                                    <form className="flex flex-col" action="#">
                                                                        <div className="p-2">
                                                                            <span>Backup & Restoration + PST Exports</span>
                                                                            <input className="mx-2    " type="checkbox" />
                                                                        </div>
                                                                        <div className="p-2">
                                                                            <span>Mailbox PST Exports</span>
                                                                            <input className="mx-2" type="checkbox" />
                                                                        </div>

                                                                    </form>

                                                                </div>

                                                            </div>
                                                            <div className="flex mt-5 w-full justify-between">
                                                                <p>Number of SharePoint Online Sites</p>
                                                                <input className="w-[100px] border-[1px] border-lightgray  " type="text" />
                                                            </div>
                                                            <div className="flex mt-5 w-full justify-between">
                                                                <p>Number of OneDrive for Business Sites</p>
                                                                <input className="w-[100px] border-[1px] border-lightgray  " type="text" />
                                                            </div>
                                                            <div className="flex mt-5 w-full justify-between">
                                                                <p>Number of Google Workspace Backup Users</p>
                                                                <input className="w-[100px] border-[1px] border-lightgray  " type="text" />
                                                            </div>
                                                            <div className="flex mt-5 w-full justify-between">
                                                                <p>Onboarding & Training</p>
                                                                <div>
                                                                    <div className="p-2">
                                                                        <span>Backup & Restoration + PST Exports</span>
                                                                        <input className="mx-2    " type="checkbox" />
                                                                    </div>
                                                                    <div className="p-2">
                                                                        <span>Mailbox PST Exports</span>
                                                                        <input className="mx-2" type="checkbox" />
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </> : itm.type === "Manageengine AD360 Subscription Model" ? <>
                                            <div className="flex flex-col mt-5 w-[40rem] justify-between">
                                                <div className="flex flex-col justify-center w-full">
                                                    <p className="p-2 py-5 font-bold">ADManager Plus</p>
                                                    <div className="m-2 flex justify-between"><span>No. of Domains</span><input className="border-[1px] border-lightgray" type="text" /><span>$0</span></div>
                                                    <div className="m-2 flex justify-between"><span>No. of Help Desk Technicians</span><input className="border-[1px] border-lightgray" type="text" /><span>$0</span></div>
                                                </div>
                                                <div className="flex flex-col justify-center w-full">
                                                    <p className="p-2 py-5 font-bold">ADAudit Plus </p>
                                                    <div className="m-2 flex justify-between"><span>No. of Domain Controllers</span><input className="border-[1px] border-lightgray" type="text" /><span>$0</span></div>
                                                    <div className="m-2 flex justify-between"><span>No. of File Servers</span><input className="border-[1px] border-lightgray" type="text" /><span>$0</span></div>
                                                    <div className="m-2 flex justify-between"><span>No. of Member Servers</span><input className="border-[1px] border-lightgray" type="text" /><span>$0</span></div>
                                                    <div className="m-2 flex justify-between"><span>No. of Workstations</span><input className="border-[1px] border-lightgray" type="text" /><span>$0</span></div>
                                                </div>
                                                <div className="flex flex-col justify-center w-full">
                                                    <p className="p-2 py-5 font-bold">No. of Domain Users</p>
                                                    <div className="m-2 flex justify-between"><span>No. of Domain Controllers</span><input className="border-[1px] border-lightgray" type="text" /><span>$0</span></div>
                                                    
                                                </div>
                                                <div className="mt-10 flex justify-between w-full">
                                                    <p className="p-2 py-5 font-bold">Choose Edition :</p>
                                                    <div className="m-2 flex justify-between">
                                                        <select name="" id="">
                                                            <option value="Standard">Standard</option>
                                                            <option value="Professinal">Professinal</option>
                                                        </select>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        </> : <li className=" color-bluecyber font-vazir hover:border-x-1 w-[45rem] flex flex-row items-center justify-between p-1">
                                            <p className="mx-10 text-darkred flex flex-nowrap">{makepricetotoman(mti.price)}<span className="mx-2">تومان</span></p><div className="flex">
                                                <p className="self-start mx-2 flex whitespace-nowrap">{mti.title?mti.title:""}</p>
                                                <input type="checkbox" className="m-2 " />
                                            </div>
                                        </li>
                                        }</>
                                    })
                                }
                                </ul >
                            </>

                        })}
                    </div>
                </div>
            </> : <>
                <div className=" flex h-[40px] lg:w-[50rem] ">
                    <p className="bg-cyberyard text-white w-[100%] p-2 rounded-lg font-vazir  text-end">لیست قیمت ها برای مشاهده انتخاب کنید</p>
                    <div className="">

                    </div>
                </div>
            </>}
        </div>
    </div >
}