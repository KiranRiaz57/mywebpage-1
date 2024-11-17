import Image from "next/image";
import logo from "@/app/images/logo.png"
import Link from "next/link";
export default function Navbar() {
  return (
    <div className="width: 1322px;
height: 91px;
gap: 324px;
opacity: 0px;
bg-yellow-200
"
 >      <div className="w-[190px] h-[20px]">
        <Image src={logo} alt="" />
       </div>
        <div className="w-[737px] h-[80px] flex justify-between items-center">
          <div className="w-[190px] ">
        <Image src={logo} alt="" />
          </div>
      <div className="w-[549px] h-[23px]">
        <ul className="flex justify-between text-center text-black ml-80 gap-14">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/stories">Stories</Link></li>
            <li><Link href="/poems">Poems</Link></li>
            <li><Link href="/catalouges">Catalouges</Link></li>
            <li><Link href="/samplelesson">SampleLesson</Link> </li>
        </ul>
      </div>
      <div className="bg-orange-300 px-8 ml-[450px]"><button className="">login</button></div>
      </div>
    </div>
  );
}
