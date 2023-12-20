
import Image from "next/image";
import Navbar from "./component/navbar/navbar";
import Contenttab from "./component/contenttab/contenttab.jsx";
import Slidermain from "./component/slidermain/slidermain";
import Footer from "./component/footer/footer";
export default function Home() {
  
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
