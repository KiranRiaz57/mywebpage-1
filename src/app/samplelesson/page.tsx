import Image from "next/image";
import sample from '@/app/images/Phonics-Sample-Lesson-2023.jpg'
import grammar from "@/app/images/Grammar-Spelling-Punctuation-Sample-Lesson-2021-1.jpg"
import Navbar from "../components/navbar";
export default function Samplelesson() {
  return (
    <div className="bg-yellow-100">
     <Navbar />
     <div className="font-bold text-[25px] leading-[54.4px] tracking-[-0.02em] text-purple-600 text-center">Our phonics sample lesson is filled with fully annotated information—lesson plans, detailed teacher’s notes and photocopiable worksheets and resources—to show you just how easy and fun it is to use Jolly Phonics.

You can download the Phonics Sample Lesson by pressing the buttons below,
 or view it on screen by clicking on

the Issuu files to the right.</div>
<div className="flex  max-w-96 h-auto justify-evenly ml-52">
     <Image src={sample} alt="" />
     
     <Image src={grammar} alt="" />
     
     </div>


    <div className="py-8 ml-36" >
     <a href="https://jolly2.s3.amazonaws.com/Catalogues%20and%20Guide/Phonics%20Sample%20Lesson.pdf">
     <button className="bg-red-400 rounded ml-72 py-4 px-2" >Download UK Phonics Sample Lesson</button></a>
    </div>
    </div> 
   
  );
}