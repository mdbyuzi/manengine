"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function Page() {
  let [email, setemail] = useState();
  let [password, setpassword] = useState();
  let [error, seterror] = useState();
  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      console.log(res);

      if (res.status===200) {
        alert("موفقیت امیز بود")
      }else{
        alert("موفقیت امیز نبود")

      }
    } catch (error) {
      seterror(error.message);
      console.log(error);
    }
  };
  return (
    <>
      <div className="p-4 flex-col">
        <input
          placeholder="em:"
          className="p-4 border"
          type="email"
          onChange={(e) => setemail(e.currentTarget.value)}
          value={email}
        />
        <input
          placeholder="ps:"
          className="p-4 border"
          type="password"
          onChange={(e) => {
            setpassword(e.currentTarget.value);
          }}
          value={password}
        />
        <input onClick={handlesubmit} className="p-4 border" type="submit" />
        {error}
      </div>
    </>
  );
}
