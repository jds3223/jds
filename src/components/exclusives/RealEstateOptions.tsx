'use client';

import { useState } from 'react';
import Image from 'next/image';
import Container from '../common/Container';
import { options } from '@/data';



export default function RealEstateOptions() {
    const [hovered, setHovered] = useState('RENT'); // default image shown

    return (
        <Container className="flex flex-col md:flex-row min-h-[500px] pt-14 xs:pt-20 pb-20">
            {/* LEFT SECTION */}
            <div className="md:w-1/2 flex flex-col order-2 md:order-1 p-6 xs:p-10 justify-between gap-4 xs:gap-8 border-s border-b border-t-0 md:border-t border-r md:border-r-0 border-white/20">
                <div className="space-y-2 xs:space-y-4 text-2xl xsm:text-3xl xs:text-4xl sm:text-5xl font-light tracking-wide">
                    {options.map((opt) => (
                        <div
                            key={opt.label}
                            onMouseEnter={() => setHovered(opt.label)}
                            className="group cursor-pointer flex items-center gap-4 transition-all font-nexa"
                        >
                            <span
                                className={`${hovered === opt.label ? 'text-primary' : 'text-gray-500'
                                    } transition-colors`}
                            >
                                {opt.label}
                            </span>
                            <span
                                className={`transition-all duration-300 transform ${hovered === opt.label
                                    ? 'opacity-100 translate-x-4 !text-primary'
                                    : 'opacity-30 translate-x-0'
                                    }`}
                            >
                                →
                            </span>
                        </div>
                    ))}
                </div>
                <div className="relative h-20 xs:h-14">
                    {options.map((opt, index) => (
                        <p className={`absolute top-0 left-0 mb-0 w-full h-full text-sm xsm:text-base text-gray-400 max-w-md transition-opacity duration-500 leading-relaxed ${hovered === opt.label ? 'opacity-100' : 'opacity-0'
                            }`} key={index}>
                            {opt.describtion}
                        </p>
                    ))}
                </div>
            </div>

            {/* RIGHT IMAGE SECTION */}
            <div className="md:w-1/2 relative h-[400px] md:h-auto">
                {options.map((opt) => (
                    <Image
                        key={opt.label}
                        src={opt.image}
                        alt={opt.label}
                        fill
                        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${hovered === opt.label ? 'opacity-100' : 'opacity-0'
                            }`}
                    />
                ))}
            </div>
        </Container>
    );
}
