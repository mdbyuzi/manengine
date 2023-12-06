"use client"
import { useState, useEffect } from "react";

function Productfetch({ from, pricehandle, itms }) {
    let [dataval, setdata] = useState();
    let [dataobj, setdataobj] = useState([]);
    function handlerchangetik(data, e) {
        let resnum = Number(data.replace(/\D/g, ""));
        pricehandle(resnum, e.currentTarget.checked);

    }
    useEffect(() => {
        fetch("http://localhost:3000/api/topics").then((data) => {
            return data.json()
        }).then((data) => {
            let dataval = data.topics
            switch (from) {
                case "Domain (Unrestricted Objects":
                    let datafilter = dataval.filter((itm) => {
                        return itm.type === "Domain"
                    })
                    setdata(datafilter)
                    break;
                case "User Objects":
                    let datafilter1 = dataval.filter((itm) => {
                        return itm.type === "User Objects"
                    })
                    setdata(datafilter1)
                    break;
                case "Domain (Unrestricted Objects) pro":
                    let datafilter2 = dataval.filter((itm) => {
                        return itm.type === "Domain pro"
                    })
                    setdata(datafilter2)
                    break;
            }
        })
    }, [])
    return <>
        <div>
            {dataval ? dataval.map((d, index) => {
                return <div key={index} className="px-2 flex w-full my-4">
                    <input onChange={(e) => {
                        console.log(d);
                        handlerchangetik(d.PRICE, e);
                        if (e.currentTarget.checked) {
                            itms(dataobj.push(d));
                        } else {
                            const index = dataobj.indexOf(d);
                            if (index > -1) {
                                itms(dataobj.splice(index, 1));
                            }
                        }
                        console.log(dataobj);
                    }
                    }
                        className="w-10" type="checkbox" />
                    <p className="mx-5">{d.DISCRIPTION}</p>

                    <p className="mx-2">{d.PRICE}  تومان</p>
                </div>
            }) : <div>helloworld</div>}

        </div>
    </>
}
export default Productfetch