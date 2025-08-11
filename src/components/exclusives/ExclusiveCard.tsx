"use client";

import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";
import Container from "../common/Container";
import Link from "next/link";
import { useState } from "react";
import { locations, properties } from "@/data";

export default function ExclusiveCard() {

  const [activeLocation, setActiveLocation] = useState(locations[0]);

  const activeProperty = properties.find(p => p.location === activeLocation);

  return (
    <Container className="pt-14 xs:pt-20 overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-2">
        <h2 className="text-3xl xss:text-4xl xs:text-5xl font-light tracking-wide uppercas font-nexa">
          Exclusives
        </h2>
        <p className="mt-2 text-xs xss:text-sm xs:text-base">
          Discover the outstanding range of Dubai properties only with JDS Elite Properties
        </p>
      </div>

      {/* Main content */}
      <div className="w-full pt-6">
        {/* Tabs */}
        <div className="flex border-b border-gray-700 mb-8 w-full overflow-x-auto scrollbar-hide">
          <div className="flex xsm:justify-center items-center gap-4 w-full min-w-[380px]">
            {locations.map(loc => (
              <button
                key={loc}
                onClick={() => setActiveLocation(loc)}
                className={`pb-2 text-sm xs:text-base md:text-lg font-nexa px-2 whitespace-nowrap ${activeLocation === loc
                  ? "border-b-2 border-primary !text-primary"
                  : "text-gray-400 hover:text-white"
                  }`}
              >
                {loc}
              </button>
            ))}
          </div>
        </div>


        {/* Card */}
        {activeProperty && (
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-4 xs:gap-8 items-start">


            <div className="flex flex-col justify-between h-full">
              <div className="grid grid-cols-2 gap-3 xs:gap-6">
                {activeProperty.features.map((feature, idx) => (
                  <div key={idx}>
                    <h4 className="uppercase tracking-wide border-gradient mb-2 font-nexa text-sm xsm:text-base">
                      {feature.title}
                    </h4>
                    <p className="text-gray-300 text-xs xsm:text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>

              <p className="hidden xs:block mt-6 text-gray-300 text-sm leading-relaxed">{activeProperty.description}</p>
              <p className="hidden xs:block mt-2 text-gray-300 text-sm">
                <span className="font-semibold">Handover date:</span> {activeProperty.handoverDate}
              </p>

              <div className="hidden xs:flex items-center justify-start gap-4 pt-2">
                <Link
                  href="/"
                  className="w-32 xsm:w-40 h-10 xsm:h-12 md:h-14 text-xs xsm:text-sm md:text-base bg-primary text-black flex justify-center items-center"
                >
                  Enquire Now
                </Link>
                <Link
                  href="/"
                  className="w-32 xsm:w-40 h-10 xsm:h-12 md:h-14 text-xs xsm:text-sm md:text-base bg-transparent border border-primary text-primary flex justify-center items-center"
                >
                  Learn More
                </Link>
              </div>
            </div>

            <div className="relative">
              <Image
                src={activeProperty.image}
                alt={activeProperty.title}
                width={700}
                height={800}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/100 to-black/30 p-4">
                <h3 className="text-lg font-medium">{activeProperty.title}</h3>
                <div className="flex items-center text-sm text-gray-300">
                  <CiLocationOn className="w-4 h-4 mr-1" /> {activeProperty.locationLabel}
                </div>
              </div>
            </div>
             <p className="block xs:hidden text-gray-300 text-xs  leading-relaxed">{activeProperty.description}</p>
            <p className="block xs:hidden text-gray-300 text-xs">
                <span className="font-semibold">Handover date:</span> {activeProperty.handoverDate}
              </p>
             <div className="flex xs:hidden items-center gap-4">
                <Link
                  href="/"
                  className="w-32 xsm:w-40 h-10 xsm:h-12 md:h-14 text-xs xsm:text-sm md:text-base bg-primary text-black flex justify-center items-center"
                >
                  Enquire Now
                </Link>
                <Link
                  href="/"
                  className="w-32 xsm:w-40 h-10 xsm:h-12 md:h-14 text-xs xsm:text-sm md:text-base bg-transparent border border-primary text-primary flex justify-center items-center"
                >
                  Learn More
                </Link>
              </div>
          </div>
        )}
      </div>
    </Container>
  );
}
