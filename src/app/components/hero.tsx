import Image from "next/image";


export default function Hero() {
  return (
    <div>
      <div className="py-[140px] px-[220px] top-[92px] bg-[#fcf7d1] text-white">
         <div className="w-[656px] h-[361px]">
         <div className="w-[656px] h-[238px]">
            <h2 className="font-bold text-[64px] leading-[77.4px] tracking-[-0.02em] text-purple-600">Bringing literacy to life!</h2>
           <p className="text-slate-800">For over 30 years, Jolly Learning has been a leading provider of
             phonics resources for early years education. Our flagship programme, 
             Jolly Phonics, is actively used in over 150 countries worldwide,
             helping children to become confident readers and writers.
           </p>
         </div>
         </div>
        </div>
    </div>
  );
}
