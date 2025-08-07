import Image from 'next/image'
import React from 'react'
import ContainerFluid from '../common/ContainerFluid'

const Hero = () => {
  return (
    <div className='relative h-screen'>
        <Image src='/assets/images/home/hero.webp' alt='hero image' fill className='inset-0 object-cover' sizes='(max-width: 678px) 40vw, 70vw' />
        <div className='bg-background/50 w-full h-full absolute' />
        <ContainerFluid className='relative flex items-center z-10 h-full w-full'>
            <div className='text-white'>hello</div>
        </ContainerFluid>
    </div>
  )
}

export default Hero