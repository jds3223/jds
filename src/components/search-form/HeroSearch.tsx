'use client'
import React from 'react'
import dynamic from 'next/dynamic'

// Dynamically import components (no SSR so they only load client-side)
const PropertySearchBar = dynamic(() => import('./SearchForm'))
const SearchFormMobile = dynamic(() => import('./SearchFormMobile'))

const HeroSearch = () => {
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    // Check on client side only
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768) // Adjust breakpoint as needed
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)

    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  return isMobile ? <SearchFormMobile /> : <PropertySearchBar />
}

export default HeroSearch
