import Image from "next/image";
import books from "@/app/images/Brand-New-Resources-2022.png"
import Navbar from "../components/navbar";

export default function Stories() {
  return (
    <div>
     <Navbar />
     <Image src={books} alt="" />
     <p className="text-center py-2">As part of a company-wide refresh, we are delighted to be able 
        to present a selection of brand new resources that will help you
         get your children on their reading and writing journeys. Be it
          our activity-packed Bumper Book of Phonics Fun or our beautifully 
          illustrated Finger Phonics Books, the exciting theatre of Jolly Plays 
          or our stunning, photographic Our World Readers, 
        our fantastic range is sure to be loved by teachers and children alike.</p>
   <div className="py-8 ml-36"> <a href="https://shop.jollylearning.co.uk/"><button className="bg-red-400 rounded ml-72 py-4 px-2">Dicover our brilliant range of Brand New and Refreshed Resoueces</button></a>
   </div>
    </div>
  );
}