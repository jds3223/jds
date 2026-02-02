import { realEstateInfo } from "@/data";
import Image from "next/image";
import Container from "../common/Container";
import Link from "next/link";

export default function RealEstateExperts() {
   return (
      <Container className="pt-14 xs:pt-20 pb-20">
         <div className="flex flex-col lg:flex-row items-center justify-between gap-6 xs:gap-10">
            {/* Text Content */}
            <div className="lg:w-1/2 flex flex-col gap-2 xs:gap-6">
               <h2 className="text-2xl xsm:text-3xl md:text-4xl font-light font-nexa">
                  {realEstateInfo.title}
               </h2>
               <p className="text-sm xsm:text-base">{realEstateInfo.description}</p>
               <p className="text-sm xsm:text-base">{realEstateInfo.paragraph}</p>
               <p className="text-sm xsm:text-base">{realEstateInfo.implementation}</p>

               <Link
                  href="/"
                  className="w-32 xsm:w-40 h-10 xsm:h-12 md:h-14 text-xs xsm:text-sm md:text-base bg-primary text-black flex justify-center items-center"
               >
                  Enquire Now
               </Link>
            </div>
            <div className="lg:w-1/2 relative w-full">
               <Image
                  src={realEstateInfo.image}
                  alt="Real Estate Experts"
                  width={800}
                  height={600}
                  className="rounded-lg"
               />
            </div>
         </div>

         {/* Stats */}
         <div className="mt-6 xs:mt-16 border-t border-white/30 pt-6 xs:pt-10 grid grid-cols-3 justify-around text-center gap-2">
            {realEstateInfo.stats.map((stat, index) => (
               <div key={index}>
                  <p className="text-xl xs:text-2xl sm:text-3xl font-semibold !mb-2">{stat.value}</p>
                  <p className="text-xs sm:text-sm text-gray-400 md:mt-2 uppercase">
                     {stat.label}
                  </p>
               </div>
            ))}
         </div>
      </Container>
   );
}
