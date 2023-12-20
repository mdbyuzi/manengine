"use client";
import { useSession } from "next-auth/react";
import PostInputAction from "../component/postaction/PostInputaction";
import { useEffect, useState } from "react";
export default function Page() {
  let [datas, setdatas] = useState();
  useEffect(() => {
    fetch("https://adaudit.ir/api/topics")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setdatas(data.topic);
        console.log(datas.type);
      });
  }, []);
  const { data: session, status } = useSession();
  if (status === "locading") {
    return <p>Loading...</p>;
  }
  if (status === "unauthenticated") {
    return <p>Access Denied</p>;
  }
  return (
    <div className=" bg-gradient-to-r from-green to-   bg-gray h-screen flex flex-col text-end justify-end font-vazir w-full ltr:mr-3 p-5 ">
      <h1 className="my-20 text-4xl text-white">سلام به پنل ادمین خوش امدید</h1>
      <ul>
        {datas?datas.map((items) => {
          return (
            <>
              <li>
                <div>
                  <p>{items.DISCRIPTION}</p>
                  <p>{items.PRICE}</p>
                </div>
              </li>
            </>
          );
        }):""}
      </ul>
      <PostInputAction method="post" />
      <PostInputAction method="delete" />
    </div>
  );
}
