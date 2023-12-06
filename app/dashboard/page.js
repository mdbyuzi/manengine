"use client";
import { useSession } from "next-auth/react";
import PostInputAction from "../component/postaction/PostInputaction"
export default function Page() {
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
      <PostInputAction method="post"/>
      <PostInputAction method="delete"/>
    </div>
  );
}
