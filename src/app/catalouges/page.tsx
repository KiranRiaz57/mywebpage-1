import Image from "next/image";
import catalouge1 from "@/app/images/2024-catalog-cover-232x300.png"
import catalouge2 from "@/app/images/2024-catalogue-cover-212x300.png"
import catalouge3 from "@/app/images/Jolly-Music-Catalogue-2024-211x300.png"
import Navbar from "../components/navbar";

export default function Catalogues() {
  return (
    <div>
      <Navbar />
      <div>
     <h1 className="font-extrabold text-[35px] text-center text-purple-500">
     Jolly Phonics Catalogue
     </h1>
     <p className="text-center w-30 ml-52 mr-20">All of our catalogues are hyperlinked to our online shop. Simply click 
      on the ISBN of any resource within any of the catalogues 
      to find out more information, to browse preview pages and to purchase.
      Our complete UK Catalogue is filled with resources to help your children learn to read and write.
      For your free printed copy of the UK Jolly Phonics Catalogue, </p>
      </div>
     
     <div className="flex ml-72">
          <Image src={catalouge1} alt="" />
          <Image src={catalouge2} alt="" />
          <Image src={catalouge3} alt="" />
          </div>
      <div className="py-8 ml-56" >
        <a href="https://jolly2.s3.amazonaws.com/Catalogues%20and%20Guide/Jolly%20Phonics%20Catalogue.pdf">
        <button className="bg-red-400 rounded ml-72 py-4 px-2" >Download Uk Catalouge Here</button></a>
     
      </div>
     
    </div>
  );
}