import Navbar from "../component/navbar/navbar.jsx"
import Dropdownlist from "../component/dropdownlist/dropdownlist.jsx"
import "./price.css"
import Link from "next/link"
import ActionList from "../component/actionlist/actionlist.jsx"
async function getData() {
    // Fetch data from external API
    const res = await fetch(`http://localhost:3001/api/products`,{cache:"no-store"})
    const data = await res.json()
    console.log(data.topics);
    return data.topics
}
export default async function Page() {
    const data = await getData();
    const datamodules=data
    console.log(datamodules);
    console.log("29",datamodules);
    return <>

        <Navbar />
        <div className="flex justify-start ">
                <ul className="mt-[10rem]">
                    <ActionList data={data}/>
                </ul>
        </div>
    </>
}
