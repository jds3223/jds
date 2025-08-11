"use client";

import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";
import Container from "../common/Container";
import Link from "next/link";

export default function ExclusiveCard() {
  return (
    <Container className="py-20">
      {/* Heading */}
      <div className="text-center mb-2">
      <h2 className="text-3xl font-light tracking-wide uppercas font-nexa">
        Exclusives
      </h2>
      <p className="mt-2">
        Discover the outstanding range of Dubai properties only with JDS Elite Properties
      </p>
      </div>

      {/* Main content */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Left Image */}
        <div className="relative">
          <Image
            src="/assets/images/exclusives/SEkrPeeIie.webp" // replace with your image path
            alt="The Terraces Marasi Drive"
            width={700}
            height={800}
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-black/0 p-4">
            <h3 className="text-lg font-medium">The Terraces Marasi Drive</h3>
            <div className="flex items-center text-sm text-gray-300">
              <CiLocationOn className="w-4 h-4 mr-1" /> Business Bay
            </div>
          </div>
        </div>

        {/* Right Info */}
        <div className="flex flex-col justify-between h-full">
          {/* Feature grid */}
          <div className="grid grid-cols-2 gap-6">
            {/* BUSINESS SPOT */}
            <div>
                <h4 className="uppercase tracking-wide border-gradient mb-2 font-nexa">
                  Business Spot
                </h4>
              <p className="text-gray-300 text-sm">
                Perfect residence for businessmen and executives
              </p>
            </div>

            {/* COMFORTABILITY */}
            <div>
              <h4 className="uppercase tracking-wide border-gradient mb-2 font-nexa">
                Comfortability
              </h4>
              <p className="text-gray-300 text-sm">
                Resort-style living amenities and premium services
              </p>
            </div>

            {/* PROPERTY RANGE */}
            <div>
              <h4 className="uppercase tracking-wide border-gradient mb-2 font-nexa">
                Property Range
              </h4>
              <p className="text-gray-300 text-sm">
                Range of apartments, duplexes, and penthouses
              </p>
            </div>

            {/* VIEW */}
            <div>
              <h4 className="uppercase tracking-wide border-gradient mb-2 font-nexa">
                View
              </h4>
              <p className="text-gray-300 text-sm">
                Breathtaking view of Burj Khalifa
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="mt-6 text-gray-300 text-sm leading-relaxed">
            Location on Marasi Drive provides quick access to main road arteries.
            20-minute walk to Burj Khalifa and the Dubai Mall. Jumeirah Beach and
            Dubai International Airport are just 15 minutes away.
          </p>
          <p className="mt-2 text-gray-300 text-sm">
            <span className="font-semibold">Handover date:</span> June 30, 2024
          </p>

          {/* Buttons */}
          <div className='flex items-center justify-center xs:justify-start  gap-4 pt-2'>
            <Link href="/" className='w-32 xsm:w-40 h-10 xsm:h-12 md:h-14 text-xs xsm:text-sm md:text-base bg-primary text-black flex justify-center items-center'>Enquire Now</Link>
            <Link href="/" className='w-32 xsm:w-40 h-10 xsm:h-12 md:h-14 text-xs xsm:text-sm md:text-base bg-transparent border border-primary text-primary flex justify-center items-center'>Learn More</Link>
          </div>
        </div>
      </div>
    </Container>
  );
}
