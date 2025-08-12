import Image from 'next/image'
import React from 'react'
import Container from '../common/Container'
import HeroSearch from '../search-form/HeroSearch'

const Hero = () => {
  return (
    <div className='relative h-screen'>
      <Image src='/assets/images/home/hero.webp' alt='hero image' fill className='inset-0 object-cover' />
      <div className='bg-background/50 w-full h-full absolute' />
      {/* <ContainerFluid className='relative flex items-end py-20 xs:items-center z-10 h-full w-full'>
            <div className='text-white space-y-4 text-center xs:text-start'>
              <h1 className='text-3xl xsm:text-4xl md:text-5xl lg:text-6xl font-nexa max-w-[450px] md:max-w-[600px] lg:max-w-[750px]'>Invest in Dubai real estate with JDS Elite Properties</h1>
              <p className='text-sm xsm:text-base md:text-lg'>We bring Due Diligence at Your service</p>
              <div className='flex items-center justify-center xs:justify-start  gap-4 pt-2'>
              <Link href="/" className='w-32 xsm:w-40 md:w-56 h-10 xsm:h-12 md:h-14 text-xs xsm:text-sm md:text-base bg-primary text-black flex justify-center items-center'>Leave a request</Link>
              <Link href="/" className='w-32 xsm:w-40 md:w-56 h-10 xsm:h-12 md:h-14 text-xs xsm:text-sm md:text-base bg-transparent border border-primary text-primary flex justify-center items-center'>Already an owner?</Link>
              </div>
            </div>
        </ContainerFluid> */}
      <Container className='relative flex items-end py-10 px-2 lg:items-center justify-center z-10 h-full w-full'>
        <div className='text-white text-center bg-background/10 py-5 px-3 md:p-10 rounded-2xl backdrop-blur border border-background drop-shadow-2xl drop-shadow-white/20 max-w-[360px] md:max-w-[700px] lg:max-w-[900px] mx-auto'>
          <h1 className='text-2xl xsm:text-3xl md:text-5xl lg:text-6xl font-nexa'>Invest in Dubai real estate with JDS Elite Properties</h1>
          <HeroSearch />
        </div>
      </Container>
    </div>
  )
}

export default Hero