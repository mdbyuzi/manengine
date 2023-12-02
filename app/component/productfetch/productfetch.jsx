"use client"
import { useState, useEffect } from "react";

function Productfetch({ from, pricehandle ,itms }) {
    let [dataval, setdata] = useState();
    let [dataobj,setdataobj]=useState([]);
    function handlerchangetik(data, e) {
        let resnum = Number(data.replace(/\D/g, ""));
        pricehandle(resnum, e.currentTarget.checked);

    }
    useEffect(() => {
        fetch("http://localhost/testbackend/views/apse").then((data) => {
            return data.json()
        }).then((data) => {
            let dataval = data
            if (from === "Domain (Unrestricted Objects") {
                let result = dataval.splice(0, 9)
                setdata(result)
                console.log(result);

            } else if (from === "User Objects") {
                let result = dataval.splice(10, 22)
                setdata(result)
                console.log(result);

            } else if (from === "Domain (Unrestricted Objects) pro") {
                let result = dataval.splice(23, 33)
                setdata(result)
                console.log(result);

            } else if (from === "User Objects pro") {
                let result = dataval.splice(34, 46)
                setdata(result)
                console.log(result);
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
                        if(e.currentTarget.checked){ 
                            itms(dataobj.push(d));
                        }else{
                            const index=dataobj.indexOf(d);
                            if(index>-1){
                                itms(dataobj.splice(index,1));
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