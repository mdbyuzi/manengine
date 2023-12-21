import Navbar from "../component/navbar/navbar"
import "./price.css"
import Link from "next/link"
import ActionList from "../component/actionlist/actionlist.jsx"
async function getData() {
    // Fetch data from external API
    const res = await fetch(`https://localhost:3000/api/products`,{cache:"no-store"})
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
