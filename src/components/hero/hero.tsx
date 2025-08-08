import Image from 'next/image'
import React from 'react'
import ContainerFluid from '../common/ContainerFluid'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className='relative h-screen'>
        <Image src='/assets/images/home/hero.webp' alt='hero image' fill className='inset-0 object-cover' sizes='(max-width: 678px) 40vw, 70vw' />
        <div className='bg-background/60 xs:bg-background/50 w-full h-full absolute' />
        <ContainerFluid className='relative flex items-end py-20 xs:items-center z-10 h-full w-full'>
            <div className='text-white space-y-4 text-center xs:text-start'>
              <h1 className='text-3xl xsm:text-4xl md:text-5xl lg:text-6xl font-nexa max-w-[450px] md:max-w-[600px] lg:max-w-[750px]'>Invest in Dubai real estate with JDS Elite Properties</h1>
              <p className='text-sm xsm:text-base md:text-lg'>We bring Due Diligence at Your service</p>
              <div className='flex items-center justify-center xs:justify-start  gap-4 pt-2'>
              <Link href="/" className='w-32 xsm:w-40 md:w-56 h-10 xsm:h-12 md:h-14 text-xs xsm:text-sm md:text-base bg-primary text-black flex justify-center items-center'>Leave a request</Link>
              <Link href="/" className='w-32 xsm:w-40 md:w-56 h-10 xsm:h-12 md:h-14 text-xs xsm:text-sm md:text-base bg-transparent border border-primary text-primary flex justify-center items-center'>Already an owner?</Link>
              </div>
            </div>
        </ContainerFluid>
    </div>
  )
}

export default Hero