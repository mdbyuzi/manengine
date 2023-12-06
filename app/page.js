"use client"
import Image from "next/image";
import Navbar from "./component/navbar/navbar";
import Contenttab from "./component/contenttab/contenttab.jsx";
import Slidermain from "./component/slidermain/slidermain";
import Footer from "./component/footer/footer";

import { useRouter } from "next/navigation";
import{ InferGetStaticPropsType, GetStaticProps } from 'next'

export default function Home({repo}) {
  
  return (
    <>
      <div className="flex flex-col">
        <Navbar  />
        <Contenttab />
        <Slidermain />
        <Footer />
      </div>
    </>
  );
}
